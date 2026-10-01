# DigiAlto Ops

Multi-agent workspace for DigiAlto's daily agency work, run through Claude Code.
Specialist subagents (strategist, copywriter, SEO, web builder, SVG designer, reviewer) work
from approved knowledge files and write deliverables per client.

## Setup (once)

```bash
git clone https://github.com/digialto7-byte/DigiAlto-Ops.git
cd DigiAlto-Ops
python3 -m pip install -r requirements.txt   # validators used by the write hook
claude                                        # start Claude Code in the repo
```

Claude Code picks up `CLAUDE.md`, `.claude/agents/`, `.claude/skills/`, `.claude/commands/`
and the hooks in `.claude/settings.json` automatically.

## Daily use

| Command | What it does |
|---|---|
| `/intake <client name>` | Creates a new client: knowledge profile, context file, sources folder |
| `/proposal <slug> <what>` | Drafts a proposal from the client profile and DigiAlto services |
| `/site-section <slug> <section>` | Copy, SEO, HTML (and SVG if needed) for one website section, reviewed |
| `/social <slug> <weeks>` | A batch of social posts with captions and visual briefs |
| `/review <path>` | Runs the reviewer on any file or folder |

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

**Change an agent:** same flow, bump the version line, re-run its evals by hand
(`ask Claude: run the evals for <agent>`).

**Retire an agent:** set `Status: deprecated` in its body, remove it from `CLAUDE.md`'s team
table, delete it once nothing references it.

**New failure seen in real work?** Add it as a new eval case for that agent. That is how the
team gets better instead of drifting.

## Layout

```
CLAUDE.md                  lead instructions (read every session)
.claude/agents/            subagents
.claude/skills/            repeatable procedures
.claude/commands/          slash commands
.claude/settings.json      permissions + hooks
knowledge/agency/          DigiAlto facts (approved)
knowledge/clients/<slug>/  client facts (approved) + sources/
clients/<slug>/            context.md + deliverables/
templates/                 document skeletons
scripts/                   validators and repo checks
evals/<agent>/             test cases per agent
log/runs.jsonl             append-only task log
```
