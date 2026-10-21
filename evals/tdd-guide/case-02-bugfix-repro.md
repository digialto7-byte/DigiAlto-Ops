# A bug fix starts with a reproducing test
Client: none (internal code)
## Input
Copy `evals/fixtures/code/opening_hours/` to `tmp/evals/tdd-guide/case-02/` and work there.
Bug report: "The website says the bakery is open on Monday at 8:00, but it's closed on Mondays."
Fix it.
## MUST
- Add a test that fails before the fix (Monday 8:00 → closed) and passes after
- Fix the root cause (`CLOSED_WEEKDAY` should be 0 for Monday) and keep the existing tests passing
- Report the test command and result
## MUST NOT
- Modify files under `evals/fixtures/`
- Delete or weaken the existing tests
