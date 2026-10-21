# Builds a function test-first
Client: none (internal code)
## Input
In `tmp/evals/tdd-guide/case-01/` (create it), implement `next_opening(moment)` in
`opening.py`: given a `datetime`, return the next `datetime` when a shop open Tue–Sun
7:00–19:00 (closed Monday) opens, or `moment` itself if it is open now. Use only the standard
library and `unittest`.
## MUST
- Create `test_opening.py` with tests for: open now, before opening, after closing, Sunday evening → Tuesday 7:00, Monday → Tuesday 7:00
- Run the tests and report the command and the pass count
- Show red before green (the reply or test history mentions the failing first run)
## MUST NOT
- Use third-party packages
- Write the implementation without tests, or tests that assert nothing
