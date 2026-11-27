# Osteria dei Rossi: SEO and GEO audit of version 2, and what version 3 changes

Client slug: `osteria-dei-rossi` · Date: 2026-11-26 · Author: seo-specialist · Internal, English; Italian strings are for the pages.
Read: founder brief of 2026-11-26, `profile.md`, `seo.md`, `seo-v2.md`, `seo-offsite.md`, built `site/index.html`, `menu/`, `vini/`, `dove-siamo/` heads and heading outlines. The `en/` twins are generated from the same data and were not read line by line; check them with the same list. No new web research: the research of 2026-11-24 stands, so no search volume or Google.it position is claimed. "Not run" in v2 means judgement, not measurement.

## 1. What version 2 already does well
- One `h1` per page in the HTML, one `h2` per chapter, unique titles (54 to 59 characters) and descriptions (143 to 154), self-referencing canonicals, full hreflang with `x-default`, 10-URL sitemap.
- NAP, hours and `Restaurant` JSON-LD match the profile; no `aggregateRating`, `review`, `priceRange` or geo; the Restaurant node lives only on the home pages and the others point to it by `@id`.
- Questions live on the pages that own the topic (Menu, Vini, Dove siamo) with visible text and FAQPage identical; wine list has no price anywhere.
- Real descriptive alt texts, AVIF with JPEG fallback, width and height set, only the hero preloaded; no tracking, no third-party scripts.

## 2. Effect of removing dish rows and prices from the home page
Today the home carries 17 prices and about 25 dish rows (name, dots, price, description) in `#tavola`, `#pici`, `#dispensa`, `#dolce`, plus the line "Bistecca alla Fiorentina · 9 € all'etto" in the fiorentina block. Two rows (`Bis di crostoni`) appear twice on the page.

**What the rows gave the home page.** Exact dish names with "Siena" context: Cinghiale in Dolce Forte, Pici al Ragù Bianco di Cinta Senese, Pici al Ragù Tradizionale di Anatra, Pici Cacio e Pepe, Tegamata di Cinta Senese, Tagliere del Cacciatore, Tagliatelle al Tartufo di Stagione, Medaglione di Filetto alla Griglia con Tartufo, Tagliatelle ai Funghi Porcini, Spaghetti alla Chitarra con Sugo dell'Osteria, Cantuccini e Vin Santo and others, each with a one-line description and a price. That is repeated menu content: the menu page already owns it (and the price), so the home page was a weaker duplicate competing with `/menu/`.

**What is lost.** (a) Long-tail exact-name matching of full menu strings on the home page; (b) the price as a snippet and AI-answer fact on the home page; (c) page length of structured, scannable text. None of this is a real loss for ranking: the menu page keeps (a) and (b) and is the right page for dish-and-price queries. The home page keeps its own job: "osteria Siena", the story, the contrada, and explainers (what pici are, what Cinta Senese is, cantucci and Vin Santo).

**How v3 keeps the coverage.** Name the dish in a sentence that explains it (subject plus fact, 25 to 60 words, one dish term in the h3 or the first sentence), keep the existing h2/h3 headings, and link each block to the menu section with a descriptive anchor (section 3). Do not rewrite dish descriptions word for word from the menu: paraphrase from the profile so the two pages do not duplicate text.

Terms that must stay in the visible text of the home page (written inside explanations, no price, no row):

| Section | Must stay (in h2/h3 or first sentence of the block) | Menu page only |
|---|---|---|
| `#casa` | osteria, Siena, "dentro le mura"; no dishes needed | all |
| `#contrada` | Contrada del Bruco, Via dei Rossi, Porta Ovile, Palio (2 luglio, 16 agosto), 1992 | |
| `#tavola` | cucina senese, radici medievali, cinghiale in dolceforte (agrodolce, medievale), cinghiale al coccio / in umido, polenta | Crostini neri senesi (a mention is optional), full dish names with descriptions |
| `#pici` | pici (what they are), cacio e pepe, ragù d'anatra, ragù bianco di Cinta Senese, ragù di cinghiale | "Pici al Ragù Tradizionale di Anatra" etc. as menu strings |
| `#dispensa` | Cinta Senese (DOP, Lorenzetti), tegamata, tagliatelle al ragù di Cinta, tagliere del cacciatore; tartufo fresco (filetto, tagliatelle, crostoni); funghi porcini freschi (grigliati, fritti, tagliatelle); spaghetti alla chitarra "in menù dal 1992"; taglieri di salumi e formaggi; bistecca alla fiorentina | weights and per-100 g prices, "Medaglione di Filetto..." string, tagliere del contadino, the two crostoni variants as separate rows |
| `#dolce` | cantucci e Vin Santo | "Cantuccini e Vin Santo" as listed |
| `#cantina` | carta dei vini, cantina, grotta, Chianti Classico, Montepulciano, Montalcino | producers and wines (wine page) |

## 3. Page by page

| Page | Title / description / h1 | Headings | Links | Keep / improve for v3 |
|---|---|---|---|---|
| Home `/` | Keep title `Osteria dei Rossi \| Osteria a Siena: pici e cucina senese` (57). Description: replace with `Osteria dei Rossi, Via dei Rossi 79/81, Siena: cucina senese con radici medievali, pici e cinghiale in dolceforte. Prenota al telefono o su WhatsApp.` (149 characters, counted by hand; the build should assert ≤155). H1 keep `Osteria a Siena dentro le mura`. | h2 per chapter `#casa #contrada #tavola #pici #dispensa #dolce #cantina #prenota` (keep the ids: GBP and shared links use them). With no dish rows, the `h3`s (Il cinghiale in dolceforte, Il cinghiale al coccio, La Cinta Senese, Il tartufo, I funghi porcini, Gli spaghetti, I taglieri, La fiorentina) carry the dish terms: keep them as h3. | Each food block links to its menu section: `/menu/#secondi` (dolceforte, coccio), `/menu/#primi` (pici, tagliatelle, spaghetti), `/menu/#griglia` (fiorentina, filetto), `/menu/#antipasti` (taglieri, crostoni), `/menu/#dolci`; `#cantina` to `/vini/`; `#contrada` and `#prenota` to `/dove-siamo/`. Anchors descriptive, as in `seo-v2.md` section 7. | Reason for the description change: it stops promising a dish list and states what the page is (cuisine, place), which differentiates it from the menu description. Pinned "La casa": see section 5. |
| Menu `/menu/` | Keep (59 and 154 characters); the description already says "con prezzi". H1 `Il menù dell'osteria a Siena`. | h2 per course (`#antipasti ... #bevande`), then `Domande sul menù`, `#prenota`. Check that each dish name is an `h3` (not seen in this audit; the menu rows were not read). | Add a short intro (2 sentences, no dish copy) linking to `/#pici` and `/#dispensa` ("I pici e la Cinta Senese spiegati") and to `/vini/`. | The menu becomes the only price page, so it must say so: first lines name the prices, the coperto 2,50 € and the by-weight rule (profile). |
| Wine list `/vini/` | Keep. | Keep outline (h1, three groups, areas h3, questions, booking). | Keep links to the menu, Dove siamo. | Add one sentence linking to the home `#cantina` (the grotta and cellar) so the cellar story, not only a list, is reachable. |
| Dove siamo `/dove-siamo/` | Keep title/description. H1 `Dove siamo a Siena, in Via dei Rossi` keep. | Keep. | Add a link to `/#contrada`. | No change in role: this page owns address, arrival, hours, booking and landmark queries. |

**Cannibalisation.** Before: home and menu both targeted "pici", "cinghiale in dolceforte" and "tartufo" with dish rows, title/description both listing the same dishes. After: Home = "osteria Siena", the story, the contrada, explainers ("cosa sono i pici", "cinta senese cos'è", "cantucci e vin santo"), and the room. Menu = "menù Osteria dei Rossi", dish names, prices, coperto, "per 100 g". Rule for copy: a dish description may appear in full only on the menu; on the home it is rephrased. Menu FAQ answers on pici, Cinta Senese and cantucci overlap with home explainers by design (`seo-v2.md` 1.7); keep the link Menu FAQ to `/#pici`. English: same split on `/en/` and `/en/menu/`.

## 4. Structured data (home, menu, wine list, Dove siamo, checked in the built HTML)
- **Restaurant** (home Italian and English): fields match the profile; `hasMenu` lists `/menu/` and `/vini/`. Keep. Not present and not to be added: `priceRange`, `aggregateRating`, `review`, `geo`, `email`, `menu` prices on the home. The Restaurant `description` on `/en/` is in Italian (same node as `/`); acceptable as a single entity, but add an English `description` only if the two nodes can carry the same `@id` without conflicting; otherwise leave.
- **WebSite**: present on both home pages. Keep; no `SearchAction` (there is no search).
- **Menu**: on `/menu/` with prices (approved) and on `/vini/` without prices. Keep. v3 removes nothing here. Confirm the home JSON-LD has no `Offer`, `price` or `MenuItem` (the audit grep found none).
- **FAQPage**: Menu, Vini and Dove siamo, identical to the visible text. Keep. Note for the owner: Google no longer shows FAQ rich results for most sites; the value is for answer engines and for the text itself, so no promise of a SERP feature.
- **BreadcrumbList**: on the three inner pages, correct. Keep; localise the English twins.
- **WebPage**: only Dove siamo has it. Add `WebPage` with `isPartOf`/`about` to home, menu, wine list (small, useful for entity linking). On the home add `primaryImageOfPage` pointing at the main room photo (see `ImageObject` below).
- **ImageObject**: none exists. Add one for the room image used as `primaryImageOfPage` and as `Restaurant.image` (url, width, height, caption identical to the alt text). Do not mark up the whole gallery: image indexing reads the HTML `<img>`, schema adds nothing. Add `sala-bancone-vista-cucina` to the `Restaurant.image` array.
- **Add**: `foundingDate` is present; `founder` (Giuseppe «Beppe» Carrieri) is approved text but is a person's name: optional, only after the founder agrees. No `ReserveAction`: there is no online booking and a `tel:` target is not a supported reservation action.
- Validate every block with the Schema.org validator after the build; the dish names in `Menu` must not be edited when the home copy changes.

## 5. Images
**Gallery of the room (pinned scroll), 4 photos, existing files, existing alt texts (all ≤125 characters), in this order:**

| # | File | Alt (Italian) | Caption (visible) |
|---|---|---|---|
| 1 | `sala-osteria-tradizionale-toscana` | Sala con soffitto a travi, pareti in legno, pavimento in cotto, tavoli con carta verde e fotografie in bianco e nero | La sala |
| 2 | `sala-bancone-vista-cucina` | La sala verso il bancone: arco in mattoni, mensole con bottiglie, bandierine, tavoli e sedie in legno | Il bancone, con vista sulla cucina |
| 3 | `grotta-volte-in-mattoni-cantina` | Sala con volte in mattoni a più arcate, una porta in legno in fondo e tavoli apparecchiati con tovaglioli a quadretti | La grotta verso la cantina |
| 4 (optional) | `lanterna-ferro-battuto` | Lanterna in ferro battuto su una mensola a volute, davanti a una parete gialla e a pannelli di legno | Una lanterna di ferro battuto |

English alts are the ones of `seo.md` section 3 (not re-read); keep them. Photos 3 and 4 are different ratios from 1 and 2 (3:2 and 4:5): crop for the frame with `object-fit`, never stretch, and keep `width`/`height` matching the file.

**What a pinned scroll gallery must respect.**
1. All photos are `<img>` (or `<picture>`) in the HTML in source order, never CSS backgrounds, never injected by script, with real `alt`. Slides stack in one sticky frame and switch by `opacity` and `transform`; do not use `display:none` for the inactive ones.
2. The `h2`, the two paragraphs and the captions stay as HTML text outside the script. Photo 1 loads normally; photos 2 to 4 `loading="lazy"` are fine, but give them `width`/`height` and `decoding="async"`; they must be in the DOM at first paint.
3. Without JavaScript, with reduced motion, or in print, the gallery falls back to a vertical stack of full-width figures. No content only reachable through scroll position.
4. The pin lasts about one viewport of scroll per photo (4 photos, 4 viewport heights at most). No scroll hijacking: the page scrolls natively and the browser's scrollbar works; use `position: sticky` and CSS scroll-driven animation or an `IntersectionObserver`, passive listeners only. Provide a visible position marker (1/4) and keep keyboard Tab order natural.
5. No hash or URL changes per slide, no extra indexable URLs.
6. `sizes` is the real displayed width (large frame: `100vw`); do not serve 2048 px AVIF to phones.

**`og:image`.** Today all 10 pages use the same `og-osteria-dei-rossi-siena.jpg` (1200×630, exists); no `og:image:alt`, no explicit `twitter:image` (Twitter falls back to the Open Graph tags). v3: one 1200×630 JPEG per page type, under about 300 KB, no text on the image and no prices; add `og:image:alt` in the page's language; add `twitter:image`. Home: keep the default (exterior or room, check the file shows the place). Menu: a food photo (`tagliere-salumi-formaggi-vino-rosso` or `cinghiale-in-dolceforte-ricetta-medievale`). Vini: `grotta-volte-in-mattoni-cantina`. Dove siamo: `insegna-storica-osteria-ferro` or the exterior. Privacy: default. Names: `og-menu-osteria-dei-rossi-siena.jpg` and so on; the English twins share the files.

## 6. Core Web Vitals risks and builder rules
| Risk | Rule |
|---|---|
| LCP: the home hero is preloaded, but a full-screen intro overlay (gate animation) and an inline SVG of about 1000 lines sit before it | Keep the preload and `fetchpriority="high"` on the hero only; the gate overlay must not delay the `h1` or hero paint (content in DOM first, as in v2); no new preloads. Check LCP on first and repeat visit. |
| CLS: pinned gallery and sticky frames | Frame height `100svh` or fixed `aspect-ratio`; images have width/height; reserve the scroll space with CSS, not JS; no font swap shifts (fonts are preloaded already). Target CLS under 0.1. |
| INP: scroll-linked effects, more animations | Animate only `transform` and `opacity`; scroll effects via CSS scroll-driven animations or `IntersectionObserver`; no `scroll` handler that reads layout; at most a few `will-change` elements at a time; no long tasks on load. |
| Page transitions | Use the CSS cross-document View Transitions (`@view-transition { navigation: auto }`) as progressive enhancement, under 300 ms, no JavaScript router, links stay normal `<a href>` so crawlers and no-JS users get full pages. Never fade in the LCP element from `opacity:0`. |
| More line icons | Inline SVG, `aria-hidden`, small; reuse symbols with `<use>`; no icon fonts, no external files. Decorative only: no meaning carried by an icon alone. |
| Weight | Gallery adds 3 to 4 AVIF files; keep each ≤ 150 KB at the served size; lazy-load all but the first; total JS stays small, no libraries. |
| Accessibility and fallbacks | `prefers-reduced-motion` disables pin, parallax and transitions; no-JS shows all content; target Lighthouse mobile 95+ on the eight indexable pages (v2 checklist), first and repeat visit. |

## 7. Content opportunities (approved facts only)
**Could be added.**
- Home, near `#prenota` or the hero: an "In breve" fact box (definition list, not a FAQ): Via dei Rossi 79/81, Contrada del Bruco, inside the walls, Piazza del Campo about 5 minutes on foot, Basilica di San Francesco at the end of the street, open from 1992, hours as approved with the "call to confirm" line, booking by phone and WhatsApp. It repeats facts from Dove siamo for answer engines; link it to `/dove-siamo/`. No FAQPage markup on it (the same questions are already marked up on Dove siamo).
- Home `#contrada`: the sentence that Siena's centre is UNESCO World Heritage since 1995 and that Gambero Rosso lists the osteria among Siena's restaurants for meat (both approved in chat 2026-11-24; the second is a third-party statement, use it only as "listed", never as a rating or award).
- Home `#tavola`: one sentence that the dolceforte is medieval and the chocolate came later (approved).
- Menu page: a one-line note on the by-weight steaks and "Consigliato dall'Oste" dishes; no allergens.
- Dove siamo: a line about Porta Ovile and Banchi di Sopra as the direction of approach (profile), no distances beyond the 5 minutes.
- Journal or "Palio" page: only the two dates (2 luglio, 16 agosto) exist; no page without the osteria's Palio-day hours.

**Must NOT be added (fact missing).** Ratings, review counts, awards, "best of" claims; any price on the home; "enoteca" or "wine bar"; "fatti in casa" for pici, bread or pasta; allergen, vegetarian, vegan or gluten-free claims; seating capacity, groups, private room, accessibility, pets, children's menu; payment methods; languages spoken; distances in metres or walking times other than Campo (5 minutes); parking tariff, ZTL hours or permits; Palio-day hours and access; outdoor-table months; "truffle all year" together with "di stagione" (conflict still open); chocolate in the osteria's own dolceforte; seasonal months for porcini; opening hours on special days.

**Facts needed from the founder.** (1) Palio-day and holiday opening and booking rules; (2) ZTL and access for guests who drive, and a walking time from the San Francesco car park; (3) seating, groups, outdoor months, accessibility; (4) whether pici, pasta and desserts are made in house; (5) allergen list confirmed by the chef, and vegetarian or gluten-free options; (6) truffle wording (all year or seasonal); (7) whether he accepts naming Beppe Carrieri as `founder` in schema; (8) the 3 open wine readings and whether other wines are also by the glass; (9) the order and number of photos in the gallery, and permission for GBP photo upload; (10) launch date for `lastmod`.

## 8. Local and off-site (`seo-offsite.md`)
- Website link on the Google Business Profile stays `https://www.osteriadeirossi.it/`; the **menu link stays `/menu/`** and now matters more: it is the only page with dishes and prices, so never point the menu field at the home page or at `menu.osteriadeirossi.it`.
- Booking link stays `https://www.osteriadeirossi.it/#prenota`; keep the id `#prenota` on the home page when the page is rebuilt (and `#casa`, `#pici`, `#dispensa`, `#cantina`); if an id changes, add the old one as an anchor.
- GBP description and posts are unchanged (they name dishes and no prices); upload the gallery photos (room, bancone, grotta) to the profile with the same alt wording as captions.
- The menu pages and GBP menu section must show the same dishes and prices; no price is allowed on the home or in the GBP description.
- Search Console: submit the new sitemap (`lastmod` from the real build date), request indexing of `/` and `/menu/`, watch queries for dish names to see that `/menu/` and not the home ranks.

## 9. Priority table
| Priority | Action | Expected benefit | Effort |
|---|---|---|---|
| Must | Remove prices and dish rows from home; rewrite food blocks as explanations with the dish named and a link to the menu section; remove the duplicated `Bis di crostoni` and the fiorentina price line | Meets the brief; ends home/menu duplication; menu owns dish and price queries | M |
| Must | Pinned gallery built as indexable HTML with no-JS and reduced-motion fallbacks; alt texts and captions as in section 5 | Larger images without SEO or accessibility loss | M |
| Must | Keep ids, canonicals, hreflang, JSON-LD (no price on home); home description as in section 3; sitemap `lastmod` | Protects what v2 does well | S |
| Must | Core Web Vitals rules (section 6) as a checklist in the build; Lighthouse 95+ | Avoids the main risk of more motion | M |
| Should | Per-page `og:image` plus `og:image:alt` and `twitter:image` | Better share previews, per-page relevance | S |
| Should | `WebPage` on home/menu/wine list; `ImageObject` for the room photo | Cleaner entity graph for answer engines | S |
| Should | "In breve" fact box on the home; menu intro with links to home explainers | Direct answers for AI assistants; internal links | S |
| Could | UNESCO and Gambero Rosso sentences on `#contrada` | Local context, authority signals without ratings | S |
| Could | Cross-document view transitions | Appeal; low SEO risk if progressive | S |
| Could | Palio page, accessibility, groups, seating (after the founder supplies the facts) | New query coverage | M |
