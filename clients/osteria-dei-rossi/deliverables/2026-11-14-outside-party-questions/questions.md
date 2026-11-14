---
client: Osteria Dei Rossi
slug: osteria-dei-rossi
task: outside-party-questions
date: 2026-11-14
author: lead (draft, internal)
status: reviewed (reviewer PASS 2026-11-14, incl. chef sheet row 5 and commercialista point 4)
language: en (internal notes); it (the questions to send)
covers: founder-steps.md items 22-26 and section F (accountant, RCH)
---

# One question per outside party (Costì / Osteria Dei Rossi)

Internal note (English). Prepared 2026-11-14 under the founder rule of the same day: research official
sources first, propose a default, then ask each outside party **one** question that can be answered in one
reply. The question to send is in Italian (profile `language: it`), with a one-line English gloss.

**Nothing here is legal, tax or food-safety advice.** The defaults are proposals for the founder.

**How to read the sources.** Every source has a status:
- **read** = page or PDF downloaded and read in full on 2026-11-14;
- **snippet** = seen only as a search-result snippet on 2026-11-14 (the host is blocked in this session);
- **prior** = taken from an earlier DigiAlto deliverable, with that deliverable's own status;
- **inference** = my reasoning, not stated in any source.

Hosts blocked in this session (so their texts could not be read): `eur-lex.europa.eu`, `garanteprivacy.it`,
`www.salute.gov.it`, `supabase.com`, `vercel.com`, `resend.com`, `docs.github.com`, `registroimprese.it`.

The Italian questions state as fact only approved profile lines: the trading name and the three per-etto
dishes with their prices per 100 g. Anything resting on an
unverified profile line is either left out or put as something to confirm: the register's brand and model
("ci risulta un RCH", "ci confermerà marca, modello e firmware"), the go-live date ("puntiamo ad avviare … intorno al
12 gennaio", because the deadline line is unverified), the recipe book ("se avete un ricettario scritto"),
the online menu and the phone number (asked, not stated). The chef is addressed as "tu"; "avete" in the
sheet means the kitchen as a whole. The common ownership of DigiAlto and the osteria is kept out of the
Italian text (see §5).

---

## Summary

| Party | founder-steps items it closes | Default in force until answered | Blocks go-live (12 Jan)? |
|---|---|---|---|
| **Owner (titolare)**, not an outside party, so the one-question rule does not apply (one pre-filled sheet to correct) | 22 (unverified lines, 01358391, menu and prices, fixed costs, payment types), 23 (full per-etto list and prices), 25 (venue phone, booking hours, privacy contact e-mail), section F (who holds the SdI address and does the e-invoice preservation) | Payments "Contanti / Carta / Altro"; no fixed costs (shown as "non allocati"); only the 3 known per-etto dishes; booking hours Pranzo 12:00–14:00, Cena 19:30–22:00; no phone shown; 01358391 not used | **Yes**: the production tenant (S8-14), the real menu for G3-1/G3-2 and the booking page need these |
| **Chef** (one question: the reference portion; the rest as rows of an attached sheet) | 23 (reference portion of per-etto dishes), 22 (allergens A-01…A-24, recipe quantities, yields, shelf lives, cost-sheet format, via the sheet) | Per-etto dishes cannot be saved without a reference portion; allergens stay "da confermare"; no real recipes (plate cost "incompleta"); cost sheet `piatto;costo_cibo`; Produzione shows confirmed bookings only (P2-2 Q-P7) | **Yes, in part**: G3-3 needs real recipes, and per-etto dishes cannot be rung up without a reference portion |
| **Commercialista** | 22 (VAT 10 %, accountant export format), 23 (rounding of per-etto lines), section F (fiscal direction; the SdI address goes to the owner's sheet), P2-7 Q-X1 | VAT 10 % on every dish, drink and the coperto; line rounding half-up to the cent; monthly invoice CSV with VAT per rate; no SdI integration; XML upload (P2-7) imports TD01/TD24/TD25 only, operational copy, no conservazione | **No** |
| **RCH** (register dealer or technician) | section F (RCH questions) | No integration; receipt number typed at close; day-close reconciliation against the register total | **No** |
| **Data-protection adviser** | 24 (DPA-1, sub-processors, retention, TOTP records, booking data), 25 (privacy text), P2-2 Q-P10 | Booking page stays off; chef sees booking counts only, no guest link (P2-2); DigiAlto's draft art. 28 agreement and register entries signed as drafted; retention as built | **Yes** for the public booking page; **yes on paper** for DPA-1 (listed as blocking in founder-steps D) |
| **HACCP consultant** | 22 (shelf lives), section F (HACCP records), P2-2 Q-P2 (supplier lot codes) | Shelf lives as the chef states them; supplier lot encouraged, never required; labels as text only; no sensors | **No** |

Founder tasks and founder decisions (not questions to anyone) are at the end.

---

## 1. Owner (titolare)

**Who and why.** Not an outside party, but only the owner can answer these. Closes item 22 (remaining
unverified profile lines, what 01358391 is, menu items and prices, fixed costs, payment types), item 23 (the
full per-etto list and prices) and item 25 (venue phone, booking hours, privacy contact e-mail).

**The question (Italian, ready to send).** Send it with a one-page "scheda" that pre-fills each line with
the default below, so the owner only corrects.

> Ciao, puntiamo ad avviare Costì intorno al 12 gennaio e ci servono alcuni dati dell'Osteria Dei Rossi: nella
> scheda allegata abbiamo già scritto una proposta per ciascuno, puoi correggere o completare quello che non
> va (anche solo con una risposta tipo "riga 3: no, è così")?
>
> 1. Cos'è il numero 01358391 che compare accanto alla ragione sociale (numero REA, altro)?
> 2. Il menù e i prezzi attuali: è valido quello online, o ci sono piatti e prezzi diversi?
> 3. Piatti venduti a peso: oltre a Bistecca alla Fiorentina (9 € / 100 g), Bistecca Fritta (12 € / 100 g)
>    e Costata del Vamosh (7 € / 100 g), quali altri piatti si vendono a peso e a che prezzo per 100 g?
> 4. Tipi di pagamento da segnare alla chiusura del tavolo: proponiamo "Contanti", "Carta", "Altro"
>    (un pagamento misto va in "Altro"). Vanno bene?
> 5. Costi fissi mensili: affitto, personale, utenze (anche cifre arrotondate). Se preferisci non darli,
>    l'app li mostra come "non allocati".
> 6. Orari prenotabili online: proponiamo Pranzo 12:00–14:00 e Cena 19:30–22:00 (prime e ultime
>    prenotazioni accettate). Vanno bene?
> 7. Numero di telefono da mostrare ai clienti per le prenotazioni di gruppi grandi.
> 8. Indirizzo e-mail per le richieste privacy dei clienti (es. cancellazione dei dati).
> 9. Quanti servizi al giorno (pranzo e cena?), quanti camerieri e quanti telefoni useranno l'app.
> 10. Fatture elettroniche: dove arrivano le fatture dei fornitori (PEC o codice destinatario registrato
>     per la partita IVA) e chi gestisce quell'indirizzo (voi, il commercialista o un programma)? Chi fa la conservazione
>     digitale delle fatture? Se non lo sai, basta il nome del programma o "lo fa il commercialista".

*Gloss:* "We aim to start Costì around 12 January and need some venue data; the attached sheet has a proposal for
each line, please correct or complete what is wrong."

**Recommended defaults and where they come from**

| # | Default | Basis | Status |
|---|---|---|---|
| 1 | Not used anywhere until the owner says what it is | `docs/client-facts.md` in the app repo already says so. The registry (`registroimprese.it`) is blocked here, so I could not look it up. 8 digits does not settle the format | inference |
| 2 | Menu items and prices: none in production until confirmed; the live online menu is the draft | Profile: full live menu is an unverified line; only the 3 per-etto prices and the coperto are approved | profile |
| 3 | Only the three approved per-etto dishes. Profile also mentions "porcini fritti 250 g" as the founder's example of a weight order, so ask whether porcini are sold by weight | Profile line "Dishes priced by weight…" (approved, src menu-live 2026-11-11) | profile |
| 4 | "Contanti", "Carta", "Altro"; one payment type per table | M21 plan Q126 and assumption A2 (`docs/plans/2026-10-30-m21-bill-close.md`) | prior (plan) |
| 5 | No figure; fixed cost shown "not allocated" | M8 plan Q5/Q6; context.md M8 questions | prior (plan) |
| 6 | Pranzo 12:00–14:00, Cena 19:30–22:00 | Founder decision 2026-11-08 (context.md, reservations plan §5c). The profile's "critical service window 11:00–24:00" is unverified and not used | founder decision |
| 7 | No number shown; large groups read "contattaci direttamente" | Reservations plan Q-R17. A number appears on the menu site, but that profile line is unverified, so the question does not quote it | prior (plan) |
| 8 | No default; the booking page cannot be switched on without it | `docs/guides/prenotazioni.md` ("Switch the page on", step 3) | read (repo) |
| 9 | Two services (Pranzo, Cena), as built in M25c | The profile line "one service shift per day" is unverified **and contradicts** the Pranzo/Cena split the founder asked for on 2026-11-01. Ask, and fix the profile | inference |
| 10 | No SdI integration; nothing changes until known. If the owner does not know, the commercialista is asked later as a separate, explicitly noted second question (study §8 q. 1, 5) | AdE "Come si riceve una fattura elettronica dal Sistema di Interscambio": one registered address per VAT number, which "prevale su quello eventualmente indicato dal fornitore" (**read**). Moved here from the commercialista's question (reviewer, 2026-11-14) because the owner may know it | read |

**What the build does until answered.** The production tenant cannot be created with confirmed facts (S8-14).
Close-table offers the three payment types. KPIs show fixed costs as "non allocati". Per-etto dishes other than
the three are sold as normal dishes, if at all. The booking page stays off: its checklist ("Per attivarle
manca ancora") lists the missing privacy e-mail and settings.

---

## 2. Chef

**Who and why.** The one question closes the chef's half of item 23 (the reference portion of each per-etto
dish, raw or cooked), the risk rated highest below. An attached sheet ("scheda") closes the rest of item 22
(allergens A-01…A-24, recipe quantities, yields, shelf lives, cost-sheet format), the P2-2 point Q-P7 and
the kitchen UX point Q-UX-K2, as rows to confirm or correct. The chef is addressed as "tu"; "tenete/avete" in the sheet means the kitchen as a whole.

**The question (Italian, ready to send).**

> Ciao, per i piatti a peso: quanti grammi fanno una porzione di Bistecca alla Fiorentina, di Bistecca
> Fritta e di Costata del Vamosh, e il peso è a crudo o a cotto? (Quando hai un momento, nella scheda
> allegata confermi o correggi le altre righe.)

*Gloss:* "For the dishes sold by weight: how many grams is one portion of the Fiorentina, the Bistecca Fritta
and the Costata del Vamosh, and is that raw or cooked weight? (When you have a moment, confirm or correct the
other rows of the attached sheet.)"

**The attached sheet (Italian rows, each pre-filled with the default).** Attach §9 of
`docs/client/menu-draft.md` and the dish list of `docs/client/recipes-draft.md` from the app repo.

> 1. Allergeni: per ciascuno dei 24 punti allegati (A-01…A-24), confermi o correggi l'allergene indicato.
>    Se tenete già una documentazione scritta degli allergeni del menù, ci basta una foto.
> 2. Ricette: se avete un ricettario scritto, ci mandi una foto con grammature, resa e giorni di
>    conservazione di ogni preparazione? Se non c'è, li raccogliamo insieme piatto per piatto.
> 3. Foglio costi per piatto: se ne tieni uno, in che formato? Proposta: un file con "piatto; costo cibo".
> 4. Schermata Produzione: oggi mostriamo solo le prenotazioni confermate e i coperti per servizio. Vuoi
>    vedere anche, a parte, il numero delle richieste non ancora confermate? Proposta: no, solo confermate.
> 5. Durante il servizio, vuoi vedere da quanto tempo aspetta ogni comanda, scritto in parole (es. "da 12
>    min"), senza colori? Proposta: sì.

**Recommended defaults and sources**

- **Reference portion (the question): no default.** The app refuses to save a per-etto dish without it
  (`docs/guides/vendita-a-peso.md`, read), and inventing a weight would be inventing a client fact.
- **Sheet row 1, allergens.** D.Lgs. 231/2017 art. 19 c. 8: food served by "collettività" must state the
  Annex II substances for each dish, before serving, on the menu, a register, a sign or an equivalent digital
  system; if digital, "le informazioni fornite dovranno risultare anche da una documentazione scritta e
  facilmente reperibile". The alternative is a notice sending the customer to staff, but the written
  documentation is still required. C. 9 adds the "decongelato" mention; c. 10: in Italian. **read**
  (Normattiva). So written documentation should exist; whether it does is unknown, hence "se tenete già".
- Annex II of Reg. (UE) 1169/2011 lists 14 groups; the live menu numbers allergens 1–14. EUR-Lex was blocked,
  so the Annex was **not read**; the 14 groups and their order are from secondary snippets and my knowledge.
  **snippet / inference.**
- **One point to raise with the founder now (inference, not a chef fact):** reading the live menu numbers
  in the standard Annex II order (7 = milk), the Tartare dell'Oste shows 6 and 10 while its description
  says it is served on a "cialda di parmigiano". Draft point A-02 already asks this. If confirmed, the public
  menu under-declares milk today, which is the venue's own legal exposure, independent of Costì. The
  opposite cases (peanuts on the ragù pastas, A-04 to A-08) are over-declarations: less risky, still worth
  fixing. Both rest on unverified menu lines.
- Allergen default: "da confermare"; only the owner confirms (founder decision M7 Q6, 2026-10-23).
- **Sheet row 2, recipes.** That a written recipe book exists is an unverified PRD assumption, so the row is
  conditional. Shelf lives as the chef states them, confirmed by the HACCP consultant (§6).
- **Sheet row 3, cost sheet.** CSV `piatto;costo_cibo`, ±5 % (M8 Q8).
- **Sheet row 4, Q-P7.** Source: P2-2 plan, app PR #91, §7.1 (Q-P7), as relayed by the lead on 2026-11-14 (the
  plan is not in the local clone, so I did not read it). Default: confirmed bookings only; "yes" → variant V4.
- **Sheet row 5, Q-UX-K2.** Source: app repo `docs/ux/p4-cucina.md` (Q-UX-K2, read on main 2026-11-14), added at
  the lead's request. Default: yes, the waiting time of each comanda as words ("da 12 min"), no colours.

**What the build does until answered.** Per-etto dishes cannot be set up, so a waiter cannot ring up a
Fiorentina by weight. Allergens show "da confermare" at every recipe depth; imports never confirm (M7). No
real recipe is loaded (loading the chef's file needs the founder's OK, M7 Q7), so plate costs read
"incompleta" and the Gate 1 cost check has nothing to compare. Produzione (P2-2) shows confirmed bookings and
covers per service only.

---

## 3. Commercialista

**Who and why.** Closes item 22 (VAT 10 % and the accountant export format), the rounding half of item 23,
and section F's accountant questions. It replaces the 12 questions of the fiscal study (§8 of
`2026-11-13-fiscal-feasibility/study.md`) with one: only what changes a default before go-live. Who holds the
SdI address and who does the preservation moved to the owner's sheet (row 10). If the owner cannot answer
it, it becomes an **explicitly noted second question** to the commercialista, sent later and only then. The
other study questions (invoice issuing, the software-receipt regime, POS–RT) change nothing Costì does today,
so they wait. P2-2 has nothing for the accountant. The P2-7 point Q-X1 (XML supplier invoices, app PR #103
§7.1) is folded in as point 4 of the same confirm-or-correct question, not a second question.

**The question (Italian, ready to send).**

> Buongiorno, per l'Osteria Dei Rossi stiamo per avviare un gestionale interno (Costì) che non emette
> documenti fiscali e lascia scontrini e corrispettivi al registratore telematico (ci risulta un RCH). Ci
> conferma, o corregge, queste quattro impostazioni?
>
> 1. IVA al 10 % su tutto ciò che è servito al tavolo, bevande alcoliche e coperto compresi (somministrazione,
>    TU IVA Tabella A, parte IV, n. 102); nessuna vendita da asporto a parte.
> 2. Piatti a peso: prezzo per 100 g × grammi, arrotondato al centesimo (metà per eccesso) una volta per riga.
> 3. Ogni mese le inviamo un file CSV delle fatture fornitori approvate, con l'IVA divisa per aliquota.
> 4. Fatture elettroniche dei fornitori: Costì legge il file XML caricato dal locale e ne importa solo le
>    fatture ordinarie e differite (TD01, TD24, TD25). Vengono rifiutati tutti gli altri tipi di documento
>    (note di credito e di debito, acconti, parcelle, autofatture, integrazioni, fatture semplificate) e anche
>    le fatture con ritenuta d'acconto, cassa previdenziale, split payment o in valuta estera: tutti questi
>    restano gestiti fuori da Costì. La copia in Costì è solo operativa: la conservazione digitale a norma resta dov'è oggi.

*Gloss:* "We are starting an internal back office that issues no fiscal documents and leaves receipts to the
register (we understand it is an RCH). Do you confirm or correct these four settings: VAT 10 % on everything
served with no separate take-away, the per-weight rounding, the monthly supplier-invoice CSV, and importing
only ordinary and deferred XML supplier invoices (every other type refused and handled outside Costì), with Costì's copy
operational only and legal preservation unchanged?"

**Recommended defaults and sources**

| Point | Default | Source | Status |
|---|---|---|---|
| VAT | 10 % on every dish and drink served, coperto included | **TU IVA** (D.Lgs. 19 Jan 2026 n. 10), art. 34 c. 2: 10 % for Tabella A Parte IV; Parte IV n. 102: "somministrazioni di alimenti e bevande, effettuate anche mediante distributori automatici". The decree is in force (since 31 Jan 2026; the Tabella text read is the version in force from 7 Aug 2026) but **applies from 1 Jan 2027** (art. 171), so it governs sales from go-live. The rate is unchanged from today's rule | **read** (rate and item). Coperto at the same rate, and alcoholic drinks included when served: **inference**. Take-away sold as goods follows the goods' own rate: **inference**, hence take-away is put as a setting to confirm |
| Rounding | Half-up to the cent, once per line, in the database | `docs/guides/vendita-a-peso.md`, which already says the accountant decides how this matches the register receipt | read (repo) |
| Export | Monthly invoice CSV, VAT per rate first | Phase 2 scope D6 (`docs/plans/2026-11-11-phase2-scope.md`) | founder default |
| XML supplier invoices (point 4, Q-X1) | Import TD01, TD24, TD25 only; TD02–TD06, TD16–TD23, TD26–TD29, simplified invoices, withholding, cassa previdenziale, split payment and non-EUR currency refused with a named message (negative lines too, V2, already asked elsewhere); Costì's copy is operational, not conservazione | P2-7 plan, app PR #103, `docs/plans/2026-11-14-p2-7-xml-invoice-upload.md` §7.1 Q-X1 and D-X4; TD codes and labels per the AdE technical specs (Allegato A) as cited by the plan | **read** (plan, 2026-11-14). The plan writes the refused range as "TD16–TD29", which overlaps the supported TD24/TD25; the Italian names the refused categories in plain words, without codes, so it neither repeats that overlap nor mislabels TD26 (flagged to the lead) |
| SdI / preservation (now on the owner's sheet, row 10) | No SdI integration; XML upload (P2-7) later; Costì's copy is operational only, legal storage stays where it is | AdE "Come si riceve una fattura elettronica dal Sistema di Interscambio": one registered address per VAT number, "l'indirizzo registrato prevale su quello eventualmente indicato dal fornitore". 10-year duty: c.c. art. 2220 | **read**. Preservation route and AdE free service: **prior** (study §3, snippet) |

Not contradicted: the study's recommendations (P1 now, P2/P3 after the commercialista, A1 status quo, R1
keep the RT). One correction carried from `verification.md` a6: from 1 Jan 2027 the corrispettivi rules are
TU IVA art. 82–83, not art. 2 D.Lgs. 127/2015, so the question cites the TU.

**What the build does until answered.** `menu_item.vat_rate` and the coperto use 10 %. Weight lines round
half-up per line. No accountant export exists before P2-5. Nothing touches SdI. When P2-7 ships, XML
upload imports TD01/TD24/TD25 only and refuses the rest with a message sending it to the commercialista
(Q-X1 default "yes"; types to add → variant V1 or a new one; "Costì must preserve legally" → a separate plan).

---

## 4. RCH (register dealer or technician)

**Who and why.** Closes section F's RCH questions (study §9, 11 questions) with one. Nothing in the go-live
build depends on the answer; it decides whether option B (a local bridge driving the register) is ever
possible. The PRD rule stands: revisit only if app-vs-register variance stays above 5 % after month 2.

**The question (Italian, ready to send).**

> Buongiorno, per il registratore telematico dell'Osteria Dei Rossi, di cui ci confermerà marca, modello e
> firmware (ci risulta un RCH LDP03 RT): a quali condizioni (documentazione, costo, effetti su garanzia e
> verifiche periodiche) un software esterno può usare un protocollo di rete documentato, come "RCH
> Webservice con HTTPS" del PRINT! 3 RT, o un export dei totali giornalieri dal gestionale di cassa?

*Gloss:* "For the venue's register, whose brand, model and firmware you will confirm (we understand it is an RCH
LDP03 RT): on what terms can a third-party program use a documented network protocol, or a daily-totals export
from the till's back office?" P2-2 has nothing for RCH.

**Recommended default and sources**
- **LDP03 RT is an approved RCH register:** AdE "Elenco dei registratori telematici approvati divisi per
  società produttrice – aggiornato al 27 agosto 2026", entry "LDP03 RT - Cod. V8". **read.** That the
  venue's register is an RCH, and that model, rests on an unverified profile line, hence brand and model to
  confirm.
- **RCH publishes LAN protocols for another model:** the PRINT! 3 RT page lists "RCH, RCH Webservice, RCH
  Webservice con HTTPS, XOn-XOff, Upos, JavaPos". **read.** Nothing published for LDP03 (`verification.md`
  d2, d6: **prior, read 2026-11-13**).
- "ASSO 3 / Xstore" may be RCH's "ATS 3.0" and "XMarket" back offices: **prior, unverified**. Not asked by
  name, to keep the question short; "gestionale di cassa" covers it.
- Default: **no integration**; the cashier keys the sale into the register and types the receipt number at
  close; day close compares the app total with the register total (M21). Optional later: the "key into
  register" sheet (study B4).

**What the build does until answered.** Exactly the above; nothing changes.

---

## 5. Data-protection adviser

**Who and why.** Closes item 24 (DPA-1: the processing agreement, the sub-processor list, the 14 daily
copies, invoice files kept 10 years, TOTP records, customer booking data), the privacy half of item 25
(approving the booking-page notice) and the P2-2 point Q-P10. DPA-1 is owned by the client in the go-live
checklist.

**The question (Italian, ready to send).** Attach: DigiAlto's draft art. 28 agreement with the sub-processor
list and retention table below, the booking privacy notice (it/en, `RESERVATION_NOTICE_VERSION`), the
register entries (booking §3.9 of `docs/plans/2026-11-08-reservations.md`, staff accounts, supplier
invoices), and a short note on the P2-2 data use (row "P2-2" below).

> Buongiorno, puntiamo ad avviare il gestionale intorno al 12 gennaio e le alleghiamo la bozza di accordo ex art. 28 GDPR
> tra l'Osteria Dei Rossi (titolare) e DigiAlto (responsabile), con sub-responsabili e tempi di
> conservazione, l'informativa per le prenotazioni online, le voci del registro dei trattamenti e una nota
> sull'uso delle prenotazioni in cucina: sono adeguati, in particolare sui trasferimenti fuori UE e sul fatto
> che la nota non richieda modifiche al registro né all'accordo, e se no cosa dobbiamo cambiare?

*Gloss:* "We aim to start around 12 January; attached are the draft art. 28 agreement, sub-processors and
retention, the booking notice, the register entries and a note on how bookings are used in the kitchen: are
they adequate, especially on non-EU transfers and on the note needing no change to the register or the
agreement, and if not what must change?"

**Internal note: common ownership.** The first draft asked the adviser about DigiAlto and the osteria having
the same owner. That is now **kept out of the Italian text**: the founder must OK disclosing it to the adviser
first. If the founder agrees, add it to the cover note or an attachment, not to the question.

**Recommended default (the content of the attachments)**

| Topic | Default | Source | Status |
|---|---|---|---|
| Roles | Osteria = controller; DigiAlto = processor under a written art. 28 agreement, because they are separate businesses | Founder 2026-10-22 said no agreement needed (same owner); founder 2026-11-13 then decided a short written agreement for tenant #1. The second decision wins | founder decisions; the legal point is **inference** for the adviser to confirm |
| P2-2 note (Q-P10) | The chef sees only counts of confirmed bookings per service (no names or contacts); a trace links a dish to a table name and time, never to a guest. No change to the booking processing record or DPA-1; no guest link for recalls is built | P2-2 plan, app PR #91, §7.1 (Q-P10), as relayed by the lead on 2026-11-14 (not in the local clone, so I did not read it) | prior (plan, relayed) |
| Supabase | Sub-processor, eu-central-1; its DPA forms part of its terms | Supabase DPA page: "supplements and forms part of the Supabase Terms of Service" | **snippet** (supabase.com blocked) |
| Vercel | Sub-processor, functions in `fra1`; DPA incorporated by reference (version effective 31 Mar 2026) | Vercel DPA | **snippet** (vercel.com blocked). One third-party source says the DPA applies to Pro and Enterprise customers; production is on Pro (2026-11-08), so it probably covers us, but that is an **inference to check** against Vercel's own terms |
| Anthropic | Sub-processor for invoice content; Commercial Terms incorporate the DPA; no training on customer content; EU SCCs Module 2/3 in the DPA | Anthropic "Commercial Terms of Service" (effective 17 Jun 2025) §B, §C; "Data Processing Addendum" (effective 24 Feb 2025), definition A.8 and Schedule 4 | **read** |
| Resend | Sub-processor for booking and login e-mails; send from Ireland (`eu-west-1`), knowing **account data stays in the US** | Resend "Choosing a Region": eu-west-1 sends from Ireland "but your Resend account data still resides in the US"; region chosen when adding the domain; snippets conflict on whether Ireland needs a paid plan. Resend DPA (with SCCs) updated 31 Dec 2025 | **snippet** (resend.com blocked) |
| Google | Sub-processor holding encrypted backups and invoice-file packs in a Shared Drive; Google's Cloud Data Processing Addendum (last modified 30 Oct 2026) | Google Cloud DPA page | **read** (title and version only). Which Google terms cover a Workspace Shared Drive: not checked |
| GitHub | Sub-processor for CI and encrypted backups in transit | `docs.github.com` blocked | not verified |
| Retention | Booking contacts 30 days after the visit; abuse hashes 2 days; 14 daily database copies; supplier invoices and files 10 years (c.c. art. 2220, **read**); wrong TOTP codes (account and time only) 30 days; TOTP enrol/remove/reset/lock events kept permanently in the audit log | Reservations plan §3.9; runbook "Wrong-code records"; checklist DPA-1 | read (repo) |
| Register of processing | Keep one even if not strictly required | Garante FAQ (Oct 2018), via secondary sources: mandatory from 250 employees, or below that for non-occasional or risky processing; the Garante advises keeping one anyway and offers simplified SME templates | **snippet** (garanteprivacy.it blocked) |
| Lawful basis (bookings) | Art. 6(1)(b), plus 6(1)(f) for the abuse hashes; the checkbox is an acknowledgement, not consent; no free-text notes (allergies would be Art. 9 data) | Reservations plan §3.9, Q-R12, Q-R13 | prior (plan) |

The permanent retention of TOTP lock events is the point most likely to draw a comment (storage
limitation, Art. 5(1)(e)): **inference**. The GDPR text itself could not be read (EUR-Lex blocked).

**What the build does until answered.** The back office runs as built: retention jobs as above, no change in
code. P2-2 shows the chef counts only and builds no guest link. The public booking page stays **off** (the owner's switch), so the Google Business Profile booking link
(GBP-1) waits too. No DPA is signed.

---

## 6. HACCP consultant

**Who and why.** Closes the shelf-life part of item 22 (the chef states practice, the consultant confirms it
against the venue's manuale di autocontrollo), section F's "HACCP consultant" point (records) and the P2-2
point Q-P2 (supplier lot codes). Not on the go-live path: sensors are a later pilot after P2-4 (founder D5,
2026-11-11), labels are text only.

**The question (Italian, ready to send).**

> Buongiorno, per l'Osteria Dei Rossi stiamo introducendo un'app di cucina che registra fornitore, fattura e
> data di ogni consegna (più il lotto del fornitore quando è stampato o inserito), i lotti dei semilavorati
> con data di produzione e scadenza, e gli scarti con il motivo. Secondo il manuale di autocontrollo del
> locale, ci può indicare (a) i tempi di conservazione previsti per i semilavorati e (b) le eventuali
> categorie di prodotto per cui il lotto del fornitore va registrato sempre?

*Gloss:* "The app records supplier, invoice and date for every delivery (plus the supplier lot when printed or
typed), batch lots with production and expiry dates, and waste with reasons: under the venue's self-control
manual, can you tell us (a) the shelf lives set for worked batches and (b) any product categories for which the
supplier lot must always be recorded?" One question in two labelled parts.

Sensors (uncertified probes checked against a calibrated reference) are left out to keep one ask; they are a
later pilot and can be asked when it starts.

**Recommended default and sources**
- **Q-P2, supplier lot code.** Default: no category needs it always; recording is encouraged, not forced. Basis
  given in the plan: Reg. (CE) 178/2002 art. 18 ("one step back": the supplier, which the app always records).
  Source: P2-2 plan, app PR #91, §7.1 (Q-P2), as relayed by the lead on 2026-11-14 (not read by me; Reg.
  178/2002 not re-read today, EUR-Lex blocked). If the consultant names categories → variant V2.
- Reg. (CE) 852/2004 art. 5 (permanent HACCP-based procedures with records) and the reference-thermometer
  practice come from `2026-11-05-hardware-research/research.md` (**prior, snippet**). EUR-Lex and the
  Ministero della Salute site were blocked today: **not re-verified**.
- Default: shelf lives as the chef states them; the app's lot, label-text and waste records kept alongside,
  not instead of, the manual's paper registers until the consultant agrees; no sensors.
- Open, and for the founder rather than the consultant: OQ-1 (a night-time freezer alarm is only seen when
  someone opens the app, because alerts stay in-app).

**What the build does until answered.** Batches carry the shelf life the chef enters; labels are text; the
"Sicurezza" screen stays an empty placeholder. P2-2 records supplier, invoice and date for every delivery and
the lot code only when printed or typed (encouraged, never required).

---

## 7. Not questions: founder decisions and founder tasks

**Founder decision (item 25): who owns Resend.** Default: **DigiAlto**, consistent with the 2026-11-13
decisions that DigiAlto owns the platform and its accounts (Vercel team, Supabase org). This is inference
from those decisions, not a recorded answer to Q-R14. Open the account with MFA, choose the region when adding
the sending domain (it cannot be changed without deleting the domain, per Resend's docs: snippet).

**Founder tasks (item 26), not questions:**
1. GitHub environment `extraction-contract` with `ANTHROPIC_API_KEY` and `EXTRACTION_MODEL_ID` (secrets typed
   into GitHub only). The output-limit condition (at least 36 000 tokens) is met by `claude-haiku-5-5`:
   "Max output 128K tokens" (Anthropic "Models overview", **read** 2026-11-14).
2. 10 anonymised sample invoices from the 5 largest suppliers, anonymised as decided on 2026-10-22.
3. Confirm the Anthropic account is an API (Console) account under the Commercial Terms, not a consumer
   plan: the Commercial Terms incorporate the DPA (read, §5 above), and say they are "not for consumer use".
4. VT1: the PDF-frame check in desktop Chrome at about 1280 px on `/fatture/<id>/revisione`.

---

## Sources (all dated 2026-11-14 unless marked)

| Title (as shown) | URL | Status |
|---|---|---|
| DECRETO LEGISLATIVO 15 dicembre 2017, n. 231 - Normattiva (art. 19) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2017-12-15;231~art19!vig=2026-11-14 | read |
| DECRETO LEGISLATIVO 19 gennaio 2026, n. 10 - Normattiva (TU IVA, art. 34 and Tabella A, text in force from 7-8-2026) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2026-01-19;10 | read |
| REGIO DECRETO 16 marzo 1942, n. 262 - Normattiva (c.c. art. 2220) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262:2~art2220 | read |
| Aree tematiche - Come si riceve una fattura elettronica dal Sistema di Interscambio - Agenzia delle Entrate | https://www.agenziaentrate.gov.it/portale/aree-tematiche/fatturazione-elettronica/guida-fatturazione-elettronica/come-predisporre-inviare-ricevere-fe/come-si-riceve-fe-da-sistema-interscambio | read |
| Elenco dei registratori telematici approvati divisi per società produttrice – aggiornato al 27 agosto 2026 (AdE, PDF) | https://www.agenziaentrate.gov.it/portale/documents/20143/2771415/Elenco+dei+Registratori+telematici+approvati+divisi+per+Societ%C3%A0_produttrice.pdf/af79e0d4-c70f-4e98-ff62-746360681fb5 | read |
| Stampante fiscale PRINT! 3 RT \| RCH S.p.A. | https://www.rch.it/prodotti/stampanti-fiscali-e-non-fiscali/print-3-rt/ | read |
| Commercial Terms of Service \ Anthropic | https://www.anthropic.com/legal/commercial-terms | read |
| Data Processing Addendum \ Anthropic | https://www.anthropic.com/legal/data-processing-addendum | read |
| Models overview - Claude Platform Docs | https://docs.claude.com/en/docs/about-claude/models/overview | read |
| Cloud Data Processing Addendum \| Google Cloud | https://cloud.google.com/terms/data-processing-addendum | read (version line only) |
| Choosing a Region (Resend) | https://resend.com/docs/dashboard/domains/regions | snippet |
| Data Processing Addendum (Resend) | https://resend.com/legal/dpa · https://resend.com/static/documents/resend-dpa-signed.pdf | snippet |
| Data Processing Addendum (Supabase) | https://supabase.com/legal/dpa | snippet |
| Data Processing Addendum (Vercel) | https://vercel.com/legal/dpa | snippet |
| Registro delle attività di trattamento (Garante) and secondary reports of its FAQ | https://garanteprivacy.it/registro-delle-attivita-di-trattamento · https://www.informazionefiscale.it/registro-dei-trattamenti-privacy-RGPD-istruzioni-soggetti-obbligati-modello-semplificato-pmi | snippet |
| Reg. (UE) 1169/2011 art. 44 and Annex II | (EUR-Lex blocked) secondary: https://ilfattoalimentare.it/allergeni-ristorante-dario-dongo.html | snippet |
| Kitchen UX spec, Q-UX-K2, `docs/ux/p4-cucina.md` (app repo main) | `digialto7-byte/osteria-dei-rossi-app` | read 2026-11-14 |
| P2-7 plan, app PR #103, §7.1 Q-X1 and D-X4, `docs/plans/2026-11-14-p2-7-xml-invoice-upload.md` | `digialto7-byte/osteria-dei-rossi-app` (PR head) | read 2026-11-14 |
| P2-2 plan, app PR #91, §7.1 (Q-P2, Q-P7, Q-P10), `docs/plans/2026-11-14-p2-2-trace-sell-through.md` | not in the local clone | relayed by the lead, not read by me |
| Fiscal feasibility study and its verification | `clients/osteria-dei-rossi/deliverables/2026-11-13-fiscal-feasibility/` | prior (2026-11-13) |
| Hardware research (HACCP practice, Reg. 852/2004) | `clients/osteria-dei-rossi/deliverables/2026-11-05-hardware-research/research.md` | prior (2026-11-05, snippet) |
| App repo: go-live checklist, runbook, `docs/guides/prenotazioni.md`, `docs/guides/vendita-a-peso.md`, plans M21, reservations, Phase 2 scope, `docs/client/menu-draft.md` | `digialto7-byte/osteria-dei-rossi-app` | read (repo) |

---

## Risks for go-live on 12 January

1. **Per-etto dishes and the chef (highest).** Without a reference portion the steaks cannot be set up by
   weight, and there is no honest default. They are high-value items, so leaving them out of the app could
   also push the G3-2 day-close variance over 5 %. Ask the chef first.
2. **Recipes for G3-3.** The module checklists "on real data" need real recipes; a slow chef reply moves the
   gate, not just a feature.
3. **The booking page and the adviser.** If the adviser does not answer, the default keeps the page off,
   and GBP-1 waits too. The back office can still go live. Shipping DigiAlto's unreviewed notice to real
   customers is the risky alternative; I would not.
4. **DPA-1 "on paper".** Founder-steps lists it as blocking. Signing the draft art. 28 agreement between the
   two businesses before the adviser replies is low-risk (it can be amended), but Resend's US-held account data
   and Anthropic's US processing should be named in it now, not later.
5. **Public allergen information (venue, not Costì).** If the Tartare does carry parmesan, the online menu
   under-declares milk today. Worth telling the owner now rather than waiting for the chef's full reply.
6. **Profile conflict.** "One service shift per day" (unverified) contradicts the Pranzo/Cena build; resolve
   it with the owner's answer before the tenant is created.
