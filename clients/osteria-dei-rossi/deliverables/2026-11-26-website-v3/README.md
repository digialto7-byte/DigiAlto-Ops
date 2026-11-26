# Osteria dei Rossi website, version 3 (2026-11-26)

Internal hand-over note for this deliverable folder. Version 2 is kept untouched in
`../2026-11-24-website/`; this folder started as a copy of it and follows the founder's feedback of
2026-11-26 (`knowledge/clients/osteria-dei-rossi/sources/founder-website-feedback-2026-11-26.md`).

## What changed from version 2

- **Home page without prices and without dish rows.** Each food is explained and the dish is named in the
  text; prices are on the menu page only. One link per food opens that dish on the menu page.
- **"La casa" gallery.** The room photos show in one large arch frame; the page holds while the photo
  changes on scroll. Without JavaScript or with reduced motion the four photos show as large tiles.
- **New blocks.** Four facts after the hero ("Perché venire da noi"); a row of line icons that jumps to
  each food; a booking strip in the middle of the page on desktop; address, directions and phone in the hero.
- **Line drawings.** Eight new icons and the unused ones of version 2, each drawing in once with one small
  move; icons at the menu's section headings; the Siena skyline along the footer.
- **Transitions.** Pages change with a short arch wipe where the browser supports it; headings rise in two lines.
- **Booking.** "Prenota un tavolo"; WhatsApp opens with a prefilled message; the phone bar says what each
  button does.
- **Sharing and search.** One share picture per page type; every dish and every food chapter has its own
  address (`links.md`); the home page and the menu page no longer repeat each other.
- **The arrow** of the buttons lost the small loop that read as a dot.
- Kept as they were: the gate opening, the menu book, the wine pour, the falling pici, the walking boar,
  the map on Dove siamo, the wine list, the privacy note.

## What is here

| Path | What it is |
|---|---|
| `site/` | The website, ready to upload: home, menu, wine list, Dove siamo, privacy (Italian and `en/`), `404.html`, `robots.txt`, `sitemap.xml`, `assets/` |
| `design-v3.md` | The lead's plan for version 3 |
| `audit/` | The five audits of version 2 behind the plan: creative, copy, frontend, SEO, marketing |
| `copy.md` | Copy deck, Italian and English (version 3) |
| `seo-v3.md` | On-site SEO for version 3: tags, share previews, alt texts, FAQ, JSON-LD, sitemap, internal links, open facts. `seo.md` (version 1) still holds the redirects and the first photo set |
| `links.md` | For the owner: every address and anchor, and where to use each |
| `assets/` | Line drawings, generated menu and wine fragments, photo reference |
| `tools/` | `build_menu.py`, `build_wines.py`, `build_pages.py` with `templates/` |
| `qa/` | `qa-site.cjs` (browser QA) and `ledger.md` (what was checked) |

Strategy, design specifications of versions 1 and 2, the research and the owner's off-site kit stay in the
version 2 folder (`plan.md`, `design.md`, `design-v2.md`, `seo-offsite.md`, `research_notes/`, `reports/`).

## Look at the site

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3/site && python3 -m http.server 8652
```

Then open http://127.0.0.1:8652/. The gate, the menu book and the wine pour each play once per browser
session; press **P** to replay the one of the page you are on. A link to a section never shows an opening.

## Change something

- **A text**: edit `copy.md` (or `seo-v3.md` for tags, alt texts, FAQ and JSON-LD), then rebuild.
- **The menu**: replace the data files in `knowledge/clients/osteria-dei-rossi/sources/`, update the file
  names at the top of `tools/build_menu.py`, rebuild. A dish's address is made from its Italian name: when a
  dish changes name or leaves the menu, check `links.md` and the links of the home page (the build stops if
  a home-page link points to a dish that is gone).
- **The wine list**: edit `sources/wine-list-2026-11-25.json` (names and producers, no prices), rebuild.
- **Layout or look**: `site/styles.css` and `tools/templates/`. **Motion**: `site/main.js`, `site/motion.css`.
- The build refuses a price or a dish row on the home page, a missing anchor of `design-v3.md` section 2,
  and a duplicate id.

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3
python3 tools/build_menu.py      # only when the menu data changed
python3 tools/build_wines.py     # only when the wine data changed
python3 tools/build_pages.py     # writes every page, robots.txt and sitemap.xml
```

Never edit the generated `.html` files by hand.

## Check it

From the repository root:

```bash
python3 scripts/check_deliverable.py clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3
```

```bash
python3 scripts/viewport_check.py clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3
```

```bash
node clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3/qa/qa-site.cjs clients/osteria-dei-rossi/deliverables/2026-11-26-website-v3/site tmp/qa
```

The last one takes about ten minutes for all pages. Add `--axe=<path to axe.min.js>` for the accessibility rules.

## Third-party pieces inside `site/assets/`

GSAP and ScrollTrigger 3.15 (GreenSock standard no-charge licence), Lenis 1.3 (MIT), fonts Bodoni Moda and
Figtree (SIL Open Font Licence), all served from the site itself. Photos and logo are the osteria's own.

## Going live

As in the version 2 hand-over note (`../2026-11-24-website/README.md`, "Going live"), with this folder's
`site/`. The founder decides which version goes online. Open questions: `design-v3.md` section 10,
`seo-v3.md` section 9 and `clients/osteria-dei-rossi/context.md`.
