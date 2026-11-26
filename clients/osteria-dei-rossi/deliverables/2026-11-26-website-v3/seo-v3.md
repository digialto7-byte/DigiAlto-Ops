# Osteria dei Rossi: on-site SEO and GEO addendum (website version 3)

Client slug: `osteria-dei-rossi` · Date: 2026-11-26 · Author: seo-specialist · Status: for reviewer
Internal document, in English. Italian strings are for the Italian pages, British English strings for the English pages.
This file supersedes `seo-v2.md` of the version 2 folder (`2026-11-24-website`) for this folder. It is still an addendum to `seo.md` (version 1), which stays valid for everything this file does not replace (section 8 lists what is superseded). Plan: `design-v3.md`; audit: `audit/seo.md`. The off-site kit stays in `seo-offsite.md`. What changed from version 2:
1. Home pages (P.1, P.2, J.1, J.2, keyword rows 1.1 and 1.2): no dish list and no price on the home page; new meta description and Open Graph text; new section outline (`#perche`, the gallery, one id per food block).
2. Share previews: every page spec gets its own 1200×630 image, image alt and Twitter image (new table rows).
3. Alt texts: the four gallery photos are covered (section A, with the gallery rules). Structured data: the room photo in `Restaurant.image`, `WebPage` on home, menu and wine list, one `ImageObject` per home page.
4. Sitemap `lastmod` 2026-11-26; internal links (section 7) rewritten by destination and purpose; builder notes (section 8) and open facts (section 9) brought up to date.
5. Unchanged: Q.1 to Q.6 (checked: no answer refers to the home page), P.3 to P.8 values, canonicals, hreflang, URLs, robots.

Sources. Facts come only from `knowledge/clients/osteria-dei-rossi/profile.md` (including "Welcome, food and wine (website version 2, 2026-11-25)" and "Website rules (version 3, 2026-11-26)"), the photo catalogue `sources/photos-2026-11-25.md`, the wine list `sources/wine-list-2026-11-25.json` (names only, no prices) and the approved live menu `sources/menu-live-2026-11-24.md` (allergens not approved). No web research was done for this file. The "who answers it today" cells reuse the research of 2026-11-24 as quoted in `seo.md`; a cell that says "not run" means the research did not test the query and the intent is a judgement, not a measurement. No search volume and no Google.it position is claimed anywhere. The evidence-level warning of `seo.md` section 0 still applies.

Common to every indexable page (as in `seo.md` section 2): one self-referencing canonical, the full hreflang set (`it`, `en`, and `x-default` pointing to the Italian URL), robots `index, follow, max-image-preview:large`, Open Graph and Twitter tags, and (new in version 3) the page type's own share image. The two hreflang rows in the tables below are the language twins; the generator adds `x-default` = the Italian URL.

---

## 1. Keyword map for version 3

Intent codes as in `seo.md` section 1: **L** local discovery, **I** information, **N** navigational, **T** ready to book or to act.
One primary and two to four secondary phrases per page. Where the brief names more intents than a page may carry as secondaries, the extra ones sit in a second table as **section-level intents**: they are answered inside one section (heading, one paragraph, a link), they never appear in the title, meta description or H1, and they are not counted.
Only the two home tables (1.1, 1.2) and 1.7 changed in version 3; 1.3 to 1.6 are repeated from version 2.

### 1.1 Home, Italian (`/`)

The home page is the story first, then the room, then the food explained. It owns "osteria a Siena". It carries no price and no dish list (founder's rule of 2026-11-26): a dish is named only inside an explanation, and the page links to the menu for the dish and its price. It does not target "centro storico" or "San Francesco" (those belong to "Dove siamo"). No title, description or keyword row promises prices or a dish list.

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | `seo.md` 1.1: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Wanderlog, Frommer's; no restaurant-owned domain in the first results | Title, H1, meta description, hero image alt, first paragraph of `#casa` |
| Secondary | dove mangiare i pici a Siena | I, L | Not run as written. Nearest: `seo.md` 1.3 (02 Q10: travel365, Do Eat Better, La Nazione, one Sluurpy page per pici dish) and 1.4 (03: Visit Tuscany, travel365, Frommer's, Do Eat Better); no restaurant-owned page | `#pici` h2 and first paragraph (the paragraph names the four ways); meta description ("pici") |
| Secondary | cosa sono i pici | I | Not run; judged an explainer intent served by food blogs and guides | `#pici` first paragraph (what pici are, from the profile) |
| Secondary | cinta senese cos'è | I | Not run; judged an explainer intent served by the consortium and food guides | `#cinta` h3 and the paragraph that explains the breed |
| Secondary | ristorante Contrada del Bruco Siena | L, I (under-served) | `seo.md` 1.1 (02 Q16): no relevant page | `#contrada` h2 and first paragraph |
| Brand (not counted) | osteria dei rossi siena · osteria via dei rossi | N | `seo.md` 1.1: only third-party pages | Footer NAP, title, JSON-LD name, Google Business Profile |

Section-level intents (not counted, no title or H1 use):

| Keyword | Intent | Section | Page that owns the query |
|---|---|---|---|
| cantucci e vin santo | I | `#dolce` h2 and the short paragraphs | Home (the menu only lists the dessert and its price) |
| cinghiale in dolceforte | I | `#dolceforte` h3 (what the recipe is; agrodolce, medieval; the dish name as published) | Menu owns the dish-name query; Home explains it and links to the dish on the menu page |
| cinghiale in umido, polenta | I | `#tavola`, the "al coccio" block | Menu |
| tartufo fresco Siena | L | `#tartufo` (h3 and paragraph; the founder's caption "tartufo fresco, tutto l’anno" is open, section 9) | Menu |
| funghi porcini Siena ristorante | L | `#porcini` (grigliati, fritti, tagliatelle) | Menu (`Tagliatelle ai Funghi Porcini`, seasonal dish) |
| spaghetti alla chitarra, "in menù dal 1992" | I | `#spaghetti` | Menu |
| tagliere di salumi e formaggi, Tagliere del Cacciatore | I | `#taglieri` | Menu |
| bistecca alla fiorentina Siena | L | `#fiorentina` (sold by weight; the price per 100 g is on the menu, never on the home page) | Menu |
| cucina medievale Siena ristorante | I, L | `#tavola` intro paragraph | Home (kept from `seo.md` 1.1) |

### 1.2 Home, English (`/en/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | `seo.md` 1.2: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Frommer's, Wanderlog; no osteria-owned site | Title, H1, meta description, hero alt, first paragraph of `#casa` |
| Secondary | where to eat pici in Siena | I, L | `seo.md` 1.4 (03): Visit Tuscany, travel365, Frommer's, Do Eat Better; no restaurant-owned page | `#pici` h2 and first paragraph |
| Secondary | what are pici | I | Not run; judged an explainer intent | `#pici` first paragraph |
| Secondary | what is Cinta Senese | I | Not run; judged an explainer intent | `#cinta` h3 and paragraph |
| Secondary | Contrada del Bruco restaurant | L, I (under-served) | `seo.md` 1.2: not tested in English; the Italian query returned no relevant page | `#contrada` |
| Brand (not counted) | osteria dei rossi siena | N | `seo.md` 1.1 | Footer, title, JSON-LD |

Section-level intents (not counted): cantucci and Vin Santo (`#dolce`); wild boar in dolceforte (`#dolceforte` h3, link to the dish on `/en/menu/`); fresh truffle Siena restaurant (`#tartufo`); porcini mushrooms restaurant Siena (`#porcini`); spaghetti alla chitarra (`#spaghetti`); cured meats and cheese boards (`#taglieri`); bistecca alla fiorentina by weight (`#fiorentina`); medieval cooking Siena restaurant (`#tavola` intro). Same ownership as in 1.1.

### 1.3 Wine list, Italian (`/vini/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | carta dei vini | I, L | Not run. Judgement: a list page of a named restaurant competes only on place plus list; the generic phrase is shared with wine shops and restaurant listings | Title, H1, meta description, intro paragraph |
| Secondary | osteria Siena vini | L | Not run; judgement as above | Intro paragraph ("osteria a Siena"), title ("Siena") |
| Secondary | Chianti Classico | I | Not run. Judgement: consortium, producer and wine-shop pages hold it; here only as "on the list" | h3 `Chianti` area heading and the wines under it; meta description |
| Secondary | Brunello di Montalcino | I | Not run; judgement as above | h3 `Montalcino`; meta description |
| Secondary | Vino Nobile di Montepulciano | I | Not run; judgement as above | h3 `Montepulciano`; meta description |
| Not used | enoteca / wine bar | | | **Not used.** The profile describes an osteria with a cellar and a wine list, not an enoteca or a wine bar; claiming either would be misleading. Reconsider only if the founder confirms a wine-bar service (section 9) |

### 1.4 Wine list, English (`/en/wine-list/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | wine list Siena | I, L | Not run; judgement as 1.3 | Title, H1, meta description, intro |
| Secondary | osteria Siena wine | L | Not run | Intro paragraph |
| Secondary | Chianti Classico | I | Not run | h3 `Chianti`; meta description |
| Secondary | Brunello di Montalcino | I | Not run | h3 `Montalcino`; meta description |
| Secondary | Vino Nobile di Montepulciano | I | Not run | h3 `Montepulciano`; meta description |
| Not used | wine bar / enoteca | | | Not used, same reason as 1.3 |

### 1.5 Dove siamo, Italian (`/dove-siamo/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | ristorante vicino Basilica di San Francesco Siena | L (under-served) | `seo.md` 1.1 (02 Q15): OpenTable landmark pages, Lonely Planet POIs, a B&B portal; no Italian editorial page | Title ("vicino a San Francesco"), meta description, H1 area, `#via` paragraph |
| Secondary | ristorante vicino Piazza del Campo | L | Not run in Italian; `seo.md` 1.2 notes that the English "near Piazza del Campo" results are generic guides | Meta description and `#via`: say only "a circa 5 minuti a piedi da Piazza del Campo" (profile), never "a due passi" |
| Secondary | osteria Siena centro storico | L | `seo.md` 1.1 (02 Q2): DiscoverTuscany, italia.it, Michelin, En Primeur Club, pos.do; no indexed title with "centro storico" | Hero line ("dentro le mura, nel centro storico di Siena"), `#via` |
| Secondary | parcheggio San Francesco Siena ristorante | L, I | Not run; judged a practical query | "In auto" block: the San Francesco car park, Via Baldassarre Peruzzi, escalators, ZTL (profile; no tariff, no times) |

### 1.6 Find us, English (`/en/find-us/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | restaurant near Piazza del Campo | L | `seo.md` 1.2: generic guides; not tested as a restaurant-owned page | Title, meta description, hero line ("about 5 minutes on foot from Piazza del Campo") |
| Secondary | where to eat in Siena inside the walls | L, I | Not run; judged a discovery intent | Hero line, `#via` paragraph ("inside the city walls") |
| Secondary | restaurant near Basilica of San Francesco Siena | L (under-served) | `seo.md` 1.2 (02 Q15) | `#via` paragraph; "On foot" block |
| Secondary | parking San Francesco Siena restaurant | L, I | Not run | "By car" block |

### 1.7 Who owns what (no page competes with another)

| Intent | Owner | The other pages |
|---|---|---|
| osteria Siena, the story, the room, the contrada | Home | none |
| What pici / Cinta Senese / cantucci and Vin Santo are, in depth | Home (`#pici`, `#cinta`, `#dolce`) | The Menu FAQ answers the same questions in 30 to 60 words for readers and answer engines. This is deliberate overlap inside one site; if Search Console later shows the Menu question outranking the Home section for an explainer query, keep both and strengthen the link from the Menu answer to `/#pici` |
| Dish names, prices, what to order (pici, dolceforte, tartufo, fiorentina, porcini) | Menu (`seo.md` 1.3 and 1.4 stand unchanged) | Home names a dish inside an explanation, with its published name, **never with a price and never as a row**, and links to the dish on the menu page. A dish description appears in full only on the menu; the home paraphrases from the profile |
| The wines of the carta, the three great reds | Wine list | Home `#cantina` only links to it; Menu "Bevande" only links to it |
| Address, how to arrive, car park, ZTL, near San Francesco, near Piazza del Campo, hours and booking questions | Dove siamo / Find us | Home carries no map and no FAQ; its hero line gives the address and "circa 5 minuti a piedi da Piazza del Campo" and links to Dove siamo or Maps |

---

## 2. Page specifications

Rows are exactly as the generator expects. Counts are shown in the label for the meta title and meta description (hand-counted). H1 is for information: the copywriter writes it (`copy.md` wins).

Share previews (new rows in every page spec): `Open Graph image` is a file name under `/assets/img/` (the builder writes the absolute URL, and adds `og:image:width` 1200, `og:image:height` 630 and `og:image:type` `image/jpeg`); `Open Graph image alt` is the `og:image:alt` text in the page's language; `Twitter image` is the same file as the Open Graph image (`twitter:image`). One image per page type, shared by the Italian and English twins, made by the builder from existing photos: 1200×630 JPEG, under about 300 KB, **no text and no price on the image**, nothing added to the picture. Home `og-home.jpg`: the osteria from outside (`osteria-dei-rossi-siena-esterno`). Menu `og-menu.jpg`: cinghiale in umido nel coccio (`cinghiale-in-umido-coccio`). Wine list `og-vini.jpg`: the brick grotto towards the cellar (`grotta-volte-in-mattoni-cantina`). Dove siamo `og-dove-siamo.jpg`: the Via dei Rossi plate and the osteria's sign (`via-dei-rossi-targa-e-insegna-osteria`). The privacy pages keep the home image (`og-home.jpg`). These files replace the single `og-osteria-dei-rossi-siena.jpg` of version 1 and 2. Alt wording follows the alt rules of `seo.md` section 3 (what the picture shows, 125 characters or fewer).

### P.1 Home, Italian

Changed from version 2: meta description and Open Graph description (the page no longer lists dishes: it says what the place is and what it offers to read), the new share rows. Title and H1 are kept.

| Field | Value |
|---|---|
| Meta title (57) | `Osteria dei Rossi | Osteria a Siena: pici e cucina senese` |
| Meta description (148) | `Osteria dei Rossi, Via dei Rossi 79/81, Siena: cucina senese con radici medievali, pici e cinghiale in dolceforte. Prenota al telefono o su WhatsApp.` |
| Open Graph title | `Osteria dei Rossi | Si mangia come a casa, a Siena` |
| Open Graph description | `Un'osteria dentro le mura di Siena, in Via dei Rossi 79/81: la storia, la sala e la cucina senese. Prenota al telefono o su WhatsApp.` |
| Open Graph image | `og-home.jpg` |
| Open Graph image alt | `Ingresso dell'osteria in Via dei Rossi a Siena: muro di mattoni, persiane verdi, ombrelloni crema e tavoli sulla strada` |
| Twitter image | `og-home.jpg` |
| H1 | `Osteria a Siena, dentro le mura` (unchanged from seo.md 2.1) |
| Canonical | `https://www.osteriadeirossi.it/` |
| hreflang it | `https://www.osteriadeirossi.it/` |
| hreflang en | `https://www.osteriadeirossi.it/en/` |

Heading outline (ids are frozen, same on the English page; the visible words are `copy.md`'s): `h1` in `#porta` (hero, with the address and Come arrivare as text links); `#perche` slim band of four facts (an `h2` if `copy.md` gives it a heading, otherwise a `section` with `aria-label`; its facts are not headings); `h2` `#casa` with the photo gallery (figures with `figcaption`); `h2` `#contrada`; `h2` `#tavola` with the food index (a list of links, not headings), `h3` `#dolceforte` and `h3` for the "al coccio" block; `h2` `#pici`; `h2` `#dispensa` with `h3` `#cinta`, `#tartufo`, `#porcini`, `#spaghetti`, `#taglieri` and the fiorentina band `h3` `#fiorentina`; `h2` `#dolce`; `h2` `#cantina`; `h2` `#prenota`. No `#domande`, no FAQ block.

### P.2 Home, English

| Field | Value |
|---|---|
| Meta title (59) | `Osteria dei Rossi | Osteria in Siena: pici and Sienese food` |
| Meta description (144) | `Osteria dei Rossi, Via dei Rossi 79/81, Siena: Sienese cooking with medieval roots, pici and wild boar in dolceforte. Book by phone or WhatsApp.` |
| Open Graph title | `Osteria dei Rossi | Eat as if at home, in Siena` |
| Open Graph description | `An osteria inside Siena's walls, at Via dei Rossi 79/81: the story, the room and Sienese cooking. Book by phone or WhatsApp.` |
| Open Graph image | `og-home.jpg` |
| Open Graph image alt | `Entrance of the osteria in Via dei Rossi, Siena: brick wall, green shutters, cream parasols and tables on the street` |
| Twitter image | `og-home.jpg` |
| H1 | `An osteria in Siena, inside the walls` (unchanged from seo.md 2.2) |
| Canonical | `https://www.osteriadeirossi.it/en/` |
| hreflang it | `https://www.osteriadeirossi.it/` |
| hreflang en | `https://www.osteriadeirossi.it/en/` |

Heading outline: as P.1, same ids.

### P.3 Menu, Italian

Values unchanged from `seo.md` 2.3 (repeated), plus the share rows. The menu page is the only page with prices; each dish has its own id (slug of the Italian dish name, section 7). The food questions sit at the end of this page (Q.3).

| Field | Value |
|---|---|
| Meta title (59) | `Menù | Osteria dei Rossi Siena: pici, cinghiale, fiorentina` |
| Meta description (154) | `Il menù di Osteria dei Rossi a Siena con prezzi: pici, ribollita, cinghiale in dolceforte, bistecche alla griglia, vini e dolci. Coperto 2,50 € a persona.` |
| Open Graph title | `Il menù di Osteria dei Rossi, Siena` |
| Open Graph description | `Antipasti, primi, secondi, griglia, dolci e vini con i prezzi. Coperto 2,50 € a persona.` |
| Open Graph image | `og-menu.jpg` |
| Open Graph image alt | `Cinghiale in umido in una ciotola di terracotta con una foglia di alloro, contorni, pane e vino rosso` |
| Twitter image | `og-menu.jpg` |
| H1 | `Il menù dell'osteria a Siena` (unchanged from seo.md 2.3) |
| Canonical | `https://www.osteriadeirossi.it/menu/` |
| hreflang it | `https://www.osteriadeirossi.it/menu/` |
| hreflang en | `https://www.osteriadeirossi.it/en/menu/` |

### P.4 Menu, English

Values unchanged from `seo.md` 2.4 (repeated), plus the share rows.

| Field | Value |
|---|---|
| Meta title (54) | `Menu | Osteria dei Rossi Siena: pici, wild boar, steak` |
| Meta description (151) | `The menu of Osteria dei Rossi in Siena, with prices: pici, wild boar in dolceforte, grilled steaks, wines and desserts. Cover charge 2.50 € per person.` |
| Open Graph title | `The menu at Osteria dei Rossi, Siena` |
| Open Graph description | `Starters, pasta, mains, grill, desserts and wines, with prices. Cover charge 2.50 € per person.` |
| Open Graph image | `og-menu.jpg` |
| Open Graph image alt | `Wild boar stew in a terracotta bowl with a bay leaf, side dishes, bread and red wine on the table` |
| Twitter image | `og-menu.jpg` |
| H1 | `The osteria's menu in Siena` (unchanged from seo.md 2.4) |
| Canonical | `https://www.osteriadeirossi.it/en/menu/` |
| hreflang it | `https://www.osteriadeirossi.it/menu/` |
| hreflang en | `https://www.osteriadeirossi.it/en/menu/` |

### P.5 Wine list, Italian

No prices anywhere on it.

| Field | Value |
|---|---|
| Meta title (59) | `Carta dei vini | Osteria dei Rossi Siena: Chianti, Brunello` |
| Meta description (145) | `La carta dei vini di Osteria dei Rossi, Siena: Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, bianchi, rosé e bollicine.` |
| Open Graph title | `La carta dei vini di Osteria dei Rossi, Siena` |
| Open Graph description | `Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, altri rossi, bianchi, rosé e bollicine. Prezzi non pubblicati online.` |
| Open Graph image | `og-vini.jpg` |
| Open Graph image alt | `La grotta con volte in mattoni a più arcate, verso la cantina, con i tavoli apparecchiati` |
| Twitter image | `og-vini.jpg` |
| H1 | `La carta dei vini` |
| Canonical | `https://www.osteriadeirossi.it/vini/` |
| hreflang it | `https://www.osteriadeirossi.it/vini/` |
| hreflang en | `https://www.osteriadeirossi.it/en/wine-list/` |

### P.6 Wine list, English

| Field | Value |
|---|---|
| Meta title (54) | `Wine list | Osteria dei Rossi Siena: Chianti, Brunello` |
| Meta description (150) | `The wine list of Osteria dei Rossi in Siena: Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, whites, rosé and sparkling wines.` |
| Open Graph title | `The wine list of Osteria dei Rossi, Siena` |
| Open Graph description | `Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, other reds, whites, rosé and sparkling wines. Prices are not published online.` |
| Open Graph image | `og-vini.jpg` |
| Open Graph image alt | `The brick-vaulted grotto with successive arches, leading towards the cellar, with the tables laid` |
| Twitter image | `og-vini.jpg` |
| H1 | `The wine list` |
| Canonical | `https://www.osteriadeirossi.it/en/wine-list/` |
| hreflang it | `https://www.osteriadeirossi.it/vini/` |
| hreflang en | `https://www.osteriadeirossi.it/en/wine-list/` |

### P.7 Dove siamo, Italian

| Field | Value |
|---|---|
| Meta title (57) | `Osteria dei Rossi | Osteria vicino a San Francesco, Siena` |
| Meta description (151) | `Via dei Rossi 79/81, Siena, dentro le mura: la Basilica di San Francesco è in fondo alla via, Piazza del Campo a circa 5 minuti a piedi. Mappa e orari.` |
| Open Graph title | `Dove siamo | Osteria dei Rossi, Siena` |
| Open Graph description | `Via dei Rossi 79/81, Siena. Basilica di San Francesco in fondo alla via, Piazza del Campo a circa 5 minuti a piedi.` |
| Open Graph image | `og-dove-siamo.jpg` |
| Open Graph image alt | `Angolo in pietra con la targa in marmo «Via dei Rossi» e, sotto, l'insegna «Osteria» con una freccia` |
| Twitter image | `og-dove-siamo.jpg` |
| H1 | `Dove siamo: Via dei Rossi 79/81, Siena` |
| Canonical | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang it | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang en | `https://www.osteriadeirossi.it/en/find-us/` |

### P.8 Find us, English

The English primary is the Piazza del Campo phrase and the Italian one the San Francesco phrase on purpose: the research (`seo.md` 1.2) found generic guides on the English Campo query and no editorial page on the San Francesco one in Italian; each page carries the other phrase as a secondary.

| Field | Value |
|---|---|
| Meta title (57) | `Find us | Osteria dei Rossi, near Piazza del Campo, Siena` |
| Meta description (143) | `Via dei Rossi 79/81, inside Siena's walls: the Basilica di San Francesco is at the end of the street, Piazza del Campo about 5 minutes on foot.` |
| Open Graph title | `Find us | Osteria dei Rossi, Siena` |
| Open Graph description | `Via dei Rossi 79/81, Siena. Basilica di San Francesco at the end of the street, Piazza del Campo about 5 minutes on foot.` |
| Open Graph image | `og-dove-siamo.jpg` |
| Open Graph image alt | `The marble street plate ‘Via dei Rossi’ on a stone wall in Siena` |
| Twitter image | `og-dove-siamo.jpg` |
| H1 | `Find us: Via dei Rossi 79/81, Siena` |
| Canonical | `https://www.osteriadeirossi.it/en/find-us/` |
| hreflang it | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang en | `https://www.osteriadeirossi.it/en/find-us/` |

---

## A. Alt text, second photo set and the gallery

Rules as in `seo.md` section 3: describe what the picture shows, 125 characters or fewer, no "foto di" or "photo of", no keyword lists, quotation marks never straight double quotes. Dishes are named as the founder's captions name them (spelling corrected); the picture description comes from `photos-2026-11-25.md`. All are 3:2 tiles. The build should assert 125 or fewer.

| # | File slug | Alt, Italian (chars) | Alt, English (chars) |
|---|---|---|---|
| 21 | `filetto-al-tartufo-fresco` | Filetto al tartufo fresco: filetto di manzo alla griglia coperto di tartufo a scaglie, con insalata accanto (107) | Filetto al tartufo fresco: grilled beef fillet covered with shaved fresh truffle, with salad beside it (102) |
| 22 | `crostoni-tartufo-e-formaggio-pere-miele` | Due crostoni: uno con formaggio fuso, fette di pera e miele, l'altro con formaggio e tartufo a scaglie (102) | Two crostoni: one with melted cheese, pear slices and honey, the other with cheese and shaved truffle (101) |
| 23 | `cantucci-e-vin-santo` | Cantucci e Vin Santo: una mano intinge un cantuccio in un bicchierino di Vin Santo, altri cantucci sul piatto (109) | Cantucci e Vin Santo: a hand dipping a cantuccio into a small glass of Vin Santo, more cantucci on the plate (108) |
| 24 | `pici-al-ragu-di-cinghiale` | Pici al ragù di cinghiale: un piatto di pici con un ragù di carne scuro (71) | Pici al ragù di cinghiale: a plate of pici with a dark meat ragù (64) |
| 25 | `pici-cacio-e-pepe` | Pici cacio e pepe: un piatto di pici con formaggio e pepe nero (62) | Pici cacio e pepe: a plate of pici with cheese and black pepper (63) |
| 26 | `porcini-freschi-grigliati` | Porcini freschi grigliati: un cappello di porcino con i gambi alla griglia e prezzemolo (87) | Porcini freschi grigliati: a grilled porcino cap with grilled stems and parsley (79) |
| 27 | `porcini-freschi` | Porcini freschi: funghi porcini interi su un piatto, con rosmarino (66) | Porcini freschi: whole fresh porcini mushrooms on a plate with rosemary (71) |
| 28 | `porcini-fritti` | Porcini fritti serviti come contorno: fette di porcino fritte su carta gialla (77) | Porcini fritti served as a side dish: slices of fried porcino on yellow paper (77) |
| 29 | `spaghetti-dell-osteria-sugo-e-gorgonzola` | Spaghetti dell'osteria con sugo e gorgonzola: spaghetti in un sugo rosso-arancio (80) | Spaghetti dell'osteria with tomato sauce and gorgonzola: spaghetti in an orange-red sauce (89) |
| 30 | `tagliatelle-ai-porcini-freschi-1` | Tagliatelle ai porcini freschi con prezzemolo, viste un po' da lontano (70) | Tagliatelle ai porcini freschi with parsley, seen from a little further away (76) |
| 31 | `tagliatelle-ai-porcini-freschi` | Primo piano delle tagliatelle ai porcini freschi, con i porcini e il prezzemolo (79) | Close-up of the tagliatelle ai porcini freschi, with porcini and parsley (72) |
| 32 | `tagliatelle-al-ragu-di-cinta` | Tagliatelle al ragù di Cinta: tagliatelle con un ragù chiaro di carne macinata (78) | Tagliatelle al ragù di Cinta: tagliatelle with a pale minced-meat ragù (70) |
| 33 | `tagliatelle-al-ragu` | Tagliatelle al ragù: tagliatelle con un ragù di carne rosso (59) | Tagliatelle al ragù: tagliatelle with a red meat ragù (53) |
| 34 | `tagliatelle-al-tartufo-fresco` | Tagliatelle al tartufo fresco: tagliatelle coperte di tartufo a scaglie (71) | Tagliatelle al tartufo fresco: tagliatelle covered with shaved fresh truffle (76) |

Notes.
- Photos 24 and 32 to 34 show dishes that are not on the live menu of 2026-11-24 (pici al ragù di cinghiale, the tagliatelle al ragù di Cinta, the tagliatelle al ragù); the alt names them as the founder does and carries no price. Photos 26, 28 and 21 likewise (grilled and fried porcini, the fillet with truffle as a photo caption).
- Photo 29: the profile says "with tomato sauce and gorgonzola"; the alt follows it.
- Photo 31 and 30 are two views of one dish; the alts differ so that they are not duplicates.

**Gallery of "La casa" (`#casa`), version 3.** The four photos keep the alt texts already published in `seo.md` section 3 (rows 4, 13, 9 and 6); they were re-read against the new, large use (a 4:5 arch frame, about 600 by 750 px on desktop) and are right as they are: they describe what the picture shows, they do not repeat the caption, and they stay within 125 characters. **No override row is added**, so the generator keeps reading them from `seo.md`. They are repeated here so the builder can check the gallery in one place; the visible captions are `copy.md`'s, the alt is never a copy of the caption.

| Order | File slug | `seo.md` row | Alt, Italian | Alt, English |
|---|---|---|---|---|
| G1 | `sala-bancone-vista-cucina` | 4 | La sala verso il bancone: arco in mattoni, mensole con bottiglie, bandierine, tavoli e sedie in legno | The room towards the counter: brick arch, shelves of bottles, small flags, wooden tables and chairs |
| G2 | `lanterna-ferro-battuto` | 13 | Lanterna in ferro battuto su una mensola a volute, davanti a una parete gialla e a pannelli di legno | Wrought-iron lantern on a scrolled bracket against a yellow wall, with wood panelling behind |
| G3 | `fotografie-storiche-siena-contrada` | 9 | Parete gialla con fotografie in bianco e nero incorniciate: un uomo in costume storico e armatura in una strada di Siena | Yellow wall with framed black-and-white photographs, including a man in historic costume and armour in a Siena street |
| G4 | `amaro-al-bancone` | 6 | Bottiglia di amaro avvolta nella carta sul bancone di legno e due bicchierini tenuti in mano | A paper-wrapped bottle of amaro on the wooden counter and two small glasses held in two hands |

Rules the gallery must respect (details in section 8):
1. All four photos are real `<img>` (or `<picture>`) in the HTML, in source order, with `alt`, `width` and `height`; never CSS backgrounds, never inserted by script.
2. Slides stack in one sticky frame and change by `opacity` and `transform`; inactive slides are not `display:none` and not `hidden`.
3. The h2, the paragraphs and the captions are HTML text outside the script; no content is reachable only by scroll position.
4. Without JavaScript, with reduced motion and in print, the gallery is a vertical stack of figures with all four alts.
5. No hash and no URL change per slide, no extra indexable URL.
6. `sizes` is the real displayed width of the frame; never serve the 2048 px file to phones; the photos are 3:2 or 4:5 originals cropped with `object-fit`, never stretched.

---

## Q. Questions and answers per page

The visible `<details>` blocks and the FAQPage markup are identical: the generator renders the visible questions from the JSON block under each heading, so there is no separate prose list. Answers are 30 to 60 words. Where a version 1 answer was shorter than 30 words, its original wording is kept and a sentence taken from the profile is added at the end. Block ids: the questions sit under `id="domande"` on each page. The Home pages carry no FAQPage. No answer says anything the profile does not say. Version 3 check: none of the answers below refers to the home page, to prices on it or to a dish list on it; Q.1 to Q.6 are unchanged from version 2.

### Q.1 Dove siamo, Italian

Version 1 questions 1, 2, 3, 6 and 7. No link target is inside an answer, so no wording had to change for links. Rests on: Place and story (address, contrada, Piazza del Campo, Basilica, car park, ZTL, photos for the outdoor tables); Offer (hours, booking channel).

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/dove-siamo/#domande",
  "url": "https://www.osteriadeirossi.it/dove-siamo/#domande",
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
        "text": "Si prenota per telefono allo +39 0577 287592 o su WhatsApp allo stesso numero; il pulsante Prenota del sito offre entrambe le possibilità. Gli orari possono cambiare, quindi conviene chiamare per conferma."
      }
    },
    {
      "@type": "Question",
      "name": "Ci sono tavoli all'aperto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, davanti all'ingresso ci sono tavoli sulla strada, con ombrelloni color crema. L'ingresso è in Via dei Rossi 79/81, a Siena, dentro le mura. Per prenotare chiamate lo +39 0577 287592 o scrivete su WhatsApp allo stesso numero."
      }
    },
    {
      "@type": "Question",
      "name": "Dove si parcheggia? Si può arrivare in auto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tutto il centro dentro le mura è a traffico limitato (ZTL), quindi controllate le regole prima di entrare in auto. Il parcheggio San Francesco, in Via Baldassarre Peruzzi, è collegato al centro da scale mobili."
      }
    }
  ]
}
```

### Q.2 Find us, English

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/en/find-us/#domande",
  "url": "https://www.osteriadeirossi.it/en/find-us/#domande",
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
        "text": "You can book by phone on +39 0577 287592 or on WhatsApp on the same number; the Book a table button on this site offers both. Hours can change, so it is best to call to confirm."
      }
    },
    {
      "@type": "Question",
      "name": "Are there outdoor tables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there are tables on the street outside the door, under cream parasols. The entrance is at Via dei Rossi 79/81 in Siena, inside the city walls. To book, call +39 0577 287592 or write on WhatsApp on the same number."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I park, and can I arrive by car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The whole walled centre is a limited-traffic zone (ZTL), so check the rules before driving in. The San Francesco car park, in Via Baldassarre Peruzzi, is linked to the centre by escalators."
      }
    }
  ]
}
```

### Q.3 Menu, Italian

Version 1 questions 4, 5, 8 and 9, then three new ones. Rests on: Offer (live menu flags, "in menù dal 1992", cover charge, weights per 100 g, allergens not approved); Place and story (dolceforte); Welcome, food and wine, 2026-11-25 (pici, Cinta Senese, cantucci and Vin Santo, the menu names `Pici al Ragù Bianco di Cinta Senese`, `Tegamata di Cinta Senese`, `Cantuccini e Vin Santo`). The pici answer does not say that the pici are made in house: the profile does not say so.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/menu/#domande",
  "url": "https://www.osteriadeirossi.it/menu/#domande",
  "inLanguage": "it",
  "mainEntity": [
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
        "text": "È un piatto di cinghiale con il dolceforte, una salsa agrodolce che risale alla cucina medievale. Il cioccolato che si trova nella ricetta di oggi è stato aggiunto nei secoli successivi. In menù si chiama «Cinghiale in Dolce Forte»."
      }
    },
    {
      "@type": "Question",
      "name": "Che cosa sono i pici e come li servite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I pici sono fili spessi di pasta arrotolati a mano, fatti con farina e acqua e tipici della zona di Siena. In menù li trovate al ragù bianco di cinta senese, al ragù tradizionale di anatra e cacio e pepe."
      }
    },
    {
      "@type": "Question",
      "name": "Che cos'è la cinta senese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La cinta senese è la razza di maiale originaria delle colline senesi, scura con una fascia bianca, la «cinta», attorno alle spalle. È dipinta nell'affresco di Ambrogio Lorenzetti del 1338-39 nel Palazzo Pubblico di Siena e ha la denominazione di origine protetta (DOP). In menù la trovate nei pici al ragù bianco, nella tegamata e nei salumi del Tagliere del Cacciatore."
      }
    },
    {
      "@type": "Question",
      "name": "Che cosa sono i cantucci con il Vin Santo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I cantucci sono biscotti toscani alle mandorle; la tradizione vuole che si intingano nel Vin Santo, il vino dolce da dessert toscano, per chiudere il pasto. All'osteria si servono cantucci e Vin Santo, in menù tra i dolci."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto costa il coperto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il coperto è di 2,50 € a persona. Le bistecche si pagano a peso, al prezzo per 100 g indicato nel menù. Il peso si concorda al tavolo con il cameriere."
      }
    },
    {
      "@type": "Question",
      "name": "Come funzionano allergeni e intolleranze?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chiedete al personale prima di ordinare: l'elenco degli allergeni di ogni piatto è in corso di conferma e non è ancora pubblicato sul sito. Non sarà pubblicato prima della conferma dello chef."
      }
    }
  ]
}
```

### Q.4 Menu, English

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/en/menu/#domande",
  "url": "https://www.osteriadeirossi.it/en/menu/#domande",
  "inLanguage": "en",
  "mainEntity": [
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
        "text": "It is a wild boar dish with dolceforte, a sweet-and-sour sauce that goes back to medieval cooking. The chocolate in today's recipe was added in later centuries. The dish is on the menu as Cinghiale in Dolce Forte."
      }
    },
    {
      "@type": "Question",
      "name": "What are pici, and how do you serve them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pici are thick, hand-rolled strands of pasta made from flour and water, typical of the Siena area. On the menu you will find them with white Cinta Senese ragù, with traditional duck ragù, and cacio e pepe."
      }
    },
    {
      "@type": "Question",
      "name": "What is Cinta Senese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cinta Senese is the native pig breed of the Siena hills, dark with a white band, the ‘cinta’, around its shoulders. It is painted in Ambrogio Lorenzetti's fresco of 1338–39 in Siena's Palazzo Pubblico and has protected-origin (DOP) status. On the menu it appears in the pici with white ragù, in the tegamata and in the cured meats of the Tagliere del Cacciatore."
      }
    },
    {
      "@type": "Question",
      "name": "What are cantucci and Vin Santo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cantucci are Tuscan almond biscuits; the tradition is to dip them in Vin Santo, the sweet Tuscan dessert wine, to end the meal. The osteria serves cantucci and Vin Santo, listed among the desserts."
      }
    },
    {
      "@type": "Question",
      "name": "How much is the cover charge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cover charge is 2.50 € per person. Steaks are sold by weight, at the price per 100 g shown on the menu. The weight is agreed at the table with the waiter."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle allergens and intolerances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please ask the staff before ordering: the allergen list for each dish is being confirmed and is not yet published on this site. It will not be published before the chef confirms it."
      }
    }
  ]
}
```

### Q.5 Wine list, Italian

Version 1 question 10, rewritten for the wine list, plus one new question. Rests on: Welcome, food and wine (the three great reds of the Siena area, "plus Bolgheri, other Tuscan reds, whites and sparkling wines"); the wine-list JSON (other groups, producers); Offer, "Wines on the live menu" (by the glass, Vino l'Osteria). The producers named in the second answer are the ones in the JSON that the founder has not queried; the three readings still waiting for proofreading ("Chianti Domasco DOC", "Bolgheri Bianco Papero", "Poggio Canzano") are not used. No prices.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/vini/#domande",
  "url": "https://www.osteriadeirossi.it/vini/#domande",
  "inLanguage": "it",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Che vini ci sono nella carta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La carta comprende i tre grandi rossi della zona di Siena: Chianti Classico (il Gallo Nero), Vino Nobile di Montepulciano e Brunello di Montalcino. Poi Bolgheri, altri rossi, bianchi, rosé e bollicine. Al calice ci sono rossi e bianchi, in bottiglia anche il Vino l'Osteria. I prezzi non sono pubblicati online."
      }
    },
    {
      "@type": "Question",
      "name": "Quali vini della zona di Siena ci sono in carta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sono in carta i tre grandi rossi della zona di Siena. Ci sono il Chianti Classico di Selvolini (Gallo Nero) e quelli di Lamole di Lamole, più il Chianti Colli Senesi La Foresta. Per Montepulciano ci sono Rosso e Nobile di Guidotti e di Poggio alla Sala; per Montalcino Rosso e Brunello di Caparzo e di Camigliano."
      }
    }
  ]
}
```

### Q.6 Wine list, English

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.osteriadeirossi.it/en/wine-list/#domande",
  "url": "https://www.osteriadeirossi.it/en/wine-list/#domande",
  "inLanguage": "en",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What wines are on the wine list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The wine list includes the three great reds of the Siena area: Chianti Classico (the Gallo Nero), Vino Nobile di Montepulciano and Brunello di Montalcino. It also has Bolgheri, other reds, whites, rosé and sparkling wines. By the glass there are reds and whites, and by the bottle there is also Vino l'Osteria. Prices are not published online."
      }
    },
    {
      "@type": "Question",
      "name": "Which wines of the Siena area are on the list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The three great reds of the Siena area are all on the list. There is Chianti Classico from Selvolini (Gallo Nero) and from Lamole di Lamole, plus Chianti Colli Senesi La Foresta. For Montepulciano there are Rosso and Nobile from Guidotti and from Poggio alla Sala; for Montalcino, Rosso and Brunello from Caparzo and from Camigliano."
      }
    }
  ]
}
```

---

## J. JSON-LD for the pages

Rules as in `seo.md` section 6: values from the profile only; no `aggregateRating`, no `review`, no `priceRange`, no geo, no email, no allergens, no wine prices, no `ReserveAction` (there is no online booking; a `tel:` target is not a reservation action). **No price, `Offer`, `MenuItem` or `Menu` node on the home page.** `@id`s are stable: `https://www.osteriadeirossi.it/#restaurant`, `…/#website`, `…/en/#website`, and the new `…/#webpage`, `…/en/#webpage`, `…/#primaryimage`, `…/en/#primaryimage`, `…/vini/#webpage`, `…/en/wine-list/#webpage`, `…/menu/#webpage`, `…/en/menu/#webpage`. The Restaurant node is identical on the Italian and the English home page. The Restaurant entity lives only on the home pages; the other pages point to it by `@id`. The founder (Giuseppe «Beppe» Carrieri) is not marked up (section 9).

### J.1 Home, Italian

Changes from version 2: `Restaurant.image` gains the room photo (`sala-bancone-vista-cucina`); new `WebPage` node (`about` the Restaurant, `primaryImageOfPage` the room photo) and one `ImageObject` for that photo, with the caption identical to its alt text (`seo.md` row 4). The gallery's other photos are not marked up: image indexing reads the HTML. Everything else as in version 2: no price anywhere in the block.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.osteriadeirossi.it/#website",
      "url": "https://www.osteriadeirossi.it/",
      "name": "Osteria dei Rossi",
      "description": "Osteria a Siena, dentro le mura, in Via dei Rossi 79/81.",
      "inLanguage": "it",
      "publisher": { "@id": "https://www.osteriadeirossi.it/#restaurant" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/#webpage",
      "url": "https://www.osteriadeirossi.it/",
      "name": "Osteria dei Rossi: osteria a Siena",
      "inLanguage": "it",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "primaryImageOfPage": { "@id": "https://www.osteriadeirossi.it/#primaryimage" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.osteriadeirossi.it/#primaryimage",
      "url": "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
      "contentUrl": "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
      "width": 960,
      "height": 640,
      "caption": "La sala verso il bancone: arco in mattoni, mensole con bottiglie, bandierine, tavoli e sedie in legno",
      "inLanguage": "it"
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.osteriadeirossi.it/#restaurant",
      "name": "Osteria dei Rossi",
      "url": "https://www.osteriadeirossi.it/",
      "description": "Osteria a Siena, dentro le mura, in Via dei Rossi 79/81, nella Contrada del Bruco, aperta nel 1992. Cucina senese e toscana, pici, cinghiale in dolceforte, Cinta Senese, tartufo e bistecche alla griglia.",
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
        "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
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
      "hasMenu": [
        "https://www.osteriadeirossi.it/menu/",
        "https://www.osteriadeirossi.it/vini/"
      ],
      "sameAs": [
        "https://www.instagram.com/osteriadeirossi/",
        "https://www.facebook.com/osteriadeirossi"
      ],
      "foundingDate": "1992"
    }
  ]
}
```

### J.2 Home, English

The Restaurant node is the one of J.1, word for word (same `@id`, same Italian `url` and `description`, same `image` list, same Italian `hasMenu` URLs). The WebSite, WebPage and ImageObject nodes are English and have their own `@id`s (`/en/#webpage`, `/en/#primaryimage`); the image file is the same.

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
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/en/#webpage",
      "url": "https://www.osteriadeirossi.it/en/",
      "name": "Osteria dei Rossi: an osteria in Siena",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/en/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "primaryImageOfPage": { "@id": "https://www.osteriadeirossi.it/en/#primaryimage" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.osteriadeirossi.it/en/#primaryimage",
      "url": "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
      "contentUrl": "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
      "width": 960,
      "height": 640,
      "caption": "The room towards the counter: brick arch, shelves of bottles, small flags, wooden tables and chairs",
      "inLanguage": "en"
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.osteriadeirossi.it/#restaurant",
      "name": "Osteria dei Rossi",
      "url": "https://www.osteriadeirossi.it/",
      "description": "Osteria a Siena, dentro le mura, in Via dei Rossi 79/81, nella Contrada del Bruco, aperta nel 1992. Cucina senese e toscana, pici, cinghiale in dolceforte, Cinta Senese, tartufo e bistecche alla griglia.",
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
        "https://www.osteriadeirossi.it/assets/img/sala-bancone-vista-cucina-960.jpg",
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
      "hasMenu": [
        "https://www.osteriadeirossi.it/menu/",
        "https://www.osteriadeirossi.it/vini/"
      ],
      "sameAs": [
        "https://www.instagram.com/osteriadeirossi/",
        "https://www.facebook.com/osteriadeirossi"
      ],
      "foundingDate": "1992"
    }
  ]
}
```

### J.3 Wine list, Italian

Changed from version 2: the hand-written block is now a graph with a `WebPage` (new) and the BreadcrumbList (given an `@id` so the WebPage can point to it). Optional, generated by the builder from `wine-list-2026-11-25.json` and added to the same page as a second `application/ld+json` block: a `Menu` (`@id` `https://www.osteriadeirossi.it/vini/#menu`, `inLanguage` `it`) with one `MenuSection` per group (`Vini rossi`, `Vini bianchi`, `Rosé e bollicine`) and one `MenuItem` per wine carrying only its `name` (wine name, then the producer after a comma when there is one). No `offers`, no `price`, no description. If the builder skips it, nothing else changes. The unproofread readings (entries marked `"proofread": false` in the JSON) stay out of the generated block until the founder confirms them; they show in the visible list only.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/vini/#webpage",
      "url": "https://www.osteriadeirossi.it/vini/",
      "name": "Carta dei vini",
      "inLanguage": "it",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "breadcrumb": { "@id": "https://www.osteriadeirossi.it/vini/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.osteriadeirossi.it/vini/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/" },
        { "@type": "ListItem", "position": 2, "name": "Carta dei vini", "item": "https://www.osteriadeirossi.it/vini/" }
      ]
    }
  ]
}
```

### J.4 Wine list, English

Same changes as J.3. Same optional generated `Menu` (`@id` `https://www.osteriadeirossi.it/en/wine-list/#menu`, `inLanguage` `en`, group names `Red wines`, `White wines`, `Rosé and sparkling`, area names from the JSON `en` fields, names only).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/en/wine-list/#webpage",
      "url": "https://www.osteriadeirossi.it/en/wine-list/",
      "name": "Wine list",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/en/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "breadcrumb": { "@id": "https://www.osteriadeirossi.it/en/wine-list/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.osteriadeirossi.it/en/wine-list/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/en/" },
        { "@type": "ListItem", "position": 2, "name": "Wine list", "item": "https://www.osteriadeirossi.it/en/wine-list/" }
      ]
    }
  ]
}
```

### J.5 Dove siamo, Italian

A WebPage that points to the Restaurant by `@id` (the entity itself is defined on the home page), plus the BreadcrumbList. Unchanged from version 2.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/dove-siamo/#webpage",
      "url": "https://www.osteriadeirossi.it/dove-siamo/",
      "name": "Dove siamo",
      "inLanguage": "it",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "breadcrumb": { "@id": "https://www.osteriadeirossi.it/dove-siamo/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.osteriadeirossi.it/dove-siamo/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/" },
        { "@type": "ListItem", "position": 2, "name": "Dove siamo", "item": "https://www.osteriadeirossi.it/dove-siamo/" }
      ]
    }
  ]
}
```

### J.6 Find us, English

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.osteriadeirossi.it/en/find-us/#webpage",
      "url": "https://www.osteriadeirossi.it/en/find-us/",
      "name": "Find us",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.osteriadeirossi.it/en/#website" },
      "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" },
      "breadcrumb": { "@id": "https://www.osteriadeirossi.it/en/find-us/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.osteriadeirossi.it/en/find-us/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/en/" },
        { "@type": "ListItem", "position": 2, "name": "Find us", "item": "https://www.osteriadeirossi.it/en/find-us/" }
      ]
    }
  ]
}
```

### J.7 Menu, Italian: WebPage (new)

Added to the Menu page as one more `application/ld+json` script, next to the generated Menu markup, its BreadcrumbList (from `seo.md` 6.5) and the FAQPage Q.3. It has no `breadcrumb` property because the generated breadcrumb has no agreed `@id`. The generator does not read this heading yet (section 8, new blocks).

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.osteriadeirossi.it/menu/#webpage",
  "url": "https://www.osteriadeirossi.it/menu/",
  "name": "Il menù",
  "inLanguage": "it",
  "isPartOf": { "@id": "https://www.osteriadeirossi.it/#website" },
  "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" }
}
```

### J.8 Menu, English: WebPage (new)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.osteriadeirossi.it/en/menu/#webpage",
  "url": "https://www.osteriadeirossi.it/en/menu/",
  "name": "Menu",
  "inLanguage": "en",
  "isPartOf": { "@id": "https://www.osteriadeirossi.it/en/#website" },
  "about": { "@id": "https://www.osteriadeirossi.it/#restaurant" }
}
```

The Menu pages keep the Menu and BreadcrumbList blocks of `seo.md` 6.5 and 6.6 (generated files in `assets/menu/`), and also carry the FAQPage blocks Q.3 and Q.4 and the WebPage blocks J.7 and J.8 as separate `application/ld+json` scripts. The drinks section of the Menu markup keeps its prices (it is the menu); only the wine-list page has none, and the home page has no price in any block.

---

## S. Sitemap and robots.txt

### S.1 /sitemap.xml

Full replacement of `seo.md` 7.2: ten URLs, each with the language twin and `x-default` (the Italian URL). `lastmod` is 2026-11-26, the date of the version 3 content for every page (the home pages, the menu, the wine list and Dove siamo change; the privacy text keeps the share image of the home page). Later builds set `lastmod` from the real date of each page's last content change, never "today" automatically.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.osteriadeirossi.it/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/menu/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/menu/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/vini/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/vini/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/wine-list/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/vini/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/wine-list/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/vini/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/wine-list/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/vini/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/dove-siamo/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/dove-siamo/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/find-us/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/dove-siamo/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/find-us/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/dove-siamo/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/find-us/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/dove-siamo/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/privacy/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/privacy/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/privacy/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/privacy/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/privacy/</loc>
    <lastmod>2026-11-26</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/privacy/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/privacy/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/privacy/"/>
  </url>
</urlset>
```

### S.2 /robots.txt

Unchanged from `seo.md` 7.1.

```text
User-agent: *
Allow: /

Sitemap: https://www.osteriadeirossi.it/sitemap.xml
```

---

## 7. Internal links: destination and purpose

Rules as in `seo.md` 4.1: links stay inside the language; internal links are written relative to the page they sit on; trailing slash, never `index.html`; no exact-match anchor more than twice on a page; no link to `menu.osteriadeirossi.it`; every link is a normal `<a href>`. **This table lists destination and purpose only. The visible labels (anchor texts, in Italian and English) are owned by `copy.md`; they say what is behind the link and never "clicca qui" or "click here".**

Menu dish ids: every dish on `/menu/` and `/en/menu/` has one id, the slug of the Italian dish name, the same on both languages. Slug rule: lowercase, accents removed, every run of characters that are not letters or digits becomes one hyphen (for example `cinghiale-in-dolce-forte`, `bistecca-alla-fiorentina`, `cantuccini-e-vin-santo`). The builder takes the slug from the menu data with that one function; the build fails if a slug in the table below does not exist on both language pages (the fallback in brackets is the section id).

| From | To | Purpose |
|---|---|---|
| Header, every page | `/menu/` | Prices and the whole menu |
| Header, every page | `/vini/` · `/en/wine-list/` | The wine list |
| Header, every page | `/dove-siamo/` · `/en/find-us/` | Address, how to arrive, hours |
| Header (filled booking button) and booking strip, every page | `#prenota` of the page, or call and WhatsApp in place | Book a table |
| Footer, every page | `/vini/` · `/en/wine-list/` | The wine list |
| Footer, every page | `/dove-siamo/` · `/en/find-us/` | Address and directions |
| Footer, every page | `/privacy/` · `/en/privacy/` | Privacy notice |
| Home `#porta`, hero address line | `/dove-siamo/` · `/en/find-us/` | Where it is, the 5 minutes from Piazza del Campo |
| Home `#porta`, "Come arrivare" | The Maps URL of the profile (external link) | Directions in the visitor's map app |
| Home `#porta`, phone number | `tel:+390577287592` | Call |
| Home `#perche` | none, or `#contrada` | The facts are text; at most one link to the story |
| Home `#casa`, gallery exit link | `#contrada` | Skip past the gallery to the story |
| Home `#casa`, gallery progress buttons | the four slides of the gallery | Move between photos (buttons, no URL change) |
| Home `#contrada` | `/dove-siamo/` · `/en/find-us/` | Where the contrada and the street are |
| Home `#tavola`, food index row | `#dolceforte`, `#pici`, `#cinta`, `#tartufo`, `#porcini`, `#fiorentina`, `#dolce` of the same page | Jump to the explanation of each food |
| Home `#dolceforte` | `/menu/#cinghiale-in-dolce-forte` (fallback `#secondi`) | The dish and its price on the menu |
| Home `#tavola`, "al coccio" block | the cinghiale in umido dish on `/menu/` (fallback `#secondi`) | The dish and its price |
| Home `#pici` | `/menu/#primi` | The first courses with the pici |
| Home `#cinta` | `/menu/#tegamata-di-cinta-senese` (fallback `#secondi`) | The Cinta Senese dish |
| Home `#tartufo` | the fresh-truffle dish on `/menu/` (fallback `#primi`) | The dish and its price |
| Home `#porcini` | `/menu/#tagliatelle-ai-funghi-porcini` (fallback `#primi`) | The porcini dish |
| Home `#spaghetti` | `/menu/#spaghetti-alla-chitarra-con-sugo-dell-osteria` (fallback `#primi`) | The dish "in menù dal 1992" |
| Home `#taglieri` | the tagliere dish on `/menu/` (fallback `#antipasti`) | The boards and their prices |
| Home `#fiorentina` | `/menu/#bistecca-alla-fiorentina` (fallback `#griglia`) | Price per 100 g and the by-weight rule |
| Home `#dolce` | `/menu/#cantuccini-e-vin-santo` (fallback `#dolci`) | The dessert on the menu |
| Home `#cantina`, button | `/vini/` · `/en/wine-list/` | The wine list |
| Home `#prenota` | `/dove-siamo/` · `/en/find-us/` | Where we are and how to get here |
| Menu, intro | `/#pici` · `/en/#pici` and `/#dispensa` · `/en/#dispensa` | The pici and the Cinta Senese explained |
| Menu, "Bevande" | `/vini/` · `/en/wine-list/` | The wine list |
| Menu, notes and booking block | `/dove-siamo/` · `/en/find-us/` | Hours, address and getting here |
| Menu FAQ block (line under it) | `/#pici` · `/en/#pici` | The pici explained at length |
| Wine list, intro or notes | `/menu/` · `/en/menu/` | The menu with prices |
| Wine list, notes | `/menu/#bevande` · `/en/menu/#bevande` | Wines by the glass and other drinks |
| Wine list, intro | `/#cantina` · `/en/#cantina` | The cellar and the grotto behind the list |
| Wine list, booking block | `/dove-siamo/` · `/en/find-us/` | Where we are |
| Dove siamo, hero | Maps URL (external), `tel:`, WhatsApp | Directions, call, message |
| Dove siamo, closing block | `/` · `/en/` | The story of the osteria |
| Dove siamo, closing block | `/#contrada` · `/en/#contrada` | The contrada and the street |
| Dove siamo, closing block | `/menu/` · `/en/menu/` | The menu with prices |
| Dove siamo, closing block | `/vini/` · `/en/wine-list/` | The wine list |
| Language switch, every page | the twin page, keeping the current `#anchor` | Change language without losing the place (`/menu/#primi` ⇄ `/en/menu/#primi`) |

The menu section ids are the Italian ones on both language pages (`antipasti`, `primi`, `secondi`, `griglia`, `contorni`, `dolci`, `bevande`, `coperto`, `prenota`). The language switcher on the inner pages links to the twin: `/vini/` ⇄ `/en/wine-list/`, `/dove-siamo/` ⇄ `/en/find-us/`. Every page is within two clicks of Home.

Superseded rows of `seo.md` 4.2: "#cantina, wines → `/menu/#bevande`", "Menu, above Drinks → `/#cantina`" (now to the wine list), "Menu, closing block → `/#prenota`" and "→ `/#domande`" (the menu has its own `#prenota` and `#domande`), and the Home FAQ rows. Superseded rows of `seo-v2.md` section 7: all of them (replaced by the table above).

---

## 8. Notes for the builder

1. **Superseded in `seo.md`:** 1.1 and 1.2 (home keyword maps); 2.1 and 2.2 title, description and Open Graph rows (P.1, P.2); the home heading tables and the `#domande` stop of 2.1 and 2.2; section 5 (the ten Home questions: now split over Q.1 to Q.6); 6.1 and 6.2 (J.1, J.2); 6.3 and 6.4 (the Home FAQPage, removed); 7.2 (S.1); the anchor rows at the end of section 7 above; the single default share image (`og-osteria-dei-rossi-siena.jpg`, replaced by one image per page type); and the stop ids of checklist section 8 (the Home ids are those of `design-v3.md` section 2). Everything else in `seo.md` (name rules, NAP, section 3 alt rows 1 to 20 including the four gallery photos, 6.5 and 6.6, robots, fonts and third-party rules, host redirects) stands.
2. **One `<h1>` per page**, in the HTML at first paint, never created by script or animated in, also on the pages with an opening overlay: the overlay is added over a page whose content is already in the DOM, it is `aria-hidden` and `inert` behind it, and with no JavaScript or with reduced motion it never shows. The hero text and the first photo are never faded in from `opacity:0`.
3. **No price on the home page.** No `€`, no price, no "all'etto", no dotted leader and no dish row in the visible text, in alt text, in `title` attributes, in `data-` attributes, in the JSON-LD or in the meta tags of the Home pages. The build fails if it finds one (the QA script already checks it). Dish names inside explanations are allowed; descriptions are paraphrased, not copied from the menu.
4. **Anchors that must not change.** The Home ids `porta`, `perche`, `casa`, `contrada`, `tavola`, `dolceforte`, `pici`, `dispensa`, `cinta`, `tartufo`, `porcini`, `spaghetti`, `taglieri`, `fiorentina`, `dolce`, `cantina`, `prenota` exist on both language pages (the Google Business Profile booking link uses `/#prenota`; the profile and shared links use the others). Menu: the section ids plus one id per dish (section 7). Wine list: `rossi`, `rossi-chianti`, `rossi-montepulciano`, `rossi-montalcino`, `bianchi`, `bollicine`. Dove siamo: `via`, `mappa`, `prenota`. Every heading with an id has `scroll-margin-top` for the sticky header. No SVG id may equal one of these ids (SVG ids get the prefix `svg-`; the boar drawing no longer owns `#cinghiale`). The build fails if a listed id is missing on either language.
5. **Hreflang, canonicals and URLs are unchanged from version 2:** the ten URLs, self-referencing canonicals, `it`, `en` and `x-default`, trailing slashes. No new indexable URL: the gallery, the food index and the dish ids create none (no hash or `pushState` per slide).
6. **Language switch keeps the anchor.** `/#pici` goes to `/en/#pici`, `/menu/#primi` to `/en/menu/#primi`; the same on the inner pages. A page opened with a hash skips the gate, the book and the pour.
7. **The gallery must be indexable.** The four figures (section A, G1 to G4) are real `<img>` or `<picture>` elements in the HTML, in this order, with `alt`, `width` and `height`; slides stack in one sticky frame and switch by `opacity` and `transform`, never `display:none`; the h2, paragraphs and captions are HTML text; photos 2 to 4 are `loading="lazy"` with `decoding="async"` but are in the DOM at first paint; `sizes` is the real width of the frame (not 2048 px to phones). Without JavaScript, with reduced motion and in print the four figures stack as large arch tiles. No hash or URL per slide, no scroll hijacking: the page scrolls natively (`position: sticky` and `IntersectionObserver`, passive listeners only); the position marks are real buttons with natural Tab order. Hash links to sections below the gallery land on the right heading (the spacer must not offset them).
8. **Core Web Vitals rules** (Lighthouse mobile 95 or more on the eight indexable pages above privacy, first visit and repeat visit; CLS under 0.1): LCP is the Home hero, the only preloaded image (`rel="preload" as="image" fetchpriority="high"`; no new preloads); the gate overlay never delays the h1 or the hero paint. Layout: every image has `width` and `height` or a fixed `aspect-ratio`; the gallery stage has a fixed height (`100svh` or aspect-ratio) and its scroll space is set in CSS, not JS; fonts are preloaded as before. INP: animate only `transform` and `opacity`; no `scroll` handler that reads layout; few `will-change` elements; no long task on load. Icons: inline SVG, `aria-hidden`, reused with `<use>` where possible, no icon font. Weight: each gallery AVIF at most about 150 KB at the served size; added CSS about 8 KB and script about 6 KB at most; no library. Page transitions: cross-document View Transitions as a progressive enhancement, under 300 ms, skipped on hash links and on the language switch, never fading in the LCP element.
9. **Share previews.** Create `og-home.jpg`, `og-menu.jpg`, `og-vini.jpg` and `og-dove-siamo.jpg` in `/assets/img/` (1200×630 JPEG, each under about 300 KB, from the photos named in section 2, no text, no price). Write `og:image` (absolute URL), `og:image:alt`, `og:image:width`, `og:image:height`, `og:image:type` and `twitter:image` from the three new rows of each page spec; the Italian and English twins share the file. Privacy pages use `og-home.jpg` and its Italian or English alt of P.1 or P.2. Twitter card type stays `summary_large_image`. Test by sharing each URL in WhatsApp.
10. **Wine list outline:** `h1` (`La carta dei vini`); `h2` for the three groups (`Vini rossi`, `Vini bianchi`, `Rosé e bollicine`); `h3` for the seven areas inside the reds; a final `h2` for the questions (`Domande sul vino`) with the questions as `<details>` and `<summary>` (the summary is not a heading); the booking block `#prenota` closes the page. No price anywhere, not in alt, title attributes, `data-` attributes or markup.
11. **Dove siamo outline:** `h1`; `h2` for the street (`#via`), the map (`#mappa`), hours and booking (`#prenota`) and the questions (`#domande`); `h3` for the two blocks beside the map ("A piedi" / "In auto"; "On foot" / "By car"). The address, the directions and the car-park text are real HTML text, never only inside the SVG map. A text link to the Google Maps URL sits right above the map; the map itself is a drawing, not a link and not an embed. The first screen carries the address, Come arrivare, Chiama, WhatsApp and one line of days and hours.
12. **Home outline:** as in P.1. No FAQ block and no `#domande` on the Home. The Menu page ends with `h2` `Domande sul menù` before `#prenota`; each dish name on the Menu is an `h3` with its id.
13. **Images of the second set** are 3:2 (JPEG fallback 720×480, AVIF 480, 720, 960, 1280, 1600). Write `width="720" height="480"` and CSS `aspect-ratio: 3 / 2`. `sizes` are checked against the real layout of version 3. Every image outside the first viewport of a phone is `loading="lazy"` and `decoding="async"`; do not lazy-load anything inside it.
14. **Alt text:** rows 21 to 34 of section A, rows 1 to 20 of `seo.md` section 3 (the four gallery photos are rows 4, 13, 9 and 6; no override), and the decorative drawings with empty `alt` or `aria-hidden`. Alt is never a copy of the visible caption.
15. **FAQ markup:** each Q block is the single source. Render the `<details>` from it and emit it again as the `FAQPage` script, so the text cannot drift. Menu gets Q.3 or Q.4, the wine list Q.5 or Q.6, Dove siamo Q.1 or Q.2. Validate all JSON blocks with the Schema.org validator after the build.
16. **Home JSON-LD:** the Restaurant node exists only on the two home pages; the other pages reference `#restaurant` by `@id`. Confirm that the wine-list URL inside `hasMenu` is live before the Home goes out.
17. **Host redirects** (all 301, as in version 2): `/vini`, `/en/wine-list`, `/dove-siamo`, `/en/find-us` to the same URL with a trailing slash.
18. **Local SEO, no change in version 3:** the Google Business Profile website link stays `https://www.osteriadeirossi.it/`, the menu link `/menu/` (never the home page), the booking link `/#prenota`. No price in the GBP description. After launch: submit the new sitemap in Search Console, request indexing of `/` and `/menu/`, and watch that dish-name queries land on `/menu/`.

**New table rows the generator must learn to read** (it reads none of them today; the first three are in every page spec P.1 to P.8):
- `Open Graph image` (file name under `/assets/img/`), `Open Graph image alt`, `Twitter image`. Read with `table_value`, which matches the label as a prefix: read `Open Graph image` before `Open Graph image alt` or match the label exactly, because the first is a prefix of the second.
- The privacy pages take the home values (`og-home.jpg` and the P.1 or P.2 alt).
- New blocks: `### J.7` and `### J.8` (Menu WebPage, `json`), to be added to `LD[('menu', lang)]`. `J.3` and `J.4` are now a `@graph` with a WebPage and a BreadcrumbList (the generator emits them as they are).
- Section A: the gallery table (rows `G1` to `G4`) is for checking only; the generator reads alts for those four photos from `seo.md` and must not read the `G` rows (they do not match the numeric row pattern, so nothing changes).

---

## 9. Facts needed that the profile does not have

None of these is invented in this file.

1. **Wine bar or enoteca.** Is there any service that would justify "enoteca" or "wine bar" (wines to take away, tastings, glasses without a meal)? Until the founder says so, the words are not used.
2. **The wine list's three open readings** ("Chianti Domasco DOC", "Bolgheri Bianco Papero", the producer "Poggio Canzano") and the lead's heading "Rosé e bollicine". The FAQ answers avoid them; the generated wine-list page shows them as they are in the JSON; the generated `Menu` block leaves them out until the founder proofreads.
3. **Where the printed wine prices are seen.** The wine-list page says: "I prezzi sono sulla carta dei vini dell’osteria: chiedetela al personale." / "Prices are on the osteria’s printed wine list: ask our staff for it." The profile does not say that guests ask staff for the printed list. The founder should confirm it. No price appears on the page.
4. **Truffle wording.** The home page `#tartufo` and the founder's caption say "tartufo fresco, tutto l’anno"; the menu dish is "Tagliatelle al Tartufo di Stagione". Confirm that both can stand together, or choose one. Until then the home copy must not combine the two in one sentence.
5. **The gran tagliere.** Is the gran tagliere photo the Tagliere del Cacciatore of the menu? The `#taglieri` block and the link to the menu depend on it.
6. **Pici al ragù di cinghiale.** The profile and the founder's photo caption say pici al ragù di cinghiale; the live menu lists tagliatelle al ragù di cinghiale. The home page may name the pici dish; confirm whether it is a menu dish before any link to it.
7. **WhatsApp on the landline.** The profile says the booking channel is WhatsApp on +39 0577 287592; confirm the number answers WhatsApp (the prefilled message depends on it). No reply time is promised anywhere.
8. **Larger originals for the gallery:** the lantern, the wall photographs and the amaro photo (the files are small for a frame of about 600 by 750 px). The alt texts stand either way.
9. **Walking time from the San Francesco car park, ZTL hours, permits and Palio-day access.** The "By car" block says only what the profile says (car park, escalators, ZTL, "check the rules"). No tariff. Palio-day and holiday opening hours are also unknown.
10. **Distances.** The only approved distance is "Piazza del Campo about 5 minutes on foot". No metres, no walking time to the Basilica (it is "at the end of the street").
11. **In-house making.** Whether the pici, pasta and desserts are made in house is not in the profile: no "fatti in casa" anywhere.
12. **Cinghiale in dolceforte and chocolate.** Whether the osteria's own recipe contains chocolate (the answer says only what the profile says about the recipe's history).
13. **Porcini and other seasons.** No months are stated; the live menu flags `Tagliatelle ai Funghi Porcini` as a seasonal dish and nothing more. Outdoor tables: months, number, and whether one can be requested.
14. **The wine by the glass.** Whether the carta's other wines are also poured by the glass is unknown; the answers say only "reds and whites by the glass".
15. **Naming Beppe Carrieri as `founder` in the markup.** Optional; only if the founder agrees. Not used.
16. **Search demand.** No volumes or Google.it positions exist for any phrase here; they come from Search Console after launch (`seo-offsite.md`).
17. **Launch date,** so that `lastmod` and the Search Console set-up can be dated for real (2026-11-26 is the date of this version).
