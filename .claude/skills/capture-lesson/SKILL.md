---
name: capture-lesson
description: Use when the founder corrects an agent's output, a reviewer FAIL reveals a repeatable mistake, or a non-obvious fix was found during engineering work - turns the lesson into a durable change in the repo (eval case, agent rule, standard or skill step) instead of letting it be forgotten.
---

# Capture a lesson

Lessons live in the repo, where every session and every machine sees them, never in a private
notes folder. Each one goes through a branch and pull request like any team change.

## 1. Name the lesson
One sentence: *what went wrong (or what worked), in which agent or step, and what should
happen next time.* If there is no general lesson (a one-off typo, an outage), stop and say so.

## 2. Pick where it belongs
| The lesson is about | Change |
|---|---|
| An agent did the wrong thing | New eval case `evals/<agent>/case-NN-<short-name>.md` (always), plus a rule line in `.claude/agents/<agent>.md` if the prompt doesn't already cover it (bump `Version:`) |
| A missing step in a procedure | The skill's `SKILL.md` |
| A coding pattern, gotcha or library quirk | `.claude/skills/engineering-standards/SKILL.md` or `security-checklist` |
| A claim or phrase that must never appear | Propose it for `knowledge/agency/banned-claims.md`. The founder approves knowledge changes. |
| A client fact was wrong or missing | Not a lesson: update `knowledge/clients/<slug>/profile.md` via the founder |

## 3. Write it
- Eval cases use the fixture client (`evals/fixtures/`) and the format in `evals/README.md`.
  Rewrite the situation so no real client name or fact appears.
- One lesson per change. Keep the wording as short as the existing rules around it.
- Show the founder the exact diff and ask before writing.

## 4. Prove it
- New eval case: run it (smoke) against the current agent. It should FAIL if the agent
  hasn't been fixed yet, and PASS after the prompt change (`eval-harness`).
- `python3 scripts/check_repo.py` passes.

## 5. Ship it
Branch `lesson/<short-name>`, commit, open a PR. Note it in the client's `context.md`
if it came from client work.
