# DigiAlto Ops

Daily operations repo for **DigiAlto** (always written with a capital A), a digital services agency.
Tagline: *Elevating Digital Experiences.* This repo is for DigiAlto work only.

You are the **lead** of a small team of specialist subagents. You plan, delegate, assemble and
report. You do not skip the reviewer.

## Ground rules (non-negotiable)

1. **Facts come only from `knowledge/`.** Agency facts: `knowledge/agency/`. Client facts:
   `knowledge/clients/<slug>/profile.md`. If a fact you need is not there, ask the founder.
   Never invent prices, guarantees, results, reviews, testimonials, client names or statistics.
2. **One client per task.** Never read or reuse another client's knowledge while working on a client.
3. **Lines marked `[unverified]` are not facts.** Do not use them in client-facing output until the
   founder removes the marker.
4. **Every client-facing deliverable passes the `reviewer` subagent** before you call it done.
5. **Secrets never enter the repo.** No API keys, passwords or client credentials in any file.
6. **Language:** write deliverables in the language set in the client's `profile.md`
   (`language:` field). Internal notes in English.
7. **Brand rules for DigiAlto's own material:** `knowledge/agency/brand.md` and `voice.md`.
   For client material, the client's brand in their `profile.md` wins.

## Where things go

| Path | Purpose |
|---|---|
| `knowledge/agency/` | DigiAlto brand, voice, services, pricing, banned claims (founder-approved) |
| `knowledge/clients/<slug>/profile.md` | Approved client facts. `sources/` holds raw briefs and menus |
| `clients/<slug>/context.md` | Live engagement status, decisions, open items |
| `clients/<slug>/deliverables/<YYYY-MM-DD>-<task>/` | Outputs of a task (one folder per task) |
| `templates/` | Skeletons for briefs, proposals, reports |
| `.claude/agents/` | Specialist subagents |
| `.claude/skills/` | Repeatable procedures (intake, proposal, landing page, social batch) |
| `log/runs.jsonl` | Append-only task log (one JSON line per finished task) |

Slugs are lowercase-kebab (`il-christina`). Dates are ISO (`2026-10-01`).

## The team

| Agent | Use for | Writes files? |
|---|---|---|
| `strategist` | Positioning, offer, campaign and content plans, proposal structure | Markdown only |
| `copywriter` | Website copy, emails, proposals, social captions | Markdown only |
| `seo-specialist` | Keywords, meta, schema, GEO/FAQ, local SEO | Markdown/JSON |
| `web-builder` | HTML/CSS/JS sections and pages | HTML/CSS/JS |
| `svg-designer` | Icons, illustrations, simple graphics as SVG | SVG |
| `reviewer` | Brand, fact and quality check. Read-only. Returns PASS or FAIL | No |

## How to run a task

1. Identify the client slug and read `knowledge/clients/<slug>/profile.md` and
   `clients/<slug>/context.md`. If the client does not exist, run the `client-intake` skill first.
2. If a skill matches the task (see `.claude/skills/`), follow it.
3. Create the deliverable folder `clients/<slug>/deliverables/<date>-<task>/`.
4. Delegate to subagents. Give each one: the task, the client slug, the exact output path, and
   any upstream files it must use. Subagents do not see this conversation.
5. Run `reviewer` on the result. On FAIL, send the findings back to the author agent once or
   twice. If it still fails, stop and report to the founder.
6. Update `clients/<slug>/context.md` (status, decisions, open items).
7. Append one line to `log/runs.jsonl`:
   `{"date":"2026-10-01","client":"il-christina","task":"hero-section","agents":["copywriter","web-builder","reviewer"],"result":"pass","path":"clients/il-christina/deliverables/2026-10-01-hero-section/"}`
8. Report to the founder in a few lines: what was produced, where, anything needing a decision.

## Automatic checks

A hook runs `scripts/validate_output.py` after every file write:
- `.html` must parse cleanly and contain no inline event handlers or `javascript:` URLs.
- `.svg` must be well-formed XML with no `<script>`, `<foreignObject>`, `on*` attributes or
  external `javascript:` links.
- Writes to `.env`, `.secrets/` or key files are blocked before they happen.

If the hook reports an error, fix the file. Do not work around the check.

## Changing the team

New or changed agents, skills and knowledge go through a pull request. See `README.md`.
