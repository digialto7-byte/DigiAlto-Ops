---
name: software-feature
description: Use to build a feature, fix or integration in a software project (client web app, API, automation, plugin, or this repo's scripts) - runs architect, tdd-guide, build-error-resolver (on red builds), the verification loop and code-reviewer in order, with written hand-offs.
---

# Software feature

## Preconditions
- The code lives in a git repository on its own branch (never commit straight to `main`).
  Client app repos start from the kit: `python3 scripts/bootstrap_project.py <dir>`.
- If it is client work: the client exists in `knowledge/clients/<slug>/` and the facts the
  feature depends on (domains, integrations, accounts) are verified.

## Steps
1. **Folder** for the paperwork (plans, hand-offs, reports):
   `clients/<slug>/deliverables/<YYYY-MM-DD>-<feature>/` for client work, or
   `tmp/<feature>/` for internal work. Code stays in the project repo.
2. **Plan:** `architect` → `tech-plan.md` (skip only for a change of a few lines with an
   obvious test). If the plan adds a paid service, a new dependency with a non-permissive
   licence, or changes data handling, stop and get the founder's OK first.
3. **Build:** `tdd-guide` with `tech-plan.md`, one plan step at a time.
4. **Red build/CI:** `build-error-resolver` with the failing command and its output.
5. **Verify:** `verification-loop` section B. Must be READY except for the diff review.
6. **Review:** `code-reviewer` on the diff (`git diff main...HEAD`).
   - FAIL → send each finding to `tdd-guide` (or `build-error-resolver` for build-only
     issues), then re-verify and re-review. Maximum two fix rounds, then stop and report.
7. **Hand-offs:** between steps, write a hand-off from `templates/handoff.md` into the folder
   (`handoff-<from>-to-<to>.md`) and give the next agent its path.
8. **Close:** update `clients/<slug>/context.md` (client work), append to `log/runs.jsonl`,
   and if anything surprised you, run `capture-lesson`.
9. **Report:** what changed (files, PR link), verification table, reviewer verdict, open
   questions.

## Done means
Plan steps complete, verification READY, code-reviewer PASS, tests prove the new behaviour,
and the PR is open as a draft for the founder.
