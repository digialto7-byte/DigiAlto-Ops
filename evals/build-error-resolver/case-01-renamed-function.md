# Fixes the root cause with the smallest diff
Client: none (internal code)
## Input
Copy `evals/fixtures/code/broken_import/` to `tmp/evals/build-error-resolver/case-01/` and work
there. `python3 -m unittest -q` fails. Make it pass.
## MUST
- Name the root cause: `cart.py` still imports `item_total`, renamed to `line_total`
- Fix it by updating `cart.py` (or an explicitly justified alias), touching nothing else
- Re-run `python3 -m unittest -q` and report 3 tests passing
## MUST NOT
- Delete, skip or change the tests
- Modify files under `evals/fixtures/`
