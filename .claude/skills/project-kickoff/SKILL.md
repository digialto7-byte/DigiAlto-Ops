---
name: project-kickoff
description: Use when a new software project starts from a PRD, brief or spec (client web app, platform, integration, automation, or an internal DigiAlto tool) - captures the PRD, produces a reviewed project plan with milestones, and sets up the project's own repo with DigiAlto's engineering kit so features can be built with /feature.
---

# Project kickoff (from a PRD)

Work happens in two places: **DigiAlto-Ops** (facts, PRD, plan, decisions, status) and the
**project repo** (code). This skill covers everything up to the first feature.

## Steps
1. **Client.** Identify the slug. New client → run `client-intake` first. DigiAlto's own
   projects use the slug `digialto`.
2. **Capture the PRD.** Save it unchanged as
   `knowledge/clients/<slug>/sources/prd-<YYYY-MM-DD>.md` (a large or confidential file stays
   out of git; list where it lives under "Sources"). Copy the facts the build depends on
   (domains, integrations, accounts, deadlines, budget, data handled) into `profile.md`,
   each marked `[unverified]` with `(src: sources/prd-...)`. Never invent missing ones; list them
   under "Open questions".
3. **Folder:** `clients/<slug>/deliverables/<YYYY-MM-DD>-kickoff/`.
4. **Project plan:** `architect` → `project-plan.md` from `templates/tech-plan.md`, scoped to
   the whole PRD: stack choice with rejected alternatives, architecture, data model, security
   and privacy, and a **milestone list** where every milestone is one `/feature` run (goal,
   scope, acceptance tests). Stack decisions that will outlive the project get an ADR
   (`adr-NNN-<topic>.md`). If commercial terms are needed, run the `proposal` skill too.
5. **Check the plan:** `code-reviewer` is for code, so the lead checks the plan against the PRD
   (every requirement mapped to a milestone or listed as out of scope) and the
   `security-checklist`. Anything client-facing (proposal) goes through `reviewer`.
6. **Stop for the founder.** Report the plan, the ADRs, the open questions and the
   `[unverified]` facts. Do not create the repo or start building until the founder approves
   the plan and confirms the facts.
7. **Create the project repo** (after approval; ask before creating anything on GitHub):
   - The founder creates an empty repo (Claude's GitHub access may not allow creating one), e.g.
     `digialto7-byte/<slug>-<project>`, and it is attached to the session.
   - `python3 scripts/bootstrap_project.py <path-to-clone>`, then copy unchanged `docs/prd.md`
     (the PRD), `docs/plans/project-plan.md` (the approved plan) and `docs/adr/`.
     Branch `chore/bootstrap`, commit, push, open a draft PR.
   - This repo's write hook blocks writes outside DigiAlto-Ops, so draft the hand-written files
     (`CLAUDE.md` stack and commands, `docs/client-facts.md` approved facts only,
     `.env.example` env var names with fake values) in `project-repo-handoff.md` in the kickoff
     folder. A session on the project repo applies it. Never commit secrets.
8. **Record it.** `clients/<slug>/context.md`: phase `build`, the repo URL, the milestone list as
   open items, decisions with dates. Append to `log/runs.jsonl`.
9. **Hand over.** Tell the founder: "Open a Claude Code session on `<repo>` and run
   `/feature <milestone 1>`." Each milestone: one session or branch, one draft PR.

## During the build
- Status, decisions and scope changes are recorded in DigiAlto-Ops (`context.md`), code
  changes in the project repo.
- A PRD change goes through steps 2 and 4 again (new source file, updated plan), then the
  affected milestones.
- Mistakes worth remembering → `capture-lesson` (`/learn`) in DigiAlto-Ops, so the next
  project's agents improve too.
