# Competitor site teardown: osterie and restaurants in Siena's historic centre (on-page SEO and content, as of 24 November 2026)

**Evidence labels used in this file**

- **OBSERVED** = read in the raw HTML of the live page, fetched once on 24 November 2026 and parsed locally (title, meta tags, link tags, JSON-LD, headings, links, counts). Seven sites could be read this way: Trombicche, Taverna di San Giuseppe, Permalico, Papei, Fonte Giusta, Il Vinaio, Gallo Nero.
- **SNIPPET** = from search results restricted to the competitor's own domain: page title and URL as indexed, plus the search tool's summary of the indexed page text (a paraphrase, possibly from an older crawl). Used for the nine sites that could not be read and for lists of indexed pages.
- **INFERRED** = my deduction, with the evidence stated.
- **not observable** = could not be seen with the tools in this session. It does not mean absent.

Raw HTML shows what is in the source, not what a browser renders. Layout, photography and actual animation were not seen for any site; motion is described only from markup (sliders, scroll-reveal scripts, parallax attributes).

---

## 1. Method, access and competitor set

### Takeaway
Sixteen restaurant-owned sites were confirmed; seven were read directly (home page, plus menu page where one exists) and nine only through search snippets because their servers did not answer. One competitor, Osteria da Trombicche, is far ahead of the rest on every on-page measure and is the benchmark to beat; the direct neighbour, Osteria Le Sorelline at Via dei Rossi 76, could not be read.

### Cited Findings

**What was read and what was not (OBSERVED, fetch results)**

| Site | Home page | Menu page | Result |
|---|---|---|---|
| Osteria da Trombicche | [datrombicche.it](https://www.datrombicche.it/) | on the home page (#menu) | read, 132 KB |
| La Taverna di San Giuseppe | [tavernasangiuseppe.it](https://www.tavernasangiuseppe.it/) | only a New Year's Eve menu: [/cenone2026/](https://www.tavernasangiuseppe.it/cenone2026/) | read, 205 KB and 101 KB |
| Osteria Permalico | [permalico.it](https://www.permalico.it/) | [/it/menu.html](https://www.permalico.it/it/menu.html) | read, 25 KB and 15 KB; [menu.permalico.it](https://menu.permalico.it/) returned a gateway error |
| Antica Trattoria Papei | [anticatrattoriapapei.com](https://anticatrattoriapapei.com/) | [/menu-3/](https://anticatrattoriapapei.com/menu-3/) | read on a later attempt, 68 KB and 87 KB |
| Trattoria Fonte Giusta | [fontegiusta.com](https://fontegiusta.com/) | [/menu2/](https://fontegiusta.com/menu2/) | read, 108 KB and 76 KB |
| Osteria il Vinaio | [osteriailvinaio.it](https://osteriailvinaio.it/) | menu is a PDF; [/menu/](https://osteriailvinaio.it/menu/) returns 404 | read, 107 KB |
| Ristorante Gallo Nero | [ristorantegallonero.it](https://www.ristorantegallonero.it/) | on the home page (#menu) | read, 175 KB |
| Osteria Le Logge | [osterialelogge.it](https://osterialelogge.it/) | — | not readable: the server presented a self-signed TLS certificate |
| Da Divo, La Sosta di Violante, Nonna Gina, Le Sorelline, Vinattieri, Babazuf | see section 2 | — | not readable: connection closed before any response, four attempts each |
| Osteria Boccon del Prete | [boccondelprete.it](https://boccondelprete.it/) | — | not readable: gateway error (502) on every attempt |
| Osteria Il Grattacielo | [Google Sites page](https://sites.google.com/view/ilgrattacielo1840) | — | host not on the session's allowed list |

**Seed queries: which restaurant-owned sites appear (SNIPPET)**
- "osteria siena", "ristorante tipico siena", "best restaurants in Siena" and "osteria siena centro storico" each returned only guides and listing platforms. No restaurant-owned site appeared in any of the four result sets. — [Michelin Guide, Osteria Le Logge](https://guide.michelin.com/hr/en/toscana/siena/restaurant/osteria-le-logge); [Firenze Made in Tuscany](https://www.firenzemadeintuscany.com/it/articolo/i-migliori-ristoranti-di-siena/); [Falstaff](https://www.falstaff.com/en/listings/the-best-restaurants-in-siena); [discovertuscany.com](https://discovertuscany.com/it/siena/dove-mangiare-a-siena.html); [italia.it, Osteria da Trombicche](https://www.italia.it/en/toscana/siena/where-to-eat/osteria-da-trombicche)
- Restaurants named most often in those results: Osteria Le Logge, La Sosta di Violante, Osteria degli Svitati, Osteria Le Sorelline, Antica Osteria da Divo, Antica Trattoria Papei, La Taverna di San Giuseppe, Osteria da Trombicche, Osteria Il Vinaio. — [Wanderlog, La Sosta di Violante](https://wanderlog.com/place/details/412733/osteria-la-sosta-di-violante); [Tripaligner, Osteria Le Sorelline](https://tripaligner.com/countries/italy-15/destinations/siena-11147/places/osteria-le-sorelline-2105733); [The Tour Guy](https://thetourguy.com/travel-blog/italy/siena/best-restaurants-in-siena-this-year/); [pos.do, Osteria degli Svitati](https://pos.do/en/siena/restaurant/osteria-degli-svitati)

**Candidates with no own site confirmed (SNIPPET)**
- Osteria degli Svitati: only listing sites surfaced. — [pos.do](https://pos.do/en/siena/restaurant/osteria-degli-svitati); [Virgilio listing](https://aziende.virgilio.it/osteria/siena-si/osteriadeglisvitatisiena)
- Osteria Castelvecchio (Siena): the domain osteriacastelvecchio.com belongs to a different restaurant in Castel Goffredo (Mantua) and carries indexed spam pages. — [osteriacastelvecchio.com](https://www.osteriacastelvecchio.com/)
- Osteria Il Carroccio, Osteria del Gatto: guessed domains returned nothing. Trattoria La Torre: not checked. No source.

**Proximity to Via dei Rossi 79/81**
- Osteria Le Sorelline gives its address as Via dei Rossi 76, near Piazza Provenzano (SNIPPET). — [osterialesorelline.it](https://www.osterialesorelline.it/)
- Osteria Il Grattacielo: Via dei Pontani 8 (SNIPPET). — [Google Sites page](https://sites.google.com/view/ilgrattacielo1840)
- Osteria da Trombicche: Via delle Terme 66 (OBSERVED). — [datrombicche.it](https://www.datrombicche.it/)
- Compagnia dei Vinattieri: Via delle Terme 79 / Via dei Pittori 1 (SNIPPET). — [vinattieri.net](https://www.vinattieri.net/)
- Trattoria Fonte Giusta: Via Camollia 102; Osteria il Vinaio: Via Camollia 138 in its page text (OBSERVED). — [fontegiusta.com](https://fontegiusta.com/); [osteriailvinaio.it](https://osteriailvinaio.it/)

### Inferences
- Guides and listing platforms hold the generic head terms; a restaurant site is more likely to win on brand, long-tail, question and local-pack results. (INFERRED from the four result sets. The search tool is US-based and is not Google.it.)
- Le Sorelline is the closest competitor on the map: same street, a few civic numbers away. Grattacielo, Trombicche and Vinattieri are on the Banchi di Sopra / Via delle Terme side; Fonte Giusta and Il Vinaio on the Camollia axis beyond Via dei Montanini. Walking distances are to confirm on a map.
- Titles shown by the search index can differ from the real title tag: Papei's home is indexed as "Antica Trattoria Papei" but its title tag is "Antica Trattoria Papei | Siena"; Trombicche is indexed under its og:title, not its title tag. Treat every SNIPPET title in this file as approximate. (INFERRED from comparing SNIPPET and OBSERVED values.)

### Gaps
- Nine sites could not be read, including the direct neighbour Le Sorelline and the benchmark Le Logge. Papei answered only on the third attempt and sits behind a web application firewall (response header "BitNinja-WafPro"), so the failures may be server-side blocking of this session's network address rather than site outages. Cause not determinable from here.
- Search budget for the whole run was exhausted before rating look-ups; Google and TripAdvisor figures are missing except where a site states its own.
- Rendered design, photography and real animation were not seen for any site.
- Only home and menu pages were fetched. Booking pages, story pages, English versions and journals were not opened.

---

## 2. Competitor blocks

### Takeaway
Among the seven sites read, Trombicche is in a different league (hand-built static page, seven JSON-LD blocks including Restaurant with Menu and FAQPage, hreflang, description with rating and call to action, named producers, press, FAQ with ZTL and parking, a journal). The other six have basic or broken on-page SEO: two have no meta description, three have no H1 or several H1s on the home page, none has Restaurant markup except a flawed block at Il Vinaio, and only Papei has a dedicated menu page with dish names and prices as text.

### Cited Findings

### A. Sites read directly

#### 2.1 Osteria da Trombicche — Via delle Terme 66 (near; the benchmark)
All fields OBSERVED on [https://www.datrombicche.it/](https://www.datrombicche.it/) unless marked.
- **Pages and navigation.** One long home page with anchors: Chi siamo (#storia), Menù (#menu), Diario (#diario), Orari (#orari), Recensioni (#recensioni), Domande frequenti (#faq). Separate URLs linked from it: English version [/en/index.html](https://www.datrombicche.it/en/index.html); journal [/diario_di_bordo.html](https://www.datrombicche.it/diario_di_bordo.html); articles such as [/blog/cinta-senese.html](https://www.datrombicche.it/blog/cinta-senese.html), [/blog/vini-docg-siena.html](https://www.datrombicche.it/blog/vini-docg-siena.html), [/blog/formaggio-fratelli-farina-crete-senesi.html](https://www.datrombicche.it/blog/formaggio-fratelli-farina-crete-senesi.html); menu PDF [/menu/menu-ita.pdf](https://www.datrombicche.it/menu/menu-ita.pdf); [/privacy](https://www.datrombicche.it/privacy). Off-site: booking at [datrombicche.avatable.com](https://datrombicche.avatable.com/it/prenota/), menu in five languages at [linktr.ee/trombicche](https://linktr.ee/trombicche), wine list as a Google Drive file. An older page [/reservation/](http://www.datrombicche.it/reservation/) is still indexed with a different timetable (SNIPPET).
- **Title:** "Trombicche Siena — Cucina senese, Via delle Terme 66".
- **Meta description:** "Trombicche: osteria nel centro di Siena, cucina a vista, Slow Food dal 2019. Via delle Terme 66. 4.3 Google · 995 recensioni. Prenota online o scrivici su WhatsApp."
- **Meta keywords:** "osteria Siena, cucina senese tradizionale, Cinta Senese DOP, pici senesi, Slow Food Siena, Via delle Terme 66".
- **Other head tags:** canonical to itself; robots "index, follow"; html lang "it"; og:title "Trombicche — Cucina senese, Via delle Terme 66, Siena"; og:image and twitter card set; hero image preloaded.
- **hreflang:** en → /en/, it → /, x-default → /.
- **H1 (one, hidden from view with class "sr-only"):** "Trombicche — Osteria Toscana a Siena, Via delle Terme 66. La cucina senese senza teatro. Dal 2019 sulla Guida Osterie d'Italia Slow Food."
- **H2s:** "Da che parte stiamo"; "Una storia che sa di qualcosa"; "La Carta"; "Orari di apertura"; "Dicono di noi"; "Come vedere in anteprima la cucina di Trombicche prima di venire?"; "Storie dal banco"; "World Press"; "Ogni dubbio che resta è un tavolo vuoto"; "I Nostri Artigiani"; "Passa quando vuoi, la porta è aperta".
- **Menu format.** Real text on the home page with prices (29 price strings, for example "Tagliere di Trombicche 20€", pasta "13–16€", cover charge "2€"); several lines are categories with a price range rather than fixed dishes. The same menu is embedded as a PDF in an iframe. No per-dish allergens; one line mentions vegetarian and gluten-free options and an FAQ answer says the kitchen is not certified gluten free.
- **Booking.** Third-party online booking (Avatable), WhatsApp links with pre-filled text, a tel: link and email. A "Prenota un tavolo" call to action sits in the header and a floating "quick contacts" stack (class "float-stack") is in the markup, so the booking route is persistent.
- **Structured data: seven JSON-LD blocks.** (1) Restaurant + LocalBusiness with name, alternateName, description, url, logo, three images, telephone, email, PostalAddress, GeoCoordinates, hasMap, servesCuisine (7 values), priceRange "€€", areaServed, currenciesAccepted, paymentAccepted, acceptsReservations true, foundingDate 1930, three OpeningHoursSpecification entries with seasonal validity, sameAs (Instagram, Facebook, TripAdvisor, Linktree), and hasMenu → Menu → three MenuSection → six MenuItem with offers. (2) FAQPage with 13 questions. (3) Blog with six BlogPosting entries. (4) Person ("Oste di Trombicche", no personal name). (5) Seven ImageObject entries with descriptions. (6) WebPage with SpeakableSpecification and BreadcrumbList. (7) WebSite. No aggregateRating and no Review markup.
- **Platform and speed signals.** No generator tag; ".html" URLs; served by Vercel; last modified 23 November 2026. One external script (a consent script), one own stylesheet plus Google Fonts (Playfair Display, Crimson Pro), 17 WebP images and one SVG, 11 lazy-loaded, descriptive alt text on all but one. One Google Maps iframe. Hand-built static site (INFERRED from the above).
- **Content.** About 3,100 words. Story told with dates: wine shop opened in 1930, "Trombicche" was the founder's nickname, closed in the 1970s, reopened 1993, current management 2016, open kitchen 2018, Slow Food guide 2019. No owner or chef is named. Producers named and linked: pastificio Fè (pici), Mulino Val d'Orcia (fusilloni), Laboratorio Rurale di Cinta Senese (Mario Vigni), Fratelli Farina (pecorino), Poggio Camporbiano, Ditta Artigianale (coffee). The site states that its pici are bought in and only the gnocchi are made in house. Landmarks: "a due minuti da Piazza del Campo", "A due passi da Fonte Gaia". Practical: "Siena è ZTL", parking at the Stadio or the Fortezza, about ten minutes on foot; 24 seats inside and about ten outside in summer. Press quoted with links: la Repubblica Il Gusto (June 2026), The New York Times (2012), La Cucina Italiana, The Times, Rough Guides, Slow Food. Eight guest reviews quoted. FAQ with about sixteen visible questions, several written as search questions ("Dove mangiare cucina toscana autentica a Siena?", "Qual è un buon ristorante vicino Piazza del Campo?", "C'è parcheggio vicino a Trombicche?"). Journal "Diario di Bordo": six articles dated September to December 2024 on suppliers, bread without salt, DOCG wines and a one-day Siena guide.
- **Rating:** "4.3 Google · 995 recensioni" as stated on its own page and in its meta description.
- **Design and motion (from markup only).** Nine numbered chapters down one page ("01 · Il manifesto" to "09 · Vieni"); elements with class "reveal" get an "active" class when they scroll into view (IntersectionObserver), plus a staggered reveal on a photo grid and an FAQ accordion. No slider, no video.
- **Strengths to match (INFERRED).** Complete Restaurant and Menu markup; FAQ written for question searches and AI answers; description that carries rating, address and a call to action; producers by name; honest, specific copy; press wall; ZTL and parking answered; light static build.
- **Weaknesses to exploit (INFERRED).** Everything sits on one URL, so one title has to serve menu, story, find-us and FAQ. The H1 is hidden text. No German. Multilingual menu and wine list live off-site (Linktree, Google Drive), so that text earns nothing for the domain. Menu markup covers six items; no allergens per dish. No named people. Figures disagree inside the page (average spend given as 25–30, 30–35 and 25–35 euro; 13 questions in markup against about 16 visible). Journal promised monthly but the newest article in the markup is dated December 2024. An old reservation page with other hours is still indexed.

#### 2.2 La Taverna di San Giuseppe — Via Giovanni Duprè 132
All fields OBSERVED on [https://www.tavernasangiuseppe.it/](https://www.tavernasangiuseppe.it/) and [/cenone2026/](https://www.tavernasangiuseppe.it/cenone2026/) unless marked.
- **Pages and navigation.** One-page home with anchors: Home, Marco e Matteo (#m-m), Il Gruppo (#il-gruppo), La Nostra Cucina (#Cucina-S2), L'Ambiente (#Ambiente-S2), La Nostra Cantina, Contact/Dove Siamo (#dove-siamo), and one real link, Cenone 2026 → [/cenone2026/](https://www.tavernasangiuseppe.it/cenone2026/). Footer "Mail" → [/contact/](https://www.tavernasangiuseppe.it/contact/). Also indexed (SNIPPET): [/information/](https://www.tavernasangiuseppe.it/information/), media attachment pages, and a 2020 wine-list PDF [giusta-12.pdf](https://www.tavernasangiuseppe.it/wp-content/uploads/2020/04/giusta-12.pdf).
- **Title:** "Taverna di San Giuseppe - La Taverna di San Giuseppe". **Meta description:** none. **Meta keywords:** none. Canonical to itself; robots index, follow. og:description is filler: slide numbers followed by "Menù di San Silvestro 2026".
- **Languages.** Italian and English printed one after the other on the same page; html lang "it-IT"; no hreflang, no language URLs.
- **H1 (two):** "ATTENZIONE: SOLO PRENOTAZIONI UFFICIALI" and "ATTENTION: OFFICIAL RESERVATIONS ONLY". **H2s:** the Leccio d'Oro 2025 announcement in Italian and English; "Calendario delle Festività"; "Holiday Schedule". No heading names the restaurant, the cuisine or the city.
- **Menu.** No à la carte menu on the home page or in the navigation; the kitchen is described in two paragraphs with no dish names. The only menu page is the New Year's Eve menu: title "cenone2026 - La Taverna di San Giuseppe", no meta description, four H1s, dishes as H3 headings in Italian and English, no prices and no allergens on that page.
- **Booking.** Phone only, stated as policy ("non utilizza moduli di prenotazione web di terze parti"). The number is plain text, not a tel: link. No form, no widget. A table is released 15 minutes after the booked time.
- **Structured data.** One JSON-LD graph from the SEO plugin: WebPage, BreadcrumbList, WebSite (description "Ristorante a Siena") with SearchAction. No Restaurant, LocalBusiness or Organization.
- **Platform and speed signals.** Generator "WordPress 7.1.5"; theme SiteOrigin North (child) with SiteOrigin Page Builder; Smart Slider 3; Yoast SEO 28.9; LiteSpeed Cache; behind Cloudflare. 19 stylesheets and 29 external scripts, including Google Tag Manager, an Instagram embed, an AdSense script and a cookie script. Three sliders with 30 slides in total. 50 img tags (30 JPG, 4 PNG), files named "-1900" (1,900 px wide), 49 lazy-loaded, 43 with empty alt text.
- **Content.** About 1,500 words, half of it the English repeat. People: "Matteo & Marco" (first names only) restored the Taverna; a team text follows. Building: "un fondo del 1100" with an Etruscan house cut into tufa, now the cellar; "a 300 metri dalla Piazza del Campo"; about 600 labels chosen by the sommelier (unnamed). Awards and press linked: Leccio d'Oro 2025, Michelin Guide page, TripAdvisor Travelers' Choice, Restaurant Guru badges 2021 and 2024, a newsletter article by Giulia Scarpaleggia. The English is literal ("The place is set in a fund in 1100"). Seasonal closing notice for 15 November 2026 to 24 March 2027 and a warning about fake online booking confirmations fill the top of the page.
- **Rating:** not on the page. A Wanderlog list showed 4.6 from 3,019 reviews (SNIPPET, third-party; platform to confirm). — [Wanderlog](https://wanderlog.com/place/details/549698)
- **Design and motion (from markup).** Image sliders for each section; 66 scroll-in animation attributes (wow.js with animate.css).
- **Strengths to match (INFERRED).** A concrete distance, a dated building, a cellar with a number, a current award, clear house rules.
- **Weaknesses to exploit (INFERRED).** No meta description; H1s are warnings; no menu, no prices, no dish text; no Restaurant markup; no online booking and not even a tappable phone number; heavy page; bilingual text on one URL with no hreflang.

#### 2.3 Osteria Permalico — Costa Larga (2 or 4)
All fields OBSERVED on [https://www.permalico.it/](https://www.permalico.it/) and [/it/menu.html](https://www.permalico.it/it/menu.html).
- **Navigation:** Home ([/index.html](https://www.permalico.it/index.html)); Osteria ([/it/osteria-permalico.html](https://www.permalico.it/it/osteria-permalico.html)); Menu ([/it/menu.html](https://www.permalico.it/it/menu.html)); Vini ([/it/vini.html](https://www.permalico.it/it/vini.html)); Bevande ([/it/bevande.html](https://www.permalico.it/it/bevande.html)); Gallery ([/it/gallery-osteria-permalico.html](https://www.permalico.it/it/gallery-osteria-permalico.html)); Contatti ([/it/contatti-osteria-permalico.html](https://www.permalico.it/it/contatti-osteria-permalico.html)); social icons; header button "Prenota Tavolo".
- **Home title:** "Permalico Osteria a Siena cucina Toscana". **Home meta description:** "Permalico è un'Osteria a Siena a pochi metri da Piazza del Campo dove gustare piatti tipici della cucina Toscana accompagnati da ottimi vini." **Meta keywords:** none. No canonical, no robots tag, no Open Graph tags.
- **Menu page title:** "Menu Osteria Permalico - Cucina Toscana da Permalico Osteria a Siena". Menu page meta description: none.
- **Languages.** Italian only; pages sit in an /it/ folder but the navigation has no language switch and there is no hreflang.
- **H1:** none on the home page; "Menu" on the menu page. **Home H2s:** "Permalico" four times (slider and section captions); "Creiamo piatti della cucina tradizionale Toscana."; "Menu Osteria"; "La tua Osteria a Siena!"; "Osteria Permalico"; "Dicono di Noi"; "Prenota il tuo tavolo!".
- **Menu format.** The menu page source holds no dishes and no prices: the list is drawn in the browser by a custom element ("sg-restaurant-menu") loaded from a script. Dish names are therefore not text in the HTML. Allergens: not observable. The separate menu subdomain did not answer.
- **Booking.** Phone only: "Prenota Tavolo" in the header is a tel: link and stays in the header on every page read. Delivery links to Glovo and Deliveroo.
- **Structured data:** none (no JSON-LD, no microdata).
- **Platform and speed signals.** Static HTML built on a restaurant template (stylesheet id "caverta"), Bootstrap, jQuery, Owl Carousel; credit "Designed by SG Consulting"; file last modified 5 March 2024. 25 KB of HTML, 13 scripts, 5 stylesheets, 8 images (JPG and PNG, no lazy loading, all with alt text).
- **Content.** About 560 words. Owner named: Armando Ballerini. Claims: "a pochi metri da Piazza del Campo e dal Duomo", local producers (none named), house wine and "70 etichette". Four guest reviews quoted, one from the pandemic period. The header prints "Costa Larga, 4" and the footer "Costa Larga, 2" on the same page. One alt text misspells the owner's name.
- **Rating:** not on the page.
- **Design and motion (from markup).** Hero carousel with three captioned slides; a "parallax" class on section backgrounds.
- **Strengths to match (INFERRED).** Titles built from brand + type + city + cuisine on every page; a written description; separate URLs for menu, wines, drinks, gallery and contacts; a named owner; a booking button always in view.
- **Weaknesses to exploit (INFERRED).** Menu invisible in the HTML source; no schema at all; no H1 on the home page; Italian only; two street numbers; stale reviews; phone-only booking.

#### 2.4 Antica Trattoria Papei — Piazza del Mercato 6
All fields OBSERVED on [https://anticatrattoriapapei.com/](https://anticatrattoriapapei.com/) and [/menu-3/](https://anticatrattoriapapei.com/menu-3/) unless marked.
- **Navigation:** Home; Prenota ([/reservations/](https://anticatrattoriapapei.com/reservations/)); I nostri piatti ([/photogallery-2/](https://anticatrattoriapapei.com/photogallery-2/)); Il locale ([/il-locale/](https://anticatrattoriapapei.com/il-locale/)); Menu ([/menu-3/](https://anticatrattoriapapei.com/menu-3/)); Contatti ([/contact-2/](https://anticatrattoriapapei.com/contact-2/)); Instagram; Facebook. English and German pages exist in the index but are not linked from the Italian navigation: [/the-restaurant/](https://anticatrattoriapapei.com/the-restaurant/), [/reservierung/](https://anticatrattoriapapei.com/reservierung/) (SNIPPET).
- **Home title:** "Antica Trattoria Papei | Siena". **Menu title:** "Menu | Antica Trattoria Papei". **Meta description:** none on either page. **Meta keywords:** none. Canonical to itself on both. No hreflang.
- **H1 (seven on the home page, produced by the theme):** an empty one, "Antica Trattoria Papei", "scopri", "di Siena", "Il menu", "cucina e tradizione", "toscane". **H2s:** "Navigazione principale", "Welcome to", "La nostra storia", "Nel cuore", "Scopri", "Un mix perfetto", "Delizie".
- **Menu format.** The best menu page in the set for search: 79 dishes, each an H4 with the Italian name, an English description line and a price as text (78 price strings; pici at €12.00, soups €9.00, "Fiorentina … €48.00 / kg"). Sections as H2: Antipasti, Pasta fresca, zuppe toscane, Secondi piatti, Carne alla brace, Contorni, Formaggi, Dessert. No allergens.
- **Booking.** A reservations page linked as "Prenota" (not opened); a contact-form plugin is loaded, so a form is likely (INFERRED). No booking platform in the source.
- **Structured data:** no JSON-LD; theme microdata only (WebPage, ImageGallery).
- **Platform and speed signals.** Generator "WordPress 5.8.15" (several major versions behind the other WordPress sites read); theme "Rosa"; plugins include Contact Form 7 and a cookie notice; footer "2015 © Realizzato con passione da Tobuweb"; server header shows a web application firewall. 24 external scripts, 10 stylesheets, JPG images.
- **Content.** About 500 words on the home page, of which roughly 190 are cookie-banner text. Story: opened "il 26 aprile 1939 alla Porta dell'Arco", three generations, family-run (no names). Two home-page paragraphs are translated theme filler rather than the restaurant's own words (evidence: "Ci piace il cibo, un sacco di cibo diverso, proprio come te").
- **Rating:** not on the page.
- **Design and motion (from markup).** Full-height hero image with the heading split over it, then two-thirds-height image bands between text blocks; parallax attributes ("data-rellax") on hero layers; transparent sticky header that hides on scroll.
- **Strengths to match (INFERRED).** A complete, priced, bilingual menu as real text on its own URL; an exact founding date; parallax image bands that give the page rhythm.
- **Weaknesses to exploit (INFERRED).** No description; seven H1s; no schema; old software; filler copy; other languages unlinked; template slugs ("menu-3", "contact-2", "photogallery-2").

#### 2.5 Trattoria Fonte Giusta — Via Camollia 102
All fields OBSERVED on [https://fontegiusta.com/](https://fontegiusta.com/) and [/menu2/](https://fontegiusta.com/menu2/) unless marked.
- **Navigation:** Trattoria (home); Menù ([/menu2/](https://fontegiusta.com/menu2/)); Lista dei Vini ([/lista-dei-vini/](https://fontegiusta.com/lista-dei-vini/)); Prenota ora in Trattoria ([/prenota-ora-in-trattoria-2/](https://fontegiusta.com/prenota-ora-in-trattoria-2/)); Scuola di Cucina (separate domain, [scuoladicucinafontegiusta.com](https://www.scuoladicucinafontegiusta.com/)); English flag → [/en/](https://fontegiusta.com/en/). Linked from the body: [/braceria-bisteccheria-dry-aged-siena/](https://fontegiusta.com/braceria-bisteccheria-dry-aged-siena/). Also indexed (SNIPPET): [/menu-degustazione-ristorante-braceria-siena-centro/](https://fontegiusta.com/menu-degustazione-ristorante-braceria-siena-centro/), [/en/tasting-menus-restaurant-siena/](https://fontegiusta.com/en/tasting-menus-restaurant-siena/), [/en/book-a-table/](https://fontegiusta.com/en/book-a-table/), and a second site on [fontegiusta.it](https://fontegiusta.it/menu/).
- **Home title:** "Trattoria - Trattoria Fonte Giusta". **Home meta description:** "Trattoria tipica toscana nel centro di Siena con ampie sale: cucina toscana autentica, carne alla griglia e pasta fresca fatta in casa." **Menu title:** "Menù - Trattoria Fonte Giusta". **Menu meta description:** "Scopri il menù della Trattoria Fonte Giusta a Siena: piatti tipici toscani, pasta fatta in casa e ingredienti locali freschi." Meta keywords: none. Canonical to itself on both.
- **Languages.** Italian at the root, English in /en/ (multilingual plugin WPML in the generator tag). No hreflang tags in the source of either page read.
- **H1:** none on the home page; "Menù" on the menu page. **Home H2s:** "Chi Siamo", "Il Menù", "Meat House", "Vieni in trattoria", "Prenota ora il tuo tavolo". H3s: "Cult senesi e speciali stagionali", "Braceria e Bisteccheria", "F.A.Q.".
- **Menu format.** Dish names as real text by section (antipasti, primi, grill, secondi, contorni, dolci), for example "Pici al Ragù di Cinghiale", "Pici all'Aglione", "Fiorentina (min 1 kg)". No prices anywhere on the page and no allergens.
- **Booking.** A booking page in each language ("Prenota online"; not opened), a WhatsApp link, tel: and email. No booking platform in the source.
- **Structured data.** One JSON-LD graph from the SEO plugin: WebPage, ImageObject, BreadcrumbList, WebSite, Organization (name, url, logo). No Restaurant or LocalBusiness. A three-question FAQ is on the page with no FAQPage markup.
- **Platform and speed signals.** Generator "WordPress 7.1.5", Elementor 3.31.2 with Elementor Pro, Hello theme, WPML 4.7.6, Yoast SEO 25.6, iubenda cookie banner; credit "Designed with ♥ by Diego Orzalesi". 39 stylesheets and 15 scripts on the home page. Hero and section backgrounds are slideshows of JPG photos from 2020 (5-second slides).
- **Content.** About 430 words. Dated story with a named founder: trattoria since 2006, cooking school "Fonte Giusta Academy" since 2016 "dall'idea del fondatore Giuseppe Chiarelli". A grill section claims six display cabinets and Chianina IGP dry-aged up to 40 days. Location phrase: "tra le mura di Siena"; no landmark named. Hours on the page: Monday to Thursday dinner only, Friday to Sunday lunch and dinner.
- **Rating:** not on the page.
- **Design and motion (from markup).** Background slideshows and a "fadeIn" entrance effect on blocks; carousel component loaded.
- **Strengths to match (INFERRED).** Written descriptions on home and menu; search-phrase landing pages in two languages (grill and tasting menus); booking page per language; cooking school that earns links; founder named.
- **Weaknesses to exploit (INFERRED).** No H1 on the home page; home title wastes its first word; menu without prices; no Restaurant markup; no hreflang despite two languages; heavy page-builder output; two live domains.

#### 2.6 Osteria il Vinaio — Via Camollia (138 in text, 167 in markup)
All fields OBSERVED on [https://osteriailvinaio.it/](https://osteriailvinaio.it/) unless marked.
- **Navigation.** One-page site: Osteria (#osteria), Menu (a PDF), Contatti (#contatti), It / En ([/en/](https://osteriailvinaio.it/en/)), Facebook, Instagram. Journal and event posts exist in the index but are not linked from the home page: [/blog/](https://osteriailvinaio.it/blog/), [/category/diario/](https://osteriailvinaio.it/category/diario/) (SNIPPET).
- **Title:** "Il Vinaio - Ristorante Osteria Siena". **Meta description:** "ll Vinaio è un’osteria alimentari nel centro storico di Siena, che ha mantenuto intatto lo spirito casalingo del cibo tradizionale e del vino toscano" (it starts with a typing slip, two lower-case Ls). Meta keywords: none. Canonical to itself.
- **hreflang:** it → root, en → /en/. No x-default.
- **H1:** "Osteria il Vinaio". **H2s:** "la cucina toscana alla vecchia maniera"; the single words "osteria", "ristorante", "siena" repeated as a scrolling text band; "dove mangiare a siena la cucina toscana"; "Sapori tipici e tradizione"; "i nostri prodotti"; "Vieni a trovarci"; "DOVE SIAMO"; "contatti"; "ORARIO".
- **Menu format.** PDF only: [Italian summer 2025 menu](https://osteriailvinaio.it/wp-content/uploads/2025/11/W-MENU_ESTATE_ITA_2025.pdf) and [English version](https://osteriailvinaio.it/wp-content/uploads/2025/11/W-MENU_ESTATE_ENG_2025.pdf). No dish list in the HTML.
- **Booking.** A "prenota" button that is a tel: link. Nothing else.
- **Structured data.** Two JSON-LD blocks. The SEO plugin graph: WebPage, ImageObject, BreadcrumbList, WebSite, Organization with sameAs. A hand-written Restaurant block: name, url, email, telephone, PostalAddress ("via Camollia, 167"), openingHours "Mo - Sa 10:00-23:00", priceRange "2", servesCuisine "Toscana", acceptsReservations "false", image, aggregateRating (ratingValue 5, reviewCount 404) and menu "https://osteriailvinaio.it/menu/". That menu URL returns a 404 page titled "Pagina non trovata - Osteria Alimentari il Vinaio Siena". The street number in the markup (167) differs from the page text and map (138), and the hours differ from the visible timetable (10:00–15:00 and 18:00–22:00).
- **Platform and speed signals.** Generator "WordPress 7.1.5", Elementor 4.4.1 with Elementor Pro, Hello theme, WPML, Yoast SEO 28.9, a SiteGround caching plugin; credit "AWAK STUDIO". One combined stylesheet, 14 scripts, images in WebP with srcset and lazy loading, descriptive alt text. A page preloader element is injected by script.
- **Content.** About 440 words. Positioning: osteria and grocery, "100% Toscano", wine by the glass, short supply chain, own garden vegetables, own oil, honey, jams and beers to take home. Owners in the footer: "Bobbe e Davide Porciatti". Location: "centro storico di Siena"; no landmark.
- **Rating:** 5 from 404 reviews, declared in its own markup with no platform named.
- **Strengths to match (INFERRED).** Clean title and H1; hreflang; modern image handling; own-produce story; one keyword-phrase heading written as a search query.
- **Weaknesses to exploit (INFERRED).** Menu only as PDF; Restaurant markup with a broken menu link, a wrong street number and wrong hours; a self-declared perfect rating; phone-only booking; journal not linked from the home page.

#### 2.7 Ristorante Gallo Nero — Via del Porrione 65-67 (higher price; not like-for-like)
All fields OBSERVED on [https://www.ristorantegallonero.it/](https://www.ristorantegallonero.it/) unless marked.
- **Navigation.** One-page site with anchors: Chi siamo, Menu, La Dimora Storica, La Cantina, Experiences & Events, Dove siamo e parcheggio privato, Contatti, Istruzioni, Lavora con noi, Seguici. Language flags: Italian (root), English ([/en/](https://www.ristorantegallonero.it/en/)), Spanish ([/es/](https://www.ristorantegallonero.it/es/)). Header badges link to its Michelin Guide and Gambero Rosso pages. Buttons: "PRENOTA" → [gallonero.superbexperience.com](https://gallonero.superbexperience.com/), "GIFT CARD" → a gift-card shop on the same platform. Wine list as PDF: [listavini.pdf](https://www.ristorantegallonero.it/wp-content/uploads/2025/04/listavini.pdf).
- **Title:** "Ristorante Gallo Nero Siena – Ristorante Gallo Nero Siena" (the name twice). **Meta description:** an automatic excerpt that begins with button labels: "PRENOTA GIFT CARD Il Gallo Nero L’accoglienza in un posto unico, …". Meta keywords: none. Canonical to itself.
- **hreflang:** en, es, it. No x-default.
- **H1:** none. **H2s:** "Il Gallo Nero", "Menù", "Menù stagionale", "Menù Degustazione", "La Dimora Storica", "La Cantina", "Experiences & Events", "Dove siamo", "Servizio di parcheggio privato", "Contatti", "Istruzioni", "Lavora con noi", "Menù di San Silvestro".
- **Menu format.** Real text on the home page with prices: twelve savoury dishes at 23 to 35 euro, four desserts at 15, tasting menus 85 and 100 with wine pairings 50 and 70. An allergen line asks guests to tell staff; gluten-free and vegetarian options are mentioned. No per-dish allergens.
- **Booking.** Online through a booking platform with a card guarantee; WhatsApp, two phone numbers. The "Istruzioni" block works as an FAQ: booking and cancellation rules, allergies, duration (about 2 hours for five courses), average spend from 60 euro, groups, hours, dress code, pets, and "all'interno della ZTL" with paid parking about 800 metres away near Porta Romana or Porta Pispini and a private garage service at 35 euro.
- **Structured data.** One small JSON-LD block of type WebPage (headline, url, inLanguage, description). Theme microdata (WebPage, WPHeader, SiteNavigationElement, WPFooter). No Restaurant markup.
- **Platform and speed signals.** WordPress with the GeneratePress theme and a custom child theme, block editor, page cache, Cloudflare, Google Site Kit, an Instagram feed plugin. 9 stylesheets, 8 scripts, 64 images (56 WebP, several 2,560 px wide), 17 with empty alt text.
- **Content.** About 1,600 words. Chef named: Romano Amato. Building: ground floor of "Casatorre dei Leoni", a palazzo of 1270, also a boutique residence; cellar in an Etruscan cave with "oltre 300 etichette"; "a pochi metri da Piazza del Campo". Its Instagram feed text mentions the Michelin Guide 2027 selection.
- **Design and motion (from markup).** A 16:9 hero slider that advances every 5 seconds, first image loaded with high priority; lightbox on images.
- **Strengths to match (INFERRED).** Priced menu as text; the practical "instructions" block including ZTL and parking; three languages with hreflang; named chef; gift cards and online booking.
- **Weaknesses to exploit (INFERRED).** Duplicate title; junk description; no H1; no Restaurant markup; everything on one URL.

### B. Sites not readable in this session (SNIPPET only)

For all nine: meta description, meta keywords, hreflang, JSON-LD, H1/H2, word count, speed and design are **not observable**. Titles are as shown by the search index and may differ from the real title tag.

#### 2.8 Osteria Le Sorelline — Via dei Rossi 76 (same street)
- Home: [https://www.osterialesorelline.it/](https://www.osterialesorelline.it/). Indexed title: "Osteria Le Sorelline Siena". Only this one page surfaced; possibly a one-page site (INFERRED).
- Content (search summary): small, family-run; near Piazza Provenzano; traditional Sienese food; began as a delicatessen that later added a dining room; lunch 12:30–14:30, dinner 19:30–22:30, closed Tuesday; a landline number. No names, dates, contrada or menu surfaced. — [osterialesorelline.it](https://www.osterialesorelline.it/)
- A third-party directory lists it with a different address and another restaurant's web address. — [World Travel Guide](https://worldtravelguide.net/guides/europe/italy/siena/restaurants)
- Weakness to exploit (INFERRED): one indexed page and no indexed menu, on the same street as Osteria dei Rossi.

#### 2.9 Osteria Le Logge — Via del Porrione 33 (benchmark, higher price)
- Indexed pages: "Menu - Osteria le Logge - Siena" — [/en/menu](http://osterialelogge.it/en/menu); wine-list pages by type, for example "White wines - wines - Osteria le Logge - Siena" — [/en/vini-bianchi-vini](http://osterialelogge.it/en/vini-bianchi-vini), and a producer page "Gianni Brunelli - Magnum - Osteria le Logge - Siena" — [/en/gianni-brunelli-grandi-formati](http://osterialelogge.it/en/gianni-brunelli-grandi-formati); listing and author pages such as "Super User - Osteria le Logge - Siena" — [/menu/itemlist/user/709-superuser](http://osterialelogge.it/menu/itemlist/user/709-superuser).
- Languages: Italian at the root, English in /en/ (from URLs). — [/en/menu](http://osterialelogge.it/en/menu)
- Menu (search summary): text with prices; antipasti 18–23 euro, primi 23–26, secondi 30–32, desserts 13, Chianina by weight; seasonal. — [/en/menu](http://osterialelogge.it/en/menu)
- Platform: Joomla with the K2 extension (INFERRED from "/itemlist/" routes and the default author name "Super User"). The site's TLS certificate was rejected as self-signed in this session (OBSERVED), which, if visitors see the same, means browser security warnings.
- Third-party: Michelin lists it as contemporary cuisine in a former grocer's shop, with a cellar in a tunnel of Etruscan origin. — [Michelin Guide](https://guide.michelin.com/en/toscana/siena/restaurant/osteria-le-logge)

#### 2.10 Antica Osteria da Divo — Via Franciosa 25/29
- Indexed pages: "Home - ANTICA OSTERIA DA DIVO" — [/?lang=en](https://www.osteriadadivo.com/?lang=en); "The Osteria - Antica Osteria da Divo" — [/en/osteria-eng/](https://www.osteriadadivo.com/en/osteria-eng/); "Menu’ - Antica Osteria da Divo" — [/en/menu-eng/](https://www.osteriadadivo.com/en/menu-eng/); "Truffle Menu’ - Antica Osteria da Divo" — [/en/truffle-menu/](https://www.osteriadadivo.com/en/truffle-menu/); "Contact us - Antica Osteria da Divo" — [/en/contact-us/](https://www.osteriadadivo.com/en/contact-us/); "The Restaurant - ANTICA OSTERIA DA DIVO" — [/osteria/?lang=en](https://www.osteriadadivo.com/osteria/?lang=en).
- English exists under two URL schemes at once (an /en/ folder and a "?lang=en" parameter). — [/en/osteria-eng/](https://www.osteriadadivo.com/en/osteria-eng/); [/osteria/?lang=en](https://www.osteriadadivo.com/osteria/?lang=en)
- Content (search summary): under the cathedral, a few steps from Piazza del Campo; rooms cut from Etruscan tombs in the tuff; three levels; a medieval hall with 40 seats and a lower room with 20 for private events; pappardelle with wild boar, Florentine T-bone, cantucci with Vin Santo; closed Tuesday; two landlines and a free-mail address. — [/en/osteria-eng/](https://www.osteriadadivo.com/en/osteria-eng/); [/en/contact-us/](https://www.osteriadadivo.com/en/contact-us/)
- Worth matching (INFERRED): a dedicated truffle menu page; rooms described with seat counts and uses.

#### 2.11 Osteria La Sosta di Violante — Via Pantaneto 115
- Indexed pages, all titled "Osteria La Sosta di Violante": [/en/](https://www.lasostadiviolante.it/en/), [/en/menu/](https://www.lasostadiviolante.it/en/menu/), [/en/main-home/](https://www.lasostadiviolante.it/en/main-home/), [/en/contattaci/](https://www.lasostadiviolante.it/en/contattaci/).
- Menu (search summary): text with prices; pici with capocollo ragù, Florentine steak by weight, chicken "al mattone"; most dishes about 12 to 22 euro. — [/en/menu/](https://www.lasostadiviolante.it/en/menu/)
- Content (search summary): 18th-century building, two vaulted rooms for about thirty guests, about 40 outdoor seats, 60–70 labels; the main page also shows a second address (Via dei Termini 7) and a link to an enoteca's booking page (to confirm what that is). — [/en/](https://www.lasostadiviolante.it/en/); [/en/main-home/](https://www.lasostadiviolante.it/en/main-home/)
- Rating: 4.6 from 2,769 reviews on a third-party listing (platform to confirm). — [Wanderlog](https://wanderlog.com/place/details/412733/osteria-la-sosta-di-violante)

#### 2.12 Osteria Boccon del Prete — Via San Pietro 17
- Indexed pages: "Home - Osteria Boccon del Prete" — [/](https://boccondelprete.it/); "Osteria toscana menu - Osteria Boccon del Prete Siena" — [/menu/](https://boccondelprete.it/menu/).
- Menu (search summary): text with prices; ribollita, ossobuco, Florentine T-bone by weight, tagliatelle with wild boar; about 5 to 20 euro; content about 3.7 years old. — [/menu/](https://boccondelprete.it/menu/)
- The search summary refers to embedded business data with hours of 09:00–17:00 daily, which suggests business markup left at default values (INFERRED; to confirm). — [/](https://boccondelprete.it/)

#### 2.13 Osteria Nonna Gina — Pian dei Mantellini 2
- Indexed pages: "Osteria Nonna Gina" — [/](https://www.osterianonnagina.it/); "Osteria toscana Siena: Osteria Nonna Gina - cucina tipica" — [/nonnagina.php](https://www.osterianonnagina.it/nonnagina.php); "Piatti tipici toscani Siena: osteria - cucina tipica toscana e senese" — [/menu.php](https://www.osterianonnagina.it/menu.php).
- Content (search summary): family-run since 1992, named after the owner's grandmother; pici with the house sauce, gnocchi, wild boar ragù; book ahead for fresh gnocchi. — [/nonnagina.php](https://www.osterianonnagina.it/nonnagina.php); [/menu.php](https://www.osterianonnagina.it/menu.php)
- Platform: hand-built PHP pages (INFERRED from URLs).

#### 2.14 Osteria Il Grattacielo — Via dei Pontani 8 (near)
- Indexed pages on Google Sites: "Osteria Il Grattacielo dal 1840 a Siena" — [home](https://sites.google.com/view/ilgrattacielo1840); "www.osteriailgrattacielo.it - MENU'" — [menu](https://sites.google.com/view/ilgrattacielo1840/home-page/menu); "www.osteriailgrattacielo.it - DOVE SIAMO" — [dove siamo](https://sites.google.com/view/ilgrattacielo1840/home-page/dove-siamo); "www.osteriailgrattacielo.it - CONTATTI" — [contatti](https://sites.google.com/view/ilgrattacielo1840/home-page/contatti); "STORIA HISTORY" — [storia](https://www.sites.google.com/view/ilgrattacielo1840/home-page/storia-history).
- Content (search summary): claims to be the oldest osteria in Siena, open since 1840 and renamed in 1951; about 100 metres from Piazza del Campo; weekly menu with pici, pappardelle, ribollita; a mobile number. The 1840 claim is the owner's own. — [home](https://sites.google.com/view/ilgrattacielo1840); [menu](https://sites.google.com/view/ilgrattacielo1840/home-page/menu)

#### 2.15 Compagnia dei Vinattieri — Via delle Terme 79 / Via dei Pittori 1 (near)
- Indexed pages: "Vinattieri" — [/](https://www.vinattieri.net/); "Carta dei vini - Siena" (last updated February 2020) — [/cartavini.htm](https://www.vinattieri.net/cartavini.htm); "capodanno 2023 - Siena" — [/cenone.htm](https://www.vinattieri.net/cenone.htm); "Regala una cena! - Siena" — [/regala_cena.html](http://www.vinattieri.net/regala_cena.html).
- Booking by WhatsApp is stated; gift-dinner vouchers have their own page. Static ".htm" pages (INFERRED from URLs). — [/](https://www.vinattieri.net/)

#### 2.16 Osteria Babazuf — Via Pantaneto 85/87
- Indexed pages: "Osteria Babazuf: Home - Siena" — [/index.php/en/homepage/](https://www.osteriababazuf.com/index.php/en/homepage/); "Contacts - Osteria Babazuf" — [/index.php/en/contacts/](https://www.osteriababazuf.com/index.php/en/contacts/); "Cena 31 Dicembre 2025 - Osteria Babazuf" — [/index.php/it/cena-31-dicembre-2025/](https://www.osteriababazuf.com/index.php/it/cena-31-dicembre-2025/); recipe and spice posts from 2015 and 2016 — [example](https://www.osteriababazuf.com/index.php/it/2016/03/23/cannella-e-budino-senese/).
- Italian and English in /it/ and /en/ folders (from URLs); WordPress (INFERRED from category, author and dated post URLs). The recipe journal stopped in 2016.

### Inferences
- Platform split among the seven sites read: four WordPress (two on the Elementor page builder, one on SiteOrigin, one on GeneratePress with blocks), one older WordPress with a purchased theme, one static template site, one hand-built static site. The hand-built static site is the only one with complete markup and the lightest page. (INFERRED from generator tags, theme paths and counts above.)
- Having an SEO plugin does not mean having restaurant markup: three WordPress sites output only generic WebPage / WebSite / Organization graphs and none of them marks itself up as a Restaurant through the plugin.
- Story devices: the building (Etruscan cellar or rooms at Taverna di San Giuseppe, Gallo Nero, Da Divo; a 1270 palazzo at Gallo Nero; a 12th-century space at the Taverna) is used more than people. Where people appear they are thin: first names only (Taverna), an owner in one sentence (Permalico), a founder in one sentence (Fonte Giusta), owners in a footer (Il Vinaio), a chef's name under a quote (Gallo Nero). Trombicche, the strongest site, names every supplier but nobody on its own team.
- Every site that anchors its location uses Piazza del Campo (and the Duomo or Fonte Gaia). None of the pages read mentions San Francesco, Provenzano, Banchi di Sopra, Via dei Montanini or a contrada as a place to be found; Trombicche's only contrada mention is inside an image description in its markup.

### Gaps
- Nine sites, including the two most relevant (Le Sorelline for location, Le Logge as the quality benchmark), have no OBSERVED fields.
- Pages not opened on the seven sites read: English and Spanish versions, booking pages, wine-list pages, story pages, gallery pages, journal articles. Their titles and markup are unknown.
- Ratings: only Trombicche (self-stated Google figure) and Il Vinaio (self-declared in markup) are recorded.

---

## 3. Comparison table

### Takeaway
Reading across the seven observed rows: one site does almost everything, six do little. Descriptions exist on five of seven, hreflang on three, Restaurant markup on two (one of them faulty), a priced text menu on three, online booking on two.

### Cited Findings

Key: O = OBSERVED, S = SNIPPET, I = INFERRED, n/o = not observable. Sources are the blocks in section 2.

**Sites read directly (all cells O unless marked)**

| Competitor | Platform | Languages and hreflang | Home title | Meta description | H1 on home | Menu: format, prices, allergens | Booking | JSON-LD | Story and proof | Main weakness (I) |
|---|---|---|---|---|---|---|---|---|---|---|
| [Trombicche](https://www.datrombicche.it/) | Hand-built static, Vercel (I) | IT, EN at /en/; hreflang it, en, x-default; menu in 5 languages off-site | "Trombicche Siena — Cucina senese, Via delle Terme 66" | Yes, with rating, address and call to action; meta keywords too | 1, hidden from view | Text with prices on home + PDF; gluten-free and vegetarian note, no per-dish allergens | Online platform, WhatsApp, phone; persistent buttons | Restaurant+LocalBusiness with Menu, FAQPage (13), Blog, Person, ImageObject, WebPage+Breadcrumb, WebSite | Dated history from 1930, Slow Food, named producers, press wall, FAQ, ZTL and parking, journal, Google 4.3 / 995 self-stated | One URL for everything; no German; no named people |
| [Taverna di San Giuseppe](https://www.tavernasangiuseppe.it/) | WordPress 7.1.5, SiteOrigin, Yoast | IT and EN mixed on one page; no hreflang | "Taverna di San Giuseppe - La Taverna di San Giuseppe" | None | 2, both a booking warning | No menu on site; New Year menu page without prices | Phone only by policy; number not a link | WebPage, Breadcrumb, WebSite only | 12th-century space, Etruscan cellar, 600 labels, 300 m from the Campo, Leccio d'Oro 2025, Michelin link | No description, no menu, no restaurant markup, heavy page |
| [Permalico](https://www.permalico.it/) | Static template site | IT only; no hreflang | "Permalico Osteria a Siena cucina Toscana" | Yes | None | Drawn by script; no dishes or prices in source | Phone only; tel: button in header; Glovo, Deliveroo | None | Named owner, 70 labels, "pochi metri da Piazza del Campo e dal Duomo", quoted reviews | Menu invisible in source; two street numbers |
| [Papei](https://anticatrattoriapapei.com/) | WordPress 5.8.15, Rosa theme | IT nav; EN and DE pages exist unlinked (S); no hreflang | "Antica Trattoria Papei \| Siena" | None | 7 | Own URL; 79 dishes as text, IT + EN, all priced; no allergens | Reservations page; form likely (I) | None; theme microdata | 26 April 1939, three generations | No description, seven H1s, old software, filler copy |
| [Fonte Giusta](https://fontegiusta.com/) | WordPress 7.1.5, Elementor, WPML, Yoast | IT, EN at /en/; no hreflang in source | "Trattoria - Trattoria Fonte Giusta" | Yes (home and menu) | None | Own URL; dish names as text; no prices; no allergens | Booking page per language, WhatsApp, phone | WebPage, Breadcrumb, WebSite, Organization | Since 2006, named founder, cooking school 2016, dry-aged Chianina, 3-question FAQ | No H1, no prices, no restaurant markup, two domains |
| [Il Vinaio](https://osteriailvinaio.it/) | WordPress 7.1.5, Elementor, WPML, Yoast | IT, EN at /en/; hreflang it, en | "Il Vinaio - Ristorante Osteria Siena" | Yes (with a typing slip) | 1 | PDF only (IT and EN) | Phone only (tel: button) | Plugin graph + Restaurant with aggregateRating 5 / 404, menu URL that 404s, wrong street number | Osteria + grocery, own produce, owners named in footer | PDF menu; faulty markup |
| [Gallo Nero](https://www.ristorantegallonero.it/) | WordPress, GeneratePress, blocks | IT, EN, ES; hreflang en, es, it | "Ristorante Gallo Nero Siena – Ristorante Gallo Nero Siena" | Automatic, starts with button labels | None | Text with prices on home; "tell staff" allergen line; wine list PDF | Online platform with card guarantee, WhatsApp, phone, gift cards | WebPage only | Named chef, 1270 palazzo, Etruscan cellar 300+ labels, ZTL and parking block | Duplicate title, junk description, no H1 |

**Sites not readable (all cells S unless marked; head tags, schema and speed n/o)**

| Competitor | Platform (I) | Languages | Home title as indexed | Menu | Booking | Story hook |
|---|---|---|---|---|---|---|
| [Le Sorelline](https://www.osterialesorelline.it/) | n/o | n/o | "Osteria Le Sorelline Siena" | none indexed | phone | family-run, former delicatessen, near Piazza Provenzano |
| [Le Logge](http://osterialelogge.it/en/menu) | Joomla + K2 | IT, EN at /en/ | n/o (menu: "Menu - Osteria le Logge - Siena") | text, priced; wine list as pages | n/o | old grocer's shop, Etruscan tunnel cellar (Michelin) |
| [Da Divo](https://www.osteriadadivo.com/?lang=en) | WordPress + language plugin | IT, EN (two URL schemes) | "Home - ANTICA OSTERIA DA DIVO" | text; prices n/o; truffle menu page | phone, free-mail | Etruscan tomb rooms, three levels |
| [La Sosta di Violante](https://www.lasostadiviolante.it/en/) | WordPress theme | EN at /en/ | "Osteria La Sosta di Violante" (same on every page) | text, priced | phone, free-mail | 18th-century vaulted rooms |
| [Boccon del Prete](https://boccondelprete.it/) | WordPress (weak evidence) | IT | "Home - Osteria Boccon del Prete" | text, priced | phone, free-mail | family-style room, pici |
| [Nonna Gina](https://www.osterianonnagina.it/) | hand-built PHP | IT | "Osteria Nonna Gina" | text; prices n/o | phone | since 1992, named for the grandmother |
| [Il Grattacielo](https://sites.google.com/view/ilgrattacielo1840) | Google Sites | IT + EN on one page (I) | "Osteria Il Grattacielo dal 1840 a Siena" | text, weekly; prices n/o | mobile phone | "oldest osteria in Siena", 1840 |
| [Vinattieri](https://www.vinattieri.net/) | static .htm | n/o | "Vinattieri" | wine list page from 2020 | WhatsApp | cellar restaurant, gift dinners |
| [Babazuf](https://www.osteriababazuf.com/index.php/en/homepage/) | WordPress | IT, EN folders | "Osteria Babazuf: Home - Siena" | n/o | phone | recipe journal 2015–2016 |

### Inferences
- The realistic bar for the new site is "Trombicche's markup and content depth, Papei's menu page, on a multi-page structure neither of them has".

### Gaps
- No design, speed-test or rating columns: none could be measured here. Counts of scripts, stylesheets and image formats in section 2 are the only speed evidence.

---

## 4. Title and description patterns, and recurring keywords

### Takeaway
The dominant title pattern is the CMS default "page name – brand", often with a wasted first word; only Trombicche and Permalico write titles and descriptions on purpose. Descriptions, where present, follow one template: type of place + "centro di Siena" or distance from Piazza del Campo + "cucina toscana" + pasta or wine.

### Cited Findings

**Ten title patterns (each quoted as OBSERVED, or SNIPPET where marked)**
1. "Page – Brand" default: "Menù - Trattoria Fonte Giusta"; "Menu | Antica Trattoria Papei"; "Contact - La Taverna di San Giuseppe" (S). — [Fonte Giusta menu](https://fontegiusta.com/menu2/); [Papei menu](https://anticatrattoriapapei.com/menu-3/); [Taverna contact](https://www.tavernasangiuseppe.it/contact/)
2. Brand repeated: "Taverna di San Giuseppe - La Taverna di San Giuseppe"; "Ristorante Gallo Nero Siena – Ristorante Gallo Nero Siena"; "Trattoria - Trattoria Fonte Giusta". — [Taverna](https://www.tavernasangiuseppe.it/); [Gallo Nero](https://www.ristorantegallonero.it/); [Fonte Giusta](https://fontegiusta.com/)
3. "Home" as first word (S): "Home - Osteria Boccon del Prete"; "Home - ANTICA OSTERIA DA DIVO". — [Boccon del Prete](https://boccondelprete.it/); [Da Divo](https://www.osteriadadivo.com/?lang=en)
4. Brand + city: "Antica Trattoria Papei | Siena"; "Osteria Le Sorelline Siena" (S). — [Papei](https://anticatrattoriapapei.com/); [Le Sorelline](https://www.osterialesorelline.it/)
5. Brand + type words + city: "Il Vinaio - Ristorante Osteria Siena". — [Il Vinaio](https://osteriailvinaio.it/)
6. Brand + type + "a Siena" + cuisine: "Permalico Osteria a Siena cucina Toscana"; "Menu Osteria Permalico - Cucina Toscana da Permalico Osteria a Siena". — [Permalico](https://www.permalico.it/); [Permalico menu](https://www.permalico.it/it/menu.html)
7. Brand + city — cuisine, street address: "Trombicche Siena — Cucina senese, Via delle Terme 66". — [Trombicche](https://www.datrombicche.it/)
8. Search phrase first, brand second (S): "Osteria toscana Siena: Osteria Nonna Gina - cucina tipica"; "Piatti tipici toscani Siena: osteria - cucina tipica toscana e senese". — [Nonna Gina about](https://www.osterianonnagina.it/nonnagina.php); [Nonna Gina menu](https://www.osterianonnagina.it/menu.php)
9. Long-tail landing page (S): "Menù Degustazione Ristorante Braceria Siena Centro"; "Tasting food experience menus restaurant Siena downtown - Fonte Giusta". — [Fonte Giusta IT](https://fontegiusta.com/menu-degustazione-ristorante-braceria-siena-centro/); [Fonte Giusta EN](https://fontegiusta.com/en/tasting-menus-restaurant-siena/)
10. Slug or accident as title: "cenone2026 - La Taverna di San Giuseppe" (O); "comingsoon2 - Ristorante Gallo Nero Siena" (S); "Super User - Osteria le Logge - Siena" (S); "Osteria Alimentari il Vinaio Siena: Sito in Costruzione" on the English home (S). — [Taverna](https://www.tavernasangiuseppe.it/cenone2026/); [Gallo Nero](https://www.ristorantegallonero.it/comingsoon2/); [Le Logge](http://osterialelogge.it/menu/itemlist/user/709-superuser); [Il Vinaio EN](https://osteriailvinaio.it/en/)
- One more worth noting: heritage year in the title (S), "Osteria Il Grattacielo dal 1840 a Siena". — [Grattacielo](https://sites.google.com/view/ilgrattacielo1840)

**Description patterns (OBSERVED; full strings are in section 2)**
- Template A, "what + where + cuisine + pasta or wine": Permalico (type + "a pochi metri da Piazza del Campo" + "piatti tipici della cucina Toscana" + wines); Fonte Giusta home ("Trattoria tipica toscana nel centro di Siena" + grill + fresh pasta); Fonte Giusta menu ("Scopri il menù …" + typical dishes + home-made pasta + local ingredients); Il Vinaio ("osteria alimentari nel centro storico di Siena" + traditional food + Tuscan wine). — [Permalico](https://www.permalico.it/); [Fonte Giusta](https://fontegiusta.com/); [Fonte Giusta menu](https://fontegiusta.com/menu2/); [Il Vinaio](https://osteriailvinaio.it/)
- Template B, "proof + action": Trombicche (type + centre + open kitchen + Slow Food year + address + Google rating and count + "Prenota online o scrivici su WhatsApp"). It is the only description with a number, a credential or a call to action. — [Trombicche](https://www.datrombicche.it/)
- No description at all: Taverna di San Giuseppe (home and New Year page), Papei (home and menu), Permalico menu page. — [Taverna](https://www.tavernasangiuseppe.it/); [Papei](https://anticatrattoriapapei.com/); [Permalico menu](https://www.permalico.it/it/menu.html)
- Accidental description: Gallo Nero's begins with the button labels "PRENOTA GIFT CARD". — [Gallo Nero](https://www.ristorantegallonero.it/)
- Lengths of the written ones run from about 125 to 160 characters (counted from the strings in section 2).

**Meta keywords (OBSERVED).** Only Trombicche uses the tag: "osteria Siena, cucina senese tradizionale, Cinta Senese DOP, pici senesi, Slow Food Siena, Via delle Terme 66". — [Trombicche](https://www.datrombicche.it/)

**Recurring words**
- In titles and descriptions read (O): "osteria", "trattoria", "ristorante", "Siena", "centro di Siena" / "centro storico di Siena", "cucina toscana", "cucina senese", "piatti tipici", "tipica toscana", "pasta fresca / fatta in casa", "vini", "Piazza del Campo". — title and description sources above
- In headings (O): Il Vinaio writes a search query as a heading, "dove mangiare a siena la cucina toscana"; Trombicche's FAQ headings are full questions; Permalico repeats "Osteria a Siena". — [Il Vinaio](https://osteriailvinaio.it/); [Trombicche](https://www.datrombicche.it/); [Permalico](https://www.permalico.it/)
- Location phrases (O): "a 300 metri dalla Piazza del Campo" (Taverna); "a pochi metri da Piazza del Campo e dal Duomo" (Permalico); "a due minuti da Piazza del Campo", "A due passi da Fonte Gaia" (Trombicche); "a pochi metri da Piazza del Campo" (Gallo Nero); "tra le mura di Siena" (Fonte Giusta). — [Taverna](https://www.tavernasangiuseppe.it/); [Permalico](https://www.permalico.it/); [Trombicche](https://www.datrombicche.it/); [Gallo Nero](https://www.ristorantegallonero.it/); [Fonte Giusta](https://fontegiusta.com/)
- Dishes named as text on pages read (O): pici (Trombicche, Papei, Fonte Giusta), cinghiale (Papei "Pappardelle al cinghiale", "Cinghiale in umido con olive"; Fonte Giusta "Pici al Ragù di Cinghiale"), Fiorentina (Papei per kg; Fonte Giusta "min 1 kg"), tartufo (Fonte Giusta tortelli; Gallo Nero raviolo; Taverna New Year menu), ribollita and pappa al pomodoro (Papei, Fonte Giusta), Cinta Senese (Trombicche, Gallo Nero). — [Papei menu](https://anticatrattoriapapei.com/menu-3/); [Fonte Giusta menu](https://fontegiusta.com/menu2/); [Trombicche](https://www.datrombicche.it/); [Gallo Nero](https://www.ristorantegallonero.it/)
- Cellar size as a selling point (O): about 600 labels (Taverna), over 300 (Gallo Nero), 70 (Permalico). — [Taverna](https://www.tavernasangiuseppe.it/); [Gallo Nero](https://www.ristorantegallonero.it/); [Permalico](https://www.permalico.it/)
- No title read or indexed contains a dish name (the one exception is Da Divo's "Truffle Menu’", S), a contrada, "centro storico" or a neighbourhood other than "Siena Centro" (Fonte Giusta landing page, S). — [Da Divo](https://www.osteriadadivo.com/en/truffle-menu/); [Fonte Giusta](https://fontegiusta.com/menu-degustazione-ristorante-braceria-siena-centro/)

### Inferences
- A home title on Trombicche's model with a neighbourhood cue (brand, cuisine, San Francesco or street, Siena) and a Template B description would out-specify fifteen of sixteen rivals and match the sixteenth.
- Separate titled pages for menu, wine cellar, find-us and the signature dishes are uncontested: the three strongest sites for content (Trombicche, Gallo Nero, Taverna) are one-pagers with one title each.
- If the founder can give a label count for the cellar, state it; the convention is established. The number is a fact to confirm with the founder.

### Gaps
- Descriptions and exact titles for the nine unread sites are unknown.
- English, German and Spanish titles and descriptions were not read on any site.

---

## 5. Gap list

### Takeaway
Because Trombicche already covers FAQ, ZTL and parking, Restaurant and Menu markup, a journal, hreflang and a fast static build, "nobody does this" is true only for: a multi-page structure with one intent per URL, a dedicated priced menu page with full Menu markup and per-dish allergens, German, named people with the contrada, north-east neighbourhood anchors, dish-level pages, and a wine-cellar page as text. Against the other fifteen sites almost every basic is open.

### Cited Findings

Counts below are over the seven sites read (OBSERVED) unless a line says otherwise.

| What | Who has it | Evidence |
|---|---|---|
| Written meta description on the home page | 4 of 7 (Trombicche, Permalico, Fonte Giusta, Il Vinaio); Gallo Nero's is accidental; none at Taverna and Papei | section 2 |
| Exactly one meaningful, visible H1 on the home page | 1 of 7 (Il Vinaio). Trombicche's is hidden; Taverna has 2 warnings; Papei has 7; Permalico, Fonte Giusta and Gallo Nero have none | section 2 |
| hreflang | 3 of 7 (Trombicche with x-default; Il Vinaio and Gallo Nero without) | section 2 |
| German pages | 0 of 7 linked. One German reservation page exists at Papei (SNIPPET) — [link](https://anticatrattoriapapei.com/reservierung/) | 2.4 |
| English pages | 5 of 7 (not Permalico; Taverna mixes both languages on one page) | section 2 |
| Restaurant or LocalBusiness JSON-LD | 2 of 7 (Trombicche complete; Il Vinaio with errors) | 2.1, 2.6 |
| Menu / MenuSection / MenuItem markup | 1 of 7 (Trombicche, six items) | 2.1 |
| FAQPage markup | 1 of 7 (Trombicche). Fonte Giusta and Gallo Nero have FAQ-like text without markup | 2.1, 2.5, 2.7 |
| BreadcrumbList | 4 of 7 (Trombicche, Taverna, Fonte Giusta, Il Vinaio), all single-item trails | section 2 |
| aggregateRating in markup | 1 of 7 (Il Vinaio, self-declared 5 from 404) | 2.6 |
| Menu as real text with prices | 3 of 7 (Papei on its own URL; Trombicche and Gallo Nero on the home page). Fonte Giusta: text without prices. Permalico: script-drawn. Il Vinaio: PDF. Taverna: none | section 2 |
| Per-dish allergens | 0 of 7. Trombicche and Gallo Nero carry a general line only | 2.1, 2.7 |
| Dedicated menu URL with dishes as text | 2 of 7 (Papei, Fonte Giusta) | 2.4, 2.5 |
| Wine list as text on the site | 0 of 7 read on the pages fetched: Trombicche links a Google Drive file, Gallo Nero and the Taverna a PDF; Fonte Giusta and Permalico have wine pages that were not opened. Le Logge has wine pages by type (SNIPPET) | section 2 |
| Online booking without a phone call | 2 of 7 (Trombicche, Gallo Nero) plus booking pages at Fonte Giusta and Papei (content not opened). Phone only: Taverna, Permalico, Il Vinaio | section 2 |
| TheFork, OpenTable or Quandoo widget | 0 of 7: none of the three names appears in any home-page source | section 2 |
| Persistent booking button | 2 of 7 clearly (Trombicche floating contacts; Permalico tel: button in header); Gallo Nero has a "PRENOTA" button near the top | 2.1, 2.3, 2.7 |
| Find-us content with ZTL and parking | 2 of 7 (Trombicche, Gallo Nero). No site has it on its own URL | 2.1, 2.7 |
| Story with full names and roles | 0 of 7. First names, a single owner or founder, or footer names only | section 2 |
| Contrada in visible copy | 0 of 7 | section 2 |
| Named producers | 1 of 7 (Trombicche) | 2.1 |
| Journal linked from the home page | 1 of 7 (Trombicche; six articles, latest dated December 2024). Il Vinaio has posts that the home page does not link (SNIPPET) | 2.1, 2.6 |
| Dish-level pages | 0 of 7. Nearest: Fonte Giusta's grill and tasting landing pages; Da Divo's truffle menu page (SNIPPET) | 2.5, 2.10 |
| Multi-page site with distinct titled pages for story, menu, wine, find-us | 3 of 7 partly (Permalico, Papei, Fonte Giusta); the four richest in content are one-pagers | section 2 |
| Modern image formats | 3 of 7 mostly WebP (Trombicche, Il Vinaio, Gallo Nero); JPG or PNG at Taverna, Permalico, Papei, Fonte Giusta | section 2 |
| Light page (few requests) | 1 of 7 (Trombicche: 1 script, 4 stylesheet links). Others: 8 to 29 scripts, 5 to 39 stylesheets | section 2 |
| Consistent address and hours across page and markup | Trombicche and Gallo Nero consistent on the pages read; Permalico prints two street numbers; Il Vinaio's markup contradicts its text | 2.3, 2.6 |

- Google's guidelines say pages using LocalBusiness or Organization markup are "ineligible for star review feature" when the business controls the reviews about itself, including through embedded third-party widgets. — [Google Search Central, review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

### Inferences
What the new Osteria dei Rossi site can do that none or few of these do:
1. **One intent per page**: home, menu, wine cellar, story, find-us, booking, journal, each with its own title, description and H1. The best-written rival pages are one-pagers.
2. **A priced HTML menu on its own URL with complete Menu markup and per-dish allergens**, in Italian and English. Papei has the text, Trombicche has a sample of the markup, nobody has both, and nobody shows allergens per dish.
3. **German** next to English, with hreflang including x-default. No rival offers German in its navigation.
4. **A find-us page for the north-east side of the centre**: ZTL, nearest car parks, walking routes from San Francesco, Provenzano, Banchi di Sopra and Via dei Montanini. Every rival anchors on Piazza del Campo; nobody claims this side.
5. **People and contrada**: names, roles and photographs, and the Bruco as part of the story. No rival does either properly. (Names and facts must come from the founder.)
6. **Dish sections or pages** for pici, cinghiale, bistecca alla fiorentina and tartufo, and a **wine-cellar page as text** with a label count if the founder confirms one. No rival has dish-level pages; wine lists are PDFs or off-site files.
7. **An FAQ written as real questions with FAQPage markup**, matching Trombicche's approach, plus Restaurant markup that is accurate (the one other attempt, Il Vinaio, has a broken menu link and a wrong address).
8. **Ratings quoted honestly in text with the source and date**, as Trombicche does, rather than self-declared rating markup, which Google does not reward for a business's own pages.
9. **Booking that works without a call and is always in view**. Only two of seven rivals offer it.
10. **A light, static build with modern images**. Only Trombicche has one; the WordPress sites carry 15 to 29 scripts.
11. **Clean hygiene**: one visible H1, written descriptions everywhere, no PDFs as the only menu, no leftover template pages, one address and one timetable everywhere.
12. **A journal that keeps its promise**: Trombicche announces monthly articles and its markup lists none after December 2024.

### Gaps
- Whether the nine unread sites change any "none" or "few" above is unknown. Le Logge in particular may already have a wine list as text and a priced bilingual menu (SNIPPET evidence says so).
- Speed is judged from request counts and image formats in the source, not from a measured test.
- Booking pages at Fonte Giusta and Papei were not opened, so whether they hold a form or a widget is not known.

---

## 6. Opening animation, video and scroll storytelling

### Takeaway
No site read has an intro animation or video in its source. The only scroll-led narrative is Trombicche's nine numbered chapters with reveal-on-scroll; Papei has parallax image bands from its theme; the rest use ordinary sliders.

### Cited Findings
- **Trombicche (OBSERVED, markup and inline script).** The page is organised as nine numbered chapters, each introduced by a small label and a headline: "01 · Il manifesto", "02 · Chi Siamo", "03 · La Carta", "04 · Quando Siamo Qui", "05 · Chi è già venuto", "06 · Dal bancone al feed", "07 · Diario di Siena", "08 · Domande Frequenti", "09 · Vieni". The cover shows the street address in spaced capitals, a one-line claim and a grid of six short "signals" (identity, open kitchen, recognition, address, booking advice, rating) above the two calls to action. An inline script adds an "active" class to elements marked "reveal" when 7% of them enters the viewport, and a second observer reveals photo-grid cells one after another. The history is a short dated timeline. No slider, no video, no autoplay. What the transitions look like depends on the stylesheet, which was not fetched. — [datrombicche.it](https://www.datrombicche.it/)
- **Papei (OBSERVED, markup).** A full-height opening image with "Welcome to / Antica Trattoria Papei / Cucina tipica Toscana" and a "Prenota" button over it; further image bands two-thirds of the screen high carry split headlines ("Nel cuore / di Siena", "Un mix perfetto / cucina e tradizione", "Delizie / toscane"); hero layers carry parallax attributes; wave-shaped dividers; a transparent header that sticks and hides while scrolling. — [anticatrattoriapapei.com](https://anticatrattoriapapei.com/)
- **Taverna di San Giuseppe (OBSERVED, markup).** Three image sliders with 30 slides in total and 66 scroll-in animation attributes; the first screen is taken by notices rather than imagery. — [tavernasangiuseppe.it](https://www.tavernasangiuseppe.it/)
- **Fonte Giusta (OBSERVED, markup).** Background photo slideshows (5 seconds per slide, half-second cross-fade) and a fade-in effect on blocks. — [fontegiusta.com](https://fontegiusta.com/)
- **Gallo Nero (OBSERVED, markup).** A 16:9 hero slider advancing every 5 seconds; image lightbox; motion rules wrapped in a reduced-motion check. — [ristorantegallonero.it](https://www.ristorantegallonero.it/)
- **Permalico (OBSERVED, markup).** A three-slide hero carousel with captions. — [permalico.it](https://www.permalico.it/)
- **Il Vinaio (OBSERVED, markup).** A preloader element injected on page load and a scrolling text band repeating "osteria", "ristorante", "siena". — [osteriailvinaio.it](https://osteriailvinaio.it/)
- No video element appears in the source of any of the seven home pages. — pages above

### Inferences
- The field has no opening sequence at all: a short, well-made intro and a scroll-led story would be new in this set. Trombicche shows that chaptered storytelling with light reveal effects is compatible with a very fast page. (INFERRED from the absence of video and intro markup on the seven pages read.)
- What reads as dated, judging by markup only: autoplay sliders as the main device (four of seven), page-load preloaders, animation libraries from the mid-2010s, and notices pushing content off the first screen. What reads as strong: Trombicche's cover that answers "what, where, how good, how to book" before any scrolling, and Papei's alternation of full-bleed photographs and short text.

### Gaps
- Nothing was rendered. Timing, easing, typography, colour, photography quality and mobile behaviour are not observable from source. A visual pass on Trombicche and Papei (desktop and 360 px mobile) is needed before using them as design references.
- The nine unread sites may include a motion-led site; none of their indexed titles or URLs suggests one.
