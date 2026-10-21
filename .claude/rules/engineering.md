---
paths:
  - "scripts/**"
  - "**/*.py"
  - "**/*.{ts,tsx,mts,cts}"
  - "src/**"
  - "app/**"
  - "tests/**"
  - "templates/eng-project/**"
---

# Engineering rules (load when touching code)

- Full standards: `engineering-standards` skill. Security: `security-checklist` skill.
- Test first for new behaviour (`tdd-workflow`); a bug fix starts with a failing test.
- Never weaken, skip or delete a failing test to get green.
- Secrets only from environment variables; never in code, tests, fixtures or logs.
- Validate input at boundaries; parameterised queries; no `eval`/`new Function`/shell strings
  built from input.
- No debug leftovers (`print`, `console.log`, `debugger`) in committed code.
- Smallest change that does the job; no drive-by refactors or new dependencies without saying why.
- Before calling code done: `verification-loop` section B, then `code-reviewer` on the diff.
- In this repo, any change under `scripts/` keeps `python3 scripts/check_repo.py` green and adds
  a self-test case for new behaviour (see `scripts/test_*.py`).
