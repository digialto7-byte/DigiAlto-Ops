#!/usr/bin/env python3
"""Build the menu page fragments and the Menu JSON-LD from the approved live-menu capture.

  python3 tools/build_menu.py

Reads   knowledge/clients/osteria-dei-rossi/sources/menu-live-2026-11-24.json        (food)
        knowledge/clients/osteria-dei-rossi/sources/menu-live-2026-11-24-drinks.json  (drinks)
Writes  assets/menu/menu-it.html, menu-en.html        (the <section> blocks of the menu page)
        assets/menu/menu-jsonld-it.json, -en.json     (schema.org Menu for the same content)

Names, descriptions and prices are copied as published. Allergen numbers are never written
(not approved). Items the osteria hides on its own menu are left out. One description is
skipped on purpose (see SKIP_DESCRIPTION): the published text belongs to a different dish.
One sentence is omitted (see OMIT_SENTENCES): a claim that cannot be verified.
"""
from __future__ import annotations

import html
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
ROOT = HERE.parents[3]
SRC = ROOT / "knowledge/clients/osteria-dei-rossi/sources"
OUT = HERE / "assets" / "menu"
SITE = "https://www.osteriadeirossi.it"

SECTIONS = {
    "antipasti": ("Antipasti", "Starters"),
    "primi": ("Primi", "First courses"),
    "secondi": ("Secondi", "Main courses"),
    "griglia": ("Griglia", "From the grill"),
    "contorni": ("Contorni", "Side dishes"),
    "dolci": ("Dolci", "Desserts"),
    "bevande": ("Bevande", "Drinks"),
}
ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"]
BADGE = {
    "oste": ("Consigliato dall’Oste", "Consigliato dall’Oste"),
    "stagione": ("Piatto di stagione", "Seasonal dish"),
    "esaurito": ("Esaurito oggi", "Sold out today"),
}
UNIT = {"etto": ("all’etto", "per 100 g")}
SKIP_DESCRIPTION = {"Ravioli con Zucca Gialla, Pancetta e stracciatella"}
# A claim of being the only ones in the province cannot be verified, so that one sentence is
# left off the website until the owner confirms it (it stays on the osteria's own QR menu).
OMIT_SENTENCES = (
    "Una specialità unica: siamo gli unici a Siena e provincia a proporvela così. ",
    "A one-of-a-kind speciality: we’re the only ones in Siena and the surrounding province serving it this way. ",
)


def text_of(item: dict, key: str) -> str:
    """The published description, minus the skipped description and the omitted sentence."""
    if item.get("n") in SKIP_DESCRIPTION:
        return ""
    text = (item.get(key) or "").strip()
    for sentence in OMIT_SENTENCES:
        text = text.replace(sentence, "")
    return text.strip()


def esc(text: str) -> str:
    return html.escape(text, quote=False)


def price(value: str, unit: str, lang: int) -> str:
    """'22' -> '22 €'; '9' + etto -> '9 € all’etto'. English keeps the euro sign after the figure."""
    value = value.strip()
    if lang == 1:
        value = value.replace(",", ".")
    text = value if "€" in value else f"{value} €"
    if unit:
        text += " " + UNIT[unit][lang]
    return text


def number(value: str) -> str:
    return value.replace("€", "").replace(",", ".").strip()


def dish_html(item: dict, lang: int) -> str:
    key = "it" if lang == 0 else "en"
    desc = text_of(item, key)
    badges = [BADGE[k][lang] for k in ("oste", "stagione", "esaurito") if item.get(k)]
    cls = {"oste": "badge badge--oste", "stagione": "badge badge--stagione", "esaurito": "badge badge--esaurito"}
    out = ['      <li class="dish">',
           '        <div class="dish__head">',
           f'          <h3 class="dish__name">{esc(item["n"])}</h3>',
           '          <span class="dish__dots" aria-hidden="true"></span>',
           f'          <span class="dish__price">{esc(price(item["p"], item.get("unita", ""), lang))}</span>',
           '        </div>']
    if badges:
        spans = "".join(f'<span class="{cls[k]}">{esc(BADGE[k][lang])}</span>'
                        for k in ("oste", "stagione", "esaurito") if item.get(k))
        out.append(f'        <p class="dish__badges">{spans}</p>')
    if desc:
        out.append(f'        <p class="dish__desc">{esc(desc)}</p>')
    options = [o.get(key, "") if isinstance(o, dict) else str(o) for o in (item.get("opz") or [])]
    if options:
        out.append(f'        <p class="dish__options">{esc(" · ".join(o for o in options if o))}</p>')
    variants = item.get("varianti") or []
    if variants:
        out.append('        <ul class="dish__variants">')
        for v in variants:
            vdesc = (v.get(key) or "").strip()
            out.append('          <li class="variant">')
            out.append('            <div class="dish__head">'
                       f'<span class="variant__name">{esc(v["n"])}</span>'
                       '<span class="dish__dots" aria-hidden="true"></span>'
                       f'<span class="dish__price">{esc(price(v["p"], "", lang))}</span></div>')
            if vdesc:
                out.append(f'            <p class="dish__desc">{esc(vdesc)}</p>')
            out.append('          </li>')
        out.append('        </ul>')
    out.append('      </li>')
    return "\n".join(out)


def build(lang: int) -> tuple[str, dict]:
    key = "it" if lang == 0 else "en"
    food = json.loads((SRC / "menu-live-2026-11-24.json").read_text(encoding="utf-8"))
    drinks = json.loads((SRC / "menu-live-2026-11-24-drinks.json").read_text(encoding="utf-8"))
    page = f"{SITE}/menu/" if lang == 0 else f"{SITE}/en/menu/"
    parts: list[str] = []
    ld_sections: list[dict] = []
    for n, section in enumerate(food["sections"]):
        sid = section["id"]
        title = SECTIONS[sid][lang]
        parts.append(f'<section class="menu-section" id="{sid}" aria-labelledby="h-{sid}" data-reveal>')
        parts.append(f'  <h2 class="menu-section__title" id="h-{sid}"><span class="menu-section__num" aria-hidden="true">{ROMAN[n]}</span> {esc(title)}</h2>')
        ld_items: list[dict] = []
        for group in section["groups"]:
            items = [i for i in group["items"] if i.get("visibile", True)]
            if not items:
                continue
            if group.get("title"):
                parts.append(f'  <p class="menu-group__title">{esc(group["title"][key])}</p>')
            parts.append('    <ul class="menu-list">')
            for item in items:
                parts.append(dish_html(item, lang))
                desc = text_of(item, key)
                unit = item.get("unita", "")
                if unit:
                    offer = {"@type": "Offer", "priceCurrency": "EUR",
                             "priceSpecification": {"@type": "UnitPriceSpecification", "price": number(item["p"]),
                                                    "priceCurrency": "EUR",
                                                    "referenceQuantity": {"@type": "QuantitativeValue", "value": "100", "unitCode": "GRM"}}}
                else:
                    offer = {"@type": "Offer", "price": number(item["p"]), "priceCurrency": "EUR"}
                entry = {"@type": "MenuItem", "name": item["n"], "offers": offer}
                if desc:
                    entry["description"] = desc
                ld_items.append(entry)
                for v in item.get("varianti") or []:
                    ventry = {"@type": "MenuItem", "name": f'{item["n"]}, {v["n"][0].lower() + v["n"][1:]}',
                              "offers": {"@type": "Offer", "price": number(v["p"]), "priceCurrency": "EUR"}}
                    if (v.get(key) or "").strip():
                        ventry["description"] = v[key].strip()
                    ld_items.append(ventry)
            parts.append('    </ul>')
        parts.append('</section>')
        ld_sections.append({"@type": "MenuSection", "name": title, "hasMenuItem": ld_items})
    # drinks
    sid = "bevande"
    title = SECTIONS[sid][lang]
    parts.append(f'<section class="menu-section menu-section--drinks" id="{sid}" aria-labelledby="h-{sid}" data-reveal>')
    parts.append(f'  <h2 class="menu-section__title" id="h-{sid}"><span class="menu-section__num" aria-hidden="true">{ROMAN[6]}</span> {esc(title)}</h2>')
    ld_items = []
    for block in drinks["blocks"]:
        parts.append(f'  <p class="menu-group__title">{esc(block[key])}</p>')
        parts.append('    <ul class="menu-list menu-list--drinks">')
        for row in block["rows"]:
            name = row.get(key) or row["it"]
            parts.append('      <li class="dish dish--drink">')
            parts.append('        <div class="dish__head">'
                         f'<span class="dish__name">{esc(name)}</span>'
                         '<span class="dish__dots" aria-hidden="true"></span>'
                         f'<span class="dish__price">{esc(price(row["p"], "", lang))}</span></div>')
            if row.get("note"):
                parts.append(f'        <p class="dish__desc">{esc(row["note"])}</p>')
            parts.append('      </li>')
            entry = {"@type": "MenuItem", "name": name,
                     "offers": {"@type": "Offer", "price": number(row["p"]), "priceCurrency": "EUR"}}
            if row.get("note"):
                entry["description"] = row["note"]
            ld_items.append(entry)
        parts.append('    </ul>')
    parts.append('</section>')
    ld_sections.append({"@type": "MenuSection", "name": title, "hasMenuItem": ld_items})
    ld = {"@context": "https://schema.org", "@type": "Menu", "@id": f"{page}#menu",
          "name": "Menù dell’Osteria dei Rossi" if lang == 0 else "Osteria dei Rossi menu",
          "url": page, "inLanguage": "it" if lang == 0 else "en-GB",
          "hasMenuSection": ld_sections}
    return "\n".join(parts) + "\n", ld


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for lang, code in ((0, "it"), (1, "en")):
        fragment, ld = build(lang)
        (OUT / f"menu-{code}.html").write_text(fragment, encoding="utf-8")
        (OUT / f"menu-jsonld-{code}.json").write_text(json.dumps(ld, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        dishes = sum(len(s["hasMenuItem"]) for s in ld["hasMenuSection"])
        print(f"{code}: {len(ld['hasMenuSection'])} sections, {dishes} items")


if __name__ == "__main__":
    main()
