# Osteria dei Rossi: on-site SEO and GEO specification (version 1 website)

Client slug: `osteria-dei-rossi` · Date: 2026-11-24 (fix round 2026-11-25) · Author: seo-specialist · Status: for reviewer
Internal document, in English. Italian strings are for the Italian pages, British English strings for the English pages.
The off-site kit (Google Business Profile, listings, reviews, citations, tracking) is in `seo-offsite.md` in this folder.

This file is the specification the copywriter and the web-builder follow. Where a value is given in a table (title, description, URL, alt text, JSON-LD), use it as written. If a value has to change, change it here first.

## 0. Ground rules for this specification

**Sources.** Client facts come only from `knowledge/clients/osteria-dei-rossi/profile.md`, the approved live menu (`sources/menu-live-2026-11-24.md`) and the photo catalogue (`sources/photos-2026-11-24.md`). The research notes are research, not client facts: I use them for who answers a query today and for what the competitors do, never as a source for a claim about the osteria.

**Evidence level of the keyword work (read this before trusting any "who answers today" cell).**
- The research was done with a search tool on a US index, not Google.it. It cannot show the Map Pack, "People also ask", autocomplete or search volumes. No Google.it position is claimed anywhere in this file.
- Search volumes were not measured. I chose keywords by intent and by the gap in who answers them (aggregators and guides everywhere, almost no restaurant-owned pages), not by volume. Real volume and real positions come from Google Search Console after launch (see `seo-offsite.md`, section 7).
- The competitor teardown rests on indexed titles and search summaries. No competitor page was opened. Every statement about a competitor is a lead to check, not a measurement.
- Head terms such as "osteria Siena" are held by guides and listing platforms. A new site is more likely to appear first for its own name, for narrow local intents and for dish-plus-place queries. No result is promised for any query.

**Name.** The public name is always `Osteria dei Rossi` (lower-case "dei", no "L'"). Never write "L'Osteria dei Rossi", "Osteria Dei Rossi", "Osteria Rossi" or "L'Osteria" in titles, headings, alt text, JSON-LD or footer. In Italian prose that needs a preposition, write "di Osteria dei Rossi" so the name string stays identical everywhere. (The approved menu descriptions use "dell'Osteria dei Rossi" and are copied as published; that is the only exception.)

**NAP block (identical everywhere on the site).**
Osteria dei Rossi · Via dei Rossi, 79/81 · 53100 Siena (SI) · +39 0577 287592 (link `tel:+390577287592`).
Opening hours as approved: Tuesday to Saturday lunch 12:30 to 15:00 and dinner 19:00 to 22:30; Sunday lunch only, 12:30 to 15:00; closed Sunday evening and Monday. The page says that hours can change and asks guests to call to confirm. No email address is shown, in the page or in markup (no public email is approved).

---

## 1. Keyword map

Intent codes: **L** local discovery, **I** information, **N** navigational, **T** ready to book or to act.
"Research ref" points to the notes in `research_notes/Siena osteria SEO research/`: 02 = Italian results (Q numbers as in that file); 03 = English and German; 04 = competitor teardown; 01 = the osteria's own presence.
One primary keyword and 4 to 6 secondary keywords per page and language. Use each where the table says, in a natural sentence, once or twice per page.

### 1.1 Home, Italian (`/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | 02 Q1: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Wanderlog, Frommer's. No restaurant-owned domain in the first results of any of the 24 Italian queries. | Title, H1, meta description, first paragraph, hero image alt |
| Secondary | osteria centro storico Siena | L | 02 Q2: DiscoverTuscany, italia.it, Michelin, En Primeur Club, pos.do. No indexed title contained "centro storico". | #via paragraph ("nel centro storico di Siena, dentro le mura"), FAQ 1 |
| Secondary | ristorante tipico Siena | L | 02 Q3: Lonely Planet mirror, Firenze Made in Tuscany, travel365, TheWom, italia.it. | Semantic match only: write "cucina senese", "osteria", dish names. "Tipico" at most once and only next to named dishes |
| Secondary | ristorante vicino Basilica di San Francesco Siena | L (under-served) | 02 Q15: OpenTable landmark pages, Lonely Planet POIs, a B&B portal. No Italian editorial page is dedicated to it. | Title ("vicino a San Francesco"), #via, FAQ 1 |
| Secondary | ristorante Contrada del Bruco Siena | L, I (under-served) | 02 Q16: no relevant page. | #contrada, FAQ 1 |
| Secondary | cucina medievale Siena ristorante | I, L (under-served) | 02 Q18: a third-party page for one banquet menu, "Medio Evo", a university PDF, blogs. No osteria page. | #tavola H3 on dolceforte, FAQ 5 |
| Brand (not counted) | osteria dei rossi siena · osteria via dei rossi | N | 01 section 5: only third-party pages; no own domain ranks. | Footer NAP, title, JSON-LD name, Google Business Profile |

(A seventh candidate, "cucina senese tradizionale ristorante", 02 Q17, is served by Sluurpy and agriturismi listings; it is covered by the words "cucina senese" in the hero sub-line and #tavola, not as a counted keyword.)

### 1.2 Home, English (`/en/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | 03 "osteria Siena": Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Frommer's, Wanderlog. No osteria-owned site. | Title, H1, meta description, first paragraph, hero alt |
| Secondary | traditional Tuscan restaurant Siena | L | 03: World Travel Guide, Culture Trip, OpenTable, Michelin (Taverna di San Giuseppe), Frommer's. | #tavola intro, FAQ 4 |
| Secondary | authentic local restaurant Siena, not touristy | L | 03: Airbnb place pages, Culture Trip, Frommer's, Wanderlog, Good Food Guide. "Authentic" is a search term, not a claim for our copy. | Do not echo the adjective; answer with facts: inside the walls, five minutes from Piazza del Campo (#via) |
| Secondary | restaurant near Basilica of San Francesco Siena | L (under-served) | 02 Q15 (OpenTable landmark pages, Lonely Planet, B&B portal); English "near Piazza del Campo" results are the same guides. | Title, #via, FAQ 1 |
| Secondary | Contrada del Bruco restaurant | L, I (under-served) | Not tested in English; the Italian query returned no relevant page. | #contrada |
| Secondary | medieval cooking Siena restaurant | I (under-served) | Not tested in English; Italian equivalent (02 Q18) is served by third-party pages. | #tavola H3, FAQ 5 |

(Outdoor seating: the English query "Siena restaurant outdoor seating" returns US places named Siena, so FAQ 6 always says "Siena" with "street" and "parasols" in the answer; it is not a counted keyword.)

### 1.3 Menu, Italian (`/menu/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | menù osteria Siena | L, I | Not run as a query. Indirect: dish and menu pages on Sluurpy and OpenTable, Osteria Le Logge's priced menu page, Boccon del Prete's menu page (04). The osteria's own menu is a JavaScript page on a subdomain with no schema, not indexed (01 section 5). | Title, H1 (see 2.3), meta, intro paragraph |
| Secondary | pici Siena | I, L | 02 Q10: travel365, Do Eat Better, La Nazione, one Sluurpy page per pici dish. | Primi intro line |
| Secondary | cinghiale ristorante Siena | L | 02 Q12: Do Eat Better, a university PDF, Gambero Rosso, Sluurpy, Frommer's. | Secondi, dish names as text |
| Secondary | cinghiale in dolceforte | I | No query run. Frommer's names "cinghiale in dolce forte" for the osteria's address under the old name (01 section 4); no other restaurant page found. | Secondi: "dolceforte" in prose, "Cinghiale in Dolce Forte" as the published dish name |
| Secondary | bistecca alla fiorentina Siena | I, L | 02 Q11: mostly informational pages; local intent only OpenTable cuisine pages and Sluurpy. | Griglia intro, by-weight note |
| Secondary | tartufo ristorante Siena | L | 02 Q13: Sluurpy, Wanderlog, one truffle restaurant, Da Divo's truffle menu page (04). | Primi and griglia dish names |
| Brand (not counted) | osteria dei rossi menu prezzi | N | The old menu subdomain exists but is not indexed (01 section 5). | Title, H1 |

### 1.4 Menu, English (`/en/menu/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria menu Siena | L, I | Not run in English. Indirect evidence as for the Italian menu. | Title, H1, meta, intro |
| Secondary | pici Siena where to eat | I, L | 03: Visit Tuscany, travel365, Frommer's, Do Eat Better. No restaurant-owned page. | Primi intro line |
| Secondary | wild boar restaurant Siena | L | 03: Frommer's, World Travel Guide, Do Eat Better, Trip.com, OpenTable. | Secondi intro line |
| Secondary | cinghiale in dolceforte (also "dolce forte wild boar") | I | No query run. | Dish description text, once with each spelling |
| Secondary | bistecca alla fiorentina Siena restaurant | L, I | 03: OpenTable cuisine pages, Restaurant Guru, Sluurpy; several results are Florence venues. | Grill intro, by-weight note |
| Secondary | truffle pasta Siena restaurant | L | 03: Frommer's, Culture Trip, a travel-blog review of a truffle restaurant. | Primi dish names |

(The cover charge is a recurring visitor question, 03 section 5; it is answered in the `#coperto` block, not counted as a keyword.)

### 1.5 Pages kept out of the keyword map

Privacy (`/privacy/`, `/en/privacy/`) and the 404 page carry no target keyword. They are indexable (noindex is not wanted on the privacy pages); the 404 page returns an HTTP 404 status and carries `noindex`.

### 1.6 Under-served intents the research found, and where this version answers them

| Intent | Evidence | Version 1 answer | Later |
|---|---|---|---|
| Near the Basilica di San Francesco | 02 Q15: no Italian editorial page | Title, #via, FAQ 1 | Journal article |
| Contrada del Bruco | 02 Q16: no relevant page | #contrada, FAQ 1 | Journal article |
| Medieval cooking in Siena | 02 Q18: third-party pages only | #tavola H3, FAQ 5, Menu #secondi | Journal article |
| Dish queries: pici, cinghiale, tartufo, bistecca alla fiorentina, cinghiale in dolceforte | 02 Q10 to Q13; 04: no competitor has dish-level pages | Menu with dish names as text; #tavola on Home | Dedicated journal pages |
| Cena in contrada and Palio dining | 02 Q22: guides only | Not in version 1 (no approved Palio facts for hours or booking) | Journal article |
| German visitors | 03: one German page in the whole competitor set | Not in version 1 | German pages at `/de/` |

---

## 2. Page specifications

**Note on wording (decision of the lead).** The visible h1, h2 and h3 texts on the built pages are the two-line headings of `copy.md`. The "H2 outline" tables below are a **keyword guide** (which keyword each stop must carry and in which heading level), not the final wording. Where a heading in `copy.md` differs from a table here, `copy.md` wins, as long as the stop still carries the keyword named in section 1. The H1 of the Home page and the meta title and description are as given here.

Common to every indexable page: `<html lang>` as stated, one canonical (absolute URL, self-referencing), the full hreflang set below, robots `index, follow, max-image-preview:large`, Open Graph and Twitter card tags, JSON-LD as given in section 6.
hreflang values: `it` for the Italian version, `en` for the English version, `x-default` pointing to the Italian version. Each page lists itself as well as its twin. The same set goes into `sitemap.xml` (section 7). The language switcher never redirects automatically by browser language.
Open Graph common values: `og:type` `website`, `og:site_name` `Osteria dei Rossi`, `og:image` `https://www.osteriadeirossi.it/assets/img/og-osteria-dei-rossi-siena.jpg`, `og:image:width` 1200, `og:image:height` 630, `og:locale` `it_IT` (Italian pages) or `en_GB` (English pages) with the other as `og:locale:alternate`. `twitter:card` `summary_large_image`. The `og:image:alt` must describe what the final share image shows.

### 2.1 Home, Italian

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/` |
| `<html lang>` | `it` |
| Meta title (58) | `Osteria dei Rossi | Osteria a Siena vicino a San Francesco` |
| Meta description (154) | `Osteria dei Rossi, in Via dei Rossi 79/81 a Siena, dentro le mura: pici, cinghiale in dolceforte, tartufo e fiorentina. Prenota al telefono o su WhatsApp.` |
| H1 | `Osteria a Siena, dentro le mura` (two visual lines: "Osteria a Siena," then the italic completion "dentro le mura"; one `<h1>` element, no full stop) |
| Canonical | `https://www.osteriadeirossi.it/` |
| hreflang | `it` → `https://www.osteriadeirossi.it/` · `en` → `https://www.osteriadeirossi.it/en/` · `x-default` → `https://www.osteriadeirossi.it/` |
| Open Graph title | `Osteria dei Rossi | Osteria a Siena, dentro le mura` |
| Open Graph description | `Pici, cinghiale in dolceforte, tartufo e fiorentina in Via dei Rossi 79/81, a Siena. Prenota al telefono o su WhatsApp.` |
| Open Graph image | `/assets/img/og-osteria-dei-rossi-siena.jpg` (1200×630) |
| Robots | `index, follow, max-image-preview:large` |

**H1 decision.** I keep the lead's working H1: category (osteria), place (Siena) and one profile fact ("inside the city walls") in five words; brand and landmark stay in the title and the #via heading.

**Keyword guide for the headings (Home, Italian).** Section ids are fixed.

| Stop and id | Keyword guide for the H2 | H3 (where used) |
|---|---|---|
| Hero `#porta` | no H2; kicker text: `Osteria dei Rossi · Via dei Rossi, Siena` | none |
| The street `#via` | Via dei Rossi and the Basilica di San Francesco (for example `Via dei Rossi, fino alla Basilica di San Francesco`) | none |
| The room `#sala` | brick, beams, lanterns (for example `La sala: mattoni, travi e lanterne`) | none |
| The food `#tavola` | pici, cinghiale, tartufo, fiorentina (for example `A tavola: pici, cinghiale, tartufo e fiorentina`) | pici and first courses · cinghiale in dolceforte as a medieval recipe · bistecca alla fiorentina sold by weight · fresh seasonal truffle |
| The cellar `#cantina` | cellar and wines (for example `La cantina e i vini`) | none |
| The contrada `#contrada` | Contrada del Bruco, since 1992 (for example `Nella Contrada del Bruco, dal 1992`) | none |
| Book and find us `#prenota` | booking and finding the place (for example `Prenota e vieni a trovarci`) | hours · getting here · phone and WhatsApp |
| FAQ `#domande` | frequently asked questions | the ten questions of section 5, one H3 each (these texts are fixed) |

### 2.2 Home, English

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/en/` |
| `<html lang>` | `en` |
| Meta title (55) | `Osteria dei Rossi | Osteria in Siena near San Francesco` |
| Meta description (149) | `Osteria dei Rossi, Via dei Rossi 79/81, inside Siena's walls: pici, wild boar in dolceforte, truffle and Florentine steak. Book by phone or WhatsApp.` |
| H1 | `An osteria in Siena, inside the walls` (two lines: "An osteria in Siena," then italic "inside the walls") |
| Canonical | `https://www.osteriadeirossi.it/en/` |
| hreflang | same three entries as 2.1 |
| Open Graph title | `Osteria dei Rossi | An osteria in Siena, inside the walls` |
| Open Graph description | `Pici, wild boar in dolceforte, truffle and Florentine steak at Via dei Rossi 79/81, Siena. Book by phone or WhatsApp.` |
| Open Graph image | same file as 2.1 |
| Robots | `index, follow, max-image-preview:large` |

| Stop and id | Keyword guide for the H2 | H3 (where used) |
|---|---|---|
| `#porta` | no H2; kicker `Osteria dei Rossi · Via dei Rossi, Siena` | none |
| `#via` | Via dei Rossi and the Basilica di San Francesco | none |
| `#sala` | brick, beams, lanterns | none |
| `#tavola` | pici, wild boar, truffle, fiorentina | pici and first courses · cinghiale in dolceforte, a medieval recipe · bistecca alla fiorentina, sold by weight · fresh seasonal truffle |
| `#cantina` | the cellar and the wines | none |
| `#contrada` | the Contrada del Bruco, since 1992 | none |
| `#prenota` | book and find us | opening hours · getting here · phone and WhatsApp |
| `#domande` | frequently asked questions | the ten questions of section 5 |

**Content rules for both Home versions (for the copywriter).**
- Every stop has real text in the HTML (no text inside images, no content that appears only after a click). The H1 is in the HTML at first paint and never animates in.
- Working target: roughly 450 to 650 visible words across stops #via to #prenota, before the FAQ.
- #via must say, in facts only: the street runs from Banchi di Sopra down to Piazza San Francesco; it takes its name from the 13th-century castellare of the Rossi family; the Basilica di San Francesco is at the end of the street; Piazza del Campo is about 5 minutes on foot (all in profile "Place and story").
- #contrada: the osteria is in the Contrada del Bruco; opened in 1992 by Giuseppe "Beppe" Carrieri, a brucaiolo; run since early 2024 by Luca and Max, with Luca in the kitchen (profile line approved by the founder). Do not write about the contrada's emblem, colours, motto or Palio record: they are research, not approved facts.
- #tavola must not use "tartufo fresco tutto l'anno" in headings, FAQ or markup. Use the menu wording "tartufo fresco di stagione" (section 10).
- Use the dish names exactly as published on the approved menu. No price on the Home page; link to the menu.
- No rating, review count, star, prize or superlative language. The Gambero Rosso mention is approved as: listed by Gambero Rosso among Siena's restaurants for meat. Write it exactly like that, not as a prize.

### 2.3 Menu, Italian

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/menu/` |
| `<html lang>` | `it` |
| Meta title (59) | `Menù | Osteria dei Rossi Siena: pici, cinghiale, fiorentina` |
| Meta description (154) | `Il menù di Osteria dei Rossi a Siena con prezzi: pici, ribollita, cinghiale in dolceforte, bistecche alla griglia, vini e dolci. Coperto 2,50 € a persona.` |
| H1 | `Il menù dell'osteria` / `a Siena` (two lines, one `<h1>`; the keyword "menù" and "Siena" are both in it) |
| Canonical | `https://www.osteriadeirossi.it/menu/` |
| hreflang | `it` → `https://www.osteriadeirossi.it/menu/` · `en` → `https://www.osteriadeirossi.it/en/menu/` · `x-default` → `https://www.osteriadeirossi.it/menu/` |
| Open Graph title | `Il menù di Osteria dei Rossi, Siena` |
| Open Graph description | `Antipasti, primi, secondi, griglia, dolci e vini con i prezzi. Coperto 2,50 € a persona.` |
| Open Graph image | `/assets/img/og-osteria-dei-rossi-siena.jpg` (1200×630) |
| Robots | `index, follow, max-image-preview:large` |

Section ids (fixed): `antipasti`, `primi`, `secondi` (with "Specialità della cucina"), `griglia` (with "Bistecche e tagli alla griglia" and "Filetto di manzo"), `contorni`, `dolci`, `bevande` (Vino, Birra e bibite, Caffetteria, Amari e grappe), `coperto` ("Coperto, pesi e allergeni"), `prenota`. Heading wording follows `copy.md`.

### 2.4 Menu, English

| Field | Value |
|---|---|
| URL | `https://www.osteriadeirossi.it/en/menu/` |
| `<html lang>` | `en` |
| Meta title (54) | `Menu | Osteria dei Rossi Siena: pici, wild boar, steak` |
| Meta description (151) | `The menu of Osteria dei Rossi in Siena, with prices: pici, wild boar in dolceforte, grilled steaks, wines and desserts. Cover charge 2.50 € per person.` |
| H1 | `The osteria's menu` / `in Siena` (two lines, one `<h1>`) |
| Canonical | `https://www.osteriadeirossi.it/en/menu/` |
| hreflang | same three entries as 2.3 |
| Open Graph title | `The menu at Osteria dei Rossi, Siena` |
| Open Graph description | `Starters, pasta, mains, grill, desserts and wines, with prices. Cover charge 2.50 € per person.` |
| Open Graph image | same file |
| Robots | `index, follow, max-image-preview:large` |

Section ids: the same as the Italian page (`antipasti`, `primi`, `secondi`, `griglia`, `contorni`, `dolci`, `bevande`, `coperto`, `prenota`).

**Menu content rules (both languages).**
- Copy dish names, descriptions and prices exactly as in the approved live menu. Prices keep the published style (Italian "2,50 €", English "2.50 €"); steaks are shown per 100 g ("all'etto" in Italian).
- The `#coperto` section says: cover charge 2,50 € a persona; steaks are priced per 100 g and the weight is agreed at the table; for allergens, ask the staff, the allergen list is being confirmed. No allergen numbers, no icons, no "gluten-free", "vegetarian" or "vegan" labels.
- "Ravioli con Zucca Gialla, Pancetta e stracciatella": show the name and the price (16 €) only. The published description belongs to a different dish; do not show it, in HTML or markup, until the chef supplies the right one.
- The Menu markup carries the dish descriptions as published, with one sentence left out by the lead's decision, on the page and in the markup alike: the Bistecca Fritta line that says the osteria is the only one in Siena and its province to serve the dish this way (a claim nobody can verify). Whether it may come back is a question for the founder (section 10, item 24).
- Seasonal dishes keep the flag "Piatto di stagione", house picks "Consigliato dall'Oste", as text.
- A visible line "Menù aggiornato al <data>" / "Menu updated on <date>" only if a real update process exists (section 10).

### 2.5 Privacy, Italian and English

| Field | Italian | English |
|---|---|---|
| URL | `https://www.osteriadeirossi.it/privacy/` | `https://www.osteriadeirossi.it/en/privacy/` |
| `<html lang>` | `it` | `en` |
| Meta title (count) | `Informativa privacy | Osteria dei Rossi, Siena` (46) | `Privacy notice | Osteria dei Rossi, Siena` (41) |
| Meta description (count) | `Informativa privacy del sito www.osteriadeirossi.it di Osteria dei Rossi, Siena: chi lo pubblica, nessun cookie, nessun tracciamento, nessun modulo.` (148) | `Privacy notice for www.osteriadeirossi.it, the website of Osteria dei Rossi in Siena: who publishes it, no cookies, no tracking, no forms on this site.` (151) |
| H1 | `Informativa sulla privacy` | `Privacy notice` |
| Canonical | `https://www.osteriadeirossi.it/privacy/` | `https://www.osteriadeirossi.it/en/privacy/` |
| hreflang | `it`, `en`, `x-default` as for the other pages | same |
| Open Graph | title and description as the meta values; default share image | same |
| Robots | `index, follow` | `index, follow` |

The meta descriptions describe what the notice says (who publishes the site; no cookies, no tracking, no forms). If the final privacy text says something different, change the descriptions to match it.

### 2.6 404 page

One bilingual page (Italian first, English below), served at the host's 404 handler with an HTTP 404 status (never a redirect to Home, never a 200). Title `Pagina non trovata | Osteria dei Rossi` (38) with `Page not found` in the English block; robots `noindex, follow`; no canonical; no hreflang; not in the sitemap. Content: one sentence, links to Home, Menu and the phone number (`tel:+390577287592`), in both languages.

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

Italian pages use `lang="it"` on `<html>`; English pages `lang="en"`. The JSON-LD blocks of section 6 go in the head as `application/ld+json` scripts, one per block.

---

## 3. Alt text

Rules: describe what the picture shows; 125 characters or fewer; at most one place word per alt (a dish name that contains a place adjective counts as the dish); no "immagine di", "photo of" or keyword lists. Counts were made by hand; the build should assert 125 or fewer. Quotation marks inside alt text are « » (Italian) and ‘ ’ (English), never straight double quotes. Photos are `<img>` elements with these alt values; a CSS background is decorative and has no alt, so the hero must be an `<img>` or `<picture>`.

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
| Logo | `logo-osteria-dei-rossi` | Osteria dei Rossi | Osteria dei Rossi |

Notes on specific photos.
- Photo 14 is a wooden ball in green, yellow and blue on a jar of corks. The founder's caption places the osteria in the Contrada del Bruco, but the profile does not say the ball is the contrada's emblem. The alt describes only what is visible; the figcaption may say "Nella Contrada del Bruco" / "In the Contrada del Bruco".
- Photo 17 is the only picture of a named house dish. There is no photo of pici, of the kitchen, of the cellar itself or of people; do not caption a photo as one of those.
- The logo alt is the name only. If the logo links to Home, the link needs no extra text.
- File names stay as the catalogue slugs.

---

## 4. Internal linking

### 4.1 Rules

1. Links stay inside the language: Italian pages link to Italian pages, English pages to English pages. The only cross-language link is the language switcher, with `hreflang` and `lang` attributes.
2. In the built pages internal links are **relative** (for example `menu/`, `en/`, `../menu/`), so the site works from any base path. The root-relative forms in the tables below (`/menu/`, `/en/menu/#primi`) name the target page; the builder writes them relative to the page they sit on. Always with a trailing slash, never `index.html`.
3. Anchor text says what is behind the link. No "clicca qui", "qui", "click here", "read more". Six words or fewer. No exact-match anchor more than twice on a page.
4. Home links to the Menu from: the header navigation, the #tavola stop (one clear call to action), dish names inside #tavola (deep links to menu sections), the #prenota stop, FAQ answers 4, 8 and 9, and the footer.
5. The Menu links to Home from: the logo, the header navigation, and a closing block that points to the booking stop and the FAQ.
6. Fragment links (`#tavola`) are not in the sitemap and have no separate canonical.
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
| FAQ 4 → `/menu/` | `menù` | `menu` |
| FAQ 8 → `/menu/#coperto` | `coperto, pesi e allergeni` | `cover charge, weights and allergens` |
| FAQ 9 → `/menu/#coperto` | `note su coperto e allergeni` | `notes on cover charge and allergens` |
| Menu, closing block → `/#prenota` | `Prenota al telefono o su WhatsApp` | `Book by phone or WhatsApp` |
| Menu, closing block → `/#prenota` | `Orari, indirizzo e come arrivare` | `Opening hours, address and getting here` |
| Menu, closing block → `/#domande` | `Domande frequenti` | `Frequently asked questions` |
| Menu, above Drinks → `/#cantina` | `La cantina e i vini` | `The cellar and the wines` |
| Footer → privacy | `Informativa privacy` | `Privacy notice` |
| Language switcher | `English` (`lang="en"`, `hreflang="en"`) | `Italiano` (`lang="it"`, `hreflang="it"`) |

### 4.3 The old menu subdomain (`https://menu.osteriadeirossi.it/`)

**Do not link to it from the website** (not from the header, Home, Menu, footer, FAQ or JSON-LD). It stays online, because the QR codes on the tables point to it. Reasons:
- Two menus under one brand compete for the same dish queries; the new `/menu/` has real HTML, schema and a canonical.
- The subdomain renders dishes with JavaScript, has no structured data, canonical, robots.txt or sitemap (research, section 5).
- The staff edit it through a panel, so its content can change without the website changing; a visible link would present two sources of truth.

Recommendations for whoever maintains the subdomain (not part of the version 1 build; see section 10):
1. Add `<link rel="canonical" href="https://www.osteriadeirossi.it/menu/">` to the subdomain's HTML and a link on it back to `https://www.osteriadeirossi.it/`.
2. Use `/menu/` (never the subdomain) as the menu link in Google Business Profile, TripAdvisor and every other listing.
3. Watch it in Google Search Console (a domain property covers subdomains).
4. Later, if the staff can edit `/menu/` directly, replace the subdomain with a 301 redirect to `/menu/`; the QR codes keep working.

---

## 5. FAQ for the Home page (`#domande`)

Ten questions, same order in both languages. The visible text and the FAQPage markup (6.3, 6.4) must be identical, word for word. "Rests on" names the profile line that supports each answer. Prices in English use the menu style: figure, space, euro sign, decimal point ("2.50 €").

**1. Where is it, and how far from Piazza del Campo?**
- IT. Domanda: `Dove si trova Osteria dei Rossi e quanto dista da Piazza del Campo?` Risposta: `Si trova in Via dei Rossi 79/81, a Siena, dentro le mura, nella Contrada del Bruco. Piazza del Campo è a circa 5 minuti a piedi, e in fondo alla via sorge la Basilica di San Francesco.`
- EN. Question: `Where is Osteria dei Rossi, and how far is it from Piazza del Campo?` Answer: `It is at Via dei Rossi 79/81 in Siena, inside the city walls, in the Contrada del Bruco. Piazza del Campo is about 5 minutes away on foot, and the Basilica di San Francesco stands at the end of the street.`
- Rests on: Identity, "Address"; Place and story ("heart of Siena, inside the city walls"; "in the Contrada del Bruco"; "Basilica di San Francesco stands at the end of the street; Piazza del Campo is about 5 minutes on foot").

**2. Opening days and hours**
- IT. Domanda: `Quali sono i giorni e gli orari di apertura?` Risposta: `Da martedì a sabato siamo aperti a pranzo dalle 12:30 alle 15:00 e a cena dalle 19:00 alle 22:30; la domenica solo a pranzo, dalle 12:30 alle 15:00. La domenica sera e il lunedì siamo chiusi. Gli orari possono cambiare: chiamate lo +39 0577 287592 per conferma.`
- EN. Question: `What are the opening days and hours?` Answer: `From Tuesday to Saturday we are open for lunch from 12:30 to 15:00 and for dinner from 19:00 to 22:30; on Sunday for lunch only, from 12:30 to 15:00. We are closed on Sunday evening and on Monday. Hours can change, so please call +39 0577 287592 to confirm.`
- Rests on: Offer, "Opening hours for the public" (founder's answers, chat 2026-11-24).

**3. How to book**
- IT. Domanda: `Come si prenota?` Risposta: `Si prenota per telefono allo +39 0577 287592 o su WhatsApp allo stesso numero; il pulsante Prenota del sito offre entrambe le possibilità.`
- EN. Question: `How do I book a table?` Answer: `You can book by phone on +39 0577 287592 or on WhatsApp on the same number; the Book a table button on this site offers both.`
- Rests on: Offer, "Booking channel".

**4. House dishes**
- IT. Domanda: `Quali sono i piatti della casa?` Risposta: `Tra i piatti segnalati con «Consigliato dall'Oste» ci sono la tartare dell'oste, i pici al ragù tradizionale di anatra, i pici al ragù bianco di cinta senese, la tegamata di cinta senese e la bistecca alla fiorentina. In menù dal 1992 ci sono anche gli spaghetti alla chitarra con il sugo dell'osteria.`
- EN. Question: `What are the house dishes?` Answer: `The dishes marked Consigliato dall'Oste (recommended by the host) include the beef tartare, pici with traditional duck ragù, pici with white Cinta Senese ragù, the slow-cooked Cinta Senese stew and the bistecca alla fiorentina. Spaghetti alla chitarra with the osteria's own sauce has also been on the menu since 1992.`
- Rests on: Offer, "Live menu approved for the website" (the five items carry the flag; the fiorentina is "la specialità della casa"; the spaghetti description says "in menù dal 1992").

**5. What is cinghiale in dolceforte?**
- IT. Domanda: `Che cos'è il cinghiale in dolceforte?` Risposta: `È un piatto di cinghiale con il dolceforte, una salsa agrodolce che risale alla cucina medievale. Il cioccolato che si trova nella ricetta di oggi è stato aggiunto nei secoli successivi.`
- EN. Question: `What is cinghiale in dolceforte?` Answer: `It is a wild boar dish with dolceforte, a sweet-and-sour sauce that goes back to medieval cooking. The chocolate in today's recipe was added in later centuries.`
- Rests on: Place and story, "Cinghiale in dolceforte". The answer does not say whether the osteria's recipe contains chocolate.

**6. Outdoor tables**
- IT. Domanda: `Ci sono tavoli all'aperto?` Risposta: `Sì, davanti all'ingresso ci sono tavoli sulla strada, con ombrelloni color crema.`
- EN. Question: `Are there outdoor tables?` Answer: `Yes, there are tables on the street outside the door, under cream parasols.`
- Rests on: Place and story, "What the founder's photos show": "Outside: ... cream parasols and tables on the street". Nothing approved says a table outside can be requested, or in which months they are out, so the answer says only what the photos show.

**7. Parking and the limited-traffic zone**
- IT. Domanda: `Dove si parcheggia? Si può arrivare in auto?` Risposta: `Tutto il centro dentro le mura è a traffico limitato (ZTL), quindi controllate le regole prima di entrare in auto. Il parcheggio San Francesco, in Via Baldassarre Peruzzi, è collegato al centro da scale mobili.`
- EN. Question: `Where can I park, and can I arrive by car?` Answer: `The whole walled centre is a limited-traffic zone (ZTL), so check the rules before driving in. The San Francesco car park, in Via Baldassarre Peruzzi, is linked to the centre by escalators.`
- Rests on: Place and story, car park and ZTL line. No tariff, walking time or ZTL hours.

**8. Cover charge**
- IT. Domanda: `Quanto costa il coperto?` Risposta: `Il coperto è di 2,50 € a persona. Le bistecche si pagano a peso, al prezzo per 100 g indicato nel menù.`
- EN. Question: `How much is the cover charge?` Answer: `The cover charge is 2.50 € per person. Steaks are sold by weight, at the price per 100 g shown on the menu.`
- Rests on: Offer, "Live menu approved ... and the cover charge" and "Dishes priced by weight on the live menu, per 100 g".

**9. Allergens**
- IT. Domanda: `Come funzionano allergeni e intolleranze?` Risposta: `Chiedete al personale prima di ordinare: l'elenco degli allergeni di ogni piatto è in corso di conferma e non è ancora pubblicato sul sito.`
- EN. Question: `How do you handle allergens and intolerances?` Answer: `Please ask the staff before ordering: the allergen list for each dish is being confirmed and is not yet published on this site.`
- Rests on: Offer, "Allergens are not approved and stay off the website until the chef confirms them".

**10. Wines**
- IT. Domanda: `Che vini ci sono?` Risposta: `Al calice ci sono rossi come Chianti Classico Gallo Nero, IGT Toscano e Maremma DOC e bianchi come Vernaccia di San Gimignano e Vermentino Toscano; in bottiglia c'è il Vino l'Osteria, rosso e bianco. La cantina custodisce i vini della carta, tra cui Chianti, Rosso di Montepulciano e Montalcino.`
- EN. Question: `What wines do you serve?` Answer: `By the glass there are reds such as Chianti Classico Gallo Nero, IGT Toscano and Maremma DOC, and whites such as Vernaccia di San Gimignano and Vermentino Toscano; by the bottle there is the house wine, Vino l'Osteria, red and white. The cellar holds the wines of the wine list, which includes Chianti, Rosso di Montepulciano and Montalcino.`
- Rests on: Offer, "Wines on the live menu"; Place and story (founder's brief and photo captions). No bottle prices.

**Questions left out** because the profile has no answer: seats, private groups, children and dogs, wheelchair access, card payments, takeaway, gluten-free or vegetarian options, Palio-day hours, cost per head, and whether an outdoor table can be requested.

---

## 6. JSON-LD

General rules. Values come from the profile only. No geo coordinates, no email, no rating or review markup of any kind, no `suitableForDiet`, no allergens, **no `priceRange`** (a single range would not be in the profile and would hide the steaks sold by weight).
`servesCuisine` is derived from the approved menu text, because the profile line "Cuisine" is marked as unverified; the founder should confirm (section 10).
`image` uses the 960 px JPEG of five photos whose catalogue "Use" is wide. `logo` is the full-colour logo file in the same folder; the builder must confirm that `logo-osteria-dei-rossi-720.webp` is the full-colour one.
`openingHoursSpecification` is the approved hours; the closed times (Sunday evening, Monday) are expressed by having no entry.
`foundingDate` is `1992` ("Opened in 1992", founder-approved profile line).
**The Restaurant node is identical on the Italian and the English page** (same `@id`, same `url` = the root URL, one Italian `description`). Language-specific text lives on the WebSite node only. When hours or the menu change, the visible text, the FAQ and the markup change in the same commit.

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

The Restaurant node below is the same as in 6.1, word for word. Only the WebSite node is English.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.osteriadeirossi.it/en/#website",
      "url": "https://www.osteriadeirossi.it/en/",
      "name": "Osteria dei Rossi",
      "description": "An osteria in Siena, inside the city walls, at Via dei Rossi 79/81.",
      "inLanguage": "en",
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

### 6.3 Home, Italian (`/`): FAQPage

Since 2023 Google shows FAQ rich results only for a small set of authoritative sites, so no rich result should be expected. The markup is kept because it is valid, matches visible text and can be parsed by answer engines.

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
        "text": "Sì, davanti all'ingresso ci sono tavoli sulla strada, con ombrelloni color crema."
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
  "inLanguage": "en",
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
        "text": "Yes, there are tables on the street outside the door, under cream parasols."
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
        "text": "The cover charge is 2.50 € per person. Steaks are sold by weight, at the price per 100 g shown on the menu."
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

**The Menu blocks used on the pages are the generated files in `assets/menu/`. The hand-written copy below is a reference only; if they differ, the generated files win, and both must match the visible menu.**

Rules for the Menu markup. Every approved dish and drink is listed with its published name and price. Descriptions are the approved text, **exactly as published**. **Dishes sold by weight carry the unit in the offer, not in the description**: the offer has `priceSpecification` with `UnitPriceSpecification` and `referenceQuantity` of 100 g (`unitCode` `GRM`), in this form:
`"offers": {"@type": "Offer", "priceCurrency": "EUR", "priceSpecification": {"@type": "UnitPriceSpecification", "price": "9", "priceCurrency": "EUR", "referenceQuantity": {"@type": "QuantitativeValue", "value": "100", "unitCode": "GRM"}}}`
Desserts without an Italian description in the source have none; Panna Cotta and Cheesecake carry the published options. The three fillet variants are separate items named with the base dish. Ravioli con Zucca Gialla, Pancetta e stracciatella has no description. No allergens, no diet labels, no flags.

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
            { "@type": "MenuItem", "name": "Bistecca alla Fiorentina", "description": "La specialità della casa: una selezione settimanale curata da Alessio, il nostro macellaio di fiducia. Selezioniamo le migliori carni provenienti da razze e allevamenti di tutto il mondo, per offrire un’esperienza alla griglia sempre distintiva e unica.", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "9", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } },
            { "@type": "MenuItem", "name": "Bistecca Fritta", "description": "La nostra versione fuori dagli schemi della regina della tavola toscana: una bella bistecca alla fiorentina, impanata e fritta, croccante fuori e succosa dentro. Da provare almeno una volta!", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "12", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } },
            { "@type": "MenuItem", "name": "Costata del macellaio", "description": "Un taglio di manzo simile alla Fiorentina, ma senza filetto, ideale per chi ama il gusto autentico della carne alla griglia.", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } }
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

**The Menu blocks used on the pages are the generated files in `assets/menu/`. The hand-written copy below is a reference only; if they differ, the generated files win, and both must match the visible menu.**

Same rules as 6.5, including the unit in the offer (not in the description) for the three steaks sold by weight, and descriptions exactly as published. Dish names stay as published; descriptions are the approved English text; drinks use the published English item names. Panna Cotta and Cheesecake carry the options as the description.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Menu",
      "@id": "https://www.osteriadeirossi.it/en/menu/#menu",
      "url": "https://www.osteriadeirossi.it/en/menu/",
      "name": "Menu of Osteria dei Rossi",
      "inLanguage": "en",
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
            { "@type": "MenuItem", "name": "Bistecca alla Fiorentina", "description": "The house speciality: a weekly selection hand-picked by Alessio, our trusted butcher. We choose the finest beef from breeds and farms around the world to offer a truly distinctive and unique grilling experience every time.", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "9", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } },
            { "@type": "MenuItem", "name": "Bistecca Fritta", "description": "Our unconventional take on the queen of the Tuscan table: a proper Florentine steak, breaded and fried until crispy on the outside and juicy on the inside. You have to try it at least once!", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "12", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } },
            { "@type": "MenuItem", "name": "Costata del macellaio", "description": "A cut of beef similar to a Florentine steak, but without the tenderloin, perfect for those who love the authentic taste of grilled meat.", "offers": { "@type": "Offer", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "7", "priceCurrency": "EUR", "referenceQuantity": { "@type": "QuantitativeValue", "value": "100", "unitCode": "GRM" } } } }
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

---

## 7. robots.txt and sitemap.xml

### 7.1 `/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://www.osteriadeirossi.it/sitemap.xml
```

No per-crawler rules in version 1; no `Disallow` lines. The 404 page is not listed anywhere. The old menu subdomain has its own host and its own (absent) robots file.

### 7.2 `/sitemap.xml`

Six URLs, each with its language twin and `x-default`. `lastmod` is the real date of the last content change of that page, generated by the build; the dates below are placeholders, never set to "today" automatically on every build.

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

When German pages are added, add `hreflang="de"` to every entry in the sitemap and the page heads at once.

---

## 8. Technical checklist for the builder

Run the list on the built output, not on the source.

**Structure and language**
- [ ] Exactly one `<h1>` per page, in the HTML at first paint, not created by script, not animated in. Headings follow a logical outline with no skipped levels.
- [ ] `<html lang="it">` on Italian pages and `<html lang="en">` on English pages (hreflang `en`).
- [ ] The seven stops are `<section>` elements with the fixed ids `porta`, `via`, `sala`, `tavola`, `cantina`, `contrada`, `prenota`, plus `domande`; menu section ids as in 2.3. A skip link is the first focusable element.
- [ ] Phone shown as `+39 0577 287592` with `href="tel:+390577287592"`; WhatsApp link `https://wa.me/390577287592`; the visible NAP block is identical on every page footer.
- [ ] Footer carries the legal line from the profile identity lines (ML SNC DI LANARO E FRESI, P. IVA IT00354250524). Confirm with the founder (section 10).

**Images**
- [ ] Every `<img>` has `width` and `height` equal to the intrinsic size of its default `src`, plus CSS `aspect-ratio`. Ratios: 2048×1638 photos are 5:4 (960×768); 2048×1366 are 3:2 (960×640); 1638×2048 portraits are 4:5 (720×900).
- [ ] `<picture>` with AVIF sources and JPEG fallback, `srcset` and `sizes`. Alt text exactly as in section 3.
- [ ] One preloaded hero image: `rel="preload" as="image" fetchpriority="high"` with the AVIF `imagesrcset` of `osteria-dei-rossi-siena-esterno` (see 2.7), and the hero `<img>` has `fetchpriority="high"`, `loading="eager"`. No other image is preloaded.
- [ ] Every image below the first viewport has `loading="lazy"` and `decoding="async"`. Never lazy-load the hero, the logo or anything in the first viewport on mobile.
- [ ] No text inside images. The share image is a 1200×630 JPEG at an absolute URL. GPS data stripped from all photos.

**Fonts and third parties**
- [ ] Fonts self-hosted as WOFF2: Bodoni Moda (display) and Figtree (body), the two approved. Source Serif 4 is not approved: do not load it. Subset to Latin plus Latin Extended, `font-display: swap`, a metric-matched fallback, at most two preloaded font files.
- [ ] No render-blocking third-party request. No analytics, tag manager, pixel, cookie, embed, font CDN or map embed (the map is a link to the Google Maps URL). JavaScript is deferred and optional.
- [ ] No `Set-Cookie` in any response.
- [ ] External links use `rel="noopener"`, with no tracking parameters.

**Host and URLs**
Redirects wanted at the host (all 301):

| From | To |
|---|---|
| `http://` any host | `https://www.osteriadeirossi.it/` same path |
| `https://osteriadeirossi.it/…` (no www) | `https://www.osteriadeirossi.it/…` same path |
| `/index.html` and `/en/index.html` | `/` and `/en/` |
| `/menu`, `/en/menu`, `/privacy`, `/en/privacy`, `/en` (no trailing slash) | the same URL with a trailing slash |
| Legacy paths on the old preview host (`azure-locust-452058.hostingersite.com`) | the matching new URL if one exists; the preview host must not stay indexable |

- [ ] HTTPS everywhere, HSTS once the redirects are verified. Compression and long cache lifetimes with hashed file names; HTML revalidates.
- [ ] A branded 404 as in 2.6.
- [ ] `robots.txt` and `sitemap.xml` as in section 7. Canonical, hreflang and sitemap agree.
- [ ] The staging copy is `noindex` until launch; the `noindex` is removed in the launch commit (check the live HTML).

**Markup**
- [ ] The JSON-LD blocks of section 6 are in the head of the right pages, valid against the Schema.org validator and the Rich Results test. FAQ text identical to the visible text. Menu markup is the generated file in `assets/menu/`.
- [ ] No rating, review, geo, email, `priceRange`, `suitableForDiet` or allergen markup anywhere.
- [ ] Open Graph and Twitter tags on every indexable page; `og:image` returns HTTP 200 and is 1200×630.

**Performance and quality targets (mobile, built pages)**
- [ ] Lighthouse mobile 95 or more in all four categories on Home IT, Home EN, Menu IT and Menu EN.
- [ ] LCP under 2.0 s, CLS under 0.05, INP under 200 ms (lab values).
- [ ] Contrast over photos checked on real pixels; keyboard navigation and reduced-motion fallbacks work.
- [ ] A link checker finds no broken internal link, no redirect chain longer than one hop, and no link to `menu.osteriadeirossi.it`.
- [ ] The words "L'Osteria dei Rossi" do not appear anywhere in the built output.

---

## 9. How this site beats the competitor sites

Evidence level: every "competitors do" cell comes from the competitor teardown (04), built from indexed titles and search summaries; no competitor page was opened and no speed, schema or meta description was measured. Treat each row as a hypothesis to re-check. "This site does instead" describes what version 1 is specified to do, not a ranking outcome.

| # | Gap found in the research | What the competitors do (04) | What this site does instead |
|---|---|---|---|
| 1 | Titles carry no cuisine, dish or neighbourhood | Most home titles are brand-only, "Home - Brand" or a bare page name (04 section 4) | Titles with the category, the city and a true landmark; the Menu title carries three dish names; unique per page and language |
| 2 | Nobody anchors on San Francesco, Provenzano or the Bruco | Distances to the Campo everywhere; no mention of a contrada | Title and #via anchor on San Francesco; the Campo given as 5 minutes on foot; #contrada names the Contrada del Bruco |
| 3 | Menus as PDF or missing | Il Vinaio PDF; Taverna di San Giuseppe no menu page; Trombicche and Le Sorelline none indexed | A full HTML menu with prices in two languages, dish names as text, markup generated from the same data |
| 4 | Booking by phone only, or hidden | Online booking rare; WhatsApp only at Fonte Giusta and Vinattieri | Phone and WhatsApp on every page through one Prenota button and in the FAQ. (No online booking exists; none is claimed) |
| 5 | English untidy, German almost absent | Duplicate English URL schemes, Italian slugs under `/en/`, machine translation; one German page in the set | One clean URL scheme, hreflang with x-default, careful copy in both languages. German is a later phase |
| 6 | No find-us content (ZTL, parking, escalators) | Only Grattacielo has a "dove siamo" page | FAQ 7 and the #prenota "getting here" block from approved facts (no tariff, no walking time) |
| 7 | No FAQ | No FAQ page in any indexed list (absence in the index only) | Ten answered questions in two languages, each tied to a profile line, with matching FAQPage markup. Value for readers and answer engines, not a rich result |
| 8 | No dish-level content | The closest are Da Divo's truffle menu page and Fonte Giusta's landing pages | Dish names as indexable text on the Menu, dish H3s on Home; dish articles later through the journal |
| 9 | Contradictory facts | Different street numbers, second addresses, contradictory hours, default-looking hours in markup | One NAP and one hours text everywhere, markup repeating the approved hours, and an off-site clean-up |
| 10 | Template leftovers in the index | "comingsoon2", "Sito in Costruzione", demo pages, attachment pages | Six real pages in the sitemap, a branded HTTP 404, no PDF-only content, the preview host kept out of the index |
| 11 | The osteria's own web presence is thin | Only a JavaScript menu on a subdomain with no schema, canonical, robots or sitemap, not indexed (01 section 5) | A static site with canonical, hreflang, sitemap and structured data, and a plan for the old subdomain that keeps the table QR codes working |
| 12 | Slow, plugin-heavy builds are likely | Most competitors look like WordPress or theme builds (inferred); speed not measured | Static HTML, self-hosted fonts, one preloaded hero, no third-party requests, with Lighthouse targets. Whether it is a real advantage is not measured |
| 13 | Same-street neighbour is thin | Osteria Le Sorelline (Via dei Rossi 76): one indexed page, no menu page | The street itself (name origin, its end at the Basilica) is part of #via, from approved facts only |

---

## 10. Facts needed that I could not find in the profile

None of these is invented in this specification.

**Business facts**
1. Cuisine description. The profile "Cuisine" line is marked as unverified; `servesCuisine` (Tuscan and Sienese) is derived from the approved menu text. Founder to confirm.
2. Whether the pasta is made in house. Not claimed.
3. Seats, groups, children, dogs, wheelchair access, card payments, takeaway, delivery. None is in the profile; none appears in FAQ or markup.
4. Outdoor tables: months, number, and whether one can be requested. The FAQ says only what the photos show.
5. Special opening days (Christmas, August, Palio days, closures). The hours markup has no special-hours entries.
6. Monday. Approved hours say closed; research found records showing Monday open. The owner should confirm once more, because the hours are copied to every listing.
7. Geo coordinates of the door, and any walking time other than "Piazza del Campo about 5 minutes".
8. Walking time from the San Francesco car park to the door; ZTL hours, gates, permits; Palio-day access.
9. Named producers (the butcher Alessio's shop, the Crete Senesi pig farm, cheese and wine producers).
10. The wine list itself (labels, producers, how many).
11. "Fresh truffle all year round" is a founder photo caption; research shows several species, each with its own season. The specification uses "tartufo fresco di stagione". Founder to say which wording he wants.
12. Founding: the profile says opened in 1992 (approved); one research record says "dal 1975". Use 1992 only. Spelling of the founder's surname (Carrieri or Carreri).
13. Whether the people named in the profile (Beppe Carrieri, Luca, Max, Alessio) may be named on the site, and which surnames.
14. The right description for "Ravioli con Zucca Gialla, Pancetta e stracciatella". Until then, name and price only.
15. Allergens for every dish (the chef has to confirm).
16. "Costata del macellaio" (live menu) or "Costata del Vamosh" (older profile line): the live menu is used.

**Brand, accounts and decisions**
17. Which Facebook page is live: `/osteriadeirossi` (profile, approved) or `/OsteriaSiena` (indexed). Markup uses the profile one.
18. Which email, if any, is monitored and may be shown. None appears.
19. Whose the second phone number +39 0577 1460316 is. Not used.
20. Which logo file is the full-colour one (`logo-osteria-dei-rossi-720.webp` assumed), and whether the legal line goes in the footer.
21. Who updates the menu: the staff edit the old menu through a panel; the new `/menu/` and its markup come from the 2026-11-24 snapshot. A decision is needed on keeping them in step and on who edits the canonical or redirect on the old subdomain.
22. Who holds the logins of the Google Business Profile, Facebook and TripAdvisor pages, and whether another agency already manages any of them.
23. Privacy page text and who supplies it; whether analytics will ever be approved (version 1 has none).
24. Whether the menu's own exclusivity and quality claims may be used. The sentence saying the osteria is the only one in Siena and its province to serve the fried steak is left off the website for now (visible menu and markup); "le migliori carni" is kept as published. The osteria's own QR menu is unchanged.
25. The launch date, so the sitemap `lastmod`, the Search Console set-up and the content calendar in `seo-offsite.md` can be dated.
