#!/usr/bin/env python3
"""Self-tests for bootstrap_project, session_brief, check_repo.check_commands and the
eng-project guard hook. Run: python3 scripts/test_tools.py"""
import importlib.util
import io
import sys
import tempfile
from contextlib import redirect_stdout
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
sys.path.insert(0, str(HERE))
sys.dont_write_bytecode = True  # never leave __pycache__ next to the kit

import bootstrap_project  # noqa: E402
import check_repo  # noqa: E402
from session_brief import failing_cases  # noqa: E402

spec = importlib.util.spec_from_file_location("guard", ROOT / "templates/eng-project/.claude/hooks/guard.py")
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)

results: list[tuple[str, bool]] = []


def check(name: str, ok: bool) -> None:
    results.append((name, ok))


def run_bootstrap(*args: str) -> tuple[int, str]:
    buf = io.StringIO()
    with redirect_stdout(buf):
        code = bootstrap_project.main(["bootstrap_project.py", *args])
    return code, buf.getvalue()


# bootstrap_project
with tempfile.TemporaryDirectory() as tmp:
    target = Path(tmp) / "proj"
    code, _ = run_bootstrap(str(target))
    check("bootstrap writes kit", code == 0 and (target / ".claude/hooks/guard.py").exists())
    check("bootstrap templates where agents look", (target / "templates/tech-plan.md").exists())
    check("bootstrap copies viewport script", (target / "scripts/viewport_check.py").exists())
    check("bootstrap copies no caches", not any(p.name == "__pycache__" for p in target.rglob("*")))
    (target / "CLAUDE.md").write_text("mine", encoding="utf-8")
    code, out = run_bootstrap(str(target))
    check("bootstrap keeps existing", code == 0 and (target / "CLAUDE.md").read_text() == "mine" and "kept" in out)
    run_bootstrap(str(target), "--force")
    check("bootstrap --force overwrites", (target / "CLAUDE.md").read_text() != "mine")
code, _ = run_bootstrap(str(ROOT / "tmp" / "inside"))
check("bootstrap refuses inside repo", code == 2 and not (ROOT / "tmp" / "inside").exists())

# session_brief
rows = [{"agent": "a", "case": "c1", "result": "fail"}, {"agent": "a", "case": "c1", "result": "pass"},
        {"agent": "b", "case": "c2", "result": "fail"}]
check("brief: latest result per case", failing_cases(rows) == ["b/c2"])

# check_repo.check_commands
with tempfile.TemporaryDirectory() as tmp:
    root = Path(tmp)
    (root / ".claude/commands").mkdir(parents=True)
    (root / ".claude/skills/real").mkdir(parents=True)
    (root / ".claude/skills/real/SKILL.md").write_text("---\nname: real\ndescription: x\n---\n")
    (root / ".claude/commands/ok.md").write_text("---\ndescription: ok\n---\nRun the `real` skill.\n")
    (root / ".claude/commands/bad.md").write_text("---\ndescription: bad\n---\nRun the `ghost` skill.\n")
    before = len(check_repo.problems)
    check_repo.check_commands(root)
    new = check_repo.problems[before:]
    del check_repo.problems[before:]
    check("commands: unknown skill caught", len(new) == 1 and "ghost" in new[0])

# guard hook
for path, blocked in [("/p/.env", True), ("/p/.env.local", True), ("/p/.env.example", False),
                      ("/p/.env.sample", False), ("/p/.secrets/k", True), ("/p/cert.pem", True),
                      ("/p/src/env.ts", False)]:
    check(f"guard secret {path}", bool(guard.SECRET_RX.search(path)) == blocked)
check("guard flags console.log in src", bool(guard.leftovers(Path("/p/src/a.js"), "console.log(x)")))
check("guard flags string timer", bool(guard.leftovers(Path("/p/src/a.js"), "setTimeout('go()', 5)")))
check("guard allows $eval in e2e", not guard.leftovers(Path("/p/e2e/home.spec.ts"), "await page.$eval('h1', f)"))
check("guard allows print in tests", not guard.leftovers(Path("/p/tests/test_a.py"), "print(x)"))
check("guard checks latest.ts", bool(guard.leftovers(Path("/p/src/latest.ts"), "debugger")))
check("guard ignores old lines", not guard.leftovers(Path("/p/src/a.js"), "const y = 1;"))

failed = 0
for name, ok in results:
    failed += not ok
    print(f"{'ok  ' if ok else 'FAIL'} {name}")
sys.exit(1 if failed else 0)
