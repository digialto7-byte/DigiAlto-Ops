#!/usr/bin/env python3
"""Build the wine-list fragments of the Osteria dei Rossi website from the approved source.

    python3 tools/build_wines.py        (run from the deliverable root)

Reads knowledge/clients/osteria-dei-rossi/sources/wine-list-2026-11-25.json (wines and
producers as on the printed carta dei vini, approved by the founder for the website WITHOUT
prices) and writes assets/vini/vini-it.html, assets/vini/vini-en.html and
assets/vini/vini-jsonld-{it,en}.json. No name is typed here; no price is ever written.

Each area of the red wines carries a comment marker (`<!-- note:<area> -->`) right after its
heading, where the page generator may put a line of copy.
"""
import json
import re
import unicodedata
from pathlib import Path

R = Path(__file__).resolve().parent.parent
REPO = R.parents[3]
SRC = REPO / 'knowledge' / 'clients' / 'osteria-dei-rossi' / 'sources' / 'wine-list-2026-11-25.json'
OUT = R / 'assets' / 'vini'
SITE = 'https://www.osteriadeirossi.it'
ROMAN = ['I', 'II', 'III', 'IV', 'V']


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def typo(s):
    """Typographic apostrophe, as on the rest of the site."""
    return s.replace("'", '’')


def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('ascii').lower()
    s = re.sub(r'^(dal|dalla|from)\s+', '', s)
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def build(lang):
    data = json.loads(SRC.read_text(encoding='utf-8'))
    page = f'{SITE}/vini/' if lang == 'it' else f'{SITE}/en/wine-list/'
    parts, ld_sections, count = [], [], 0
    for n, group in enumerate(data['groups']):
        gid = group['id']
        parts.append(f'<section class="menu-section wine-group" id="{gid}" aria-labelledby="h-{gid}" data-reveal>')
        parts.append(f'  <h2 class="menu-section__title" id="h-{gid}"><span class="menu-section__num" aria-hidden="true">{ROMAN[n]}</span> {esc(group[lang])}</h2>')
        ld_items = []
        for area in group['sections']:
            aid = slug(area['it']) if area['it'] else ''
            if aid:
                parts.append(f'  <div class="wine-area" id="{gid}-{aid}">')
                parts.append(f'    <h3 class="wine-area__title">{esc(area[lang])}</h3>')
                parts.append(f'    <!-- note:{aid} -->')
            else:
                parts.append('  <div class="wine-area">')
            parts.append('    <ul class="wine-list">')
            for w in area['wines']:
                name, producer = typo(w['name']), typo(w.get('producer', ''))
                row = f'<span class="wine__name">{esc(name)}</span>'
                if producer:
                    row += f' <span class="wine__producer">{esc(producer)}</span>'
                parts.append(f'      <li class="wine">{row}</li>')
                entry = {'@type': 'MenuItem', 'name': name}
                if producer:
                    entry['description'] = producer
                ld_items.append(entry)
                count += 1
            parts.append('    </ul>')
            parts.append('  </div>')
        parts.append('</section>')
        ld_sections.append({'@type': 'MenuSection', 'name': group[lang], 'hasMenuItem': ld_items})
    ld = {'@context': 'https://schema.org', '@type': 'Menu', '@id': f'{page}#menu',
          'name': 'Carta dei vini dell’Osteria dei Rossi' if lang == 'it' else 'Osteria dei Rossi wine list',
          'url': page, 'inLanguage': 'it' if lang == 'it' else 'en-GB',
          'hasMenuSection': ld_sections}
    return '\n'.join(parts) + '\n', ld, count


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for lang in ('it', 'en'):
        fragment, ld, count = build(lang)
        if '€' in fragment or re.search(r'\d+\s*(?:euro|eur)\b', fragment, re.I):
            raise SystemExit('build_wines: a price slipped into the wine list')
        (OUT / f'vini-{lang}.html').write_text(fragment, encoding='utf-8')
        (OUT / f'vini-jsonld-{lang}.json').write_text(json.dumps(ld, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
        print(f'{lang}: {len(ld["hasMenuSection"])} groups, {count} wines')


if __name__ == '__main__':
    main()
