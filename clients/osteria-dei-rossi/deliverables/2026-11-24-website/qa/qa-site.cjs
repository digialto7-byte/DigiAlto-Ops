#!/usr/bin/env node
/* Browser QA for the static site (adapted from the handover toolkit, rewritten for Playwright).
 *
 *   node qa/qa-site.cjs <siteDir> <outDir> [--axe=/path/to/axe.min.js] [--shots]
 *
 * For every page at 1440, 390 and 360 px: console and page errors, failed requests, requests to
 * another origin, horizontal scroll, one h1, heading order, images (loaded, alt, width/height),
 * internal links and anchors, title and description length, canonical, hreflang pair, JSON-LD
 * that parses, blocks left hidden after a full scroll. Then: reduced-motion pass, no-JavaScript
 * pass, the gate intro (frames, skip, once per session), real-pixel contrast of text over photos
 * (elements marked data-on-photo), IT/EN parity, and axe-core if a path is given.
 * Exit code 1 if any check fails.
 */
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const [siteArg, outArg, ...rest] = process.argv.slice(2);
if (!siteArg || !outArg) { process.stderr.write('usage: qa-site.cjs <siteDir> <outDir> [--axe=path] [--shots]\n'); process.exit(2); }
const SITE = path.resolve(siteArg);
const OUT = path.resolve(outArg);
const AXE = (rest.find((a) => a.startsWith('--axe=')) || '').slice(6);
const SHOTS = rest.includes('--shots');
const PAGES = [
  { id: 'home-it', url: '/', lang: 'it', pair: '/en/' },
  { id: 'home-en', url: '/en/', lang: 'en', pair: '/' },
  { id: 'menu-it', url: '/menu/', lang: 'it', pair: '/en/menu/' },
  { id: 'menu-en', url: '/en/menu/', lang: 'en', pair: '/menu/' },
  { id: 'privacy-it', url: '/privacy/', lang: 'it', pair: '/en/privacy/' },
  { id: 'privacy-en', url: '/en/privacy/', lang: 'en', pair: '/privacy/' },
  { id: '404', url: '/404.html', lang: 'it', pair: null, noindexOk: true },
];
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

async function fullScroll(page) {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6);
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 160));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((r) => setTimeout(r, 900));
  });
}

const PROBE = () => {
  const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const docW = document.documentElement.clientWidth;
  const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(vis).map((h) => ({ level: Number(h.tagName[1]), text: h.textContent.trim().replace(/\s+/g, ' ').slice(0, 60) }));
  const hidden = [...document.querySelectorAll('[data-reveal],[data-mask],[data-draw],[data-arch-line],.map__label')].filter((e) => {
    if (e.closest('details:not([open])') || e.closest('[hidden]')) return false;
    const cs = getComputedStyle(e);
    if (cs.display === 'none') return false;
    return Number(cs.opacity) < 0.95 || /inset\(100%/.test(cs.clipPath) || cs.visibility === 'hidden';
  }).map((e) => e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '')).slice(0, 8);
  const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { const j = JSON.parse(s.textContent); return { ok: true, types: JSON.stringify(j).match(/"@type":"[^"]+"/g) || [] }; } catch (e) { return { ok: false, err: String(e) }; } });
  return {
    scrollW: document.documentElement.scrollWidth, docW,
    wide: [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > docW + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('[data-allow-overflow]'); }).slice(0, 5).map((e) => e.tagName.toLowerCase() + '.' + String(e.className).split(' ')[0]),
    h1: document.querySelectorAll('h1').length, heads,
    imgs: [...document.images].map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute('alt'), w: i.getAttribute('width'), h: i.getAttribute('height'), ok: i.complete && i.naturalWidth > 0, lazy: i.loading })),
    links: [...document.querySelectorAll('a[href]')].map((a) => ({ href: a.getAttribute('href'), text: (a.textContent.trim() || a.getAttribute('aria-label') || '').slice(0, 40), target: a.target, rel: a.rel })),
    ids: [...document.querySelectorAll('[id]')].map((e) => e.id),
    lang: document.documentElement.lang, title: document.title,
    desc: (document.querySelector('meta[name="description"]') || {}).content || '',
    canonical: (document.querySelector('link[rel="canonical"]') || {}).href || '',
    hreflang: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => l.hreflang + '=' + l.getAttribute('href')),
    og: ['og:title', 'og:description', 'og:image', 'og:url'].filter((p) => !document.querySelector(`meta[property="${p}"]`)),
    ld, hidden,
    small: [...document.querySelectorAll('a.btn, button, .cta-bar a, nav a')].filter(vis).filter((e) => { const r = e.getBoundingClientRect(); return r.height < 40; }).map((e) => (e.textContent.trim() || e.getAttribute('aria-label') || e.tagName).slice(0, 24) + ' ' + Math.round(e.getBoundingClientRect().height) + 'px').slice(0, 6),
    introVisible: (() => { const i = document.getElementById('intro'); if (!i) return false; const cs = getComputedStyle(i); return cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0.02 && !i.hidden; })(),
    text: document.body.innerText.length,
  };
};

async function checkPage(browser, base, pg, vp, opts = {}) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.mobile, hasTouch: vp.mobile, deviceScaleFactor: 1, reducedMotion: opts.reduced ? 'reduce' : 'no-preference', javaScriptEnabled: !opts.nojs });
  if (!opts.intro) await ctx.addInitScript(() => { try { sessionStorage.setItem('odr-intro', '1'); } catch (e) { /* ignore */ } });
  const page = await ctx.newPage();
  const tag = `${vp.w}${opts.reduced ? '-reduced' : ''}${opts.nojs ? '-nojs' : ''}`;
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
  if (!opts.reduced && !opts.nojs && vp.w === 1440) {
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
  r.imgs.filter((i) => !i.ok).forEach((i) => add('FAIL', pg.id, tag, 'image did not load: ' + i.src.split('/').pop()));
  if (vp.mobile && !opts.reduced && !opts.nojs && r.small.length) add('NOTE', pg.id, tag, 'controls under 40 px high: ' + r.small.join(' | '));
  if (SHOTS && !opts.reduced && !opts.nojs && vp.w !== 360) { await page.evaluate(() => window.scrollTo(0, 0)); await sleep(400); await page.screenshot({ path: path.join(OUT, `${pg.id}-${vp.w}.png`), fullPage: true }); }
  if (AXE && vp.w !== 360 && !opts.reduced && !opts.nojs) {
    await page.addScriptTag({ path: AXE });
    const res = await page.evaluate(async () => { const r = await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] }); return r.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 3).map((x) => x.target.join(' ')) })); });
    res.forEach((v) => add(v.impact === 'minor' ? 'NOTE' : 'FAIL', pg.id, tag, `axe ${v.id} (${v.impact}, ${v.n}): ${v.ex.join(' ; ')}`));
  }
  if (opts.contrast) await contrast(page, pg, tag, browser);
  await ctx.close();
}

/* Real-pixel contrast: hide the text of each element marked data-on-photo, screenshot its box,
   and compare the text colour with every pixel behind it (1st percentile is reported). */
async function contrast(page, pg, tag, browser) {
  const els = await page.$$('[data-on-photo] :is(h1,h2,h3,p,li,a,span,dt,dd,figcaption,small,strong,em,th,td)');
  if (!els.length) return;
  const dec = await browser.newPage();
  for (const el of els) {
    const info = await el.evaluate((e) => {
      const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (!own) return null;
      const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
      if (r.width < 4 || r.height < 4 || Number(cs.opacity) < 0.05) return null;
      const bg = cs.backgroundColor; const m = bg.match(/[\d.]+/g) || [];
      if (m.length >= 3 && (m.length < 4 || Number(m[3]) > 0.9)) return null;   // own opaque ground
      const btn = e.closest('.btn'); if (btn) { const b = getComputedStyle(btn).backgroundColor.match(/[\d.]+/g) || []; if (b.length >= 3 && (b.length < 4 || Number(b[3]) > 0.9)) return null; }
      return { color: cs.color, size: parseFloat(cs.fontSize), weight: Number(cs.fontWeight), text: e.textContent.trim().slice(0, 40) };
    });
    if (!info) continue;
    await el.scrollIntoViewIfNeeded();
    await sleep(120);
    await el.evaluate((e) => { e.dataset.qaColor = e.style.color; e.style.setProperty('color', 'transparent', 'important'); e.style.setProperty('text-shadow', 'none', 'important'); });
    const box = await el.boundingBox();
    if (!box) continue;
    const shot = await page.screenshot({ clip: { x: Math.max(0, box.x), y: Math.max(0, box.y), width: Math.min(box.width, 1400), height: Math.min(box.height, 600) } });
    await el.evaluate((e) => { e.style.color = e.dataset.qaColor || ''; e.style.removeProperty('text-shadow'); });
    const worst = await dec.evaluate(async ({ b64, color }) => {
      const img = await createImageBitmap(await (await fetch('data:image/png;base64,' + b64)).blob());
      const c = new OffscreenCanvas(img.width, img.height); const x = c.getContext('2d'); x.drawImage(img, 0, 0);
      const d = x.getImageData(0, 0, img.width, img.height).data;
      const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
      const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
      const t = color.match(/[\d.]+/g).map(Number); const tl = lum(t[0], t[1], t[2]);
      const out = [];
      for (let i = 0; i < d.length; i += 16) { const l = lum(d[i], d[i + 1], d[i + 2]); out.push((Math.max(l, tl) + 0.05) / (Math.min(l, tl) + 0.05)); }
      out.sort((a, b) => a - b);
      return { p1: out[Math.floor(out.length * 0.01)], min: out[0] };
    }, { b64: shot.toString('base64'), color: info.color });
    const large = info.size >= 24 || (info.size >= 18.66 && info.weight >= 700);
    const need = large ? 3 : 4.5;
    if (worst.p1 < need) add('FAIL', pg.id, tag, `contrast over photo ${worst.p1.toFixed(2)}:1 (need ${need}) "${info.text}" ${Math.round(info.size)}px`);
  }
  await dec.close();
}

async function introPass(browser, base, vp) {
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
  await sleep(1200);
  const gone = await page.evaluate(() => { const i = document.getElementById('intro'); if (!i) return 'missing'; const cs = getComputedStyle(i); return (i.hidden || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.02) ? 'gone' : 'visible'; });
  if (gone === 'missing') add('FAIL', 'home-it', 'intro-' + vp.w, 'no #intro element on the home page');
  if (gone === 'visible') add('FAIL', 'home-it', 'intro-' + vp.w, 'intro still visible 4 s after load');
  const locked = await page.evaluate(() => { window.scrollTo(0, 600); return new Promise((r) => setTimeout(() => r(window.scrollY), 500)); });
  if (locked < 300) add('FAIL', 'home-it', 'intro-' + vp.w, 'page cannot be scrolled after the intro (scrollY ' + locked + ')');
  await page.reload({ waitUntil: 'load' }); await sleep(700);
  const again = await page.evaluate(() => { const i = document.getElementById('intro'); if (!i) return false; const cs = getComputedStyle(i); return !(i.hidden || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.02); });
  if (again) add('FAIL', 'home-it', 'intro-' + vp.w, 'intro plays again on a second load in the same session');
  errs.forEach((e) => add('FAIL', 'home-it', 'intro-' + vp.w, 'pageerror: ' + e));
  await ctx.close();
  // skip by key
  const ctx2 = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
  const p2 = await ctx2.newPage();
  await p2.goto(base + '/', { waitUntil: 'commit' }); await sleep(450);
  await p2.keyboard.press('Escape'); await sleep(900);
  const skipped = await p2.evaluate(() => { const i = document.getElementById('intro'); if (!i) return true; const cs = getComputedStyle(i); return i.hidden || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) < 0.02; });
  if (!skipped) add('FAIL', 'home-it', 'intro-' + vp.w, 'a key press does not skip the intro');
  await ctx2.close();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { server, port } = await serve(SITE);
  const base = `http://127.0.0.1:${port}`;
  const browser = await chromium.launch();
  const store = {};
  const pages = PAGES.filter((p) => fs.existsSync(path.join(SITE, p.url.endsWith('/') ? p.url + 'index.html' : p.url)));
  PAGES.filter((p) => !pages.includes(p)).forEach((p) => add('FAIL', p.id, '-', 'page file is missing'));
  for (const pg of pages) {
    for (const vp of VIEWPORTS) await checkPage(browser, base, pg, vp, { store, contrast: vp.w !== 360 });
    await checkPage(browser, base, pg, VIEWPORTS[0], { reduced: true, store });
    await checkPage(browser, base, pg, VIEWPORTS[1], { reduced: true, store });
    await checkPage(browser, base, pg, VIEWPORTS[1], { nojs: true, store });
  }
  if (pages.some((p) => p.id === 'home-it')) { await introPass(browser, base, VIEWPORTS[0]); await introPass(browser, base, VIEWPORTS[1]); }
  [['home-it', 'home-en'], ['menu-it', 'menu-en'], ['privacy-it', 'privacy-en']].forEach(([a, b]) => {
    if (!store[a] || !store[b]) return;
    if (store[a].heads !== store[b].heads) add('FAIL', a, 'parity', `heading count differs from ${b}: ${store[a].heads} vs ${store[b].heads}`);
    if (store[a].imgs !== store[b].imgs) add('FAIL', a, 'parity', `image count differs from ${b}: ${store[a].imgs} vs ${store[b].imgs}`);
    if (store[a].ld.join('|') !== store[b].ld.join('|')) add('NOTE', a, 'parity', `JSON-LD types differ from ${b}`);
  });
  for (const f of ['robots.txt', 'sitemap.xml']) if (!fs.existsSync(path.join(SITE, f))) add('FAIL', f, '-', 'file is missing');
  await browser.close(); server.close();
  const fails = findings.filter((f) => f.level === 'FAIL');
  const lines = findings.map((f) => `${f.level} ${f.page} @${f.vp}: ${f.msg}`);
  const summary = `qa-site: ${fails.length} FAIL, ${findings.length - fails.length} NOTE, ${pages.length} pages`;
  fs.writeFileSync(path.join(OUT, 'qa-site.json'), JSON.stringify({ summary, store, findings }, null, 1));
  process.stdout.write(lines.join('\n') + (lines.length ? '\n' : '') + summary + '\n');
  process.exit(fails.length ? 1 : 0);
})().catch((e) => { process.stderr.write(String(e && e.stack || e) + '\n'); process.exit(2); });
