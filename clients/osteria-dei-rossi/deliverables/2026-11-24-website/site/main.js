/*!
 * Osteria dei Rossi: motion and interaction (main.js)
 *
 * One plain script for every page, loaded with defer after gsap, ScrollTrigger and Lenis.
 * - Every block looks for its elements first and leaves the page alone when they are missing.
 * - If one of the three libraries is missing, or anything here throws, <html> gets the class
 *   "motion-off": motion.css then shows everything and only the plain behaviours stay
 *   (header states, phone menu, booking bar, rail, anchor links).
 * - With reduced motion nothing is animated: no intro, no smooth scroll, no scroll triggers.
 *
 * Hooks in the HTML
 *   #intro (.intro__svg with the porta-* ids, .intro__label), #intro-skip
 *   .site-header (is-solid, is-hidden), #menu-toggle, #menu-panel
 *   .rail, .rail__line, .rail__dot, .rail__stops [data-stop] (is-active, is-on-dark)
 *   .cta-bar (is-visible); sections #porta ... #prenota
 *   [data-reveal], [data-reveal-group], [data-mask], [data-arch-line], [data-draw],
 *   [data-draw="map"] with the mappa-* ids and .map__label, [data-parallax], a[href^="#"]
 *   optional: [data-tone="dark|light"], data-label-open / data-label-close on #menu-toggle
 * Classes set on <html>
 *   motion-ready, motion-off, intro-playing, intro-done, menu-open, menu-closing, header-hidden
 * Custom property set on <html>: --odr-header-h (height of the fixed header in px)
 * Session storage: "odr-intro" (the gate intro has been shown in this session)
 */
(function () {
  'use strict';

  const win = window;
  const doc = document;
  const root = doc.documentElement;
  if (!root || !root.classList || typeof doc.querySelectorAll !== 'function') {
    return;
  }

  /* ---------- Settings ---------- */

  const SESSION_KEY = 'odr-intro';
  const MQ_MOTION = '(prefers-reduced-motion: no-preference)';
  const MQ_PHONE = '(max-width: 719.98px)';
  const MQ_RAIL = '(min-width: 1100px)';
  const SOLID_AFTER = 80; // px of scroll before the header turns solid
  const PROBE = 0.4; // share of the viewport height at which a stop becomes the current one
  const MASK_BLEED = 20; // px around a masked photo that uncover with it (offset hairline frames)
  const INTRO_LATEST_START = 4000; // ms after navigation; later than this the intro is not started
  const GEOMETRY = 'path,line,polyline,polygon,circle,ellipse,rect';
  const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),' +
    'textarea:not([disabled]),summary,[tabindex]:not([tabindex="-1"])';

  /* The arch opening of porta-ovile.svg in its own units (two arcs of radius R meet at the apex). */
  const ARCH = { cx: 800, cy: 690, left: 660, right: 940, top: 450, bottom: 860, spring: 620, radius: 173.2, leftArcX: 833.2, rightArcX: 766.8 };
  const DOOR_LEFT_ORIGIN = '660 650';
  const DOOR_RIGHT_ORIGIN = '940 650';
  const INTRO_GROUPS = ['porta-gate', 'porta-arch', 'porta-walls', 'porta-forework', 'porta-ground'];
  const MAP_PHASES = [
    { ids: ['mappa-mura', 'mappa-porte'], at: 0, duration: 0.9 },
    { ids: ['mappa-vie', 'mappa-luoghi'], at: 0.55, duration: 0.7 },
    { ids: ['mappa-via-dei-rossi', 'mappa-percorso', 'mappa-osteria'], at: 1.1, duration: 0.6 }
  ];

  /* ---------- Small helpers ---------- */

  const qs = (selector, scope) => (scope || doc).querySelector(selector);
  const qsa = (selector, scope) => Array.prototype.slice.call((scope || doc).querySelectorAll(selector));
  const byId = (id) => (id ? doc.getElementById(id) : null);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const round2 = (value) => Math.round(value * 100) / 100;
  const scrollTop = () => win.scrollY || win.pageYOffset || 0;
  const media = (query) => (typeof win.matchMedia === 'function' ? win.matchMedia(query) : null);
  const matches = (query) => {
    const list = media(query);
    return !!(list && list.matches);
  };
  const inDocumentOrder = (a, b) => (a.compareDocumentPosition(b) & 4 ? -1 : 1);

  /* Elements that have already played. Kept across a teardown so a page restored from the
     back/forward cache does not replay what the visitor has seen. */
  const played = new WeakSet();

  /* State of the current run; null between pagehide and the next start. */
  let S = null;

  function listen(target, type, handler, options) {
    if (!S || !target || typeof target.addEventListener !== 'function') {
      return;
    }
    const opts = options || false;
    target.addEventListener(type, handler, opts);
    S.cleanups.push(() => target.removeEventListener(type, handler, opts));
  }

  /* ---------- Scroll-linked furniture: header, booking bar, rail ---------- */

  function setupScrollUi() {
    const rail = qs('.rail');
    const y = scrollTop();
    const ui = {
      header: qs('.site-header'),
      bar: qs('.cta-bar'),
      rail,
      line: rail ? qs('.rail__line', rail) : null,
      dot: rail ? qs('.rail__dot', rail) : null,
      stops: [],
      zones: [],
      wide: null,
      railTop: 0,
      railHeight: 0,
      solid: null,
      hidden: false,
      barOn: null,
      active: -1,
      dotDark: null,
      lastY: y,
      turnY: y,
      dir: 0,
      headerHeight: -1,
      heroEnd: 0,
      bookTop: Infinity,
      bookEnd: Infinity,
      viewport: 0,
      max: 1
    };
    if (rail) {
      ui.stops = qsa('[data-stop]', rail)
        .map((li) => ({ li, section: byId(li.getAttribute('data-stop')), top: 0, at: 0, dark: null }))
        .filter((stop) => stop.section);
    }
    S.ui = ui;
    S.y = y;

    if (ui.header) {
      listen(ui.header, 'focusin', () => setHeaderHidden(false));
      if (typeof win.ResizeObserver === 'function') {
        const observer = new win.ResizeObserver(publishHeaderHeight);
        observer.observe(ui.header, { box: 'border-box' }); // the solid header changes its padding
        S.cleanups.push(() => observer.disconnect());
      }
    }
  }

  function publishHeaderHeight() {
    const ui = S && S.ui;
    if (!ui || !ui.header) {
      return;
    }
    const height = ui.header.offsetHeight;
    if (height !== ui.headerHeight) {
      ui.headerHeight = height;
      root.style.setProperty('--odr-header-h', height + 'px');
    }
  }

  function setHeaderHidden(hidden) {
    const ui = S && S.ui;
    if (!ui || !ui.header || ui.hidden === hidden) {
      return;
    }
    ui.hidden = hidden;
    ui.header.classList.toggle('is-hidden', hidden);
    root.classList.toggle('header-hidden', hidden);
  }

  /* true = dark surface, false = light surface, null = no surface of its own */
  function surfaceTone(element) {
    const tone = element.getAttribute('data-tone');
    if (tone === 'dark') {
      return true;
    }
    if (tone === 'light') {
      return false;
    }
    const parts = (win.getComputedStyle(element).backgroundColor || '').match(/[\d.]+/g);
    if (!parts || parts.length < 3 || (parts.length > 3 && parseFloat(parts[3]) < 0.5)) {
      return null;
    }
    const luminance = (0.2126 * parts[0] + 0.7152 * parts[1] + 0.0722 * parts[2]) / 255;
    return luminance < 0.45;
  }

  /* The nearest ancestor that clips its content: the box a parallax photo moves in. */
  function clipBox(element) {
    let node = element.parentElement;
    for (let depth = 0; node && node !== doc.body && depth < 5; depth += 1) {
      const overflow = win.getComputedStyle(node).overflowY;
      if (overflow === 'hidden' || overflow === 'clip') {
        return node;
      }
      node = node.parentElement;
    }
    return element.parentElement;
  }

  /* Vertical bands of the page under the rail, each dark or light, in document order
     (an inner block comes after its section and so wins). Read once per refresh. */
  function readZones(y, x) {
    const forcedDark = new Set();
    const candidates = new Set();
    const addWithChildren = (element) => {
      if (!element) {
        return;
      }
      candidates.add(element);
      Array.prototype.forEach.call(element.children, (child) => candidates.add(child));
    };
    const hero = byId('porta');
    if (hero) {
      forcedDark.add(hero);
      candidates.add(hero);
    }
    qsa('[data-parallax]').forEach((image) => {
      const box = clipBox(image);
      if (box) {
        forcedDark.add(box);
        candidates.add(box);
      }
    });
    qsa('main > *, body > footer, [data-tone]').forEach(addWithChildren);
    S.ui.stops.forEach((stop) => addWithChildren(stop.section));

    /* A photo with a scrim is dark whatever its own background says, and so is what lies on it. */
    const onPhoto = (element) => {
      let found = false;
      forcedDark.forEach((box) => {
        if (box !== element && box.contains(element)) {
          found = true;
        }
      });
      return found;
    };
    const zones = [];
    Array.from(candidates).sort(inDocumentOrder).forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.height < 1 || rect.left > x || rect.right < x) {
        return;
      }
      const marked = element.hasAttribute('data-tone');
      if (!marked && onPhoto(element)) {
        return;
      }
      const dark = !marked && forcedDark.has(element) ? true : surfaceTone(element);
      if (dark !== null) {
        zones.push({ top: rect.top + y, bottom: rect.bottom + y, dark });
      }
    });
    return zones;
  }

  function toneAt(y) {
    const zones = S.ui.zones;
    let dark = false;
    for (let i = 0; i < zones.length; i += 1) {
      if (y >= zones[i].top && y < zones[i].bottom) {
        dark = zones[i].dark;
      }
    }
    return dark;
  }

  /* All layout reads happen here (start, load, fonts, resize, refresh), never while scrolling. */
  function measure() {
    if (!S || !S.ui) {
      return;
    }
    const ui = S.ui;
    const y = scrollTop();
    const hero = byId('porta');
    const book = byId('prenota');
    let wide = false;

    S.y = y;
    S.phone = matches(MQ_PHONE);
    ui.viewport = win.innerHeight || root.clientHeight || 0;
    ui.max = Math.max(1, root.scrollHeight - ui.viewport);
    ui.heroEnd = hero ? hero.getBoundingClientRect().bottom + y : ui.viewport * 0.6;
    if (book) {
      const rect = book.getBoundingClientRect();
      ui.bookTop = rect.top + y;
      ui.bookEnd = rect.bottom + y;
    } else {
      ui.bookTop = Infinity;
      ui.bookEnd = Infinity;
    }
    if (ui.rail) {
      const probe = ui.viewport * PROBE;
      wide = matches(MQ_RAIL);
      ui.stops.forEach((stop) => {
        stop.top = stop.section.getBoundingClientRect().top + y;
        stop.at = clamp((stop.top - probe) / ui.max, 0, 1);
      });
      if (wide) {
        const rect = ui.rail.getBoundingClientRect();
        ui.railTop = rect.top;
        ui.railHeight = rect.height;
        ui.zones = readZones(y, rect.left);
      } else {
        ui.zones = [];
      }
    }
    const headerHeight = ui.header ? ui.header.offsetHeight : 0;

    /* Writes */
    if (ui.header && headerHeight !== ui.headerHeight) {
      ui.headerHeight = headerHeight;
      root.style.setProperty('--odr-header-h', headerHeight + 'px');
    }
    if (ui.rail) {
      if (wide !== ui.wide) {
        ui.wide = wide;
        ui.dotDark = null;
        if (ui.line) {
          ui.line.style.transform = '';
        }
        if (ui.dot) {
          ui.dot.style.transform = '';
          ui.dot.classList.remove('is-on-dark');
        }
        ui.stops.forEach((stop) => {
          stop.dark = null;
          stop.li.classList.remove('is-on-dark');
        });
      }
      ui.stops.forEach((stop) => {
        stop.li.style.top = (stop.at * 100).toFixed(3) + '%';
      });
    }
    if (!S.phone) {
      setHeaderHidden(false);
    }
    flush();
  }

  /* Writes only. Runs at most once per frame, from the gsap ticker or a single rAF. */
  function flush() {
    if (!S || !S.ui) {
      return;
    }
    const ui = S.ui;
    const y = S.y;
    S.dirty = false;

    if (ui.header) {
      const solid = y > SOLID_AFTER;
      if (solid !== ui.solid) {
        ui.solid = solid;
        ui.header.classList.toggle('is-solid', solid);
      }
      const delta = y - ui.lastY;
      if (delta !== 0) {
        const dir = delta > 0 ? 1 : -1;
        if (dir !== ui.dir) {
          ui.dir = dir;
          ui.turnY = ui.lastY;
        }
        const menuOpen = !!(S.menu && S.menu.open);
        if (!S.phone || !S.motionPref || menuOpen || y <= Math.max(ui.headerHeight, SOLID_AFTER)) {
          setHeaderHidden(false);
        } else if (dir > 0 && y - ui.turnY > 24) {
          setHeaderHidden(true);
        } else if (dir < 0 && ui.turnY - y > 8) {
          setHeaderHidden(false);
        }
      }
    }
    ui.lastY = y;

    if (ui.bar) {
      const overBooking = y + ui.viewport > ui.bookTop && y < ui.bookEnd;
      const on = y >= ui.heroEnd - 1 && !overBooking;
      if (on !== ui.barOn) {
        ui.barOn = on;
        ui.bar.classList.toggle('is-visible', on);
      }
    }

    if (ui.rail) {
      const progress = clamp(y / ui.max, 0, 1);
      if (ui.wide) {
        if (ui.dot) {
          ui.dot.style.transform = 'translate3d(0,' + (progress * ui.railHeight).toFixed(2) + 'px,0)';
        }
      } else if (ui.line) {
        ui.line.style.transform = 'scaleX(' + progress.toFixed(4) + ')';
      }
      const probeLine = y + ui.viewport * PROBE;
      let active = ui.stops.length ? 0 : -1;
      for (let i = 0; i < ui.stops.length; i += 1) {
        if (ui.stops[i].top <= probeLine) {
          active = i;
        }
      }
      if (active !== ui.active) {
        if (ui.stops[ui.active]) {
          ui.stops[ui.active].li.classList.remove('is-active');
        }
        if (ui.stops[active]) {
          ui.stops[active].li.classList.add('is-active');
        }
        ui.active = active;
      }
      if (ui.wide) {
        ui.stops.forEach((stop) => {
          const dark = toneAt(y + ui.railTop + stop.at * ui.railHeight);
          if (dark !== stop.dark) {
            stop.dark = dark;
            stop.li.classList.toggle('is-on-dark', dark);
          }
        });
        if (ui.dot) {
          const dark = toneAt(y + ui.railTop + progress * ui.railHeight);
          if (dark !== ui.dotDark) {
            ui.dotDark = dark;
            ui.dot.classList.toggle('is-on-dark', dark);
          }
        }
      }
    }

    /* At the very end of the page some start lines can no longer be reached: play what is left. */
    if (S.pending && S.pending.size && y >= ui.max - 2 && !(S.intro && S.intro.playing)) {
      Array.from(S.pending).forEach((job) => job());
    }
  }

  function onScroll() {
    if (!S) {
      return;
    }
    S.y = scrollTop();
    S.dirty = true;
    if (S.intro && S.intro.playing && S.y > 8) {
      skipIntro();
    }
    if (!S.ticking && !S.frame) {
      S.frame = win.requestAnimationFrame(() => {
        if (S) {
          S.frame = 0;
          if (S.dirty) {
            flush();
          }
        }
      });
    }
  }

  /* ---------- Phone menu ---------- */

  const isRendered = (element) => !!(element && element.getClientRects().length);

  function setupMenu() {
    const toggle = byId('menu-toggle');
    const panel = byId('menu-panel');
    if (!toggle || !panel) {
      return;
    }
    S.menu = { toggle, panel, open: false, inerted: [], closeTimer: 0 };
    panel.setAttribute('data-lenis-prevent', ''); // the open panel keeps its own native scroll
    listen(toggle, 'click', () => setMenu(!S.menu.open));
    listen(panel, 'click', (event) => {
      const link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
      if (link && S.menu.open) {
        setMenu(false, false);
      }
    });
    listen(doc, 'keydown', onMenuKey);
  }

  function setMenu(open, restoreFocus) {
    const menu = S && S.menu;
    if (!menu || menu.open === open) {
      return;
    }
    menu.open = open;
    win.clearTimeout(menu.closeTimer);
    root.classList.toggle('menu-open', open);
    root.classList.toggle('menu-closing', !open); // lets motion.css fade the panel out
    menu.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    const label = menu.toggle.getAttribute(open ? 'data-label-close' : 'data-label-open');
    if (label) {
      menu.toggle.setAttribute('aria-label', label);
    }
    if (open) {
      setHeaderHidden(false);
      /* Everything outside the header is taken out of reach while the panel is open. */
      let node = S.ui && S.ui.header && S.ui.header.contains(menu.panel) ? S.ui.header : menu.panel;
      while (node && node !== doc.body && node.parentElement) {
        const keep = node;
        Array.prototype.forEach.call(node.parentElement.children, (sibling) => {
          if (sibling !== keep && !sibling.contains(menu.toggle) && !sibling.inert && sibling.tagName !== 'SCRIPT') {
            sibling.inert = true;
            menu.inerted.push(sibling);
          }
        });
        node = node.parentElement;
      }
      if (S.lenis) {
        S.lenis.stop();
      }
    } else {
      menu.inerted.forEach((element) => {
        element.inert = false;
      });
      menu.inerted = [];
      menu.closeTimer = win.setTimeout(() => root.classList.remove('menu-closing'), 450);
      if (S.lenis && !(S.intro && S.intro.playing)) {
        S.lenis.start();
      }
      if (restoreFocus !== false && typeof menu.toggle.focus === 'function') {
        menu.toggle.focus({ preventScroll: true });
      }
    }
  }

  function onMenuKey(event) {
    const menu = S && S.menu;
    if (!menu || !menu.open) {
      return;
    }
    if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      setMenu(false);
      return;
    }
    if (event.key !== 'Tab') {
      return;
    }
    const items = qsa(FOCUSABLE, menu.panel).filter(isRendered);
    if (isRendered(menu.toggle)) {
      items.push(menu.toggle);
    }
    items.sort(inDocumentOrder);
    if (!items.length) {
      event.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const current = doc.activeElement;
    if (items.indexOf(current) === -1) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && current === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && current === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ---------- Smooth scroll and anchor links ---------- */

  function setupSmoothScroll() {
    if (!S.motion) {
      return;
    }
    const lenis = new S.Lenis({ lerp: 0.12, wheelMultiplier: 1.05, smoothWheel: true, syncTouch: false, autoRaf: false });
    lenis.on('scroll', S.ST.update);
    S.lenis = lenis;
    /* The one loop of the page: Lenis, then the scroll-linked classes and transforms. */
    S.tick = (time) => {
      lenis.raf(time * 1000);
      if (S && S.dirty) {
        flush();
      }
    };
    S.ticking = true;
    S.gsap.ticker.add(S.tick);
    S.gsap.ticker.lagSmoothing(0);
  }

  function focusTarget(target) {
    if (!target || typeof target.focus !== 'function') {
      return;
    }
    if (!target.hasAttribute('tabindex') && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/.test(target.tagName)) {
      target.setAttribute('tabindex', '-1');
      target.setAttribute('data-anchor-target', '');
    }
    try {
      target.focus({ preventScroll: true });
    } catch (error) {
      /* an engine without focus options: leave the focus where it is rather than jump */
    }
  }

  /* Room left above an anchor target. The layout's own scroll-padding-top (on <html>) and
     scroll-margin-top (on the target) are used when set; otherwise the height of the fixed
     header. On phones on the way down the header slides away, so no room is kept for it. */
  function anchorOffset(target, rectTop) {
    const ui = S.ui;
    const padding = parseFloat(win.getComputedStyle(root).scrollPaddingTop) || 0;
    const margin = parseFloat(win.getComputedStyle(target).scrollMarginTop) || 0;
    if (margin > 0) {
      return padding + margin;
    }
    if (S.phone && S.motionPref && ui && ui.header && rectTop > 24) {
      return 0;
    }
    return padding > 0 ? padding : (ui ? Math.max(0, ui.headerHeight) : 0);
  }

  function scrollToTarget(target) {
    const rectTop = target ? target.getBoundingClientRect().top : 0;
    const top = target ? Math.max(0, Math.round(rectTop + scrollTop() - anchorOffset(target, rectTop))) : 0;
    if (S.lenis) {
      /* A number, not the element: Lenis would subtract scroll-padding and scroll-margin again. */
      S.lenis.scrollTo(top, { duration: 1, force: true });
    } else {
      try {
        win.scrollTo({ top, behavior: S.motionPref ? 'smooth' : 'instant' });
      } catch (error) {
        win.scrollTo(0, top);
      }
    }
    focusTarget(target);
  }

  function setupAnchors() {
    listen(doc, 'click', (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = event.target && event.target.closest ? event.target.closest('a[href^="#"]') : null;
      if (!link || (S.intro && S.intro.playing)) {
        return;
      }
      const hash = link.getAttribute('href');
      const toTop = hash === '#' || hash === '#top';
      let target = null;
      if (!toTop) {
        try {
          target = byId(decodeURIComponent(hash.slice(1)));
        } catch (error) {
          target = byId(hash.slice(1));
        }
        if (!target) {
          return; // unknown target: the browser decides
        }
      }
      event.preventDefault();
      if (S.menu && S.menu.open) {
        setMenu(false, false);
      }
      scrollToTarget(target);
      if (!toTop && win.history && typeof win.history.pushState === 'function' && hash !== win.location.hash) {
        try {
          win.history.pushState(null, '', hash);
        } catch (error) {
          /* file:// in some browsers: the scroll has happened, the address stays as it is */
        }
      }
    });
  }

  /* ---------- Line drawing ---------- */

  /* Length of a stroke as the dash pattern sees it. With vector-effect="non-scaling-stroke" the
     browser dashes in screen pixels, so the length is taken on screen (sampled when the scale is
     uneven, as in the arch outlines with preserveAspectRatio="none"). 0 = cannot be drawn. */
  function strokeLength(node) {
    if (typeof node.getTotalLength !== 'function') {
      return 0;
    }
    const style = win.getComputedStyle(node);
    if (style.stroke === 'none' || parseFloat(style.strokeWidth) === 0 || (style.strokeDasharray && style.strokeDasharray !== 'none')) {
      return 0;
    }
    let length = 0;
    try {
      length = node.getTotalLength();
    } catch (error) {
      return 0;
    }
    if (!(length > 0)) {
      return 0;
    }
    const fixedStroke = style.vectorEffect === 'non-scaling-stroke' || node.getAttribute('vector-effect') === 'non-scaling-stroke';
    const matrix = fixedStroke && typeof node.getScreenCTM === 'function' ? node.getScreenCTM() : null;
    if (matrix) {
      const sx = Math.hypot(matrix.a, matrix.b);
      const sy = Math.hypot(matrix.c, matrix.d);
      if (Math.abs(sx - sy) <= 0.01 * Math.max(sx, sy)) {
        length *= sx;
      } else {
        const steps = clamp(Math.ceil(length / 4), 24, 240);
        let sum = 0;
        let px = 0;
        let py = 0;
        for (let i = 0; i <= steps; i += 1) {
          const point = node.getPointAtLength((length * i) / steps);
          const x = matrix.a * point.x + matrix.c * point.y;
          const y = matrix.b * point.x + matrix.d * point.y;
          if (i > 0) {
            sum += Math.hypot(x - px, y - py);
          }
          px = x;
          py = y;
        }
        length = sum * 1.03;
      }
    }
    return Math.ceil(length) + 2;
  }

  /* Adds the drawing of a set of shapes to a timeline. Shapes that cannot be dashed (fills,
     dotted lines) fade in at the end instead. All reads first, then the tweens. */
  function addDrawing(timeline, nodes, at, duration) {
    const plan = nodes.map((node) => ({ node, length: strokeLength(node) }));
    const drawn = plan.filter((item) => item.length > 0);
    const faded = plan.filter((item) => item.length === 0);
    const each = drawn.length > 1 ? duration * 0.7 : duration;
    const step = drawn.length > 1 ? (duration - each) / (drawn.length - 1) : 0;
    drawn.forEach((item, index) => {
      timeline.fromTo(item.node,
        { strokeDasharray: item.length + 'px', strokeDashoffset: item.length + 'px' },
        { strokeDashoffset: '0px', duration: each, ease: 'power2.inOut' },
        at + index * step);
    });
    const fade = Math.min(0.4, duration);
    faded.forEach((item) => {
      timeline.from(item.node, { opacity: 0, duration: fade, ease: 'none' }, at + duration - fade);
    });
    return drawn.map((item) => item.node);
  }

  const clearDashes = (timeline, nodes, at) => {
    if (nodes.length) {
      timeline.set(nodes, { clearProps: 'strokeDasharray,strokeDashoffset' }, at);
    }
  };

  /* ---------- Scroll choreography ---------- */

  function isProtected(element) {
    if (element.tagName === 'H1' || element.querySelector('h1') || element.closest('h1')) {
      return true; // the h1 is never animated in
    }
    const hero = byId('porta');
    return !!(hero && hero.contains(element) && (element.matches('img,picture') || element.querySelector('img,picture')));
  }

  /* Runs `run` once when `trigger` reaches `start`; also queued for the end-of-page sweep. */
  function arm(trigger, start, run) {
    let instance = null;
    const job = () => {
      if (!S || !S.pending.has(job)) {
        return;
      }
      S.pending.delete(job);
      if (instance) {
        instance.kill();
      }
      S.ctx.add(run);
    };
    S.pending.add(job);
    instance = S.ST.create({ trigger, start, onEnter: job });
    if (!S.pending.has(job)) {
      instance.kill();
    }
  }

  function playReveal(elements) {
    const fresh = elements.filter((element) => !played.has(element));
    if (!fresh.length) {
      return;
    }
    fresh.forEach((element) => played.add(element));
    S.ctx.add(() => {
      S.gsap.to(fresh, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        overwrite: 'auto',
        clearProps: 'opacity,transform,transition'
      });
    });
  }

  function setMask(element, amount) {
    element.style.clipPath = amount <= 0 ? '' :
      'inset(calc(' + (amount * 100).toFixed(2) + '% + ' + (amount * MASK_BLEED).toFixed(1) + 'px) -' +
      MASK_BLEED + 'px -' + MASK_BLEED + 'px -' + MASK_BLEED + 'px)';
  }

  function drawMap(timeline, wrapper, nodes) {
    const used = new Set();
    let drawn = [];
    MAP_PHASES.forEach((phase) => {
      let group = [];
      phase.ids.forEach((id) => {
        const part = qs('#' + id, wrapper);
        if (part) {
          group = group.concat(qsa(GEOMETRY, part));
        }
      });
      group.forEach((node) => used.add(node));
      if (group.length) {
        drawn = drawn.concat(addDrawing(timeline, group, phase.at, phase.duration));
      }
    });
    const rest = nodes.filter((node) => !used.has(node));
    if (rest.length) {
      drawn = drawn.concat(addDrawing(timeline, rest, 0, 0.9));
    }
    clearDashes(timeline, drawn, 1.72);
    const labels = qsa('.map__label', wrapper);
    if (labels.length) {
      timeline.fromTo(labels, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'none', stagger: 0.05, clearProps: 'opacity' }, 1.5);
    }
  }

  /* `mode`: 'now' plays at once, 'later' waits for the gate intro, 'scroll' waits for its line. */
  function schedule(mode, trigger, start, run) {
    if (mode === 'scroll') {
      arm(trigger, start, run);
    } else if (mode === 'later') {
      S.afterIntro.push(run);
    } else {
      S.ctx.add(run);
    }
  }

  function setupDrawing(element, mode) {
    const gsap = S.gsap;
    const nodes = element.matches(GEOMETRY) ? [element] : qsa(GEOMETRY, element);
    gsap.set(element, { visibility: 'hidden' });
    schedule(mode, element, 'top 80%', () => {
      played.add(element);
      const timeline = gsap.timeline();
      if (!nodes.length) {
        /* Not an inline SVG (a CSS line or a background): wipe it in from the left instead. */
        timeline.fromTo(element,
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'power2.inOut', clearProps: 'clipPath' }, 0);
      } else if (element.getAttribute('data-draw') === 'map') {
        drawMap(timeline, element, nodes);
      } else {
        clearDashes(timeline, addDrawing(timeline, nodes, 0, 0.9), 0.92);
      }
      gsap.set(element, { clearProps: 'visibility' });
    });
  }

  function setupParallax(image) {
    const box = clipBox(image);
    if (!box || S.parallaxed.has(image)) {
      return;
    }
    S.parallaxed.add(image);
    /* How far the photo can move before an edge would show (offsets ignore transforms). */
    const range = () => {
      const extra = image.offsetHeight - box.clientHeight;
      if (!(extra > 0)) {
        return { up: 0, down: 0 };
      }
      let above = extra / 2;
      let node = image;
      let top = 0;
      while (node && node !== box && box.contains(node)) {
        top += node.offsetTop;
        node = node.offsetParent;
      }
      if (node === box) {
        above = clamp(-top, 0, extra);
      }
      return { up: extra - above, down: above };
    };
    S.gsap.fromTo(image,
      { y: () => -range().up },
      {
        y: () => range().down,
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true }
      });
  }

  function setupScrollMotion() {
    if (!S.motion) {
      return;
    }
    const gsap = S.gsap;
    const hero = byId('porta');
    const introPlays = !!(S.intro && S.intro.will);
    const heroItems = introPlays ? S.intro.heroItems : [];
    const inHero = (element) => !!(hero && hero.contains(element));

    /* Read first. What is on screen right now does not wait for a scroll line: it plays at
       once, or as soon as the gate has opened. */
    const fold = win.innerHeight || root.clientHeight || 0;
    const modeOf = (element) => {
      const rect = element.getBoundingClientRect();
      const onScreen = rect.bottom > 0 && rect.top < fold && (rect.width > 0 || rect.height > 0);
      return onScreen ? (introPlays ? 'later' : 'now') : 'scroll';
    };
    /* A hidden element sits 24 px lower; the start line moves with it. */
    const revealStart = (shifted) => () => 'top ' + Math.round((win.innerHeight || fold) * 0.85 + (shifted ? 24 : 0)) + 'px';

    const reveals = qsa('[data-reveal]').filter((element) =>
      !played.has(element) && !isProtected(element) && heroItems.indexOf(element) === -1);
    const grouped = new Set();
    const groups = [];
    qsa('[data-reveal-group]').forEach((group) => {
      const items = reveals.filter((element) => element.closest('[data-reveal-group]') === group);
      if (items.length) {
        items.forEach((element) => grouped.add(element));
        groups.push({ group, items, mode: modeOf(group) });
      }
    });
    const singles = reveals.filter((element) => !grouped.has(element)).map((element) => ({ element, mode: modeOf(element) }));
    const masks = qsa('[data-mask]')
      .filter((element) => !played.has(element) && !inHero(element) && !isProtected(element))
      .map((element) => ({ element, mode: modeOf(element) }));
    const drawings = qsa('[data-draw],[data-arch-line]')
      .filter((element) => !played.has(element))
      .map((element) => ({ element, mode: modeOf(element) }));

    /* Then write. Reveals: fade and rise 24 px, groups stagger. */
    if (reveals.length) {
      gsap.set(reveals, { opacity: 0, y: 24, transition: 'none' });
    }
    groups.forEach((entry) => {
      schedule(entry.mode, entry.group, revealStart(entry.items.indexOf(entry.group) !== -1), () => playReveal(entry.items));
    });
    const waiting = singles.filter((entry) => entry.mode === 'scroll').map((entry) => entry.element);
    const present = singles.filter((entry) => entry.mode !== 'scroll').map((entry) => entry.element);
    if (waiting.length) {
      S.ST.batch(waiting, { start: revealStart(true), once: true, interval: 0.1, onEnter: playReveal });
      const sweep = () => {
        S.pending.delete(sweep);
        playReveal(waiting);
      };
      S.pending.add(sweep);
    }
    if (present.length) {
      schedule(introPlays ? 'later' : 'now', null, null, () => playReveal(present));
    }

    /* Photo masks (never in the hero): uncover from the bottom, the photo itself does not move. */
    masks.forEach((entry) => {
      const element = entry.element;
      S.masks.push(element);
      setMask(element, 1);
      schedule(entry.mode, element, 'top 85%', () => {
        played.add(element);
        const state = { amount: 1 };
        gsap.to(state, {
          amount: 0,
          duration: 0.9,
          ease: 'power3.out',
          onUpdate: () => setMask(element, state.amount),
          onComplete: () => setMask(element, 0)
        });
      });
    });

    /* Line drawing: arch outlines, arrows, battlement, timeline, map */
    drawings.forEach((entry) => setupDrawing(entry.element, entry.mode));

    /* Parallax on the photo of a full-bleed band */
    qsa('[data-parallax]').forEach((image) => {
      if (!(inHero(image) && introPlays)) {
        setupParallax(image);
      }
    });
  }

  /* ---------- The gate intro ---------- */

  /* What fades up when the gate has opened: every [data-reveal] in the hero and the blocks
     next to the h1. The h1 itself and the hero image are never touched. */
  function heroText(hero) {
    if (!hero) {
      return [];
    }
    const items = qsa('[data-reveal]', hero);
    const title = qs('h1', hero);
    if (title && title.parentElement) {
      Array.prototype.forEach.call(title.parentElement.children, (sibling) => {
        if (sibling !== title && !sibling.hasAttribute('data-reveal') && !sibling.querySelector('[data-reveal]') &&
          !sibling.closest('[data-reveal]')) {
          items.push(sibling);
        }
      });
    }
    return items.filter((item) => !isProtected(item));
  }

  function planIntro() {
    const element = byId('intro');
    const svg = element ? qs('svg', element) : null;
    const hero = byId('porta');
    const intro = {
      el: element,
      svg,
      skip: byId('intro-skip'),
      label: element ? qs('.intro__label', element) : null,
      heroItems: heroText(hero),
      timeline: null,
      playing: false,
      started: false,
      will: false,
      width: 0,
      height: 0
    };
    S.intro = intro;
    if (!element) {
      return;
    }
    let seen = true; // without session storage "once per session" cannot be kept: do not play
    try {
      seen = win.sessionStorage.getItem(SESSION_KEY) !== null;
    } catch (error) {
      seen = true;
    }
    const late = !!(win.performance && typeof win.performance.now === 'function' && win.performance.now() > INTRO_LATEST_START);
    intro.will = !!(S.motion && svg && !seen && !win.location.hash && !late);
    if (!intro.will) {
      closeIntro();
    }
  }

  function closeIntro() {
    const intro = S && S.intro;
    if (!intro || !intro.el) {
      return;
    }
    intro.el.hidden = true;
    if (intro.skip) {
      intro.skip.hidden = true;
    }
    root.classList.remove('intro-playing');
    root.classList.add('intro-done');
  }

  /* Portrait screens see 900 units across, centred on the gate; landscape keeps the full drawing. */
  function fitIntro(intro) {
    const box = intro.el.getBoundingClientRect();
    const width = box.width || win.innerWidth;
    const height = box.height || win.innerHeight;
    intro.width = width;
    intro.height = height;
    if (!(width > 0 && height > 0)) {
      return;
    }
    if (width / height < 0.8) {
      const span = (900 * height) / width;
      intro.svg.setAttribute('viewBox', '350 ' + round2(500 - span / 2) + ' 900 ' + round2(span));
    } else {
      intro.svg.setAttribute('viewBox', '0 0 1600 1000');
    }
  }

  /* Smallest scale about the arch centre at which the whole screen lies inside the opening,
     plus a margin so the hairlines of the arch leave the screen too. */
  function introZoom(intro, reference) {
    const matrix = reference && typeof reference.getScreenCTM === 'function' ? reference.getScreenCTM() : null;
    const box = intro.el.getBoundingClientRect();
    if (!matrix || !matrix.a || !(box.width > 0)) {
      return 12;
    }
    const unit = Math.hypot(matrix.a, matrix.b); // screen px per drawing unit
    const px = matrix.a * ARCH.cx + matrix.c * ARCH.cy + matrix.e;
    const py = matrix.b * ARCH.cx + matrix.d * ARCH.cy + matrix.f;
    const inside = (x, y) => x >= ARCH.left && x <= ARCH.right && y >= ARCH.top && y <= ARCH.bottom &&
      (y >= ARCH.spring || (Math.hypot(x - ARCH.leftArcX, y - ARCH.spring) <= ARCH.radius &&
        Math.hypot(x - ARCH.rightArcX, y - ARCH.spring) <= ARCH.radius));
    const fits = (scale) => {
      const k = 1 / (scale * unit);
      const left = ARCH.cx - (px - box.left) * k;
      const right = ARCH.cx + (box.right - px) * k;
      const top = ARCH.cy - (py - box.top) * k;
      const bottom = ARCH.cy + (box.bottom - py) * k;
      return inside(left, top) && inside(right, top) && inside(left, bottom) && inside(right, bottom);
    };
    let low = 1;
    let high = 96;
    for (let i = 0; i < 24; i += 1) {
      const mid = (low + high) / 2;
      if (fits(mid)) {
        high = mid;
      } else {
        low = mid;
      }
    }
    return high * 1.12;
  }

  function buildIntro(intro) {
    const gsap = S.gsap;
    const part = (id) => qs('#' + id, intro.svg);
    const scene = part('porta-scene');
    const lines = part('porta-lines');
    const skyline = part('porta-skyline');
    const bricks = part('porta-bricks');
    const doors = part('porta-doors');
    const doorLeft = part('porta-door-left');
    const doorRight = part('porta-door-right');
    /* Works with or without the wrapper group: the four layers take the same transform. */
    const zoomed = scene ? [scene] : ['porta-wall', 'porta-skyline', 'porta-doors', 'porta-lines'].map(part).filter(Boolean);
    const zoom = introZoom(intro, scene || lines || intro.svg);
    const timeline = gsap.timeline({ paused: true });
    let drawn = [];

    /* 0 to 0.9 s: the lines draw themselves, group after group */
    INTRO_GROUPS.forEach((id, index) => {
      const group = part(id);
      if (group) {
        drawn = drawn.concat(addDrawing(timeline, qsa(GEOMETRY, group), index * 0.1, 0.5));
      }
    });
    if (doors) {
      drawn = drawn.concat(addDrawing(timeline, qsa('path', doors), 0.3, 0.6));
      const studs = qsa('circle', doors);
      if (studs.length) {
        timeline.fromTo(studs, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'none' }, 0.6);
      }
    }
    const faint = [skyline, bricks].filter(Boolean);
    if (faint.length) {
      timeline.from(faint, { opacity: 0, duration: 0.35, ease: 'none' }, 0.55);
    }
    clearDashes(timeline, drawn, 0.92); // dashes are in screen pixels: they must be gone before the zoom
    if (intro.label) {
      timeline.fromTo(intro.label, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.15);
      timeline.to(intro.label, { opacity: 0, duration: 0.3, ease: 'power1.in' }, 1.4);
    }

    /* 0.9 to 1.6 s: the two leaves open */
    if (doorLeft) {
      timeline.fromTo(doorLeft, { scaleX: 1, svgOrigin: DOOR_LEFT_ORIGIN }, { scaleX: 0, duration: 0.7, ease: 'power2.inOut' }, 0.9);
    }
    if (doorRight) {
      timeline.fromTo(doorRight, { scaleX: 1, svgOrigin: DOOR_RIGHT_ORIGIN }, { scaleX: 0, duration: 0.7, ease: 'power2.inOut' }, 0.9);
    }
    if (doors) {
      timeline.set(doors, { visibility: 'hidden' }, 1.6);
    }

    /* 1.5 to 2.4 s: through the arch; the strokes stay hairlines (non-scaling-stroke) */
    if (zoomed.length) {
      timeline.fromTo(zoomed,
        { scale: 1, svgOrigin: ARCH.cx + ' ' + ARCH.cy },
        { scale: zoom, duration: 0.9, ease: 'power3.in' }, 1.5);
    }
    const fading = [lines, skyline].filter(Boolean);
    if (fading.length) {
      timeline.to(fading, { opacity: 0, duration: 0.3, ease: 'power1.in' }, 2.1);
    }

    /* 2.4 s: the overlay goes, scroll is released, header and hero text come up */
    const header = S.ui && S.ui.header;
    if (header) {
      timeline.fromTo(header,
        { autoAlpha: 0, y: -16, transition: 'none' },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out', clearProps: 'opacity,visibility,transform,transition' }, 2.3);
    }
    if (intro.heroItems.length) {
      timeline.fromTo(intro.heroItems,
        { opacity: 0, y: 16, transition: 'none' },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.04, clearProps: 'opacity,transform,transition' }, 2.3);
    }
    timeline.call(finishIntro, null, 2.4);
    return timeline;
  }

  function prepareIntro() {
    const intro = S.intro;
    if (intro.timeline) {
      intro.timeline.revert();
      intro.timeline.kill();
      intro.timeline = null;
    }
    fitIntro(intro);
    S.ctx.add(() => {
      intro.timeline = buildIntro(intro);
    });
  }

  function startIntro() {
    const intro = S && S.intro;
    if (!intro || !intro.el || !intro.svg || !S.motion || (S.menu && S.menu.open)) {
      return;
    }
    try {
      win.sessionStorage.setItem(SESSION_KEY, '1');
    } catch (error) {
      /* storage is closed: the intro still plays this once */
    }
    intro.playing = true;
    intro.started = false;
    intro.el.hidden = false;
    if (intro.skip) {
      intro.skip.hidden = false;
    }
    root.classList.remove('intro-done');
    root.classList.add('intro-playing');

    /* The gate opens on the hero: start from the top, and hold the scroll until the end. */
    if (S.lenis) {
      S.lenis.scrollTo(0, { immediate: true, force: true });
      S.lenis.stop();
    } else if (scrollTop() > 0) {
      win.scrollTo(0, 0);
    }
    S.y = 0;
    prepareIntro();

    const timeline = intro.timeline;
    const play = () => {
      if (S && S.intro === intro && intro.playing && intro.timeline === timeline && timeline) {
        intro.started = true;
        timeline.play(0);
      }
    };
    /* Two frames so the first state is on screen; a tab opened in the background waits. */
    const begin = () => win.requestAnimationFrame(() => win.requestAnimationFrame(play));
    if (doc.visibilityState === 'hidden') {
      const onVisible = () => {
        if (doc.visibilityState !== 'hidden') {
          doc.removeEventListener('visibilitychange', onVisible);
          begin();
        }
      };
      listen(doc, 'visibilitychange', onVisible);
    } else {
      begin();
    }
  }

  function finishIntro() {
    const intro = S && S.intro;
    if (!intro || !intro.playing) {
      return;
    }
    intro.playing = false;
    closeIntro();
    intro.heroItems.forEach((item) => played.add(item));
    if (S.lenis && !(S.menu && S.menu.open)) {
      S.lenis.start();
    }
    /* What was on screen behind the gate plays now; the hero parallax starts now. */
    const waiting = S.afterIntro;
    S.afterIntro = [];
    if (waiting.length) {
      S.ctx.add(() => waiting.forEach((run) => run()));
    }
    const hero = byId('porta');
    if (hero) {
      S.ctx.add(() => qsa('[data-parallax]', hero).forEach(setupParallax));
    }
  }

  function skipIntro() {
    const intro = S && S.intro;
    if (!intro || !intro.playing) {
      return;
    }
    if (intro.timeline) {
      intro.timeline.progress(1);
    }
    finishIntro();
  }

  const isTyping = (target) => !!(target && target.nodeType === 1 &&
    (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable));

  function onIntroKey(event) {
    const intro = S && S.intro;
    if (!intro || !intro.el || !S.motion) {
      return;
    }
    const plain = !event.ctrlKey && !event.metaKey && !event.altKey;
    const replay = plain && !event.repeat && (event.key === 'p' || event.key === 'P');
    if (intro.playing) {
      if (/^(Shift|Control|Alt|Meta|AltGraph|CapsLock)$/.test(event.key)) {
        return;
      }
      if (plain) {
        event.preventDefault(); // the key that skips must not also scroll or activate
      }
      if (replay) {
        startIntro();
      } else {
        skipIntro();
      }
    } else if (replay && !isTyping(event.target)) {
      startIntro(); // presentation mode
    }
  }

  function setupIntro() {
    const intro = S.intro;
    if (!intro || !intro.el || !S.motion) {
      return;
    }
    const skipIfPlaying = () => {
      if (S && S.intro && S.intro.playing) {
        skipIntro();
      }
    };
    listen(doc, 'click', skipIfPlaying);
    listen(win, 'wheel', skipIfPlaying, { passive: true });
    listen(win, 'touchmove', skipIfPlaying, { passive: true });
    listen(doc, 'keydown', onIntroKey);
    if (intro.will) {
      startIntro();
    }
  }

  /* ---------- Start, refresh, stop ---------- */

  function settle() {
    if (!S) {
      return;
    }
    if (S.motion) {
      S.ST.refresh(); // fires the "refresh" event, which runs measure()
    } else {
      measure();
    }
  }

  function onResize() {
    if (!S) {
      return;
    }
    const intro = S.intro;
    if (intro && intro.playing) {
      if (!intro.started) {
        prepareIntro(); // the size changed before the first frame: fit the drawing again
      } else if (Math.abs(win.innerWidth - intro.width) > 1 || Math.abs(win.innerHeight - intro.height) > 120) {
        skipIntro();
      }
    }
    if (S.menu && S.menu.open && !isRendered(S.menu.toggle)) {
      setMenu(false, false);
    }
    if (!S.motion && !S.resizeFrame) {
      S.resizeFrame = win.requestAnimationFrame(() => {
        if (S) {
          S.resizeFrame = 0;
          measure();
        }
      });
    }
  }

  function setupLifecycle() {
    const run = S;
    listen(win, 'scroll', onScroll, { passive: true });
    listen(win, 'resize', onResize, { passive: true });
    listen(win, 'pagehide', teardown);
    if (S.motion) {
      S.ST.addEventListener('refresh', measure);
      S.cleanups.push(() => run.ST.removeEventListener('refresh', measure));
    }
    if (doc.readyState === 'complete') {
      settle();
    } else {
      listen(win, 'load', settle);
    }
    if (doc.fonts && doc.fonts.ready && typeof doc.fonts.ready.then === 'function') {
      doc.fonts.ready.then(() => {
        if (S === run) {
          settle();
        }
      });
    }
    /* The page height changes without a resize (an opened question, a late image): refresh. */
    if (typeof win.ResizeObserver === 'function' && doc.body) {
      let known = -1;
      const observer = new win.ResizeObserver((entries) => {
        const height = entries[0] ? Math.round(entries[0].contentRect.height) : 0;
        if (known < 0) {
          known = height;
          return;
        }
        if (Math.abs(height - known) < 2) {
          return;
        }
        known = height;
        win.clearTimeout(run.settleTimer);
        run.settleTimer = win.setTimeout(() => {
          if (S === run) {
            settle();
          }
        }, 200);
      });
      observer.observe(doc.body);
      S.cleanups.push(() => observer.disconnect());
    }
    const motionQuery = media(MQ_MOTION);
    if (motionQuery) {
      const restart = () => {
        teardown();
        boot();
      };
      if (typeof motionQuery.addEventListener === 'function') {
        listen(motionQuery, 'change', restart);
      } else if (typeof motionQuery.addListener === 'function') {
        motionQuery.addListener(restart);
        S.cleanups.push(() => motionQuery.removeListener(restart));
      }
    }
  }

  /* Stops and removes everything this script started; the page is left complete and static. */
  function teardown() {
    const run = S;
    if (!run) {
      return;
    }
    try {
      if (run.intro && run.intro.playing) {
        skipIntro();
      }
      if (run.menu && run.menu.open) {
        setMenu(false, false);
      }
      setHeaderHidden(false);
    } catch (error) {
      /* keep going: the listeners and animations below must go in any case */
    }
    S = null;
    run.cleanups.forEach((cleanup) => {
      try {
        cleanup();
      } catch (error) {
        /* one failed cleanup must not stop the others */
      }
    });
    win.clearTimeout(run.settleTimer);
    if (run.frame) {
      win.cancelAnimationFrame(run.frame);
    }
    if (run.resizeFrame) {
      win.cancelAnimationFrame(run.resizeFrame);
    }
    try {
      if (run.tick) {
        run.gsap.ticker.remove(run.tick);
      }
      if (run.ctx) {
        run.ctx.revert(); // kills every tween and ScrollTrigger made here and restores the elements
      }
      if (run.ST && run.motion) {
        run.ST.getAll().forEach((trigger) => trigger.kill());
      }
      if (run.lenis) {
        run.lenis.destroy();
      }
    } catch (error) {
      /* a library that fails while stopping leaves nothing we can still undo */
    }
    run.masks.forEach((element) => {
      element.style.clipPath = '';
    });
    if (run.menu) {
      win.clearTimeout(run.menu.closeTimer);
    }
    root.classList.remove('intro-playing', 'menu-open', 'menu-closing', 'header-hidden');
    if (run.intro && run.intro.el) {
      run.intro.el.hidden = true;
      if (run.intro.skip) {
        run.intro.skip.hidden = true;
      }
      root.classList.add('intro-done');
    }
  }

  function boot() {
    if (S) {
      return;
    }
    const gsap = win.gsap;
    const ST = win.ScrollTrigger;
    const Lenis = win.Lenis;
    const libs = !!(gsap && ST && typeof Lenis === 'function' && typeof gsap.registerPlugin === 'function' &&
      typeof gsap.context === 'function' && typeof ST.create === 'function');
    const motionPref = matches(MQ_MOTION);
    S = {
      gsap,
      ST,
      Lenis,
      motionPref,
      motion: libs && motionPref,
      cleanups: [],
      pending: new Set(),
      afterIntro: [],
      masks: [],
      parallaxed: new Set(),
      ctx: null,
      lenis: null,
      tick: null,
      ticking: false,
      frame: 0,
      resizeFrame: 0,
      settleTimer: 0,
      dirty: false,
      phone: false,
      y: 0,
      ui: null,
      menu: null,
      intro: null
    };
    try {
      root.classList.toggle('motion-off', !libs);
      root.classList.add('motion-ready'); // from here the start states are set by this script
      if (S.motion) {
        gsap.registerPlugin(ST);
        gsap.config({ nullTargetWarn: false });
        ST.config({ ignoreMobileResize: true });
        S.ctx = gsap.context(() => {});
      }
      setupScrollUi();
      setupMenu();
      setupSmoothScroll();
      setupAnchors();
      planIntro();
      if (S.motion) {
        S.ctx.add(setupScrollMotion);
      }
      measure();
      setupIntro();
      setupLifecycle();
    } catch (error) {
      /* Fail open: undo what was started and let motion.css show the whole page. */
      teardown();
      root.classList.add('motion-ready', 'motion-off');
    }
  }

  win.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      boot(); // back from the back/forward cache after pagehide stopped everything
    }
  });

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
