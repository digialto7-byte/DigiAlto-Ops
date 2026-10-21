---
slug: osteria-dei-rossi
updated: 2026-10-21
---

# Osteria Dei Rossi — engagement context

Facts live in [[knowledge/clients/osteria-dei-rossi/profile]]. This file tracks the work.

## Status
- Phase: build (plan provisionally approved; repo https://github.com/digialto7-byte/osteria-dei-rossi-app bootstrapped)
- Next milestone: `chore/deploy-staging` (migrations to staging via CI), then M1 (master data), in the project session
- Done: M0 merged 2026-10-21 (osteria-dei-rossi-app#2, all 12 acceptance tests green, code-reviewer PASS)
- Due: Sprint 1 starts 2026-11-03 per the PRD roadmap [unverified]

## Decisions
- 2026-10-21 — Client onboarded as `osteria-dei-rossi`; client-facing language Italian (by: founder)
- 2026-10-21 — Osteria Digitalization PRD captured as `sources/prd-2026-10-21.md`; it supersedes the earlier monitoring and anti-fraud scope (by: founder, via PRD)
- 2026-10-21 — Project plan provisionally approved ("go ahead for now"); open questions and ADRs (`proposed`) still pending (by: founder)
- 2026-10-21 — Q9 (accounts): use DigiAlto's own Vercel team (`digialto7-5548s-projects`) and Supabase organization (`digialto7-byte's Org`, Free plan), the ones connected to Claude (by: founder)
- 2026-10-21 — Supabase staging project created: "Osteria Dei Rossi - Staging", ref `wjowhjsfpcdykxwgjipq`, region `eu-central-1` (Frankfurt), Free plan, $0. No schema yet (M0 applies migrations). Production project to be created before go-live (M25); Free plan has no daily backups, which the PRD requires for production (Q10) (by: lead)
- 2026-10-21 — Q10 (Vercel): stays on Hobby; this is not paid work, so Hobby's non-commercial limit does not apply (by: founder)
- 2026-10-21 — Working mode: Claude merges its own PRs once CI is green and the reviewer/code-reviewer passed, without waiting for founder approval; Claude asks only clarifying questions and for manual tasks it cannot do (by: founder)
- 2026-10-21 — M0 open questions, lead defaults under the founder's working mode (by: lead):
  - Q-A: migrations reach staging only through a CI `supabase db push` job, not by hand.
  - Q-B: Free plan, so the 30-day session timebox is enforced in the app (M11).
  - Q-C: TOTP MFA for owner/admin in M11, if Free offers it.
  - Q-D: no Sentry yet.
  - Q-E: Vercel Production points at staging until M25.
  - Q-F: one tenant per login until multi-venue (M43).
  - Q-G: Supabase built-in mail sender on staging; Resend SMTP in M6.
  - Cross-device magic links: an email OTP code, to be designed in M11.
- 2026-10-21 — Project repo: private `digialto7-byte/osteria-dei-rossi-app` approved. Claude could not create it (GitHub integration returned 403); the founder creates the empty repo and gives the Claude GitHub App access (by: founder)

## Open items
- [ ] Founder confirms profile.md facts and removes `[unverified]` markers
- [ ] Founder approves `deliverables/2026-10-21-kickoff/project-plan.md` (47 milestones: MVP M0–M25, Phase 2 M26–M40, Phase 3 M41–M46) and ADR-001 to ADR-005 (all `proposed`)
- [ ] Founder answers the plan's open questions Q1–Q29 (Q9 answered; Q10 answered for Vercel, Supabase Pro for production backups still open before M25; Q11 open, not blocking M0)
- [ ] Founder signs off on the plan's departures from the PRD: Next.js 16, pg_cron instead of Vercel Cron, new Supabase keys, cost columns split out, peppered PIN auth
- [ ] Founder decides Q16 (chef sees € costs, or percentages only = V6; lead recommends V6) and Q24 (which MVP milestones may slip past go-live)
- [x] Project repo created by the founder: https://github.com/digialto7-byte/osteria-dei-rossi-app; bootstrap kit + PRD + plan + ADRs pushed on `chore/bootstrap`, draft PR digialto7-byte/osteria-dei-rossi-app#1 (2026-10-21)
- [x] Vercel project `osteria-dei-rossi-app` (`prj_FpiKBSYVplbOXtGRiZUpFwB56Hqq`) created by the founder in team `digialto7-5548s-projects`, linked to the GitHub repo; Vercel Authentication on all deployments except custom domains (2026-10-21)
- [x] Vercel Framework Preset set to Next.js by the founder (2026-10-21); functions pinned to `fra1` in `vercel.json` in M0. Claude's Vercel connector is read-only (403 on create and update), so the founder sets the env vars M0 lists
- [x] 2026-10-21: lessons from this kickoff, founder-approved diffs, merged by Claude under the founder's auto-merge rule: hook allows `.env.example` (digialto7-byte/DigiAlto-Ops#4, code-reviewer PASS) and project-kickoff step 7 hands repo files to a project-repo session (digialto7-byte/DigiAlto-Ops#5)
- [x] 2026-10-21: bootstrap (osteria-dei-rossi-app#1) and M0 (osteria-dei-rossi-app#2) built by the project session `session_01TAMK1utM7VhofwoMRfmEdV` and merged by the lead after checking them.
  - M0 delivers Next.js 16.4 + Supabase tenancy/RLS baseline, owner/admin magic-link login, CI (lint, types, unit, pgTAP, Playwright), `vercel.json` in `fra1`.
  - All 12 acceptance tests pass; code-reviewer PASS on round 3.
  - Vercel Preview env vars are set; nothing has been applied to the staging DB yet.
- [ ] Founder (manual): in Vercel `osteria-dei-rossi-app`, add the Production env vars `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` with the same staging values as Preview (Q-E). Until then, Production builds fail by design.
- [ ] Founder (manual, once `chore/deploy-staging` is merged): add the GitHub `staging` environment secrets that PR lists, then set the staging Auth settings in the Supabase dashboard:
  - Custom Access Token hook = `app.custom_access_token_hook`;
  - "Allow new users to sign up" off, with the Email provider still on;
  - redirect URLs = the app origins + `/api/auth/callback**`.
- [ ] Q10 remainder: Supabase Pro (daily backups) for the production project, needed before go-live (M25)
- [ ] Q11: code/IP ownership (multi-tenant product vs client-owned code); not blocking the build

## Deliverables
- 2026-10-21 — kickoff (project plan, ADR-001–005, lead check) — `deliverables/2026-10-21-kickoff/` — internal, lead check PASS (one security gap fixed: magic-link redirect allow-list), check_deliverable 0 FAIL
