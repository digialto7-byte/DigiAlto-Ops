# Git workflow

- Changes to `.claude/`, `knowledge/`, `scripts/`, CI and any software project go through a
  branch and pull request: `agent/<name>`, `skill/<name>`, `lesson/<name>`, `feat/<name>`,
  `fix/<name>`. Reviewed deliverables may be committed directly (see `README.md`).
- Commit messages: `<type>: <what changed>` in the imperative, types `feat`, `fix`, `docs`,
  `refactor`, `test`, `chore`, `content` (deliverables), `knowledge` (knowledge files).
  Body says why when it isn't obvious.
- One logical change per commit; no generated junk (`tmp/`, screenshots, `node_modules/`).
- Before pushing: `python3 scripts/check_repo.py` passes (this repo), or the project's
  verification loop is READY.
- Pull requests are drafts until verification is READY and the reviewer (or code-reviewer)
  has passed; the description lists what changed, how it was verified and open questions.
- Never force-push a shared branch, never rewrite `main`, never commit secrets. If a secret
  was committed, tell the founder immediately: it must be rotated, not just deleted.
