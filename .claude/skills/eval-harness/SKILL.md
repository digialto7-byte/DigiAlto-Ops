---
name: eval-harness
description: Use to run, grade and log the eval cases in evals/<agent>/ - after any change to an agent, skill or knowledge file it depends on, before merging that change, or when the founder asks "run the evals for <agent>".
---

# Eval harness

Evals are the unit tests for the team. A case is a fixed input plus MUST / MUST NOT lists
(`evals/README.md`). They catch an agent drifting when its prompt, a skill or a model changes.

## Run levels
| Level | When | Runs per case | Case passes when |
|---|---|---|---|
| Smoke | quick check while editing | 1 | that run passes |
| Release | before merging a change to an agent, skill or `knowledge/agency/` | 3 | **all 3 pass** (pass^3) |

Agents are not deterministic: one lucky pass is not evidence. A Release run that passes 2/3 is
a FAIL. Find what the failed run did differently and tighten the prompt or the case.

## Steps
1. List the cases: `evals/<agent>/case-*.md`. Read `evals/fixtures/` (fake client; real
   client facts never enter evals).
2. For each case and run, give the agent exactly the case's **Input**, plus the fixture path
   and an output path under `tmp/evals/<agent>/<case>/run-<n>/` (gitignored). Runs of
   different cases are independent: start them in parallel.
3. **Grade** each run against MUST and MUST NOT. Use the strongest grader available, in
   this order:
   - **Code grader** (deterministic): `check_deliverable.py`, `validate_output.py file`,
     `viewport_check.py`, the project's tests, or a `grep` for a required/forbidden string.
   - **Model grader**: `reviewer` for content and HTML, `code-reviewer` for code, given the
     case file and the output. The agent under test never grades itself.
   - **Lead check**: for verdict-style agents (reviewer, code-reviewer), compare their
     verdict and findings with the MUST lists directly.
   Every MUST met and no MUST NOT triggered = run passes. Quote the evidence for each fail.
4. **Log** one line per case to `log/evals.jsonl`:
   `{"date":"2026-10-21","agent":"copywriter","case":"case-01-hero-facts","version":"1.0.0","level":"release","runs":3,"passed":3,"result":"pass"}`
5. **Report** a table: agent, case, passed/runs, result, and for each fail the one-line reason.

## When something fails
- Agent wrong → fix the agent prompt (bump its `Version:` line), re-run that agent's whole set.
- Case wrong or ambiguous → fix the case and say so in the PR; never loosen a case just to pass.
- Two fix rounds without a pass → stop and report to the founder.

## Adding cases
Real failure in daily work → `capture-lesson` skill (`/learn`) turns it into a new case.
