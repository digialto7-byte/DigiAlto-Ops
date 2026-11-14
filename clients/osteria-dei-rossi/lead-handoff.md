---
slug: osteria-dei-rossi
updated: 2026-11-14
---

# Costì / Osteria Dei Rossi: lead hand-off

Internal. A short brief for a new lead chat. The full history is in [[context]]
(`clients/osteria-dei-rossi/context.md`). Facts are in `knowledge/clients/osteria-dei-rossi/profile.md`
and `knowledge/agency/products/costi/brand.md`.

## What the project is
- **Costì**: a DigiAlto SaaS back office for restaurants (later bars and coffee shops). Osteria Dei
  Rossi is tenant #1. App repo: `digialto7-byte/osteria-dei-rossi-app` (Next.js 16 on Vercel, Supabase EU).
- Staging: Supabase `wjowhjsfpcdykxwgjipq`, Vercel project `osteria-dei-rossi-app`. A push to `main`
  runs CI and then `deploy-staging` (`supabase db push`).
- Phase 1 code is complete. Go-live waits on the founder's manual steps in the app repo's
  `docs/go-live/checklist.md` (BRAND-1/BRAND-2 added for Costì).

## Who does what
| Session | Role |
|---|---|
| Lead chat (you) | Plans with the founder; owns the build queue and the founder's step list (`founder-steps.md`); reads every app PR for security; merges; records in DigiAlto-Ops |
| Old build session `session_01TAMK1utM7VhofwoMRfmEdV` | Finishes #88 and #89, writes a builder hand-off, then retires |
| New builder (created by the lead) | One app milestone at a time with `/feature`, code-reviewer and CI; opens PRs; never merges; reports to the lead (`@parent`) |
| UX/UI chat (opened by the founder) | Flows, screen specs and Figma designs in the Costì brand; docs-only PRs in the app repo (`docs/ux/`); no app code. Its specs go to the builder through the lead, and its screens and design system feed go-to-market |
| Go-live ops chat (opened by the founder) | Walks the founder through `founder-steps.md` and checks each step read-only; no code, no app merges |
| Previous lead `session_01A5hMMzpWmqjyPgSAYpD5kG` | Retired on 2026-11-14 after this hand-off |

Only **one** session writes app code at a time (the builder), so migrations and merges never collide.

### Start-up steps for the new lead
1. Call `get_session` (no id) for your own id. Send it to the old build session: "I am the lead
   from now on; send reports to <id>." The previous lead has told it to expect this message.
2. Merge #88 and #89 once they are green (procedure below).
3. Ask the old build session for a builder hand-off as a docs-only app PR,
   `docs/handoff/builder.md`. It covers:
   - branch conventions and how CI is run;
   - the known flaky areas and their diagnostics;
   - local limits (no Docker);
   - the open plans and the next milestone.
   Merge it.
4. Create the new builder with `create_session`:
   - same environment, `source_url` = the app repo, title "Costì builder";
   - prompt: read `CLAUDE.md` and `docs/handoff/builder.md`, then wait for the lead's first assignment.
   Then tell the old build session it is retired, and record the new builder's id here.
5. Keep the build queue with the founder: the pre-go-live features first, then the queue below.
   Hand the builder one item at a time.

## Standing founder rules
- "Vercel plan is hobby; this is not paid work. Continue and auto-merge without approval. Only ask
  clarifying questions, or ask the founder for manual steps you cannot do."
- Never put secrets in chat or a repo. Never print or decrypt env values. Secrets go only in Vercel,
  GitHub environments or Supabase Vault.
- The platform admin e-mail never appears in the public app repo (only in this private repo and in
  deployment settings as `PLATFORM_ADMIN_EMAIL`).
- Facts come only from `knowledge/`. Lines marked `[unverified]` are not facts.

## How to merge an app PR
1. Wait for the build session's "green SHA" message. Check it yourself: CI on that head is green.
2. Fetch it fresh: `git fetch origin +refs/heads/main:refs/remotes/origin/main refs/pull/<n>/head:refs/remotes/pr<n>`
   and diff against **current** `origin/main` (`git diff origin/main...pr<n>`). Never read a stale
   local checkout. That mistake was made once, on 2026-11-14.
3. Do the security read for the areas touched:
   - new migrations sort after main's newest;
   - every SECURITY DEFINER has `search_path=''` and checks the role first;
   - RLS and `tenant_id` on every table, and nothing new for `anon`;
   - no secret key outside `/api/cron/*`, `scripts/` and `src/server/staff-auth/privileged.ts`;
   - CSP, `proxy.ts`, `sw.js` and `next.config.ts` changes get extra care.
4. If the PR is a draft, set it ready (`update_pull_request draft=false`). Then merge with a merge
   commit and `expectedHeadSha` set to the **full 40-character** SHA.
5. Tell the build session it is merged and ask it to watch main CI and deploy-staging.
6. Record the merge in `context.md` and `log/runs.jsonl` with a DigiAlto-Ops PR. GitHub Actions is
   billing-blocked here, so merge that PR on a clean local `python3 scripts/check_repo.py`.

CI failures: the lead cannot re-run jobs (403). The build session can, once per failure, and only to
confirm a failure that isn't the PR's. "Flake" is not a root cause. Ask for the trace tail first.

## In flight on 2026-11-14 (about 01:00Z)
- **#88 Costì product brand** (`feat/costi-product-brand`, head 07efe4b):
  - CB1–CB10 done; no migration, dependency, proxy or sw change; code-reviewer PASS.
  - The mfa.spec timeout fix (TOTP step wait, 60 s on one test) passed.
  - counts.spec failed at 00:59 Rome. Cause: the test seeded its invoice with the calendar date
    while the report defaults to the business date (cut-off 02:00). It is not in the brand diff.
  - Next: the build session re-runs the failed job after 01:05Z, comments on #88, then sends the
    green SHA. Then do the read and merge.
- **#89 test fix** (`fix/e2e-seed-business-date`, head 62c70df):
  - test-only; seeds with the business date read through the owner's session;
  - pgTAP 351 guards the app behaviour; code-reviewer PASS; CI in progress.
  - Next: the read and merge, then record #88 and #89.
- **CB11**: swap in the founder's own Costì logo files when they arrive. The placeholders are in
  `knowledge/agency/products/costi/assets/`.

## Build queue (plans in the app repo `docs/plans/`)
The founder said on 2026-11-14 that more features are to be built **before** go-live (12 January).
Agree the order with the founder. Candidates:
- UX redesign phases (`2026-11-13-ux-strategy.md`).
- SaaS platform SP0–SP13 (`2026-11-13-platform-saas.md`, ADR-037–040, FD1–FD36).
- Phase 2 P2-2 to P2-7 (`2026-11-11-phase2-scope.md`), including C18 "esaurito" on the public menu
  (needs the menu site's source location) and P2-7 supplier XML import.
- Google booking (GBP-1; the founder supplies the Google link).
- Fiscal direction (`deliverables/2026-11-13-fiscal-feasibility/`): Costì stays the back office next
  to an approved RT (the RCH LDP03). No till of our own until a software RT is approved.

## Waiting on the founder
The full list, grouped and numbered, is in `founder-steps.md` (next to this file). Keep it current:
tick the steps the founder reports done, add the new ones that PRs bring, and tell the founder about
blockers. Top items:
- the production Supabase project and settings, the Vercel production env, and the GitHub
  `production` and `production-backup` environments;
- the custom domain and Resend;
- the client facts and allergens with the chef, and the per-etto dishes;
- the Costì logo files (CB11 / BRAND-1);
- GitHub billing.
