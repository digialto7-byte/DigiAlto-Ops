# Evals

Each agent has at least two cases in `evals/<agent>/`. A case is a fixed input plus what a good
output MUST and MUST NOT do. They catch regressions when a prompt changes.

## Running
Ask Claude Code: *"Run the evals for copywriter"*. The lead runs each case through the agent
into `tmp/evals/<agent>/<case>/`, then has the `reviewer` grade the output against the case's
MUST / MUST NOT lists and reports pass or fail per case.

## Adding a case
When an agent gets something wrong in real work, copy the situation into a new
`evals/<agent>/case-NN-<short-name>.md`. Use the fixture client in `evals/fixtures/` so real
client facts never live in test files.

## Case format
```
# <title>
Client: fixture (evals/fixtures/profile.md)
## Input
<the task exactly as the lead would give it>
## MUST
- ...
## MUST NOT
- ...
```
