# Costì: competitor and market research (Italy first)

Prepared 2026-11-13 by the strategist (internal, English). Research only. No accounts created, nothing bought.
Product: **Costì**, DigiAlto's restaurant-operations SaaS. Tenant #1 is an osteria in Siena. This document
contains none of its private data.

**Method and limits (read first).**
- **WebSearch only.** WebFetch could not resolve `www.teamsystem.com` or `www.tilby.com` from this
  sandbox. Following the tool's guidance, I stopped trying other sites after that. To read pricing pages
  directly, those hosts (and the vendor hosts in §8) must be allowed in the session's network settings.
- **No page was read in full.** Every figure below comes from **search-result snippets** (read
  2026-11-13). Snippets do not show when the vendor last changed the page, and several conflict with each
  other. Treat every price as "seen in a search snippet on 2026-11-13; page not opened".
- If a price was not visible, the entry says **"not published / not verified"**. I have not estimated,
  rounded or converted any price.
- Vendor claims (results, accuracy, savings) are left out. Where a vendor or competitor blog is the only
  source, I say so.
- Costì's capabilities come from the task brief and `clients/osteria-dei-rossi/context.md`.
- Relevance ratings ("high/medium/low") are my judgement for a single-venue Tuscan osteria. They are not
  sourced facts.

---

## 1. Summary for the founder

- **Nobody I found sells exactly Costì's loop as a standalone, POS-independent product in Italy:**
  supplier invoice → stock → batches with expiry → waiter orders → margin. The Italian incumbents have
  the same loop, but only inside their own till:
  - TeamSystem: Cassa in Cloud plus Food Cost in Cloud [S12–S14];
  - Zucchetti: Tilby recipe-based stock depletion [S15].
  International back-office tools (MarketMan, Apicbase, Nory, Fourth) depend on a POS integration for
  sales data [S24, S25, S28, S32, S53].
- **The biggest gap is e-invoicing via SDI.** Italian B2B supplier invoices are XML sent through SDI
  [S45]. TeamSystem receives them straight into its portal through a recipient code [S62], and iPricer
  reads the XML with AI [S34]. Costì reads PDFs and photos with AI. Ingesting the SDI XML would be more
  accurate and cheaper per invoice. It is **not** in the Phase 2 list.
- **The second gap is double entry.** Costì runs alongside the RCH register, so the cashier keys sales
  twice. Every Italian POS competitor does orders and the fiscal receipt in one step. Italy's 2025 rules
  also allow software-only fiscal solutions (no RT hardware) [S47]. That makes it easier for POS vendors
  to bundle, and harder to argue that "alongside the register" is enough on its own.
- **One opportunity: no competitor seen links near-expiry batches to a "dishes to push" list.** My
  searches found FEFO and expiry alerts [S56] and prep lists [S28], but not this link. One search is not
  proof, so verify before claiming it publicly.
- **Another opportunity: Quandoo is leaving Italy.** It took its last bookings on 30 Sep 2026 and goes
  offline on 31 Dec 2026 [S8]. Italian restaurants are moving to TheFork, Plateform, Cooperto and
  others. A booking page bundled with back office is an easy add-on story. Discovery (marketplace
  traffic) is still a TheFork strength that Costì does not have.
- **HACCP, labels and lot traceability are a crowded, cheap market**, and Costì plans them for Phase 2:
  - Octopus HACCP: from €47/month excl. VAT [S41];
  - Trail: from £14/month per site [S38];
  - HACCP Nexus: €12/month Basic [S43].
  Costì's angle is that these records come from data it already holds (invoice lots → batches → plates).
  That is integration, not new features.
- **Main feature gaps beyond Phase 2:**
  - SDI XML intake;
  - purchase orders sent to suppliers;
  - Reserve with Google, deposits and reminders;
  - scales and weight capture;
  - accounting/AP integrations;
  - labour and scheduling (low relevance for one osteria).
- **Pricing is mostly per location per month.** Examples: Nory €329/location/month, Square IE €69 + VAT,
  Restaurant365 $469 per location (billed quarterly) [S28, S18, S30]. Modules are sold as add-ons:
  - Nory inventory alone €199/month [S28];
  - Qamarero from €119/month, "Total" €249/month + VAT [S23].
- **Usage caps are a common tier lever, especially AI invoice scans.** MarketMan Starter has 50 AI scans
  a month, Growth has unlimited [S24]. That fits Costì, where each extraction has a real API cost.
- **Setup and activation fees are common in HACCP and inventory tools** (Octopus €448 activation [S41];
  MarketMan $500 setup in one source [S24]). Some vendors advertise "no setup fees" as a selling point
  (Trail [S38]).
- **Most Italian incumbents don't publish prices.** TeamSystem says "richiedi il prezzo" [S12]; Tilby,
  iPratico, Zucchetti and Cooperto showed no prices. A transparent price list could set Costì apart, if
  the founder wants that.
- **Legal points to confirm with an adviser before tenant #2:**
  - SDI intake method;
  - HACCP record validity;
  - allergen information format;
  - an Art. 28 GDPR processing agreement per venue, including the disclosed DigiAlto admin access.

---

## 2. Competitor table

Overlap codes for Costì modules:
- **INV** invoices
- **REC** recipes and food cost
- **STK** stock, batches and FEFO
- **ORD** orders and kitchen
- **RPT** reports and push list
- **ALR** alerts
- **RES** reservations
- **P2** Phase 2 areas (HACCP, labels, traceability, forecast)

Pricing figures are search snippets read on 2026-11-13. Each figure gives the source ID from §8.

### 2a. Reservations

| Product | Overlap | Italy presence | Pricing as published (source, 2026-11-13) |
|---|---|---|---|
| **TheFork Manager** (TheFork) | RES | Yes. Italian marketplace; integrates with Tilby and Zucchetti POS [S4] and Lightspeed [S58] | "1 plan, €39.00/mo" on Capterra [S1]. Per-cover commissions exist: a restaurateur's review cites about €1.80/cover, later over €3 [S2], and the trade press reported a 12.6% increase that FIPE protested, year unclear [S3]. **Official price: not published / not verified** |
| **Quandoo** | RES | **Leaving.** Last bookings 30 Sep 2026, offline 31 Dec 2026, Italy included [S8] | Not relevant (shutting down) |
| **Cooperto** (Italian) | RES (+CRM/marketing) | Italian product: bookings, tables, guest CRM, automated marketing, deposits, Reserve with Google [S6] | **Not published / not verified** (Capterra shows "147 EUR" with no period or plan, so not usable) |
| **Plateform** (Italian) | RES | Italian help centre; Reserve with Google; manual confirmation; integrations with Tilby and Passepartout Menu [S7] | **Not published / not verified** |
| **OpenTable** | RES | Listed on Capterra Italia; Italian pricing not seen | US: Basic $149/mo + $1.50 network cover fee; Core $299/mo + $1.00; Pro $499/mo + $1.00 (competitor blog, Eat App [S9]). Other sources conflict (Basic $39). **Italy: not verified** |
| **SevenRooms** | RES (+CRM) | Listed on Capterra Italia; nothing more | "Contact us" [S10]. **Not published** |
| **Resy (ResyOS)** | RES | No Italian presence found | US: Platform $249/mo, Platform 360 $399/mo (third party [S11]); tier names conflict between sources |
| Italian booking-only tools (Prenotazioni Cloud, Benfatto, Digiristo) | RES | Italian | Prenotazioni Cloud from €19.99/month (monthly) or €39.99; Benfatto from €19/month, 14-day trial; Digiristo from €49 with a free version (all Capterra.it [S52]) |

### 2b. POS and order management

| Product | Overlap | Italy presence | Pricing as published (source, 2026-11-13) |
|---|---|---|---|
| **Cassa in Cloud** (TeamSystem) | ORD, STK, REC (via Food Cost in Cloud), INV (SDI e-invoice inbox), RES (TS Reservations), RPT | Italian vendor. RT built in, e-invoices received via recipient code, offline comande, smartphone order app, kitchen monitor, scales and weight-based prices [S12–S14, S62] | Professional (restaurants) and Enterprise (chains): "Prova gratis e richiedi il prezzo", **not published**; 14-day free trial [S12]. Related TeamSystem: TS Scontrini software-only "€8 €4 + IVA/mese" (launch offer); Scontrini + RT "piano annuale €30 + IVA/mese" [S12]. A 2022 reseller brochure says "35€/MESE a partire da" (outdated, not verified) |
| **Food Cost in Cloud** (TeamSystem) | REC, STK | Italian. Costs each recipe, suggests a sale price to Cassa in Cloud, depletes stock from sales [S13] | **Not published / not verified** |
| **Tilby** (Zucchetti group) | ORD, STK (stock depleted by recipe bills of materials), INV (supplier e-invoices received), RES (TheFork, Plateform integrations) | Italian [S15, S4, S7] | Restaurant plans **not published / not verified**. Capterra shows €29/month, but for a clothing-store plan [S15] |
| **iPratico** | ORD | Italian Apple-native POS (App Store, own site) [S16] | **Not published / not verified** |
| **Zucchetti (ZMenu, TCPOS, Horeca suite)** | ORD, STK, REC (raw-material costs), RES | Italian. Rooms, bookings, comande, stock, raw-material prices and costs [S21] | ZMenu: "price on request" (Capterra [S21]) |
| **Lightspeed Restaurant** | ORD, STK (K-Series inventory and recipes), RPT | Capterra Italia lists Italy and Italian; Italian RT/fiscal integration **not verified** [S17] | US per location per month: Starter $69, Essential $189, Premium $399, Enterprise custom (plans renamed 4 Feb 2026, third party [S17]). KDS add-on $30/screen/month (third party). **EUR/Italy: not verified** |
| **Square for Restaurants** | ORD, STK | **Italy availability not confirmed** (no current source) [S18] | Ireland: Plus €69 + VAT/month per location; UK £69/month per location, 30-day trial [S18] |
| **Toast** | ORD, STK, RPT | **Not in Italy.** Operates in the US, Canada, UK, Ireland and Australia [S19] | US: Starter Kit $0/month; Point of Sale $69/month (third-party reviews [S19]) |
| **SumUp POS** | ORD (floor plan in Cassa Plus) | Italian pricing page | Pay-as-you-go 0 €/month at 1.95%; Pagamenti Plus 19 €/month at 0.95%; Cassa Plus 49 €/month excl. VAT; SumUp Cassa hardware 399 € (486,78 € incl. VAT) [S20] |
| **orderbird** | ORD | **Italy presence not verified** | MINI: €39/month month-to-month + €399 device (aggregator); longer terms lower the monthly rate (orderbird help centre) [S22] |
| **Qamarero** (Spanish, Italian site) | ORD, REC (cost sheets; uploading a supplier invoice updates ingredient prices in recipes), STK (Control module) | Italian site and blog [S23] | From 119 €/month after a free first month, installation and hardware quoted separately; "Total" 249 €/month + VAT with all modules; Growth, Delivery and Control are add-ons [S23] |
| myPOS (cash register) | ORD (till only) | Italian pricing page | From €39/month excl. VAT [S69] |

### 2c. Back office, food cost and inventory

| Product | Overlap | Italy presence | Pricing as published (source, 2026-11-13) |
|---|---|---|---|
| **MarketMan** | INV (AI invoice scans, vendor EDI), REC, STK, RPT | Capterra Italia lists it as working alongside a POS; Italian UI **not verified** [S24] | Starter $249/mo (50 AI invoice scans a month, 1 vendor EDI); Growth $299/mo (unlimited scans, 2 EDI); Enterprise $449 (third party, "prices checked 20 Sep 2026" [S24]). One source: $500 first-time setup fee. Per-location basis unclear |
| **Apicbase** | REC, STK, INV, P2 (HACCP, traceability add-ons) | Capterra lists Italy; Italian SDI or POS integrations **not verified**; Deliverect integration page in Italian [S25, S53] | Custom / quote [S25]. Apicbase Food Traceability "from €799/month" (SoftwareAdvice [S25]). Other aggregators conflict |
| **Galley** | REC (auto re-costing on invoice price changes), STK | No Italian presence found | "Starting at $99/month" (Galley SMB page); free plan per Capterra and Toolradar [S26] |
| **meez** | REC | No Italian presence found | Conflicting: Starter $19/mo annual or $24 monthly; higher tiers up to $199/mo; Enterprise custom [S27] |
| **Nory** | STK, REC, RPT, P2 (forecast, prep lists) | UK-based, prices shown in € [S28]; Italian UI **not verified** | €329 / $349 / £299 per location per month, billed monthly, for 2–25 locations; inventory and supply chain alone €199/$210/£179 per month; 25+ locations custom [S28] |
| **Supy** | STK, INV, REC | No Italian presence found | Quote-based, "tailored to your setup and number of locations" [S29] |
| **Restaurant365** | INV/AP, STK, REC, RPT, labour | US; no Italian presence found | Essential $469 per location per month (billed quarterly), Professional $689 (NerdWallet [S30]); R365's own blog says from $469–$499 |
| **Tenzo** | RPT (analytics, forecasting) | UK; no Italian presence found | **Not published** (G2 [S31]) |
| **Fourth (Inventory, Purchase-to-Pay)** | STK, REC, INV/AP, P2 (forecast) | UK/US; no Italian presence found | **Not published** [S32] |
| **Lightspeed back office** (K-Series Inventory; O-Series "Produce") | STK, REC | See Lightspeed above | O-Series Produce: "Advanced Recipes" tier $20/month [S17] |
| Italian food-cost tools (Scidoo, Qubì, Microrecipes, 2Bit EasyPOS, Dylog Bacco, Passepartout Menu) | REC, STK (some ORD) | Italian | **Not published / not verified** [S63–S67] |

### 2d. Invoice processing and e-invoicing

| Product | Overlap | Italy presence | Pricing as published (source, 2026-11-13) |
|---|---|---|---|
| **Ottimate (formerly Plate IQ)** | INV (AI, EDI, GL coding, AP) | US; none found | "Starting at $249/month", but the same listing says "contact vendor" [S33]. **Not verified** |
| **iPricer** (Italian) | INV (reads XML invoices with AI; price history and increase alerts) | Italian; aimed at Ho.Re.Ca. [S34] | **Not published / not verified** |
| **Fatture in Cloud** (TeamSystem) | INV (SDI send and receive, recipient code M5UXCR1, public API) | Italian [S35] | Conflicting reviews (€4/month or €8/month standard plans); official page not readable. **Not verified** |
| **MarketMan invoice scanning** | INV | See above | Included by tier (see MarketMan) |

### 2e. HACCP, temperature monitoring and labelling

| Product | Overlap | Italy presence | Pricing as published (source, 2026-11-13) |
|---|---|---|---|
| **Octopus HACCP** (French) | P2 (HACCP records, temperatures, traceability, labels) | Italian offer **not verified** | From €47/month excl. VAT; app from €50/month; hygiene pack from €55/month + €448 activation excl. VAT; tablet pack from €62/month; 14-day trial (vendor pages [S41]) |
| **SimpleHACCP** (Italian) | P2 (temperatures with alerts, expiry dates, allergens, checklists) | Italian [S42] | **Not published / not verified** |
| **KitchenTrace / AutoHACCP / FoodTag / Haccp Pro** (Italian apps) | P2 (HACCP sheets, lots tied to preparations, Bluetooth label printing in AutoHACCP) | Italian [S43] | **Not published / not verified** (store listings show free downloads only) |
| **HACCP Nexus** | P2 | Not verified | Basic €12/month (Capterra [S43]) |
| **FoodDocs** | P2 | Not verified | Conflicting third-party figures: Lite $99/mo or $79/mo annual; Standard $199/$167; Professional $299; one EUR listing: Basic €84/mo billed €999/yr, annual only [S36] |
| **Jolt** | P2 (labels, sensors, checklists) | None found | Quote-based. One Jolt page headline says "$79.99 partnership rate per month", scope unknown [S37] |
| **Trail** (Access Group) | P2 (checklists, food safety) | None found (UK) | Solo £14/month per site; Team £38/month per site; "no set up, consultancy or training fees" (Trail page [S38]) |
| **Navitas** | P2 (probe, wireless pods, software) | None found | **Not published** [S39] |
| **Testo Saveris** | P2 (temperature loggers, cloud) | Testo has EU sites; Italian not checked | Cloud licence Basic free, Advanced "please call"; Saveris 2 fridge kit £308.00 excl. VAT at RS UK (indicative) [S40] |
| **ComplianceMate, Monnit** | P2 (sensors) | — | **Not found** in search (no data) |
| **DateCodeGenie** (NCCO) | P2 (labels) | Help centre partly in Italian; Italian sales **not verified** | Quote-based; subscription app with your own tablet, or a printer system as a one-time purchase [S44]. A competitor page claims up to $2,000 setup and about $30/month (**unverified**) |
| **COOKI + SATO** | P2 (labels: dates, ingredients, allergens) | Italian article [S44] | **Not published** |

---

## 3. Feature gap analysis

"Phase 2?" uses the founder's Phase 2 list from the brief. "No" means it is not in Phase 2 as listed.
Relevance is my judgement for a single-venue Tuscan osteria.

### Invoices
| Missing feature | Seen at | Value (one line) | Relevance | Phase 2? |
|---|---|---|---|---|
| **SDI XML intake** (recipient code or cassetto fiscale download) | Cassa in Cloud [S62], Fatture in Cloud [S35], iPricer [S34] | Structured supplier lines with no OCR errors and no per-invoice AI cost; most suppliers already send XML | **High** | **No** (e-mail-in is "later"; XML intake isn't listed) |
| Vendor EDI feeds | MarketMan, Ottimate [S24, S33] | Invoices arrive by themselves from big distributors | Low (Italy uses SDI) | No |
| AP payments and GL coding | Ottimate, R365 [S33, S30] | Pay and book invoices in one flow | Low–medium | Partly (accountant VAT export) |
| Price history and increase alerts | iPricer [S34] | Spot supplier creep | Medium | Costì already has a price-variance alert (context.md, M8); benchmarking is in Phase 2 |

### Recipes and food cost
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| Menu-engineering matrix | Fourth [S32] | Decide which plates to keep, reprice or push | Medium | **Yes** |
| Suggested sale price sent to the till | Food Cost in Cloud [S13] | Price from target margin in one click | Medium | No |
| Method, photos and prep instructions in recipes | meez, Lightspeed Produce [S27, S17] | Kitchen consistency and training | Medium | No |

### Stock
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| Purchase orders sent to suppliers | Cassa in Cloud [S14], Lightspeed K-Series [S17], Fourth [S32] | Turns purchase suggestions into an order | Medium | No (Costì only suggests) |
| Demand forecast and prep lists | Nory, Fourth [S28, S32] | Less waste, fewer stock-outs | Medium | **Yes** |
| Lot traceability, invoice → plate | Apicbase Traceability, KitchenTrace [S25, S43] | Recall response; Reg. 178/2002 context [S49] | High | **Yes** |

### Orders
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| **Fiscal receipt / RT integration** (no double entry) | All Italian POS (Cassa in Cloud, Tilby, Zucchetti) [S12, S15, S21] | One entry per sale | **High** (friction) | No (by design; the AdE corrispettivi import was parked) |
| Scales and weight capture | Cassa in Cloud [S14] | Exact weight for per-100 g items | Medium | Sell-by-weight is P2-6 in context.md (see note) |
| Online ordering, delivery, QR order-and-pay | Qamarero, Tilby, TheFork PAY [S23, S15, S61] | Extra channels and table payment | Low | No |
| Loyalty | Cassa in Cloud Professional [S12] | Repeat visits | Low | No |

### Reservations
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| **Reserve with Google** | Plateform, Cooperto [S7, S6] | Bookings straight from Google Search/Maps | **High** (tourist city) | No |
| Marketplace channel (TheFork sync) | Tilby, Lightspeed [S4, S58] | Discovery plus one diary | Medium–high | No |
| Deposits and card guarantees; automatic reminders | Cooperto, Digiristo, Benfatto, TS Reservations [S6, S52, S14] | Fewer no-shows | Medium | No |
| Guest CRM and marketing | Cooperto, SevenRooms [S6, S10] | Repeat business | Low (conflicts with Costì's 30-day data minimisation) | No, and a deliberate choice |

### HACCP and labels
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| Temperature, cleaning and receiving registers; checklists | Octopus, SimpleHACCP, Trail, FoodDocs [S41, S42, S38, S36] | Records ready for an inspection | High | **Yes** (HACCP registers) |
| 24/7 sensor alarms (SMS or push) | Jolt, Testo Saveris [S37, S40] | Catch a fridge failure overnight | High | Sensors "later"; **alerts are in-app only, which conflicts** (open question in context.md) |
| Prep labels with dates and allergens | DateCodeGenie, COOKI+SATO, AutoHACCP [S44, S43] | Correct shelf-life labels | High | **Yes** (QR batch labels) |

### Reports and platform
| Missing feature | Seen at | Value | Relevance | Phase 2? |
|---|---|---|---|---|
| Accounting export or integration | MarketMan (QuickBooks, per an affiliate page), Fatture in Cloud API [S24, S35] | Less work for the accountant | Medium | **Yes** (accountant VAT export) |
| Labour, scheduling, sales + labour analytics | Tenzo, Fourth, Nory, R365 [S31, S32, S28, S30] | Labour cost control | Low (one venue) | No |
| Open API or integrations marketplace | Lightspeed Premium, MarketMan Enterprise [S17, S24] | Partners can build on top | Low now, medium for SaaS | No |
| Sold-out shown on the public menu | — | Fewer disappointed guests | Medium | **Yes** |

**Note on scope status.** The brief lists sell-by-weight and two-step login (TOTP) as existing modules.
`context.md` (2026-11-11) puts them in Phase 2 as P2-6 and P2-1. The founder should confirm which is
current before any public feature claim.

---

## 4. Differentiators (where Costì is stronger or unusual)

| Claim to verify | What the research shows | Status |
|---|---|---|
| **A closed loop (invoice → stock → batch → order → margin) in one product, without being a POS** | Italian incumbents close the loop only inside their own POS: Cassa in Cloud plus Food Cost in Cloud, or Tilby's recipe-based depletion [S13, S15]. International back-office tools need a POS integration for sales [S24, S25, S53] | **Supported**: unusual for Italy |
| **Works alongside an existing fiscal register** | True by design. It is both a strength (no till replacement, no RT change) and a weakness (double entry). Software-only fiscalisation since 2025 [S47] may let others offer "no hardware" too | **Two-sided**; position it as "keep your register" |
| **Batches with FEFO plus a push list of near-expiry dishes** | FEFO and expiry alerts exist elsewhere [S56], and prep lists exist [S28]. No product seen links near-expiry batches to which dishes to sell | **Probably unique; verify** before a public claim (one search) |
| **Italian-first, phone-first PWA; waiters use their own phones** | Italian incumbents are Italian too. Cassa in Cloud also has a smartphone order app [S14]. International tools (MarketMan, Nory, Galley, meez) showed no Italian UI | **Partial**: an advantage over international tools, not over TeamSystem or Zucchetti |
| **AI extraction of PDF and photo invoices with line review and supplier mapping memory** | MarketMan has AI scans [S24], Qamarero updates recipe prices from uploaded invoices [S23], iPricer uses AI on XML [S34] | **Not unique**; strong only when combined with the loop |
| **Role-based cost privacy** (chef sees percentages, waiters see no costs; context.md V6) | No competitor source checked this | **Unverified** as a differentiator |
| **Data minimisation and EU hosting** (no guest CRM, 30-day booking retention) | Cooperto and SevenRooms sell CRM [S6, S10]. Costì's approach is a deliberate contrast | Positioning choice, not a feature win |
| **HACCP and labels built from data Costì already holds** (Phase 2) | Standalone HACCP apps need separate data entry [S41–S43] | **Opportunity** once Phase 2 ships |

---

## 5. Pricing and tier patterns

### Patterns seen (cited examples only; all snippets, 2026-11-13)
| Pattern | Examples |
|---|---|
| **Per location per month** | Nory €329/location/month, 2–25 locations [S28]; Square IE Plus €69 + VAT/month per location [S18]; Lightspeed US $69 / $189 / $399 per location [S17]; Restaurant365 $469 per location, billed quarterly [S30]; Trail £14 / £38 per site [S38] |
| **Modules as add-ons** | Nory inventory alone €199/month [S28]; Qamarero base from €119/month with Growth, Delivery and Control add-ons, or "Total" €249/month + VAT [S23]; Lightspeed KDS $30/screen/month [S17]; Apicbase HACCP and other modules as paid add-ons [S25] |
| **Usage caps as the tier lever** | MarketMan: 50 AI invoice scans a month on Starter, unlimited on Growth; vendor EDI count by tier [S24] |
| **Per-cover or transaction fees on top** | OpenTable network cover fee $1.50 (Basic) or $1.00 (Core, Pro) [S9]; TheFork per-cover commissions [S2, S3]; SumUp 1.95% pay-as-you-go vs 0.95% with 19 €/month [S20] |
| **Setup or activation fees** | Octopus HACCP €448 activation [S41]; MarketMan $500 first-time setup (one source) [S24]; Qamarero installation quoted separately [S23]. Counter-example: Trail "no set up, consultancy or training fees" [S38] |
| **Annual vs monthly discount** | meez $19 annual vs $24 monthly [S27]; FoodDocs $79 annual vs $99 monthly [S36]; orderbird longer term, lower rate [S22]; FoodDocs EUR plan annual only [S36] |
| **Free tier or free trial** | Toast Starter Kit $0 [S19]; Galley free plan [S26]; SumUp 0 €/month plan [S20]; trials: Cassa in Cloud 14 days [S12], Square 30 days [S18], Qamarero first month free [S23], Octopus 14 days [S41] |
| **Hardware bundled or sold alongside** | SumUp Cassa 399 € [S20]; Octopus tablet pack from €62/month [S41]; DateCodeGenie printer as a one-time purchase vs app subscription [S44] |
| **Quote-only** | TeamSystem Cassa in Cloud [S12], Apicbase [S25], Supy [S29], Tenzo [S31], Fourth [S32], SevenRooms [S10], Ottimate [S33] |

### Tier-structure options for Costì (structures only; prices are the founder's decision)

**Option A: one all-inclusive plan per venue, plus hardware add-ons.**
- One subscription per venue covers every software module.
- Optional add-ons only for things with real hardware or per-unit cost: label printer kit, temperature
  sensors.
- Annual billing at a discount; monthly allowed.
- Simple to sell by invitation, and matches Nory's per-location model [S28]. The risk is that small
  venues pay for modules they don't use.

**Option B: core back office plus modules.**
- Core: invoices, recipes and food cost, stock and batches, reports and alerts.
- Add-on modules: Orders and kitchen; Reservations; HACCP and labels (Phase 2).
- Lets a venue that already has an Italian POS with order-taking buy only the back office. That widens
  the market and avoids competing head-on with Cassa in Cloud or Tilby. Mirrors Nory's standalone
  inventory and Qamarero's modules [S28, S23].

**Option C: good / better / best by usage.**
- Tiers differ by AI invoice extractions per month, staff or device count, and history length or
  exports. An SDI XML intake, if built, could be unlimited because it has no AI cost.
- Ties price to Costì's main variable cost (extraction API calls). Mirrors MarketMan's scan caps [S24].
- Can be combined with A or B.

Cross-cutting choices for the founder (no figures given):
- whether to charge an onboarding fee for menu, recipe and ingredient import, or advertise "no setup
  fee" as Trail does [S38];
- founding-venue terms for invitation-only customers;
- contract length;
- whether to publish prices, given that most Italian incumbents don't [S12, S15, S21].

---

## 6. Italian-market specifics that matter

Everything legal below is **to confirm with an adviser** (commercialista, HACCP consultant, privacy
lawyer). Only secondary sources were seen as snippets; no official text was opened.

| Topic | What the sources say | Implication for Costì |
|---|---|---|
| **E-invoicing via SDI** | Invoices are structured XML sent through the Agenzia delle Entrate's SDI. The obligation was extended to flat-rate (forfettari) taxpayers from 1 Jan 2024; sources cite AdE FAQ 150 of 22 Dec 2022, and one outlier says 1 Jul 2024 [S45]. Suppliers deliver to a recipient code: TeamSystem's portal [S62], Fatture in Cloud code M5UXCR1 [S35]. One review says Fatture in Cloud includes 10-year legal storage in all plans [S35]. **To confirm with an adviser** | Almost all supplier invoices already exist as XML. Options to evaluate: (a) take XML from the venue's existing e-invoicing provider through its API; (b) download from the cassetto fiscale; (c) become or partner with an intermediary. Legal storage stays with the venue's provider; Costì's copy is operational. **To confirm** |
| **Fiscal registers (RT)** | RT mandatory for retail, including bars and restaurants, from 1 Jan 2021 (vendor blog [S23]). Provvedimento 111204 of 7 Mar 2025 approved specifications for **software-only** storage and transmission of daily takings without an RT [S47]. POS-to-RT link required from 1 Jan 2026 (Budget Law 2025; Provvedimento 424470 of 31 Oct 2025), with the procedure on "Fatture e corrispettivi" from 5 Mar 2026 [S46, S47]. Penalty figures conflict between sources [S46]. **To confirm with an adviser** | Costì takes no payments and issues no fiscal documents, so the POS-RT link is not Costì's duty (to confirm). Software fiscalisation lowers the barrier for competitors; a future "Costì issues the receipt" path would be a large regulatory project |
| **HACCP (Reg. EC 852/2004)** | Food businesses, including those serving food, must be registered under Reg. 852/2004 [S48]. HACCP-based procedures apply with flexibility for small businesses [S48]. A secondary source gives a €500–3,000 administrative fine for Annex II hygiene breaches [S48]. A commercial blog says inspectors check the HACCP manual, temperature records, training certificates and raw-material traceability [S48] (not official). D.Lgs 193/2007 was **not** read. **To confirm with an adviser and the venue's HACCP consultant** | Phase 2 registers must produce records the consultant accepts. Validity of digital records and who signs them: to confirm |
| **Traceability (Reg. EC 178/2002 art. 18)** | Operators must identify their suppliers and the businesses they supply. An AUSL Bologna guide says to keep an up-to-date supplier list with contact details [S49]. One source gives €750–4,500 fines under D.Lgs 190/2006 [S49]. **To confirm** | Invoice → batch → plate trace (P2-2) covers "one step back" from supplier data Costì already holds |
| **Allergens (Reg. EU 1169/2011)** | Applies to food service; 14 allergens in Annex II. Information may be given on the menu, in a register or by equivalent means (sources disagree on the format) [S50]. Penalty figures under D.Lgs 231/2017 conflict between sources [S50]. **To confirm** | Costì's "to confirm" allergen state (context.md, M7) fits. Printing allergens on labels and the public menu should wait for adviser confirmation |
| **GDPR** | A SaaS vendor processing data for a venue is a processor (art. 4(8)). An Art. 28(3) agreement is required, and the Garante has criticised agreements that only copy the article text. Sub-processors need written authorisation [S51]. Art. 13–14 notices must name recipients and the right to complain to the Garante [S51]. **To confirm with a privacy adviser** | Before tenant #2: a per-venue DPA (data processing agreement) listing sub-processors (hosting, e-mail, AI extraction). It must disclose DigiAlto's standing admin access (founder decision 2026-11-13). Also needed: booking-page privacy text and the staff-account register entry |
| **Common integrations in Italy** | TheFork Manager with Tilby, Zucchetti POS and Lightspeed [S4, S58]; Plateform with Tilby and Passepartout Menu [S7]; Reserve with Google (Plateform, Cooperto) [S7, S6]; Food Cost in Cloud with Cassa in Cloud [S13]; Deliverect with Lightspeed and Apicbase [S53] | Most useful first integrations for Costì: SDI XML intake, Reserve with Google, and a TheFork diary sync |

---

## 7. Risks and threats

| Risk | Why it matters | Signal / source |
|---|---|---|
| **Incumbent bundling** | TeamSystem and Zucchetti already sell till + RT + e-invoice inbox + stock + food cost + bookings to Italian restaurants. They can add expiry, batches or HACCP cheaply | [S12–S15, S21, S62] |
| **Double entry at the till** | Costì orders plus separate keying into the register is daily friction that POS competitors don't have. It could drive churn or lead a venue to switch POS instead | By design (brief) |
| **PDF/AI intake vs. SDI XML** | Competitors with an SDI inbox get exact lines at no AI cost; Costì's per-invoice cost and error rate look worse in comparison | [S34, S35, S62] |
| **Switching costs (both ways)** | Venues on Cassa in Cloud or Tilby already have recipes and stock there. Once Costì holds a venue's recipes and ledgers, it keeps them, which needs a fair export policy | [S13, S15] |
| **Marketplace power in reservations** | TheFork brings diner traffic; Costì's booking page has none. Per-cover commissions are disputed, though (FIPE protest) | [S2, S3] |
| **Cheap point solutions** | HACCP apps from €12–€50/month and free booking tiers set low price expectations for single modules | [S43, S41, S54] |
| **Regulatory change** | Software fiscalisation (2025), the POS-RT link (2026) and e-invoicing rules all keep moving; HACCP and allergen record formats need adviser sign-off | [S46, S47, S50] |
| **Liability** | HACCP records, allergen data and lot traces are food-safety artefacts. Errors carry fines and harm risk | [S48–S50] |
| **Night-time alarms** | Sensors with in-app-only alerts may not meet the "fridge failed at 3 am" need that Jolt and Testo market | [S37, S40]; context.md open question |
| **Breadth vs. capacity** | Competitors specialise; Costì covers seven modules. Depth gaps (POs, Reserve with Google, scales) may show in demos | §3 |
| **Opaque competitor pricing** | Most Italian incumbents publish no prices, so price comparisons in sales talks can't be checked | [S12, S15, S21] |

---

## 8. Sources

All read on **2026-11-13**. **No source was read in full.** Every entry was seen **only in search
snippets**, because WebFetch to `www.teamsystem.com` and `www.tilby.com` failed (host not allowed) and
I did not try others.

| ID | Source (all: snippet only, 2026-11-13) |
|---|---|
| S1 | https://www.capterra.com/p/10036136/TheFork-Manager/ · https://www.capterra.com/p/10036136/TheFork-Manager/pricing/ |
| S2 | https://nl.trustpilot.com/review/theforkmanager.com |
| S3 | https://www.dissapore.com/notizie/ristorazione-fipe-protesta-contro-laumento-delle-commissioni-di-thefork/ · https://www.corrierecomunicazioni.it/digital-economy/the-fork-le-commissioni-salgono-del-126-fipe-aumenti-ingiustificati/ |
| S4 | https://www.tilby.com/en/how-does-it-work/integrations/the-fork/ · https://www.mixerplanet.com/post-pdf/28065 |
| S6 | https://www.capterra.co.uk/software/1237048/Cooperto · https://www.fullpress.it/en/restaurant-booking-software-without-intermediation/ |
| S7 | https://intercom.help/plateform/it/ · https://intercom.help/plateform/it/articles/7947403-come-attivare-il-tasto-prenota-su-google · https://intercom.help/plateform/it/articles/7947269-prenotazioni-inserimento-manuale · https://intercom.help/plateform/it/articles/8703109-impostazioni-integrazioni-tilby-guida-completa-per-le-prenotazioni · https://intercom.help/plateform/it/articles/9163543-impostazioni-integrazioni-passepartout-menu-guida-completa |
| S8 | https://www.verdictfoodservice.com/newsletters/quandoo-to-shut-restaurant-booking-platform-by-end-of-2026 · https://restaurant.eatapp.co/blog/quandoo-is-shutting-down · https://www.aleno.me/en/blog/quandoo-is-shutting-down-what-restaurants-need-to-know-now |
| S9 | https://restaurant.eatapp.co/blog/opentable-pricing · https://restaurant.eatapp.co/blog/opentable-alternatives · https://www.capterra.co.uk/software/17313/opentable-for-restaurants |
| S10 | https://www.capterra.com/p/165480/SevenRooms/pricing/ · https://www.capterra.it/software/165480/sevenrooms |
| S11 | https://www.perfectvenue.com/post/sevenrooms-vs-resy · https://www.g2.com/products/resyos/pricing |
| S12 | https://www.teamsystem.com/horeca/cassa-in-cloud/prezzi/ · https://www.teamsystem.com/horeca/ts-scontrini/prezzi/ · https://www.teamsystem.com/horeca/cassa-in-cloud/prezzi/abbonamenti-teamsystem-scontrini-registratore-telematico/ · https://www.readydigital.it/media/2022/11/Brochure_CassaInCloud_Risto.pdf |
| S13 | https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/integrazioni-software-api/foodcost/ |
| S14 | https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/magazzino/ · https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/gestione-comande/ · https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/prenotazione-tavoli/ · https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/listini-menu/ · https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/hardware/bilance-elettroniche-professionali/ |
| S15 | https://apps.apple.com/it/app/tilby/id922452353 · https://www.capterra.it/software/1064651/tilby · https://www.capterra.com/p/10019411/Tilby/ |
| S16 | https://ipratico.com/pos/ipratico-pos-registratore-cassa.php · https://apps.apple.com/app/id1067869208 |
| S17 | https://costbench.com/changelog/lightspeed-restaurant-plans-renamed-2026-02/ · https://www.lightspeedhq.com/au/pos/restaurant/pricing-o/ · https://www.capterra.it/software/211849/lightspeed-resturant · https://k-series-support.lightspeedhq.com/hc/articles/4407517428891 · https://product-info.lightspeedhq.com/lightspeed-restaurant-o-series-produce/ |
| S18 | https://square.com/ie/en/point-of-sale/restaurants/pricing · https://squareup.com/gb/en/point-of-sale/restaurants/pricing · https://www.capterra.it/software/183267/square-point-of-sale |
| S19 | https://support.toasttab.com/en/article/Toast-Product-Availability-in-Australia-Canada-Ireland-and-the-United-Kingdom · https://www.nerdwallet.com/business/software/reviews/toast-pos |
| S20 | https://www.sumup.com/it-it/tariffe/ |
| S21 | https://zucchetti.it/it/dms/zucchetti-it/SETTORI/hospitality/schede-informative/pdf/Software_Zucchetti_settore_Ristorazione.pdf · https://www.capterra.it/software/1037886/zmenu |
| S22 | https://orderbirdmini.helpjuice.com/en_US/your-license · https://us.fitgap.com/products/006793/orderbird-pos |
| S23 | https://qamarero.com/en/pricing/ · https://qamarero.com/it/schede-costo/ · https://qamarero.com/it/blog/aprire-un-ristorante-2025-obblighi-fiscali-e-digitali/ |
| S24 | https://www.itechguides.com/products/marketman/pricing/ · https://marketman.com/pricing · https://www.trustradius.com/products/marketman/pricing · https://www.spendbase.co/it/?p=14691 |
| S25 | https://toolradar.com/tools/apicbase/pricing · https://www.softwareadvice.com/distribution/apicbase-food-traceability-profile · https://www.capterra.it/software/171584/apicbase-restaurant-management |
| S26 | https://www.galleysolutions.com/galley-for-smb · https://www.galleysolutions.com/recipe-food-costing-software-for-foodservice · https://www.capterra.com/p/190294/Galley/ |
| S27 | https://www.getmeez.com/pricing · https://www.capterra.com/p/246573/meez/pricing/ |
| S28 | https://nory.ai/pricing/ · https://www.nory.ai/operations/inventory |
| S29 | https://supy.io/supy-pricing |
| S30 | https://www.nerdwallet.com/business/software/learn/restaurant365 · https://www.restaurant365.com/blog/restaurant-operations-platform-cost-comparison-r365-vs-alternatives/ |
| S31 | https://www.g2.com/products/tenzo/pricing · https://us.fitgap.com/products/tenzo |
| S32 | https://www.fourth.com/solution/inventory-management · https://uk.fourth.com/solution/inventory-management/recipe-menu-engineering-management |
| S33 | https://www.softwareadvice.com/za/retail/plate-iq-profile/ · https://plateiq.com:443/industry/restaurants/ |
| S34 | https://www.capterra.it/software/1108403/iPricer |
| S35 | https://www.fattureincloud.it/costo/ · https://www.partitaiva.it/fatture-in-cloud/ · https://centrofiscale.com/fatture-in-cloud-recensione-2026/ |
| S36 | https://www.fooddocs.com/pricing · https://toolradar.com/tools/fooddocs/pricing · https://www.g2.com/products/fooddocs/pricing |
| S37 | https://www.jolt.com/solutions/digital-food-safety-copy/ · https://www.jolt.com/?p=2004 |
| S38 | https://trailapp.com/pricing-c · https://toolradar.com/tools/trail |
| S39 | https://navitas-oldwpsite.navitas.eu.com/?p=11514 |
| S40 | https://testo.com/en-UK/applications/food-restaurants-gastronomy-saveris-2 · https://uk.rs-online.com/web/p/data-loggers/1450238 · https://cdn.shopify.com/s/files/1/1161/1974/files/General_Food_Safety_Instrument_Brochure_priced_-_Eurotec_Ltd.pdf |
| S41 | https://octopus-haccp.com/en/ · https://octopus-haccp.com/en/haccp-compliance-package · https://octopus-haccp.com/?p=18952 |
| S42 | https://it.trustpilot.com/review/simplehaccp.com |
| S43 | https://www.capterra.it/software/1312849/KitchenTrace · https://apps.apple.com/it/app/autohaccp/id6478009149 · https://apps.apple.com/it/app/foodtag/id1609262331 · https://mwm.ai/apps/haccp-pro/6756616242 · https://www.capterra.com/p/10046175/HACCP-Nexus/ |
| S44 | https://www.ncco.com/datecodegenie/ · https://bohwiz-landing.pages.dev/pricing/ · https://www.itismagazine.it/featured/con-cooki-e-sato-lautomazione-entra-nelle-cucine |
| S45 | https://www.ipsoa.it/documents/quotidiano/2023/12/13/forfetari-fattura-elettronica-1-gennaio-2024 · https://quickfisco.it/blog/regime-forfettario/fatturazione-elettronica-forfettari-2024-guida-completa · https://www.money.it/fattura-elettronica-guida-completa-istruzioni |
| S46 | https://www.assolombarda.it/servizi/fisco/documenti/guida-operativa-pos-rt-agenzia-entrate-febbraio-2026 · https://www.fiscoetasse.com/normativa-prassi/13532-collegamento-pos-e-registratori-telematici-dal-2026.html · https://www.quotidianopiu.it/dettaglio/16483941/pos-e-rt-collegamento-entro-il-31-ottobre-per-le-attivazioni-di-agosto |
| S47 | https://www.ipsoa.it/documents/quotidiano/2025/03/08/corrispettivi-giornalieri-approvate-specifiche-tecniche-rilascio-software · https://www.agendadigitale.eu/documenti/corrispettivi-arrivano-i-software-per-gestirli-cosa-dice-lagenzia-delle-entrate/ · https://www.ecnews.it/fiscale/fisco-e-patrimonio/imposte-sul-reddito/pos-e-scontrini-obbligo-di-collegamento-dal-1-gennaio-2026/ |
| S48 | https://certifico.com/chemicals/documenti-chemicals/documenti-riservati-chemicals/notifica-ai-fini-registrazione-regolamento-ce-n-852-2004 · https://www.tutto626.it/wp-content/uploads/2014/04/attuale-regime-sanzionatorio-nel-campo-alimentare.pdf · https://prd-www-comune-pinerolo-to.portali.csi.it/media/392 · https://qamarero.com/it/blog/sanzioni-haccp-importi-controlli-e-come-proteggerti/ |
| S49 | https://www.diritto.it/linee-guida-la-rintracciabilita-dei-prodotti-alimentari/ · https://www.lab-to.camcom.it/media/events/attachment/Slide_Andreis_iMvqtma.pdf · AUSL Bologna "scheda 6.9 Rintracciabilità" (ausl.bologna.it, schede-osa) · https://www.filodiritto.com/disciplina-sanzionatoria-le-violazioni-del-regolamento-ce-n-1782002-che-stabilisce-i-principi-e-i-requisiti-generali-della-legislazione-alimentare-istituisce-lautorita-europea-la-sicurezza-alimentare-e-fissa-procedure-nel-settore-della-sicurezza |
| S50 | https://www.assolombarda.it/governance/gruppi/turistico/informazioni/informazioni-sugli-alimenti-regolamento-1169-2011 · https://fipe.it/wp-content/uploads/2021/12/allergici_sanzioni_web.pdf · https://ilfattoalimentare.it/?p=60802 · https://gazzettadelgusto.it/dove-mangiare/indicazione-degli-allergeni-nel-menu-direttive-da-seguire/?print=pdf |
| S51 | https://www.agendadigitale.eu/sicurezza/responsabile-del-trattamento-chi-e-e-cosa-fa-tutto-quello-che-ce-da-sapere/ · https://www.garanteprivacy.it/garante/doc.jsp?ID=10084420 · https://zucchetti.it/it/dms/zucchetti-it/Footer%20PDF/Servizi_Informatici_e_Privacy_Hospitality.pdf |
| S52 | https://www.capterra.it/software/1045020/prenotazioni-cloud · https://www.capterra.it/software/1083254/Digiristo · https://www.capterra.it/software/1102876/Benfatto |
| S53 | https://website-prod-assets.deliverect.com/it-it/integrations/apicbase · https://www.deliverect.com/it-it/integrations/lightspeed-pos-kseries |
| S54 | https://tableo.com/it/?p=78216 |
| S56 | https://www.kladana.com/industries/food-inventory-software/ · https://www.cleverence.com/amp/articles/for-business/food-service-inventory-management-5827/ |
| S58 | https://www.lightspeedhq.co.uk/integrations/thefork/ · https://k-series-support.lightspeedhq.com/hc/articles/26405089037467 |
| S61 | https://www.aziendabanca.it/notizie/fintech-insurtech/thefork-pay-con-qr-code |
| S62 | https://www.teamsystem.com/horeca/cassa-in-cloud/funzionalita/fatturazione-elettronica/ |
| S63 | https://www.scidoo.com/en/magazzino-food-cost |
| S64 | https://www.capterra.it/software/1032663/qubisoftware · https://www.capterra.it/software/204894/microrecipes |
| S65 | https://www.sigep.it/restricted-assets/digital-profiles/01_ATTACHMENTS/SIG26/2Bit-EasyPOS-A4-12pp-24-12-03-WEB-6929a62e855dd.pdf.pdf |
| S66 | https://dylog.it/wp-content/uploads/2024/02/BACCO-Folder-1023w.pdf |
| S67 | https://sng-group.it/storage/pieghevole-menu.pdf |
| S69 | https://www.mypos.com/it-it/cashregister/pricing-and-fees |

(IDs S5, S55, S57, S59, S60, S68 are not used.)

Hosts to allow if the founder wants pricing pages read directly: `www.teamsystem.com`, `www.tilby.com`,
`thefork.it` / `theforkmanager.com`, `cooperto.it`, `plateform.it`, `lightspeedhq.it`, `nory.ai`,
`marketman.com`, `get.apicbase.com`, `fattureincloud.it`, `octopus-haccp.com`, `simplehaccp.com`.

---

## 9. Open questions for the founder

1. Which is current: are sell-by-weight and TOTP live (as in the brief) or Phase 2 P2-6 and P2-1 (as in
   context.md)? This decides what can be claimed in sales material.
2. Should SDI XML intake be added to the roadmap ahead of, or alongside, AI extraction? Which route:
   the venue's e-invoicing provider API, the cassetto fiscale, or an intermediary? (Adviser input
   needed.)
3. Positioning against Italian POS bundles: "back office next to any till" (Option B) or "all-in-one
   next to the register" (Option A)?
4. Publish prices or keep them by invitation?
5. Should Reserve with Google or a TheFork diary sync be considered, given Quandoo's exit?
6. Who confirms HACCP record validity, allergen format and the Art. 28 DPA before tenant #2? Who sees
   night-time sensor alarms if alerts stay in-app only?
7. May the strategist get the vendor hosts above allowed, so pricing can be verified on the vendors'
   own pages?
