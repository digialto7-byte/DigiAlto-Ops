# Osteria dei Rossi website, version 1 (2026-11-24)

Internal hand-over note for this deliverable folder.

## What is here

| Path | What it is |
|---|---|
| `site/` | The website, ready to upload as it is: Home (`index.html`, `en/`), menu (`menu/`, `en/menu/`), privacy (`privacy/`, `en/privacy/`), `404.html`, `robots.txt`, `sitemap.xml`, and `assets/` (photos, logo, fonts, scripts, SVG) |
| `plan.md` | Strategy: positioning, story spine, voice, section list, off-site plan, open questions |
| `design.md` | Design and motion specification (tokens, layouts, the gate intro, hooks) |
| `copy.md` | Copy deck, Italian and English, with the facts each block uses |
| `seo.md` | On-site SEO: keyword map, tags, alt texts, FAQ, JSON-LD, robots, sitemap |
| `seo-offsite.md` | Owner's kit: Google Business Profile, listing clean-up, reviews, citations, rank tracking, content calendar |
| `assets/` | Fine-line SVG set (Porta Ovile, arrow, icons, map), the generated menu fragments and the photo file reference |
| `research_notes/`, `reports/` | Research behind the plan (the osteria online, Siena search results, competitor sites, place and food history) |
| `tools/` | `build_menu.py` (menu page content and Menu JSON-LD from the approved menu data) and `build_pages.py` with `templates/` (every page of the site) |
| `qa/` | `qa-site.cjs`, the browser QA used on this site |

## Look at the site

Double-click `site/index.html`, or serve the folder (needed for the 404 page and for the same
behaviour as on a host):

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-24-website/site && python3 -m http.server 8650
```

Then open http://127.0.0.1:8650/. The gate intro plays once per browser session; press **P** to
replay it (presentation mode).

## Change something

- **A text**: edit `copy.md` (or `seo.md` for tags, alt texts and FAQ), then rebuild.
- **The menu** (new dish, new price): replace the data files in
  `knowledge/clients/osteria-dei-rossi/sources/` with a new capture, update the file names at the
  top of `tools/build_menu.py`, then rebuild both.
- **Layout or look**: `site/styles.css` and the templates in `tools/templates/`.
- **Motion**: `site/main.js` and `site/motion.css`.

```bash
cd clients/osteria-dei-rossi/deliverables/2026-11-24-website
python3 tools/build_menu.py      # only when the menu data changed
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
overflow, headings, images, links, tags, JSON-LD, reduced motion, no JavaScript, the intro,
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
4. Open questions for the founder are in `plan.md` section 6 and in `clients/osteria-dei-rossi/context.md`.
