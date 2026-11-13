# Costì: fiscal and booking integrations, feasibility study (Italy)

Prepared 2026-11-13 by the architect (internal, English). Research only: no accounts created, nothing
bought, no vendor contacted. Tenant #1 is the Siena osteria, which runs an RCH fiscal register. This
document holds none of the tenant's private data (no legal name, VAT number or contacts).

**Nothing in this document is legal or tax advice.** Every legal or fiscal point is **to confirm with
the commercialista**. Where a law, date, price or requirement was not found in a source, it says
"[unverified]" or "not found".

## Method and limits (read first)

- **WebFetch could not reach any official host.** `www.fatturapa.gov.it` failed to resolve, as
  `www.teamsystem.com` and `www.tilby.com` did for the market scan. Following the tool's guidance, I
  stopped trying other hosts. **Every source below was seen only as a search-result snippet on
  2026-11-13. No page was read in full.** To read the official texts, these hosts must be allowed in
  the session network settings: `www.fatturapa.gov.it`, `www.agenziaentrate.gov.it`,
  `developers.google.com`, `support.google.com`, `www.rch.it`, `download4.epson.biz`,
  `developers.fattureincloud.it`, `docs.acubeapi.com`, `openapi.com`.
- Snippets come through a summariser and may paraphrase. Where snippets conflict, both readings are
  given. Article numbers and provvedimento numbers are copied from snippets as they appeared; none was
  checked against the Gazzetta Ufficiale or Normattiva.
- Prices are "as seen in a snippet on 2026-11-13". The snippets do not show when the vendor last
  changed the page. Nothing is estimated, rounded or converted.
- Facts about the venue's register (model, back office) come from the approved profile, where they are
  still marked `[unverified]` (PRD source). Costì facts come from `clients/osteria-dei-rossi/context.md`.
- Effort sizes are my judgement for one developer working the way Costì is built today (one milestone =
  one `/feature` run): **S** = part of a milestone, **M** = about one milestone, **L** = several
  milestones or external dependencies outside our control. They are not dates.
- Source IDs `[F1]`…`[F31]` point to §10. `[S12]` etc. point to the market scan
  (`deliverables/2026-11-13-market-research/research.md`).

---

## 1. Founder summary

1. **Supplier e-invoices are the best next integration.** Almost every Italian supplier invoice already
   exists as FatturaPA XML [F1, F4]. Reading it gives exact lines with no AI cost and no misreads.
2. **The quickest win needs no permission from anyone:** let the owner upload the XML or `.xml.p7m`
   files they already get (from their provider, the AdE portal or PEC) next to PDFs and photos. Size S–M.
3. **Automatic intake is harder because of one rule:** each VAT number can register **one** delivery
   address with SDI, and SDI then ignores the code written on the invoice [F4]. If the accountant or an
   existing provider already holds that address, Costì cannot simply add a second inbox. Options:
   read the existing provider's API, take over the address and forward to the accountant, or get files
   from the accountant. **Ask the commercialista first** (questions in §8).
4. **Use an accredited intermediary; never become an SDI channel ourselves.** A direct channel needs
   accreditation, a service agreement, interoperability tests and mutual-TLS certificates [F12].
   Several intermediaries sell APIs (Aruba, InfoCert Legalinvoice, A-Cube, Openapi, Fatture in Cloud,
   Invopop). Published prices are fragmentary and conflict, so get written quotes [F6–F11].
5. **Issuing customer invoices (active cycle) should wait.** It makes Costì a fiscal-document issuer
   (numbering, SDI receipts, legal storage) for a rare event in an osteria. The venue's current way of
   invoicing keeps working [F14, F15].
6. **Fiscal receipts are in a moving regime.** A March 2025 provvedimento approved specifications for
   approved "software solutions" with no RT hardware [F18]. The trade press says the market rollout is
   expected from 2027 [F19]. POS-to-RT linking has been mandatory since 1 Jan 2026 [F20]. Costì takes no
   payments, so the link should be the venue's job, not Costì's (to confirm).
7. **Getting Costì's own receipt software or RT approved is not realistic:** it needs an AdE approval
   on the opinion of a commission, a certifier and a standing maintenance commitment [F18, F22]. If
   Costì ever issues receipts, it should go through an already-approved provider. fiskaly says its
   SIGN IT is approved; I could not check that against an AdE list [F23].
8. **Do not automate the AdE "Documento commerciale online" web page.** These "velocizzatori" have
   never been authorised, and the AdE is testing ways to block them (news of 6 Nov 2026) [F21].
9. **Driving the RCH register from Costì is unproven.** I found no public RCH developer documentation,
   and nothing at all about "LDP03", "Asso 3" or "Xstore". Some RCH models have an "RCH protocol" over
   HTTP on the LAN [F24], but whether the venue's model has it must be asked of RCH or the dealer. If it
   does, a phone PWA cannot reliably reach the register directly (iPhone Safari blocks it) [F27], so a
   small always-on **local bridge** device is needed. Size L. Keep it parked, as the PRD planned, until
   RCH answers.
10. **Google booking, step 1 is free:** the owner can add the Costì booking page as the booking link in
    the Google Business Profile, if Google shows that field for the category [F28]. Size S, ops only.
11. **"Reserve with Google" (end-to-end) is a long shot for a new SaaS.** You apply through an interest
    form, may or may not be invited, need a contract with every venue, daily SFTP feeds and a booking
    server that answers in under a second. Google quotes 12–16 weeks and says meeting the rules does not
    guarantee approval [F29]. It also conflicts with Costì's "request + staff approval" flow. Defer it,
    or reach Google through an aggregator such as Mozrest (prices not published) [F30].
12. **What I'd do:** Phase 2 gets the GBP link and the XML/p7m upload. The SaaS milestones get
    intermediary-based SDI intake once the commercialista has answered. Defer customer invoicing, fiscal
    receipts, the RCH bridge and Reserve with Google end-to-end (§7).

---

## 2. Question 1: receiving supplier e-invoices (passive cycle, SDI)

### 1(a) FatturaPA XML and signed `.p7m` (CAdES)

**Findings**
- **Format and versions.** The invoice is an XML file following the FatturaPA schema. Secondary sources
  say schema **v1.2.2** is current. They disagree on its start date: one blog says in force since
  1 Oct 2020 [F1]; the ph-fatturapa library lists 1.2.2 "valid from 2022-10-01" [F1]. The SDI
  technical specifications (Allegato A) are a separate document. Version 1.9 applied from 1 Apr 2025
  and added document type TD29. Version 1.9.1 has been mandatory since 15 May 2026, and one source says
  it left the XSD unchanged [F2].
- **Official schema location.** It is published on `fatturapa.gov.it`, in the "Formato FatturaPA"
  documentation (that host was blocked here). Older tooling downloads
  `https://www.fatturapa.gov.it/export/documenti/fatturapa/v1.2.1/Schema_del_file_xml_FatturaPA_versione_1.2.1.xsd`
  [F1]. **The exact URL of the 1.2.2 XSD was not verified.** The XSD imports the W3C
  `xmldsig-core-schema.xsd`, and some tools strip that import before validating [F1]. Earlier versions
  of Allegato A are also hosted on `agenziaentrate.gov.it` [F1].
- **Signed files.** SDI accepts CAdES-BES (`.xml.p7m`), XAdES-BES (`.xml`, signature inside the XML)
  and unsigned XML [F3]. A `.p7m` is a CMS envelope holding the original XML, the signature and the
  signer's certificate. It must be "unwrapped" to get the XML [F3]. Commercial libraries (e.g. Chilkat)
  show an "extract XML from p7m" routine [F3]. An `openssl cms` command was suggested by the search
  summariser itself, not by a source: **[unverified], test on real files**.
- **What parsing involves (design notes, from general knowledge of the format; element names to check
  against the official XSD [unverified]).**
  - The header carries the supplier (cedente/prestatore) and the buyer (cessionario/committente).
  - The body carries general data (type TDxx, number, date), line details, VAT summary and payment
    terms.
  - One file can hold several bodies (a "lotto"), and may embed attachments such as a PDF.
  - Costì would map supplier identity to `supplier`, lines to `invoice_line`, VAT summaries to the
    existing totals check, and payment terms to the payable. The AI extraction step is skipped. The
    deterministic checks (VAT, totals, supplier-is-buyer) and the human review/approval
    (`approve_invoice`) stay as they are.
  - Credit notes (TD04 and others) and deferred invoices that group delivery notes need the same
    handling the PDF path already has.
- **Security.** Treat XML as untrusted input: no external entities or DTDs, size and depth limits, and a
  schema check before mapping. Store the original file as the source document, as PDFs are stored
  today.

### 1(b) How a VAT holder gets their received XML

**Findings**
- **Three delivery routes.** SDI delivers to a PEC address, to a 7-character **codice destinatario**
  (an accredited channel run by an intermediary or software provider), or, if neither is set or
  delivery fails, it makes the file available in the buyer's reserved area of the AdE **"Fatture e
  Corrispettivi"** portal [F4, F5].
- **One registered address per VAT number.** In "Fatture e Corrispettivi" → "Registrazione
  dell'indirizzo telematico", the VAT holder can register **one** PEC **or** one codice destinatario.
  Once registered, SDI **always** delivers there and ignores whatever address the supplier wrote on the
  invoice. It can be changed or cancelled at any time [F4]. VAT groups are a special case [F4].
  Delegated intermediaries can register addresses in bulk for many clients [F4]. Sources are mostly
  2018–2019 and say to re-check current AdE rules.
- **AdE consultation and bulk download.** Buyers and their delegated intermediaries can consult and
  bulk-download received invoices from the portal (role "cliente") [F5]. This needs a specific
  e-invoice delegation, separate from the cassetto fiscale delegation. The cassetto fiscale delegation
  can go to intermediaries only, at most 2, for 4 years [F5]. **No official AdE API for automatic
  download was found** [F5].
- **What it means if the accountant already receives the invoices.**
  - If the accountant's (or the venue's provider's) code is the **registered** address, every
    supplier invoice goes there. A Costì intermediary code would receive nothing, even if suppliers
    wrote it on the invoice.
  - Costì then has four ways in, each to confirm with the commercialista:
    1. Read the files from that provider's API with the venue's consent (works only if the provider
       has an API; see 1(c)).
    2. Move the registered address to Costì's intermediary and forward or share the files with the
       accountant. This changes the accountant's workflow and needs their agreement.
    3. Have the accountant (or the venue) export the XML on a schedule and upload it to Costì (the
       Phase 2 upload path).
    4. Have a delegated person bulk-download from the AdE portal (manual).
  - If **no** address is registered and invoices land only in the AdE portal, registering a Costì
    intermediary code is technically simple. The accountant would still need access, which the AdE
    consultation service gives them through delegation [F5].

### 1(c) Accredited SDI intermediaries with APIs

All rows: snippet-only, read 2026-11-13. "Not found" means the snippets did not show it, not that it
does not exist.

| Provider | Receive via API | Send via API | Webhook / push | Multi-client (multi-tenant) | Published pricing (as seen) | Sources |
|---|---|---|---|---|---|---|
| **Aruba Fatturazione Elettronica** | Yes. `services/invoice/in/findByUsername` lists received invoices without content, then fetch each file ("lazy loading") | Yes | Not found; there is a "Find Notifications on Invoices Received" call (polling) | Web services only for **Premium** accounts or basic users linked to one by proxy. Premium is described as **multicedente**, multi-user, with delegations | Web plan: €1 + VAT for 3 months, then €29.90 + VAT/year; "Solo Ricezione" plan exists; extra users €4.90 + VAT/year (third-party snippets). Another snippet says €25/year. **API/Premium price: not found** | [F6] |
| **InfoCert (Tinexta) Legalinvoice** | Receipt through InfoCert's accredited channel or the client's InfoCert PEC; API receive endpoints **not found** | Yes (B2B and PA) | Not found | "Manage multi-company (for intermediaries)" via the Legalinvoice API; "LegalInvoice Hub" wholesale integration by API or FTP with volume pricing | Via Openapi's reseller pages: Legalinvoice Start €30.70; Legalinvoice Pro €57.70 + VAT with 400 invoices included (period not shown) | [F7] |
| **A-Cube** | Yes (SDI intermediary; Invopop uses A-Cube for its Italian SDI service) | Yes | Yes, per a **third-party** MCP package: webhook configs with 13 event types including `supplier-invoice` | Not confirmed | **Not published / not found.** One directory says "per transaction" | [F8] |
| **Openapi** | Yes: endpoints for active and passive invoices; "receive supplier invoices via webhook"; sandbox available | Yes | Yes: "all notifications received from SdI are forwarded to the configured callback endpoints" | Not confirmed (per-company configuration) | Conflicting on its own pages: "from €0.022 + VAT"; "from €0,02 + VAT"; "from €0.025 per invoice"; "€0.025 on subscription, €0.07 per single request"; "from €0.017 with subscription or €0.090 pay-as-you-go". Retrieval call listed at €0.001. **No receive-specific rate confirmed** | [F9] |
| **Fatture in Cloud (TeamSystem)** | Yes: received documents, plus "pending" received e-invoices when auto-registration is off or fails | Yes | Yes: subscriptions per company (event types, sink URL, verification). The developer blog notes some documented notification types were wrong and later corrected | Yes for apps: OAuth 2.0 Authorization Code flow; each venue grants access to its own company. Whether one grant covers several companies: **not found** | API v2 "enabled for all customers regardless of plan" (official dev docs). Plan prices: Forfettari about €48/year in third-party reviews, with reports of €96 at renewal; other plans **not found**. A third-party CLI says the API **does not ingest raw XML**, so check that the original XML can be downloaded | [F10] |
| **Invopop** (not on the brief's list; uses A-Cube for SDI) | Yes ("SDI reception" guide) | Yes | Not checked | "Register party" per company | Usage units ("Pops"): about 3 per invoice imported from SDI, 100 to register a party in Italy; Pro €500/month; Dev €43/month in docs; a July 2026 post announces a free tier of 200 Pops/month and €300/month per extra country app. Sources conflict | [F11] |

**Reading of the table**
- Every option makes the intermediary a **sub-processor** of supplier data (§1(e)).
- Every option needs a per-venue setup: delegation, registration or an OAuth grant.
- For Costì as a SaaS, the deciding factors are webhook support (no polling cron per tenant),
  multi-company handling, getting the **original XML**, and a written price. None of the four is
  settled by public snippets, so **ask for written quotes and terms** from at least two providers
  (Openapi or A-Cube for push-first APIs; Aruba Premium for multicedente).
- If a venue already uses Fatture in Cloud or Aruba and the accountant keeps the registered address
  there, reading that account's API (route 1 in §1(b)) avoids moving anything.

### 1(d) Becoming a direct SDI channel (SDICoop / SDIFTP), to show why not

**Findings** [F12]
- The web-service (SDICoop) and FTP (SDIFTP) channels require **prior accreditation**: a request through
  the online form on `fatturapa.gov.it`, signing a specific **accordo di servizio**, and passing
  **interoperability tests** with a test kit. The first test (WSR01) receives an invoice or batch and
  replies with the OK code.
- Accreditation uses **client and server certificates** issued for the channel. Test and production use
  different CAs. Developers report renewal cycles and TLS-handshake failures as recurring pain.
- The channel must expose a SOAP endpoint that SDI calls, with mutual TLS. Whether that runs on Vercel
  serverless functions: **[unverified], probably not without a dedicated server.**
- AdE bulk-registration specs check that a provider "is accredited SdICoop" [F12], so the accreditation
  is tied to the provider's VAT number and to ongoing compliance.

**Why not:** months of non-product work, 24/7 availability duty, certificate operations and fiscal
liability for delivery. All of it is commodity work that intermediaries already sell per invoice.
**Not recommended.**

### 1(e) Privacy and processor implications (to confirm with a privacy adviser)

- Supplier invoices are mostly B2B, but they can carry personal data: sole traders' names and tax
  codes, and sometimes a person's name in the buyer or notes fields. GDPR applies to that part.
- The Garante's e-invoicing measures (15 Nov 2018 n. 481; 20 Dec 2018 n. 511) objected to the AdE
  storing full XML content, to unencrypted XML and to the security of the channel. A 2021 opinion
  conditionally allowed broader storage [F13]. For the AdE's consultation service, sources say the AdE
  acts as a processor once the user accepts the service agreement [F13].
- **The intermediary's role is not settled by the sources.** Processor under Art. 28 is the common
  contractual set-up. One commentary argues e-invoicing law can make an intermediary an autonomous
  controller by law [F13]. To confirm.
- For Costì: DigiAlto is the venue's processor (the market scan already lists the per-venue Art. 28 DPA
  for tenant #2). The intermediary becomes a **sub-processor** that needs written authorisation and must
  be listed in the DPA. The hosting region is EU today. The intermediary's region and **retention** are
  open questions for each provider.
- **Retention.** The legal 10-year storage duty is the venue's (art. 39 DPR 633/72 and art. 2220 c.c.,
  per secondary sources) [F14]. Costì's copy is an operational copy; the 2026-10-22 founder decision
  (delete after 10 years, owner/admin) still applies. Whether Costì's copy may count as the legal
  archive is **to confirm with the commercialista**. Default answer: no.
- **Secrets.** Intermediary API keys and OAuth client secrets go in Vercel server-only environment
  variables. Per-tenant tokens (OAuth refresh tokens, per-venue API keys) go in Supabase Vault and
  never reach the browser. Webhook endpoints verify a signature or shared secret. Under the app's
  rule 2, a webhook that writes data must not use the Supabase secret key in a new route. The
  temperature-ingest note took the same line: use a `SECURITY DEFINER` RPC that checks a per-tenant
  token, decided in an ADR.

### Options table: passive cycle

| Option | Permission needed | Cost type | Effort | Risks |
|---|---|---|---|---|
| **P1. Manual XML / `.xml.p7m` upload** next to PDF/photo, deterministic parser, same review and approval | None (owner uploads files they already have) | Our build time only; no per-invoice fee; no AI tokens for XML | **S–M** | Bad or odd XML from small suppliers; p7m variants; new parser dependency to justify; staff must fetch files |
| **P2. Read the venue's existing provider API** (e.g. Fatture in Cloud, Aruba Premium) | Venue's OAuth grant or API credentials; provider ToS; accountant OK if it is their account | Provider plan (may need an upgrade: Aruba web services need Premium) | **M** per provider | Only works for venues on a provider with an API; per-provider adapters; token custody |
| **P3. Costì intermediary code + registered address** (Openapi, A-Cube, Aruba, InfoCert…) | Venue moves the registered address; accountant agrees and gets copies; intermediary contract; DPA update | Per invoice or per account (quotes needed) | **M** (first provider) | Breaks the accountant's flow if done wrong; we become critical to invoice delivery; sub-processor; vendor lock-in |
| **P4. AdE portal bulk download by a delegate** | Delegation to a person or intermediary | Staff time | **S** for us (it reuses P1) | Manual; no official API found |
| **P5. Direct SDI channel** | AdE accreditation, accordo di servizio, certificates | Large fixed engineering and ops cost | **L+** | See 1(d). Rejected |

**Recommendation:** build **P1** first (fits Phase 2). Ask the commercialista the §8 questions. Then
pick **P2 or P3** for the SaaS milestones, based on how most target venues receive invoices and on
written quotes. Reject P5.

---

## 3. Question 2: issuing invoices to customers (active cycle) via an intermediary

**Findings (to confirm with the commercialista)**
- A restaurant normally certifies a sale with the documento commerciale. It issues an invoice only when
  the customer asks for one no later than the moment of the operation (AdE FAQ n. 45 of
  21 Dec 2018, per a secondary source) [F15].
- **Immediate or deferred invoice.** Per a secondary source, the RT's documento commerciale can serve
  as the "DDT-equivalent" for a deferred invoice, issued by the 15th of the next month and quoting the
  documento commerciale. Deferred uses type TD24, immediate TD01; private customers get code `0000000`
  and a paper or electronic copy [F15].
- One commercialista notes that issuing both a receipt and an invoice for the same sale is accepted in
  practice but debatable, and that AdE phone guidance said the opposite (April 2025) [F15]. **To
  confirm.**
- **Digital preservation (conservazione).** Issuer and receiver must both keep e-invoices
  electronically (art. 39 DPR 633/72; DM 17 June 2014 for the technical rules), for 10 years. The
  preservation must be finished within 3 months of the annual return deadline (secondary sources;
  where the 10 years start from differs between them) [F14]. The AdE offers a **free** preservation
  service for invoices that pass through SDI. Sources say 15 years, retroactive since June 2021, and
  conflict on whether joining is now automatic [F14].
- **What Costì would have to build:**
  - a customer master (B2B data, plus private customers' personal data, against today's minimisation);
  - an invoice numbering sequence that cannot clash with the venue's existing one (to confirm how
    numbering works if the accountant also issues invoices);
  - VAT handling and XML generation;
  - sending through an intermediary and processing SDI outcome receipts (rejections, delivery
    failures), with retry and correction flows (e.g. credit notes);
  - preservation (intermediary or AdE service);
  - an export for the accountant.

  It also makes Costì a fiscal-document issuer. The PRD and profile say today that "the app issues no
  fiscal documents" (unverified profile line).

| Option | Permission needed | Cost type | Effort | Risks |
|---|---|---|---|---|
| **A1. Status quo**: venue keeps invoicing as today (accountant, provider or AdE portal) | None | None new | — | Manual for the rare invoice request |
| **A2. Costì pre-fills**: exports the table's lines and customer data for the accountant or provider to issue | Venue and accountant OK | Our build time | **S** | Still two steps; customer data handling |
| **A3. Costì issues through an intermediary** (same provider as P3) | Intermediary contract; accountant agrees on numbering; DPA | Per invoice + preservation | **M–L** | Fiscal liability, numbering clashes, receipt-vs-invoice rule, customer personal data |

**Recommendation:** **A1 now; A2 only if venues ask; A3 deferred** until Costì has a signed
intermediary (P3) and more than one venue asks for it.

---

## 4. Question 3: receipts and corrispettivi telematici

### 3(a) The current RT regime (D.Lgs. 127/2015 art. 2)

- Art. 2 c. 1 of D.Lgs. 127/2015 requires those making retail-type operations (art. 22 DPR 633/1972,
  which covers restaurants) to **store electronically and transmit** daily takings to the AdE
  (Circolare AdE 3/2020) [F16].
- Start dates (art. 17 DL 119/2018; provv. 18 Apr 2019 n. 99297): 1 Jul 2019 above €400,000 turnover,
  1 Jan 2020 for everyone else [F16]. (The market scan's "1 Jan 2021" came from a vendor blog; prefer
  these.)
- The **documento commerciale** replaced the paper receipt. Its minimum content (date and time,
  progressive number…) is set by the DM of 7 Dec 2016 [F17].
- **Transmission.** With an RT, sending is automatic. When the RT is broken or the web procedure is
  used, takings are noted by hand and sent within **12 days**. Omitted sending is sanctioned under
  art. 2 c. 6 [F16]. The exact wording of c. 6-ter after DL 34/2019 was not read.
- RT devices are activated, deactivated and periodically checked by **AdE-authorised laboratories**.
  The RT reports these events to the AdE itself [F22].
- The AdE's free **"Documento commerciale online"** web procedure is an alternative or companion to the
  RT. It issues and transmits each document online [F17].

### 3(b) What the 2025–2026 changes actually say

| Topic | What the sources say | Status |
|---|---|---|
| **Software-only solutions** | Art. 24 of D.Lgs. 1/2024 lets daily takings be stored and sent by "soluzioni software" that guarantee security and inalterability [F18]. **Provv. AdE n. 111204 of 7 Mar 2025** approved the technical specifications for designing, approving and distributing them. The modules are MF1 (at the point of issue) and MF2 (processing). Later attachments and versions exist (1.1; a "1.4" on connection, meal vouchers and cloud is reported for Oct 2026) [F18, F23] | Snippets of the provvedimento text and commentary. **Read the official text** |
| **Approval of a software solution** | Approved by provvedimento of the AdE Director **on the producer's request**, after the opinion of the "Commissione per l'approvazione degli apparecchi misuratori fiscali". The producer commits to maintain it (security updates, legal and spec changes). The AdE keeps a public register of approved solutions, and merchants may use only listed ones (point 4.5, per a snippet) [F18]. One study says a third-party certifier is also needed [F18, F19] | Snippets; the certifier point is secondary |
| **Market timing** | A working table on 27 May 2026 (AdE, Sogei, AssoSoftware, certifiers) "confirmed the roadmap"; software solutions on the market **from 2027** [F19]. Other sources say "from 1 Jan 2026" or "end of 2026" [F18] | **Conflicting; treat 2027 as the trade-press reading** [unverified] |
| **POS–RT link** | Budget Law 2025 (L. 207/2024, art. 1 c. 74 and 77) and **Provv. AdE n. 424470 of 31 Oct 2025**: from **1 Jan 2026**, every POS or electronic payment tool must be logically linked, online in "Fatture e Corrispettivi", to the RT or approved software that certifies the takings. No cabling or RT change is needed [F20] | Several secondary sources agree |
| **POS–RT dates** | Online service live **5 Mar 2026** (AdE press release). First communication for POS in use by Jan 2026 due **20 Apr 2026**. POS activated later have their own windows. AdE FAQs dated 19 Feb, 10/17/25 Mar 2026 [F20] | Secondary sources; dates broadly agree |
| **POS–RT sanctions** | The €1,000–4,000 sanction for not installing an RT extends to a missing POS link; one source quotes €500 per case [F20] | **Conflicting** [unverified] |
| **Scope of the POS–RT link** | Applies to those certifying takings (RT, RT server, approved software, Documento commerciale online) who accept electronic payments, including SoftPOS apps [F20] | Costì takes no payments. **Probably out of scope (to confirm)** |
| **"Velocizzatori"** | Apps that automate the Documento commerciale online web page. The MEF says the AdE "never authorised" them and is **testing ways to block them** (6 Nov 2026). A 2020 ruling (interpello 413/2020) had accepted automation under conditions. A clause in the "omnibus" decree (d.lgs. 148/2026) was reported as dropped [F21] | Live dispute. **Avoid** [d.lgs. 148/2026 reference unverified] |
| EV-charging provvedimento n. 570041 of 12 Dec 2025 | About EV charging, **not** software solutions [F18] | Not relevant |

### 3(c) What certifying our own RT or software solution would take (only as far as sources go)

- **Own RT (hardware):** model approval against the AdE "Prescrizioni tecniche per l'approvazione"
  (functional tests). Ongoing duties for manufacturers and labs: activation, periodic checks and
  quarterly reporting of checks. The labs regime was being rewritten in 2024 per an industry body
  [F22]. Not something a software studio does.
- **Own software solution:** a producer's request to the AdE, a Commission opinion, full compliance with
  the 111204 specifications (MF1/MF2, sealing, inalterability, transmission), a third-party certifier
  (per secondary sources), a binding maintenance commitment, and listing in the public register [F18,
  F19]. Costs, lab names and durations: **not found**.
- **Conclusion:** out of proportion for DigiAlto. If Costì ever issues receipts, integrate an approved
  provider's API.

### 3(d) Partners with certified software or cloud RT services and APIs

| Partner | What it is (per sources) | API | Published pricing | Notes | Sources |
|---|---|---|---|---|---|
| **fiskaly SIGN IT** | Cloud fiscal module (MF1/MF2) under provv. 111204. Vendor says "fully approved… homologated by Italian AdE". **SIGN IT lite** is a transitional product that works through the AdE web portal | REST; integration guide dated 2026-05-04 | **Not published** ("contact us") | Needs valid Fisconline credentials and a stable connection. Approval claim not checked on an AdE list. "Lite" talks to the web portal: check how it relates to the "velocizzatori" dispute | [F23] |
| **A-Cube** "Scontrino elettronico" API | JSON REST; the merchant authorises A-Cube once with SPID to submit to "Fatture e Corrispettivi" | Yes | **Not published** | Portal-based submission. Check whether it falls under the "velocizzatori" concerns [F21] | [F8] |
| **Openapi** electronic receipt (Invoice API) | Sends receipts to the AdE, can modify or cancel; OpenAPI spec with sandbox | Yes | **Not found** for receipts | Same portal-automation question | [F9] |
| **TeamSystem TS Scontrini** | Software-only receipts; also sold with an RT | Product, not an API | "€8 €4 + IVA/mese" launch offer; Scontrini + RT "piano annuale €30 + IVA/mese" (market scan snippet) | Competitor product | [S12] |
| **Epson / RCH / Custom RT devices** | Approved hardware | Device protocols (§5) | Hardware via dealers | — | [F24–F26] |

### Options table: receipts

| Option | Permission needed | Cost type | Effort | Risks |
|---|---|---|---|---|
| **R1. Keep the RCH RT; Costì stays non-fiscal** (today) | None | None new | — | Double entry stays |
| **R2. Costì drives the RCH RT** (see §5) | RCH or dealer docs; venue consent; maybe dealer reconfiguration | Bridge hardware + our build; dealer fees [unverified] | **L** | See §5 |
| **R3. Costì issues receipts through an approved cloud fiscal provider** (e.g. fiskaly) and the venue retires the RT | Provider contract; commercialista OK; RT decommissioned by an authorised lab; POS re-linked to the new solution | Provider fees (not published) + lab fee [unverified] | **L** | Costì becomes the fiscal system of record (uptime = trading); regime still settling (2027); legal liability |
| **R4. Automate "Documento commerciale online"** | Would rely on an unauthorised practice | — | M | **Rejected**: the AdE says never authorised and is testing blocks [F21] |
| **R5. Own software-solution approval** | AdE approval, Commission, certifier | Large fixed | **L+** | **Rejected** (3(c)) |

**Recommendation:** **R1 now.** Re-assess R3 after the AdE register of approved software solutions is
public and populated (watch 2027). Only then, and only if the founder wants Costì to become a POS for
new venues. R2 depends on §5's answers. Reject R4 and R5.

---

## 5. Question 4: driving the existing RCH register from Costì

### Findings

- **The venue's model.** The profile records "RCH LDP03 (ASSO 3, Xstore back office)" as an
  `[unverified]` PRD fact. Searches for "LDP03", "RCH Asso" and "RCH Xstore" found **no RCH product
  page, manual or datasheet**. The AdE list of approved RTs (2024 edition) has an RCH ITALIA entry read
  in a snippet as "Cod. 72 LDP03 RT – Cod. V8 2022/341934 del 5 settembre 2022". The table columns were
  not legible, so this is **[unverified]** [F24]. "Xstore" only matched Oracle Retail Xstore, which is
  unrelated [F24]. The same list names other RCH models (Onda RT, Spot RT, Print! F Hyper, Onda RTA,
  Print! RT) [F24]. **The founder should photograph the register's label and the back-office screen.**
- **RCH protocol (some models).** A beach-management software vendor's setup guide says:
  - RCH Print!F has a built-in **web server on port 80**, an IP address set in its menu, and an
    optional **SSL** setting that must match on both sides;
  - the "RCH protocol" is valid **only** on RCH Standalone (not all-in-one systems), Corsitech,
    Print!F, Print RT and "RCH 3.0 model 2025";
  - "no new developments are planned, only bug fixes". The snippet does not make clear whether this
    means the vendor's integration or the protocol itself [F24].

  Another snippet gives the service URL as `http://<IP>/service.cgi`, with about **3 concurrent
  connections** [F24] (attribution between the guide and the datasheet unclear, [unverified]).
- **Print!F datasheet:** protocols RCH, XON-XOFF, keyboard emulation, UPOS, JavaPOS. Drivers for
  Windows x86/x64, Linux, OPOS. Serial, USB and Ethernet interfaces. ESC/POS for non-fiscal printing.
  Contact: RCH Italia, Silea (TV) [F24].
- **Developers' experience:** XON-XOFF is common to many Italian RTs but dated, and can be sent over a
  socket. Vendor protocols often come as Windows DLLs [F24, F26]. An RCH partner (Estar) advertises
  "advanced integration" between hotel PMS and RCH fiscal printers [F24].
- **No public RCH developer portal or SDK was found.** Documentation probably comes through dealers or
  under NDA [unverified].
- **Comparator: Epson FP-81 II RT.** Public developer documentation: the **ePOS Fiscal Print Solution
  Development Guide (Rev T)**. It covers the **`fpmate.cgi` web service**, "Fiscal ePOS-Print XML"
  (including `printerFiscalReceipt`) and a JavaScript library, plus a 317-page Communication Protocol
  v7.00 [F25]. Odoo's POS supports FP-81 II RT over Ethernet/XML [F25]. Browser use from HTTPS needs
  the printer's self-signed certificate. Odoo now says that since Chromium 142 this is no longer
  needed, thanks to Local Network Access [F25].
- **Comparator: Custom.** No public LAN/XML spec found. Integrations go through a Windows DLL (forum),
  JavaPOS (Enactor), or partner web services (Estar) [F26].
- **Browser to LAN device (the PWA problem).**
  - Chrome/Edge now gate requests from public sites to local IPs behind a **Local Network Access
    permission prompt** (enforced from Chrome 142 / Edge 143). With `fetch(..., { targetAddressSpace:
    'local' })` or a private IP literal, mixed content is relaxed **only once permission is granted**,
    and CORS headers are still needed on the device to read the response [F27].
  - **iOS Safari does not allow mixed content to LAN IPs.** A WebKit bug reports regressions even for
    localhost in iOS 18 [F27]. Waiters and the owner use their own phones, iPhones included.
  - So a **direct browser → RCH call from the Costì PWA is not reliable**: it would need HTTPS on the
    register with a certificate every phone trusts, plus CORS support in RCH firmware (unknown).

### Architecture options

| Option | How it works | Permission needed | Cost type | Effort | Risks |
|---|---|---|---|---|---|
| **B1. Direct from the PWA** | Phone `fetch` to `http(s)://<RT-IP>/service.cgi` | RCH protocol enabled on the RT (dealer); LNA permission per device | Our build | **M** | Fails on iPhone Safari; CORS support unknown; every phone must be on the venue LAN; 3-connection limit; no central queue |
| **B2. Local bridge, outbound-only** | A small always-on device on the venue LAN (mini PC or Android box) runs a bridge app. It keeps an **outbound** HTTPS connection to Costì (poll or WebSocket), takes "print receipt for bill X" jobs from a per-tenant queue, drives the RT over the LAN (RCH protocol, XON-XOFF or vendor driver), and posts back the receipt number and outcome. No inbound ports | RCH docs; dealer enables protocol; venue hardware decision (the 2026-11-11 defaults said no Raspberry Pi for labels); DPA unchanged (on-prem) | Hardware (not priced) + build + support | **L** | A new device to support; fiscal mismatch if a job half-fails (must reconcile against RT totals); RT busy or paper-out states; bridge security (device token, signed jobs); dealer warranty |
| **B3. Cloud → venue tunnel** (VPN or reverse tunnel to the RT) | Costì server calls the RT through a tunnel | Network changes at the venue | Tunnel service + build | **L** | Exposes a fiscal device; hard to secure and support. **Rejected** |
| **B4. Reduce double entry without control** | Costì prints a pre-bill or shows a "key into register" sheet with RT department codes; the cashier keys totals per department. Receipt number captured at close, as today | None | Our build | **S** | Still two systems; less typing, not zero |
| **B5. Replace the register** with an RT that has public docs (Epson FP-81 II RT) or a cloud fiscal module (R3) | Venue decision; lab decommission and activation; POS re-link | Hardware or provider fees + lab [unverified] | **L** | Cost and disruption for tenant #1; still needs B2-style bridge for Epson on iPhone |

**Offline queue.** Costì's existing offline queue (M20) is per user and per device. A fiscal job queue
must be **server-side and per tenant**, with idempotency keys so a bill is fiscalised at most once. It
also needs an explicit "unknown outcome" state that the cashier resolves against the RT display or
report. Costì already reconciles app totals against the register total at day close (M21). That check
stays the safety net.

**Secrets (B2).** Each bridge gets a per-device token issued at enrolment, like staff devices (hashed
server-side, revocable). The token lives only on the bridge device's local storage, never in the repo.
Job payloads hold no costs. Any RT admin password stays on the bridge and with the dealer, never in
Costì's database.

**Recommendation:** keep the **PRD rule**: revisit RCH integration only if app-vs-register variance
stays above 5 % after month 2 (PRD, risk table). Meanwhile:
1. send the §9 questions to RCH or the dealer;
2. consider **B4** as a cheap step if double entry hurts in the supervised run;
3. if RCH confirms a documented LAN protocol on the venue's model, run a **time-boxed spike for B2**
   on a test register (no production fiscal data) before committing to an L build.

Reject B1 (iPhones) and B3.

---

## 6. Question 5: Google booking

### 5(a) Google Business Profile booking link

**Findings** [F28]
- Google's help page "Set up bookings through a provider" (support.google.com/business/answer/7475773)
  says connected booking providers appear on the Business Profile within about a week. The owner can
  turn a provider off **or add a link**.
- Vendor guides (resmio, Tablein, Resos, Formitable) describe adding a "booking URL" in the profile's
  Bookings or links section. The option **depends on business category**: if it does not appear, the
  profile is not eligible. A link added on Google can only be removed on Google's side.
- Booking via a marketplace link may cost per-cover commission; vendors advise linking your own tool
  (vendor opinion).
- **Restrictions found:** category-dependent availability. Google's own complete policy for arbitrary
  booking URLs: **not found**.

**For Costì:** the public page `/prenota/<slug>` already exists (reservations PR2). Going live needs
the custom domain, Resend, the client facts and approved privacy text (context.md). The owner adds that
URL in the profile. No Google approval, no code. It brings Google traffic to Costì's own flow, with
its 30-day retention and staff approval.

### 5(b) Reserve with Google / Actions Center for dining

**Findings** [F29]
- **Entry:** platforms "express interest" through the Actions Center interest form. End-to-end access
  follows an **invitation**. No public criteria for being invited and **no volume or merchant-count
  threshold was found**. Google may include or exclude merchants as it sees fit. Meeting the
  requirements "does not guarantee" eligibility or launch.
- **Two integration levels:**
  - **Reservations Business Link (redirect).** A deep link to the venue's availability page on Maps and
    Search. A daily **Merchants feed** (JSON or pb3), action link type
    `ACTION_LINK_TYPE_MAKE_DINING_RESERVATION`, one reservation link per entity. The landing page must
    be merchant-specific and let the user finish without further redirection. Google says it usually
    takes **4–8 weeks** with dedicated technical resources. A legacy page says 2–3 weeks.
  - **Reservations End-to-End.** Booking completes inside Google. Merchant, service and availability
    feeds go daily over **SFTP**. Only one service per merchant is used for availability. A **booking
    server** (v3 REST: HealthCheck, BatchAvailabilityLookup, CreateBooking with an idempotency token,
    UpdateBooking, GetBookingStatus) must answer availability in **under a second** and offer at least
    **30 days** of availability. Online cancellations and accurate prices are required. There is a
    sandbox first, HTTPS throughout, and v2 required client certificates. The dining guide estimates
    **12–16 weeks**.
- **Partner obligations (both levels):** a **direct contract with every merchant** in the feed, removing
  merchants on request; locations must match Google Maps; no sharing personal data without consent;
  unsubscribe links in e-mails. Violations can disable the integration permanently.
- **Fit with Costì:** E2E needs bookable real-time slots. Costì uses request + staff approval and limits
  online party size. The v3 proto mentions synchronous or asynchronous confirmation; whether
  asynchronous confirmation is allowed for dining in Italy is **[unverified]**.
- **Aggregators:** Mozrest offers a "Reservation Software API" that links a booking system's venues to
  channels including Google, TripAdvisor and others, with a sandbox. **Pricing not published** [F30].
  Italian booking tools (Plateform, Cooperto) offer "Prenota con Google" to their own customers [S6, S7].

### Options table: Google

| Option | Permission needed | Cost type | Effort | Risks |
|---|---|---|---|---|
| **G1. Owner adds Costì booking URL in GBP** | Owner's GBP access; field available for the category | None | **S** (ops) | Field may not show; Google UI changes; the booking page must be live (domain, Resend, privacy text) first |
| **G2. Reservations Business Link partner** | Google interest form and acceptance; contract with every venue; Partner Portal | Our build + daily feed job | **M** | Acceptance uncertain for a small SaaS; low gain over G1 for one venue |
| **G3. Reservations End-to-End partner** | Invitation; contracts; Google certification | Large build: booking server, SFTP feeds, SLA | **L** | Sub-second SLA; conflicts with staff approval; on-call duty; acceptance uncertain |
| **G4. Via an aggregator** (e.g. Mozrest) | Aggregator contract; venue consent; DPA sub-processor | Aggregator fees (not published) | **M** | Third party holds booking personal data; fees unknown; same real-time slot model |
| **G5. Marketplace listing** (TheFork etc.) by the venue | Venue contract | Per-cover commission (see market scan) | — (venue) | Commission; two diaries unless synced |

**Recommendation:** **G1 at go-live of the booking page.** Fill in the interest form for **G2** once
Costì has several venues with live booking pages. Effort is M, and approval likelihood is
unknown (no published thresholds). **Defer G3.** Approval for a new SaaS with one venue looks unlikely
(my judgement, not sourced), and it needs a redesign to instant booking. Ask Mozrest for terms (**G4**)
only if venues ask for the Google "Reserve" button rather than a link.

---

## 7. Consolidated recommendation and sequencing for Costì

Phase 2 order today (founder, 2026-11-11): P2-0 go-live carry-overs, P2-1 TOTP, P2-2 trace, P2-3
labels, P2-4 alert rules, P2-5 accountant file, P2-6 sell by weight. The AdE check and e-mail-in are
parked "later". The items below are proposals for the founder to place. I have not reordered anything.

| When | Item | Size | Why | Dependencies |
|---|---|---|---|---|
| **Now (no build)** | Send §8 questions to the commercialista and §9 questions to RCH or the dealer | — | Every fiscal option waits on these answers | Founder |
| **Phase 2 / go-live ops** | **G1**: GBP booking URL → `/prenota/<slug>` | S (ops) | Free Google traffic to an existing feature | Booking page live (domain, Resend, privacy text) |
| **Phase 2 (new item, proposed after P2-5)** | **P1**: XML / `.xml.p7m` upload with a deterministic parser into the existing review and approval | S–M | No per-invoice AI cost, exact lines, no permissions; ties into P2-5 accountant file | Real XML samples from the venue's main suppliers; parser dependency justified in its ADR |
| **Phase 2 (optional)** | **B4**: "key into register" sheet by RT department, if double entry hurts during the supervised run | S | Cuts typing without any fiscal integration | Supervised-run feedback; RT department list |
| **SaaS milestones** | **P2 or P3**: automatic SDI intake through an accredited intermediary, per-tenant setup, webhook ingest via a token-checked definer RPC, intermediary as sub-processor | M | Main competitive gap vs TeamSystem/Zucchetti [S12–S15, S62] | Commercialista answers; two written quotes; ADR (provider choice, secret handling, retention) |
| **SaaS milestones (later)** | **G2**: Reservations Business Link application | M | Lists every Costì venue's booking link on Maps | Several live tenants; Google acceptance |
| **Defer** | A3 customer invoicing; R3 cloud fiscal receipts (re-check in 2027); B2 RCH bridge (only on the PRD variance trigger and RCH docs); G3 Reserve with Google E2E; G4 aggregator | L each | Liability, unclear rules or uncertain approval relative to value for one osteria | See each section |
| **Reject** | P5 direct SDI channel; R4 web-portal automation; R5 own fiscal approval; B1 direct PWA → RT; B3 tunnel | — | §2–§5 | — |

**Alternatives considered at the top level**
- *"Make Costì a full POS now (R3 + A3)".* Rejected for now. It changes Costì from back office to
  fiscal system of record while the software-solution regime is still rolling out (2027) [F19]. It
  also competes head-on with TeamSystem and Zucchetti bundles [S12–S15].
- *"Skip XML and rely on AI extraction only".* Rejected. XML is structured, already produced by
  suppliers and free to parse. AI stays for paper and PDF-only suppliers.

**Risks across the plan**
- **Regulatory drift:** POS–RT, software solutions and e-invoice specs all changed in 2025–2026 [F2,
  F18–F21]. Re-check before each related milestone.
- **Data protection:** every new provider (intermediary, aggregator, Google) is a sub-processor or an
  independent recipient. Update the per-venue DPA and privacy texts before go-live of each.
- **Secrets:** intermediary keys and OAuth secrets go in Vercel server-only env; per-tenant tokens in
  Supabase Vault; Google SFTP keys (if G2/G3) in the host's secret store; bridge tokens on the device
  only. No secret in the repo or the browser.
- **Vendor claims unverified:** approvals (fiskaly), webhook support (A-Cube) and prices all come from
  snippets or vendor marketing.

---

## 8. Questions for the venue's accountant (commercialista)

1. Is a "registered telematic address" (PEC or codice destinatario) set for the venue's VAT number in
   "Fatture e Corrispettivi"? Whose is it (yours, a provider's, the venue's PEC)?
2. Which software or intermediary do you use to receive the venue's supplier e-invoices? Does it offer
   an API, and would you agree to Costì reading from it with the venue's consent?
3. Would you accept the venue moving the registered address to a Costì intermediary, with automatic
   copies or delegated access for you? What would you need (format, timing, preservation)?
4. Do you hold a delegation for the e-invoice consultation and acquisition service, and do you bulk
   download the venue's received invoices today?
5. Who carries out the legal digital preservation (conservazione) of the venue's e-invoices today: you,
   a provider or the AdE free service? Is it active?
6. Can Costì's copy of supplier invoices be treated as operational only, with legal storage staying
   where it is? Do you see any problem with Costì deleting its copy after 10 years?
7. When a diner asks for an invoice, how does the venue issue it today (immediate after or instead of
   the documento commerciale, or deferred quoting it)? Which numbering series is used?
8. Does the POS–RT link obligation concern only the venue's RT and POS, given that Costì takes no
   payments and issues no fiscal document? Has the link been registered?
9. Is there any objection to Costì recording table orders and closing bills with the RT receipt number
   (today's flow), with the RT staying the only fiscal record?
10. If the venue one day moved to an approved software solution (no RT), what would you need, and when
    would you consider it mature (after the AdE register is published)?
11. Is the VAT rate on food service 10 % for every dish and drink sold (the app's current assumption),
    and are there exceptions (e.g. some drinks, take-away)?
12. Which export would save you the most time each month (P2-5): invoice CSV with VAT first, or
    something else?

## 9. Questions for RCH or the dealer

1. What is the exact model and firmware of the venue's register? Is "LDP03" the AdE model code? What
   are "Asso 3" and "Xstore": the register, its keyboard or a back-office program?
2. Does this model support the **RCH protocol over the LAN** (built-in web server, `service.cgi`)?
   Which firmware version is needed, and is it enabled now?
3. Is there developer documentation or an SDK for that protocol (commands for sale lines,
   departments, payments, discounts, voids, receipt reprint, daily close, status and errors)? Under
   which terms (NDA, licence, fee)?
4. Does the web server support **HTTPS** with a certificate we can manage, and does it send **CORS**
   headers? How many concurrent connections does it accept?
5. Can the register return the **receipt number** and the fiscal outcome of each document to the
   calling software?
6. How does the register behave if a command is interrupted (power, network): can a half-printed
   document happen, and how is it recovered?
7. Does enabling or using an external protocol affect the **warranty**, the periodic checks or the
   dealer's support contract? Does it need a technician visit, and at what fee?
8. Are XON-XOFF, UPOS or JavaPOS available on this model as alternatives? Are there Windows or Linux
   drivers we could run on a small local device?
9. Does the Xstore back office (if it is RCH's) export sales, departments or daily totals in a
   machine-readable file we could import for reconciliation?
10. Is RCH's integration programme still maintained? A third-party guide says "no new developments are
    planned, only fixes".
11. If the venue later switched to an RCH cloud or software solution, what would RCH offer and what
    would happen to the current register (decommissioning)?

---

## 10. Sources

All read **2026-11-13**. **All snippet-only**: WebFetch could not resolve `www.fatturapa.gov.it`, and
per the tool's guidance no other host was tried, so no page was opened or read in full. Market-scan IDs
`[S…]` are in `deliverables/2026-11-13-market-research/research.md` (also snippet-only).

| ID | Topic | URLs (all: snippet only, 2026-11-13) |
|---|---|---|
| F1 | FatturaPA schema and versions | https://centrofiscale.com/specifiche-tecniche-fattura-elettronica-2026/ · https://github.com/phax/ph-fatturapa · https://codeclimate.com/github/OCA/l10n-italy/l10n_it_fatturapa/bindings/binding.py/source · https://gist.github.com/3v1n0/977e621a640309de77fbd49b23705ad5 · https://groups.google.com/g/microsoft.public.it.office.excel/c/UoeZBeoU0Kk · https://www.agenziaentrate.gov.it/portale/documents/20143/2370834/Allegato+A+-+Specifiche+tecniche+vers+1.6.pdf/a9917ec2-29a3-4f4a-a7d0-93af96fcaad5 · https://informazionefiscale.it/IMG/pdf/allegato_a_-_specifiche_tecniche_vers_1.9.pdf |
| F2 | Specs 1.9 / 1.9.1 | https://www.informazionefiscale.it/Fattura-elettronica-2025-specifiche-tecniche-codice-TD29 · https://www.edotto.com/articolo/fatturazione-elettronica-nuove-specifiche-tecniche-dal-15-maggio-2026 · https://www.ipsoa.it/documents/quotidiano/2025/02/03/fatturazione-online-nuove-specifiche-tecniche-utilizzabili-aprile-2025 |
| F3 | `.p7m` / CAdES | https://edotto.com/articolo/fatturazione-elettronica-cades-estensione-xmlp7m · https://centrofiscale.com/lettura-fattura-elettronica-xml-2026/ · https://www.example-code.com/excel/p7m_extract_xml_fatturapa.asp · https://www.eutekne.info/Sezioni/Art_689175_software_appositi_per_aprire_le_fatture_elettroniche_con_firma.aspx |
| F4 | Registered telematic address | https://www.money.it/fattura-elettronica-registrazione-massiva-indirizzi-PEC-codice-destinatario · https://www.investireoggi.it/fatturazione-elettronica-registrazione-indirizzo-telematico-ecco-come-fare/ · https://www.ipsoa.it/documents/quotidiano/2019/07/24/e-fatture-gruppo-iva-codici-sdi · https://www.assolombarda.it/servizi/fisco/informazioni/fattura-elettronica-al-via-la-registrazione-massiva-di-pec-e-codice-destinatario · https://agenziaentrate.gov.it/portale/documents/20143/4838631/Schema-provvedimento-FE_testo+coordinato-def.pdf/f4d6c274-8719-aaa2-64b9-75b324f0111a |
| F5 | AdE consultation, bulk download, delegations | https://www.agendadigitale.eu/documenti/esperto-risponde/efatture-come-effettuare-il-download-massivo-dal-sito-dellagenzia-delle-entrate/ · https://fiscomania.com/delega-fatturazione-elettronica/ · https://centrofiscale.com/cassetto-fiscale-fatture-elettroniche-2026/ · https://www.fiscoetasse.com/rassegna-stampa/27157-servizio-di-consultazione-e-acquisizione-delle-fatture-elettroniche-nuove-faq.html |
| F6 | Aruba | https://fatturazioneelettronica.aruba.it/apidoc/docs_EN.html · https://www.pmi.it/impresa/contabilita-e-fisco/296934/fatturazione-elettronica-e-soluzioni-personalizzate.html · https://www.example-code.com/vb6/aruba_fatturazione_find_invoice_by_username.asp · https://www.punto-informatico.it/fatture-inviare-ricevere-senza-complicazioni-1-euro-aruba/ · https://www.telefonino.net/notizie/con-aruba-tutte-le-fatture-che-vuoi-al-miglior-prezzo-1e-per-3-mesi/ · https://centrofiscale.com/aruba-fattura-elettronica-costi-2026/ |
| F7 | InfoCert Legalinvoice | https://infocert.it/pdf/fatturazione/allegato-tecnico-legalinvoice-start.pdf · https://www.visura.it/wp-content/uploads/2026/07/Fatturazione-Elettronica-Legalinvoice.pdf · https://openapi.com/products/legalinvoice-pro · https://openapi.com/products/legalinvoice-start · https://console.openapi.com/apis/legalinvoice/info |
| F8 | A-Cube | https://www.pkgstats.com/pkg:mcp-server-acube · https://www.e-invoice.app/vendors/a-cube-api · https://www.aziendabanca.it/notizie/flash/a-cube-scontrino-elettronico · https://docs.invopop.com/guides/it-sdi-reception |
| F9 | Openapi | https://openapi.com/products/italian-electronic-invoicing · https://console.openapi.com/apis/sdi/pricing · https://console.openapi.com/apis/sdi/faq · https://console.openapi.com/it/apis/sdi/documentation · https://openapi.it/en/digital-trust/electronic-invoicing · https://openapi.com/blog/tax-receipt-api · https://console.openapi.com/oas/en/invoice.openapi.json |
| F10 | Fatture in Cloud API | https://developers.fattureincloud.it/docs/webhooks/ · https://developers.fattureincloud.it/docs/webhooks/subscriptions/ · https://developers.fattureincloud.it/docs/guides/pending-documents/ · https://developers.fattureincloud.it/blog/pending-docs-etc/ · https://developers.fattureincloud.it/docs/basics/authentication · https://developers.fattureincloud.it/docs/developer-account/ · https://packagist.org/packages/16bitsrl/fattureincloud-cli · https://centrofiscale.com/fatture-in-cloud-recensione-2026/ · https://www.fattureincloud.it/costo/ |
| F11 | Invopop | https://invopop.com/pricing · https://docs.invopop.com/get-started/pricing · https://www.invopop.com/blog/new-pricing-2026 · https://invopop.com/coverage/italy |
| F12 | SDICoop / SDIFTP accreditation | https://forum.italia.it/t/sdicoop-ricezione-problema-con-test-di-interoperabilita-certificati-errati/12155 · https://forum.italia.it/t/sdicoop-canale-web-services-rinnovo-certificati/10726?page=5 · https://forum.italia.it/t/sdicoop-ricezione-2024-english-french-tutorial-nginx-uwsgi-python-django/39262 · https://www.dirittobancario.it/wp-content/uploads/sites/default/files/allegati/provvedimento_direttore_dellagenzia_delle_entrate_30_aprile_2018_n._89757.pdf · https://www.informazionefiscale.it/IMG/pdf/allegato_a_-_specifiche_tecniche_vers_1.5.pdf · https://agenziaentrate.gov.it/portale/documents/20143/4845817/Specifiche_Tecniche_Censimento_Massivo_v1.0.pdf/70fd3b35-0d3f-3b41-a35a-4581d5cb9c98 |
| F13 | Privacy (Garante, roles) | https://garanteprivacy.it/temi/fisco/faq-fatturazione-elettronica · https://www.cybersecurity360.it/legal/privacy-dati-personali/fatturazione-elettronica-tra-sicurezza-e-accountability-del-gdpr-che-ce-da-sapere/ · https://www.studiocerbone.com/?p=416536 · https://garanteprivacy.it/garante/doc.jsp?ID=9732268 · https://www.dirittobancario.it/art/la-concezione-funzionale-di-titolare-e-responsabile-del-trattamento/ · https://www.agendadigitale.eu/sicurezza/privacy/responsabile-del-trattamento-chi-e-e-cosa-fa-tutto-quello-che-ce-da-sapere/ |
| F14 | Preservation (conservazione) | https://www.agendadigitale.eu/documenti/fatturazione-elettronica/il-servizio-di-conservazione-sostitutiva-di-sogei/ · https://www.money.it/fattura-elettronica-conservazione-retroattiva-novita-servizio-agenzia-delle-entrate · https://centrofiscale.com/conservazione-sostitutiva-fatture-elettroniche-2026/ · https://quifinanza.it/fisco-tasse/conservazione-digitale-fattura-elettronica-obblighi-scadenze/1012716/ · https://www.agendadigitale.eu/documenti/conservazione-fatture-elettroniche-come-farla-e-perche/ · https://www.studiopizzano.it/conservazione-fatture-elettroniche-obbligo-telematico-e-termini-di-adempimento/ |
| F15 | Restaurant invoicing | https://www.agendadigitale.eu/documenti/esperto-risponde/fatturazione-differita-quali-documenti-deve-emettere-un-ristorante-per-servirsene/ · https://www.agendadigitale.eu/documenti/esperto-risponde/emissione-scontrino-e-relativa-fattura-perche-non-e-consigliabile/ · https://qonto.com/it/blog/gestione-aziendale/fatturazione/fattura-elettronica-a-privati · https://www.agenziaentrate.gov.it/portale/documents/20143/287582/FAQ+pubblicate+il+21+dicembre+2018.pdf/e14eeb26-13c5-4f81-a747-cf28aa9d9c03 |
| F16 | Corrispettivi regime | https://www.agenziaentrate.gov.it/portale/documents/20143/2338359/Circolare+3+corrispettivi+21_02_20.pdf/44b98c61-e8cc-6840-4ead-287024092e98 · https://fiscomania.com/trasmissione-telematica-fatture-corrispettivi/ · https://www.fiscozen.it/guide/tempo-invio-corrispettivi/ · https://www.dirittobancario.it/wp-content/uploads/sites/default/files/allegati/provvedimento_direttore_agenzia_delle_entrate_18_aprile_2019_n._99297.pdf · https://www.ecnews.it/fiscale/fisco-e-patrimonio/iva/corrispettivi-telematici-esoneri-transitori-per-il-debutto-del-1-luglio-2019/ · https://www.ipsoa.it/documents/quotidiano/2018/11/05/memorizzazione-trasmissione-corrispettivi-introduzione-graduale-obbligo |
| F17 | Documento commerciale (online) | https://www.ipsoa.it/documents/quotidiano/2020/09/26/corrispettivi-telematici-chiarimenti-procedura-web-documento-commerciale-on-line · https://www.mysolution.it/fisco/focus/corrispettivi-elettronici/documento-commerciale-on-line-applicazione/ · https://openapi.com/blog/new-api-invoice-electronic-receipt |
| F18 | Software solutions, provv. 111204/2025 | https://informazionefiscale.it/IMG/pdf/provvedimento_ssw.pdf · https://www.ipsoa.it/documents/quotidiano/2025/03/08/corrispettivi-giornalieri-approvate-specifiche-tecniche-rilascio-software · https://www.studiocerbone.com/?p=496491 · https://www.fiscal-focus.it/quotidiano/il-quotidiano/articoli-fisco/software-per-i-corrispettivi-telematici-nuove-specifiche-tecniche,3,174106 · https://www.informazionefiscale.it/scontrino-elettronico-software-rt-novita · https://www.studiopizzano.it/i-corrispettivi-telematici-del-futuro-dalle-specifiche-tecniche-alle-nuove-soluzioni-software/ · https://www.fiscozen.it/news/novita-corrispettivi-elettronici-software-al-posto-del-registratore/ · https://www.fiscoetasse.com/files/21019/provvedimento-n-570041-del12dicembre2025.pdf |
| F19 | 2027 roadmap | https://www.studiopizzano.it/corrispettivi-telematici-via-software-la-road-map-verso-il-2027-e-confermata/ · https://www.italiaoggi.it/diritto-e-fisco/fisco/corrispettivi-via-software-dal-2027-confermata-la-road-map-in-soffitta-i-registratori-fisici-ecco-le-novita-tfdgnrlz |
| F20 | POS–RT link | https://www.fiscoetasse.com/files/20865/provvedimento-del-31-ottobre-2025.pdf · https://www.mysolution.it/fisco/informazioni/news/2025/11/03/pos-e-registratori-telematici-interconnessi-dal-2026-definite-le-modalita-operative/ · https://www.fiscoetasse.com/normativa-prassi/13532-collegamento-pos-e-registratori-telematici-dal-2026.html · https://www.ecnews.it/fiscale/fisco-e-patrimonio/imposte-sul-reddito/pos-e-scontrini-obbligo-di-collegamento-dal-1-gennaio-2026/ · https://www.informazionefiscale.it/IMG/pdf/011_com._st._servizio_collegamento_registratori-pos_05.03_2026.pdf · https://www.assolombarda.it/servizi/fisco/documenti/faq_collegamento_pos_rt · https://www.assolombarda.it/servizi/fisco/documenti/guida-operativa-pos-rt-agenzia-entrate-febbraio-2026 · https://www.italiaoggi.it/diritto-e-fisco/come-funziona-labbinamento-virtuale-con-servizio-online-tra-registratore-di-cassa-e-pos-prima-scadenza-il-20-aprile-w71hi372 · https://lentepubblica.it/cittadini-e-imprese/2026-multa-4000-euro-per-chi-non-collega-pos-registratore-telematico/ · https://www.mysolution.it/fisco/informazioni/news/2026/03/19/collegamento-rt-pos-nuove-faq-delle-entrate/ |
| F21 | "Velocizzatori" | https://www.fiscal-focus.it/news,189810 · https://www.italiaoggi.it/diritto-e-fisco/scontrini-digitali-velocizzatori-al-bando-il-mef-mai-autorizzati-al-lavoro-per-inibirli-ogw91kpz · https://www.eutekne.info/Sezioni/Art_1130485_vietati_i_software_velocizzatori_per_l_emissione_di_scontrini.aspx · https://www.comufficio.it/wp-content/uploads/2026/06/NI_RT_POS_vs_Velocizzatori.pdf · https://www.studiopizzano.it/abbinamento-pos-documento-commerciale-online-vietata-la-delega-a-terzi/ |
| F22 | RT approval, labs | https://www.fipe.it/files/norme-tributi/Provv.%20Diret.%20Agenzia%20Entrate%20182017_2016.pdf · https://agenziaentrate.gov.it/portale/documents/20143/2547470/Allegato+-+Prescrizioni+tecniche+per+l%27approvazione.pdf/a354237b-7af8-db1b-2b15-6aa03bb97fe0 · https://comufficio.it/wp-content/uploads/2024/05/NI_6_Best_Practices_RT-6.pdf · https://www.fi.camcom.gov.it/print/1181 · https://www.agenziaentrate.gov.it/portale/documents/20143/4952835/Specifiche_Tecniche_RT_V11.pdf/246859ea-1586-5164-daf9-af01779de295 |
| F23 | fiskaly SIGN IT | https://workspace.fiskaly.com/pm-hub/service-descriptions/sign-it/ · https://workspace.fiskaly.com/countries/italy · https://www.fiskaly.com/e-invoice-italy-pos · https://www.fiskaly.com/blog/fiskaly-a-pioneer-in-the-certification-of-cloud-based-fiscalization-in-italy · https://developer.fiskaly.com/sign-it/introduction · https://workspace.fiskaly.com/sign-it/2026-05-04/integration-guide/ |
| F24 | RCH | https://agenziaentrate.gov.it/portale/documents/20143/2771415/Elenco+dei+Registratori+telematici+approvati+divisi+per+Societa+produttrice_2024.pdf/d7dbb2f6-1d7c-0f47-2e07-14d534494767 · https://www.spiagge.it/supporto-gestionale/docs/guida-configurazione-stampante-rch-printf-fiscale-e-non-fiscale/ · https://www.spiagge.it/supporto-gestionale/docs/problemi-di-stampa-troubleshoot/ · https://cincotti.altervista.org/wp-content/uploads/2019/05/PRINT-F_2018_02-vr00-1.pdf · https://www.snapweb.net/immagini/Catalogo/files/Schede/RCH/Print!/PRINT-rel0512_vr01.pdf · https://www.b4x.com/android/forum/threads/registratore-telematico-xon-xoff-fattura-e-scontrino-elettronico.131276/ · https://www.estargroup.it/en/rch-italia-partner/ · https://www.mixerplanet.com/post-pdf/24553 · https://www.oracle.com/it/retail/omnichannel/ |
| F25 | Epson FP-81 II RT | https://download4.epson.biz/sec_pubs/bs/pdf/ePOS%20Fiscal%20Print%20Solution%20Development%20Guide%20Rev%20T.pdf · https://www.scontrinosmart.it/en/fp81ii/documents · https://download4.epson.biz/sec_pubs/bs/pdf/Fiscal%20Printer%20Intelligent%20Features%20Guide%20Rev%20J.pdf · https://download4.epson.biz/sec_pubs/bs/pdf/Communication%20Protocol%20Version%207.00.pdf · https://apps.odoo.com/apps/modules/11.0/pos_epson_epos_fiscal · https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale/hardware_network/epos_ssc.html |
| F26 | Custom | https://www.estargroup.it/en/custom-fiscal-printers/ · https://insights.enactor.co/wp-content/uploads/devdoc/docs/guides/configuration/HowtoGuideFiscalItaly · https://docs.efsta.net/efr/IT/fiscal · https://www.b4x.com/android/forum/threads/registratore-telematico-xon-xoff-fattura-e-scontrino-elettronico.131276/ |
| F27 | Browser ↔ LAN (LNA, Safari) | https://developer.chrome.com/blog/local-network-access · https://developer.chrome.com/docs/modern-web-guidance/guides/security/local-network-access · https://developer.mozilla.org/docs/Web/API/Request/targetAddressSpace · https://groups.google.com/a/chromium.org/g/blink-dev/c/rSeg69VGdO4 · https://bugs.webkit.org/show_bug.cgi?id=279249 · https://bugs.webkit.org/show_bug.cgi?id=173161 · https://developer.apple.com/forums/thread/741519 |
| F28 | Google Business Profile booking link | https://support.google.com/business/answer/7475773 · https://www.resmio.com/en/help/integration/google-my-business-integration/ · https://help.tablein.com/google-link · https://www.brightlocal.com/learn/google-business-profile/optimization/bookings-and-appointments/ · https://sevenrooms.com/en/blog/google-reservations/ · https://resos.com/support/how-to-add-a-booking-system-on-google/ · https://formitable.com/blog/add-a-reservation-link-on-google |
| F29 | Actions Center (Reserve with Google) | https://developers.google.com/actions-center/verticals/reservations/e2e/policies/integration-policies · https://developers.google.com/actions-center/verticals/reservations/e2e/overview · https://developers.google.com/actions-center/verticals/dining/guides/end-to-end-integration/overview · https://developers.google.com/actions-center/verticals/dining/guides/end-to-end-integration/implement-booking-server · https://developers.google.com/actions-center/verticals/reservations/e2e/reference/booking-server-api-rest/e2e-definitions/proto-interface · https://developers.google.com/actions-center/verticals/reservations/bl/overview · https://developers.google.com/actions-center/verticals/reservations/bl/integration-steps/feeds · https://developers.google.com/actions-center/verticals/reservations/bl/policies/integration-policies · https://developers.google.com/actions-center/verticals/reservations/bl/policies/platform-policies · https://developers.google.com/actions-center/verticals/ordering/redirect/integration-steps/dining-reservation-links · https://developers.google.com/actions-center/legacy/archived-guides/starter-integration-overview |
| F30 | Mozrest | https://doc.mozrest.com/rms/ · https://doc.mozrest.com/rms/partner-api/ · https://mozrest.com/en-gb/booking-channel/reserve-with-google/ |
| F31 | Internal (not web) | `knowledge/clients/osteria-dei-rossi/sources/prd-2026-10-21.md` (non-goals, risk table, "revisit RCH integration only if variance stays above 5 % after month 2"); `clients/osteria-dei-rossi/context.md` (Phase 2 order, reservations, M20/M21); `deliverables/2026-11-05-hardware-research/research.md` (bridge and secret-key note) |

**Hosts to allow for a verification pass** (official texts first): `www.agenziaentrate.gov.it`,
`www.fatturapa.gov.it`, `www.normattiva.it`, `www.garanteprivacy.it`, `developers.google.com`,
`support.google.com`, `www.rch.it`, `download4.epson.biz`, `developers.fattureincloud.it`,
`docs.acubeapi.com`, `openapi.com`, `fatturazioneelettronica.aruba.it`, `workspace.fiskaly.com`,
`doc.mozrest.com`.
