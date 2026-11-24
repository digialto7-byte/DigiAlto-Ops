# Osteria dei Rossi: on-site SEO and GEO specification (version 1 website)

Client slug: `osteria-dei-rossi` · Date: 2026-11-24 · Author: seo-specialist · Status: for reviewer
Internal document, in English. Italian strings are for the Italian pages, British English strings for the English pages.
The off-site kit (Google Business Profile, listings, reviews, citations, tracking) is in `seo-offsite.md` in this folder.

This file is the specification the copywriter and the web-builder follow to the letter. Where a value is given in a table (title, description, H1, H2, URL, alt text, JSON-LD), use it as written. If a value has to change, change it here first.

## 0. Ground rules for this specification

**Sources.** Client facts come only from `knowledge/clients/osteria-dei-rossi/profile.md`, the approved live menu (`sources/menu-live-2026-11-24.md`) and the photo catalogue (`sources/photos-2026-11-24.md`). The research notes are research, not client facts: I use them for who answers a query today and for what the competitors do, never as a source for a claim about the osteria.

**Evidence level of the keyword work (read this before trusting any "who answers today" cell).**
- The research was done with a search tool on a US index, not Google.it. It cannot show the Map Pack, "People also ask", autocomplete or search volumes. No Google.it position is claimed anywhere in this file.
- Search volumes were not measured. I chose keywords by intent and by the gap in who answers them (aggregators and guides everywhere, almost no restaurant-owned pages), not by volume. Real volume and real positions come from Google Search Console after launch (see `seo-offsite.md`, section 7).
- The competitor teardown rests on indexed titles and search summaries. No competitor page was opened. Every statement about a competitor is a lead to check, not a measurement. Page speed, schema and meta descriptions of competitors were not observed at all.
- Head terms such as "osteria Siena" are held by guides and listing platforms (Michelin, Frommer's, italia.it, Foursquare, Wanderlog, OpenTable and similar). A new site is more likely to appear first for its own name, for narrow local intents and for dish-plus-place queries. No result is promised for any query.

**Name.** The public name is always `Osteria dei Rossi` (lower-case "dei", no "L'"). Never write "L'Osteria dei Rossi", "Osteria Dei Rossi", "Osteria Rossi" or "L'Osteria" in titles, headings, alt text, JSON-LD or footer. In Italian prose that needs a preposition, write "di Osteria dei Rossi" rather than "dell'Osteria dei Rossi", so the name string stays identical everywhere. (The approved menu descriptions use "dell'Osteria dei Rossi" and are copied as published; that is the only exception.) Reason: the national chain "L'Osteria" collides with the short name in search results, and the osteria's own listings already show six or more spellings.

**NAP block (identical everywhere on the site, in this order and spelling).**
Osteria dei Rossi · Via dei Rossi, 79/81 · 53100 Siena (SI) · +39 0577 287592 (link `tel:+390577287592`).
Opening hours as approved: Tuesday to Saturday lunch 12:30 to 15:00 and dinner 19:00 to 22:30; Sunday lunch only, 12:30 to 15:00; closed Sunday evening and Monday. The page says that hours can change and asks guests to call to confirm. No email address is shown, in the page or in markup (no public email is approved).

---

## 1. Keyword map

Intent codes: **L** local discovery (finding a place to eat in a place), **I** information (a question about a dish, a place or a custom), **N** navigational (looking for this osteria), **T** ready to book or to act.
"Research ref" points to the notes in `research_notes/Siena osteria SEO research/`: 02 = Italian results, Q numbers as in that file; 03 = English and German; 04 = competitor teardown; 01 = the osteria's own presence.
Page limits: one primary keyword and 4 to 6 secondary keywords per page and language. Do not repeat a keyword mechanically: use it where the table says, in a natural sentence, once or twice per page.

### 1.1 Home, Italian (`/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | 02 Q1: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Wanderlog, Frommer's. No restaurant-owned domain in the first results of any of the 24 Italian queries. | Title, H1, meta description, first paragraph, hero image alt, JSON-LD description |
| Secondary | osteria centro storico Siena | L | 02 Q2: DiscoverTuscany, italia.it, Michelin, En Primeur Club, pos.do, Summer in Italy. No indexed title contained "centro storico". | #via paragraph ("nel centro storico di Siena, dentro le mura"), meta of FAQ 1 |
| Secondary | ristorante tipico Siena | L | 02 Q3: Lonely Planet mirror, Firenze Made in Tuscany, travel365, TheWom, italia.it. Guides and aggregators only. | Semantic match only: write "cucina senese", "osteria", dish names. Use the word "tipico" at most once and only next to named dishes (house rule: no "tipico" or "autentico" without a fact behind it) |
| Secondary | ristorante vicino Basilica di San Francesco Siena | L (under-served) | 02 Q15: OpenTable landmark pages, Lonely Planet POIs, a B&B portal. No Italian editorial page is dedicated to eating there. | Title ("vicino a San Francesco"), #via H2, FAQ 1 |
| Secondary | ristorante Contrada del Bruco Siena | L, I (under-served) | 02 Q16: no relevant page; results matched the word "contrada" in other places. | #contrada H2 and paragraph, FAQ 1, alt of photos 9 and 14 captions |
| Secondary | cucina medievale Siena ristorante | I, L (under-served) | 02 Q18: a third-party page for one banquet menu, Summer in Italy "Medio Evo", a university PDF, blogs. No osteria page. | #tavola H3 "Cinghiale in dolceforte, una ricetta medievale", FAQ 5 |
| Secondary | cucina senese tradizionale ristorante | L, I | 02 Q17: Sluurpy, agriturismi.it listings, Firenze Made in Tuscany, travel365. The only query where owner pages appear, and they are agriturismi in the province. | Hero sub-line, #tavola intro, meta description ("cucina senese") |
| Brand (not counted) | osteria dei rossi siena · osteria via dei rossi | N | 01 section 5: a brand search returns only third-party pages (Wanderlog, Quandoo, TripExpert, Swipein, Foodle, Gambero Rosso, Frommer's); no own domain ranks. | Footer NAP, title, JSON-LD name, Google Business Profile (off-site kit) |

### 1.2 Home, English (`/en/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | 03 "osteria Siena": Michelin Guide (Osteria Le Logge), Afar, italia.it, Foursquare, Frommer's, Wanderlog. Guides and aggregators; no osteria-owned site. | Title, H1, meta description, first paragraph, hero alt |
| Secondary | traditional Tuscan restaurant Siena | L | 03: World Travel Guide, Culture Trip, OpenTable, Michelin (Taverna di San Giuseppe), Frommer's, a wine-merchant blog. | #tavola intro, FAQ 4 |
| Secondary | authentic local restaurant Siena, not touristy | L | 03: Airbnb place pages, Culture Trip, Frommer's, Wanderlog, Good Food Guide. The word "authentic" is a search term, not a claim for our copy. | Do not echo the adjective. Answer the intent with facts: side street, inside the walls, five minutes from Piazza del Campo (#via) |
| Secondary | restaurant near Basilica of San Francesco Siena | L (under-served) | 02 Q15 (OpenTable landmark pages, Lonely Planet, B&B portal); the English "near Piazza del Campo" results are the same guides. | Title, #via H2, FAQ 1 |
| Secondary | Contrada del Bruco restaurant | L, I (under-served) | Not tested in English. The Italian query (02 Q16) returned no relevant page, so the gap is probably the same. | #contrada H2 and paragraph |
| Secondary | medieval cooking Siena restaurant | I (under-served) | Not tested in English. Italian equivalent (02 Q18) is served by third-party pages only. | #tavola H3, FAQ 5 |
| Secondary (optional 7th, drop if copy gets forced) | Siena Italy restaurant outdoor seating | L | 03: the bare query returns US restaurants named Siena; only Restaurant Guru and OpenTable pages were relevant. | FAQ 6, always with "Siena, Italy" in the sentence |

### 1.3 Menu, Italian (`/menu/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | menù osteria Siena | L, I | Not run as a query in the research. Indirect evidence: dish and menu pages on Sluurpy and OpenTable, Osteria Le Logge's priced menu page, Boccon del Prete's "Osteria toscana menu" page (04). The osteria's own menu page is a JavaScript page on a subdomain with no schema and is not indexed (01 section 5). | Title, H1, meta, intro paragraph |
| Secondary | pici Siena | I, L | 02 Q10: travel365, Do Eat Better, La Nazione, one Sluurpy page per pici dish, agriturismo.it. | #primi H2 intro line, alt of any pici photo (none exists yet) |
| Secondary | cinghiale ristorante Siena | L | 02 Q12: Do Eat Better, a university PDF, Gambero Rosso, Sluurpy, Frommer's. | #secondi, dish names as real text |
| Secondary | cinghiale in dolceforte | I | No query run. Frommer's names "cinghiale in dolce forte" for the osteria's address under the old name L'Osteria (01 section 4). I found no other restaurant page on it. | #secondi: write "dolceforte" in prose and keep "Cinghiale in Dolce Forte" as the published dish name, so both spellings appear |
| Secondary | bistecca alla fiorentina Siena | I, L | 02 Q11: mostly informational pages (Wikipedia, recipes, Visit Tuscany); the only local-intent results are OpenTable cuisine pages and Sluurpy. | #griglia intro, the by-weight note |
| Secondary | tartufo ristorante Siena | L | 02 Q13: Sluurpy, Wanderlog, one dedicated truffle restaurant (Tar-Tufo), Da Divo's truffle menu page (04). | #primi and #griglia dish names, truffle dishes as text |
| Brand (not counted) | osteria dei rossi menu prezzi | N | The old menu subdomain exists but is not indexed (01 section 5). | Title, H1 |

### 1.4 Menu, English (`/en/menu/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria menu Siena | L, I | Not run in English. Indirect evidence as for the Italian menu page. | Title, H1, meta, intro |
| Secondary | pici Siena where to eat | I, L | 03 "pici" query: Visit Tuscany, travel365, Frommer's (Taverna di San Giuseppe), Do Eat Better, a pasta-recipe site. No restaurant-owned page. | Primi intro line |
| Secondary | wild boar restaurant Siena | L | 03: Frommer's, World Travel Guide, Do Eat Better, Trip.com, OpenTable. | Secondi intro line |
| Secondary | cinghiale in dolceforte (also "dolce forte wild boar") | I | No query run; see the Italian row. | Dish description text, once with each spelling |
| Secondary | bistecca alla fiorentina Siena restaurant | L, I | 03: OpenTable cuisine pages, Restaurant Guru, Sluurpy; several results are Florence venues. | Grill intro, by-weight note |
| Secondary | truffle pasta Siena restaurant | L | 03: Frommer's, Culture Trip, one travel-blog review of a truffle restaurant. | Primi dish names |
| Secondary (optional 7th) | Siena restaurant cover charge (coperto) | I | 03 section 5: the cover charge is a recurring visitor question (an aggregated guide gives a EUR 2 to 5 range). | "Cover charge, weights and allergens" H2 |

### 1.5 Pages kept out of the keyword map

Privacy (`/privacy/`, `/en/privacy/`) and the 404 page carry no target keyword. They are indexable (noindex is not wanted on the privacy pages) but have no commercial purpose; the 404 page returns an HTTP 404 status and carries `noindex`.

### 1.6 Under-served intents the research found, and where this version answers them

| Intent | Evidence | Version 1 answer | Later |
|---|---|---|---|
| Near the Basilica di San Francesco | 02 Q15: no Italian editorial page | Title, #via, FAQ 1 | Journal article, `seo-offsite.md` section 8 |
| Contrada del Bruco | 02 Q16: no relevant page | #contrada section, FAQ 1 | Journal article |
| Medieval cooking in Siena | 02 Q18: third-party pages only | #tavola H3, FAQ 5, Menu #secondi | Journal article |
| Dish queries: pici, cinghiale, tartufo, bistecca alla fiorentina, cinghiale in dolceforte | 02 Q10 to Q13: aggregators and recipe sites; 04: no competitor has dish-level pages | Menu page sections with dish names as text; #tavola H3 on Home | Dedicated journal pages per dish |
| Cena in contrada and Palio dining | 02 Q22: guides only | Not in version 1 (no approved Palio facts for hours or booking) | Journal article, dated notice |
| German visitors | 03: one German page in the whole competitor set | Not in version 1 | German pages at `/de/`, later |

---

## 2. Page specifications

Common to every indexable page: `<html lang>` as stated, one canonical (absolute URL, self-referencing), the full hreflang set below, robots `index, follow, max-image-preview:large`, Open Graph and Twitter card tags, JSON-LD as given in section 6.
hreflang values: `it` for the Italian version, `en` for the English version, `x-default` pointing to the Italian version. Each page lists itself as well as its twin. The same set goes into `sitemap.xml` (section 7). The language switcher never redirects automatically by browser language.
Open Graph common values: `og:type` `website`, `og:site_name` `Osteria dei Rossi`, `og:image` `https://www.osteriadeirossi.it/assets/img/og-osteria-dei-rossi-siena.jpg`, `og:image:width` 1200, `og:image:height` 630, `og:locale` `it_IT` (Italian pages) or `en_GB` (English pages) with the other as `og:locale:alternate`. `twitter:card` `summary_large_image`. The `og:image:alt` must describe what the final share image shows; if it is built from the entrance photo, use: IT "Ingresso di Osteria dei Rossi a Siena, con muro di mattoni, persiane verdi e tavoli sulla strada", EN "Entrance of Osteria dei Rossi in Siena, with brick wall, green shutters and tables on the street".

### 2.1 Home, Italian

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/` |
| `<html lang>` | `it` |
| Meta title (58) | `Osteria dei Rossi | Osteria a Siena vicino a San Francesco` |
| Meta description (154) | `Osteria dei Rossi, in Via dei Rossi 79/81 a Siena, dentro le mura: pici, cinghiale in dolceforte, tartufo e fiorentina. Prenota al telefono o su WhatsApp.` |
| H1 | `Osteria a Siena, dentro le mura` (two visual lines allowed: "Osteria a Siena," then the italic completion "dentro le mura"; one `<h1>` element, no full stop) |
| Canonical | `https://www.osteriadeirossi.it/` |
| hreflang | `it` → `https://www.osteriadeirossi.it/` · `en` → `https://www.osteriadeirossi.it/en/` · `x-default` → `https://www.osteriadeirossi.it/` |
| Open Graph title | `Osteria dei Rossi | Osteria a Siena, dentro le mura` |
| Open Graph description | `Pici, cinghiale in dolceforte, tartufo e fiorentina in Via dei Rossi 79/81, a Siena. Prenota al telefono o su WhatsApp.` |
| Open Graph image | `/assets/img/og-osteria-dei-rossi-siena.jpg` (1200×630) |
| Robots | `index, follow, max-image-preview:large` |

**H1 decision.** I keep the lead's working H1. It carries the category (osteria), the place (Siena) and one differentiator that is a profile fact ("inside the city walls") in five words, and it leaves the brand and the landmark to the title, where they already are. I considered adding "Via dei Rossi" or "San Francesco" to the H1; that makes the H1 long and duplicates the title, so those terms stay in the title and in the #via H2.

**H2 outline (Home, Italian).** Section ids are fixed.

| Stop and id | H2 | H3 (where used) |
|---|---|---|
| Hero `#porta` | no H2; kicker text (not a heading): `Osteria dei Rossi · Via dei Rossi, Siena` | none |
| The street `#via` | `Via dei Rossi, fino alla Basilica di San Francesco` | none |
| The room `#sala` | `La sala: mattoni, travi e lanterne` | none |
| The food `#tavola` | `A tavola: pici, cinghiale, tartufo e fiorentina` | `Pici e primi della casa` · `Cinghiale in dolceforte, una ricetta medievale` · `Bistecca alla fiorentina, venduta a peso` · `Tartufo fresco di stagione` |
| The cellar `#cantina` | `La cantina e i vini` | none |
| The contrada `#contrada` | `Nella Contrada del Bruco, dal 1992` | none |
| Book and find us `#prenota` | `Prenota e vieni a trovarci` | `Orari` · `Come arrivare` · `Telefono e WhatsApp` |
| FAQ `#domande` | `Domande frequenti` | the ten questions of section 5, one H3 each |

### 2.2 Home, English

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/en/` |
| `<html lang>` | `en-GB` |
| Meta title (55) | `Osteria dei Rossi | Osteria in Siena near San Francesco` |
| Meta description (149) | `Osteria dei Rossi, Via dei Rossi 79/81, inside Siena's walls: pici, wild boar in dolceforte, truffle and Florentine steak. Book by phone or WhatsApp.` |
| H1 | `An osteria in Siena, inside the walls` (same two-line treatment: "An osteria in Siena," then italic "inside the walls") |
| Canonical | `https://www.osteriadeirossi.it/en/` |
| hreflang | same three entries as 2.1 |
| Open Graph title | `Osteria dei Rossi | An osteria in Siena, inside the walls` |
| Open Graph description | `Pici, wild boar in dolceforte, truffle and Florentine steak at Via dei Rossi 79/81, Siena. Book by phone or WhatsApp.` |
| Open Graph image | same file as 2.1 |
| Robots | `index, follow, max-image-preview:large` |

| Stop and id | H2 | H3 (where used) |
|---|---|---|
| Hero `#porta` | no H2; kicker `Osteria dei Rossi · Via dei Rossi, Siena` | none |
| `#via` | `Via dei Rossi, down to the Basilica di San Francesco` | none |
| `#sala` | `The room: brick, beams and lanterns` | none |
| `#tavola` | `At the table: pici, wild boar, truffle and fiorentina` | `Pici and first courses` · `Cinghiale in dolceforte, a medieval recipe` · `Bistecca alla fiorentina, sold by weight` · `Fresh seasonal truffle` |
| `#cantina` | `The cellar and the wines` | none |
| `#contrada` | `In the Contrada del Bruco, since 1992` | none |
| `#prenota` | `Book and find us` | `Opening hours` · `Getting here` · `Phone and WhatsApp` |
| `#domande` | `Frequently asked questions` | the ten questions of section 5, one H3 each |

**Content rules for both Home versions (for the copywriter).**
- Every stop has one H2 and real text in the HTML (no text inside images, no content that appears only after a click). The H1 is in the HTML at first paint and never animates in.
- Working target: roughly 450 to 650 visible words across stops #via to #prenota, before the FAQ, so the single URL has enough text to be understood. The brand guidance of one to two short sentences per block is a style limit for the headline paragraph of each stop, not for the page; a stop may carry one more short paragraph of facts.
- #via must say, in facts only: the street runs from Banchi di Sopra down to Piazza San Francesco; it takes its name from the 13th-century castellare of the Rossi family; the Basilica di San Francesco is at the end of the street; Piazza del Campo is about 5 minutes on foot (all in profile "Place and story").
- #contrada: the osteria is in the Contrada del Bruco; opened in 1992 by Giuseppe "Beppe" Carrieri, a brucaiolo; run since early 2024 by Luca and Max, with Luca in the kitchen (profile line approved by the founder). Do not state that the osteria stands on the Bruco side of the street beyond what the profile says (the Bruco's side is the left side coming from Banchi di Sopra). Do not write about the contrada's emblem, colours, motto or Palio record: they are research, not approved facts.
- #tavola must not use the claim "tartufo fresco tutto l'anno" in headings, FAQ or markup. Use the menu wording "tartufo fresco di stagione" (see section 10).
- Use the dish names exactly as published on the approved menu. Do not write a price on the Home page; link to the menu.
- No rating, review count, star, award or "the best" language. The Gambero Rosso mention is approved as: listed by Gambero Rosso among Siena's restaurants for meat. Write it exactly like that, not as an award.

### 2.3 Menu, Italian

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/menu/` |
| `<html lang>` | `it` |
| Meta title (59) | `Menù | Osteria dei Rossi Siena: pici, cinghiale, fiorentina` |
| Meta description (154) | `Il menù di Osteria dei Rossi a Siena con prezzi: pici, ribollita, cinghiale in dolceforte, bistecche alla griglia, vini e dolci. Coperto 2,50 € a persona.` |
| H1 | `Il menù di Osteria dei Rossi, a Siena` |
| Canonical | `https://www.osteriadeirossi.it/menu/` |
| hreflang | `it` → `https://www.osteriadeirossi.it/menu/` · `en` → `https://www.osteriadeirossi.it/en/menu/` · `x-default` → `https://www.osteriadeirossi.it/menu/` |
| Open Graph title | `Il menù di Osteria dei Rossi, Siena` |
| Open Graph description | `Antipasti, primi, secondi, griglia, dolci e vini con i prezzi. Coperto 2,50 € a persona.` |
| Open Graph image | `/assets/img/og-osteria-dei-rossi-siena.jpg` (1200×630) |
| Robots | `index, follow, max-image-preview:large` |

| H2 | id | H3 |
|---|---|---|
| `Antipasti` | `antipasti` | none |
| `Primi` | `primi` | none |
| `Secondi` | `secondi` | `Specialità della cucina` |
| `Griglia` | `griglia` | `Bistecche e tagli alla griglia` · `Filetto di manzo` |
| `Contorni` | `contorni` | none |
| `Dolci` | `dolci` | none |
| `Bevande` | `bevande` | `Vino` · `Birra e bibite` · `Caffetteria` · `Amari e grappe` |
| `Coperto, pesi e allergeni` | `coperto` | none |
| `Prenota un tavolo` | `prenota` | none (short block with phone and WhatsApp links) |

Each dish is a heading-free list item (dish name in `<strong>` or `<h3>`-free markup) so the heading outline stays as above; dish names are real text, never images. The menu is HTML, never only a PDF.

### 2.4 Menu, English

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/en/menu/` |
| `<html lang>` | `en-GB` |
| Meta title (54) | `Menu | Osteria dei Rossi Siena: pici, wild boar, steak` |
| Meta description (150) | `The menu of Osteria dei Rossi in Siena, with prices: pici, wild boar in dolceforte, grilled steaks, wines and desserts. Cover charge €2.50 per person.` |
| H1 | `The menu at Osteria dei Rossi, Siena` |
| Canonical | `https://www.osteriadeirossi.it/en/menu/` |
| hreflang | same three entries as 2.3 |
| Open Graph title | `The menu at Osteria dei Rossi, Siena` |
| Open Graph description | `Starters, pasta, mains, grill, desserts and wines, with prices. Cover charge €2.50 per person.` |
| Open Graph image | same file |
| Robots | `index, follow, max-image-preview:large` |

| H2 | id (same ids as Italian) | H3 |
|---|---|---|
| `Starters` | `antipasti` | none |
| `First courses` | `primi` | none |
| `Main courses` | `secondi` | `House specialities` |
| `From the grill` | `griglia` | `Steaks and grilled cuts` · `Beef fillet` |
| `Side dishes` | `contorni` | none |
| `Desserts` | `dolci` | none |
| `Drinks` | `bevande` | `Wine` · `Beer and soft drinks` · `Coffee` · `Digestifs and grappas` |
| `Cover charge, weights and allergens` | `coperto` | none |
| `Book a table` | `prenota` | none |

**Menu content rules (both languages).**
- Copy dish names, descriptions and prices exactly as in the approved live menu. Prices are shown with the euro sign; steaks are shown as "9 € / 100 g" style (the approved source says "etto": write "all'etto (100 g)" in Italian and "per 100 g" in English).
- The `#coperto` section says: cover charge 2,50 € a persona; steaks are priced per 100 g and the weight is agreed at the table; for allergens, ask the staff, the allergen list is being confirmed. No allergen numbers, no icons, no "gluten-free", "vegetarian" or "vegan" labels anywhere.
- "Ravioli con Zucca Gialla, Pancetta e stracciatella": show the name and the price (16 €) only. The published description belongs to a different dish; do not show it, in HTML or markup, until the chef supplies the right one.
- Do not copy the sentence "Una specialità unica: siamo gli unici a Siena e provincia a proporvela così. Da provare almeno una volta!" (Bistecca Fritta) into markup. It is the founder's own approved menu text and may stay in the visible menu if the founder wants it; it is not a fact I can verify, so it stays out of structured data that AI engines may repeat as a fact.
- Mark seasonal dishes with the published flag "Piatto di stagione" and the house picks with "Consigliato dall'Oste", as text.
- Show a visible line "Menù aggiornato al <date>" / "Menu updated on <date>" taken from the build, only if a real update process exists (see section 10).

### 2.5 Privacy, Italian and English

| Field | Italian | English |
|---|---|---|
| URL | `https://www.osteriadeirossi.it/privacy/` | `https://www.osteriadeirossi.it/en/privacy/` |
| `<html lang>` | `it` | `en-GB` |
| Meta title (count) | `Informativa privacy | Osteria dei Rossi, Siena` (46) | `Privacy notice | Osteria dei Rossi, Siena` (41) |
| Meta description (count) | `Informativa sulla privacy del sito www.osteriadeirossi.it di Osteria dei Rossi, Siena: quali dati vengono trattati, per quali scopi e a chi rivolgersi.` (151) | `Privacy notice for www.osteriadeirossi.it, the website of Osteria dei Rossi in Siena: what data is processed, for what purposes and who to contact.` (147) |
| H1 | `Informativa sulla privacy` | `Privacy notice` |
| Canonical | `https://www.osteriadeirossi.it/privacy/` | `https://www.osteriadeirossi.it/en/privacy/` |
| hreflang | `it`, `en`, `x-default` as for the other pages, pointing to this pair | same |
| Open Graph | title and description as the meta values; default share image | same |
| Robots | `index, follow` | `index, follow` |
| H2 outline | decided by whoever supplies the privacy text (profile: "Cookie / privacy texts supplied by" is empty); one H2 per topic, no keywords | same |

The privacy text itself is not part of this specification. Its statements must match what the site really does: no tracking scripts, no cookies, no third-party embeds, a Google Maps link instead of a map embed, `tel:` and WhatsApp links.

### 2.6 404 page

One bilingual page (Italian first, English below), served at the host's 404 handler with an HTTP 404 status (never a redirect to Home, never a 200). Title `Pagina non trovata | Osteria dei Rossi` (38) with `Page not found` in the English block; H1 `Pagina non trovata` and, in the English block, an H2 `Page not found`; robots `noindex, follow`; no canonical; no hreflang; not in the sitemap. Content: one sentence, links to Home, Menu and the phone number, in both languages. Branded with the same header, footer and fonts.

### 2.7 Head example (Home, Italian), as a pattern for the builder

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Osteria dei Rossi | Osteria a Siena vicino a San Francesco</title>
<meta name="description" content="Osteria dei Rossi, in Via dei Rossi 79/81 a Siena, dentro le mura: pici, cinghiale in dolceforte, tartufo e fiorentina. Prenota al telefono o su WhatsApp.">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1C4130">
<link rel="canonical" href="https://www.osteriadeirossi.it/">
<link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/">
<link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/">
<link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Osteria dei Rossi">
<meta property="og:locale" content="it_IT">
<meta property="og:locale:alternate" content="en_GB">
<meta property="og:url" content="https://www.osteriadeirossi.it/">
<meta property="og:title" content="Osteria dei Rossi | Osteria a Siena, dentro le mura">
<meta property="og:description" content="Pici, cinghiale in dolceforte, tartufo e fiorentina in Via dei Rossi 79/81, a Siena. Prenota al telefono o su WhatsApp.">
<meta property="og:image" content="https://www.osteriadeirossi.it/assets/img/og-osteria-dei-rossi-siena.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" as="image" type="image/avif" fetchpriority="high" imagesizes="100vw"
  imagesrcset="/assets/img/osteria-dei-rossi-siena-esterno-640.avif 640w, /assets/img/osteria-dei-rossi-siena-esterno-960.avif 960w, /assets/img/osteria-dei-rossi-siena-esterno-1280.avif 1280w, /assets/img/osteria-dei-rossi-siena-esterno-1600.avif 1600w">
```

The Italian pages use `lang="it"` on `<html>`; the English pages `lang="en-GB"`. The JSON-LD blocks of section 6 go in the head as `application/ld+json` scripts, one per block.

---

## 3. Alt text

Rules: describe what the picture shows; 125 characters or fewer; at most one place word per alt (a street name, a city or a region counts as one; a dish name that contains a place adjective counts as the dish); no "immagine di", "photo of" or keyword lists; no price, no rating. Counts were made by hand; the build should assert 125 or fewer. The photos with captions that matter for SEO (9 and 14: the Bruco) carry their text in a visible `<figcaption>`, not in the alt.
Quotation marks inside alt text are « » (Italian) and ‘ ’ (English), never straight double quotes, so the attribute cannot break. Photos are `<img>` elements with these alt values; a photo used only as a CSS background is decorative and has no alt, so the hero must be an `<img>` or `<picture>`.

| # | File slug | Alt, Italian (chars) | Alt, English (chars) |
|---|---|---|---|
| 1 | `osteria-dei-rossi-siena-esterno` | Ingresso dell'osteria a Siena: muro di mattoni, persiane verdi, ombrelloni crema, tavoli sulla strada e una botte (113) | Entrance of the osteria in Siena: brick wall, green shutters, cream parasols, tables on the street and a barrel (111) |
| 2 | `sala-osteria-tradizionale-toscana` | Sala con soffitto a travi, pareti in legno, pavimento in cotto, tavoli con carta verde e fotografie in bianco e nero (116) | Dining room: beamed ceiling, wood-panelled walls, terracotta floor, tables with green paper, black-and-white photographs (120) |
| 3 | `via-dei-rossi-targa-e-insegna-osteria` | Angolo in pietra con la targa in marmo «Via dei Rossi» e, sotto, l'insegna in metallo «Osteria» con una freccia (111) | Stone corner with the marble street plate ‘Via dei Rossi’ and, below it, the dark metal ‘Osteria’ sign with an arrow (116) |
| 4 | `sala-bancone-vista-cucina` | La sala verso il bancone: arco in mattoni, mensole con bottiglie, bandierine, tavoli e sedie in legno (101) | The room towards the counter: brick arch, shelves of bottles, small flags, wooden tables and chairs (99) |
| 5 | `cantina-porta-insegna-ceramica` | Vecchia porta in legno sotto un arco di mattoni con una targa in ceramica verde e bianca con la scritta «Cantina» (113) | Old wooden door under a brick arch with a green-and-white ceramic plate reading ‘Cantina’ (89) |
| 6 | `amaro-al-bancone` | Bottiglia di amaro avvolta nella carta sul bancone di legno e due bicchierini tenuti in mano (92) | A paper-wrapped bottle of amaro on the wooden counter and two small glasses held in two hands (93) |
| 7 | `tagliere-salumi-formaggi-vino-rosso` | Due taglieri di legno con salumi e formaggi, vino rosso versato in un bicchiere e muro di mattoni sullo sfondo (110) | Two wooden boards of cured meats and cheeses, red wine being poured into a glass, brick wall behind (99) |
| 8 | `gran-tagliere-di-salumi-toscani` | Tagliere di legno visto dall'alto con prosciutto, salame, lardo e due crostini, uno scuro e uno con lardo fuso (110) | Wooden board from above with prosciutto, salami, lardo and two crostini, one dark and one topped with melted lardo (114) |
| 9 | `fotografie-storiche-siena-contrada` | Parete gialla con fotografie in bianco e nero incorniciate: un uomo in costume storico e armatura in una strada di Siena (120) | Yellow wall with framed black-and-white photographs, including a man in historic costume and armour in a Siena street (117) |
| 10 | `bistecca-alla-fiorentina-siena` | Bistecca alla fiorentina cruda con l'osso a T su un tagliere scuro, con coltello e rosmarino, muro di mattoni dietro (116) | A raw T-bone Florentine steak standing on a dark wooden board with a knife and rosemary, brick wall behind (106) |
| 11 | `grotta-volte-in-mattoni-cantina` | Sala con volte in mattoni a più arcate, una porta in legno in fondo e tavoli apparecchiati con tovaglioli a quadretti (117) | Brick-vaulted room with successive arches, a wooden door at the back and tables laid with green paper and check napkins (119) |
| 12 | `crostone-lardo-toscano` | Primo piano di un crostone con lardo toscano fuso e pepe su un tagliere di salumi (81) | Close-up of a crostone with melted Tuscan lardo and pepper on a board of cured meats (84) |
| 13 | `lanterna-ferro-battuto` | Lanterna in ferro battuto su una mensola a volute, davanti a una parete gialla e a pannelli di legno (100) | Wrought-iron lantern on a scrolled bracket against a yellow wall, with wood panelling behind (92) |
| 14 | `contrada-del-bruco-barbero-tappi` | Piccola sfera di legno dipinta di verde, giallo e blu appoggiata su un vaso di vetro pieno di tappi di sughero (110) | Small wooden ball painted green, yellow and blue, resting on a glass jar full of wine corks (91) |
| 15 | `cinghiale-con-contorni-tavola` | Carne in umido con polenta alla griglia in un piatto di terracotta, verdure, patate al prezzemolo, pane e vino rosso (116) | Stewed meat with grilled polenta in a terracotta dish, greens, parsley potatoes, bread on a check napkin and red wine (117) |
| 16 | `cinghiale-in-umido-coccio` | Ciotola di terracotta con cinghiale in umido e una foglia di alloro, contorni, pane e vino rosso (96) | Terracotta bowl of wild boar stew with a bay leaf, side dishes, bread and red wine on the table (95) |
| 17 | `cinghiale-in-dolceforte-ricetta-medievale` | Primo piano di una ciotola di terracotta a due manici con cinghiale in dolceforte scuro e lucido e una foglia di alloro (119) | Close-up of a two-handled terracotta bowl of wild boar in dolceforte, dark and glossy, with a bay leaf (102) |
| 18 | `tagliere-di-formaggi-miele-noci` | Tagliere di legno con pecorino, formaggio con crosta di cenere, noci, rucola e vasetti di miele e confettura (108) | Wooden board with pecorino, a soft cheese with an ash rind, walnuts, rocket and jars of honey and preserve (106) |
| 19 | `insegna-storica-osteria-ferro` | Insegna in metallo scuro con la scritta «Osteria» in caratteri gotici e una lunga freccia, fissata a un muro di pietra (118) | Dark metal ‘Osteria’ sign in gothic lettering with a long arrow, fixed to a stone wall (86) |
| 20 | `tartufo-nero-fresco` | Alcuni tartufi neri interi su carta bianca, uno tagliato a metà (63) | Several whole black truffles on white paper, one of them cut open (65) |
| Logo | `logo-osteria-dei-rossi` (full colour; light and one-colour variants are decorative duplicates or follow the same text) | Osteria dei Rossi | Osteria dei Rossi |

Notes on specific photos.
- Photo 14 is a wooden ball in green, yellow and blue on a jar of corks. The founder's caption places the osteria in the Contrada del Bruco, but the profile does not say that the ball is the contrada's emblem or colours. The alt therefore describes only what is visible; the figcaption may say "Nella Contrada del Bruco" / "In the Contrada del Bruco".
- Photo 17 is the only picture of a named house dish (cinghiale in dolceforte, caption "ricetta medievale"). Photos 15 and 16 are captioned by the founder as wild boar stew. There is no photo of pici, of the kitchen, of the cellar itself or of people; do not caption a photo as one of those.
- The logo alt is the name only. If the logo is the link to Home, the link needs no extra text; if the builder wants an accessible name for the link, use `aria-label="Osteria dei Rossi, pagina iniziale"` / `"Osteria dei Rossi, home page"`.
- File names stay as the catalogue slugs (they are descriptive and in Italian); do not rename them to keywords.

---

## 4. Internal linking

### 4.1 Rules

1. Links stay inside the language: Italian pages link to Italian pages (`/`, `/menu/`, `/privacy/`), English pages to English pages (`/en/`, `/en/menu/`, `/en/privacy/`). The only cross-language link is the language switcher, with `hreflang` and `lang` attributes on it.
2. Use root-relative URLs with a trailing slash (`/menu/`, `/en/menu/#primi`). No `index.html` in any link.
3. Anchor text says what is behind the link. No "clicca qui", "qui", "click here", "read more". Six words or fewer. Do not use the same exact-match anchor more than twice on a page.
4. Home links to the Menu from: the header navigation, the #tavola stop (one clear call to action), dish names inside #tavola (deep links to menu sections), the #prenota stop, FAQ answers 4, 8 and 9, and the footer.
5. The Menu links to Home from: the logo, the header navigation, and a closing block that points to `/#prenota` and `/#domande`.
6. Home links to its own stops with fragment links (`/#tavola`); the Menu page links to `/#sala`, `/#cantina`, `/#contrada` from its navigation. Fragment URLs are not in the sitemap and have no separate canonical.
7. No internal `nofollow`. External links (Google Maps, Instagram, Facebook, WhatsApp) use `rel="noopener"`; none carries tracking parameters.
8. Every page is reachable in at most two clicks from Home. There are no orphan pages.

### 4.2 Anchor texts

| From → to | Italian anchor | English anchor |
|---|---|---|
| Header nav, Home → Menu | `Menù` | `Menu` |
| Header nav, any page → booking | `Prenota` (target `/#prenota`) | `Book a table` (target `/en/#prenota`) |
| #tavola, main call to action → `/menu/` | `Vedi il menù completo con i prezzi` | `See the full menu with prices` |
| #tavola, pici → `/menu/#primi` | `i pici al ragù di anatra o di cinta senese` | `pici with duck or Cinta Senese ragù` |
| #tavola, dolceforte → `/menu/#secondi` | `cinghiale in dolceforte` | `cinghiale in dolceforte` |
| #tavola, fiorentina → `/menu/#griglia` | `bistecca alla fiorentina, a peso` | `bistecca alla fiorentina, by weight` |
| #tavola, truffle → `/menu/#primi` | `le tagliatelle al tartufo di stagione` | `the seasonal truffle tagliatelle` |
| #cantina, wines → `/menu/#bevande` | `i vini al calice e in bottiglia` | `wines by the glass and by the bottle` |
| #prenota → `/menu/` | `il menù con i prezzi` | `the menu with prices` |
| FAQ 4 (house dishes) → `/menu/` | `menù` | `menu` |
| FAQ 8 (cover charge) → `/menu/#coperto` | `coperto, pesi e allergeni` | `cover charge, weights and allergens` |
| FAQ 9 (allergens) → `/menu/#coperto` | `note su coperto e allergeni` | `notes on cover charge and allergens` |
| Menu, closing block → `/#prenota` | `Prenota al telefono o su WhatsApp` | `Book by phone or WhatsApp` |
| Menu, closing block → `/#prenota` | `Orari, indirizzo e come arrivare` | `Opening hours, address and getting here` |
| Menu, closing block → `/#domande` | `Domande frequenti` | `Frequently asked questions` |
| Menu, above Drinks → `/#cantina` | `La cantina e i vini` | `The cellar and the wines` |
| Menu logo → Home | no text (the logo alt carries the name) | same |
| Footer → privacy | `Informativa privacy` | `Privacy notice` |
| Language switcher | `English` (`lang="en"`, `hreflang="en"`) | `Italiano` (`lang="it"`, `hreflang="it"`) |

### 4.3 The old menu subdomain (`https://menu.osteriadeirossi.it/`)

**Do not link to it from the website** (not from the header, the Home page, the Menu page, the footer, the FAQ or the JSON-LD). It stays online and unchanged in function, because the QR codes on the tables point to it. Reasons:
- Two menus under one brand compete for the same dish queries. The new `/menu/` is the page with real HTML, schema and a canonical; a link from the site would send visitors and link signals to the weaker page.
- The subdomain page renders its dishes with JavaScript, has no structured data, no canonical, no robots.txt and no sitemap (research, section 5). It is not a page to promote.
- The menu is edited by the staff through a panel (version 48 when captured), so its content can change without the website changing. A visible link would present two sources of truth.

Recommendations for whoever maintains the subdomain (not part of the version 1 build, to be decided; see section 10):
1. Add `<link rel="canonical" href="https://www.osteriadeirossi.it/menu/">` to the subdomain's HTML, and a link on it back to `https://www.osteriadeirossi.it/`. This consolidates signals without breaking the QR codes.
2. Use `/menu/` (never the subdomain) as the menu link in Google Business Profile, TripAdvisor and every other listing.
3. Watch it in Google Search Console: a domain property covers subdomains, so any indexing of the subdomain shows up there.
4. Later, if the staff can edit `/menu/` directly, replace the subdomain with a 301 redirect to `/menu/`; the QR codes then keep working.

---

## 5. FAQ for the Home page (`#domande`)

Ten questions, same order in both languages. The visible text and the FAQPage markup (section 6.3) must be identical, word for word. Links inside visible answers are allowed (section 4.2); the markup carries plain text only. "Rests on" names the line of `profile.md` (or the approved source) that supports each answer. Answers say "we" in the first person plural where the osteria speaks; that is a voice choice for the copywriter, not a new fact.

**1. Where is it, and how far from Piazza del Campo?**
- IT. Domanda: `Dove si trova Osteria dei Rossi e quanto dista da Piazza del Campo?` Risposta: `Si trova in Via dei Rossi 79/81, a Siena, dentro le mura, nella Contrada del Bruco. Piazza del Campo è a circa 5 minuti a piedi, e in fondo alla via sorge la Basilica di San Francesco.`
- EN. Question: `Where is Osteria dei Rossi, and how far is it from Piazza del Campo?` Answer: `It is at Via dei Rossi 79/81 in Siena, inside the city walls, in the Contrada del Bruco. Piazza del Campo is about 5 minutes away on foot, and the Basilica di San Francesco stands at the end of the street.`
- Rests on: Identity, "Address"; Place and story, "The osteria is in the heart of Siena, inside the city walls" and "in the Contrada del Bruco"; "The Basilica di San Francesco stands at the end of the street; Piazza del Campo is about 5 minutes on foot".

**2. Opening days and hours**
- IT. Domanda: `Quali sono i giorni e gli orari di apertura?` Risposta: `Da martedì a sabato siamo aperti a pranzo dalle 12:30 alle 15:00 e a cena dalle 19:00 alle 22:30; la domenica solo a pranzo, dalle 12:30 alle 15:00. La domenica sera e il lunedì siamo chiusi. Gli orari possono cambiare: chiamate lo +39 0577 287592 per conferma.`
- EN. Question: `What are the opening days and hours?` Answer: `From Tuesday to Saturday we are open for lunch from 12:30 to 15:00 and for dinner from 19:00 to 22:30; on Sunday for lunch only, from 12:30 to 15:00. We are closed on Sunday evening and on Monday. Hours can change, so please call +39 0577 287592 to confirm.`
- Rests on: Offer, "Opening hours for the public" (founder's answers, chat 2026-11-24), including the note that hours can change and guests are asked to call.

**3. How to book**
- IT. Domanda: `Come si prenota?` Risposta: `Si prenota per telefono allo +39 0577 287592 o su WhatsApp allo stesso numero; il pulsante Prenota del sito offre entrambe le possibilità.`
- EN. Question: `How do I book a table?` Answer: `You can book by phone on +39 0577 287592 or on WhatsApp on the same number; the Book a table button on this site offers both.`
- Rests on: Offer, "Booking channel" (founder's answer, chat 2026-11-24).

**4. House dishes**
- IT. Domanda: `Quali sono i piatti della casa?` Risposta: `Tra i piatti segnalati con «Consigliato dall'Oste» ci sono la tartare dell'oste, i pici al ragù tradizionale di anatra, i pici al ragù bianco di cinta senese, la tegamata di cinta senese e la bistecca alla fiorentina. In menù dal 1992 ci sono anche gli spaghetti alla chitarra con il sugo dell'osteria.`
- EN. Question: `What are the house dishes?` Answer: `The dishes marked Consigliato dall'Oste (recommended by the host) include the beef tartare, pici with traditional duck ragù, pici with white Cinta Senese ragù, the slow-cooked Cinta Senese stew and the bistecca alla fiorentina. Spaghetti alla chitarra with the osteria's own sauce has also been on the menu since 1992.`
- Rests on: Offer, "Live menu approved for the website" (menu-live-2026-11-24: the five items carry the flag "Consigliato dall'Oste"; the fiorentina is described as "la specialità della casa"; the spaghetti description says "in menù dal 1992").

**5. What is cinghiale in dolceforte?**
- IT. Domanda: `Che cos'è il cinghiale in dolceforte?` Risposta: `È un piatto di cinghiale con il dolceforte, una salsa agrodolce che risale alla cucina medievale. Il cioccolato che si trova nella ricetta di oggi è stato aggiunto nei secoli successivi.`
- EN. Question: `What is cinghiale in dolceforte?` Answer: `It is a wild boar dish with dolceforte, a sweet-and-sour sauce that goes back to medieval cooking. The chocolate in today's recipe was added in later centuries.`
- Rests on: Place and story, "Cinghiale in dolceforte: the sweet-and-sour dolceforte goes back to medieval cooking; the chocolate in today's recipe was added in later centuries"; the menu description "an ancient Tuscan medieval recipe". The answer does not say whether the osteria's own recipe contains chocolate: the profile does not say.

**6. Outdoor tables**
- IT. Domanda: `Ci sono tavoli all'aperto?` Risposta: `Sì, davanti all'ingresso ci sono tavoli sulla strada, con ombrelloni color crema. Se ne desiderate uno, ditelo quando prenotate.`
- EN. Question: `Are there outdoor tables?` Answer: `Yes, there are tables on the street outside the door, under cream parasols. If you would like one, say so when you book.`
- Rests on: Place and story, "What the founder's photos show": "Outside: ... cream parasols and tables on the street" (approved by the founder, chat 2026-11-24). The profile does not say in which months they are out or how many there are, so the answer promises nothing about either.

**7. Parking and the limited-traffic zone**
- IT. Domanda: `Dove si parcheggia? Si può arrivare in auto?` Risposta: `Tutto il centro dentro le mura è a traffico limitato (ZTL), quindi controllate le regole prima di entrare in auto. Il parcheggio San Francesco, in Via Baldassarre Peruzzi, è collegato al centro da scale mobili.`
- EN. Question: `Where can I park, and can I arrive by car?` Answer: `The whole walled centre is a limited-traffic zone (ZTL), so check the rules before driving in. The San Francesco car park, in Via Baldassarre Peruzzi, is linked to the centre by escalators.`
- Rests on: Place and story, "The San Francesco car park (Via Baldassarre Peruzzi) is linked to the centre by escalators; the whole walled centre is a limited-traffic zone (ZTL). No parking tariff is to be shown". No tariff, no walking time from the car park, no ZTL hours or permit rules are stated: none is in the profile.

**8. Cover charge**
- IT. Domanda: `Quanto costa il coperto?` Risposta: `Il coperto è di 2,50 € a persona. Le bistecche si pagano a peso, al prezzo per 100 g indicato nel menù.`
- EN. Question: `How much is the cover charge?` Answer: `The cover charge is €2.50 per person. Steaks are sold by weight, at the price per 100 g shown on the menu.`
- Rests on: Offer, "Live menu approved for the website ... and the cover charge of 2,50 € a persona" and "Dishes priced by weight on the live menu, per 100 g".

**9. Allergens**
- IT. Domanda: `Come funzionano allergeni e intolleranze?` Risposta: `Chiedete al personale prima di ordinare: l'elenco degli allergeni di ogni piatto è in corso di conferma e non è ancora pubblicato sul sito.`
- EN. Question: `How do you handle allergens and intolerances?` Answer: `Please ask the staff before ordering: the allergen list for each dish is being confirmed and is not yet published on this site.`
- Rests on: Offer, "Allergens are not approved and stay off the website until the chef confirms them". The answer does not say that any dish is free of anything.

**10. Wines**
- IT. Domanda: `Che vini ci sono?` Risposta: `Al calice ci sono rossi come Chianti Classico Gallo Nero, IGT Toscano e Maremma DOC e bianchi come Vernaccia di San Gimignano e Vermentino Toscano; in bottiglia c'è il Vino l'Osteria, rosso e bianco. La cantina custodisce i vini della carta, tra cui Chianti, Rosso di Montepulciano e Montalcino.`
- EN. Question: `What wines do you serve?` Answer: `By the glass there are reds such as Chianti Classico Gallo Nero, IGT Toscano and Maremma DOC, and whites such as Vernaccia di San Gimignano and Vermentino Toscano; by the bottle there is the house wine, Vino l'Osteria, red and white. The cellar holds the wines of the wine list, which includes Chianti, Rosso di Montepulciano and Montalcino.`
- Rests on: Offer, "Wines on the live menu" (approved 2026-11-24); Place and story, "A wide choice of wines, such as Chianti, Rosso di Montepulciano and Montalcino" (founder's brief) and "the cellar holds the wines of the wine list" (founder's photo captions). No bottle prices are in the answer, so the FAQ does not go stale when prices change.

**Questions left out** because the profile has no answer: how many seats, private groups, children and dogs, wheelchair access, card payments, takeaway, gluten-free or vegetarian options, Palio-day hours, and "how much does dinner cost per head".

---

## 6. JSON-LD

General rules. Values come from the profile only. No geo coordinates (not in the profile), no email (none approved), no rating or review markup of any kind, no `suitableForDiet`, no allergens, no `servesCuisine` beyond what the approved menu shows.
`priceRange` is `€5-€30`. Derivation: the lowest and highest price of a single plated item on the approved menu, excluding steaks sold by weight and excluding drinks and coffee. The lowest is Insalata Mista at 5 €; the highest is Medaglione di Filetto alla Griglia con Tartufo at 30 €. It is a range of dish prices, not a cost per head; the profile has no per-head figure and none is stated.
`servesCuisine` is derived from the approved menu text (descriptions speak of Tuscan and Senese cooking), because the profile line "Cuisine" is marked as unverified; the founder should confirm (section 10).
`image` uses the 960 px JPEG of five photos whose catalogue "Use" is wide (the files exist in `site/assets/img/`). `logo` is the full-colour logo file in the same folder; the builder must confirm that `logo-osteria-dei-rossi-720.webp` is the full-colour one.
`openingHoursSpecification` is the approved hours. The closed times (Sunday evening, Monday) are expressed by having no entry for them.
`foundingDate` is `1992`, from "Opened in 1992" (profile, founder-approved line).
The same Restaurant `@id` is used on the Italian and English pages so both versions describe one entity. When the hours or the menu change, the visible text, the FAQ and the markup change in the same commit.

### 6.1 Home, Italian (`/`): WebSite and Restaurant

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.osteriadeirossi.it/#website",
      "url": "https://www.osteriadeirossi.it/",
      "name": "Osteria dei Rossi",
      "inLanguage": "it",
      "publisher": { "@id": "https://www.osteriadeirossi.it/#restaurant" }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.osteriadeirossi.it/#restaurant",
      "name": "Osteria dei Rossi",
      "url": "https://www.osteriadeirossi.it/",
      "description": "Osteria a Siena, dentro le mura, in Via dei Rossi 79/81, nella Contrada del Bruco. Cucina senese e toscana, bistecche alla griglia, pici e cinghiale in dolceforte.",
      "telephone": "+39 0577 287592",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via dei Rossi, 79/81",
        "postalCode": "53100",
        "addressLocality": "Siena",
        "addressRegion": "SI",
        "addressCountry": "IT"
      },
      "hasMap": "https://maps.google.com/?cid=5066073290586870112",
      "image": [
        "https://www.osteriadeirossi.it/assets/img/osteria-dei-rossi-siena-esterno-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/sala-osteria-tradizionale-toscana-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/grotta-volte-in-mattoni-cantina-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/cinghiale-in-dolceforte-ricetta-medievale-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/bistecca-alla-fiorentina-siena-960.jpg"
      ],
      "logo": "https://www.osteriadeirossi.it/assets/img/logo-osteria-dei-rossi-720.webp",
      "servesCuisine": ["Cucina toscana", "Cucina senese"],
      "priceRange": "€5-€30",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "12:30",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "19:00",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:30",
          "closes": "15:00"
        }
      ],
      "acceptsReservations": true,
      "hasMenu": "https://www.osteriadeirossi.it/menu/",
      "sameAs": [
        "https://www.instagram.com/osteriadeirossi/",
        "https://www.facebook.com/osteriadeirossi"
      ],
      "foundingDate": "1992"
    }
  ]
}
```

### 6.2 Home, English (`/en/`): WebSite and Restaurant

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.osteriadeirossi.it/en/#website",
      "url": "https://www.osteriadeirossi.it/en/",
      "name": "Osteria dei Rossi",
      "inLanguage": "en-GB",
      "publisher": { "@id": "https://www.osteriadeirossi.it/#restaurant" }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.osteriadeirossi.it/#restaurant",
      "name": "Osteria dei Rossi",
      "url": "https://www.osteriadeirossi.it/en/",
      "description": "An osteria in Siena, inside the city walls, at Via dei Rossi 79/81, in the Contrada del Bruco. Sienese and Tuscan cooking, grilled steaks, pici and cinghiale in dolceforte.",
      "telephone": "+39 0577 287592",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via dei Rossi, 79/81",
        "postalCode": "53100",
        "addressLocality": "Siena",
        "addressRegion": "SI",
        "addressCountry": "IT"
      },
      "hasMap": "https://maps.google.com/?cid=5066073290586870112",
      "image": [
        "https://www.osteriadeirossi.it/assets/img/osteria-dei-rossi-siena-esterno-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/sala-osteria-tradizionale-toscana-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/grotta-volte-in-mattoni-cantina-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/cinghiale-in-dolceforte-ricetta-medievale-960.jpg",
        "https://www.osteriadeirossi.it/assets/img/bistecca-alla-fiorentina-siena-960.jpg"
      ],
      "logo": "https://www.osteriadeirossi.it/assets/img/logo-osteria-dei-rossi-720.webp",
      "servesCuisine": ["Tuscan", "Sienese"],
      "priceRange": "€5-€30",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "12:30",
          "closes": "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "19:00",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:30",
          "closes": "15:00"
        }
      ],
      "acceptsReservations": true,
      "hasMenu": "https://www.osteriadeirossi.it/en/menu/",
      "sameAs": [
        "https://www.instagram.com/osteriadeirossi/",
        "https://www.facebook.com/osteriadeirossi"
      ],
      "foundingDate": "1992"
    }
  ]
}
```

### 6.3 Home, Italian (`/`): FAQPage

Note on expectations: since 2023 Google shows FAQ rich results only for a small set of authoritative sites, so no rich result in the search page should be expected for this osteria. The markup is kept because it is valid, it matches visible text, and answer engines can parse it. The page is not written around it.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/#domande",
  "url": "https://www.osteriadeirossi.it/#domande",
  "inLanguage": "it",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Dove si trova Osteria dei Rossi e quanto dista da Piazza del Campo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si trova in Via dei Rossi 79/81, a Siena, dentro le mura, nella Contrada del Bruco. Piazza del Campo è a circa 5 minuti a piedi, e in fondo alla via sorge la Basilica di San Francesco."
      }
    },
    {
      "@type": "Question",
      "name": "Quali sono i giorni e gli orari di apertura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da martedì a sabato siamo aperti a pranzo dalle 12:30 alle 15:00 e a cena dalle 19:00 alle 22:30; la domenica solo a pranzo, dalle 12:30 alle 15:00. La domenica sera e il lunedì siamo chiusi. Gli orari possono cambiare: chiamate lo +39 0577 287592 per conferma."
      }
    },
    {
      "@type": "Question",
      "name": "Come si prenota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si prenota per telefono allo +39 0577 287592 o su WhatsApp allo stesso numero; il pulsante Prenota del sito offre entrambe le possibilità."
      }
    },
    {
      "@type": "Question",
      "name": "Quali sono i piatti della casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tra i piatti segnalati con «Consigliato dall'Oste» ci sono la tartare dell'oste, i pici al ragù tradizionale di anatra, i pici al ragù bianco di cinta senese, la tegamata di cinta senese e la bistecca alla fiorentina. In menù dal 1992 ci sono anche gli spaghetti alla chitarra con il sugo dell'osteria."
      }
    },
    {
      "@type": "Question",
      "name": "Che cos'è il cinghiale in dolceforte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "È un piatto di cinghiale con il dolceforte, una salsa agrodolce che risale alla cucina medievale. Il cioccolato che si trova nella ricetta di oggi è stato aggiunto nei secoli successivi."
      }
    },
    {
      "@type": "Question",
      "name": "Ci sono tavoli all'aperto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, davanti all'ingresso ci sono tavoli sulla strada, con ombrelloni color crema. Se ne desiderate uno, ditelo quando prenotate."
      }
    },
    {
      "@type": "Question",
      "name": "Dove si parcheggia? Si può arrivare in auto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tutto il centro dentro le mura è a traffico limitato (ZTL), quindi controllate le regole prima di entrare in auto. Il parcheggio San Francesco, in Via Baldassarre Peruzzi, è collegato al centro da scale mobili."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto costa il coperto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il coperto è di 2,50 € a persona. Le bistecche si pagano a peso, al prezzo per 100 g indicato nel menù."
      }
    },
    {
      "@type": "Question",
      "name": "Come funzionano allergeni e intolleranze?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chiedete al personale prima di ordinare: l'elenco degli allergeni di ogni piatto è in corso di conferma e non è ancora pubblicato sul sito."
      }
    },
    {
      "@type": "Question",
      "name": "Che vini ci sono?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al calice ci sono rossi come Chianti Classico Gallo Nero, IGT Toscano e Maremma DOC e bianchi come Vernaccia di San Gimignano e Vermentino Toscano; in bottiglia c'è il Vino l'Osteria, rosso e bianco. La cantina custodisce i vini della carta, tra cui Chianti, Rosso di Montepulciano e Montalcino."
      }
    }
  ]
}
```

### 6.4 Home, English (`/en/`): FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/en/#domande",
  "url": "https://www.osteriadeirossi.it/en/#domande",
  "inLanguage": "en-GB",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Osteria dei Rossi, and how far is it from Piazza del Campo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is at Via dei Rossi 79/81 in Siena, inside the city walls, in the Contrada del Bruco. Piazza del Campo is about 5 minutes away on foot, and the Basilica di San Francesco stands at the end of the street."
      }
    },
    {
      "@type": "Question",
      "name": "What are the opening days and hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From Tuesday to Saturday we are open for lunch from 12:30 to 15:00 and for dinner from 19:00 to 22:30; on Sunday for lunch only, from 12:30 to 15:00. We are closed on Sunday evening and on Monday. Hours can change, so please call +39 0577 287592 to confirm."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a table?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book by phone on +39 0577 287592 or on WhatsApp on the same number; the Book a table button on this site offers both."
      }
    },
    {
      "@type": "Question",
      "name": "What are the house dishes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The dishes marked Consigliato dall'Oste (recommended by the host) include the beef tartare, pici with traditional duck ragù, pici with white Cinta Senese ragù, the slow-cooked Cinta Senese stew and the bistecca alla fiorentina. Spaghetti alla chitarra with the osteria's own sauce has also been on the menu since 1992."
      }
    },
    {
      "@type": "Question",
      "name": "What is cinghiale in dolceforte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a wild boar dish with dolceforte, a sweet-and-sour sauce that goes back to medieval cooking. The chocolate in today's recipe was added in later centuries."
      }
    },
    {
      "@type": "Question",
      "name": "Are there outdoor tables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there are tables on the street outside the door, under cream parasols. If you would like one, say so when you book."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I park, and can I arrive by car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The whole walled centre is a limited-traffic zone (ZTL), so check the rules before driving in. The San Francesco car park, in Via Baldassarre Peruzzi, is linked to the centre by escalators."
      }
    },
    {
      "@type": "Question",
      "name": "How much is the cover charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cover charge is €2.50 per person. Steaks are sold by weight, at the price per 100 g shown on the menu."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle allergens and intolerances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please ask the staff before ordering: the allergen list for each dish is being confirmed and is not yet published on this site."
      }
    },
    {
      "@type": "Question",
      "name": "What wines do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By the glass there are reds such as Chianti Classico Gallo Nero, IGT Toscano and Maremma DOC, and whites such as Vernaccia di San Gimignano and Vermentino Toscano; by the bottle there is the house wine, Vino l'Osteria, red and white. The cellar holds the wines of the wine list, which includes Chianti, Rosso di Montepulciano and Montalcino."
      }
    }
  ]
}
```

### 6.5 Menu, Italian (`/menu/`): Menu and BreadcrumbList

Notes for this block. Every approved dish and drink is listed, with its published name and price. Descriptions are the approved Italian text. Desserts without an Italian description in the source have none here (nothing is invented); the two desserts with options (Panna Cotta, Cheesecake) carry the published options as their description. The three steaks sold by weight carry "Prezzo per 100 g" in the description and the per-100 g price in the offer. The three variants of the beef fillet medallion are separate items named with the base dish (the source names them "Con Tartufo" and so on). Ravioli con Zucca Gialla, Pancetta e stracciatella has no description. The last two sentences of the Bistecca Fritta text are left out on purpose (see 2.4). No allergens, no diet labels, no flags.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Menu",
      "@id": "https://www.osteriadeirossi.it/menu/#menu",
      "url": "https://www.osteriadeirossi.it/menu/",
      "name": "Menù di Osteria dei Rossi",
      "inLanguage": "it",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Antipasti",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Tagliere del Cacciatore", "description": "Una selezione di salumi di cinta senese e selvaggina, espressione dei sapori più autentici del territorio.", "offers": { "@type": "Offer", "price": "22.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tartare dell’Oste", "description": "Battuta di manzo al coltello, preparata al momento per esaltarne la qualità della carne e il sapore autentico. Servita su una croccante cialda di parmigiano e accompagnata da senape antica in grani.", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliere del Contadino", "description": "Formaggi toscani abbinati a miele e confetture genuini e ricchi di sapore che portano in tavola tutta la bontà della nostra terra.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bis di crostoni", "description": "Due crostoni dai sapori distinti: uno con gorgonzola e tartufo, l’altro con cacio, pere e miele. Due abbinamenti che uniscono carattere, cremosità e delicate note dolci.", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Acciughe sotto pesto", "description": "Acciughe con pesto senese al dragoncello: profumate, saporite e con quel tocco in più che non ti aspetti.", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Crostini neri senesi", "description": "Un simbolo della cucina senese, dal gusto intenso e inconfondibile, che porta in tavola i sapori di Siena.", "offers": { "@type": "Offer", "price": "9.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Primi",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Tagliatelle ai Funghi Porcini", "description": "Tagliatelle con funghi porcini: il profumo del bosco toscano, nel piatto dell’autunno.", "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliatelle al Tartufo di Stagione", "description": "Tagliatella accompagnata dal profumo intenso di tartufo di stagione.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici al Ragù Tradizionale di Anatra", "description": "Pici della tradizione conditi con un ragù d’anatra ricco e saporito. Un piatto rustico, di quelli che sanno di casa e di cucina toscana.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici al Ragù Bianco di Cinta Senese", "description": "Ragù bianco di cinta senese, senza pomodoro, con la miscela segreta di erbe e spezie della casa.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliatelle al Ragù di Cinghiale", "description": "Tagliatelle accompagnate da un ragù di cinghiale dai sapori autentici e rustici della tradizione toscana.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici Cacio e Pepe", "description": "Pici con pecorino toscano e pepe nero, una versione in stile toscano di un grande classico della cucina italiana.", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Spaghetti alla Chitarra con Sugo dell’Osteria", "description": "Una ricetta storica ed esclusiva dell’Osteria dei Rossi, in menù dal 1992: sugo a base di pomodoro, gorgonzola e peperoncino, per un incontro deciso e inconfondibile di sapori.", "offers": { "@type": "Offer", "price": "14.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Ravioli con Zucca Gialla, Pancetta e stracciatella", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Ribollita", "description": "La celebre zuppa toscana della tradizione contadina, ricca di storia. A volte le cose semplici sono le migliori.", "offers": { "@type": "Offer", "price": "13.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Secondi: specialità della cucina",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Cinghiale in Dolce Forte", "description": "Un’antica ricetta medievale toscana, in cui il sapore intenso del cinghiale incontra il caratteristico equilibrio agrodolce del dolce forte.", "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tegamata di Cinta Senese", "description": "Uno stufato di cinta senese a cottura lenta, preparato senza base di pomodoro con carne proveniente da un allevamento allo stato brado nel cuore delle Crete Senesi.", "offers": { "@type": "Offer", "price": "19.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Agnello allo Scottadito", "description": "Costolette d’agnello cotte alla griglia, da gustare calde secondo la tradizione.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cinghiale al Coccio con Polenta", "description": "Spezzatino di cinghiale dalla cottura lenta e aromatica, accompagnato da polenta: un grande classico della cucina toscana.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Sovracosce di Pollo alla Diavola", "description": "Sovracosce di pollo croccanti, cotte alla griglia e accompagnate da una salsa piccante fatta in casa.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Trippa alla Senese", "description": "Una ricetta della tradizione popolare senese, particolarmente legata al periodo del Palio. Sugo a base di pomodoro, salsiccia e peperoncino.", "offers": { "@type": "Offer", "price": "14.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Griglia: bistecche e tagli alla griglia",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Bistecca alla Fiorentina", "description": "La specialità della casa: una selezione settimanale curata da Alessio, il nostro macellaio di fiducia. Selezioniamo le migliori carni provenienti da razze e allevamenti di tutto il mondo, per offrire un’esperienza alla griglia sempre distintiva e unica. Prezzo per 100 g (all’etto).", "offers": { "@type": "Offer", "price": "9.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bistecca Fritta", "description": "La nostra versione fuori dagli schemi della regina della tavola toscana: una bella bistecca alla fiorentina, impanata e fritta, croccante fuori e succosa dentro. Prezzo per 100 g (all’etto).", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Costata del macellaio", "description": "Un taglio di manzo simile alla Fiorentina, ma senza filetto, ideale per chi ama il gusto autentico della carne alla griglia. Prezzo per 100 g (all’etto).", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Griglia: filetto di manzo",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia", "description": "Medaglione di filetto di manzo cotto alla griglia, da gustare al naturale oppure nelle sue varianti.", "offers": { "@type": "Offer", "price": "25.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con Tartufo", "description": "Per chi al profumo del tartufo non sa proprio dire di no.", "offers": { "@type": "Offer", "price": "30.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con Lardo di Colonnata", "description": "Lardo di Colonnata, morbido e saporito, per un abbinamento ricco e tutto da gustare.", "offers": { "@type": "Offer", "price": "28.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con salsa al Pepe Verde", "description": "Delicata salsa al pepe verde sfumata al brandy", "offers": { "@type": "Offer", "price": "28.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Contorni",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Fagioli all’Uccelletto", "description": "Un grande classico toscano: fagioli saporiti, perfetti per accompagnare i piatti della casa.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Chips di Patate Croccanti", "description": "Dorate, croccanti e una tira l’altra. C’è davvero bisogno di aggiungere altro?", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Patate Prezzemolate", "description": "Patate lesse condite con prezzemolo tritato, olio, sale e pepe. Semplici, genuine e sempre al posto giusto.", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Erbe Saltate", "description": "Bietole, cicoria e spinaci saltati in padella con aglio, olio e peperoncino. Verdure sì, ma con carattere.", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Insalata Mista", "description": "Insalata fresca, ideale per chi vuole qualcosa di leggero e genuino.", "offers": { "@type": "Offer", "price": "5.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Dolci",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Il Tiramisù di Manu", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cantuccini e Vin Santo", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Panna Cotta", "description": "Al cioccolato, ai frutti di bosco o al caramello.", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tortino al Cioccolato con Cuore Caldo", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cheesecake", "description": "Al cioccolato, ai frutti di bosco o al caramello.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tris di Dolci Senesi", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Carpaccio di Pere e Scaglie di Cioccolato Fondente", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Vino",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Vino l’Osteria Rosso · bottiglia 0,75 l", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Vino l’Osteria Bianco · bottiglia 0,75 l", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Vino al calice · Rosso", "description": "Chianti Classico Gallo Nero · IGT Toscano · Maremma DOC", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Vino al calice · Bianco", "description": "Vernaccia di San Gimignano · Vermentino Toscano", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Birra e bibite",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Bionda alla spina · Lager media", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bionda alla spina · Lager piccola", "offers": { "@type": "Offer", "price": "4.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Coca-Cola / Coca-Cola Zero", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Acqua", "offers": { "@type": "Offer", "price": "2.50", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Caffetteria",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Caffè", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Caffè corretto", "offers": { "@type": "Offer", "price": "2.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Caffè d’orzo", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Caffè decaffeinato", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Amari e grappe",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Vecchio Toscano", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Amaro di Siena", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Jefferson", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bomba Carta", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Aromatizzata", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Montenegro", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Capo", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Bianca", "offers": { "@type": "Offer", "price": "3.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Barricata", "offers": { "@type": "Offer", "price": "3.00", "priceCurrency": "EUR" } }
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/" },
        { "@type": "ListItem", "position": 2, "name": "Menù", "item": "https://www.osteriadeirossi.it/menu/" }
      ]
    }
  ]
}
```

### 6.6 Menu, English (`/en/menu/`): Menu and BreadcrumbList

Same rules as 6.5. Dish names stay as published (the English menu keeps the Italian dish names); the descriptions are the approved English text; drinks use the published English item names. Items whose English description is missing in the source (Panna Cotta, Cheesecake) carry the options as the description; the amari and grappas have no description.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Menu",
      "@id": "https://www.osteriadeirossi.it/en/menu/#menu",
      "url": "https://www.osteriadeirossi.it/en/menu/",
      "name": "Menu of Osteria dei Rossi",
      "inLanguage": "en-GB",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Starters",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Tagliere del Cacciatore", "description": "A selection of cured Cinta Senese pork and game meats, bringing the most authentic flavours of the local area to your table.", "offers": { "@type": "Offer", "price": "22.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tartare dell’Oste", "description": "Beef tartare, hand-cut with a knife and prepared to order to bring out the quality of the meat and its authentic flavour. Served on a crispy Parmesan wafer and accompanied by antique wholegrain mustard.", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliere del Contadino", "description": "Tuscan pecorino cheeses paired with honey and preserves that bring all the goodness of the region straight to your table.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bis di crostoni", "description": "Two toasted bread slices with very different flavours: one topped with Gorgonzola and slices of truffle, the other with Tuscan cheese, pears and honey. Two combinations that bring together bold flavours, creaminess and delicate sweet notes.", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Acciughe sotto pesto", "description": "Anchovies with Senese tarragon pesto: fragrant, full of flavour and with that unexpected little something extra.", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Crostini neri senesi", "description": "A true symbol of Senese cuisine, with an unmistakable classic flavour that brings the tastes of Siena straight to your table.", "offers": { "@type": "Offer", "price": "9.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "First courses",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Tagliatelle ai Funghi Porcini", "description": "Tagliatelle with porcini mushrooms: the scent of the Tuscan woods in an autumn dish.", "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliatelle al Tartufo di Stagione", "description": "Tagliatelle served with the intense aroma of sliced, seasonal fresh truffle.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici al Ragù Tradizionale di Anatra", "description": "Traditional pici tossed in a rich, flavourful duck ragù. A rustic dish, the kind that tastes of home and proper Tuscan cooking.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici al Ragù Bianco di Cinta Senese", "description": "White Cinta Senese pork ragù, made without tomato and seasoned with our house’s secret blend of herbs and spices.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tagliatelle al Ragù di Cinghiale", "description": "Tagliatelle served with wild boar ragù, full of the authentic, rustic flavours of Tuscan tradition.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Pici Cacio e Pepe", "description": "Pici with Tuscan pecorino cheese and black pepper, our Tuscan take on a great Italian classic.", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Spaghetti alla Chitarra con Sugo dell’Osteria", "description": "A historic, exclusive recipe from Osteria dei Rossi, on the menu since 1992: a tomato-based sauce with Gorgonzola and chilli, bringing together bold, unmistakable flavours.", "offers": { "@type": "Offer", "price": "14.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Ravioli con Zucca Gialla, Pancetta e stracciatella", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Ribollita", "description": "The famous Tuscan peasant soup, steeped in history. Sometimes the simplest things are the best.", "offers": { "@type": "Offer", "price": "13.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Main courses: house specialities",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Cinghiale in Dolce Forte", "description": "An ancient Tuscan medieval recipe, where the intense flavour of wild boar meets the distinctive sweet-and-sour balance of dolce forte.", "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tegamata di Cinta Senese", "description": "A slow-cooked Cinta Senese pork stew, made without a tomato base, using meat from free-range pigs raised in the heart of the Crete Senesi.", "offers": { "@type": "Offer", "price": "19.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Agnello allo Scottadito", "description": "Grilled lamb chops, best enjoyed piping hot, just as tradition dictates.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cinghiale al Coccio con Polenta", "description": "Slow-cooked, aromatic wild boar stew served with polenta: a true classic of Tuscan cooking.", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Sovracosce di Pollo alla Diavola", "description": "Crispy grilled chicken thighs served with our homemade spicy sauce.", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Trippa alla Senese", "description": "A dish rooted in traditional Senese home cooking, especially associated with Palio season. Served in a tomato sauce with sausage and chilli.", "offers": { "@type": "Offer", "price": "14.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "From the grill: steaks and grilled cuts",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Bistecca alla Fiorentina", "description": "The house speciality: a weekly selection hand-picked by Alessio, our trusted butcher. We choose the finest beef from breeds and farms around the world to offer a truly distinctive and unique grilling experience every time. Price per 100 g.", "offers": { "@type": "Offer", "price": "9.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bistecca Fritta", "description": "Our unconventional take on the queen of the Tuscan table: a proper Florentine steak, breaded and fried until crispy on the outside and juicy on the inside. Price per 100 g.", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Costata del macellaio", "description": "A cut of beef similar to a Florentine steak, but without the tenderloin, perfect for those who love the authentic taste of grilled meat. Price per 100 g.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "From the grill: beef fillet",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia", "description": "A beef fillet medallion cooked on the grill, to enjoy just as it is or with one of our toppings.", "offers": { "@type": "Offer", "price": "25.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con Tartufo", "description": "For those who simply can’t say no to truffle.", "offers": { "@type": "Offer", "price": "30.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con Lardo di Colonnata", "description": "Delicate, flavourful cured pork fat from Colonnata, bringing a rich and satisfying pairing to the fillet.", "offers": { "@type": "Offer", "price": "28.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Medaglione di Filetto alla Griglia con salsa al Pepe Verde", "description": "Delicate green peppercorn sauce, finished with brandy", "offers": { "@type": "Offer", "price": "28.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Side dishes",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Fagioli all’Uccelletto", "description": "A Tuscan favourite: flavourful beans, perfect alongside our house dishes.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Chips di Patate Croccanti", "description": "Golden, crispy and impossible to stop eating. Do we really need to say more?", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Patate Prezzemolate", "description": "Boiled potatoes dressed with chopped parsley, oil, salt and pepper. Simple, honest and always right at home on the plate.", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Erbe Saltate", "description": "Swiss chard, chicory and spinach sautéed with garlic, olive oil and chilli. Greens with a bit of attitude.", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Insalata Mista", "description": "Fresh mixed salad with seasonal vegetables, for something light and wholesome.", "offers": { "@type": "Offer", "price": "5.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Desserts",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Il Tiramisù di Manu", "description": "Manu’s tiramisù.", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cantuccini e Vin Santo", "description": "Tuscan almond biscuits with Vin Santo dessert wine.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Panna Cotta", "description": "Options: chocolate, wild berries or caramel.", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tortino al Cioccolato con Cuore Caldo", "description": "Chocolate fondant with a warm, melting centre.", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Cheesecake", "description": "Options: chocolate, wild berries or caramel.", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Tris di Dolci Senesi", "description": "A trio of traditional Sienese sweets.", "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Carpaccio di Pere e Scaglie di Cioccolato Fondente", "description": "Thinly sliced pears with dark chocolate shavings.", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Wine",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "L’Osteria red wine · 0.75 l bottle", "offers": { "@type": "Offer", "price": "18.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "L’Osteria white wine · 0.75 l bottle", "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Red wine by the glass", "description": "Chianti Classico Gallo Nero · IGT Toscano · Maremma DOC", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "White wine by the glass", "description": "Vernaccia di San Gimignano · Vermentino Toscano", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Beer and soft drinks",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Draught lager · medium", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Draught lager · small", "offers": { "@type": "Offer", "price": "4.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Coca-Cola / Coca-Cola Zero", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Water", "offers": { "@type": "Offer", "price": "2.50", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Coffee",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Espresso", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Espresso with a dash of liqueur", "offers": { "@type": "Offer", "price": "2.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Barley coffee", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Decaf espresso", "offers": { "@type": "Offer", "price": "2.00", "priceCurrency": "EUR" } }
          ]
        },
        {
          "@type": "MenuSection",
          "name": "Digestifs and grappas",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Vecchio Toscano", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Amaro di Siena", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Jefferson", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Bomba Carta", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Aromatizzata", "offers": { "@type": "Offer", "price": "4.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Montenegro", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Capo", "offers": { "@type": "Offer", "price": "3.50", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Bianca", "offers": { "@type": "Offer", "price": "3.00", "priceCurrency": "EUR" } },
            { "@type": "MenuItem", "name": "Grappa Poli Barricata", "offers": { "@type": "Offer", "price": "3.00", "priceCurrency": "EUR" } }
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/en/" },
        { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://www.osteriadeirossi.it/en/menu/" }
      ]
    }
  ]
}
```

Keeping markup and page in step: the menu markup should be generated from the same data file as the visible menu, never typed twice. A price in the markup that differs from the page is a markup error.

---

## 7. robots.txt and sitemap.xml

### 7.1 `/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://www.osteriadeirossi.it/sitemap.xml
```

No per-crawler rules in version 1 (search and AI crawlers are allowed); no `Disallow` lines, because the site has no admin, search or staging paths in production. The 404 page is not listed anywhere. The old menu subdomain has its own host and its own (absent) robots file; do not add one there without checking with the founder.

### 7.2 `/sitemap.xml`

Six URLs, each with its language twin and `x-default`. `lastmod` is the real date of the last content change of that page, generated by the build; the dates below are placeholders for the build to replace, and must never be set to "today" automatically on every build.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.osteriadeirossi.it/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/menu/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/menu/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/privacy/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/privacy/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/privacy/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/privacy/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/privacy/</loc>
    <lastmod>2026-11-24</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/privacy/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/privacy/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/privacy/"/>
  </url>
</urlset>
```

The hreflang entries in the sitemap and in the page heads must agree exactly. When German pages are added, add `hreflang="de"` to every entry in both places at once.

---

## 8. Technical checklist for the builder

Run the list on the built output, not on the source.

**Structure and language**
- [ ] Exactly one `<h1>` per page, in the HTML at first paint, not created by script, not animated in. Headings follow the outline in section 2 with no skipped levels (H1, then H2, then H3).
- [ ] `<html lang="it">` on Italian pages and `<html lang="en-GB">` on English pages. Any phrase in the other language inside a page (for example the dish names on the English menu) is not marked up separately, except the language switcher link (`lang` and `hreflang`).
- [ ] The seven stops are `<section>` elements with the fixed ids `porta`, `via`, `sala`, `tavola`, `cantina`, `contrada`, `prenota`, plus `domande`; each section is labelled by its heading (`aria-labelledby`). Menu section ids as in 2.3. A skip link to the main content is the first focusable element.
- [ ] Phone shown as `+39 0577 287592` with `href="tel:+390577287592"`; WhatsApp link `https://wa.me/390577287592`; the visible NAP block is identical on every page footer.
- [ ] Footer carries the legal line from the profile identity lines (legal name ML SNC DI LANARO E FRESI, P. IVA IT00354250524, registered address Via dei Rossi 79/81, 53100 Siena). Confirm with the founder that it is wanted in the footer (section 10).

**Images**
- [ ] Every `<img>` has `width` and `height` attributes equal to the intrinsic size of its default `src`, plus CSS `aspect-ratio`, so nothing shifts. Ratios of the catalogue: 2048×1638 photos are 5:4 (960 px wide is 960×768); 2048×1366 photos are 3:2 (960×640); 1638×2048 portraits are 4:5 (720×900). Other widths follow the same ratio (for the 5:4 photos: 640×512, 1280×1024, 1600×1280, 2048×1638).
- [ ] `<picture>` with AVIF sources and JPEG fallback, `srcset` and `sizes` for each use. Alt text exactly as in section 3.
- [ ] One preloaded hero image: `rel="preload" as="image" fetchpriority="high"` with the AVIF `imagesrcset` of `osteria-dei-rossi-siena-esterno` (see 2.7), and the hero `<img>` itself has `fetchpriority="high"`, `loading="eager"` and `decoding="async"`. No other image is preloaded.
- [ ] Every image below the first viewport has `loading="lazy"` and `decoding="async"`. Never lazy-load the hero, the logo or anything in the first viewport on mobile.
- [ ] No text inside images (menu, hours, address, phone are always HTML text). The share image is a 1200×630 JPEG, referenced by absolute URL.
- [ ] GPS data stripped from all published photos.

**Fonts and third parties**
- [ ] Fonts self-hosted as WOFF2: Bodoni Moda (display) and Figtree (body), the two approved in the profile. Source Serif 4 is not approved: do not load it. Subset to Latin plus Latin Extended (Italian accents, euro sign, guillemets), `font-display: swap`, a metric-matched fallback stack to keep CLS low, and preload at most two font files (body regular and the display weight used in the H1).
- [ ] No render-blocking third-party request of any kind. No analytics, no tag manager, no pixel, no cookie, no embed, no web font CDN, no map embed (the map is a link to the Google Maps URL). CSS is inlined or loaded without blocking beyond the critical file; JavaScript is deferred and optional (the page must read fully without it).
- [ ] No cookie banner is needed if and only if the first bullet holds on the built site. Check the response headers for `Set-Cookie`: there must be none.
- [ ] External links use `rel="noopener"`. No tracking parameters on any link.

**Host and URLs**
Redirects wanted at the host (all 301), tested with a header check:

| From | To |
|---|---|
| `http://` any host | `https://www.osteriadeirossi.it/` same path |
| `https://osteriadeirossi.it/…` (no www) | `https://www.osteriadeirossi.it/…` same path |
| `/index.html` and `/en/index.html` | `/` and `/en/` |
| `/menu` and `/en/menu`, `/privacy`, `/en/privacy`, `/en` (no trailing slash) | the same URL with a trailing slash |
| Any other legacy path that exists on the old preview host (`azure-locust-452058.hostingersite.com`) | the matching new URL if one exists; the preview host itself must not stay indexable (take it down or serve `noindex`; the profile marks it as superseded) |

- [ ] HTTPS everywhere, HSTS enabled once the redirects are verified. Compression (Brotli or gzip) and long cache lifetimes with content-hashed file names for CSS, JS, fonts and images; HTML revalidates.
- [ ] A branded 404 as in 2.6: HTTP 404, links to Home, Menu and the phone, `noindex`, same header and footer, not a redirect.
- [ ] `robots.txt` and `sitemap.xml` as in section 7, served at the root with correct content types. Canonical, hreflang and sitemap agree.
- [ ] The staging or preview copy of the site is `noindex` and blocked from search crawlers until launch, and the `noindex` is removed in the launch commit (check the live HTML after launch).

**Markup**
- [ ] The JSON-LD blocks of section 6 are in the head of the right pages, one block per `<script type="application/ld+json">`, valid against the Schema.org validator and the Rich Results test. FAQ text identical to the visible text. Menu markup generated from the same data as the visible menu.
- [ ] No rating, review, geo, email, `suitableForDiet` or allergen markup anywhere.
- [ ] Open Graph and Twitter tags on every indexable page; `og:image` returns HTTP 200 and is 1200×630.

**Performance and quality targets (mobile, measured on the built pages)**
- [ ] Lighthouse mobile 95 or more in all four categories (Performance, Accessibility, Best Practices, SEO) on Home IT, Home EN, Menu IT and Menu EN.
- [ ] LCP under 2.0 s, CLS under 0.05, INP under 200 ms (lab values; field values appear in Search Console only after enough real visits).
- [ ] Contrast for any text over photos checked on real pixels; keyboard navigation and reduced-motion fallbacks work.
- [ ] A link checker finds no broken internal link, no redirect chain longer than one hop, and no link to `menu.osteriadeirossi.it` anywhere (section 4.3).
- [ ] The words "L'Osteria dei Rossi" do not appear anywhere in the built output (search the build).

---

## 9. How this site beats the competitor sites

Evidence level: every "competitors do" cell comes from the competitor teardown (04), which is built from indexed titles and search summaries; no competitor page was opened and no speed, schema or meta description was measured. Treat each row as a hypothesis to re-check with a direct read of the 12 primary competitor sites (the host list is in 04, section 1). "This site does instead" describes what version 1 is specified to do, not a ranking outcome.

| # | Gap found in the research | What the competitors do (04 reference) | What this site does instead |
|---|---|---|---|
| 1 | Titles carry no cuisine, dish or neighbourhood | Most home titles are brand-only, "Home - Brand" or a bare page name; only Permalico, Nonna Gina, Trombicche, Grattacielo and Fonte Giusta put search phrases in titles (04 section 4) | Titles with the category, the city and a true landmark ("vicino a San Francesco"); the Menu title carries three dish names; titles are unique per page and language |
| 2 | Nobody anchors on the Basilica di San Francesco, Provenzano or the Bruco; everyone uses Piazza del Campo | Distances to the Campo in every location claim; no mention of a contrada (04 section 4 and 5) | Title and #via H2 anchor on San Francesco; Piazza del Campo is given as 5 minutes on foot; #contrada names the Contrada del Bruco |
| 3 | Menus as PDF or missing | Il Vinaio: PDF menu; Taverna di San Giuseppe: no indexed menu page and a 2020 wine-list PDF; Trombicche and Le Sorelline: no menu page indexed (04 section 5) | A full HTML menu with prices in Italian and English, dish names as text, Menu markup generated from the same data |
| 4 | Booking by phone only, or hidden | Online booking is rare; WhatsApp only at Fonte Giusta and Vinattieri; a booking page only at Trombicche, Fonte Giusta and Papei (04 section 5) | Phone and WhatsApp offered on every page through one Prenota button, and in the FAQ; `acceptsReservations` in markup. (No online booking exists yet; none is claimed) |
| 5 | English is untidy and German is almost absent | Duplicate English URL schemes (Da Divo), Italian slugs under `/en/` (La Sosta di Violante), machine-translated text (Papei); one German page in the set (04 section 5) | One clean URL scheme (`/` and `/en/`), hreflang with x-default, native-quality copy in both languages. German is a later phase, not part of version 1 |
| 6 | No find-us content (ZTL, parking, escalators) | Only Grattacielo has a "dove siamo" page; nobody mentions the ZTL or parking (04 section 5) | FAQ 7 and the #prenota "Come arrivare" block: ZTL and the San Francesco car park with its escalators, from approved facts. (No tariff, no walking time: not in the profile) |
| 7 | No FAQ, no question-led content | No page with FAQ in its title or URL in any indexed list (04 section 5, absence in the index only) | Ten answered questions in two languages, answer-first, each tied to a profile line, plus FAQPage markup that matches the text. Expect value for readers and for answer engines, not a rich result (section 6.3 note) |
| 8 | No dish-level content | No competitor has dish pages; the closest are Da Divo's truffle menu page and Fonte Giusta's landing pages (04 section 5) | Dish names as indexable text on the Menu, a #tavola section with dish H3s on Home (dolceforte, pici, fiorentina, truffle). Separate dish articles come later through the journal calendar |
| 9 | Contradictory facts across pages and in markup | Different street numbers (Permalico, Il Vinaio), a second address on one page (La Sosta di Violante), contradictory hours (Trombicche, Fonte Giusta, Da Divo), hours in markup that look like defaults (Boccon del Prete) (04 sections 2 and 5) | One NAP block and one hours text used everywhere, markup that repeats the approved hours exactly, and an off-site clean-up so the listings agree (`seo-offsite.md`) |
| 10 | Template leftovers and accidental pages in the index | "comingsoon2", "Sito in Costruzione", demo pages, attachment pages, a 2017 New Year page (04 section 5) | Six real pages in the sitemap, a branded HTTP 404, no PDFs as the only content, the preview host kept out of the index |
| 11 | The osteria's own web presence is thin | The only own page is a JavaScript menu on a subdomain with no schema, canonical, robots or sitemap, and it is not indexed (01 section 5) | A static site with canonical, hreflang, sitemap and structured data, and a plan to point the old subdomain at the new menu without breaking the table QR codes (section 4.3) |
| 12 | Slow, plugin-heavy builds are likely | Most competitors look like WordPress or theme builds (inferred); speed was not measured (04 section 5, gap) | Static HTML, self-hosted fonts, one preloaded hero, no third-party requests, with Lighthouse and Core Web Vitals targets (section 8). Whether this is a real advantage over each competitor is not measured |
| 13 | Same-street neighbour is thin | Osteria Le Sorelline (Via dei Rossi 76): one indexed page, no menu page, no neighbourhood content beyond one square (04 section 2.10) | The street itself (origin of its name, its end at the Basilica di San Francesco) is part of #via, from approved facts only |

---

## 10. Facts needed that I could not find in the profile

Plain list for the lead and the founder. None of these is invented in this specification; where a value was needed I used the approved menu, the photo captions or left the item out.

**Business facts**
1. Cuisine description. The profile "Cuisine" line is marked as unverified. I derived `servesCuisine` (Tuscan and Sienese) from the approved menu descriptions. Founder to confirm the two words.
2. Whether the pasta (pici, tagliatelle) is made in house. The menu does not say; the specification does not claim it.
3. Number of seats, whether groups or private tables are possible, whether children and dogs are welcome, wheelchair access, card payments, takeaway, delivery. None is in the profile; none appears in the FAQ or in markup. Several listings claim some of them; those are not approved.
4. Outdoor tables: in which months they are set out and how many there are. The FAQ says only that there are tables on the street with parasols.
5. Special opening days: Christmas and New Year, August, Palio days, annual closure. None is in the profile; the hours markup has no special-hours entries.
6. Monday. The approved hours say closed on Monday; the research found directory and press records that show Monday open. The approved hours are used everywhere here; the owner should confirm them once more because they will be copied to every listing.
7. Geo coordinates of the door. Not in the profile, so left out of markup. A map measurement is also needed for any walking time other than the approved "Piazza del Campo about 5 minutes".
8. Walking time from the San Francesco car park or the escalator's top to the door; the ZTL hours, gates, permit rules and Palio-day access changes. Not in the profile; the FAQ gives no figure.
9. Any named producers (the butcher Alessio's shop, the Crete Senesi pig farm, the cheese and wine producers). Only "Alessio" appears, from the menu text. Named producers would be useful for content and for earning links.
10. The wine list itself (labels, producers, how many labels). The founder names Chianti, Rosso di Montepulciano and Montalcino; the live menu shows other glass wines. A real wine list is needed for a wine section and for the journal.
11. "Fresh truffle all year round" is a founder photo caption. The research shows that a truffle available all year means several species, each with its own legal season. The specification uses the menu wording "tartufo fresco di stagione" instead; the founder should say which wording he wants and which species are served when.
12. Founding: the profile says opened in 1992 (approved). One research record (Accademia Italiana della Cucina) says "dal 1975". Use 1992 only. Founder to confirm, and to confirm how the surname of the founder, Carrieri, is spelled (one source writes "Carreri").
13. Whether the people named in the profile (Giuseppe "Beppe" Carrieri, Luca, Max) and the butcher Alessio may be named in the website text and which surnames, if any, are wanted. The profile line is approved, but the open-questions list still asks it.
14. The right description for "Ravioli con Zucca Gialla, Pancetta e stracciatella" (the published text describes a vegetarian short-pasta dish with pumpkin, leeks and pecorino). Until the chef supplies it, the dish shows name and price only.
15. Allergens for every dish (the chef has to confirm; the published codes look unreliable in places).
16. Whether "Costata del macellaio" (live menu) or "Costata del Vamosh" (an older profile line) is the right name; the live menu is used.

**Brand, accounts and decisions**
17. Which Facebook page is the live one: `facebook.com/osteriadeirossi` (profile, approved) or `facebook.com/OsteriaSiena` (the page the web indexes and that Gambero Rosso cites). Markup uses the profile one.
18. Which of the two emails that circulate (osteriadeirossi@virgilio.it, losteriarossi@gmail.com) is monitored, and whether a public email is wanted. None is approved, so none appears; the footer and markup have no email.
19. The second phone number +39 0577 1460316 that one directory shows: whose it is. It is not used anywhere.
20. Which logo file is the full-colour one used for markup (`logo-osteria-dei-rossi-720.webp` is assumed) and whether the legal line (ML SNC DI LANARO E FRESI, P. IVA) should be in the footer.
21. Who updates the menu. The staff edit the old menu through a panel; the new `/menu/` is built from the 2026-11-24 snapshot. A decision is needed on how the new page and its markup are kept in step, and on who edits the canonical or redirect on the old subdomain.
22. Who holds the logins of the Google Business Profile, Facebook and TripAdvisor pages, and whether another agency (the research mentions a Sienese communications agency naming the osteria as a client) already manages any of them. This decides who can carry out the off-site kit.
23. Privacy page text and who supplies it (profile: empty), and whether any analytics will be approved later (profile: "Tracking approved" is empty). Version 1 has none.
24. A reviewer or the founder should confirm whether the approved menu sentences that make exclusivity or quality claims ("siamo gli unici a Siena e provincia", "le migliori carni") may stay in the visible menu. The exclusivity sentence is kept out of the markup.
25. The launch date, so the sitemap `lastmod`, the Search Console set-up and the content calendar in `seo-offsite.md` can be dated.
