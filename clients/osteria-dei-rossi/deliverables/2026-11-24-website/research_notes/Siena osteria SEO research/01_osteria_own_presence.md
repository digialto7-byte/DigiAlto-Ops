# Osteria dei Rossi (Via dei Rossi 79/81, 53100 Siena): current online presence, fact file

Date seen for every item below: **2026-11-24**. Internal research notes, English.

**How to read the labels**

- **OBSERVED** = read directly on the page. From this machine only one host could be opened: `menu.osteriadeirossi.it` (HTML and its `data/menu.json`). Every other host (tripadvisor, quandoo, google, facebook, instagram, the root domain) was refused by the session network policy, for both the shell and the fetch tool.
- **SNIPPET** = seen only in the search tool's output (result titles, URLs, quoted excerpts and its summary of them). The listing page itself was not opened. Every SNIPPET value must be re-checked on the live page before it is used in client-facing work. Review quotes in English may be TripAdvisor's machine translation of an Italian original.
- **INFERRED** = my reasoning from the above. Never a fact.
- "not observable" = could not be seen, with the reason.
- Ages such as "~March 2025" are INFERRED from the search tool's "N days ago" metadata counted back from 2026-11-24.
- The shared web-search budget ran out before three last checks (Italia Delight page, Lonely Planet POI page, 2025-2026 blog mentions); those are listed under Gaps.

## 1. Google Business Profile: name, category, rating, reviews, hours, phone, website, price level, attributes

### Takeaway
The Google profile could not be opened; identifiers are confirmed on the osteria's own menu site and third-party mirrors of Google data show the name "L'Osteria dei Rossi", a 4.5 rating and roughly 1,000 to 1,140 reviews (snapshots of different ages). Mirrors disagree on Sunday (lunch only vs closed) and one mirror carries a second phone number.

### Cited Findings
- OBSERVED: the menu site links to the Google review form with place id `ChIJe88ntrcsKhMRYFGGC9FOTkY` and to the map with `cid=5066073290586870112` — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/) (source code, `INFO` object: `recensione: "https://search.google.com/local/writereview?placeid=ChIJe88ntrcsKhMRYFGGC9FOTkY"`, `mappa: "https://maps.google.com/?cid=5066073290586870112"`).
- OBSERVED: a code comment next to the review link reads "Link per lasciare una recensione (sostituire con il link diretto "Chiedi recensioni" di Google Business Profile)" — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- SNIPPET: Wanderlog (a mirror that labels its data "From Google") shows name "L'Osteria dei Rossi", "Review score 4.5 out of 5 ... 1124 reviews From Google", address "Via dei Rossi, 79/81, 53100 Siena SI, Italy", phone "+39 0577 287592" — [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi).
- SNIPPET: Wanderlog hours: "Sunday: 12:30–3PM"; Monday to Saturday 12:30–3PM plus 7–10:30PM — [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi).
- SNIPPET: Restaurant Guru states "The average rating of this place on Google is 4.5", with 1138 Google reviews; page age ~608 days (INFERRED ~March 2025) — [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2).
- SNIPPET: Restaurant Guru hours: lunch 12:30–15:00 and dinner 19:00–22:30; one excerpt says every day of the week, another says its data includes Sunday lunch — [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2).
- SNIPPET: Restaurant Guru features: wheelchair accessible, credit cards accepted, outdoor seating, booking — [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2).
- SNIPPET: Menufyy shows "LOsteria dei Rossi", "(4.5) 1014 reviews", "Via dei Rossi, 79/81, 53100 Siena SI, Italy", "+39 0577 287592" — [Menufyy](https://losteria-dei-rossi.menufyy.com/).
- SNIPPET: Swipein lists "Via dei Rossi, 79/81, 53100 Siena SI, Italy" and says the place offers takeaway and a terrace — [Swipein](https://www.swipein.restaurant/en/restaurant/losteria-dei-rossi-siena).
- SNIPPET: Foodle lists "Hours: Monday: 12:30 - 15:00; 19:00 - 22:30" and street number 79 — [Foodle](https://foodle.pro/restaurants/siena/l-osteria-dei-rossi).
- SNIPPET: Wheree ("Updated April 2026") files it under "Mediterranean Restaurants in Siena", score "7.8 | Very good", phone "+39 0577 1460316", and an odd "00:30 A.M" opening time; page age ~630 days — [Wheree](https://losteria-dei-rossi.wheree.com/).
- SNIPPET: Safarway shows "L'Osteria dei Rossi", 4.3 from 322 reviews — [Safarway](https://safarway.com/en/property/losteria-dei-rossi).
- SNIPPET: Wanderlog's review digest (Google reviews) says reviewers "often praise the service, especially a waitress named Elena, and the pasta"; some negatives on food and value; dishes named: grilled mushrooms, Gorgonzola and truffle bruschetta, wild boar with chocolate, trofie al pesto — [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi).

### Inferences
- INFERRED: the Google listing name is "L'Osteria dei Rossi" (with article), because three independent Google-data mirrors use that exact string. The own menu site uses "Osteria dei Rossi" without the article: a name mismatch between GBP and own channel.
- INFERRED: Google rating is 4.5 and the live review count is probably above 1,138 (the newest dated mirror is ~20 months old). To confirm on the live profile.
- INFERRED: Google hours probably show Sunday lunch open (Wanderlog, Restaurant Guru), which matches the April 2024 press article (see section 7) and conflicts with TripAdvisor, Quandoo and PagineGialle ("Sunday closed").
- INFERRED: the review-link comment suggests whoever built the menu page did not have the GBP "ask for reviews" short link at build time.

### Gaps
- Primary category, price level, website link, exact attribute list, owner-reply behaviour, photo count, current review count and current weekday hours on Google: not observable (google.com and maps.google.com are outside the allowed network domains; no search snippet exposed them).
- Whether the GBP is claimed/verified by the current management: not observable.
- Source and status of the second phone number +39 0577 1460316 (Wheree, and a "menumal" page named in a search excerpt): to confirm with the founder/owner; it may be a call-tracking or stale number.

## 2. TripAdvisor: URL, ranking, rating, reviews, tags, price, hours, owner replies, praise and complaint themes, quotes

### Takeaway
TripAdvisor is the strongest third-party asset: location id d716270, listed as "L'Osteria dei Rossi", 4.3/5 from about 1,221 reviews, #59 in Siena, Italian/Tuscan, Sunday closed. 2025-2026 reviews are split: pici, wild boar and friendly young staff are praised; prices versus portion size, a perceived decline after a management change and wine handling are the recurring complaints. Management has replied at least once (13 January 2026).

### Cited Findings
**Listing data**
- SNIPPET: current listing URL — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html); UK mirror titled "L’OSTERIA DEI ROSSI, Siena - 2026 Reviews & Information" — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: an older slug for the same location id still resolves in the index with the name "L'Osteria" only — [TripAdvisor old slug](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria-Siena_Tuscany.html); Canadian page titled "L'Osteria, Siena - Restaurant Reviews, Photos & Phone Number" — [TripAdvisor .ca](https://www.tripadvisor.ca/Restaurant_Review-g187902-d716270-Reviews-L_Osteria-Siena_Tuscany.html).
- SNIPPET: "1,221 unbiased reviews of L'Osteria dei Rossi, rated 4.3 of 5 on Tripadvisor and ranked #59 of 472 restaurants in Siena"; another snapshot shows 1,216 reviews — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: Italian snapshot: "Al n.59" in classifica su 513 Ristoranti a Siena, 1.221 recensioni, fascia prezzo 25–35 €, cucina Italiana; 625 of the 1,221 reviews are "Eccellente" — [TripAdvisor .it review page](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r986963872-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: older snapshots: 4.5 and "#60 of 460"; "Al n.79 su 526" with 1.168 recensioni — [TripAdvisor paginated page](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-or30-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: sub-ratings Food 4.4, Service 4.0, Atmosphere 4.0, Value 4.2 — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: cuisines Italian, Tuscan; "vegetarian friendly"; price "££ - £££" — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: address "Via dei Rossi 79/81, 53100 Siena", phone "+39 0577 287592" — [TripAdvisor .it review page](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r214626481-L_Osteria-Siena_Tuscany.html).
- SNIPPET: hours "Sunday Closed. Monday 12:30 PM - 3:00 PM 7:00 PM - 10:30 PM"; Tuesday and Wednesday the same split — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: a 2015-era page lists "Dining options: Lunch, Dinner, Late Night, Reservations" — [TripAdvisor .ca](https://www.tripadvisor.ca/Restaurant_Review-g187902-d716270-Reviews-L_Osteria-Siena_Tuscany.html).
- SNIPPET: TripAdvisor's auto-generated summary: known for wild boar and homemade pasta "earning rave reviews"; "some mention slow service during peak times" — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: owner replies: yes, at least one. A management reply dated 13 January 2026 answers a January 2026 steak-price complaint: the owner personally selects the meat weekly, the meat was not low quality, prices are on the menu, and the bill was reduced from 185 to 150 euros — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).

**Short verbatim quotes with dates (all SNIPPET, as excerpted by the search tool)**
1. May 2026: "Great food, especially the pasta (pici) and the very tender wild boar." — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
2. September 2026: "Excellent tavern with atmosphere and traditional local dishes" (same review describes an old-fashioned tavern run by capable young people) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
3. August 2026: "professional waiters, helpful and always attentive to the customers' needs"; review title "A sure thing!" — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
4. July 2026: "A run-of-the-mill restaurant, the most tasteless food we have had in Tuscany."; "Not worth a visit!"; "quite high prices for the rather small portions" — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
5. August 2026: "Very high prices for portions reduced to a minimum!!" (reports 120 euros for one pasta, two mains, two crostini; warns against the fried porcini and the beef tagliata) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
6. December 2025: "Unfortunately in sharp decline... with a shameful fall on the wine" (guest since 2008; small pici cacio e pepe portion; a 28-euro Tuscan red served nearly frozen; staff answer quoted as "eh but it is cold outside and we keep it in a warehouse"; reviewer links the decline to a change of management) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
7. January 2026: "Mediocre quality Florentine steak for four people... Exaggerated price." ("Florentine steak for four people, side dish, bulk wine, coffee and nothing else, more than 60 euros each") — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
8. December 2024 (Italian): "Consigliati assolutamente i cremosissimi pici cacio e pepe e il bis di crostoni" — [TripAdvisor .it, "Da provare i pici cacio e pepe"](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r986963872-L_Osteria_dei_Rossi-Siena_Tuscany.html)
9. Undated in the excerpt: "One of the best taverns in Siena, excellent food, very kind and welcoming owners."; "Best food in Siena" — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html)
10. 2018 (Italian): "La prenotazione è quasi obbligatoria" — [TripAdvisor .it, "Cacciagione tipica senese"](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r567872928-L_Osteria_dei_Rossi-Siena_Tuscany.html)
11. 2014 (Italian): "il locale è chiuso il mercoledì" (old closing day) — [TripAdvisor .it, "Osteria tradizionale senese in cui fermarsi!"](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r214626481-L_Osteria-Siena_Tuscany.html)

**Most repeated praise themes (SNIPPET, across TripAdvisor excerpts)**
- Pici: cacio e pepe ("cremosissimi", review titles "Pici cacio e pepe da applausi", "Da provare i pici cacio e pepe"), white ragù of Cinta Senese, wild boar ragù — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r133496934-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Wild boar: "very tender wild boar", "cinghiale al cioccolato" (review title "ottimo cinghiale al cioccolato e lardo di colonnata") — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r243478532-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Crostini/crostoni, especially gorgonzola and truffle ("bis di crostoni", photo "Tris di crostini") — [TripAdvisor photo](https://www.tripadvisor.com/LocationPhotoDirectLink-g187902-d716270-i100617189-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Traditional Sienese cooking in an authentic setting: trippa alla senese, anchovies in pesto, Cinta Senese, game ("La vera cucina tipica senese", "piatti tipici senesi") — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r148508475-L_Osteria-Siena_Tuscany.html).
- Friendly, helpful staff and owners; "run by capable young people" — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Small, rustic, cosy room; "due tavolini sotto antichi archivolti in mattoni"; tables inside and outside, "a few tables outside under umbrellas" — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r120149991-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Fair prices in older reviews (2014: about 23.50 euros for starter, first, second, water, wine, coffee; others about 27 euros a head or 50 euros for two); 2024-2025 reviews still call prices fair — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r214626481-L_Osteria-Siena_Tuscany.html).
- Steak and grilled meat (2026 review calls a steak excellent; older ones praise fillets and tagliata) — [TripAdvisor .co.uk](https://www.tripadvisor.co.uk/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).

**Most repeated complaint themes (SNIPPET)**
- Prices high for the portion size (July 2026, August 2026, December 2025) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Steak price and quality (January 2026; the one review with a management reply) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Perceived decline after a change of management (December 2025) — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Wine: bottle served far too cold (December 2025); house wine "not up to it, better order a bottle" (2018) — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r567872928-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Slow service at peak times (TripAdvisor's own summary); service "un pò sbrigativo" (rushed) in some Italian reviews — [TripAdvisor .com](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Tasteless food and the music (July 2026) — [TripAdvisor paginated page](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-or30-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Specific dishes: fried porcini and beef tagliata (August 2026); older notes of "pappolosi" cacio e pepe and overcooked lamb — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r133496934-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Small room, limited seating, booking close to mandatory — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r567872928-L_Osteria_dei_Rossi-Siena_Tuscany.html).

### Inferences
- INFERRED: the listing was renamed from "L'Osteria" to "L'Osteria dei Rossi" at some point (old and new slugs share id d716270); old-name URLs are still indexed.
- INFERRED: the rating fell from 4.5 to 4.3 between older and current snapshots, consistent with the cluster of critical 2025-2026 reviews.
- INFERRED: the ranking denominator differs by snapshot (472 vs 513 vs 460 vs 526), so only "#59, 4.3, about 1,221 reviews" should be treated as the current picture, and re-read on the live page.
- INFERRED: the osteria probably appears on TripAdvisor's "Best Tripe in Siena" and "Italian Restaurants with Outdoor Seating in Siena" list pages, because the search engine returned those pages for the brand query; to confirm — [Tripe list](https://www.tripadvisor.com/Restaurants-g187902-zfd20330-Siena_Tuscany-Tripe.html), [Outdoor seating list](https://www.tripadvisor.com/Restaurants-g187902-c26-zfp6-Siena_Tuscany.html).

### Gaps
- Whether the listing shows a website link, a menu link, an email, or a "claimed" badge: not observable (tripadvisor hosts blocked; one search summary said a website link exists but gave no URL).
- Full weekday hours table (Thursday to Saturday) and features list (outdoor seating, reservations, accepts cards): only partly visible in excerpts.
- Share of reviews with an owner reply: only one reply was visible; to confirm on the page.
- Exact day of each quoted review and reviewer handles: not visible in excerpts (month and year only).

## 3. Booking: TheFork, Quandoo, OpenTable or phone only; WhatsApp and email

### Takeaway
No online booking channel was found: no TheFork listing surfaced, Quandoo explicitly says the osteria is "not bookable via Quandoo", and the OpenTable page looks like a directory entry. The phone +39 0577 287592 is the only booking route published by the osteria itself. Two different email addresses circulate on directories; no WhatsApp number was found.

### Cited Findings
- OBSERVED: the own menu site publishes only a phone ("+39 0577 287592", `tel:` link), address, map link, review link, Instagram and Facebook; no booking link, no email, no WhatsApp, no hours — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- SNIPPET: Quandoo listing "Restaurant L'Osteria dei Rossi in Siena": "L'Osteria dei Rossi is not bookable via Quandoo."; address "Via Dei Rossi 79, Siena 53100"; phone +39 0577 287592; lunch 12:30–3:00 pm and dinner 7:00–10:30 pm Monday to Saturday; "Sunday Closed"; cuisine "Tuscan, Italian"; €€€; street parking; dishes around €14; score 5.5/6 from 19 reviews (Food "Outstanding", Atmosphere "Excellent", Service "Excellent", "Great value") — [Quandoo](https://www.quandoo.it/en/place/losteria-20137); [Quandoo reviews](https://www.quandoo.it/en/place/losteria-20137/reviews).
- SNIPPET: Quandoo description (Italian) presents a traditional osteria celebrating Tuscan food in a rustic, informal setting on Via dei Rossi beside the Basilica di San Francesco; one diner quote: veal stew in chianti sauce "unbelievable", tiramisu "great"; another says the menu is not very varied — [Quandoo](https://www.quandoo.it/en/place/losteria-20137).
- SNIPPET: OpenTable page "L'Osteria dei Rossi - Updated 2026, Italian Restaurant in Siena, TO": address "79 Via Dei Rossi, Siena, TO 53100", Italian, "Casual Dining", "€30 and under", parking "None", 4.4 from one diner — [OpenTable](https://www.opentable.com/r/losteria-dei-rossi-siena).
- SNIPPET: TheFork: a search restricted to thefork.it/thefork.com returned no listing for this restaurant; only TheFork's Siena roundup and other restaurants appeared — [TheFork Siena](https://www.thefork.com/restaurants/siena-c515245).
- SNIPPET: press gives the phone as the contact route: "Per informazioni ... 0577-287592" — [Gazzetta di Siena](https://www.gazzettadisiena.it/cucina-senese-in-un-ambiente-tradizionale-ecco-losteria-dei-rossi-di-siena/).
- SNIPPET: email "osteriadeirossi@virgilio.it" on the Chianti Classico restaurant listing and on Nextdoor — [Chianti Classico](https://www.chianticlassico.com/ristoranti/ristorante-losteria/); [Nextdoor](https://it.nextdoor.com/pages/losteria-via-dei-rossi-1/).
- SNIPPET: a different email, "losteriarossi@gmail.com", sits in the structured data of the PagineGialle/PagineBianche listing ("contactType":"customer service","email":"losteriarossi@gmail.com") — [PagineGialle](https://www.paginegialle.it/l-osteria-dei-rossi-siena).
- SNIPPET: Restaurant Guru lists "booking" as a feature; a 2018 TripAdvisor review says booking is almost mandatory — [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2).

### Inferences
- INFERRED: bookings are taken by phone only. No reservation widget, WhatsApp link or booking platform is promoted on any channel that could be seen.
- INFERRED: OpenTable's province code "TO" is a data error (Siena is SI) and the page is likely an auto-generated, non-bookable entry.
- INFERRED: the two email addresses belong to different periods of management; which one (if any) is monitored today is unknown.

### Gaps
- WhatsApp number: none found anywhere (searched brand + WhatsApp); to confirm with the owner.
- Which email is current: to confirm with the owner before publishing either.
- Whether OpenTable actually offers a booking flow, and whether a TheFork profile exists but is not indexed: not observable (hosts blocked).
- Whether Google shows a "Reserve a table" button: not observable.

## 4. Other listings and mentions (directories, guides, press, blogs)

### Takeaway
The osteria is widely listed but under at least five name variants, with many duplicates and stale records (two Restaurant Guru pages, two Foursquare venues, Yelp with a garbled address). Editorial mentions exist in Gambero Rosso (meat in Siena, six addresses), Frommer's, Accademia Italiana della Cucina and Gazzetta di Siena. None of the listings that could be read links to an own website; Gambero Rosso links to a Facebook page.

### Cited Findings
**Directories and aggregators (all SNIPPET)**
- Restaurant Guru, main page "L'Osteria dei Rossi": "4.9 out of 5 on Restaurant Guru: 2359 reviews by visitors, 120 photos"; address Via dei Rossi, 79/81; reviewers highlight tiramisu, biscotti, crème caramel — [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2).
- Restaurant Guru, duplicate page "L’Osteria" at the same address: 4.5 from 89 reviews, no Sunday evening hours, page age ~1,255 days — [Restaurant Guru duplicate](https://restaurantguru.com/OSTERIA-dei-Rossi-Siena).
- Yelp "OSTERIA L’OSTERIA - Updated August 2026 - 20 Photos & 11 Reviews - Via dei Rossi, Deux-Sèvres, Siena, Italy"; rating 4.6; reviewers praise gorgonzola and truffle bruschetta, pork and boar ragout pastas — [Yelp](https://www.yelp.com/biz/osteria-l-osteria-siena).
- Foursquare "Osteria L'Osteria - Italian Restaurant": Via dei Rossi 79/81; 8.5/10 from 30 ratings; shown as #3 for Italian restaurants in Siena; a 2014 tip says about 55€ per couple — [Foursquare](https://foursquare.com/v/osteria-losteria/4ceb850c3608a090f081ae3f).
- Foursquare duplicate "Osteria Via Dei Rossi": Via dei Rossi 79; no tips; 26 visitors — [Foursquare duplicate](https://foursquare.com/v/osteria-via-dei-rossi/4ced856928abb60ca873b809).
- Sluurpy "L'osteria, Siena": Via dei Rossi 79-81; 82/100 with 3205 votes (page text also says Sluurpometro 84); €€ - €€€; stale menu prices (Tagliere di cinta €15, Spaghetti dell'Osteria €8, Tagliatelle al ragù bianco di cinta €9, steaks €17–18; data from 2023) — [Sluurpy](https://www.sluurpy.it/siena/ristorante/179938/l-osteria).
- PagineGialle "L'Osteria dei Rossi a Siena (SI): Orari Apertura e Mappa": "Via dei Rossi, 79/81 - 53100 Siena (SI)"; "Il numero di telefono verificato è 0577 287592"; Monday to Saturday 12:30–15:00 and 19:00–22:30; "Domenica chiuso"; rating 4.5 from 115 recensioni — [PagineGialle](https://www.paginegialle.it/l-osteria-dei-rossi-siena).
- PagineBianche lists the same number in its Siena trattorie pages — [PagineBianche](https://www.paginebianche.it/toscana/siena/trattorie-osterie.html).
- Virgilio Aziende "L'Osteria dei Rossi - Siena, Via dei Rossi, 79/81": "... 19:00 - 22:30 · Ven 12:30 - 15:00 19:00 - 22:30 · Sab 12:30 - 15:00 19:00 - 22:30 · Dom chiuso"; a user review describes a new osteria run by "2 ragazzi molto gentili, simpatici, e volenterosi" and recommends pici al ragù bianco (date shown only as "3 ore fa") — [Virgilio Aziende](https://aziende.virgilio.it/osteria/siena-si/l-osteria-dei-rossi-siena).
- oraridiapertura24: weekdays and Saturday 12:30–15:00 and 19:00–22:30, Sunday closed — [oraridiapertura24](https://www.oraridiapertura24.it/filiale/Siena-L%2527Osteria%2520dei%2520Rossi-4736566U.html).
- Nextdoor "L'Osteria dei Rossi - Siena": Tuscan trattoria/osteria; +390577287592; osteriadeirossi@virgilio.it; lunch and dinner split; Sunday closed — [Nextdoor](https://it.nextdoor.com/pages/losteria-via-dei-rossi-1/).
- TripExpert "L’Osteria dei Rossi": address "Via de' Rossi, 79/81"; expert score 7/10, below Antica Trattoria Papei on its comparison page — [TripExpert](https://www.tripexpert.com/siena/restaurants/l-osteria-dei-rossi); [TripExpert comparison](https://www.tripexpert.com/siena/restaurants/antica-trattoria-papei-vs-losteria).
- Find Me Gluten Free "L'Osteria dei Rossi - Gluten-Free Restaurant in Siena": "$$$ • Restaurant"; a reviewer reports gluten-free options — [Find Me Gluten Free](https://www.findmeglutenfree.com/biz/losteria/4737199215607808).
- Falstaff "L' Osteria in Siena": same address, little detail — [Falstaff](https://www.falstaff.com/en/restaurants/l-osteria-siena).
- Chianti Classico consortium directory "Ristorante L'Osteria": "Via dei Rossi, 79 Siena SI"; email osteriadeirossi@virgilio.it — [Chianti Classico](https://www.chianticlassico.com/ristoranti/ristorante-losteria/).
- Further directory pages that surfaced by title only: "L'Osteria dei Rossi Ristorante a Siena" — [nuovaopinione.it](https://www.nuovaopinione.it/siena/ristoranti/l-osteria-dei-rossi-17390); "L'osteria dei Rossi - Ristoranti a Siena" — [reteimprese.it](https://www.reteimprese.it/ristoranti/siena/azienda/786413); "L'Osteria dei Rossi" showcase — [Italia Delight](https://www.italiadelight.it/en/showcase/losteria-dei-rossi/).
- Wanderlog, Menufyy, Wheree, Safarway, Swipein, Foodle: see section 1 (Google-data mirrors).

**Guides and editorial (all SNIPPET)**
- Gambero Rosso, "Dove mangiare un’ottima carne a Siena. I 6 indirizzi migliori scelti dal Gambero Rosso" (INFERRED date ~December 2024 from "714 days ago"): lists "L’Osteria – via dei Rossi, 79 – 0577 287592 – www.facebook.com/OsteriaSiena/"; text: "Nei pressi della Basilica di San Francesco, una sosta informale e allegra in un locale con volte a mattone e, nella bella stagione, tavoli apparecchiati lungo la strada."; "In carta pici al cinghiale, trippa alla Senese, battuta di chianina, cinghiale in salmì e, dalla griglia, tagliata (di Cinta e di vitello), filetto, fiorentina, agnello e pollo alla diavola."; seasonal truffle and porcini; tiramisù and cantucci with Vin Santo. Links to Facebook, not to a website — [Gambero Rosso](https://www.gamberorosso.it/ristoranti/carne-siena/).
- Gambero Rosso International, English version (INFERRED ~March 2024 from "986 days ago"): "Near the Basilica of San Francesco, an informal and cheerful stop in a place with brick vaults and, in the summer, tables set along the street." The other picks named in excerpts include Antica Trattoria Papei, Osteria Le Sorelline (via dei Rossi 76) and Osteria Da Gano — [Gambero Rosso International](https://www.gamberorossointernational.com/news/where-to-eat-excellent-meat-in-siena-the-6-best-addresses-chosen-by-gambero-rosso/).
- Frommer's "L'Osteria - Siena" (reviewer Stephen Brewer): 2 of 3 stars; simple, reasonably priced; short menu of classics such as pici with wild boar sauce, "cinghiale in dolce forte", tripe stew, thick steaks; service can feel rushed because it is busy most nights; hours Monday to Saturday, dinner 19:30–22:30; same phone digits — [Frommer's](https://www.frommers.com/destinations/siena/restaurants/losteria/).
- Accademia Italiana della Cucina restaurant sheet "Osteria": trattoria at Via dei Rossi 79-81; closing day Sunday; "dal 1975 Beppe Carreri"; Sabrina Benucci in the kitchen — [Accademia Italiana della Cucina](https://www.accademiaitalianadellacucina.it/it/ristoranti/ristorante/3121-osteria).
- Michelin Guide: no restaurant entry surfaced; the only Michelin result on the street is Hotel Palazzetto Rosso (Via dei Rossi 38-42) — [Michelin hotel page](https://guide.michelin.com/en/hotels-stays/siena/hotel-palazzetto-rosso-8392).
- Slow Food / Osterie d'Italia: no entry found. A Fodor's forum trip report calls L'Osteria the writer's favourite meal in Siena and cites its "Slow Food approach" (a traveller's wording, not a guide listing) — [Fodor's forum](https://www.fodors.com/community/europe/foodie-report-from-siena-848201/).
- Rick Steves: no guide entry found; forum threads returned concern other Siena restaurants — [Rick Steves forum](https://community.ricksteves.com/travel-forum/italy/your-favorite-eater-in-siena-and-why).
- Lonely Planet: a POI URL surfaced in the brand search but its content could not be read — [Lonely Planet POI](https://www.lonelyplanet.com/pois/1570874).

**Press and blogs (all SNIPPET)**
- Gazzetta di Siena, "Cucina senese e ambiente tradizionale: l’Osteria Dei Rossi di Siena" (INFERRED ~April 2024 from "956 days ago"): history and new management (details in section 7); hours "a pranzo tutti i giorni (domenica inclusa) dalle 12:30 alle 15 e la sera dal lunedì al sabato dalle 19 alle 22:30"; phone 0577-287592 — [Gazzetta di Siena](https://www.gazzettadisiena.it/cucina-senese-in-un-ambiente-tradizionale-ecco-losteria-dei-rossi-di-siena/).
- Gazzetta di Siena, "Adrenalina Group compie un anno: tre giovani senesi al fianco delle aziende" (INFERRED ~late October 2026 from "26 days ago"): names L'Osteria dei Rossi among the clients of the Sienese communications agency Adrenalina Group (founders Alessandro, Riccardo and Leonardo), alongside Tea Room, Elitaria and Locanda dell'Oste — [Gazzetta di Siena](https://www.gazzettadisiena.it/adrenalina-group-compie-un-anno-tre-giovani-senesi-al-fianco-delle-aziende/).
- Blog jerryb.it, "L’Osteria dei Rossi (Siena)" (slug "ospiti-del-bruco"): a family's dinner account; they walked into the Contrada del Bruco and got an outside table without booking; pasta with butter and sage for the child; no rating; date not visible — [jerryb.it](https://jerryb.it/losteria-dei-rossi-siena-ospiti-del-bruco/).
- Blog Siena Calls London, 15 May 2012, "L'Osteria in Siena": lists L'Osteria at Via dei Rossi 79 with 0577 287592 — [Siena Calls London](https://sienacallslondon.blogspot.com/2012/05/losteria-in-siena.html).
- AboutSiena restaurant guide lists L'Osteria, Via dei Rossi 79, 0577 287592 — [AboutSiena](https://www.aboutsiena.com/restaurants-in-Siena.html).
- Wanderlog list pages that surfaced for brand queries (membership to confirm): "best spots for bistecca fiorentina in Siena", "best places for steak in Siena" — [Wanderlog list](https://wanderlog.com/list/geoCategory/1566732/best-spots-for-bistecca-fiorentina-in-siena).

### Inferences
- INFERRED: no third-party listing currently points to an own website, so a new site has no inbound "website" links to inherit; each listing's website field will need to be filled.
- INFERRED: duplicates to merge or claim: Restaurant Guru (2), Foursquare (2); stale-name records: Yelp, Sluurpy, Foursquare, Falstaff, Frommer's, Chianti Classico, Accademia.
- INFERRED: the nearest name-collision risk is Osteria Le Sorelline at Via dei Rossi 76, which appears in the same Gambero Rosso list and in brand-query results — [TripAligner page for Le Sorelline](https://tripaligner.com/countries/italy-15/destinations/siena-11147/places/osteria-le-sorelline-2105733).
- INFERRED: the Adrenalina Group article implies another agency already handles some communication for the osteria; scope is not stated in the excerpt.

### Gaps
- Italia Delight, nuovaopinione, reteimprese, Lonely Planet POI, worldtravelguide: page content not read (search budget exhausted, hosts blocked).
- Whether the osteria is in the current Slow Food "Osterie d'Italia" or Gambero Rosso restaurant guides (as opposed to the web article): no reliable source found.
- 2025-2026 Italian or English blog posts beyond those above: not searched (budget exhausted).
- Whether any listing has a website field filled (and with which URL): not observable for TripAdvisor, Google, Yelp, Foursquare.

## 5. Brand search top 10 and own domain

### Takeaway
A brand search returns only third-party pages; no own domain ranks, and the menu subdomain is not indexed. The only own web property that could be confirmed is `menu.osteriadeirossi.it`, a single JavaScript menu page (Italian/English) with phone, address, Google review link and social links, but no hours, no booking, no structured data, no robots.txt and no sitemap.

### Cited Findings
**Brand search (SNIPPET; search tool's own index, US-based, not Google.it)**
- Query "Osteria dei Rossi Siena", results in the order returned: 1. [Wanderlog place page](https://wanderlog.com/place/details/2652088/losteria-dei-rossi) 2. [Wanderlog short URL](https://wanderlog.com/place/details/2652088) 3. [Quandoo IT reviews](https://www.quandoo.it/place/losteria-20137/recensioni) 4. [TripExpert](https://www.tripexpert.com/siena/restaurants/l-osteria-dei-rossi) 5. [Quandoo EN reviews](https://www.quandoo.it/en/place/losteria-20137/reviews) 6. [Swipein](https://www.swipein.restaurant/en/restaurant/losteria-dei-rossi-siena) 7. [Foodle](https://foodle.pro/restaurants/siena/l-osteria-dei-rossi) 8. [Gambero Rosso meat article](https://www.gamberorosso.it/ristoranti/carne-siena/) 9. [Siena Calls London 2012](https://sienacallslondon.blogspot.com/2012/05/losteria-in-siena.html) 10. [Frommer's](https://www.frommers.com/destinations/siena/restaurants/losteria).
- Positions 11+ in the same result set were unrelated or competitor pages: Osteria Le Sorelline, Hotel Palazzetto Rosso (Michelin), worldtravelguide, Lonely Planet POI — [TripAligner](https://tripaligner.com/countries/italy-15/destinations/siena-11147/places/osteria-le-sorelline-2105733).
- Other brand-query variants surfaced TripAdvisor, Instagram, PagineGialle, Gazzetta di Siena, OpenTable, Nextdoor, Restaurant Guru, Virgilio — [TripAdvisor](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- A search for "osteriadeirossi.it" / "osteriadeirossi.com" / "menu.osteriadeirossi.it" returned no page from those hosts — [search result set, first hit Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi).

**Own menu subdomain (OBSERVED, HTML and JSON fetched 2026-11-24 22:08–22:10 GMT)**
- `<title>`: "Menù Osteria dei Rossi"; meta description: "Il menù dell'Osteria dei Rossi, Siena. Cucina toscana, bistecche e tagli alla griglia."; `<html lang="it">` — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- Response headers: `server: LiteSpeed`, `platform: hostinger`, HTML `last-modified: Wed, 11 Nov 2026 11:21:28 GMT`, size 587,719 bytes (images embedded as base64) — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- No JSON-LD, no Open Graph tags, no canonical link, no web manifest in the HTML; `/robots.txt` and `/sitemap.xml` both return 404 — [robots.txt](https://menu.osteriadeirossi.it/robots.txt).
- Cover: logo alt text "Osteria dei Rossi"; tagline "Mettetevi comodi: qui si mangia come a casa, con la ciccia buona e il vino giusto." (EN: "Make yourselves comfortable: here we eat like at home, with good meat and the right wine."); sub-line "Siena · Via dei Rossi"; Siena skyline illustration (aria-label "Skyline di Siena con il Duomo e la Torre del Mangia") — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- Contact block (last page, "Grazie!"): "Dove siamo: Via dei Rossi, 79/81 · 53100 Siena"; "Telefono: +39 0577 287592"; buttons Instagram (`https://www.instagram.com/osteriadeirossi/`) and Facebook (`https://www.facebook.com/osteriadeirossi`); QR code and button "Lascia una recensione" to the Google review form; sign-off "A presto, dall’Osteria dei Rossi"; cover charge "Coperto 2,50 € a persona" — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- Review prompt copy: "Se vi siete trovati come a casa, lasciateci due righe. Per noi una recensione vale quanto un bis." — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- The page contains no opening hours, no closing day, no email, no WhatsApp, no booking link, no "chi siamo"/history text, and the word "Bruco" does not appear anywhere in the HTML or JSON — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- Live dish data come from `data/menu.json`: `"version": 48`, `"updated_at": "2026-11-24T22:08:05+00:00"`, `"updated_by_label": "Osteria dei Rossi"`; a code comment says the file is "modificato dal pannello di gestione" — [menu.json](https://menu.osteriadeirossi.it/data/menu.json).
- Live menu, prices in euro (items flagged "Consigliato dall’Oste" marked *; "Piatto di stagione" marked s) — [menu.json](https://menu.osteriadeirossi.it/data/menu.json):
  - Antipasti: Tagliere del Cacciatore 22; Tartare dell’Oste 15 *; Tagliere del Contadino 16; Bis di crostoni 12; Acciughe sotto pesto 10; Crostini neri senesi 9.
  - Primi: Tagliatelle ai Funghi Porcini 20 s; Tagliatelle al Tartufo di Stagione 18; Pici al Ragù Tradizionale di Anatra 16 *; Pici al Ragù Bianco di Cinta Senese 16 *; Tagliatelle al Ragù di Cinghiale 16; Pici Cacio e Pepe 15; Spaghetti alla Chitarra con Sugo dell’Osteria 14; Ravioli con Zucca Gialla, Pancetta e stracciatella 16 s; Ribollita 13 s.
  - Secondi ("Specialità della cucina"): Cinghiale in Dolce Forte 20; Tegamata di Cinta Senese 19 *; Agnello allo Scottadito 18; Cinghiale al Coccio con Polenta 18; Sovracosce di Pollo alla Diavola 16; Trippa alla Senese 14.
  - Griglia: Bistecca alla Fiorentina 9/etto *; Bistecca Fritta 12/etto; Costata del macellaio 7/etto; Medaglione di Filetto alla Griglia 25 (con Tartufo 30; con Lardo di Colonnata 28; con salsa al Pepe Verde 28).
  - Contorni: Fagioli all’Uccelletto 7; Chips di Patate Croccanti 7; Patate Prezzemolate 6; Erbe Saltate 8; Insalata Mista 5.
  - Dolci: Il Tiramisù di Manu 8; Cantuccini e Vin Santo 7; Panna Cotta 6; Tortino al Cioccolato con Cuore Caldo 8; Cheesecake 7; Tris di Dolci Senesi 8; Carpaccio di Pere e Scaglie di Cioccolato Fondente 6.
- Drinks (in the HTML): "Vino l’Osteria Rosso" bottle 18 €, "Vino l’Osteria Bianco" bottle 15 €; red by the glass 7 € (Chianti Classico Gallo Nero · IGT Toscano · Maremma DOC), white 6 € (Vernaccia di San Gimignano · Vermentino Toscano); draught lager 7 € / 4,50 €; water 2,50 €; espresso 2 €; amari and grappas 3–4 €; "Carta dei vini: chiedete al personale" — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- Claims printed on the menu: Spaghetti alla Chitarra con Sugo dell’Osteria is "Una ricetta storica ed esclusiva dell’Osteria dei Rossi, in menù dal 1992: sugo a base di pomodoro, gorgonzola e peperoncino"; Bistecca Fritta: "siamo gli unici a Siena e provincia a proporvela così"; Fiorentina: "una selezione settimanale curata da Alessio, il nostro macellaio di fiducia"; Tegamata: meat "da un allevamento allo stato brado nel cuore delle Crete Senesi"; Trippa: "particolarmente legata al periodo del Palio" — [menu.json](https://menu.osteriadeirossi.it/data/menu.json).
- Content inconsistency on the live menu: the item "Ravioli con Zucca Gialla, Pancetta e stracciatella" still carries the description "Pasta corta con zucca gialla, porri e pecorino, una preparazione vegetariana dai sapori delicati e genuini." (pancetta vs "vegetariana") — [menu.json](https://menu.osteriadeirossi.it/data/menu.json).
- The embedded fallback menu in the HTML differs from the live JSON: "Costata del Vamosh" (live: "Costata del macellaio"), "Trippa" (live: "Trippa alla Senese"), "Caserecce con Zucca Gialla, Porri e Pecorino" 14 (live: the ravioli item at 16), no "Chips di Patate Croccanti" — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).

### Inferences
- INFERRED: because the menu page renders everything with JavaScript, has no hours/NAP in static HTML beyond a meta description, and has no sitemap or structured data, it contributes almost nothing to local SEO today; the fetch tool's text view saw only the navigation labels.
- INFERRED: the osteria staff actively maintain the menu through a panel (version 48, edited on the evening of 2026-11-24).
- INFERRED: the own channel brands the business "Osteria dei Rossi" while the house wine is still "Vino l’Osteria", a trace of the earlier name "L'Osteria".

### Gaps
- `osteriadeirossi.it`, `www.osteriadeirossi.it`, `osteriadeirossi.com`: not observable. The session proxy refused the connection (403 on CONNECT), so it is unknown whether the root domain serves a page, redirects to the menu, or is parked. No search result came from these hosts.
- A true Google.it top 10 (with map pack and knowledge panel): not observable; the list above is from the search tool's index.
- Who built or hosts the menu page beyond "Hostinger": not stated on the page.

## 6. Instagram and Facebook

### Takeaway
Instagram: @osteriadeirossi, display name "L’Osteria dei Rossi", about 1,904 followers and only 31 posts in the indexed snapshot; bio centres on typical Sienese cooking, Fiorentina and pici, and cites the Gambero Rosso meat list. Facebook is ambiguous: the menu links to `/osteriadeirossi`, but the page the web indexes and Gambero Rosso cites is `/OsteriaSiena` ("L'Osteria", 688 followers, "Autentici Sapori Toscani dal 1992").

### Cited Findings
- OBSERVED: the menu site links to `https://www.instagram.com/osteriadeirossi/` and `https://www.facebook.com/osteriadeirossi` — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- SNIPPET: Instagram profile title "L’Osteria dei Rossi (@osteriadeirossi) • Instagram photos and videos"; about 1,904 followers, 54 following, 31 posts (cached snippet, snapshot date not shown) — [Instagram](https://www.instagram.com/osteriadeirossi/).
- SNIPPET: Instagram bio as summarised in the snippet: Siena; "Cucina tipica senese"; "Bistecca alla Fiorentina e Pici"; a line citing the six meat restaurants in Siena chosen by Gambero Rosso — [Instagram](https://www.instagram.com/osteriadeirossi/).
- SNIPPET: Facebook page "L'Osteria (@OsteriaSiena)": "688 followers · 785 were here"; "Autentici Sapori Toscani dal 1992"; "niente fronzoli, solo materie prime locali ed eccellenti!" — [Facebook OsteriaSiena](https://www.facebook.com/OsteriaSiena/).
- SNIPPET: Gambero Rosso's entry links to "www.facebook.com/OsteriaSiena/" — [Gambero Rosso](https://www.gamberorosso.it/ristoranti/carne-siena/).
- SNIPPET: a third Facebook URL, "L'Osteria Siena" at `/losteria.siena/`, shows only personal-profile style sections (Work, College, Photos, "Others Named L'Osteria Siena") and no follower count or address — [Facebook losteria.siena](https://www.facebook.com/losteria.siena/).
- SNIPPET: no search result returned a page at `facebook.com/osteriadeirossi` — [Facebook OsteriaSiena (closest hit)](https://www.facebook.com/OsteriaSiena/).

### Inferences
- INFERRED: `/osteriadeirossi` and `/OsteriaSiena` are either the same page after a username change or two separate pages (legacy "L'Osteria" page and a newer one). Until checked while logged out in a browser, treat the Facebook URL as a NAP/branding conflict.
- INFERRED: posting volume is low (31 posts in total). If the account dates from the early-2024 management change that is under one post a month; the account start date is not known, so this is a rough reading.
- INFERRED: `/losteria.siena/` looks like a personal profile used as a business presence in the past; it could confuse brand searches on Facebook.

### Gaps
- Exact Instagram bio wording, link in bio, highlights, posting dates and frequency, recurring content themes, hashtags, reels vs photos: not observable (instagram.com blocked from this session and it requires login for post grids; the search tool returned only the profile summary).
- Facebook: which URL is live for the current management, page name, address, phone, hours, category, likes, last post date, review score: not observable (facebook.com blocked).
- Other networks (TikTok, YouTube, LinkedIn): none surfaced in any search; not specifically searched.

## 7. History and people as published

### Takeaway
Published history is thin and comes mainly from one Gazzetta di Siena article (about April 2024): opened in 1992 by the "brucaiolo" Giuseppe (Beppe) Carrieri; taken over about three months before the article by two young men, Luca (kitchen) and Max. The earlier trading name was simply "L'Osteria". One source conflicts on the founding year (Accademia: "dal 1975 Beppe Carreri"). The building is described only as brick-vaulted with summer tables on the street; nothing on a cellar.

### Cited Findings
- SNIPPET: "Aperto nel 1992 dal brucaiolo Giuseppe (Beppe) Carrieri, il locale storico è da tre mesi nelle mani di due ragazzi, Luca e Max." — [Gazzetta di Siena](https://www.gazzettadisiena.it/cucina-senese-in-un-ambiente-tradizionale-ecco-losteria-dei-rossi-di-siena/).
- SNIPPET: same article, as summarised: the historic owner had died the previous year; Luca runs the kitchen; the project follows Giuseppe's original idea; Max says they favour Sienese businesses as suppliers even more than Carrieri did; small producers from Siena and province; wine list reworked around local farms; aim of a more dynamic menu with seasonal changes — [Gazzetta di Siena](https://www.gazzettadisiena.it/cucina-senese-in-un-ambiente-tradizionale-ecco-losteria-dei-rossi-di-siena/).
- OBSERVED: the menu says one dish has been "in menù dal 1992" and calls it "Una ricetta storica ed esclusiva dell’Osteria dei Rossi" — [menu.json](https://menu.osteriadeirossi.it/data/menu.json).
- SNIPPET: Facebook tagline "Autentici Sapori Toscani dal 1992" — [Facebook OsteriaSiena](https://www.facebook.com/OsteriaSiena/).
- SNIPPET (conflict): Accademia Italiana della Cucina sheet: "dal 1975 Beppe Carreri" (surname spelled Carreri), cook Sabrina Benucci, closing day Sunday — [Accademia Italiana della Cucina](https://www.accademiaitalianadellacucina.it/it/ristoranti/ristorante/3121-osteria).
- OBSERVED: people named on the menu: "Alessio, il nostro macellaio di fiducia" (weekly steak selection) and "Il Tiramisù di Manu"; the role "l’Oste" appears as "Consigliato dall’Oste" and "Tartare dell’Oste" with no personal name — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- SNIPPET: TripAdvisor management reply (13 January 2026) says the owner personally selects the meat every week — [TripAdvisor](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: guests describe the hosts as "2 ragazzi molto gentili, simpatici, e volenterosi" (Virgilio, undated) and "capable young people" (TripAdvisor, September 2026); a December 2025 TripAdvisor review attributes a decline to "the change of management" — [Virgilio Aziende](https://aziende.virgilio.it/osteria/siena-si/l-osteria-dei-rossi-siena).
- SNIPPET: Google reviewers single out a waitress named Elena — [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi).
- SNIPPET: building and setting: "un locale con volte a mattone e, nella bella stagione, tavoli apparecchiati lungo la strada", "Nei pressi della Basilica di San Francesco" — [Gambero Rosso](https://www.gamberorosso.it/ristoranti/carne-siena/); TripAdvisor guests: small but welcoming, "due tavolini sotto antichi archivolti in mattoni" — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r120149991-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- SNIPPET: Contrada del Bruco link: founder described as "brucaiolo" (Gazzetta di Siena); a TripAdvisor reviewer places it in the Bruco contrada on the road to the centre; a blog post slug reads "ospiti del Bruco" — [jerryb.it](https://jerryb.it/losteria-dei-rossi-siena-ospiti-del-bruco/).
- OBSERVED: the own menu site does not mention the Contrada del Bruco — [menu.osteriadeirossi.it](https://menu.osteriadeirossi.it/).
- SNIPPET: earlier name "L'Osteria": Frommer's "L'Osteria", Gambero Rosso "L’Osteria", Yelp/Foursquare "Osteria L'Osteria", Sluurpy "L'osteria", Facebook "L'Osteria", TripAdvisor old slug "L_Osteria", 2012 blog "L'Osteria in Siena" — [Frommer's](https://www.frommers.com/destinations/siena/restaurants/losteria/).
- SNIPPET: the osteria is named as a client of the Sienese agency Adrenalina Group (article ~late October 2026) — [Gazzetta di Siena](https://www.gazzettadisiena.it/adrenalina-group-compie-un-anno-tre-giovani-senesi-al-fianco-delle-aziende/).

### Inferences
- INFERRED: the handover to Luca and Max happened around January 2024 (three months before an article dated about April 2024) and the founder died in 2023; both dates rest on the search tool's age metadata and need the article's real date.
- INFERRED: the rename from "L'Osteria" to "(L')Osteria dei Rossi" is associated with the new management; older listings kept the old name.
- INFERRED: "1975" at the Accademia may refer to Beppe Carrieri's career rather than this venue, or be an error; it should not be used without a primary source.
- INFERRED: whether a further ownership change happened after 2024 (the December 2025 "change of management" remark) is unknown; the reviewer may simply mean the 2024 handover.

### Gaps
- Surnames of Luca and Max, the legal entity, and who the current "Oste" is: not published in anything seen; ask the founder/owner.
- Full Gazzetta di Siena text and exact publication date: page not opened (host blocked).
- Building history, cellar, exact age of the brick vaults, any earlier business at 79/81: no source found.
- Formal ties to the Contrada del Bruco (society dinners, Palio events): only the founder's "brucaiolo" label and guest remarks; nothing official found.
- Cover count, outdoor table count: not published.

## 8. NAP consistency table and conflicts

### Takeaway
The street address and the main phone are consistent almost everywhere, but the business name appears in at least six spellings, the street number is often shortened to "79", Sunday hours conflict (closed vs lunch only), one mirror shows a second phone number, two emails and two Facebook URLs circulate, and a few records carry plain errors (OpenTable province "TO", Yelp "Deux-Sèvres").

### Cited Findings
| # | Source (label) | Name as listed | Address string | Phone | Hours | Flags |
|---|---|---|---|---|---|---|
| 1 | [Own menu site](https://menu.osteriadeirossi.it/) (OBSERVED) | Osteria dei Rossi | Via dei Rossi, 79/81 · 53100 Siena | +39 0577 287592 | none published | No hours; name without article |
| 2 | Google via [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi) (SNIPPET) | L'Osteria dei Rossi | Via dei Rossi, 79/81, 53100 Siena SI, Italy | +39 0577 287592 | Mon–Sat 12:30–3PM, 7–10:30PM; Sun 12:30–3PM | Sunday lunch open |
| 3 | Google via [Restaurant Guru](https://restaurantguru.com/Osteria-Via-Dei-Rossi-Siena-2) (SNIPPET) | L'Osteria dei Rossi | Via dei Rossi, 79/81, Siena | not seen | 12:30–15:00, 19:00–22:30 daily (incl. Sunday lunch) | Sunday conflict; stale (~Mar 2025) |
| 4 | [Restaurant Guru duplicate](https://restaurantguru.com/OSTERIA-dei-Rossi-Siena) (SNIPPET) | L’Osteria | same address | not seen | no Sunday evening | Duplicate, old name |
| 5 | [TripAdvisor](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html) (SNIPPET) | L’Osteria dei Rossi (old slug: L'Osteria) | Via dei Rossi 79/81, 53100 Siena | +39 0577 287592 | Mon–Sat 12:30–15:00, 19:00–22:30; Sunday closed | Sunday closed |
| 6 | [Quandoo](https://www.quandoo.it/en/place/losteria-20137) (SNIPPET) | L'Osteria dei Rossi (slug "losteria") | Via Dei Rossi 79, Siena 53100 | +39 0577 287592 | Mon–Sat 12:30–3:00 pm, 7:00–10:30 pm; Sunday closed | "79" only; not bookable |
| 7 | [OpenTable](https://www.opentable.com/r/losteria-dei-rossi-siena) (SNIPPET) | L'Osteria dei Rossi | 79 Via Dei Rossi, Siena, TO 53100 | not seen | not seen | Province "TO" is wrong; "79" only |
| 8 | [PagineGialle](https://www.paginegialle.it/l-osteria-dei-rossi-siena) (SNIPPET) | L'Osteria dei Rossi | Via dei Rossi, 79/81 - 53100 Siena (SI) | 0577 287592 | Mon–Sat 12:30–15:00, 19:00–22:30; Domenica chiuso | Email losteriarossi@gmail.com in markup |
| 9 | [Virgilio Aziende](https://aziende.virgilio.it/osteria/siena-si/l-osteria-dei-rossi-siena) (SNIPPET) | L'Osteria dei Rossi | Via dei Rossi, 79/81 | 0577 287592 | Fri, Sat 12:30–15:00, 19:00–22:30; Dom chiuso | Sunday closed |
| 10 | [oraridiapertura24](https://www.oraridiapertura24.it/filiale/Siena-L%2527Osteria%2520dei%2520Rossi-4736566U.html) (SNIPPET) | L'Osteria dei Rossi | not seen | not seen | weekdays and Sat 12:30–15:00, 19:00–22:30; Sunday closed | Sunday closed |
| 11 | [Nextdoor](https://it.nextdoor.com/pages/losteria-via-dei-rossi-1/) (SNIPPET) | L'Osteria dei Rossi (slug "losteria-via-dei-rossi") | Via dei Rossi 79 | +390577287592 | lunch and dinner; Sunday closed | Email osteriadeirossi@virgilio.it |
| 12 | [Gazzetta di Siena](https://www.gazzettadisiena.it/cucina-senese-in-un-ambiente-tradizionale-ecco-losteria-dei-rossi-di-siena/) (SNIPPET, ~Apr 2024) | l’Osteria Dei Rossi | not seen | 0577-287592 | lunch daily incl. Sunday 12:30–15; dinner Mon–Sat 19–22:30 | Sunday lunch open |
| 13 | [Gambero Rosso](https://www.gamberorosso.it/ristoranti/carne-siena/) (SNIPPET) | L’Osteria | via dei Rossi, 79 | 0577 287592 | not seen | Old name; "79"; links facebook.com/OsteriaSiena |
| 14 | [Frommer's](https://www.frommers.com/destinations/siena/restaurants/losteria/) (SNIPPET) | L'Osteria | Via dei Rossi 79 | same digits | Mon–Sat; dinner 19:30–22:30 | Old name; dinner start 19:30 |
| 15 | [Accademia Italiana della Cucina](https://www.accademiaitalianadellacucina.it/it/ristoranti/ristorante/3121-osteria) (SNIPPET) | Osteria | Via dei Rossi 79-81 | not seen | closing day Sunday | Name "Osteria"; "dal 1975" |
| 16 | [Yelp](https://www.yelp.com/biz/osteria-l-osteria-siena) (SNIPPET) | Osteria L’Osteria | Via dei Rossi, Deux-Sèvres, Siena, Italy | not seen | not seen | Garbled region; old name |
| 17 | [Foursquare](https://foursquare.com/v/osteria-losteria/4ceb850c3608a090f081ae3f) (SNIPPET) | Osteria L'Osteria | Via dei Rossi 79/81 | not seen | not seen | Old name; duplicate "Osteria Via Dei Rossi" |
| 18 | [Sluurpy](https://www.sluurpy.it/siena/ristorante/179938/l-osteria) (SNIPPET) | L'osteria | Via dei Rossi 79-81 | not seen | not seen | Old name; 2023 prices |
| 19 | [Chianti Classico](https://www.chianticlassico.com/ristoranti/ristorante-losteria/) (SNIPPET) | Ristorante L'Osteria | Via dei Rossi, 79 Siena SI | not seen | not seen | Old name; email osteriadeirossi@virgilio.it |
| 20 | [TripExpert](https://www.tripexpert.com/siena/restaurants/l-osteria-dei-rossi) (SNIPPET) | L’Osteria dei Rossi | Via de' Rossi, 79/81 | not seen | not seen | Street spelled "de' Rossi" |
| 21 | [Menufyy](https://losteria-dei-rossi.menufyy.com/) (SNIPPET) | LOsteria dei Rossi | Via dei Rossi, 79/81, 53100 Siena SI, Italy | +39 0577 287592 | not seen | Name without apostrophe |
| 22 | [Wheree](https://losteria-dei-rossi.wheree.com/) (SNIPPET) | L'Osteria dei Rossi | not seen | +39 0577 1460316 | "00:30 A.M" opening | Different phone; hours error; category "Mediterranean" |
| 23 | [Foodle](https://foodle.pro/restaurants/siena/l-osteria-dei-rossi) (SNIPPET) | l osteria dei rossi | Via dei Rossi 79 | not seen | Monday 12:30–15:00; 19:00–22:30 | "79" only |
| 24 | [Falstaff](https://www.falstaff.com/en/restaurants/l-osteria-siena) (SNIPPET) | L' Osteria | same address | not seen | not seen | Old name |
| 25 | [Instagram](https://www.instagram.com/osteriadeirossi/) (SNIPPET) | L’Osteria dei Rossi (@osteriadeirossi) | Siena (bio) | not seen | not seen | — |
| 26 | [Facebook](https://www.facebook.com/OsteriaSiena/) (SNIPPET) | L'Osteria (@OsteriaSiena) | not seen | not seen | not seen | Handle differs from menu link `/osteriadeirossi` |

**Conflicts flagged (each row above is the source)**
- Name: "Osteria dei Rossi" (own menu) vs "L'Osteria dei Rossi" (Google mirrors, TripAdvisor, Quandoo, PagineGialle, Instagram) vs "L'Osteria" (Gambero Rosso, Frommer's, Facebook, Falstaff) vs "Osteria L'Osteria" (Yelp, Foursquare) vs "Ristorante L'Osteria" (Chianti Classico) vs "Osteria" (Accademia) vs "LOsteria dei Rossi" (Menufyy) — [own menu](https://menu.osteriadeirossi.it/); [TripAdvisor](https://www.tripadvisor.com/Restaurant_Review-g187902-d716270-Reviews-L_Osteria_dei_Rossi-Siena_Tuscany.html).
- Street number: "79/81" vs "79-81" vs "79" alone (Quandoo, OpenTable, Gambero Rosso, Frommer's, Foodle, Chianti Classico, Nextdoor) — [Quandoo](https://www.quandoo.it/en/place/losteria-20137).
- Street name: "Via dei Rossi" vs "Via de' Rossi" (TripExpert) — [TripExpert](https://www.tripexpert.com/siena/restaurants/l-osteria-dei-rossi).
- Province/region errors: "TO" (OpenTable), "Deux-Sèvres" (Yelp) — [OpenTable](https://www.opentable.com/r/losteria-dei-rossi-siena); [Yelp](https://www.yelp.com/biz/osteria-l-osteria-siena).
- Phone: +39 0577 287592 everywhere except Wheree (+39 0577 1460316) — [Wheree](https://losteria-dei-rossi.wheree.com/).
- Sunday: closed (TripAdvisor, Quandoo, PagineGialle, Virgilio, oraridiapertura24, Nextdoor, Accademia) vs lunch open (Wanderlog/Google, Restaurant Guru, Gazzetta di Siena) — [Wanderlog](https://wanderlog.com/place/details/2652088/losteria-dei-rossi); [PagineGialle](https://www.paginegialle.it/l-osteria-dei-rossi-siena).
- Old closing day: Wednesday in 2014 TripAdvisor reviews; no current source repeats it — [TripAdvisor .it](https://www.tripadvisor.it/ShowUserReviews-g187902-d716270-r214626481-L_Osteria-Siena_Tuscany.html).
- Dinner start: 19:00 (most) vs 19:30 (Frommer's) — [Frommer's](https://www.frommers.com/destinations/siena/restaurants/losteria/).
- Email: osteriadeirossi@virgilio.it (Chianti Classico, Nextdoor) vs losteriarossi@gmail.com (PagineGialle markup); none on the own site — [PagineGialle](https://www.paginegialle.it/l-osteria-dei-rossi-siena).
- Facebook URL: `/osteriadeirossi` (own menu link) vs `/OsteriaSiena` (indexed page, Gambero Rosso) vs `/losteria.siena/` (profile-style) — [Facebook OsteriaSiena](https://www.facebook.com/OsteriaSiena/).
- Founding year: 1992 (menu, Facebook tagline, Gazzetta di Siena) vs "dal 1975" (Accademia) — [Accademia Italiana della Cucina](https://www.accademiaitalianadellacucina.it/it/ristoranti/ristorante/3121-osteria).
- Price band: "€30 and under" (OpenTable) vs "25–35 €" (TripAdvisor .it) vs "€€€" (Quandoo) vs "$$$" (Find Me Gluten Free); live menu mains 14–20 €, steaks 7–12 €/etto — [menu.json](https://menu.osteriadeirossi.it/data/menu.json).
- Ratings spread: Google 4.5 (mirrors); TripAdvisor 4.3; Quandoo 5.5/6 (19); Yelp 4.6 (11); Foursquare 8.5/10 (30); PagineGialle 4.5 (115); Restaurant Guru 4.9 (2359); Sluurpy 82/100 (3205); Safarway 4.3 (322); OpenTable 4.4 (1) — sources as in the table.

### Inferences
- INFERRED: the canonical NAP to standardise on is whatever the owner confirms; the own menu site's string ("Osteria dei Rossi", "Via dei Rossi, 79/81 · 53100 Siena", "+39 0577 287592") is the only owner-controlled reference seen, and it conflicts with the Google/TripAdvisor name by one article ("L'").
- INFERRED: the Sunday conflict is the highest-risk inconsistency for guests, because Google-derived data and TripAdvisor appear to say opposite things.
- INFERRED: most "old name" records were created before the 2024 management change and were never updated.

### Gaps
- Current real opening hours and closing day: not published on any owner-controlled page that could be read; to confirm with the owner before any listing is corrected.
- NAP on the live Google profile, Facebook page, Apple Maps, Bing Places, TheFork (if any): not observable from this session.
- Phone shown on Yelp, Foursquare, Sluurpy, OpenTable, Falstaff: not visible in excerpts.
