---
client: Osteria Dei Rossi
slug: osteria-dei-rossi
language: it
status: prospect
owner: Mohammad
updated: 2026-10-21
---

# Osteria Dei Rossi — approved facts

> Only lines WITHOUT `[unverified]` may be used in client-facing output.
> Add `(src: sources/<file>)` to every fact. Never store passwords, keys, bank details or IDs.

## Identity
- Trading name: Osteria Dei Rossi [unverified] (src: founder, chat 2026-10-21)
- Legal name / VAT:
- Sector: osteria (restaurant), one venue, one kitchen, one storage area at start, one service shift per day [unverified] (src: sources/prd-2026-10-21.md)
- Address:
- Phone / email (public):
- Website / domains:
- Social profiles:

## Offer
- What they sell: food and drink service in the osteria; menu courses antipasti, primi, secondi, dolci, bevande [unverified] (src: sources/prd-2026-10-21.md)
- Key products / services / menu highlights:
- Prices (public):
- Opening hours / availability: critical service window 11:00–24:00 [unverified] (src: sources/prd-2026-10-21.md)
- Booking / purchase channel (URL):

## Audience
- Who buys:
- Where they are:

## Brand
- Colours (hex):
- Fonts:
- Logo files (location):
- Tone of voice:
- Words or claims to avoid:

## Operations (build-relevant)
- Fiscal register: RCH LDP03 (ASSO 3, Xstore back office); it only fiscalizes sales and exports supplier invoices as PDF; it stays in use, keyed in separately by the cashier [unverified] (src: sources/prd-2026-10-21.md)
- No POS integration and no RCH integration in either direction [unverified] (src: sources/prd-2026-10-21.md)
- Today nothing tracks purchases, production, cold-room stock or plate cost [unverified] (src: sources/prd-2026-10-21.md)
- Invoice volume: about 25 supplier invoices a month from roughly 10 suppliers (PRD assumption) [unverified] (src: sources/prd-2026-10-21.md)
- Written recipes with weights exist (PRD assumption) [unverified] (src: sources/prd-2026-10-21.md)
- Owner already uses Google Drive; supplier invoice PDFs to be dropped in a shared folder [unverified] (src: sources/prd-2026-10-21.md)
- Owner is the single alert recipient (PRD assumption) [unverified] (src: sources/prd-2026-10-21.md)
- VAT on food service: 10% (PRD assumption) [unverified] (src: sources/prd-2026-10-21.md)
- Staff roles: owner (titolare), chef and kitchen help, waiters (sala); waiters use their own phones and have no email accounts to manage [unverified] (src: sources/prd-2026-10-21.md)
- Venue has Wi-Fi; there may be dead spots in the dining room [unverified] (src: sources/prd-2026-10-21.md)
- Location timezone: Europe/Rome [unverified] (src: sources/prd-2026-10-21.md)

## Engagement with DigiAlto
- Project: Osteria Digitalization, a standalone web app (PWA) run alongside the register for invoices, food cost, payables, raw and batch inventory, waiter orders and reporting; supersedes the earlier monitoring and anti-fraud scope, which is dropped [unverified] (src: sources/prd-2026-10-21.md)
- Services in scope (IDs from knowledge/agency/services.md):
- Commercial terms:
- Deadline: MVP go-live 2027-01-12 after three overlapping sprints from 2026-11-03; supervised run 2027-01-12 to 2027-01-30; Phase 2 (labels, forecast) 2027-02-02 to 2027-03-27; Phase 3 (assistant, multi-venue) 2027-04-06 to 2027-05-29; one developer [unverified] (src: sources/prd-2026-10-21-media/roadmap.png)
- Running-cost target: under €50/month all-in for one venue; under €10/month marginal per extra venue [unverified] (src: sources/prd-2026-10-21.md)
- Hardware budget: none for the MVP; €250–500 one-off in Phase 2 (label printer, print bridge), bought only after a two-week supervised run [unverified] (src: sources/prd-2026-10-21.md)
- Main contact:
- Approvals:

## Data handled
- Supplier invoices and supplier data: business records, kept 10 years [unverified] (src: sources/prd-2026-10-21.md)
- Staff accounts: names and hashed PINs only; GDPR register entry needed for staff accounts [unverified] (src: sources/prd-2026-10-21.md)
- No customer personal data stored at all; the app takes no payments and issues no fiscal documents [unverified] (src: sources/prd-2026-10-21.md)
- Hosting region: EU for Supabase and Vercel functions [unverified] (src: sources/prd-2026-10-21.md)

## Integrations and accounts (named in the PRD; owner of each account not yet known)
- Vercel (hosting, cron), Supabase (Postgres, Auth, Storage, Realtime), Claude API (invoice extraction), Google Drive API (invoice folder), Resend (email alerts), GitHub (source, CI), Sentry (errors) [unverified] (src: sources/prd-2026-10-21.md)
- Phase 2+: Telegram Bot API, Brother QL label printer via a Raspberry Pi bridge, open-meteo, AdE corrispettivi import; Phase 3: WhatsApp Business [unverified] (src: sources/prd-2026-10-21.md)

## Tracking & legal
- Tracking approved (GA4, Meta pixel, ...):
- Cookie / privacy texts supplied by:

## Sources
- `sources/prd-2026-10-21.md` — Osteria Digitalization PRD (dated 2026-10-21, by DigiAlto), converted from the founder's upload `Osteria_Digitalization_PRD.docx`; text unchanged, diagrams in `sources/prd-2026-10-21-media/`. The original .docx is not in git (it was a session upload).

## Open questions
- Legal name, VAT number, address, owner's name, main contact, public phone/email
- Commercial terms and build budget for the project (the PRD only gives running costs); services in scope (likely SVC-APP-01 custom web application development, founder to confirm)
- Who owns and pays for the Vercel, Supabase, Anthropic, Google Cloud (Drive service account), Resend and Sentry accounts: DigiAlto or the client
- Who owns the code and the multi-tenant product: the PRD keeps multi-tenancy "from day one" and gives an extra-venue cost, so is this a DigiAlto product with the osteria as first tenant?
- Domain for the app
- GDPR roles (DigiAlto as data processor? DPA needed?) for staff accounts
- Brand for the app (logo, colours) or neutral UI
- From the PRD's own list: sample invoices from the 5 largest suppliers; full recipe list with batch sizes, portions and shelf life; supplier lead times and delivery days; fixed monthly costs (rent, labour, utilities); table names and typical covers; alert channel (email address or Telegram); whether half portions and shared plates exist today; who enters the register total at end of day
- Number of waiters and staff accounts; coperto amount if any
