---
name: verification-loop
description: Use before calling any work done - runs DigiAlto's automatic quality gates on a client deliverable folder (validators, deterministic content checks, 360px viewport) or on a software project (build, types, lint, tests, security, diff review), and reports a READY / NOT READY table.
---

# Verification loop

Run the phases for the kind of work. Stop at the first phase that fails, fix (or send back to
the author agent), and run the loop again from that phase. Report every phase, including
SKIPPED ones and why.

## A. Client deliverable folder (`clients/<slug>/deliverables/<date>-<task>/`)
1. **Files valid:** `python3 scripts/validate_output.py file <every .html/.svg/.js in folder>`
2. **Content checks:** `python3 scripts/check_deliverable.py <folder>`. Zero FAIL required.
   FLAG lines go to the reviewer to judge. Use `--draft` only when the work goes to the
   founder with open items by design (a proposal's `[PRICE]` / `[NEEDS FACT]` list, a draft
   the founder asked for); never for anything that goes to a client.
3. **Viewport (if there is HTML):** `python3 scripts/viewport_check.py <folder>`. No
   horizontal overflow at 360px, no console errors. SKIPPED is acceptable only if Playwright
   isn't installed; then say so.
4. **Reviewer:** run the `reviewer` subagent on the folder and include the output of step 2.
   Zero [FAIL] required.

## B. Software project (or this repo's `scripts/`)
1. **Build:** the project's build command (`npm run build`, `python -m compileall -q <pkg>`).
2. **Types:** `npx tsc --noEmit` / `pyright` / `mypy`, if the project uses them.
3. **Lint/format:** `npm run lint` / `ruff check .` / `ruff format --check .`.
4. **Tests:** full suite with coverage. New code ≥ 80% line coverage.
   This repo: `python3 scripts/check_repo.py` (runs all self-tests).
5. **Security:** dependency audit (`npm audit --omit=dev`, `pip-audit`), grep the diff for
   secrets and debug leftovers, walk `security-checklist` for the areas the change touches.
6. **Diff review:** `code-reviewer` subagent on the diff. Zero [FAIL] required.

## Report
```
VERIFICATION: READY | NOT READY
| Phase | Result | Detail |
|---|---|---|
| Files valid | PASS | 4 files |
| Content checks | PASS | 0 FAIL, 2 FLAG (sent to reviewer) |
| Viewport 360px | SKIPPED | Playwright not installed |
| Reviewer | PASS | |
BLOCKERS: <list, or none>
```
READY only if no phase FAILED. SKIPPED phases are listed so the founder can decide.
