---
slug: osteria-dei-rossi
date: 2026-11-26
type: internal plan (lead)
---

# Costì: the next phase (admin, mail, hosting, tenant look, Claude connector)

Internal. Answers the founder's list of 2026-11-26. Built from the app repo's `main` (b34e136c) and its
plans: `docs/plans/2026-11-13-platform-saas.md` (SP0–SP13), `docs/plans/2026-11-08-reservations.md` (V5),
ADR-032, ADR-037, ADR-039.

## Founder decisions recorded (2026-11-26)
- **D1. V5 (a booking address of the venue's own) is a paid feature**, offered with a paid tier. It is built
  after SP5 (entitlements), so it can be switched on per tenant. The slug address `/prenota/<slug>` stays the
  default for every tenant.
- **D2. Vercel stays on Hobby** until Costì is tested and confirmed, before any sale. At that point a
  migration and upgrade plan is made. This replaces "Vercel Pro for production" in founder-steps S8-6
  (decided 2026-11-08). Note: Vercel's Hobby terms are for non-commercial use, so the upgrade comes before
  the first paying tenant.
- **D3. Resend is owned by DigiAlto, one account for all tenants** (answers founder-steps item 25, "who owns
  Resend"). See §2.

## 1. Costì admin (the console): already planned, not yet built
What exists on `main`: the console **screens** (`/console`: Locali, venue detail, Registro, Avvisi, sign-in
with code and TOTP), built in UX phase SP3 against mock data. **No platform tables or functions exist yet**
(no `platform` schema migration).

The founder's list maps onto the platform plan:

| Founder asked for | Plan step | What it gives |
|---|---|---|
| Admin login | SP2 memberships (one login, many tenants), SP3 platform layer (one platform admin, console mode, platform audit) | The DigiAlto account signs in to the console with TOTP; console sessions see metadata only, never business data |
| Admin account for the osteria tenant | SP4 platform admin membership in every tenant, SP13 tenant #1 cut-over | DigiAlto's standing `admin` in the osteria, every action audited as "DigiAlto" and visible to the owner |
| Pre-created feature controls | SP5 entitlements (features, plans, overrides, observe/enforce), SP6 tenant status | Modules on/off per tenant and per tier, enforced in Postgres and the API; tier names and prices stay placeholders until the founder sets them |
| Creating tenants | SP7 invitation provisioning and onboarding wizard | Console invite, owner login, wizard with the restaurant preset, trial |
| Reporting | SP11 usage metering and console health | Usage per tenant, quotas, health findings in the console |
| Tables, forms and views per tenant | SP1 (done), SP9 terminology, theme and venue name | Per-tenant settings, theme and name |

**Build order (proposed, founder to confirm, §5 Q1):** merge comanda PR 4 (#214), then SP2 → SP3 → SP4 →
SP5 → SP6 → SP7, then SP9. The screens session (opening stock PR 5, comanda PR 5) and P2-4 alert rules fit
before SP2 or after SP7. One builder at a time (compute rules).

## 2. Resend: one DigiAlto account for every tenant
- One account, owned by DigiAlto, EU region if offered.
- One verified sending domain under the Costì domain, e.g. `mail.<costi-domain>`. Its SPF, DKIM and DMARC
  records go at the DNS host of DigiAlto's domain.
- Guest booking mails: From `"<Venue name>" <prenotazioni@mail.<costi-domain>>`, Reply-To the venue's own
  e-mail. Guests see the venue's name; replies reach the venue; one domain serves every tenant.
- Supabase Auth mail (sign-in codes) uses the same account through SMTP, with sender name "Costì" (FD34).
- Per-tenant sending from the venue's own domain (e.g. `@osteriadeirossi.it`) is a later paid option, like V5.
- Check the free tier's daily and monthly sending limits before a second tenant goes live.

## 3. What the website gives each tenant's set-up
The website source is not in this repo yet (`clients/osteria-dei-rossi-website` is an empty placeholder file
from 2026-11-24). What it can feed into Costì, once built and approved:

| From the website | Into Costì | Status |
|---|---|---|
| Venue name, legal name | Header band, booking page, guest e-mails (FD34) | Legal name pending (founder) |
| Colours and fonts (profile.md: cream, green, gold…, Bodoni Moda, Figtree) | SP9 tenant theme (contrast-checked); today the osteria theme is hard-coded | Colours and fonts approved 2026-10-22 |
| Logo / emblem (SVG) | Tenant header, booking page, e-mails | Files not received `[unverified]` |
| Address, phone, opening and booking hours | Reservation settings, booking page phone link, Google Business | Hours and phone pending (founder-steps 25) |
| Privacy contact, privacy page | Booking notice (`RESERVATION_NOTICE_VERSION`) | Pending (Q-R12) |
| Menu (the menu site JSON) | Menu import, allergens | Allergen check with the chef pending (A-01…A-24) |
| Photos | Not used by Costì today; possible booking-page header later | — |

Proposal: when we build a client website, also produce one **tenant brand kit** file (name, colours, fonts,
logo paths, contact, hours), from approved facts only. It is the input for SP9 and the reservation settings,
and the same step for every future tenant whose site DigiAlto builds. Unverified lines stay out.

## 4. The venue's own Claude, limited to its tenant (new; not in any plan yet)
Goal: the osteria connects its own Claude subscription and asks about its own data only.

Proposed shape (an architect plan and ADR come first):
- **A Costì MCP server** at a route of the app (e.g. `/api/mcp`), added in Claude as a custom connector.
- **Sign-in is the person's own Costì login** through OAuth. The token carries their tenant and role, so the
  same RLS and role rules apply: a waiter never sees costs, and no other tenant's data is reachable. The
  secret key is never used (rule 2).
- **Read-only first**: sales and KPIs, food cost, stock, payables, bookings without guest contact data.
  Writes (e.g. a stock count) only later, each as an existing audited procedure.
- **A feature switch** (SP5), so it can be a paid feature; per-tenant on/off by the owner; every call audited.
- Depends on SP2 (memberships, the token claims) and SP5 (switch). Rate limits per tenant (SP11).
- To check in the plan: which Claude plans allow custom connectors; whether Supabase Auth can act as the OAuth
  authorisation server or a small one is needed; the data-protection side: data the venue sends to its own
  Claude account is under the venue's terms with Anthropic, so the DPA and the venue's privacy notice must
  say so; guest personal data stays out of the tools.

## 5. Questions for the founder
- **Q1.** Build order: Costì admin (SP2–SP7) right after #214, before the screens session and P2-4? Default:
  yes.
- **Q2.** The Claude connector: plan it now (architect, plan only, no code) or after SP5? Default: plan after
  SP5.
- **Q3.** The Costì domain name (FS-2). It unblocks the console host, the booking page, Resend and Google
  Business.

The founder's own steps are in `founder-steps.md`, section G.
