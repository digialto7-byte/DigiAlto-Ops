#!/usr/bin/env node
/* Browser QA for the static site (adapted from the handover toolkit, rewritten for Playwright).
 *
 *   node qa/qa-site.cjs <siteDir> <outDir> [--axe=/path/to/axe.min.js] [--shots] [--only=home-it,menu-it]
 *
 * For every page at 1440, 390 and 360 px: console and page errors, failed requests, requests to
 * another origin, horizontal scroll, one h1, heading order, images (loaded, alt, width/height),
 * internal links and anchors, title and description length, canonical, hreflang set, JSON-LD
 * that parses, blocks left hidden after a full scroll (the gallery frames and captions that are not current are exempt while gallery-on is set). Version 3 additions: no euro sign and no dish row on the home pages, the frozen home anchors on both languages, the La casa gallery (four figures; static state visible in the reduced-motion and no-JavaScript passes; sticky stage when gallery-on). Then: reduced-motion pass, no-JavaScript
 * pass, the gate intro (frames, skip, once per session), real-pixel contrast of text over photos
 * (blocks marked data-on-photo), IT/EN parity, and axe-core if a path is given.
 * Exit code 1 if any check fails.
 */
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const [siteArg, outArg, ...rest] = process.argv.slice(2);
if (!siteArg || !outArg) { process.stderr.write('usage: qa-site.cjs <siteDir> <outDir> [--axe=path] [--shots] [--only=ids]\n'); process.exit(2); }
const SITE = path.resolve(siteArg);
const OUT = path.resolve(outArg);
const AXE = (rest.find((a) => a.startsWith('--axe=')) || '').slice(6);
const ONLY = (rest.find((a) => a.startsWith('--only=')) || '').slice(7).split(',').filter(Boolean);
const SHOTS = rest.includes('--shots');
const PAGES = [
  { id: 'home-it', url: '/', lang: 'it', pair: '/en/' },
  { id: 'home-en', url: '/en/', lang: 'en', pair: '/' },
  { id: 'menu-it', url: '/menu/', lang: 'it', pair: '/en/menu/' },
  { id: 'menu-en', url: '/en/menu/', lang: 'en', pair: '/menu/' },
  { id: 'vini-it', url: '/vini/', lang: 'it', pair: '/en/wine-list/' },
  { id: 'vini-en', url: '/en/wine-list/', lang: 'en', pair: '/vini/' },
  { id: 'dove-it', url: '/dove-siamo/', lang: 'it', pair: '/en/find-us/' },
  { id: 'dove-en', url: '/en/find-us/', lang: 'en', pair: '/dove-siamo/' },
  { id: 'privacy-it', url: '/privacy/', lang: 'it', pair: '/en/privacy/' },
  { id: 'privacy-en', url: '/en/privacy/', lang: 'en', pair: '/privacy/' },
  { id: '404', url: '/404.html', lang: 'it', pair: null },
];
const ANCHORS = ['porta', 'perche', 'casa', 'contrada', 'tavola', 'dolceforte', 'pici', 'dispensa', 'cinta', 'tartufo', 'porcini', 'spaghetti', 'taglieri', 'fiorentina', 'dolce', 'cantina', 'prenota'];
const VIEWPORTS = [
  { w: 1440, h: 900, mobile: false },
  { w: 390, h: 844, mobile: true },
  { w: 360, h: 800, mobile: true },
];
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };

function serve(root) {
  const server = http.createServer((req, res) => {
    let p;
    try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch (e) { res.writeHead(400).end(); return; }
    let file = path.join(root, p);
    if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    let status = 200;
    if (!fs.existsSync(file)) { status = 404; file = path.join(root, '404.html'); }
    if (!fs.existsSync(file)) { res.writeHead(404).end('not found'); return; }
    res.writeHead(status, { 'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port })));
}

const findings = [];
const add = (level, page, vp, msg) => findings.push({ level, page, vp, msg });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const note = (s) => process.stderr.write(s + '\n');

/* Scroll the whole page in steps. The waits run on this side, not in the page, because page
   timers never fire in the no-JavaScript pass. */
async function fullScroll(page) {
  const dims = await page.evaluate(() => ({ h: document.documentElement.scrollHeight, step: Math.round(window.innerHeight * 0.6) }));
  for (let y = 0; y <= dims.h; y += dims.step) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await sleep(160);
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await sleep(2600);
}

const PROBE = () => {
  const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const docW = document.documentElement.clientWidth;
  const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(vis).map((h) => ({ level: Number(h.tagName[1]), text: h.textContent.trim().replace(/\s+/g, ' ').slice(0, 60) }));
  const galleryOn = document.documentElement.classList.contains('gallery-on');
  const hidden = [...document.querySelectorAll('[data-reveal],[data-mask],[data-draw],[data-arch-line],.map__label,[data-gallery-frame],[data-gallery-caption]')].filter((e) => {
    if (e.closest('details:not([open])') || e.closest('[hidden]')) return false;
    /* with gallery-on only the current frame and caption show: the others are meant to be hidden */
    if (galleryOn && e.matches('[data-gallery-frame],[data-gallery-caption]') && !e.classList.contains('is-current')) return false;
    const cs = getComputedStyle(e);
    if (cs.display === 'none') return false;
    return Number(cs.opacity) < 0.95 || /inset\(100%/.test(cs.clipPath) || cs.visibility === 'hidden';
  }).map((e) => e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '')).slice(0, 8);
  const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { const j = JSON.parse(s.textContent); return { ok: true, types: JSON.stringify(j).match(/"@type":"[^"]+"/g) || [] }; } catch (e) { return { ok: false, err: String(e) }; } });
  const gal = document.querySelector('[data-gallery]');
  const galleryInfo = gal ? (() => {
    const frames = [...gal.querySelectorAll('[data-gallery-frame]')];
    const caps = [...gal.querySelectorAll('[data-gallery-caption]')];
    const shown = (e) => { const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); return r.width > 50 && r.height > 8 && cs.visibility !== 'hidden' && cs.display !== 'none' && !/inset\(100%/.test(cs.clipPath) && Number(cs.opacity) > 0.95; };
    const stage = gal.querySelector('[data-gallery-stage]');
    const cs = stage ? getComputedStyle(stage) : null;
    return { on: galleryOn, figs: gal.querySelectorAll('figure').length, frames: frames.length, caps: caps.length, imgs: gal.querySelectorAll('img').length,
      framesShown: frames.filter(shown).length, capsShown: caps.filter(shown).length, current: frames.filter((f) => f.classList.contains('is-current')).length,
      dots: gal.querySelectorAll('button[data-gallery-dot]').length, exit: !!gal.querySelector('[data-gallery-exit]'), arch: !!gal.querySelector('[data-gallery-arch]'),
      dotsShown: [...gal.querySelectorAll('[data-gallery-dot],[data-gallery-exit]')].filter((e) => e.getBoundingClientRect().height > 0).length,
      position: cs && cs.position, top: cs && cs.top, stageH: stage ? stage.getBoundingClientRect().height : 0, wrapH: gal.getBoundingClientRect().height, vh: innerHeight };
  })() : null;
  return {
    gallery: galleryInfo,
    euro: /€/.test(document.documentElement.outerHTML), dishRows: document.querySelectorAll('.dish,.dish-rows,.price-line,.dish__price').length,
    scrollW: document.documentElement.scrollWidth, docW,
    wide: [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > docW + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('[data-allow-overflow]'); }).slice(0, 5).map((e) => e.tagName.toLowerCase() + '.' + String(e.className).split(' ')[0]),
    h1: document.querySelectorAll('h1').length, heads,
    imgs: [...document.images].map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute('alt'), w: i.getAttribute('width'), h: i.getAttribute('height'), ok: i.complete && i.naturalWidth > 0 })),
    links: [...document.querySelectorAll('a[href]')].map((a) => ({ href: a.getAttribute('href'), target: a.target, rel: a.rel })),
    ids: [...document.querySelectorAll('[id]')].map((e) => e.id),
    lang: document.documentElement.lang, title: document.title,
    desc: (document.querySelector('meta[name="description"]') || {}).content || '',
    canonical: (document.querySelector('link[rel="canonical"]') || {}).href || '',
    hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.hreflang + '=' + l.getAttribute('href')),
    og: ['og:title', 'og:description', 'og:image', 'og:url'].filter((p) => !document.querySelector(`meta[property="${p}"]`)),
    ld, hidden,
    small: [...document.querySelectorAll('a.btn, button, .cta-bar a, nav a')].filter(vis).filter((e) => e.getBoundingClientRect().height < 40).map((e) => (e.textContent.trim() || e.getAttribute('aria-label') || e.tagName).slice(0, 24) + ' ' + Math.round(e.getBoundingClientRect().height) + 'px').slice(0, 6),
    introVisible: (() => { const i = document.getElementById('intro'); if (!i) return false; const cs = getComputedStyle(i); return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.02 && !i.hidden; })(),
    text: document.body.innerText.length,
  };
};

async function checkPage(browser, base, pg, vp, opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.mobile, hasTouch: vp.mobile, deviceScaleFactor: 1, reducedMotion: opts.reduced ? 'reduce' : 'no-preference', javaScriptEnabled: !opts.nojs });
  await ctx.addInitScript(() => { try { sessionStorage.setItem('odr-intro', '1'); } catch (e) { /* ignore */ } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(20000);
  const tag = `${vp.w}${opts.reduced ? '-reduced' : ''}${opts.nojs ? '-nojs' : ''}`;
  note(`. ${pg.id} @${tag}`);
  const errs = [];
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => errs.push('request failed: ' + r.url()));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith(base) && !u.startsWith('data:') && !u.startsWith('blob:')) add('FAIL', pg.id, tag, 'request to another origin: ' + u); });
  const resp = await page.goto(base + pg.url, { waitUntil: 'load' });
  if (pg.id !== '404' && resp.status() !== 200) add('FAIL', pg.id, tag, 'HTTP ' + resp.status());
  await sleep(500);
  await fullScroll(page);
  const r = await page.evaluate(PROBE);
  errs.forEach((e) => add('FAIL', pg.id, tag, 'console: ' + e));
  if (r.scrollW > r.docW) add('FAIL', pg.id, tag, `horizontal scroll ${r.scrollW} > ${r.docW} (${r.wide.join(', ')})`);
  if (r.hidden.length) add('FAIL', pg.id, tag, 'still hidden after a full scroll: ' + r.hidden.join(', '));
  if (r.introVisible) add('FAIL', pg.id, tag, 'intro overlay visible when it must not be');
  r.imgs.filter((i) => !i.ok).forEach((i) => add('FAIL', pg.id, tag, 'image did not load: ' + i.src.split('/').pop()));
  const main = !opts.reduced && !opts.nojs;
  if (/^home-/.test(pg.id)) {
    /* version 3: no price and no dish row on the home page */
    if (r.euro) add('FAIL', pg.id, tag, 'the home page contains a euro sign');
    if (r.dishRows) add('FAIL', pg.id, tag, `the home page contains ${r.dishRows} dish row element(s) or prices`);
    /* the frozen anchors of design-v3.md section 2 exist on both languages */
    ANCHORS.filter((a) => !r.ids.includes(a)).forEach((a) => add('FAIL', pg.id, tag, 'frozen anchor missing: #' + a));
    const g = r.gallery;
    if (!g) add('FAIL', pg.id, tag, 'no [data-gallery] on the home page');
    else {
      if (g.figs !== 4 || g.frames !== 4 || g.caps !== 4 || g.imgs !== 4) add('FAIL', pg.id, tag, `gallery: expected 4 figures, frames, captions and images, got ${g.figs}/${g.frames}/${g.caps}/${g.imgs}`);
      if (g.dots !== 4 || !g.exit || !g.arch) add('FAIL', pg.id, tag, 'gallery: progress buttons, exit link or arch outline missing');
      if (g.current !== 1) add('FAIL', pg.id, tag, 'gallery: exactly one frame must be is-current, found ' + g.current);
      if (opts.reduced || opts.nojs) {
        if (g.on) add('FAIL', pg.id, tag, 'gallery-on is set although motion is reduced or JavaScript is off');
        if (g.framesShown !== 4 || g.capsShown !== 4) add('FAIL', pg.id, tag, `gallery static state: ${g.framesShown} of 4 figures and ${g.capsShown} of 4 captions visible`);
        if (g.dotsShown) add('FAIL', pg.id, tag, 'gallery static state: progress buttons or exit link are visible');
      } else if (g.on) {
        if (g.position !== 'sticky' || g.top !== '0px') add('FAIL', pg.id, tag, `gallery stage is ${g.position} top ${g.top}, expected sticky 0`);
        if (g.wrapH < g.vh * 2) add('FAIL', pg.id, tag, `gallery wrapper too short (${Math.round(g.wrapH)} px for a ${g.vh} px screen)`);
        if (g.capsShown !== 1 || g.framesShown !== 1) add('NOTE', pg.id, tag, `gallery-on: ${g.framesShown} frames and ${g.capsShown} captions show (expected 1 and 1)`);
      } else if (g.framesShown !== 4) add('FAIL', pg.id, tag, 'gallery fell back to the static state but not all figures show');
    }
  }
  if (main && vp.w === 1440) {
    if (r.h1 !== 1) add('FAIL', pg.id, tag, 'h1 count ' + r.h1);
    let prev = 0;
    r.heads.forEach((h) => { if (prev && h.level > prev + 1) add('FAIL', pg.id, tag, `heading jumps from h${prev} to h${h.level}: "${h.text}"`); prev = h.level; });
    if (r.lang !== pg.lang) add('FAIL', pg.id, tag, `html lang "${r.lang}", expected "${pg.lang}"`);
    if (!r.title || r.title.length > 60) add('FAIL', pg.id, tag, `title length ${r.title.length}: "${r.title}"`);
    if (pg.id !== '404' && !/privacy/.test(pg.id) && (r.desc.length < 120 || r.desc.length > 158)) add('FAIL', pg.id, tag, `meta description length ${r.desc.length}`);
    if (pg.id !== '404' && !r.canonical) add('FAIL', pg.id, tag, 'no canonical');
    if (pg.pair && r.hreflang.length < 3) add('FAIL', pg.id, tag, 'hreflang set incomplete: ' + r.hreflang.join(' '));
    if (pg.id !== '404' && r.og.length) add('FAIL', pg.id, tag, 'missing Open Graph: ' + r.og.join(', '));
    r.ld.forEach((l) => { if (!l.ok) add('FAIL', pg.id, tag, 'JSON-LD does not parse: ' + l.err); });
    r.imgs.forEach((i) => {
      const n = i.src.split('/').pop();
      if (i.alt === null) add('FAIL', pg.id, tag, 'img without alt: ' + n);
      if (!i.w || !i.h) add('FAIL', pg.id, tag, 'img without width/height: ' + n);
    });
    for (const l of r.links) {
      const h = l.href;
      if (/^(tel:|mailto:|https?:)/.test(h)) { if (/^https?:/.test(h) && l.target === '_blank' && !/noopener/.test(l.rel)) add('FAIL', pg.id, tag, 'external link without rel=noopener: ' + h); continue; }
      if (h.startsWith('#')) { if (h.length > 1 && !r.ids.includes(h.slice(1))) add('FAIL', pg.id, tag, 'anchor without target: ' + h); continue; }
      const u = new URL(h, base + pg.url);
      let f = path.join(SITE, decodeURIComponent(u.pathname));
      if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
      if (!fs.existsSync(f)) add('FAIL', pg.id, tag, 'broken internal link: ' + h);
      else if (u.hash && !new RegExp(`id=["']${u.hash.slice(1)}["']`).test(fs.readFileSync(f, 'utf8'))) add('FAIL', pg.id, tag, 'link to a missing anchor: ' + h);
    }
    if (pg.pair) { const hasPair = r.links.some((l) => { try { return new URL(l.href, base + pg.url).pathname === pg.pair; } catch (e) { return false; } }); if (!hasPair) add('FAIL', pg.id, tag, 'no link to the other language page ' + pg.pair); }
    opts.store[pg.id] = { heads: r.heads.length, imgs: r.imgs.length, ld: r.ld.map((l) => (l.types || []).join(',')), title: r.title, desc: r.desc, text: r.text };
  }
  if (vp.mobile && main && r.small.length) add('NOTE', pg.id, tag, 'controls under 40 px high: ' + r.small.join(' | '));
  if (SHOTS && main && vp.w !== 360) { await page.evaluate(() => window.scrollTo(0, 0)); await sleep(400); await page.screenshot({ path: path.join(OUT, `${pg.id}-${vp.w}.png`), fullPage: true }); }
  if (AXE && vp.w !== 360 && main) {
    await page.addScriptTag({ path: AXE });
    const res = await page.evaluate(async () => { const out = await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] }); return out.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 3).map((x) => x.target.join(' ')) })); });
    res.forEach((v) => add(v.impact === 'minor' ? 'NOTE' : 'FAIL', pg.id, tag, `axe ${v.id} (${v.impact}, ${v.n}): ${v.ex.join(' ; ')}`));
  }
  if (opts.contrast && main) await contrast(page, pg, tag, browser);
  await ctx.close();
}

/* Real-pixel contrast: for each block marked data-on-photo, make its text transparent, take one
   screenshot of the block, and compare each text element's colour with every pixel behind it
   (the 1st percentile is reported, so a few stray pixels do not decide the result). */
async function contrast(page, pg, tag, browser) {
  const blocks = await page.$$('[data-on-photo]');
  if (!blocks.length) return;
  await page.addStyleTag({ content: '[data-qa-hide], [data-qa-hide] * { color: transparent !important; text-shadow: none !important; } [data-qa-hide] svg { visibility: hidden !important; }' });
  const dec = await browser.newPage();
  for (const block of blocks) {
    await block.evaluate((e) => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await sleep(700);
    const items = await block.evaluate((root) => {
      const rb = root.getBoundingClientRect();
      const out = [];
      root.querySelectorAll('h1,h2,h3,p,li,a,span,dt,dd,figcaption,small,strong,em,th,td,b').forEach((e) => {
        const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
        if (!own) return;
        const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
        if (r.width < 4 || r.height < 4 || Number(cs.opacity) < 0.05 || cs.visibility === 'hidden') return;
        let n = e; let opaque = false;
        while (n) {
          const m = getComputedStyle(n).backgroundColor.match(/[\d.]+/g) || [];
          if (m.length >= 3 && (m.length < 4 || Number(m[3]) > 0.9)) { opaque = true; break; }
          if (n === root) break;
          n = n.parentElement;
        }
        if (opaque) return;   // text on its own solid ground (buttons) is not over the photo
        out.push({ x: r.left - rb.left, y: r.top - rb.top, w: r.width, h: r.height, color: cs.color, size: parseFloat(cs.fontSize), weight: Number(cs.fontWeight), text: e.textContent.trim().slice(0, 40) });
      });
      return out;
    });
    if (!items.length) continue;
    await block.evaluate((e) => e.setAttribute('data-qa-hide', ''));
    let shot = null;
    try { shot = await block.screenshot({ timeout: 15000, animations: 'disabled' }); } catch (e) { add('NOTE', pg.id, tag, 'contrast sample skipped: screenshot timed out'); }
    await block.evaluate((e) => e.removeAttribute('data-qa-hide'));
    if (!shot) continue;
    const res = await dec.evaluate(async ({ b64, list }) => {
      const img = await createImageBitmap(await (await fetch('data:image/png;base64,' + b64)).blob());
      const c = new OffscreenCanvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0);
      const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
      const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
      return list.map((it) => {
        const X = Math.max(0, Math.floor(it.x)); const Y = Math.max(0, Math.floor(it.y));
        const W = Math.min(img.width - X, Math.ceil(it.w)); const H = Math.min(img.height - Y, Math.ceil(it.h));
        if (W < 2 || H < 2) return null;
        const d = x.getImageData(X, Y, W, H).data;
        const t = it.color.match(/[\d.]+/g).map(Number); const tl = lum(t[0], t[1], t[2]);
        const out = [];
        for (let i = 0; i < d.length; i += 12) { const l = lum(d[i], d[i + 1], d[i + 2]); out.push((Math.max(l, tl) + 0.05) / (Math.min(l, tl) + 0.05)); }
        out.sort((a, b) => a - b);
        return out[Math.floor(out.length * 0.01)];
      });
    }, { b64: shot.toString('base64'), list: items });
    items.forEach((it, i) => {
      if (res[i] === null || res[i] === undefined) return;
      const large = it.size >= 24 || (it.size >= 18.66 && it.weight >= 700);
      const need = large ? 3 : 4.5;
      if (res[i] < need) add('FAIL', pg.id, tag, `contrast over photo ${res[i].toFixed(2)}:1 (need ${need}) "${it.text}" ${Math.round(it.size)}px`);
    });
  }
  await dec.close();
}

async function introState(page) {
  return page.evaluate(() => { const i = document.getElementById('intro'); if (!i) return 'missing'; const cs = getComputedStyle(i); return (i.hidden || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.02) ? 'gone' : 'visible'; });
}

async function introPass(browser, base, vp) {
  note(`. intro @${vp.w}`);
  const tag = 'intro-' + vp.w;
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.mobile, hasTouch: vp.mobile, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  const t0 = Date.now();
  await page.goto(base + '/', { waitUntil: 'commit' });
  for (const t of [300, 900, 1300, 1800, 2200, 2800]) {
    await sleep(Math.max(0, t - (Date.now() - t0)));
    if (SHOTS) await page.screenshot({ path: path.join(OUT, `intro-${vp.w}-${String(t).padStart(4, '0')}.png`) });
  }
  await sleep(1500);
  const state = await introState(page);
  if (state === 'missing') add('FAIL', 'home-it', tag, 'no #intro element on the home page');
  if (state === 'visible') add('FAIL', 'home-it', tag, 'intro still visible 4 s after load');
  const y = await page.evaluate(() => { window.scrollTo(0, 600); return new Promise((r) => setTimeout(() => r(window.scrollY), 700)); });
  if (y < 300) add('FAIL', 'home-it', tag, 'page cannot be scrolled after the intro (scrollY ' + y + ')');
  await page.reload({ waitUntil: 'load' }); await sleep(700);
  if (await introState(page) === 'visible') add('FAIL', 'home-it', tag, 'intro plays again on a second load in the same session');
  errs.forEach((e) => add('FAIL', 'home-it', tag, 'pageerror: ' + e));
  await ctx.close();
  const ctx2 = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  const p2 = await ctx2.newPage();
  await p2.goto(base + '/', { waitUntil: 'load' }); await sleep(250);
  await p2.keyboard.press('Escape'); await sleep(900);
  if (await introState(p2) === 'visible') add('FAIL', 'home-it', tag, 'a key press does not skip the intro');
  await ctx2.close();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { server, port } = await serve(SITE);
  const base = `http://127.0.0.1:${port}`;
  const browser = await chromium.launch();
  const store = {};
  const exists = (p) => fs.existsSync(path.join(SITE, p.url.endsWith('/') ? p.url + 'index.html' : p.url));
  const wanted = PAGES.filter((p) => !ONLY.length || ONLY.includes(p.id));
  const pages = wanted.filter(exists);
  wanted.filter((p) => !pages.includes(p)).forEach((p) => add('FAIL', p.id, '-', 'page file is missing'));
  for (const pg of pages) {
    for (const vp of VIEWPORTS) await checkPage(browser, base, pg, vp, { store, contrast: vp.w !== 360 });
    await checkPage(browser, base, pg, VIEWPORTS[0], { reduced: true, store });
    await checkPage(browser, base, pg, VIEWPORTS[1], { reduced: true, store });
    await checkPage(browser, base, pg, VIEWPORTS[1], { nojs: true, store });
  }
  if (pages.some((p) => p.id === 'home-it')) { await introPass(browser, base, VIEWPORTS[0]); await introPass(browser, base, VIEWPORTS[1]); }
  [['home-it', 'home-en'], ['menu-it', 'menu-en'], ['vini-it', 'vini-en'], ['dove-it', 'dove-en'], ['privacy-it', 'privacy-en']].forEach(([a, b]) => {
    if (!store[a] || !store[b]) return;
    if (store[a].heads !== store[b].heads) add('FAIL', a, 'parity', `heading count differs from ${b}: ${store[a].heads} vs ${store[b].heads}`);
    if (store[a].imgs !== store[b].imgs) add('FAIL', a, 'parity', `image count differs from ${b}: ${store[a].imgs} vs ${store[b].imgs}`);
    if (store[a].ld.join('|') !== store[b].ld.join('|')) add('NOTE', a, 'parity', `JSON-LD types differ from ${b}`);
  });
  if (!ONLY.length) for (const f of ['robots.txt', 'sitemap.xml']) if (!fs.existsSync(path.join(SITE, f))) add('FAIL', f, '-', 'file is missing');
  await browser.close(); server.close();
  const fails = findings.filter((f) => f.level === 'FAIL');
  const lines = findings.map((f) => `${f.level} ${f.page} @${f.vp}: ${f.msg}`);
  const summary = `qa-site: ${fails.length} FAIL, ${findings.length - fails.length} NOTE, ${pages.length} pages`;
  fs.writeFileSync(path.join(OUT, 'qa-site.json'), JSON.stringify({ summary, store, findings }, null, 1));
  process.stdout.write(lines.join('\n') + (lines.length ? '\n' : '') + summary + '\n');
  process.exit(fails.length ? 1 : 0);
})().catch((e) => { process.stderr.write(String((e && e.stack) || e) + '\n'); process.exit(2); });
