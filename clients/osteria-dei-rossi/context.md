---
slug: osteria-dei-rossi
updated: 2026-10-21
---

# Osteria Dei Rossi — engagement context

Facts live in [[knowledge/clients/osteria-dei-rossi/profile]]. This file tracks the work.

## Status
- Phase: build (plan provisionally approved; repo https://github.com/digialto7-byte/osteria-dei-rossi-app bootstrapped)
- Next milestone: apply the repo hand-off, then `/feature M0` once Q9–Q11 are answered
- Due: Sprint 1 starts 2026-11-03 per the PRD roadmap [unverified]

## Decisions
- 2026-10-21 — Client onboarded as `osteria-dei-rossi`; client-facing language Italian (by: founder)
- 2026-10-21 — Osteria Digitalization PRD captured as `sources/prd-2026-10-21.md`; it supersedes the earlier monitoring and anti-fraud scope (by: founder, via PRD)
- 2026-10-21 — Project plan provisionally approved ("go ahead for now"); open questions and ADRs (`proposed`) still pending (by: founder)
- 2026-10-21 — Q9 (accounts): use DigiAlto's own Vercel team (`digialto7-5548s-projects`) and Supabase organization (`digialto7-byte's Org`, Free plan), the ones connected to Claude (by: founder)
- 2026-10-21 — Supabase staging project created: "Osteria Dei Rossi - Staging", ref `wjowhjsfpcdykxwgjipq`, region `eu-central-1` (Frankfurt), Free plan, $0. No schema yet (M0 applies migrations). Production project to be created before go-live (M25); Free plan has no daily backups, which the PRD requires for production (Q10) (by: lead)
- 2026-10-21 — Project repo: private `digialto7-byte/osteria-dei-rossi-app` approved. Claude could not create it (GitHub integration returned 403); the founder creates the empty repo and gives the Claude GitHub App access (by: founder)

## Open items
- [ ] Founder confirms profile.md facts and removes `[unverified]` markers
- [ ] Founder approves `deliverables/2026-10-21-kickoff/project-plan.md` (47 milestones: MVP M0–M25, Phase 2 M26–M40, Phase 3 M41–M46) and ADR-001 to ADR-005 (all `proposed`)
- [ ] Founder answers the plan's open questions Q1–Q29; Q9 (account ownership, Vercel Hobby is non-commercial only), Q10 (plans) and Q11 (code/IP ownership) block M0
- [ ] Founder signs off on the plan's departures from the PRD: Next.js 16, pg_cron instead of Vercel Cron, new Supabase keys, cost columns split out, peppered PIN auth
- [ ] Founder decides Q16 (chef sees € costs, or percentages only = V6; lead recommends V6) and Q24 (which MVP milestones may slip past go-live)
- [x] Project repo created by the founder: https://github.com/digialto7-byte/osteria-dei-rossi-app; bootstrap kit + PRD + plan + ADRs pushed on `chore/bootstrap`, draft PR digialto7-byte/osteria-dei-rossi-app#1 (2026-10-21)
- [x] Vercel project `osteria-dei-rossi-app` (`prj_FpiKBSYVplbOXtGRiZUpFwB56Hqq`) created by the founder in team `digialto7-5548s-projects`, linked to the GitHub repo; Vercel Authentication on all deployments except custom domains (2026-10-21)
- [x] Vercel Framework Preset set to Next.js by the founder (2026-10-21); functions pinned to `fra1` in `vercel.json` in M0. Claude's Vercel connector is read-only (403 on create and update), so the founder sets the env vars M0 lists
- [ ] 2026-10-21: lessons from this kickoff, founder-approved diffs, open as draft PRs for the founder to merge: hook allows `.env.example` (digialto7-byte/DigiAlto-Ops#4, code-reviewer PASS) and project-kickoff step 7 hands repo files to a project-repo session (digialto7-byte/DigiAlto-Ops#5)
- [ ] 2026-10-21: project session `session_01TAMK1utM7VhofwoMRfmEdV` applies the repo hand-off on `chore/bootstrap` (PR osteria-dei-rossi-app#1) and runs `/feature M0` on `feat/m00-skeleton`; it owns those PRs. Lead records its results here
- [ ] Q10: Vercel plan for a paid client project (Hobby is non-commercial only) and Supabase Pro for production backups
- [ ] Q11: code/IP ownership (multi-tenant product vs client-owned code)
- [ ] First session on the project repo applies `deliverables/2026-10-21-kickoff/project-repo-handoff.md` (CLAUDE.md, client-facts, .env.example)
- [ ] Then: `/feature M0` in the project repo

## Deliverables
- 2026-10-21 — kickoff (project plan, ADR-001–005, lead check) — `deliverables/2026-10-21-kickoff/` — internal, lead check PASS (one security gap fixed: magic-link redirect allow-list), check_deliverable 0 FAIL
