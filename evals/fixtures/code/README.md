# Code fixtures for engineering evals

Small, fake Python projects with deliberate problems. Standard library only; run tests with
`python3 -m unittest -q` from inside a copy. Eval runs always work on a copy under
`tmp/evals/...`, never on these originals.

| Folder | Problem | Used by |
|---|---|---|
| `opening_hours/` | Bug: says the shop is open on Monday | tdd-guide case-02 |
| `broken_import/` | A function was renamed; the test suite fails to import | build-error-resolver case-01 |
| `env_config/` | Tests fail because an API key env var is missing | build-error-resolver case-02 |
