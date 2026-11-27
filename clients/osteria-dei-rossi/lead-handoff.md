---
slug: osteria-dei-rossi
updated: 2026-11-19
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

## Sessions (2026-11-19)
| Session | Id | State |
|---|---|---|
| Lead | V3 `session_018fKcCmuFkjv4yhpCbKERjo` | Talks to the founder; merges |
| SP2 PR 3 builder | `session_018fKcCj1C7X1BQWLt39SYjK` (Sonnet, started 2026-11-27) | Switcher UI + AT7, stacked on #217 |
| SP2 builder 2 | `session_018fKcCkp9AHjyKWBYmdgSAK` (Opus) | Retired 2026-11-27: PR 2 #217 approved by the lead at 676ab591 (auth_member_elsewhere fix), merges after SP0 hosted T1.H/T3.H |
| SP2 builder 1 | `session_018fKcCn5E3P3X8YGJrsVi2W` | Retired 2026-11-27 (context limit): plan #215 merged, PR 1 #216 ready |
| Comanda PR 4 builder | `session_018fKcCk6qy2mws1vqGWgjke` (Opus) | Retired 2026-11-26: #214 merged |
| Retired 2026-11-19 | lead V2 `session_018fKcChwys4xfgaHhAfdmR7`, comanda builder PRs 1–3 `session_018fKcCjj4XgXUZJ1LNuyC3v` (context 528k), opening stock builder `session_018fKcCmFm2N3cjcMr9Paifu` | Work merged or in this file. The founder may archive them (the lead's archive call is blocked by permissions) |
| Retired 2026-11-18 | lead V1 `session_018fKcCjkR8ikx6DEmuZJMBE` and others | See git history of this file |

The new lead's first step: `get_session` (no id) for its own id, then start the PR 4 builder (brief below).

## How to merge an app PR
0. The lead's GitHub tools only reach repos attached to its session: call `add_repo` (owner `digialto7-byte`, repo
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

## State on 2026-11-19 (early morning)
Merged by lead V2 (lead read of every migration, CI green on each head):
- **Opening stock server complete:** #208 (PR 2: tables, draft, confirm), #209 (PR 3: reversal, cost fallback, reconciliation),
  #210 (PR 4: API routes, Home step via `opening_stock_summary` for owner/admin only, ADR-048 decision 9 = Q2 option A).
- **Comanda per uscita PRs 1–3:** #211 (tests/docs, 389 UTC, M5 ruling and m21 addendum in the plan), #212 (M1–M5: uscita column,
  `uscita_call`, order entry, fire/call, not_prepared void, open-session backfill, default 1 with the Rule B guard in 423),
  #213 (M6: kitchen board by uscita; legacy kitchen bodies get 22023; runbook: deploy outside service, reload kitchen devices).
- Records for #208–#213 are in `context.md` and `runs.jsonl`.

**Build order (superseded 2026-11-26: SP2–SP7 come right after #214):** comanda PR 4 (steps 17–19 + docs) → the screens in ONE Sonnet session (opening stock PR 5 = steps 20–25 incl. the
§3.12 draft-race note; comanda PR 5 = steps 15–16 kitchen card + Playwright, plus the PR 4 UI; known UI notes: a queued drink without a
course shows as 1; a legacy segue edit moves 3→2) → P2-4 alert rules (2026120623*, pgTAP 397–406) → SP2.

**Comanda PR 4 builder brief** (paste into a fresh Opus session on branch `feat/comanda-uscite-4`; report to the lead by id):
Branch `feat/comanda-uscite-4`, head ac6fc4afc22632645002dbd904dbc216dfac802a, WIP draft PR #214 (the WIP commit lists the red tests).
- Done test-first: step 17 M7 `20261206220600_uscita_tables_order_view.sql` (pgTAP 428, 12 green); step 18 M8
  `20261206220700_uscita_close.sql` (429, 7 green); step 19 TS (tablesListOutput/orderViewOutput.uscite, uscita_waiting → 422 with
  lineIds, it/en messages with the Italian one «da approvare», overlay-tables.ts offline tile uscite: null); config pins
  (uscite-preserves, close_session_at UPDATE rule with self-tests, repin_newest.py). Vitest 909 files / 15 904 tests green.
- Still red, to re-pin. Inside §3.15: 179 t2/t20, 222 t15/t17, 229 t9/t10/t13, 240, 286, 296 t2/t18, 389 t7, 367 t3. Outside §3.15
  (approved): 157 t4, 166 t8, 214 t7, 301 t2/t17, 327 t2, 359 t8, 367 t2/t7/t8/t17/t20–t22.
- Then step 23: one code-review round, mark ready, report CI with the full head sha and both migrations' full text.
- Left to the screens session (B2, step 20): the client mirror `unsentLines` (src/lib/orders/order-view.ts) still skips segue drafts.
- Local setup: race script needs PGHOST=127.0.0.1 PGPORT=54322 PGUSER=postgres PGPASSWORD=postgres; start dockerd with setsid;
  `supabase db reset` after any Playwright run.

Lead rulings in force for PR 4: re-pin each moved pin with a "re-pinned on purpose by comanda-uscite (step N; was …)" comment, list them
under "Pins outside §3.15" in the PR body and add them to plan §3.15 in a docs commit, together with PR 3's e2e/kitchen.spec.ts and
e2e/simulation/service.spec.ts; add `app.session_uscite` to the step-17 `p27_objs` insert; in 367 rename each changed test to state the new
rule ("a segue draft counts in unsentCount", §3.10) and add one positive case that fails under the old rule.

**Small items:** CronJob parity in `tests/parity/drift-keys-sql-parity.test.ts`; `price_variance_pct` as a typed, audited setting after
P2-4; remove "segue" at least 30 days after go-live.

**Records:** GitHub Actions doesn't run in this repo (billing); merge on a clean local `python3 scripts/check_repo.py`.

## Founder decisions 2026-11-26 (plan: `deliverables/2026-11-26-costi-next-phase/plan.md`)
- V5 (own booking host) is a paid feature, built after SP5. Vercel stays Hobby until tested; upgrade plan before any sale.
- Resend: one DigiAlto account for all tenants; From the venue's name on `mail.<costi-domain>`, Reply-To the venue.
- New asks: Costì admin (= SP2–SP7), tenant brand kit from client websites (feeds SP9), and a tenant-scoped Claude
  connector (MCP + OAuth, read-only first, behind an SP5 switch). Q1–Q3 answered: Costì admin (SP2–SP7) right after #214; the Claude connector is planned after SP5;
  the app host is `app.digialto.com` (console `console.digialto.com`); digialto.com DNS is managed at Bluehost.

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

## Waiting on the founder (details in `founder-steps.md`)
- FS-2: the console domain in Vercel, plus `CONSOLE_HOST` and `APP_ORIGIN` (Production).
- FS-1: the GitHub `platform-ops` environment.
- The SP0 hosted slot. The production Supabase project (go-live A1).
- Dispatch "Dashboard timing on Slow 4G (staging)" with `base_url` https://osteria-dei-rossi-app.vercel.app,
  then quote p50/p95/max on #182; p95 above 2 s means stop and fix.
- GitHub billing (DigiAlto-Ops checks get no runner); tenant #1's legal name; approve the «da approvare»
  strings; confirm the Q-U1 "Non preparato" default; the Costì logo files (CB11).
