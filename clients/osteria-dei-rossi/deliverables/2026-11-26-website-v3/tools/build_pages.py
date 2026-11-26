#!/usr/bin/env python3
"""Build every page of the Osteria dei Rossi website from the approved sources.

    python3 tools/build_pages.py        (run from the deliverable root)

Writes site/index.html, site/en/index.html, the menu, wine-list (vini), find-us (dove), privacy
pages in both languages, site/404.html, site/robots.txt and site/sitemap.xml.

Every visible text comes verbatim from copy.md (IT or EN slots); title, meta, Open Graph, FAQ,
JSON-LD and the sitemap come verbatim from seo-v2.md (pages P.1 to P.8, alt texts A, questions
Q.1 to Q.6, JSON-LD J.1 to J.6, S.1); privacy, 404, alt texts 1 to 20, the menu breadcrumb and
robots.txt from seo.md; the dish sections and the Menu JSON-LD are the generated files in
assets/menu/, the wine list and its JSON-LD the generated files in assets/vini/, copied byte
for byte (only the three note markers of the wine list are replaced); SVGs are inlined from
assets/*.svg unchanged (only class and layout attributes are added). Nothing is typed here.
"""
import base64
import json
import posixpath
import re
import sys
from pathlib import Path

R = Path(__file__).resolve().parent.parent          # the deliverable root
TPL = Path(__file__).resolve().parent / 'templates'
SITE = R / 'site'
DOMAIN = 'https://www.osteriadeirossi.it'

# url paths of the pages, by kind and language
URLS = {
    ('home', 'it'): '/', ('home', 'en'): '/en/',
    ('menu', 'it'): '/menu/', ('menu', 'en'): '/en/menu/',
    ('vini', 'it'): '/vini/', ('vini', 'en'): '/en/wine-list/',
    ('dove', 'it'): '/dove-siamo/', ('dove', 'en'): '/en/find-us/',
    ('privacy', 'it'): '/privacy/', ('privacy', 'en'): '/en/privacy/',
}
INTRO_KEY = {'home': 'g', 'menu': 'm', 'vini': 'v'}      # keys of the session entry odr-intro
PAGES = [
    {'out': 'index.html', 'kind': 'home', 'lang': 'it'},
    {'out': 'en/index.html', 'kind': 'home', 'lang': 'en'},
    {'out': 'menu/index.html', 'kind': 'menu', 'lang': 'it'},
    {'out': 'en/menu/index.html', 'kind': 'menu', 'lang': 'en'},
    {'out': 'vini/index.html', 'kind': 'vini', 'lang': 'it'},
    {'out': 'en/wine-list/index.html', 'kind': 'vini', 'lang': 'en'},
    {'out': 'dove-siamo/index.html', 'kind': 'dove', 'lang': 'it'},
    {'out': 'en/find-us/index.html', 'kind': 'dove', 'lang': 'en'},
    {'out': 'privacy/index.html', 'kind': 'privacy', 'lang': 'it'},
    {'out': 'en/privacy/index.html', 'kind': 'privacy', 'lang': 'en'},
    {'out': '404.html', 'kind': '404', 'lang': 'it'},
]


def fail(msg):
    sys.exit('build_pages: ' + msg)


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def attr(s):
    return esc(s).replace('"', '&quot;')


# ---------------------------------------------------------------- copy.md
COPY = {}
_sec = _lang = None
for line in (R / 'copy.md').read_text(encoding='utf-8').splitlines():
    m = re.match(r'^### (\S+)', line)
    if m:
        _sec, _lang = m.group(1), None
        continue
    if line.startswith('## '):
        _sec = None
        continue
    if line.strip() in ('**IT**', '**EN**'):
        _lang = line.strip()[2:4].lower()
        continue
    m = re.match(r'^- (\w+): (.*)$', line)
    if _sec and _lang and m:
        COPY[(_lang, _sec, m.group(1))] = m.group(2).strip()


def copy(lang, sec, key):
    v = COPY.get((lang, sec, key))
    if v is None:
        fail(f'missing copy slot {lang} {sec}.{key}')
    return v


def italic(v):
    v = v.strip()
    if not (v.startswith('*') and v.endswith('*')):
        fail('expected an *italic* completion: ' + v)
    return v.strip('*')


# ---------------------------------------------------------------- seo.md and seo-v2.md
SEO = (R / 'seo.md').read_text(encoding='utf-8')
SEO2 = (R / 'seo-v2.md').read_text(encoding='utf-8')


def seo_section(title_start, text=None):
    text = SEO if text is None else text
    part = text.split('\n### ' + title_start, 1)
    if len(part) < 2:
        fail('seo section missing: ' + title_start)
    return part[1].split('\n### ', 1)[0].split('\n## ', 1)[0]


def table_value(section_text, label):
    m = re.search(r'^\| ' + re.escape(label) + r'[^|]*\| `(.*?)` \|\s*$', section_text, re.M)
    if not m:
        fail('seo field missing: ' + label)
    return m.group(1)


# page spec of seo-v2.md by kind and language
SPEC = {('home', 'it'): 'P.1 ', ('home', 'en'): 'P.2 ', ('menu', 'it'): 'P.3 ', ('menu', 'en'): 'P.4 ',
        ('vini', 'it'): 'P.5 ', ('vini', 'en'): 'P.6 ', ('dove', 'it'): 'P.7 ', ('dove', 'en'): 'P.8 '}


def page_seo(kind, lang):
    if (kind, lang) in SPEC:
        sec = seo_section(SPEC[(kind, lang)], SEO2)
        return {
            'title': table_value(sec, 'Meta title'),
            'description': table_value(sec, 'Meta description'),
            'og_title': table_value(sec, 'Open Graph title'),
            'og_description': table_value(sec, 'Open Graph description'),
            'robots': 'index, follow, max-image-preview:large',
        }
    if kind == 'privacy':
        sec = seo_section('2.5 ')
        col = 1 if lang == 'it' else 2

        def row(label):
            m = re.search(r'^\| ' + re.escape(label) + r'[^|]*\|(.*)\|\s*$', sec, re.M)
            if not m:
                fail('privacy seo row missing: ' + label)
            return re.findall(r'`(.*?)`', m.group(1))[col - 1]
        title, desc = row('Meta title'), row('Meta description')
        robots = row('Robots')
        return {'title': title, 'description': desc, 'og_title': title, 'og_description': desc, 'robots': robots}
    sec = seo_section('2.6 ')
    return {'title': re.search(r'Title `(.*?)`', sec).group(1), 'robots': 'noindex'}


def code_block(section_title, lang_tag, text=None):
    sec = seo_section(section_title, text)
    m = re.search(r'```' + lang_tag + r'\n(.*?)\n```', sec, re.S)
    if not m:
        fail(f'no {lang_tag} block in seo section {section_title}')
    return m.group(1)


# alt texts: seo.md section 3 (rows 1 to 20 and the logo) and seo-v2.md section A (rows 21 to 34)
ALTS = {'it': {}, 'en': {}}
ALT_ROW = r'^\| (\d+) \| `([^`]+)` \| (.+?) \(\d+\) \| (.+?) \(\d+\) \|\s*$'
for line in SEO.split('\n## 3. Alt text', 1)[1].split('\n## ', 1)[0].splitlines():
    m = re.match(ALT_ROW, line)
    if m:
        ALTS['it'][m.group(2)] = m.group(3).strip()
        ALTS['en'][m.group(2)] = m.group(4).strip()
    m = re.match(r'^\| Logo \| `logo-osteria-dei-rossi`[^|]*\| ([^|]+) \| ([^|]+) \|', line)
    if m:
        ALTS['it']['logo'] = m.group(1).strip()
        ALTS['en']['logo'] = m.group(2).strip()
for line in SEO2.split('\n## A. Alt text', 1)[1].split('\n## ', 1)[0].splitlines():
    m = re.match(ALT_ROW, line)
    if m:
        for lang, val in (('it', m.group(3)), ('en', m.group(4))):
            if len(val.strip()) > 125:
                fail(f'alt text longer than 125 characters: {m.group(2)} ({lang})')
        ALTS['it'][m.group(2)] = m.group(3).strip()
        ALTS['en'][m.group(2)] = m.group(4).strip()

# questions: one FAQPage block per page and language is the single source of the visible questions
FAQ_BLOCK = {('dove', 'it'): 'Q.1 ', ('dove', 'en'): 'Q.2 ', ('menu', 'it'): 'Q.3 ', ('menu', 'en'): 'Q.4 ',
             ('vini', 'it'): 'Q.5 ', ('vini', 'en'): 'Q.6 '}
FAQ_LD = {k: code_block(v, 'json', SEO2) for k, v in FAQ_BLOCK.items()}
FAQ = {k: json.loads(v)['mainEntity'] for k, v in FAQ_LD.items()}

LD = {
    ('home', 'it'): [code_block('J.1 ', 'json', SEO2)],
    ('home', 'en'): [code_block('J.2 ', 'json', SEO2)],
}
for lang, num, jnum in (('it', '6.5 ', 'J.3 '), ('en', '6.6 ', 'J.4 ')):
    graph = json.loads(code_block(num, 'json'))['@graph']
    crumb = next(g for g in graph if g.get('@type') == 'BreadcrumbList')
    crumb = {'@context': 'https://schema.org', **crumb}
    menu_ld = (R / 'assets' / 'menu' / f'menu-jsonld-{lang}.json').read_text(encoding='utf-8').rstrip('\n')
    LD[('menu', lang)] = [menu_ld, json.dumps(crumb, ensure_ascii=False, indent=2), FAQ_LD[('menu', lang)]]
    wine_ld = (R / 'assets' / 'vini' / f'vini-jsonld-{lang}.json').read_text(encoding='utf-8').rstrip('\n')
    LD[('vini', lang)] = [code_block(jnum, 'json', SEO2), wine_ld, FAQ_LD[('vini', lang)]]
for lang, jnum in (('it', 'J.5 '), ('en', 'J.6 ')):
    LD[('dove', lang)] = [code_block(jnum, 'json', SEO2), FAQ_LD[('dove', lang)]]
for key, blocks in LD.items():
    for b in blocks:
        json.loads(b)
        if '</' in b:
            fail('JSON-LD contains "</"')
        if key[0] == 'vini' and '€' in b:
            fail('a price in the wine-list JSON-LD')

# ---------------------------------------------------------------- images.md
IMGS = {}
_set2 = False
for line in (R / 'assets' / 'images.md').read_text(encoding='utf-8').splitlines():
    if line.startswith('## Second photo set'):
        _set2 = True
    m = re.match(r'^\| `([^`]+)` \| (bg|tile) \| [^|]+\| ([\d, ]+) \| `([^`]+)` \((\d+)×(\d+)\) \|', line)
    if m:
        IMGS[m.group(1)] = {'widths': [int(w) for w in m.group(3).split(',')], 'jpg': m.group(4),
                            'w': int(m.group(5)), 'h': int(m.group(6)), 'set2': _set2}


# ---------------------------------------------------------------- SVG
def svg(name, attrs=''):
    t = (R / 'assets' / f'{name}.svg').read_text(encoding='utf-8').strip()
    t = re.sub(r'^<\?xml[^>]*>\s*', '', t)
    if name == 'mappa-dentro-le-mura':       # crop to the walls: the map draws larger (paths untouched)
        t = t.replace('viewBox="0 0 800 800"', 'viewBox="150 30 600 750"', 1)
    return t.replace('<svg ', '<svg ' + attrs + ' ', 1) if attrs else t


ARROW = svg('freccia-osteria', 'class="arrow" focusable="false"')
ARCH = ('<svg class="arch__line" data-arch-line viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden="true" focusable="false">'
        '<path vector-effect="non-scaling-stroke" d="M0 125 V48 A62 62 0 0 1 50 0 A62 62 0 0 1 100 48 V125"/></svg>')
# map labels: SVG coordinates of the place and where the label sits (r right, l left, b below, w wraps)
MAP_VIEWBOX = (150, 30, 600, 750)
MAP_POS = [(330, 60, 'r'), (478, 282, 'l'), (545, 345, 'rw'), (486, 360, 'b'), (430, 470, 'l'), (330, 520, 'r'), (668, 722, 'l')]
WINE_NOTES = ('chianti', 'montepulciano', 'montalcino')      # the markers that carry a note line


# ---------------------------------------------------------------- one page
class Page:
    def __init__(self, cfg):
        self.out, self.kind, self.lang = cfg['out'], cfg['kind'], cfg['lang']
        self.root_relative = self.kind == '404'
        self.dir = '/' + posixpath.dirname(self.out)
        self.a = '/' if self.root_relative else ('../' * self.out.count('/'))

    def c(self, sec, key):
        return copy(self.lang, sec, key)

    def u(self, target):
        """Link to a site path: relative from this page, root-relative on the 404."""
        if self.root_relative:
            return target
        rel = posixpath.relpath(target.rstrip('/') or '/', self.dir)
        return './' if rel == '.' else rel + '/'

    def links(self):
        twin_lang = 'en' if self.lang == 'it' else 'it'
        kind = 'home' if self.kind == '404' else self.kind
        on_home = self.kind == 'home'
        own_book = self.kind in ('home', 'menu', 'vini', 'dove')      # pages that carry #prenota
        return {
            'home': self.u(URLS[('home', self.lang)]),
            'menu': self.u(URLS[('menu', self.lang)]),
            'vini': self.u(URLS[('vini', self.lang)]),
            'dove': self.u(URLS[('dove', self.lang)]),
            'privacy': self.u(URLS[('privacy', self.lang)]),
            'homeanchor': '' if on_home else self.u(URLS[('home', self.lang)]),
            'book': '#prenota' if own_book else self.u(URLS[('home', self.lang)]) + '#prenota',
            'top': '#porta' if on_home else '#contenuto',
            'lang_it': self.u(URLS[(kind, 'it')]),
            'lang_en': self.u(URLS[(kind, 'en')]),
            'twin': self.u(URLS[(kind, twin_lang)]),
        }

    def srcset(self, slug):
        if slug not in IMGS:
            fail('no photo files listed for ' + slug)
        return ', '.join(f'{self.a}assets/img/{slug}-{w}.avif {w}w' for w in IMGS[slug]['widths'])

    def alt(self, slug):
        if slug not in ALTS[self.lang]:
            fail(f'no alt text for {slug} ({self.lang})')
        return ALTS[self.lang][slug]

    def pic(self, slug, sizes, cls='', mode=''):
        i = IMGS[slug]
        extra = ' loading="eager" fetchpriority="high" decoding="async"' if mode == 'eager' else ' loading="lazy" decoding="async"'
        if mode == 'parallax':
            extra += ' data-parallax'
        cl = f' class="{cls}"' if cls else ''
        return (f'<picture><source type="image/avif" srcset="{self.srcset(slug)}" sizes="{sizes}">'
                f'<img{cl} src="{self.a}assets/img/{i["jpg"]}" width="{i["w"]}" height="{i["h"]}" '
                f'alt="{attr(self.alt(slug))}"{extra}></picture>')

    def tile(self, slug, sizes, caption, cls=''):
        """A framed tile with its caption; the aspect class follows the photo (3:2 or 5:4)."""
        i = IMGS[slug]
        sec, key = caption.split('.', 1)
        ratio = '32' if abs(i['w'] / i['h'] - 1.5) < .05 else '54'
        ph = 'ph-dark' if i['set2'] else 'ph-' + slug
        return (f'<figure class="tile {cls}">\n'
                f'          <div class="tile__box tile--{ratio} {ph}" data-mask>\n'
                f'            {self.pic(slug, sizes)}\n          </div>\n'
                f'          <figcaption class="caption" data-reveal>{esc(self.c(sec, key))}</figcaption>\n'
                f'        </figure>')

    # ---- head
    def meta(self):
        s = page_seo(self.kind, self.lang)
        out = [f'<title>{esc(s["title"])}</title>']
        if 'description' in s:
            out.append(f'<meta name="description" content="{attr(s["description"])}">')
        out.append(f'<meta name="robots" content="{s["robots"]}">')
        if self.kind == '404':
            return '\n'.join(out)
        me = DOMAIN + URLS[(self.kind, self.lang)]
        it, en = DOMAIN + URLS[(self.kind, 'it')], DOMAIN + URLS[(self.kind, 'en')]
        out += [f'<link rel="canonical" href="{me}">',
                f'<link rel="alternate" hreflang="it" href="{it}">',
                f'<link rel="alternate" hreflang="en" href="{en}">',
                f'<link rel="alternate" hreflang="x-default" href="{it}">',
                '<meta property="og:type" content="website">',
                '<meta property="og:site_name" content="Osteria dei Rossi">',
                f'<meta property="og:locale" content="{"it_IT" if self.lang == "it" else "en_GB"}">',
                f'<meta property="og:locale:alternate" content="{"en_GB" if self.lang == "it" else "it_IT"}">',
                f'<meta property="og:url" content="{me}">',
                f'<meta property="og:title" content="{attr(s["og_title"])}">',
                f'<meta property="og:description" content="{attr(s["og_description"])}">',
                f'<meta property="og:image" content="{DOMAIN}/assets/img/og-osteria-dei-rossi-siena.jpg">',
                '<meta property="og:image:width" content="1200">',
                '<meta property="og:image:height" content="630">',
                '<meta name="twitter:card" content="summary_large_image">']
        return '\n'.join(out)

    def jsonld(self):
        return ''.join(f'<script type="application/ld+json">\n{b}\n</script>\n' for b in LD.get((self.kind, self.lang), []))

    # ---- composed blocks
    def dish_row(self, value):
        """One dish row from a `name | line | price | badge` slot. No price: no leader and no price."""
        parts = [p.strip() for p in value.split('|')]
        parts += [''] * (4 - len(parts))
        name, line, price, badge = parts[:4]
        head = f'<span class="dish__name">{esc(name)}</span>'
        if price:
            head += f'<span class="dish__dots" aria-hidden="true"></span><span class="dish__price">{esc(price)}</span>'
        b = ''
        if badge:
            kind = 'stagione' if badge == self.c('menu-page', 'badge_stagione') else 'oste'
            b = f'<p class="dish__badges"><span class="badge badge--{kind}">{esc(badge)}</span></p>\n      '
        return (f'<li class="dish" data-reveal>\n'
                f'      <div class="dish__head">{head}</div>\n'
                f'      {b}<p class="dish__desc">{esc(line)}</p>\n'
                f'    </li>')

    def rows(self, arg):
        """{{rows:sec.key}} one row; {{rows:sec.prefix|N}} the rows prefix1 to prefixN."""
        spec, _, n = arg.partition('|')
        sec, key = spec.split('.', 1)
        keys = [f'{key}{i}' for i in range(1, int(n) + 1)] if n else [key]
        items = '\n    '.join(self.dish_row(self.c(sec, k)) for k in keys)
        return f'<ul class="dish-rows" data-reveal-group>\n    {items}\n  </ul>'

    def hours_block(self):
        rows = []
        for k in ('hours_row_1', 'hours_row_2', 'hours_row_3'):
            d, t = self.c('prenota', k).split(' · ', 1)
            rows.append(f'<div class="hours__row" data-reveal><dt>{esc(d)}</dt><dd>{esc(t)}</dd></div>')
        return '<dl class="hours">\n  ' + '\n  '.join(rows) + '\n</dl>'

    def blocks(self):
        b = {'arrow': ARROW, 'archline': ARCH, 'hours': self.hours_block()}
        lines = self.c('dove-siamo', 'address_block').split(' // ')
        b['address'] = '<br>'.join(esc(p) if i else re.sub(r'(\d+(?:/\d+)?)$', r'<span class="dove__num">\1</span>', esc(p)) for i, p in enumerate(lines))
        b['hours_compact'] = '<br>'.join(esc(p) for p in self.c('global-footer', 'hours_compact').split(' / '))
        if self.kind == 'home':
            b['wines'] = '<ul class="wines__list">' + ''.join(f'<li>{esc(w)}</li>' for w in self.c('cantina', 'wines_list').split(' · ')) + '</ul>'
            # the English page shows the Italian welcome line under the translation
            quote_it = ''
            if self.lang == 'en':
                quote_it = f'<p class="welcome__quote-it" lang="it" data-reveal>{esc(self.c("casa", "quote_it"))}</p>'
            b['quote_it'] = quote_it
        if self.kind == 'dove':
            labels = self.c('dove-siamo', 'map_labels').split(' | ')
            if len(labels) != len(MAP_POS):
                fail('map_labels must have seven labels')
            spans = []
            vx, vy, vw, vh = MAP_VIEWBOX
            for (x, y, place), lab in zip(MAP_POS, labels):
                cls = 'map__label map__label--' + place[0]
                if 'w' in place:
                    cls += ' map__label--wrap'
                if lab == 'Osteria dei Rossi':
                    cls += ' map__label--osteria'
                spans.append(f'<span class="{cls}" style="left:{(x - vx) / vw * 100:.2f}%;top:{(y - vy) / vh * 100:.2f}%">{esc(lab)}</span>')
            b['maplabels'] = '\n          '.join(spans)
        if (self.kind, self.lang) in FAQ:
            b['faq'] = '\n'.join(
                f'      <details class="faq__item" data-reveal{" open" if i == 0 else ""}>\n'
                f'        <summary><span class="faq__q">{esc(q["name"])}</span></summary>\n'
                f'        <div class="faq__a"><p>{esc(q["acceptedAnswer"]["text"])}</p></div>\n'
                f'      </details>' for i, q in enumerate(FAQ[(self.kind, self.lang)]))
        if self.kind == 'menu':
            b['menu_sections'] = self.menu_sections()
        if self.kind == 'vini':
            b.update(self.wine_blocks())
        if self.kind == 'privacy':
            b['privacy_blocks'] = '\n'.join(
                f'  <h2>{esc(self.c("privacy", f"p{n}_title"))}</h2>\n  <p>{esc(self.c("privacy", f"p{n}_text"))}</p>' for n in range(1, 20) if ('it', 'privacy', f'p{n}_title') in COPY)
        return b

    def menu_sections(self):
        """The generated dish markup, byte for byte, with two photo bands after Primi and Griglia."""
        raw = (R / 'assets' / 'menu' / f'menu-{self.lang}.html').read_text(encoding='utf-8')
        bands = {'primi': 'tagliatelle-ai-porcini-freschi-1', 'griglia': 'bistecca-alla-fiorentina-siena'}
        out, pos = [], 0
        for sid, slug in bands.items():
            start = raw.find(f'<section class="menu-section" id="{sid}"')
            if start < 0:
                fail(f'menu-{self.lang}.html has no section #{sid}')
            end = raw.index('</section>', start) + len('</section>\n')
            out.append(raw[pos:end])
            ph = 'ph-dark' if IMGS[slug]['set2'] else 'ph-' + slug
            out.append(f'<figure class="menu-band">\n  <div class="menu-band__media {ph} ph-{slug}">\n    '
                       f'{self.pic(slug, "100vw", "menu-band__img", "parallax")}\n  </div>\n</figure>\n')
            pos = end
        out.append(raw[pos:])
        joined = ''.join(out)
        if re.sub(r'<figure class="menu-band">.*?</figure>\n', '', joined, flags=re.S) != raw:
            fail('menu sections changed while inserting the photo bands')
        return joined.rstrip('\n')

    def wine_blocks(self):
        """The generated wine list, byte for byte, except the three note markers (a note line) and
        the other markers (removed). Split into its three groups so the page can place a photo band
        between them; the groups put back together are the processed fragment."""
        raw = (R / 'assets' / 'vini' / f'vini-{self.lang}.html').read_text(encoding='utf-8')

        def marker(m):
            area = m.group(2)
            if area in WINE_NOTES:
                return f'{m.group(1)}<p class="wine-area__note">{esc(self.c("vini-page", "note_" + area))}</p>\n'
            return ''
        done = re.sub(r'([ \t]*)<!-- note:([\w-]+) -->\n?', marker, raw)
        if 'note:' in done or '€' in done:
            fail('wine list: a marker is left or a price is present')
        sections = {m.group(1): m.group(0) for m in re.finditer(r'<section class="menu-section wine-group" id="(\w+)".*?</section>\n?', done, re.S)}
        if list(sections) != ['rossi', 'bianchi', 'bollicine'] or ''.join(sections.values()) != done:
            fail('wine list fragment: expected the groups rossi, bianchi, bollicine')
        nav = []
        for gid, sec in sections.items():
            h = re.search(r'<h2[^>]*>(?:<span[^>]*>.*?</span>)?\s*(.*?)</h2>', sec, re.S)
            nav.append(f'<li><a href="#{gid}">{h.group(1)}</a></li>')
        out = {'wine_' + gid: sec.rstrip('\n') for gid, sec in sections.items()}
        out['wine_nav'] = '\n    '.join(nav)
        return out

    # ---- render
    def render(self):
        tpl = (TPL / f'{self.kind}.txt').read_text(encoding='utf-8')
        if self.kind != '404':      # the 404 is a self-contained page with its own head
            tpl = (TPL / '_head.txt').read_text(encoding='utf-8') + tpl
        tpl = re.sub(r'\{\{include:(\w+)\}\}', lambda m: (TPL / f'{m.group(1)}.txt').read_text(encoding='utf-8').rstrip('\n'), tpl)
        links = self.links()
        tpl = tpl.replace('{{meta}}', self.meta()).replace('{{jsonld}}', self.jsonld())
        hero = ''
        if self.kind == 'home':
            hero = (f'<link rel="preload" as="image" type="image/avif" fetchpriority="high" imagesizes="(max-width: 44.99rem) 200vw, 100vw" '
                    f'imagesrcset="{self.srcset("osteria-dei-rossi-siena-esterno")}">\n')
        tpl = tpl.replace('{{preload_hero}}', hero).replace('{{lang}}', self.lang).replace('{{a}}', self.a)
        tpl = tpl.replace('{{intro_key}}', INTRO_KEY.get(self.kind, ''))
        tpl = tpl.replace('{{cur_it}}', ' aria-current="page"' if self.lang == 'it' and self.kind != '404' else '')
        for k in ('menu', 'vini', 'dove'):
            tpl = tpl.replace('{{cur_' + k + '}}', ' aria-current="page"' if self.kind == k else '')
        tpl = tpl.replace('{{cur_en}}', ' aria-current="page"' if self.lang == 'en' else '')
        for key, val in self.blocks().items():
            tpl = tpl.replace('{{' + key + '}}', val)

        def repl(m):
            kind, arg = m.group(1), m.group(2)
            if kind == 'c':
                s, k = arg.split('.', 1)
                return esc(self.c(s, k))
            if kind in ('ce', 'he'):          # the English slot, whatever the page language
                s, rest = arg.split('.', 1)
                if kind == 'ce':
                    return esc(copy('en', s, rest))
                k1, k2 = rest.split('|')
                return f'<span class="hl">{esc(copy("en", s, k1))}</span> <em>{esc(italic(copy("en", s, k2)))}</em>'
            if kind == 'h':
                s, rest = arg.split('.', 1)
                k1, k2 = rest.split('|')
                return f'<span class="hl">{esc(self.c(s, k1))}</span> <em>{esc(italic(self.c(s, k2)))}</em>'
            if kind == 'alt':
                return attr(ALTS[self.lang][arg])
            if kind == 'u':
                return links[arg]
            if kind == 'svg':
                name, _, a = arg.partition('|')
                return svg(name, a)
            if kind == 'pic':
                slug, sizes, cls, *mode = arg.split('|')
                return self.pic(slug, sizes, cls, mode[0] if mode else '')
            if kind == 'tile':
                slug, sizes, caption, *cls = arg.split('|')
                return self.tile(slug, sizes, caption, cls[0] if cls else '')
            if kind == 'rows':
                return self.rows(arg)
            fail('unknown marker ' + kind)
        html = re.sub(r'\{\{(\w+):(.*?)\}\}', repl, tpl)
        left = re.findall(r'\{\{[^}]*\}\}', html)
        if left:
            fail(f'{self.out}: unfilled markers ' + ', '.join(sorted(set(left))))
        if self.kind == 'vini' and '€' in html:
            fail(f'{self.out}: a price on the wine-list page')
        return html


def build_embedded_fonts():
    """fonts-embedded.css: the rules of fonts.css with the woff2 files inlined as data: URLs (for file://)."""
    fonts = SITE / 'assets' / 'fonts'

    def inline(m):
        data = base64.b64encode((fonts / m.group(1)).read_bytes()).decode('ascii')
        return 'url("data:font/woff2;base64,' + data + '")'
    css = re.sub(r'url\("([^"]+\.woff2)"\)', inline, (fonts / 'fonts.css').read_text(encoding='utf-8'))
    (fonts / 'fonts-embedded.css').write_text(css, encoding='utf-8')
    print('wrote site/assets/fonts/fonts-embedded.css')


def main():
    for cfg in PAGES:
        page = Page(cfg)
        path = SITE / page.out
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(page.render(), encoding='utf-8')
        print('wrote', path.relative_to(R))
    (SITE / 'robots.txt').write_text(code_block('7.1 ', 'text') + '\n', encoding='utf-8')
    (SITE / 'sitemap.xml').write_text(code_block('S.1 ', 'xml', SEO2) + '\n', encoding='utf-8')
    print('wrote site/robots.txt, site/sitemap.xml')
    build_embedded_fonts()


if __name__ == '__main__':
    main()
