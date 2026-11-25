# Osteria dei Rossi website, version 2 (2026-11-25)

Internal hand-over note for this deliverable folder. Version 1 (2026-11-24) was a home page and a
menu page; version 2 follows the founder's feedback of 2026-11-25: the home page tells the story
first and then the food, the wine list and "Dove siamo" have their own pages, and four fine-line
animations were added.

## What is here

| Path | What it is |
|---|---|
| `site/` | The website, ready to upload as it is: Home (`index.html`, `en/`), menu (`menu/`, `en/menu/`), wine list (`vini/`, `en/wine-list/`), where we are (`dove-siamo/`, `en/find-us/`), privacy (`privacy/`, `en/privacy/`), `404.html`, `robots.txt`, `sitemap.xml`, and `assets/` (photos, logo, fonts, scripts, SVG) |
| `plan.md` | Strategy: positioning, story spine, voice, section list, off-site plan, open questions |
| `design.md` | Design and motion specification (tokens, layouts, the gate intro, hooks) |
| `design-v2.md` | Version 2 specification: pages and URLs, home page order, photo assignments, the four animations |
| `copy.md` | Copy deck, Italian and English, with the facts each block uses |
| `seo.md` | On-site SEO: keyword map, tags, alt texts, FAQ, JSON-LD, robots, sitemap |
| `seo-v2.md` | SEO addendum for version 2: tags for the eight main pages, alt texts of the second photo set, FAQ and JSON-LD per page, sitemap, facts still needed from the founder (section 9) |
| `seo-offsite.md` | Owner's kit: Google Business Profile, listing clean-up, reviews, citations, rank tracking, content calendar |
| `assets/` | Fine-line SVG set (Porta Ovile, arrow, icons, map, and for version 2 the pici, the boar, the Siena skyline, the book cover and the pour), the generated menu and wine-list fragments and the photo file reference |
| `research_notes/`, `reports/` | Research behind the plan (the osteria online, Siena search results, competitor sites, place and food history) |
| `tools/` | `build_menu.py` (menu page content and Menu JSON-LD from the approved menu data), `build_wines.py` (wine list from the approved wine data, never a price) and `build_pages.py` with `templates/` (every page of the site) |
| `qa/` | `qa-site.cjs`, the browser QA used on this site |

## Look at the site

Double-click `site/index.html`, or serve the folder (needed for the 404 page and for the same
behaviour as on a host):

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-24-website/site && python3 -m http.server 8650
```

Then open http://127.0.0.1:8650/. Three pages open with a short animation, each once per browser
session: the gate on the home page, the old book on the menu page, the pour on the wine list.
Press **P** to replay the one of the page you are on (presentation mode). A link to a section
(for example `/menu/#griglia`) never shows an opening animation.

## Change something

- **A text**: edit `copy.md` (or `seo-v2.md` for tags, alt texts, FAQ and JSON-LD; `seo.md` still
  holds the redirects and the first photo set), then rebuild.
- **The menu** (new dish, new price): replace the data files in
  `knowledge/clients/osteria-dei-rossi/sources/` with a new capture, update the file names at the
  top of `tools/build_menu.py`, then rebuild both.
- **The wine list**: edit `knowledge/clients/osteria-dei-rossi/sources/wine-list-2026-11-25.json`
  (names and producers only, no prices), then run `build_wines.py` and `build_pages.py`.
- **Layout or look**: `site/styles.css` and the templates in `tools/templates/`.
- **Motion**: `site/main.js` and `site/motion.css`.

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-24-website
python3 tools/build_menu.py      # only when the menu data changed
python3 tools/build_wines.py     # only when the wine data changed
python3 tools/build_pages.py     # writes every page, robots.txt and sitemap.xml
```

Never edit the generated `.html` files by hand: the next build overwrites them.

## Check it

From the repository root:

```bash
python3 scripts/check_deliverable.py clients/osteria-dei-rossi/deliverables/2026-11-24-website
```

```bash
python3 scripts/viewport_check.py clients/osteria-dei-rossi/deliverables/2026-11-24-website/site
```

```bash
node clients/osteria-dei-rossi/deliverables/2026-11-24-website/qa/qa-site.cjs clients/osteria-dei-rossi/deliverables/2026-11-24-website/site tmp/qa
```

The last one serves the site locally and checks every page at 1440, 390 and 360 px (errors,
overflow, headings, images, links, tags, JSON-LD, reduced motion, no JavaScript, the gate intro,
real-pixel contrast over photos, Italian and English parity). Add
`--axe=<path to axe.min.js>` for the accessibility rules and `--shots` for screenshots.

## Third-party pieces inside `site/assets/`

- GSAP and ScrollTrigger 3.15 (GreenSock standard no-charge licence), Lenis 1.3 (MIT), all served
  from the site itself.
- Fonts: Bodoni Moda and Figtree (SIL Open Font Licence), self-hosted.
- Photos and logo: the osteria's own, given by the founder on 2026-11-24. The originals are not
  in git.

## Going live (owner and founder)

1. Point `www.osteriadeirossi.it` at a static host and upload `site/`. Set the redirects in
   `seo.md` section 8 (apex to `www`, `index.html` to `/`) and serve `404.html` for unknown paths.
2. Keep `menu.osteriadeirossi.it` online for the QR codes on the tables.
3. Run the owner's steps in `seo-offsite.md` (Google Business Profile first).
4. Open questions for the founder are in `plan.md` section 6, `seo-v2.md` section 9 and
   `clients/osteria-dei-rossi/context.md`.
