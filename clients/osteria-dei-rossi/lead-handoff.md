---
slug: osteria-dei-rossi
updated: 2026-11-28
---

# Costì / Osteria Dei Rossi: lead hand-off

Internal. A short brief for a new lead chat. The full history is in [[context]]
(`clients/osteria-dei-rossi/context.md`, recorded up to #167). Facts are in
`knowledge/clients/osteria-dei-rossi/profile.md` and `knowledge/agency/products/costi/brand.md`.
The founder's manual steps are in `founder-steps.md` (next to this file).

## What the project is
- **Costì**: a DigiAlto SaaS back office for restaurants. Osteria Dei Rossi is tenant #1. App repo:
  `digialto7-byte/osteria-dei-rossi-app` (Next.js 16.4.6 on Vercel hobby, Supabase EU, public repo).
- Staging: Supabase `wjowhjsfpcdykxwgjipq`, Vercel project `osteria-dei-rossi-app`
  (https://osteria-dei-rossi-app.vercel.app). A push to `main` runs CI, then `deploy-staging`.
- Go-live happens when the founder judges it ready; no fixed date.

## Compute rules (founder, 2026-11-18): the top priority
The account hits its 5-hour and weekly usage limits. Every turn re-reads the whole context, so:
- **One builder at a time.** A fresh session per feature; retire it when the feature is merged.
  Server and database work on Opus; screens-only work on Sonnet.
- **Retire any session whose context passes about 250k tokens** (see `get_session` → `context_usage`).
  Ask it for a short hand-off first only if it holds state that isn't in a repo.
- **Builders' lean rules** (copy them into every brief): report once when CI finishes, never per
  check; no architect for steps already planned; one code-review round per PR; targeted local tests
  only (CI runs the full suites); short messages; mark the PR ready when review passes (draft PRs skip
  the database CI); never merge.
- **Lead:** no polling. Wake on PR events (`subscribe_pr_activity`) and on builder messages. Keep one
  `send_later` safety net per PR. Read migrations yourself; don't spawn reviewers for the lead's reads.
- The lead itself is replaced the same way: update this file, start a fresh lead, tell the founder.

## Sessions (2026-11-28)
| Session | Id | State |
|---|---|---|
| Lead | V4: the newest "Costì Lead" chat | Talks to the founder; merges; reads every migration |
| SP3 builder 3 | `session_018fKcCk2u6CFsbmohMjKCxd` (Opus, started 2026-11-28 02:13) | Builds SP3 PR 3 → 4; reports per PR (head sha + migrations); waits for "merged" |
| SP3 builder 2 | `session_018fKcCkRC2Vse39NA1GuUTc` | RETIRED 2026-11-28 after #223 (PR 2) merged, context 349k. A fresh builder takes PR 3 → 4; reports per PR (head sha + every migration's full text); waits for "merged" before the next |
| Retired 2026-11-27 | lead V3 `session_018fKcCmuFkjv4yhpCbKERjo` (context 746k); SP3 builder 1 `session_018fKcChwFTGwvXPBYgvYmni`; SP3 planner `session_018fKcCk2JNJN61SoRZLbdqB`; SP0 runner `session_018fKcCi8swzD2K1GtTu7eGG`; SP2 builders `session_018fKcCn5E3P3X8YGJrsVi2W`, `session_018fKcCkp9AHjyKWBYmdgSAK`, `session_018fKcCj1C7X1BQWLt39SYjK`; comanda PR 4 builder `session_018fKcCk6qy2mws1vqGWgjke` | Work merged; nothing pending in them |

The new lead's first steps: `get_session` (no id) for its own id, then `send_message` to SP3 builder 2 with the new lead id
("report to session <new id> from now on"), then `subscribe_pr_activity` on any open SP3 PR.

## How to merge an app PR
0. The lead's GitHub tools only reach repos attached to its session: call `add_repo` (the founder must approve it in chat: "attach the app repo with push access") (owner `digialto7-byte`, repo
   `osteria-dei-rossi-app`, access push) once, and clone to `/home/user/osteria-dei-rossi-app`.
1. On the builder's message: `git fetch origin +refs/heads/main:refs/remotes/origin/main refs/pull/<n>/head:refs/remotes/pr<n>`,
   then `git diff origin/main...pr<n>`. Never read a stale checkout.
2. Security read: new migrations sort after main's newest (`db push` has no `--include-all`); every SECURITY
   DEFINER has `search_path=''` and checks the role first; RLS and `tenant_id` everywhere; nothing new
   for `anon`; the secret key only in `/api/cron/*`, `scripts/` and `src/server/staff-auth/privileged.ts`.
   Read every migration line by line.
3. All CI checks green on the head (`get_check_runs`), then squash-merge with the full 40-character
   `expectedHeadSha`.
4. CI failures: the lead can't re-run jobs (403). Find the root cause. A legitimate push (such as merging
   `main` into the branch) restarts CI; never push an empty commit or close and reopen.
   Known hazard: "ports still in use … 54322" when the runner's own agent holds that port (seen once, on
   #207). If it recurs, fix it by moving the stack ports (54320–54329) below the 32768 ephemeral range.

## State on 2026-11-28 (lead V3 → V4)
Merged and live (lead read of every migration, CI green on each head):
- Comanda per uscita complete (#211–#214). SP2 complete (#215 plan, #216, #217, #218); live sign-in verified by the founder.
- SP0 hosted run (#220): inconclusive, because the cloud session's network proxy injects a saved secret on every request to that host.
  Lesson: user-token checks cannot run from a cloud session with a saved network secret for the same host.
- SP3 plan (#219), PR 1 (#221: platform.staff, append-only audit, guards, bootstrap, script audit, platform MFA, org VAT lock,
  add-owner script), hand-off (#222). Live DB newest migration 20261208100550.
- Live people: the founder = `admin` "DigiAlto" at tenant #1 (verified TOTP) and the one active `platform_admin` (bootstrapped
  2026-11-27, audited); Luca = `owner` (signed in; no TOTP yet). Tenant #1 = "Osteria Dei Rossi", VAT IT00354250524,
  organisation legal name ML SNC DI LANARO E FRESI (fixed by the lead from profile.md; it was the demo tenant's placeholder).
- Online booking live and tested end to end; website V3 live on the osteria's hosting (founder, cPanel) with "Prenota online"
  next to phone and WhatsApp (DigiAlto-Ops #79, #80). Booking URL is in profile.md.

**Build order now:** SP3 PR 2 → PR 3 → PR 4 (builder 2) → set `CONSOLE_HOST=console.digialto.com` in Vercel (founder) and verify T2
live: the founder signs in to the console, the lead checks console reads under `platform_staff` and that tenant sessions are unchanged
(lead decision 2026-11-27, recorded in the SP3 plan §8a by PR 2) → **plan and build the tenant-scoped Claude connector (MCP)** → SP4 → SP5 → SP6/SP7.
**Founder decision 2026-11-28:** MCP per tenant comes right after SP3 (option 1), before SP4/SP5. Scope: read-only first, one tenant per
connection, with its own small on/off switch (SP5 later absorbs it into the general feature switches).
Merge rule until the osteria uses the app daily: no service window needed; after that, risky merges on Mondays (closed Sunday
evening and Monday), others before 10:00 Europe/Rome.

**Small items:** per-service weekday closures for online booking (e.g. closed Sunday dinner, Monday lunch; founder 2026-11-27; until then Sunday is closed online for the whole day); CronJob parity in `tests/parity/drift-keys-sql-parity.test.ts`; `price_variance_pct` as a typed, audited setting after
P2-4; remove "segue" at least 30 days after go-live.

**Records:** GitHub Actions doesn't run in this repo (billing); merge on a clean local `python3 scripts/check_repo.py`.

## Founder decisions 2026-11-26 (plan: `deliverables/2026-11-26-costi-next-phase/plan.md`)
- V5 (own booking host) is a paid feature, built after SP5. Vercel stays Hobby until tested; upgrade plan before any sale.
- Resend: one DigiAlto account for all tenants; From the venue's name on `mail.<costi-domain>`, Reply-To the venue.
- New asks: Costì admin (= SP2–SP7), tenant brand kit from client websites (feeds SP9), and a tenant-scoped Claude
  connector (MCP + OAuth, read-only first, behind an SP5 switch). Q1–Q3 answered: Costì admin (SP2–SP7) right after #214; the Claude connector is planned after SP5;
  the app host is `app.digialto.com` (console `console.digialto.com`); digialto.com DNS is managed at Bluehost.

## 2026-11-27: SP2 verified live
The founder signed in at https://app.digialto.com after SP2 merged (e-mail code via Resend). Supabase Auth URL Configuration on the
live project: Site URL https://app.digialto.com and redirect https://app.digialto.com/api/auth/callback** added by the founder
(old vercel.app entries still listed; tidy later).

## 2026-11-27: online booking set-up
- Vault (live): `reservation_gate_key` and `reservation_hash_salt` created by the lead (random, never printed); the founder copied
  the gate key and a temporary link key into Vercel Production (`RESERVATION_GATE_KEY`, `RESERVATION_LINK_KEY`); the temporary
  Vault copy was deleted. Live from the next code deploy (SP3 PR 1).
- Founder's settings: enabled, slug `osteria-dei-rossi`, phone set, privacy e-mail set. Controller name corrected to the legal name by the founder;
  Sunday closed online for the whole day by choice (per-service closures: small later feature).
- Tenant #1 was still the demo tenant ("Osteria Demo", VAT IT00000000000). The lead set, from profile.md facts: tenant name
  "Osteria Dei Rossi", VAT IT00354250524; organisation name, VAT and legal_name ML SNC DI LANARO E FRESI (one transaction, live DB).
- 2026-11-27: website V3 live (founder uploaded via cPanel), with the "Prenota online" button; PR #79 + #80 merged.
- After the test booking passes: add a "Prenota online" button in V3's #prenota section (PR #79 files), keeping phone and WhatsApp.

## Founder decision 2026-11-27: one Supabase project
- The existing project `wjowhjsfpcdykxwgjipq` ("Osteria Dei Rossi - Staging") becomes the osteria's live database. The founder has
  already removed the demo data and started the real set-up (tables). A separate staging project may come later.
- Consequences the lead enforces: every merge to `main` migrates the live database (deploy-staging), so merge only outside service
  hours, and auth or schema-risky PRs (SP2 PR 2) only on a day without service. Service (founder, 2026-11-27):
  closed Sunday evening and all Monday. Until the osteria starts using the app (founder, 2026-11-27: not in use yet), merges
  need no service window; SP2 PR 2/3 merge as soon as SP0 hosted passes. The service-window rule applies from first real use; never run the demo-data workflow or
  `begin_demo_data`/`purge_demo_data` against it; backups (founder-steps B) before real service data. FREE-3 done 2026-11-27: Vault `app_base_url` =
  https://app.digialto.com, `vercel_protection_bypass` deleted, a manual `/api/cron/extract` call answered 200 without it.

## Founder decision 2026-11-27: who is who (addresses are NOT written in any repo; the founder gave them in chat)
- Platform admin (Costì console, DigiAlto) = the founder's own login, which today is the ONLY user of tenant #1, as `owner`.
- The osteria's owner (the venue's own admin) = a new login for the osteria's manager (Luca), not yet an auth user.
- The plan requires two different auth users (platform plan §0a note 2, SP3 `platform_admin_has_member_role`), so the order is:
  DONE 2026-11-27: Luca's auth user created by the founder (dashboard, auto-confirm); the lead inserted his owner row
  (display name "Luca") and a platform audit row `script.add_owner`. 2026-11-27 later: the founder (verified TOTP factor) switched to role `admin`, display name "DigiAlto", and bootstrapped as the one
  active `platform_admin` (platform_bootstrap_admin, audited). Luca is the only owner. SP4 (DigiAlto audit filter for the owner, attach
  flow) and the console (SP3 PR 2–4) are still to build.
  0. (was) Founder 2026-11-27: Luca's access is set up later (when the founder says so). Quick path then: founder adds the auth user
     in the dashboard (Add user, auto-confirm, no password), the lead inserts the owner row.
  1. create Luca's login and owner row at tenant #1 (no tool exists yet: email owners come only from scripts; add a small
     service-role script step, `scripts/` with the secret key, to SP3 PR 1 or run SP2's `create-tenant.ts --existing-owner-id`
     variant if it fits; decide when SP3 building starts);
  2. SP3 bootstrap makes the founder's login the platform admin; SP4/SP13 turn its owner row at tenant #1 into the
     DigiAlto `admin` membership (deactivate the owner row in the same step);
  3. `PLATFORM_ADMIN_EMAIL` goes only into Vercel/GitHub environments (founder step when SP3 lands).

## Standing founder rules
- "Vercel plan is hobby; this is not paid work. Continue and auto-merge without approval. Only ask
  clarifying questions, or ask the founder for manual steps you cannot do."
- Secrets never enter a chat, a transcript or a repo. Never print or decrypt env values. Secrets go only
  in Vercel, GitHub environments or Supabase Vault.
- The platform admin e-mail never appears in the public app repo. Run logs show only masked ids and
  8-character prefixes.
- Facts come only from `knowledge/`; `[unverified]` lines are not facts.
- **Rule A:** events, not polling. **Rule B:** no silent fallbacks; the only pre-store default is
  `FIRST_PAINT_VENUE_SETTINGS`, plus the sanctioned `uscita` default above.
- Test first; never skip or weaken a test; no re-runs to hide flakes.
- Outside parties: research first, then ask one thoughtful question per party.
- Recorded decision: the shared kitchen phone's PIN field keeps `autocomplete="off"`, with paste allowed (2026-11-14).

## Founder updates 2026-11-28
- Single tables added as bookable with seats: DONE.
- Booking link in Google Business Profile: later, after the website launch is settled.
- Luca's authenticator: when he can (until then he has no TOTP).
- Old network secret for `wkdoksxztjjcecglalii.supabase.co`: leave it (a different project from live `wjowhjsfpcdykxwgjipq`; no impact).

## Waiting on the founder (details in `founder-steps.md`)
- FS-2: the console domain in Vercel, plus `CONSOLE_HOST` and `APP_ORIGIN` (Production).
- FS-1: the GitHub `platform-ops` environment.
- The SP0 hosted slot. The production Supabase project (go-live A1).
- Dispatch "Dashboard timing on Slow 4G (staging)" with `base_url` https://osteria-dei-rossi-app.vercel.app,
  then quote p50/p95/max on #182; p95 above 2 s means stop and fix.
- GitHub billing (DigiAlto-Ops checks get no runner); tenant #1's legal name; approve the «da approvare»
  strings; confirm the Q-U1 "Non preparato" default; the Costì logo files (CB11).
