#!/usr/bin/env python3
"""Repo consistency checks (run in CI and locally: python3 scripts/check_repo.py).

- Every agent and skill has valid YAML frontmatter with the required keys.
- Agents only request tools from the allowlist.
- Every agent has an evals/<name>/ folder with at least two cases.
- Commands have a description and only name skills/subagents that exist.
- Rules in .claude/rules/ have valid `paths:` frontmatter.
- No secrets-looking strings in tracked text files.
- validate_output.py and check_deliverable.py self-tests pass.
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
TOOL_ALLOWLIST = {"Read", "Glob", "Grep", "Write", "Edit", "MultiEdit", "Bash", "WebSearch", "WebFetch"}
MODELS = {"haiku", "sonnet", "opus", "inherit"}
SECRET_RX = re.compile(r"(sk-ant-[A-Za-z0-9_-]{10,}|sk-[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{30,})")

problems: list[str] = []


def frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        problems.append(f"{path.relative_to(ROOT)}: missing YAML frontmatter")
        return {}
    try:
        _, fm, _ = text.split("---", 2)
        return yaml.safe_load(fm) or {}
    except Exception as e:
        problems.append(f"{path.relative_to(ROOT)}: bad frontmatter ({e})")
        return {}


def check_agents() -> None:
    for f in sorted((ROOT / ".claude/agents").glob("*.md")):
        fm = frontmatter(f)
        rel = f.relative_to(ROOT)
        for key in ("name", "description", "tools", "model"):
            if key not in fm:
                problems.append(f"{rel}: frontmatter missing '{key}'")
        if fm.get("name") and fm["name"] != f.stem:
            problems.append(f"{rel}: name '{fm['name']}' must match filename '{f.stem}'")
        tools = {t.strip() for t in str(fm.get("tools", "")).split(",") if t.strip()}
        bad = tools - TOOL_ALLOWLIST
        if bad:
            problems.append(f"{rel}: tools not on allowlist: {sorted(bad)}")
        if fm.get("model") and fm["model"] not in MODELS:
            problems.append(f"{rel}: model '{fm['model']}' not in {sorted(MODELS)}")
        cases = list((ROOT / "evals" / f.stem).glob("*.md"))
        if len(cases) < 2:
            problems.append(f"{rel}: needs at least 2 eval cases in evals/{f.stem}/ (found {len(cases)})")


def check_skills() -> None:
    for f in sorted((ROOT / ".claude/skills").glob("*/SKILL.md")):
        fm = frontmatter(f)
        for key in ("name", "description"):
            if key not in fm:
                problems.append(f"{f.relative_to(ROOT)}: frontmatter missing '{key}'")
        if fm.get("name") and fm["name"] != f.parent.name:
            problems.append(f"{f.relative_to(ROOT)}: name must match folder '{f.parent.name}'")


def check_secrets() -> None:
    for f in ROOT.rglob("*"):
        if not f.is_file() or ".git" in f.parts or f.suffix in {".png", ".jpg", ".pdf"}:
            continue
        try:
            if SECRET_RX.search(f.read_text(encoding="utf-8", errors="ignore")):
                problems.append(f"{f.relative_to(ROOT)}: looks like it contains an API key or token")
        except Exception:
            pass


def check_commands() -> None:
    """Commands need a description, and every skill/subagent they name must exist."""
    agents = {f.stem for f in (ROOT / ".claude/agents").glob("*.md")}
    skills = {f.parent.name for f in (ROOT / ".claude/skills").glob("*/SKILL.md")}
    for f in sorted((ROOT / ".claude/commands").glob("*.md")):
        rel = f.relative_to(ROOT)
        if "description" not in frontmatter(f):
            problems.append(f"{rel}: frontmatter missing 'description'")
        text = f.read_text(encoding="utf-8")
        for name in re.findall(r"`([a-z0-9-]+)` skill", text):
            if name not in skills:
                problems.append(f"{rel}: references unknown skill '{name}'")
        for name in re.findall(r"`([a-z0-9-]+)` subagent", text):
            if name not in agents:
                problems.append(f"{rel}: references unknown subagent '{name}'")


def check_rules() -> None:
    """Optional `paths:` frontmatter must be a list of glob strings (bad YAML loads unscoped)."""
    for f in sorted((ROOT / ".claude/rules").glob("**/*.md")):
        if not f.read_text(encoding="utf-8").startswith("---"):
            continue
        paths = frontmatter(f).get("paths")
        if paths is not None and not (isinstance(paths, list) and all(isinstance(p, str) for p in paths)):
            problems.append(f"{f.relative_to(ROOT)}: 'paths' must be a list of glob strings")


def check_validator() -> None:
    for test in ("test_validate_output.py", "test_check_deliverable.py"):
        r = subprocess.run([sys.executable, str(ROOT / "scripts" / test)], capture_output=True, text=True)
        if r.returncode != 0:
            problems.append(f"{test} self-test failed:\n" + r.stdout + r.stderr)


if __name__ == "__main__":
    check_agents()
    check_skills()
    check_commands()
    check_rules()
    check_secrets()
    check_validator()
    if problems:
        print("Repo checks FAILED:")
        for p in problems:
            print(f"- {p}")
        sys.exit(1)
    print("Repo checks passed.")
