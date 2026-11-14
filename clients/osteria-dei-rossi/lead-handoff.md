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
| Lead chat (you) | Plans with the founder, coordinates the build session, reads every PR for security, merges, records in DigiAlto-Ops |
| Build session `session_01TAMK1utM7VhofwoMRfmEdV` | Builds in the app repo with `/feature`, code-reviewer, CI; opens PRs; never merges; reports to the lead with `send_message` |
| Previous lead `session_01A5hMMzpWmqjyPgSAYpD5kG` | Retired on 2026-11-14 after this hand-off |

On start, the new lead calls `get_session` (no id) for its own session id and sends it to the build
session: "I am the lead from now on; send reports to <id>." The previous lead has told the build
session to expect that message.

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

## Queue after go-live (plans in the app repo `docs/plans/`)
- UX redesign phases (`2026-11-13-ux-strategy.md`).
- SaaS platform SP0–SP13 (`2026-11-13-platform-saas.md`, ADR-037–040, FD1–FD36).
- Phase 2 P2-2 to P2-7 (`2026-11-11-phase2-scope.md`), including C18 "esaurito" on the public menu
  (needs the menu site's source location) and P2-7 supplier XML import.
- Google booking (GBP-1; the founder supplies the Google link).
- Fiscal direction (`deliverables/2026-11-13-fiscal-feasibility/`): Costì stays the back office next
  to an approved RT (the RCH LDP03). No till of our own until a software RT is approved.

## Waiting on the founder
- Costì logo files (CB11); approval of the placeholders (BRAND-1); hosted e-mail settings (BRAND-2).
- Go-live checklist manual steps: custom domain, Resend sending domain, privacy text and contact,
  booking hours, `SUPABASE_SECRET_KEY` in the GitHub `production-backup` and `staging` environments.
- Per-etto dishes, prices and reference weights; what the number 01358391 is; the disclosure text.
- Questions for the accountant (commercialista) and RCH; a trademark check on "Costì".
