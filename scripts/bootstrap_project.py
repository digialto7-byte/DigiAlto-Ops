#!/usr/bin/env python3
"""Set up a new (or existing) software project repo with DigiAlto's engineering kit.

  python3 scripts/bootstrap_project.py <target-dir> [--force]

Copies into <target-dir>:
  CLAUDE.md, .claude/settings.json, .claude/hooks/guard.py,
  .claude/commands/feature.md                                (templates/eng-project/)
  .claude/commands/{tdd,build-fix,review-code}.md
  .claude/agents/{architect,code-reviewer,tdd-guide,build-error-resolver}.md
  .claude/skills/{engineering-standards,security-checklist,tdd-workflow}/SKILL.md
  templates/{tech-plan,adr,handoff}.md (same paths the agents reference), scripts/viewport_check.py
  .gitignore, .env.example, docs/client-facts.md
Existing files are kept unless --force. Client code never lives inside DigiAlto-Ops.
"""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KIT = ROOT / "templates" / "eng-project"
# Explicit lists, so caches or editor files in the kit never reach a client repo.
KIT_FILES = ["CLAUDE.md", ".claude/settings.json", ".claude/hooks/guard.py", ".claude/commands/feature.md"]
AGENTS = ["architect", "code-reviewer", "tdd-guide", "build-error-resolver"]
SKILLS = ["engineering-standards", "security-checklist", "tdd-workflow"]
COMMANDS = ["tdd", "build-fix", "review-code"]  # /feature comes from the kit (project paths)
TEMPLATES = ["tech-plan.md", "adr.md", "handoff.md"]
SCRIPTS = ["viewport_check.py"]

GITIGNORE = """# Secrets
.env
.env.*
!.env.example
.secrets/
*.pem
*.key

# Dependencies and builds
node_modules/
dist/
build/
.next/
coverage/
__pycache__/
*.pyc
.venv/

# Local
.claude/settings.local.json
.DS_Store
tmp/
"""

ENV_EXAMPLE = "# Copy to .env and fill in real values locally. Never commit .env.\n# EXAMPLE_API_KEY=replace-me\n"

CLIENT_FACTS = """# Client facts this project may use

Copied from DigiAlto-Ops `knowledge/clients/<slug>/profile.md`. Only approved lines (no
`[unverified]`). Update here when the profile changes; never add facts that are not there.

- Client slug:
- Trading name:
- Domains:
- Brand colours / fonts:
- Integrations approved (payments, booking, analytics):
- Tracking approved:
"""


def main(argv: list[str]) -> int:
    args = [a for a in argv[1:] if not a.startswith("--")]
    force = "--force" in argv
    if len(args) != 1:
        print(__doc__)
        return 2
    target = Path(args[0]).expanduser().resolve()
    if target == ROOT or ROOT in target.parents:
        print("Refusing: the target is inside DigiAlto-Ops. Client code lives in its own repo.")
        return 2

    plan: list[tuple[Path | None, Path, str | None]] = []  # (source file, destination, literal text)
    for f in KIT_FILES:
        plan.append((KIT / f, target / f, None))
    for a in AGENTS:
        plan.append((ROOT / ".claude/agents" / f"{a}.md", target / ".claude/agents" / f"{a}.md", None))
    for s in SKILLS:
        plan.append((ROOT / ".claude/skills" / s / "SKILL.md", target / ".claude/skills" / s / "SKILL.md", None))
    for c in COMMANDS:
        plan.append((ROOT / ".claude/commands" / f"{c}.md", target / ".claude/commands" / f"{c}.md", None))
    for t in TEMPLATES:
        plan.append((ROOT / "templates" / t, target / "templates" / t, None))
    for s in SCRIPTS:
        plan.append((ROOT / "scripts" / s, target / "scripts" / s, None))
    plan += [
        (None, target / ".gitignore", GITIGNORE),
        (None, target / ".env.example", ENV_EXAMPLE),
        (None, target / "docs/client-facts.md", CLIENT_FACTS),
        (None, target / "docs/plans/.gitkeep", ""),
        (None, target / "docs/adr/.gitkeep", ""),
    ]

    written = skipped = 0
    for src, dest, text in plan:
        if dest.exists() and not force:
            print(f"keep   {dest.relative_to(target)} (exists)")
            skipped += 1
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        if src is not None:
            shutil.copyfile(src, dest)
        else:
            dest.write_text(text or "", encoding="utf-8")
        print(f"write  {dest.relative_to(target)}")
        written += 1
    print(f"\n{written} written, {skipped} kept. Next: fill in CLAUDE.md (stack and commands) and "
          "docs/client-facts.md, then commit on a branch.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
