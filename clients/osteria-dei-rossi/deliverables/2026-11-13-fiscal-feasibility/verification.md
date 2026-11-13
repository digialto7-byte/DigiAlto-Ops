# Costì fiscal and market research: verification against primary sources

Verified 2026-11-13 (internal, English). This checks `study.md` (same folder) and
`../2026-11-13-market-research/research.md` against official and vendor pages that were **downloaded
and read in full** today with curl, plus Playwright for the A-Cube docs, which need JavaScript. Neither
source file was edited.

**Nothing here is legal or tax advice.** Every legal or fiscal point is **to confirm with the
commercialista**.

**Method and limits**
- Read in full: agenziaentrate.gov.it (pages and PDFs), normattiva.it, fatturapa.gov.it, rch.it,
  fiskaly.com, support.google.com, developers.google.com, teamsystem.com, tilby.com,
  get.apicbase.com, openapi.com, developers.fattureincloud.it, docs.acubeapi.com.
- **Could not be read:**
  - cooperto.it, thefork.it, marketman.com and nory.ai all redirect to `www.` hosts, and the proxy
    refuses those (403).
  - plateform.it fails TLS ("unable to get local issuer certificate").
  - Several hosts that sources point to are not on the allowed list: console.openapi.com,
    workspace.fiskaly.com, fattureincloud.it, xmarket.rch.it, Camera/MEF and trade press.
- "Not found" means not found on the pages listed. It does not mean the thing does not exist.
- PDFs carry no title metadata. For a PDF, the "title" column gives the heading printed on the
  document.

---

## Short answer for the founder

1. **Costì cannot replace the till today.** By law, every restaurant sale is certified with a
   "documento commerciale" from an approved RT or from the AdE's free web procedure. The AdE site says
   it can be issued "esclusivamente" these two ways.
2. Software-only solutions with no RT are defined in law and in the AdE specifications (Provv. 111204
   of 7 March 2025, specs v1.4 of 7 August 2026). However, **no approved solution or register was found
   on the AdE site.** The AdE itself expects them "presumably by the end of 2026 and from 2027".
3. So **the venue keeps its RCH register for now**, and Costì stays the back office. Linking the POS to
   the RT is the venue's duty (to confirm with the commercialista).
4. **Integration option A, now:** keep both systems and reconcile at day close (already built). A
   cheap extra is a "key into register" sheet.
5. **Integration option B, later:** Costì drives the register over the LAN through a small local
   bridge. RCH publishes "RCH Webservice (HTTPS)" for its PRINT! 3.0 RT. The venue's LDP03 is an
   approved RCH RT, but RCH publishes no documentation for it, so ask the dealer.
6. **Integration option C, from about 2027:** Costì calls the API of an approved software-solution
   provider. The AdE specs explicitly allow outside software to call those APIs. fiskaly says its own
   product is still in "pre-assessment". Then the venue could retire the RT.
7. **Avoid "portal" products** that issue receipts through the AdE web procedure on the merchant's
   behalf. Their status is disputed, so check with the commercialista first.

---

## What changed (corrections that matter)

1. **fiskaly SIGN IT is not approved.** Its own page says it "is in pre-assessment with the
   certification body; certification will start soon, followed by homologation… we don't promise
   dates." SIGN IT lite connects to the AdE portal. The study's "fully approved… homologated" is wrong.
2. **No register of approved software solutions was found on the AdE site.** The provvedimento says
   applications may be filed "from a date to be announced" (point 3.3), and no such notice was found.
   The AdE's own POS–RT guide (February 2026) says software solutions will come "presumibilmente entro
   la fine dell'anno 2026 e dal 2027". Both files say software-only receipts have been possible "since
   2025". Only the rules exist; no product can be used yet.
3. **The law moves on 1 January 2027.** D.Lgs. 19 January 2026 n. 10 (Testo unico IVA) abrogates
   art. 2 of D.Lgs. 127/2015 and re-enacts it as **TU IVA art. 82**. Art. 24 of D.Lgs. 1/2024 becomes
   **art. 83**. Per art. 171 the TU applies from 1 January 2027. The substance read is the same, but
   every citation in the study needs the new article numbers from 2027.
4. **The POS–RT sanction is settled in the law text.** Art. 11 c. 5 of D.Lgs. 471/1997 applies the
   €1,000–4,000 sanction to a missing POS link. The "€500 per case" was not found. Separately, wrong or
   incomplete transmissions cost €100 each, at most €1,000 per quarter (c. 2-quinquies).
5. **The RT start date is 1 January 2020, not 2021.** The market research says 2021. Art. 2 c. 1 says
   1 January 2020 (1 July 2019 above €400,000). "1 January 2021" is only the end of the first-semester
   sanction relief in c. 6-ter.
6. **An approved software solution needs more than the study listed:**
   - an AdE-listed **certifier** (now confirmed by the official specs, not only by secondary sources);
   - **ISO 9001 and ISO 27001** for the producer and the provider;
   - provider accreditation, interoperability tests and a service agreement with the AdE;
   - the processing point (PEL), and a cloud issuing point (PEM) if used, hosted in the EU.

   The specs also **allow external software to call the solution's REST/SOAP APIs**, with the provider
   responsible for the caller. That makes option C above legally viable.
7. **RCH does publish LAN protocols.** RCH's own PRINT! 3.0 RT page lists "RCH, RCH Webservice, RCH
   Webservice con HTTPS, XOn-XOff, Upos, JavaPos" over Ethernet, Wi-Fi, RS232 and USB. The study only
   had a third-party guide for this. The **LDP03 RT is confirmed** on the AdE list of approved RTs (RCH
   ITALIA S.p.A., code V8, provv. 2022/341934 of 5 Sep 2022). RCH has no product page or documentation
   for it.
8. **The AdE has an official machine-to-machine bulk download.** The "Servizi Massivi di Trasmissione
   e Scarico file" are open only to web-service providers accredited to SdICoop. The study says no
   official API was found. Also, the AdE keeps invoice files in "Consultazione" only until 31 December
   of the second year after receipt, which limits the manual P4 route.
9. **FatturaPA schema 1.2.3 has been current since 1 April 2025.** Version 1.2.2 was valid until
   31 March 2025. SDI specs 1.9.1 are "utilizzabili dal 15 maggio 2026"; the AdE does not say
   "mandatory".
10. **Pricing:**
    - TeamSystem figures are confirmed, with promo end dates and fees added.
    - Openapi's own page now says "From: €0.0135 + VAT", which replaces the conflicting snippets.
    - Apicbase publishes no prices, and its Growth plan starts "from 5 outlets".
    - MarketMan, Nory, Cooperto, TheFork Manager and Plateform could not be read, so their figures stay
      unverified.

---

## Table of claims checked

Status: **confirmed**, **corrected**, or **not found**. All sources were read 2026-11-13.
Abbreviations: S = `study.md`, R = `research.md`.

### (a) Receipt regime

| # | Claim (as written) | From | Status | Corrected or verified text | Source: URL (exact page title) |
|---|---|---|---|---|---|
| a1 | Art. 2 c. 1 D.Lgs. 127/2015 requires art. 22 DPR 633/72 operators (restaurants) to store and send daily takings | S §4 3(a) | confirmed | Text in force since 18-12-2025: "A decorrere dal 1° gennaio 2020 i soggetti che effettuano le operazioni di cui all'articolo 22… memorizzano elettronicamente e trasmettono telematicamente…" | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127~art2!vig=2026-11-13 ("DECRETO LEGISLATIVO 5 agosto 2015, n. 127 - Normattiva") |
| a2 | Start dates: 1 Jul 2019 above €400,000, 1 Jan 2020 for everyone else | S §4 3(a) | confirmed | Same comma 1 | as a1 |
| a3 | "RT mandatory for retail, including bars and restaurants, from 1 Jan 2021" | R §6 | corrected | 1 Jan 2020 (1 Jul 2019 above €400,000). 2021 is only the end of the first-semester sanction relief in c. 6-ter | as a1 |
| a4 | The free "Documento commerciale online" web procedure is an alternative to the RT | S §4 3(a) | confirmed | "il documento commerciale, che potrà essere emesso esclusivamente utilizzando un registratore telematico (RT) o una procedura web" | https://www.agenziaentrate.gov.it/portale/web/guest/misuratori-fiscali-e-registratori-telematici/infogen-misuratori-fiscali-e-registratori-telematici-imprese ("Imprese - Misuratori fiscali e registratori telematici - Che cos'è - Agenzia delle Entrate") |
| a5 | Takings sent within 12 days "when the RT is broken or the web procedure is used" | S §4 3(a) | corrected | 12 days is the general legal deadline for all corrispettivi data (c. 6-ter: "entro dodici giorni dall'effettuazione dell'operazione"). The "RT broken" procedure was not checked | as a1 |
| a6 | From 2027 the regime stays in art. 2 D.Lgs. 127/2015 (implied by every citation) | S §4, R §6 | corrected | Art. 2 is abrogated by D.Lgs. 19 Jan 2026 n. 10 (TU IVA, GU n. 24 of 30-01-2026, S.O. n. 4). Content moves to TU art. 82 and art. 24 D.Lgs. 1/2024 to TU art. 83. Art. 171: "si applicano a decorrere dal 1° gennaio 2027" | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2026-01-19;10 ("DECRETO LEGISLATIVO 19 gennaio 2026, n. 10 - Normattiva"); arts 82, 83, 171 via `…;10:1~art82` etc. |
| a7 | Art. 24 D.Lgs. 1/2024 allows "soluzioni software" that guarantee security and inalterability | S §4 3(b) | confirmed | TU art. 83 c. 1 has the same words; c. 2 adds full integration with electronic payment | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2026-01-19;10:1~art83 ("DECRETO LEGISLATIVO 19 gennaio 2026, n. 10 - Normattiva") |
| a8 | Provv. AdE n. 111204 of 7 Mar 2025 approved the specs; modules MF1 (issue point) and MF2 (processing) | S §4 3(b), R §6 | confirmed | "Prot. n 111204/2025… Roma, 7 marzo 2025". Specs §2: MF1 on the issuing point (PEM, which may be cloud), MF2 on the processing point (PEL) | https://www.agenziaentrate.gov.it/portale/-/provvedimento-del-7-marzo-2025 ("Normativa e prassi - Provvedimento del 7 marzo 2025 - Agenzia delle Entrate") and its PDF `ProvvSSW-111204-2025.pdf` |
| a9 | Spec versions: 1.1; a "1.4" on connection, meal vouchers and cloud "reported for Oct 2026" | S §4 3(b) | corrected | v1.0 7 Mar 2025; v1.1 17 Jun 2025; v1.2 2 Dec 2025 (ISO certifications for Erogatori); v1.3 18 Dec 2025 (SBOM); **v1.4 7 Aug 2026** (meal-voucher option, longer PEM–PEL disconnection limit, QR display removed, management-document minimums, cloud architectures clarified, ISO scope). Attachments published 6 Aug 2026 | `SpecificheTecniche_v.1.4.pdf` (heading "SPECIFICHE TECNICHE VERSIONE 1.4 – Soluzione software per la memorizzazione e la trasmissione telematica dei corrispettivi"), linked from the a8 page; `Stato specifiche e allegati.pdf` |
| a10 | Approval by Director's provvedimento on the producer's request, after the Commission's opinion; producer must maintain it | S §4 3(b) | confirmed | Provv. points 3.1 and 3.2 (revocation if not maintained; certifications kept for the whole life cycle) | as a8 (PDF) |
| a11 | AdE keeps a public register; merchants may use only listed solutions "(point 4.5)" | S §4 3(b) | corrected | 3.4: register of approved solutions and producers. 4.5: register of accredited Erogatori and their solutions. **5.1** says merchants may adopt only solutions in the 4.5 register. **No published register found** on the AdE pages checked | as a8; https://www.agenziaentrate.gov.it/portale/misuratori-fiscali-e-registratori-telematici/elenco-delle-societa-titolari-dei-provvedimenti-di-approvazione-imprese ("Imprese - Misuratori fiscali e registratori telematici - Elenco delle società titolari dei provvedimenti di approvazione - Agenzia delle Entrate"): lists RT, adapted meters and server-RT only |
| a12 | A third-party certifier is also needed (secondary source) | S §4 3(b), 3(c) | confirmed | Specs v1.4 §3.1.5 and §4: the producer commissions an AdE-listed Certificatore. §4 also requires ISO 9001 and ISO 27001, kept valid for the solution's life; §3.1.2 and §4.3: the Erogatore is accredited, gets SSL certificates, passes interoperability tests and accepts an accordo di servizio. PEL (and cloud PEM) located in the EU | as a9 |
| a13 | Market timing: "from 2027" (trade press), others "1 Jan 2026" or "end 2026" | S §4 3(b), §7 | corrected | AdE guide (Feb 2026), note 1: "presumibilmente entro la fine dell'anno 2026 e dal 2027". The date for filing approval requests (provv. 3.3) was not found. The 27 May 2026 working table was not found (source not reachable) | https://www.agenziaentrate.gov.it/portale/documents/d/guest/guidaoperativa_pos-rt ("Guida operativa alla procedura web – Il collegamento tra gli strumenti di pagamento elettronico e gli strumenti di certificazione dei corrispettivi (POS-RT)", Febbraio 2026) |
| a14 | "Italy's 2025 rules also allow software-only fiscal solutions"; "software-only fiscalisation since 2025" | R §1, §4, §6 | corrected | The law and specs exist, but no approved solution was found as of 2026-11-13, so the option is not usable yet (see a11, a13) | as a11, a13 |
| a15 | Approved solutions may expose APIs to outside software (not in the study) | new | confirmed | Specs v1.4 §3 c): functions may be used "attraverso l'esposizione di API… fruibili mediante componenti software esterne" (REST or SOAP). §3.1.2: the Erogatore is responsible for external components calling them. §3.4.6: each till point links to one PEM at the same premises | as a9 |
| a16 | "Velocizzatori": MEF says never authorised and is testing blocks (6 Nov 2026); d.lgs. 148/2026 clause dropped; interpello 413/2020 | S §4 3(b), R4 | not found | The MEF statement and interpello 413/2020 were not readable on allowed hosts. Related official point: POS–RT FAQ n. 4 says using the "Documento Commerciale on line" procedure "non è delegabile". D.Lgs. 7 agosto 2026 n. 148 exists (cited in AdE Ris. n. 43 of 10/11/2026). The dropped clause was not verified | https://www.agenziaentrate.gov.it/portale/documents/d/guest/faq_collegamento_pos_rt_2503 ("FAQ - Collegamento POS-RT – aggiornate al 25 marzo 2026"); AdE normativa RSS feed |
| a17 | EV-charging provvedimento of 12 Dec 2025 is not about software solutions | S §4 3(b) | confirmed | AdE list title: "Provvedimento del 12 dicembre 2025 - … ricariche dei veicoli elettrici…". Number 570041 not seen | https://www.agenziaentrate.gov.it/portale/normativa-e-prassi-corrispettivi-telematici-fe ("Aree tematiche - Normativa e prassi corrispettivi telematici - Agenzia delle Entrate") |

### (b) POS–RT link

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| b1 | L. 207/2024 art. 1 c. 74 and 77 + Provv. n. 424470 of 31 Oct 2025; from 1 Jan 2026; logical link online in F&C; no cabling or RT change | S §4 3(b), R §6 | confirmed | Provv. "Prot. n. 424470": link "esclusivamente utilizzando le apposite funzionalità web" (2.1); obligation from 1 Jan 2026 (Motivazioni, c. 77). FAQ 2: RT need not change. Art. 2 c. 3 D.Lgs. 127/2015 in force says the payment tool "è sempre collegato" | https://www.agenziaentrate.gov.it/portale/documents/d/guest/provvedimento-del-31-ottobre-2025 (PDF "Prot. n. 424470"); https://www.agenziaentrate.gov.it/portale/collegamento-pos-rt ("Aree tematiche - Collegamento POS-RT - Agenzia delle Entrate"); a1 |
| b2 | Service live 5 Mar 2026 | S §4 3(b), R §6 | confirmed | FAQ 3: "La procedura web è disponibile a partire dal 5 marzo 2026" | as a16 (FAQ PDF) |
| b3 | First communication for POS in use in Jan 2026 due **20 Apr 2026** | S §4 3(b) | not found | AdE says "entro i successivi 45 giorni" from 5 Mar 2026 (FAQ 12); the date "20 aprile" is not written in the AdE texts read. POS activated later: from the 6th to the last working day of the second following month | as a16 (FAQ PDF); guide in a13 |
| b4 | AdE FAQs dated 19 Feb, 10/17/25 Mar 2026 | S §4 3(b) | corrected | FAQs published 19 Feb 2026, updated **9**, 17 and 25 Mar 2026 | as a16 (FAQ PDF) |
| b5 | Sanction €1,000–4,000 extends to missing POS link; "one source quotes €500 per case" (conflicting) | S §4 3(b), R §6 | corrected | Art. 11 c. 5 D.Lgs. 471/1997: €1,000–4,000 "anche nel caso di mancato collegamento dello strumento… di pagamenti elettronici". €500 per case: not found. C. 2-quinquies: €100 per wrong or incomplete transmission, at most €1,000 per quarter, with a 5 % tolerance between electronic-payment counts | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art11!vig=2026-11-13 ("DECRETO LEGISLATIVO 18 dicembre 1997, n. 471 - Normattiva") |
| b6 | Applies to those certifying with RT, approved software or Documento commerciale online who accept e-payments, including SoftPOS; Costì takes no payments, so probably out of scope | S §4 3(b) | confirmed (scope); Costì point to confirm | FAQ 5: users of an RT or the DC online who take electronic payments. Provv. 424470 §1.2 includes the 111204 instruments. Guide: SoftPOS apps count as POS | as b1, a13, a16 |

### (c) Software vendor approval and listed providers

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| c1 | fiskaly SIGN IT: "fully approved… homologated by Italian AdE" | S §4 3(d), §7 | corrected | "SIGN IT is in pre-assessment with the certification body; certification will start soon, followed by homologation. Timing depends on the Italian Revenue Agency and the certification body, so we don't promise dates." Blog of 14 May 2025: "fiskaly starts the certification process" | https://www.fiskaly.com/signit ("Revolutionizing the POS"); https://www.fiskaly.com/blog/fiskaly-a-pioneer-in-the-certification-of-cloud-based-fiscalization-in-italy ("fiskaly starts the certification process for its cloud-based fiscalization in Italy") |
| c2 | SIGN IT lite is transitional and works through the AdE web portal | S §4 3(d) | confirmed | "a direct connection to the Italian Revenue Agency portal, no hardware needed… be ready for SIGN IT once it is homologated" | as c1 (signit) |
| c3 | fiskaly pricing not published | S §4 3(d) | confirmed | "It depends on the number of POS terminals and the monthly transaction volume. Contact us for a personalized quote." | as c1 (signit) |
| c4 | Is any provider listed as approved by the AdE? | task (c) | not found | No register of approved software solutions or Erogatori found (see a11) | a11 sources |
| c5 | A-Cube "Scontrino elettronico": merchant authorises once with SPID; portal-based | S §4 3(d) | corrected (mechanism confirmed, SPID not seen) | Smart Receipt "interacts directly with Government Tax Portal Fatture e Corrispettivi (cassetto fiscale) acting as a proxy for the user" and is the "Documento Commerciale Online". Separately, A-Cube documents a "Corrispettivi" API with MF1 and MF2 under art. 24, with A-Cube as Producer. No approval for it found on the AdE pages checked | https://docs.acubeapi.com/documentation/italy/gov-it/smart-receipts/introduction ("Introduction \| A-Cube Developer Portal"); https://docs.acubeapi.com/documentation/italy/ereceipts ("Corrispettivi - Introduction \| A-Cube Developer Portal") |
| c6 | Openapi electronic receipts: sends receipts to the AdE; same portal-automation question | S §4 3(d) | confirmed (receipts exist); mechanism not stated | "electronic receipts without a physical cash register"; company setup needs "the fiscal credentials required for active services" (`receipts_authentication`). Whether it uses the DC online portal: not stated. Receipt price not found | https://openapi.com/products/italian-electronic-invoicing ("Italian Electronic Invoicing Available via API") |
| c7 | TeamSystem TS Scontrini: software-only receipts | S §4 3(d), R §2b | confirmed; mechanism to confirm | Setup step: "collegarti all'Agenzia delle Entrate con credenziali Fisconline/Entratel"; "Nessun costo di hardware". How this relates to the DC online procedure: not stated, to confirm | https://www.teamsystem.com/horeca/ts-scontrini/prezzi/ ("Prezzi TS Scontrini \| TeamSystem") |
| c8 | Own approval needs producer request, Commission opinion, certifier, maintenance commitment; costs, labs and durations not found | S §4 3(c) | confirmed + extended | Add: ISO 9001/27001, Erogatore accreditation, SSL certificates, interoperability tests, accordo di servizio, EU hosting (see a12). Costs and durations: not found | as a9 |

### (d) RCH

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| d1 | AdE RT list (2024) entry "Cod. 72 LDP03 RT – Cod. V8 2022/341934 del 5 settembre 2022" [unverified] | S §5 | confirmed | List updated to 27 Aug 2026: "RCH ITALIA S.p.A. - Cod. 72 … LDP03 RT - Cod. V8 · 2022/341934 del 5 settembre 2022". No extension or variant listed; not marked for "documento commerciale digitale". Whether the venue's register is this model still needs the label photo | https://www.agenziaentrate.gov.it/portale/documents/20143/2771415/Elenco+dei+Registratori+telematici+approvati+divisi+per+Societ%C3%A0_produttrice.pdf/af79e0d4-c70f-4e98-ff62-746360681fb5 (PDF "ELENCO DEI REGISTRATORI TELEMATICI APPROVATI DIVISI PER SOCIETÀ PRODUTTRICE – AGGIORNATO AL 27 AGOSTO 2026") |
| d2 | No RCH product page, manual or datasheet for LDP03 | S §5 | confirmed | rch.it search: "0 risultati per: LDP03" (also "LDP"). LDP03 is not in RCH's current RT catalogue | https://www.rch.it/?s=LDP03 ("Sie haben nach LDP03 \| RCH S.p.A."); https://www.rch.it/prodotti/registratori-di-cassa-telematici/ ("Registratori di Cassa Telematici RT per Punti Vendita \| RCH S.p.A.") |
| d3 | Other RCH models on the list: Onda RT, Spot RT, Print! F Hyper, Onda RTA, Print! RT | S §5 | confirmed + extended | Also LDP 33 RT, ZERO55 RT, WALL E 8T, ABOX RT, APE3, PRINT 3.0 RT, APE J RT (2026/7673 of 9 Jan 2026) | as d1 |
| d4 | "RCH protocol" over HTTP on the LAN, known only from a third-party guide | S §5 | corrected | RCH's own page for PRINT! 3.0 RT: "Protocollo di comunicazione: RCH, RCH Webservice, RCH Webservice con HTTPS, XOn-XOff, Upos, JavaPos". Interfaces: Ethernet, RS232 (RJ45), USB, Wi-Fi. Drivers: Windows x86/x64, Linux, OPOS. The protocol documentation itself is not published (site search "protocollo" and "XML": 0 results). For LDP03: not found | https://www.rch.it/prodotti/stampanti-fiscali-e-non-fiscali/print-3-rt/ ("Stampante fiscale PRINT! 3 RT \| RCH S.p.A."); https://www.rch.it/?s=protocollo |
| d5 | `service.cgi`, about 3 concurrent connections | S §5 | not found | Not on any official RCH page read | — |
| d6 | No public RCH developer portal or SDK | S §5 | confirmed | None linked from rch.it | https://www.rch.it/ ("Registratori di Cassa RCH per il Punto Vendita \| RCH S.p.A.") |
| d7 | Nothing found for "Asso 3" or "Xstore" | S §5 | not found (unchanged) | rch.it lists "Gestionale di cassa ATS 3.0" (cloud back office) and "XMarket". These may be what the profile calls "ASSO 3" and "Xstore". **[unverified]**: ask the dealer. xmarket.rch.it was not reachable | https://www.rch.it/software-e-app/gestionale-di-cassa-ats-3/ ("Soluzioni Software Gestione Punti Vendita e Cassa \| RCH S.p.A.") |

### (e) SDI passive cycle

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| e1 | One registered telematic address (PEC or codice destinatario) per VAT number; SDI then always delivers there, ignoring the code on the invoice | S §1, §2 1(b) | confirmed | "…associare al proprio numero di partita Iva un indirizzo telematico… sul quale ricevere sempre tutte le fatture elettroniche… l'indirizzo registrato prevale su quello eventualmente indicato dal fornitore". The service is called "Registrazione dell'indirizzo telematico dove ricevere tutte le fatture elettroniche"; it can be done by a delegated intermediary | https://www.agenziaentrate.gov.it/portale/aree-tematiche/fatturazione-elettronica/guida-fatturazione-elettronica/come-predisporre-inviare-ricevere-fe/come-si-riceve-fe-da-sistema-interscambio ("Aree tematiche - Come si riceve una fattura elettronica dal Sistema di Interscambio - Agenzia delle Entrate") |
| e2 | If delivery fails or no address is set, the XML is available in the buyer's area of "Fatture e Corrispettivi"; the VAT holder can view and download it | S §2 1(b) | confirmed | Duplicate placed in "Consultazione → Fatture elettroniche e altri dati Iva" when the channel fails or code "0000000"; the consultation service lets you "visualizzare ed eventualmente scaricare la copia conforme del file della fattura" | https://www.agenziaentrate.gov.it/portale/aree-tematiche/fatturazione-elettronica/guida-fatturazione-elettronica/come-predisporre-inviare-ricevere-fe/cosa-fa-sistema-interscambio-fe ("Aree tematiche - Cosa fa il Sistema di Interscambio quando riceve una fattura - Agenzia delle Entrate"); https://www.agenziaentrate.gov.it/portale/aree-tematiche/fatturazione-elettronica/guida-fatturazione-elettronica/i-servizi-dell-agenzia-fe/consultazione-fatture-e-ricevute ("Aree tematiche - Il servizio di consultazione delle fatture e delle ricevute - Agenzia delle Entrate") |
| e3 | (new) How long files stay downloadable | — | confirmed | Files stay in consultation "sino al 31 dicembre del secondo anno successivo a quello di ricezione"; after that only "dati fattura" | as e2 (consultazione) |
| e4 | "No official AdE API for automatic download was found" | S §2 1(b), P4 | corrected | "Servizi Massivi di Trasmissione e Scarico file" (WSDL/XSD) let **web-service providers already accredited to SdICoop** request bulk download for one or more VAT numbers and a time range. A date-of-acceptance range has been possible since 18 Mar 2026 (InputMassivo v1.5) | https://www.agenziaentrate.gov.it/portale/web/guest/servizi-massivi-sdicoop ("Schede - Servizi massivi SDICoop - Servizi massivi SDICoop - Agenzia delle Entrate"); AdE news of 16/03/2026 on the a8 thematic page |
| e5 | FatturaPA schema v1.2.2 current; 1.2.2 XSD URL not verified | S §2 1(a) | corrected | "Documentazione valida dal 1 aprile 2025": schema **1.2.3** (`/export/documenti/fatturapa/v1.4/Schema_VFPR12_v1.2.3.xsd` ordinary; `…/Schema_VFPA12_V1.2.3.xsd` PA), format specs v1.4. Version 1.2.2 is "valida fino al 31 marzo 2025" | https://www.fatturapa.gov.it/it/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/ ("Fatturazione elettronica PA - FatturaPA") |
| e6 | SDI specs 1.9.1 "mandatory since 15 May 2026" | S §2 1(a) | corrected | AdE: "Documentazione utilizzabile dal 15 maggio 2026"; Allegato A updated 31 Mar 2026. "Mandatory" not stated | https://www.agenziaentrate.gov.it/portale/specifiche-tecniche-versione-1.9.1-%C2%A0-utilizzabili-dal-15-maggio-2026- ("Schede - Specifiche tecniche versione 1.9.1 - Agenzia delle Entrate") |
| e7 | Direct channel needs accreditation via fatturapa.gov.it | S §2 1(d) | confirmed (entry point only) | fatturapa.gov.it links "Accedi al sistema di accreditamento" (accreditamento.fatturapa.gov.it). Tests and certificates not re-read | https://www.fatturapa.gov.it/it/index.html |
| e8 | Fatture in Cloud recipient code M5UXCR1 | R §2d, §6 | not found | fattureincloud.it not reachable. (Openapi's own code, for comparison: "PIC7CPS") | c6 source |

### (f) Google

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| f1 | Connected providers appear within about a week; owner can turn a provider off or add a link | S §6 5(a) | confirmed | "Your booking providers will show up on your Business Profile within a week. You can stop using a booking provider or add a link to your Business Profile." | https://support.google.com/business/answer/7475773 ("Set up bookings through a provider - Google Business Profile Help") |
| f2 | Option depends on category; a link added on Google can only be removed on Google's side (vendor guides) | S §6 5(a) | corrected | "Not all businesses are eligible for business links"; "Some countries and regions aren't eligible"; the business must be verified; links must be crawlable; "only one link per domain". Owner links: Edit profile → Booking. For **third-party** links: "You cannot manually delete third-party booking or reservation providers directly from your Business Profile settings"; providers "are required to process opt-out requests within 5 business days". Link limits conflict on Google's own pages: "up to 10 links per category" vs "20 links for a transaction type" | https://support.google.com/business/answer/6218037 ("Manage your local business links - Google Business Profile Help"); https://support.google.com/business/answer/13769188 ("Business links policies & guidelines - Google Business Profile Help") |
| f3 | Reserve with Google entry via interest form; meeting requirements "does not guarantee" | S §6 5(b) | confirmed | "meeting the requirements does not guarantee a partner will be eligible to integrate or go live" | https://developers.google.com/actions-center/verticals/reservations/e2e/policies/integration-policies ("Reservations End-to-End Integration Policies \| Google Actions Center \| Google for Developers") |
| f4 | End-to-end access follows an invitation | S §6 5(b) | not found | Pages read say "fill out the Partner interest form or work with a Google contact" | https://developers.google.com/actions-center/verticals/reservations/e2e/overview ("Overview and Eligibility \| Google Actions Center \| Google for Developers") |
| f5 | Business Link: usually 4–8 weeks | S §6 5(b) | confirmed | "Integration typically takes 4 to 8 weeks with dedicated technical resources"; merchant pages must be merchant-specific | https://developers.google.com/actions-center/verticals/reservations/bl/overview ("Overview and Eligibility \| Google Actions Center \| Google for Developers") |
| f6 | Dining E2E: 12–16 weeks | S §6 5(b) | confirmed | "typically takes 12-16 weeks with a minimum of two dedicated technical resources" | https://developers.google.com/actions-center/verticals/dining/guides/end-to-end-integration/overview ("End-to-end integration overview \| Google for Developers") |
| f7 | Under 1 second, at least 30 days of availability, online cancellation, direct contract with every merchant | S §6 5(b) | confirmed | "respond to availability requests from Google in less than 1 second"; "30 days or more"; "must support online cancellation"; "direct contractual relationship with their merchants"; GDPR compliance required | f3 and f4 sources |

### (g) Vendor pricing (vendors' own pages)

| # | Claim | From | Status | Corrected or verified text | Source |
|---|---|---|---|---|---|
| g1 | TS Scontrini "€8 €4 + IVA/mese" launch offer | R §2b, S §4 3(d) | confirmed + detail | "€8 €4 +IVA / mese, Fatturazione annuale: €48 +IVA", promo valid to 31/12/2026, limit of 100 e-invoices a year. New tier: TS Scontrini + SmartPOS Nexi "€30 €22,5 + IVA / mese" (annual €270 + IVA) | as c7 |
| g2 | Scontrini + RT "piano annuale €30 + IVA/mese" | R §2b, S §4 3(d) | confirmed + detail | "€30 +IVA / mese, Fatturazione annuale: €360 +IVA"; shipping "€40 €0 PROMO", activation "€150 €0 PROMO" | https://www.teamsystem.com/horeca/cassa-in-cloud/prezzi/abbonamenti-teamsystem-scontrini-registratore-telematico/ ("Prezzi TeamSystem Scontrini + Registratore Telematico \| TeamSystem") |
| g3 | Cassa in Cloud Professional and Enterprise: "Prova gratis e richiedi il prezzo", not published; 14-day trial | R §2b | corrected | Plans **Starter**, Professional, Enterprise; no prices; "Prova Gratis" (Starter, Professional), "Contattaci" (Enterprise). 14-day trial: not stated on this page | https://www.teamsystem.com/horeca/cassa-in-cloud/prezzi/ ("Prezzi Cassa in Cloud \| TeamSystem") |
| g4 | Tilby restaurant plans not published | R §2b | confirmed | Quote form only: "Ricevi un preventivo in pochi passaggi" | https://www.tilby.com/it/prezzi/ ("Prezzo punto cassa in cloud per ristoranti e negozi \| Tilby") |
| g5 | Apicbase custom or quote; Traceability "from €799/month" (SoftwareAdvice) | R §2c | confirmed (no prices); €799 not found | Plans Growth ("Starting from 5 outlets"), Professional, Enterprise, all "Talk to our team" | https://get.apicbase.com/pricing-plans/ ("Apicbase Plans & Pricing - Everything You Need To Grow Your Bottom Line") |
| g6 | Openapi: conflicting figures (€0.022, €0.02, €0.025, €0.017, €0.07, €0.090) | S §2 1(c) | corrected | Product page: "From: €0.0135 + VAT". Receive-specific rate not shown; pricing console not reachable. Webhooks and supplier-invoice reception confirmed | as c6 |
| g7 | A-Cube pricing not published | S §2 1(c), 3(d) | confirmed (not found) | No pricing on docs.acubeapi.com; the main site was not on allowed hosts | https://docs.acubeapi.com/ ("A-Cube Developer Portal") |
| g8 | Fatture in Cloud API v2 "enabled for all customers regardless of plan"; webhooks per company | S §2 1(c) | confirmed + detail | "API v2 is automatically enabled for all customers… regardless of the plan"; "the Send E-Invoice method… is available only on paid plans"; webhooks "no longer in Closed Beta… available for all users". Plan prices: not reachable | https://developers.fattureincloud.it/docs/developer-account/ ("Developer Account \| Fatture in Cloud \ Devs: API V2 & SDKs"); https://developers.fattureincloud.it/docs/webhooks/ ("Webhooks \| Fatture in Cloud \ Devs: API V2 & SDKs") |
| g9 | MarketMan Starter $249 / Growth $299 / Enterprise $449; Nory €329 (inventory €199); Cooperto "147 EUR"; TheFork Manager €39/mo; Plateform not published | R §2a, §2c | not found | Not readable: redirects to www.marketman.com, www.nory.ai, www.cooperto.it and www.thefork.it are refused by the proxy (403); plateform.it fails TLS. Figures stay snippet-only and unverified | — |
