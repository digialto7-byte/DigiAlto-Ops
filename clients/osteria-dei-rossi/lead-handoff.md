---
slug: osteria-dei-rossi
updated: 2026-11-18
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

## Sessions (2026-11-18)
| Session | Id | State |
|---|---|---|
| Lead | the newest "Costì Lead" chat | Talks to the founder; merges |
| Opening stock builder (PRs 2–4) | `session_018fKcCmFm2N3cjcMr9Paifu` | Active, Opus. Reports to the lead by id |
| Retired 2026-11-18 | lead V1 `session_018fKcCjkR8ikx6DEmuZJMBE`, builder `…Cheg3sDvethN84LxK5`, UX screens builder `…CkQ5oUYS4RbwBx1AE8`, UX/UI designer `…CiZW2Z9V7NyYmVkuJb`, go-live ops `…ChxwQq79i9fYEAy5qD` | Their work is merged or in this file |

The new lead's first step: `get_session` (no id) for its own id, then message the opening stock
builder: "I am the lead from now on; send reports to <id>."

## How to merge an app PR
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

## State on 2026-11-18 (evening)
Merged since the records (#168–#207, not yet in `context.md`/`runs.jsonl`):
- SP1 per-tenant config complete: VAT rates, close codes, locale, `tenant_settings`, PATCH
  `/api/settings/venue`, a venue-neutral extraction prompt.
- The Costì re-skin, complete (P2a–P2j); the guest mail restyle; PIN fixes S1–S3; line-search Rule B
  fixes; CI stability fixes; the Next 16.4.6 bump.
- Plans: comanda per uscita (#205, #206), opening stock, P2-4 alert rules.
- **#204**: Scontrino preselected when closing a table (the tenant's first receipt type).
- **#207**: opening stock PR 1 (enum `opening`, `stock_movement_opening_ck`).

**Build order:** opening stock PRs 2–4 → comanda per uscita PRs 1–4 → the screens (opening stock PR 5,
comanda PR 5) in a Sonnet session → P2-4 alert rules (2026120623*, pgTAP 397–406) → SP2.

**Opening stock** (`docs/plans/2026-11-18-opening-stock.md`; range 2026120621*, pgTAP 407–416, ADR-048):
- PR 2: steps 5–8. PR 3: steps 9–11. PR 4: steps 12–19. PR 5 (UI): steps 20–25.
- Approved for PR 2: re-pin the audit-CHECK md5s and purge-list pins outside §3.11 on purpose
  (the reservations precedent), including `check-constraint-union.test.ts:105` → 20261206210200,
  listed in the PR body under "Pins outside §3.11" and added to §3.11 in a docs commit.

**Comanda per uscita** (`docs/plans/2026-11-18-comanda-uscite.md`; range 2026120622*, pgTAP 417–430, ADR-049):
- PR 1 is on branch `feat/comanda-uscite-1` (head eabc8dee, pushed, no PR yet): golden test 417, cross-tenant
  test 418, and the review fixes.
- Before opening PR 1:
  - a separate commit adding `set local timezone='UTC'` to 389, with no pin change;
  - a docs commit with the lead's M5 ruling (below) in plan step 8, §3.8 and R1. It also fixes the
    "G/417 unchanged" contradiction and adds the m21 addendum (next point).
- **m21 addendum**: `docs/plans/2026-10-30-m21-bill-close.md` lines ~300 and ~383, under each: "Addendum
  2026-11-18: the founder ruled the tenant's first receipt type (Scontrino for tenant #1) is preselected;
  see #204." Don't edit the originals.
- **M5 ruling (option a):**
  - `order_line.uscita set default 1`, keeping the NOT VALID check, plus a `comment on column`;
  - the one sanctioned Rule B exception for that column, so a new pgTAP guard must prove no app writer
    relies on it:
    - INSERT on `order_line` is false for authenticated and anon (verified today);
    - a `pg_proc` scan of every public/app function that inserts into `order_line` checks that it names
      `uscita`, with a positive control so an empty scan can't pass;
    - each writer refuses a null `uscita`;
  - PR 2 also carries the step 10 sync strict-parse fix and re-pins the 359:94 `demo_purge_tables` md5.

**Small items:**
- CronJob parity in `tests/parity/drift-keys-sql-parity.test.ts`;
- `price_variance_pct` as a typed, audited setting, after P2-4;
- remove "segue" at least 30 days after go-live.

**Records:** update `context.md` and `log/runs.jsonl` for #168–#207. GitHub Actions doesn't run in this
repo (billing), so merge on a clean local `python3 scripts/check_repo.py`.

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
