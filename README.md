# DigiAlto Ops

Multi-agent workspace for DigiAlto's daily agency work, run through Claude Code.
Specialist subagents (strategist, copywriter, SEO, web builder, SVG designer, reviewer) work
from approved knowledge files and write deliverables per client.

## Setup (once)

```bash
git clone https://github.com/digialto7-byte/DigiAlto-Ops.git
cd DigiAlto-Ops
python3 -m pip install -r requirements.txt   # validators used by the write hook
python3 -m pip install -r requirements-dev.txt && playwright install chromium   # optional: 360px page check
claude                                        # start Claude Code in the repo
```

Claude Code picks up `CLAUDE.md`, `.claude/agents/`, `.claude/skills/`, `.claude/commands/`
and the hooks in `.claude/settings.json` automatically.

## Where it works

| Surface | What you get |
|---|---|
| Claude Code on the web / mobile (cloud session with this repo selected) | Everything: CLAUDE.md, agents, skills, commands, rules, hooks. Work starts from `main`, so merge changes first |
| Claude Code desktop app or CLI in a local clone | Everything, on your machine |
| Plain claude.ai chat or a claude.ai Project | Reading only (e.g. GitHub files as Project knowledge). No subagents, hooks or slash commands, so the reviewer and validators don't run. Don't produce deliverables there |

**Cloud environment setup (once).** In the cloud environment's settings, add this to the
setup script so every new session has the hook dependencies and the 360px check:

```bash
python3 -m pip install -q html5lib defusedxml PyYAML playwright
```

and the environment variable `CHROMIUM_PATH=/opt/pw-browsers/chromium` (the cloud image
already ships Chromium). Without it the session brief warns and the HTML checks are partial.

## Daily use

| Command | What it does |
|---|---|
| `/intake <client name>` | Creates a new client: knowledge profile, context file, sources folder |
| `/proposal <slug> <what>` | Drafts a proposal from the client profile and DigiAlto services |
| `/site-section <slug> <section>` | Copy, SEO, HTML (and SVG if needed) for one website section, reviewed |
| `/social <slug> <weeks>` | A batch of social posts with captions and visual briefs |
| `/review <path>` | Runs the reviewer on any file or folder |
| `/preflight <path>` | Automatic quality gates + reviewer → READY / NOT READY table |
| `/learn <what happened>` | Turns a correction into an eval case, rule or skill step (via PR) |
| `/eval <agent> [smoke\|release]` | Runs, grades and logs an agent's eval cases |

**Engineering (software projects)**

| Command | What it does |
|---|---|
| `/kickoff <slug\|digialto> <PRD>` | New project from a PRD: capture, project plan with milestones, founder approval, its own repo |
| `/feature <slug\|internal> <feature> [repo]` | Plan → test-first build → verify → code review |
| `/tdd <task or tech-plan.md>` | Implements test-first with `tdd-guide`, then code review |
| `/build-fix [command]` | Smallest correct fix for a red build, lint, type check or test run |
| `/review-code [base\|paths]` | `code-reviewer` on a diff → PASS / FAIL |

New client software repo: `python3 scripts/bootstrap_project.py ../<project>` copies the
engineering kit (CLAUDE.md, hooks, the four engineering agents, standards and TDD skills).

Or just describe the task in plain words. The lead session routes it.

Outputs land in `clients/<slug>/deliverables/<date>-<task>/`. Review, then commit.

## Rules that keep it reliable

- **Knowledge is the source of truth.** Agents may only state facts found in `knowledge/`.
  Anything marked `[unverified]` is excluded until you confirm it and delete the marker.
- **One client per task.** Client knowledge is never mixed.
- **Reviewer is mandatory** for anything that goes to a client.
- **No secrets in the repo.** Writes to `.env` / `.secrets/` are blocked by a hook.

## Maintaining the team

Everything under `.claude/` and `knowledge/` changes through a pull request that you merge.

**Add an agent**
1. Branch: `git checkout -b agent/<name>`
2. Add `.claude/agents/<name>.md` (copy an existing one; keep `name`, `description`, `tools`,
   `model`, and bump `version` in the body header).
3. Add at least two cases in `evals/<name>/` (input + what a good output must and must not do).
4. Open a PR. CI (`.github/workflows/checks.yml`) validates frontmatter, tool allowlist,
   knowledge markers and the validator self-tests.
5. Merge.

**Change an agent:** same flow, bump the version line, re-run its evals with
`/eval <agent> release` (3 runs per case, all must pass; results land in `log/evals.jsonl`).

**Retire an agent:** set `Status: deprecated` in its body, remove it from `CLAUDE.md`'s team
table, delete it once nothing references it.

**New failure seen in real work?** Run `/learn <what happened>`: it turns it into a new eval
case for that agent (and a rule if needed) on a branch. That is how the team gets better
instead of drifting.

## Layout

```
CLAUDE.md                  lead instructions (read every session)
.claude/agents/            subagents
.claude/skills/            repeatable procedures
.claude/commands/          slash commands
.claude/rules/             git workflow (always) + engineering rules (when code is touched)
.claude/settings.json      permissions + hooks
knowledge/agency/          DigiAlto facts (approved)
knowledge/clients/<slug>/  client facts (approved) + sources/
clients/<slug>/            context.md + deliverables/
templates/                 document skeletons (brief, proposal, tech plan, ADR, hand-off)
templates/eng-project/     starter kit for a new software repo
scripts/                   validators, deliverable checks, viewport check, repo checks, bootstrap
evals/<agent>/             test cases per agent (fixtures in evals/fixtures/)
log/runs.jsonl             append-only task log
log/evals.jsonl            append-only eval results
```

## Credits

The engineering agents, verification loop, eval harness and lessons workflow adapt ideas from
[everything-claude-code](https://github.com/affaan-m/everything-claude-code) (MIT), rewritten
for DigiAlto's rules. Its hooks, memory files and MCP configs were not adopted: they conflict
with the deliverable workflow or the secrets rule.
