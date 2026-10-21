#!/usr/bin/env python3
"""SessionStart hook: print a short brief so a new session picks up where the last one stopped.

State lives in the repo (git, log/runs.jsonl, log/evals.jsonl), not in a private ~/.claude folder,
so every session and every machine sees the same thing. Output is added to Claude's context:
keep it under ~15 lines. Never prints client facts, only task names and paths.
"""
from __future__ import annotations

import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def git(*args: str) -> str:
    try:
        return subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True, timeout=5).stdout.strip()
    except Exception:
        return ""


def tail_jsonl(path: Path, n: int) -> list[dict]:
    if not path.exists():
        return []
    rows = []
    for line in path.read_text(encoding="utf-8").splitlines()[-n:]:
        try:
            row = json.loads(line)
        except json.JSONDecodeError:
            continue
        if isinstance(row, dict):
            rows.append(row)
    return rows


def failing_cases(rows: list[dict]) -> list[str]:
    """Only the latest result per case counts: a fail followed by a pass is fixed."""
    latest = {(e.get("agent"), e.get("case")): e for e in rows}
    return sorted(f"{a}/{c}" for (a, c), e in latest.items() if e.get("result") != "pass")


def missing_deps() -> list[str]:
    """Packages the write hook and repo checks need (requirements.txt)."""
    import importlib.util
    return [p for p, mod in (("html5lib", "html5lib"), ("defusedxml", "defusedxml"), ("PyYAML", "yaml"))
            if importlib.util.find_spec(mod) is None]


def main() -> None:
    lines = ["[DigiAlto session brief]"]
    missing = missing_deps()
    if missing:
        lines.append(f"WARNING: missing {', '.join(missing)}; HTML/SVG checks are incomplete. "
                     "Run: python3 -m pip install -r requirements.txt")
    branch = git("branch", "--show-current")
    dirty = [l for l in git("status", "--porcelain").splitlines() if l]
    lines.append(f"Branch: {branch or '?'} · uncommitted files: {len(dirty)}")
    runs = tail_jsonl(ROOT / "log/runs.jsonl", 5)
    if runs:
        lines.append("Last tasks:")
        for r in runs:
            lines.append(f"- {r.get('date', '?')} {r.get('client', '?')}/{r.get('task', '?')}: "
                         f"{r.get('result', '?')} ({r.get('path', '')})")
    failing = failing_cases(tail_jsonl(ROOT / "log/evals.jsonl", 200))
    if failing:
        lines.append(f"Eval cases currently failing: {', '.join(failing[:5])}")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
