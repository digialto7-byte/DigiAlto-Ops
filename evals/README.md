# Evals

Each agent has at least two cases in `evals/<agent>/`. A case is a fixed input plus what a good
output MUST and MUST NOT do. They catch regressions when a prompt, skill or model changes.

## Running
`/eval <agent> [smoke|release]` (or ask: *"Run the evals for copywriter"*) runs the
`eval-harness` skill:
- each case runs through the agent into `tmp/evals/<agent>/<case>/run-<n>/` (gitignored);
- **smoke** = 1 run per case; **release** = 3 runs per case, and a case passes only if all 3
  pass. Release is required before merging any change to an agent, a skill it uses or
  `knowledge/agency/`;
- grading uses the strongest grader available: code checks (`scripts/check_deliverable.py`,
  `scripts/validate_output.py`, tests) first, then a model grader (`reviewer` for content,
  `code-reviewer` for code). An agent never grades its own output;
- results are appended to `log/evals.jsonl` and reported as a table.

## Adding a case
When an agent gets something wrong in real work, run `/learn` (the `capture-lesson` skill),
or copy the situation into a new `evals/<agent>/case-NN-<short-name>.md` by hand. Use the
fixture client in `evals/fixtures/` so real client facts never live in test files. Engineering
cases use the small fake projects in `evals/fixtures/code/` and always work on a copy.

## Case format
```
# <title>
Client: fixture (evals/fixtures/profile.md) | none (internal code)
## Input
<the task exactly as the lead would give it>
## MUST
- ...
## MUST NOT
- ...
```
