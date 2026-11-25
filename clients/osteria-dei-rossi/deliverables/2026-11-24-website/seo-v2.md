# Osteria dei Rossi: on-site SEO and GEO addendum (website version 2)

Client slug: `osteria-dei-rossi` · Date: 2026-11-25 · Author: seo-specialist · Status: for reviewer
Internal document, in English. Italian strings are for the Italian pages, British English strings for the English pages.
This is an addendum to `seo.md` (version 1). It does not rewrite it: `seo.md` stays valid for everything this file does not replace (section 8 lists what is superseded). Structure and design: `design-v2.md`. The off-site kit stays in `seo-offsite.md`.

Sources. Facts come only from `knowledge/clients/osteria-dei-rossi/profile.md` (including "Welcome, food and wine (website version 2, 2026-11-25)"), the photo catalogue `sources/photos-2026-11-25.md`, the wine list `sources/wine-list-2026-11-25.json` (names only, no prices) and the approved live menu `sources/menu-live-2026-11-24.md` (allergens not approved). No web research was done for this file. The "who answers it today" cells reuse the research of 2026-11-24 as quoted in `seo.md`; a cell that says "not run" means the research did not test the query and the intent is a judgement, not a measurement. No search volume and no Google.it position is claimed anywhere. The evidence-level warning of `seo.md` section 0 still applies.

Common to every indexable page (as in `seo.md` section 2): one self-referencing canonical, the full hreflang set (`it`, `en`, and `x-default` pointing to the Italian URL), robots `index, follow, max-image-preview:large`, Open Graph and Twitter tags, the default share image. The two hreflang rows in the tables below are the language twins; the generator adds `x-default` = the Italian URL.

---

## 1. Keyword map for version 2

Intent codes as in `seo.md` section 1: **L** local discovery, **I** information, **N** navigational, **T** ready to book or to act.
One primary and two to four secondary phrases per page. Where the brief names more intents than a page may carry as secondaries, the extra ones sit in a second table as **section-level intents**: they are answered inside one section (heading, one paragraph, a link), they never appear in the title, meta description or H1, and they are not counted.

### 1.1 Home, Italian (`/`)

The home page is now the story first, then the food explained. It no longer targets "centro storico" or "San Francesco" (those move to "Dove siamo").

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | `seo.md` 1.1: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Wanderlog, Frommer's; no restaurant-owned domain in the first results | Title, H1, meta description, hero image alt, first paragraph of `#casa` |
| Secondary | dove mangiare i pici a Siena | I, L | Not run as written. Nearest: `seo.md` 1.3 (02 Q10: travel365, Do Eat Better, La Nazione, one Sluurpy page per pici dish) and 1.4 (03: Visit Tuscany, travel365, Frommer's, Do Eat Better); no restaurant-owned page | `#pici` h2 and first paragraph; meta description ("pici") |
| Secondary | cosa sono i pici | I | Not run; judged an explainer intent served by food blogs and guides | `#pici` first paragraph (what pici are, from the profile), the four ways as dish rows |
| Secondary | cinta senese cos'è | I | Not run; judged an explainer intent served by the consortium and food guides | `#dispensa`, first larder row, h3 and the paragraph that explains the product |
| Secondary | ristorante Contrada del Bruco Siena | L, I (under-served) | `seo.md` 1.1 (02 Q16): no relevant page | `#contrada` h2 and first paragraph |
| Brand (not counted) | osteria dei rossi siena · osteria via dei rossi | N | `seo.md` 1.1: only third-party pages | Footer NAP, title, JSON-LD name, Google Business Profile |

Section-level intents (not counted, no title or H1 use):

| Keyword | Intent | Section | Page that owns the query |
|---|---|---|---|
| cantucci e vin santo | I | `#dolce` h2 and the two short paragraphs | Home (the menu only lists the dessert and its price) |
| cinghiale in dolceforte | I | `#tavola` band h3 (what the recipe is; the dish name as published) | Menu owns the dish-name query; Home explains it and links to `/menu/#secondi` |
| tartufo fresco Siena | L | `#dispensa`, truffle row (h3 and paragraph; "tartufo fresco di stagione" only, never "tutto l'anno") | Menu |
| funghi porcini Siena ristorante | L | `#dispensa`, porcini row | Menu (`Tagliatelle ai Funghi Porcini`, seasonal dish) |
| cucina medievale Siena ristorante | I, L | `#tavola` intro paragraph | Home (kept from `seo.md` 1.1) |

### 1.2 Home, English (`/en/`)

| Role | Keyword | Intent | Who answers it today (research) | Where to use it |
|---|---|---|---|---|
| Primary | osteria Siena | L | `seo.md` 1.2: Michelin (Osteria Le Logge), Afar, italia.it, Foursquare, Frommer's, Wanderlog; no osteria-owned site | Title, H1, meta description, hero alt, first paragraph of `#casa` |
| Secondary | where to eat pici in Siena | I, L | `seo.md` 1.4 (03): Visit Tuscany, travel365, Frommer's, Do Eat Better; no restaurant-owned page | `#pici` h2 and first paragraph |
| Secondary | what are pici | I | Not run; judged an explainer intent | `#pici` first paragraph |
| Secondary | what is Cinta Senese | I | Not run; judged an explainer intent | `#dispensa`, first larder row |
| Secondary | Contrada del Bruco restaurant | L, I (under-served) | `seo.md` 1.2: not tested in English; the Italian query returned no relevant page | `#contrada` |
| Brand (not counted) | osteria dei rossi siena | N | `seo.md` 1.1 | Footer, title, JSON-LD |

Section-level intents (not counted): cantucci and Vin Santo (`#dolce`); wild boar in dolceforte (`#tavola` band h3, link to `/en/menu/#secondi`); fresh truffle Siena restaurant (`#dispensa`); porcini mushrooms restaurant Siena (`#dispensa`); medieval cooking Siena restaurant (`#tavola` intro). Same ownership as in 1.1.

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
| osteria Siena, the story, the contrada | Home | none |
| What pici / Cinta Senese / cantucci and Vin Santo are, in depth | Home (`#pici`, `#dispensa`, `#dolce`) | The Menu FAQ answers the same three questions in 30 to 60 words for readers and answer engines. This is deliberate overlap inside one site; if Search Console later shows the Menu question outranking the Home section for an explainer query, keep both and strengthen the link from the Menu answer to `/#pici` |
| Dish names, prices, what to order (pici, dolceforte, tartufo, fiorentina, porcini) | Menu (`seo.md` 1.3 and 1.4 stand unchanged) | Home names a dish only with its published name and no price when the dish is not on the live menu, and links to the menu |
| The wines of the carta, the three great reds | Wine list | Home `#cantina` teaser and Menu "Bevande" only link to it |
| Address, how to arrive, car park, ZTL, near San Francesco, near Piazza del Campo, hours and booking questions | Dove siamo / Find us | Home no longer carries a map or a FAQ; it links to Dove siamo from `#contrada` and `#prenota` |

---

## 2. Page specifications

Rows are exactly as the generator expects. Counts are shown in the label for the meta title and meta description (hand-counted, then checked against the text with a character-count pattern). H1 is for information: the copywriter writes it (`copy.md` wins).

### P.1 Home, Italian

Changed from `seo.md` 2.1: title, meta description and Open Graph text (the page no longer carries "vicino a San Francesco", which belongs to "Dove siamo"; it now says what v2 is about). H1 unchanged.

| Field | Value |
|---|---|
| Meta title (57) | `Osteria dei Rossi | Osteria a Siena: pici e cucina senese` |
| Meta description (153) | `Osteria dei Rossi, Via dei Rossi 79/81, Siena: si mangia come a casa tra pici, cinghiale in dolceforte e Cinta Senese. Prenota al telefono o su WhatsApp.` |
| Open Graph title | `Osteria dei Rossi | Si mangia come a casa, a Siena` |
| Open Graph description | `Pici, cinghiale in dolceforte, Cinta Senese e tartufo in Via dei Rossi 79/81, a Siena. Prenota al telefono o su WhatsApp.` |
| H1 | `Osteria a Siena, dentro le mura` (unchanged from seo.md 2.1) |
| Canonical | `https://www.osteriadeirossi.it/` |
| hreflang it | `https://www.osteriadeirossi.it/` |
| hreflang en | `https://www.osteriadeirossi.it/en/` |

### P.2 Home, English

| Field | Value |
|---|---|
| Meta title (59) | `Osteria dei Rossi | Osteria in Siena: pici and Sienese food` |
| Meta description (145) | `Osteria dei Rossi, Via dei Rossi 79/81, Siena: eat as if at home, with pici, wild boar in dolceforte and Cinta Senese. Book by phone or WhatsApp.` |
| Open Graph title | `Osteria dei Rossi | Eat as if at home, in Siena` |
| Open Graph description | `Pici, wild boar in dolceforte, Cinta Senese and truffle at Via dei Rossi 79/81, Siena. Book by phone or WhatsApp.` |
| H1 | `An osteria in Siena, inside the walls` (unchanged from seo.md 2.2) |
| Canonical | `https://www.osteriadeirossi.it/en/` |
| hreflang it | `https://www.osteriadeirossi.it/` |
| hreflang en | `https://www.osteriadeirossi.it/en/` |

### P.3 Menu, Italian

Unchanged from `seo.md` 2.3 (values repeated). The food questions move to the end of this page (Q.3).

| Field | Value |
|---|---|
| Meta title (59) | `Menù | Osteria dei Rossi Siena: pici, cinghiale, fiorentina` |
| Meta description (154) | `Il menù di Osteria dei Rossi a Siena con prezzi: pici, ribollita, cinghiale in dolceforte, bistecche alla griglia, vini e dolci. Coperto 2,50 € a persona.` |
| Open Graph title | `Il menù di Osteria dei Rossi, Siena` |
| Open Graph description | `Antipasti, primi, secondi, griglia, dolci e vini con i prezzi. Coperto 2,50 € a persona.` |
| H1 | `Il menù dell'osteria a Siena` (unchanged from seo.md 2.3) |
| Canonical | `https://www.osteriadeirossi.it/menu/` |
| hreflang it | `https://www.osteriadeirossi.it/menu/` |
| hreflang en | `https://www.osteriadeirossi.it/en/menu/` |

### P.4 Menu, English

Unchanged from `seo.md` 2.4 (values repeated).

| Field | Value |
|---|---|
| Meta title (54) | `Menu | Osteria dei Rossi Siena: pici, wild boar, steak` |
| Meta description (151) | `The menu of Osteria dei Rossi in Siena, with prices: pici, wild boar in dolceforte, grilled steaks, wines and desserts. Cover charge 2.50 € per person.` |
| Open Graph title | `The menu at Osteria dei Rossi, Siena` |
| Open Graph description | `Starters, pasta, mains, grill, desserts and wines, with prices. Cover charge 2.50 € per person.` |
| H1 | `The osteria's menu in Siena` (unchanged from seo.md 2.4) |
| Canonical | `https://www.osteriadeirossi.it/en/menu/` |
| hreflang it | `https://www.osteriadeirossi.it/menu/` |
| hreflang en | `https://www.osteriadeirossi.it/en/menu/` |

### P.5 Wine list, Italian

New page. No prices anywhere on it.

| Field | Value |
|---|---|
| Meta title (59) | `Carta dei vini | Osteria dei Rossi Siena: Chianti, Brunello` |
| Meta description (145) | `La carta dei vini di Osteria dei Rossi, Siena: Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, bianchi, rosé e bollicine.` |
| Open Graph title | `La carta dei vini di Osteria dei Rossi, Siena` |
| Open Graph description | `Chianti Classico, Vino Nobile di Montepulciano, Brunello di Montalcino, altri rossi, bianchi, rosé e bollicine. Prezzi non pubblicati online.` |
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
| H1 | `The wine list` |
| Canonical | `https://www.osteriadeirossi.it/en/wine-list/` |
| hreflang it | `https://www.osteriadeirossi.it/vini/` |
| hreflang en | `https://www.osteriadeirossi.it/en/wine-list/` |

### P.7 Dove siamo, Italian

New page.

| Field | Value |
|---|---|
| Meta title (57) | `Osteria dei Rossi | Osteria vicino a San Francesco, Siena` |
| Meta description (151) | `Via dei Rossi 79/81, Siena, dentro le mura: la Basilica di San Francesco è in fondo alla via, Piazza del Campo a circa 5 minuti a piedi. Mappa e orari.` |
| Open Graph title | `Dove siamo | Osteria dei Rossi, Siena` |
| Open Graph description | `Via dei Rossi 79/81, Siena. Basilica di San Francesco in fondo alla via, Piazza del Campo a circa 5 minuti a piedi.` |
| H1 | `Dove siamo: Via dei Rossi 79/81, Siena` |
| Canonical | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang it | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang en | `https://www.osteriadeirossi.it/en/find-us/` |

### P.8 Find us, English

New page. The English primary is the Piazza del Campo phrase and the Italian one the San Francesco phrase on purpose: the research (`seo.md` 1.2) found generic guides on the English Campo query and no editorial page on the San Francesco one in Italian; each page carries the other phrase as a secondary.

| Field | Value |
|---|---|
| Meta title (57) | `Find us | Osteria dei Rossi, near Piazza del Campo, Siena` |
| Meta description (143) | `Via dei Rossi 79/81, inside Siena's walls: the Basilica di San Francesco is at the end of the street, Piazza del Campo about 5 minutes on foot.` |
| Open Graph title | `Find us | Osteria dei Rossi, Siena` |
| Open Graph description | `Via dei Rossi 79/81, Siena. Basilica di San Francesco at the end of the street, Piazza del Campo about 5 minutes on foot.` |
| H1 | `Find us: Via dei Rossi 79/81, Siena` |
| Canonical | `https://www.osteriadeirossi.it/en/find-us/` |
| hreflang it | `https://www.osteriadeirossi.it/dove-siamo/` |
| hreflang en | `https://www.osteriadeirossi.it/en/find-us/` |

---

## A. Alt text, second photo set

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

---

## Q. Questions and answers per page

The visible `<details>` blocks and the FAQPage markup are identical: the generator renders the visible questions from the JSON block under each heading, so there is no separate prose list. Answers are 30 to 60 words. Where a version 1 answer was shorter than 30 words, its original wording is kept and a sentence taken from the profile is added at the end. Block ids: the questions sit under `id="domande"` on each page. The Home pages carry no FAQPage any more. No answer says anything the profile does not say.

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
        "text": "I pici sono spessi filoni di pasta arrotolati a mano, fatti con farina e acqua e tipici della zona di Siena. All'osteria si servono con ragù bianco di cinta senese, ragù d'anatra, cacio e pepe e ragù di cinghiale."
      }
    },
    {
      "@type": "Question",
      "name": "Che cos'è la cinta senese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La cinta senese è la razza di maiale originaria delle colline senesi, scura con una fascia bianca, la «cinta», attorno alle spalle. È dipinta nell'affresco di Ambrogio Lorenzetti del 1338-39 nel Palazzo Pubblico di Siena e ha la denominazione di origine protetta (DOP). In menù la trovate nei pici al ragù bianco e nella tegamata."
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
        "text": "Pici are thick, hand-rolled strands of pasta made from flour and water, typical of the Siena area. At the osteria they are served with white Cinta Senese ragù, duck ragù, cacio e pepe and wild boar ragù."
      }
    },
    {
      "@type": "Question",
      "name": "What is Cinta Senese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cinta Senese is the native pig breed of the Siena hills, dark with a white band, the ‘cinta’, around its shoulders. It is painted in Ambrogio Lorenzetti's fresco of 1338–39 in Siena's Palazzo Pubblico and has protected-origin (DOP) status. On the menu it appears in the pici with white ragù and in the tegamata."
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
        "text": "Sono in carta i tre grandi rossi della zona di Siena. C'è il Chianti Classico di Selvolini (Gallo Nero) e di Lamole di Lamole, più il Chianti Colli Senesi La Foresta. Per Montepulciano ci sono Rosso e Nobile di Guidotti e di Poggio alla Sala; per Montalcino Rosso e Brunello di Caparzo e di Camigliano."
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

Rules as in `seo.md` section 6: values from the profile only; no `aggregateRating`, no `review`, no `priceRange`, no geo, no email, no allergens, no wine prices. `@id`s are the ones of `seo.md`: `https://www.osteriadeirossi.it/#restaurant`, `…/#website`, `…/en/#website`. The Restaurant node is identical on the Italian and the English home page. The Restaurant entity lives only on the home pages; the other pages point to it by `@id`.

### J.1 Home, Italian

Changes from `seo.md` 6.1: the Restaurant `description` (adds 1992, Cinta Senese, truffle); `hasMenu` is now a list of the menu and the wine-list page (the wine list is a menu of wines; the URL form is valid for `hasMenu`); the WebSite node gains a `description` (as the English one has). No FAQPage on the home page any more (remove 6.3). `hasMap` stays as it was; a `subjectOf` was considered and left out because it adds nothing a crawler needs.

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

The Restaurant node is the one of J.1, word for word (same `@id`, same Italian `url` and `description`, same Italian `hasMenu` URLs). Only the WebSite node is English.

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

The hand-written block is the BreadcrumbList only. Optional, generated by the builder from `wine-list-2026-11-25.json` and added to the same page as a second `application/ld+json` block: a `Menu` (`@id` `https://www.osteriadeirossi.it/vini/#menu`, `inLanguage` `it`) with one `MenuSection` per group (`Vini rossi`, `Vini bianchi`, `Rosé e bollicine`) and one `MenuItem` per wine carrying only its `name` (wine name, then the producer after a comma when there is one). No `offers`, no `price`, no description. If the builder skips it, nothing else changes. The three unproofread readings stay out of the generated block until the founder confirms them, or go in as they are in the JSON together with the same fix as the visible list (the two must always agree).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/" },
    { "@type": "ListItem", "position": 2, "name": "Carta dei vini", "item": "https://www.osteriadeirossi.it/vini/" }
  ]
}
```

### J.4 Wine list, English

Same optional generated `Menu` as in J.3 (`@id` `https://www.osteriadeirossi.it/en/wine-list/#menu`, `inLanguage` `en`, group names `Red wines`, `White wines`, `Rosé and sparkling`, area names from the JSON `en` fields, names only).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.osteriadeirossi.it/en/" },
    { "@type": "ListItem", "position": 2, "name": "Wine list", "item": "https://www.osteriadeirossi.it/en/wine-list/" }
  ]
}
```

### J.5 Dove siamo, Italian

A WebPage that points to the Restaurant by `@id` (the entity itself is defined on the home page), plus the BreadcrumbList.

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

The Menu pages keep the Menu and BreadcrumbList blocks of `seo.md` 6.5 and 6.6 (generated files in `assets/menu/`), and now also carry the FAQPage blocks Q.3 and Q.4 as separate `application/ld+json` scripts. The drinks section of the Menu markup keeps its prices (it is the menu); only the wine-list page has none.

---

## S. Sitemap and robots.txt

### S.1 /sitemap.xml

Full replacement of `seo.md` 7.2: ten URLs, each with the language twin and `x-default` (the Italian URL). `lastmod` is 2026-11-25, the date of the version 2 content for every page (the privacy text changes too, for the opening animations). Later builds set `lastmod` from the real date of each page's last content change, never "today" automatically.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.osteriadeirossi.it/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/menu/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/menu/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/menu/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/menu/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/menu/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/vini/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/vini/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/wine-list/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/vini/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/wine-list/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/vini/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/wine-list/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/vini/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/dove-siamo/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/dove-siamo/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/find-us/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/dove-siamo/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/find-us/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/dove-siamo/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/find-us/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/dove-siamo/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/privacy/</loc>
    <lastmod>2026-11-25</lastmod>
    <xhtml:link rel="alternate" hreflang="it" href="https://www.osteriadeirossi.it/privacy/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.osteriadeirossi.it/en/privacy/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.osteriadeirossi.it/privacy/"/>
  </url>
  <url>
    <loc>https://www.osteriadeirossi.it/en/privacy/</loc>
    <lastmod>2026-11-25</lastmod>
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

## 7. Internal links and anchor texts

Rules as in `seo.md` 4.1: links stay inside the language; internal links are written relative to the page they sit on; trailing slash, never `index.html`; anchors say what is behind the link, six words or fewer, no "clicca qui" or "click here"; no exact-match anchor more than twice on a page; no link to `menu.osteriadeirossi.it`. Where an English label differs from `copy.md`, `copy.md` wins.

| From | To | Italian anchor | English anchor |
|---|---|---|---|
| Header, every page | `/menu/` | `Il menù` | `Menu` |
| Header, every page | `/vini/` · `/en/wine-list/` | `I vini` | `Wine list` |
| Header, every page | `/dove-siamo/` · `/en/find-us/` | `Dove siamo` | `Find us` |
| Footer, every page | `/vini/` · `/en/wine-list/` | `La carta dei vini` | `The wine list` |
| Footer, every page | `/dove-siamo/` · `/en/find-us/` | `Dove siamo e come arrivare` | `Find us and how to get here` |
| Home `#cantina`, button | `/vini/` · `/en/wine-list/` | `Apri la carta dei vini` | `Open the wine list` |
| Home `#contrada`, text link | `/dove-siamo/` · `/en/find-us/` | `Dove siamo` | `Find us` |
| Home `#prenota`, text link | `/dove-siamo/#mappa` · `/en/find-us/#mappa` | `Mappa e come arrivare` | `Map and directions` |
| Home `#pici`, text link | `/menu/#primi` | `I primi piatti del menù` | `The first courses on the menu` |
| Home `#tavola`, dolceforte | `/menu/#secondi` | `cinghiale in dolceforte` | `cinghiale in dolceforte` |
| Home `#dispensa`, fiorentina button | `/menu/#griglia` | `Bistecca alla fiorentina, a peso` | `Bistecca alla fiorentina, by weight` |
| Home `#dolce` | `/menu/#dolci` | `I dolci del menù` | `The desserts on the menu` |
| Home `#prenota` | `/menu/` | `Il menù con i prezzi` | `The menu with prices` |
| Menu, "Bevande" | `/vini/` · `/en/wine-list/` | `La carta dei vini` | `The wine list` |
| Menu, notes and booking block | `/dove-siamo/` · `/en/find-us/` | `Orari, indirizzo e come arrivare` | `Opening hours, address and getting here` |
| Menu FAQ block (line under it) | `/#pici` · `/en/#pici` | `I pici spiegati` | `Pici explained` |
| Wine list, intro or notes | `/menu/` · `/en/menu/` | `Il menù con i prezzi` | `The menu with prices` |
| Wine list, notes | `/menu/#bevande` · `/en/menu/#bevande` | `vini al calice e altre bevande` | `wines by the glass and other drinks` |
| Wine list, booking block | `/dove-siamo/` · `/en/find-us/` | `Dove siamo` | `Find us` |
| Dove siamo, closing block | `/` · `/en/` | `La storia di Osteria dei Rossi` | `The story of Osteria dei Rossi` |
| Dove siamo, closing block | `/menu/` · `/en/menu/` | `Il menù con i prezzi` | `The menu with prices` |
| Dove siamo, closing block | `/vini/` · `/en/wine-list/` | `La carta dei vini` | `The wine list` |
| Footer, every page | `/privacy/` · `/en/privacy/` | `Informativa privacy` | `Privacy notice` |

The menu section ids are the Italian ones on both language pages (`seo.md` 2.4: `antipasti`, `primi`, `secondi`, `griglia`, `contorni`, `dolci`, `bevande`, `coperto`, `prenota`).

Superseded anchor rows of `seo.md` 4.2: "#cantina, wines → `/menu/#bevande`", "Menu, above Drinks → `/#cantina`" (now to the wine list), "Menu, closing block → `/#prenota`" and "→ `/#domande`" (the menu has its own `#prenota` and `#domande`), and the Home FAQ rows (FAQ 4, 8 and 9: the Home has no FAQ). The language switcher on the new pages links to the twin: `/vini/` ⇄ `/en/wine-list/`, `/dove-siamo/` ⇄ `/en/find-us/`. Every page is within two clicks of Home; the new pages are one click (header).

---

## 8. Notes for the builder

1. **Superseded in `seo.md`:** 1.1 and 1.2 (home keyword maps); 2.1 and 2.2 title, description and Open Graph rows (P.1, P.2); the home heading tables and the `#domande` stop of 2.1 and 2.2; section 5 (the ten Home questions: now split over Q.1 to Q.6); 6.1 and 6.2 (J.1, J.2); 6.3 and 6.4 (the Home FAQPage, removed); 7.2 (S.1); the anchor rows listed at the end of section 7 above; and the stop ids of checklist section 8 (the Home ids are those of `design-v2.md` section 3: `porta casa contrada tavola pici dispensa dolce cantina prenota`). Everything else in `seo.md` (name rules, NAP, section 3 alt rows 1 to 20, 6.5 and 6.6, robots, fonts and third-party rules, host redirects) stands.
2. **One `<h1>` per page**, in the HTML at first paint, never created by script or animated in, also on the two pages with an intro overlay: the overlay (`#book-intro`, `#pour-intro`) is added over a page whose content is already in the DOM, it is `aria-hidden`, and with no JavaScript or with reduced motion it never shows.
3. **Wine list outline:** `h1` (`La carta dei vini`); `h2` for the three groups (`Vini rossi`, `Vini bianchi`, `Rosé e bollicine`); `h3` for the seven areas inside the reds; a final `h2` for the questions (`Domande sul vino`) with the questions as `<details>` and `<summary>` (the summary is not a heading); the booking block `#prenota` closes the page. No price anywhere, not in alt, title attributes, `data-` attributes or markup.
4. **Dove siamo outline:** `h1`; `h2` for the street (`#via`), the map (`#mappa`), hours and booking (`#prenota`) and the questions (`#domande`); `h3` for the two blocks beside the map ("A piedi" / "In auto"; "On foot" / "By car"). The address, the directions and the car-park text are real HTML text, never only inside the SVG map. The map stays a link to the Google Maps URL, no embed.
5. **Home outline:** `h1` in the hero; one `h2` per chapter `#casa` to `#cantina`; `h3` for the dishes and the larder rows. No FAQ block and no `#domande` on the Home. The Menu page ends with `h2` `Domande sul menù` before `#prenota`.
6. **Images of the second set** are 3:2 (JPEG fallback 720×480, AVIF 480, 720, 960, 1280, 1600). Write `width="720" height="480"` and CSS `aspect-ratio: 3 / 2`. Suggested `sizes` (the builder checks them against the real layout): full-bleed band `100vw`; large larder tile `(min-width: 900px) 40vw, 92vw`; small larder tile `(min-width: 900px) 20vw, 46vw`; `#pici` photo column (two tiles) `(min-width: 900px) 30vw, 92vw`; `#dolce` arch tile `(min-width: 900px) 44vw, 92vw`; Menu photo bands `100vw`.
7. **Lazy loading:** every image of the second set is `loading="lazy"` and `decoding="async"`; so are all images on the wine list and Dove siamo pages. Only the Home hero keeps the preload and `fetchpriority="high"` of `seo.md` 2.7. The wine-list and Dove siamo heroes are text on green or cream, so they preload no image. Do not lazy-load anything inside the first viewport of a phone.
8. **Alt text:** rows 21 to 34 of section A, the rows 1 to 20 of `seo.md` section 3, and the decorative drawings (pici, boar, skyline, book cover, pour) with empty `alt` or `aria-hidden`. Photo 3 (`via-dei-rossi-targa-e-insegna-osteria`) now sits on Dove siamo; photos 30 and 31 are two views of one dish and keep their two different alts.
9. **FAQ markup:** each Q block is the single source. Render the `<details>` from it and emit it again as the `FAQPage` script, so the text cannot drift. The Menu page gets Q.3 or Q.4 next to the Menu markup; the wine list gets Q.5 or Q.6; Dove siamo gets Q.1 or Q.2. Validate all JSON blocks with the Schema.org validator.
10. **Home JSON-LD:** the Restaurant node exists only on the two home pages. The other pages reference `#restaurant` by `@id`. Confirm that the wine-list URL inside `hasMenu` is live before the Home goes out.
11. **Host redirects to add** to the table of `seo.md` section 8 (all 301): `/vini`, `/en/wine-list`, `/dove-siamo`, `/en/find-us` to the same URL with a trailing slash. The 404 page links to Home and Menu as before.
12. **Checklist items that changed:** Lighthouse mobile 95 or more now applies to the eight indexable pages above privacy (Home, Menu, Wine list, Dove siamo, in both languages), measured on a first visit (intro plays) and on a repeat visit; the link checker also asserts the new header and footer links, the twin links of the language switcher, and that `/vini/` and `/dove-siamo/` have no price and no `menu.osteriadeirossi.it` link; the "no `L'Osteria dei Rossi`" check still holds, and the published product name `Vino l'Osteria` and the list entry `IGT L'Osteria` are allowed because they are wine names, not the venue name.

---

## 9. Facts needed that the profile does not have

None of these is invented in this file.

1. **Wine bar or enoteca.** Is there any service that would justify "enoteca" or "wine bar" (wines to take away, tastings, glasses without a meal)? Until the founder says so, the words are not used.
2. **The wine list's three open readings** ("Chianti Domasco DOC", "Bolgheri Bianco Papero", the producer "Poggio Canzano") and the lead's heading "Rosé e bollicine". The FAQ answers avoid them; the generated wine-list page and any generated `Menu` block carry them as they are in the JSON until the founder proofreads.
3. **Where the printed prices are seen.** The page says only "prices are not published online". The profile does not say where guests see the printed list, so nothing like "prices at the table" is written.
4. **The wine by the glass.** The live menu names five wines by the glass (Chianti Classico Gallo Nero, IGT Toscano, Maremma DOC; Vernaccia di San Gimignano, Vermentino Toscano). Whether the carta's other wines are also poured by the glass is unknown; the answers say only "reds and whites by the glass".
5. **Walking time from the San Francesco car park to the door, ZTL hours, permits and Palio-day access.** The "By car" block can say only what the profile says (car park, escalators, ZTL, "check the rules"). No tariff.
6. **Distances.** The only approved distance is "Piazza del Campo about 5 minutes on foot". No metres, no walking time to the Basilica (it is "at the end of the street").
7. **Whether the pici are made in house.** The profile defines pici in general and lists how the osteria serves them; the answer therefore says nothing about who makes them.
8. **Cinghiale in dolceforte and chocolate.** Whether the osteria's own recipe contains chocolate (the answer says only what the profile says about the recipe's history).
9. **Truffle.** "Fresh truffle all year round" is a founder photo caption; this file keeps "tartufo fresco di stagione" (open question 11 of `seo.md`). The founder should say which wording he wants on `#dispensa`.
10. **Porcini and other seasonal products.** No months are stated; the live menu flags `Tagliatelle ai Funghi Porcini` as a seasonal dish and nothing more.
11. **Outdoor tables.** Months, number, and whether one can be requested (still open from `seo.md`).
12. **Search demand.** No volumes or Google.it positions exist for any phrase here. They come from Search Console after launch (`seo-offsite.md`).
13. **Launch date,** so that the sitemap `lastmod` and the Search Console set-up can be dated for real (the 2026-11-25 value is the date of this version).
