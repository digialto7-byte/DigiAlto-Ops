#!/usr/bin/env python3
"""Deterministic pre-review checks for a deliverable file or folder.

Run before the `reviewer` subagent so it can spend its attention on facts and judgement:
  python3 scripts/check_deliverable.py clients/<slug>/deliverables/<folder>/ [--draft]

FAIL  (exit 1): placeholders left in, `[unverified]` copied into output, "Digialto" misspelling.
FLAG  (exit 0): things the reviewer must judge: banned phrases, review/rating schema,
                tracking scripts, console.log/debugger in shipped JS.
--draft downgrades placeholders to FLAG (work in progress is allowed to have gaps).
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BANNED_FILE = ROOT / "knowledge/agency/banned-claims.md"
TEXT_SUFFIXES = {".md", ".txt", ".html", ".htm", ".json", ".svg", ".js", ".css"}

PLACEHOLDER_RX = re.compile(r"\[NEEDS FACT[^\]]*\]|NEEDS COPY|\bTODO\b|\bFIXME\b|lorem ipsum", re.I)
UNVERIFIED_RX = re.compile(r"\[unverified\]", re.I)
# Any spelling of the brand except "DigiAlto" / "DIGIALTO". Emails, URLs and handles are skipped.
BRAND_RX = re.compile(r"(?<![\w@/.-])digialto(?![\w@-])(?!\.[a-z])", re.I)
BRAND_OK = {"DigiAlto", "DIGIALTO"}
SCHEMA_RX = re.compile(r'"(aggregateRating|review)"\s*:')
TRACKING_RX = re.compile(r"googletagmanager\.com|google-analytics\.com|gtag\(|fbq\(|connect\.facebook\.net|hotjar", re.I)
JS_DEBUG_RX = re.compile(r"\bconsole\.log\(|\bdebugger\b")


def banned_phrases() -> list[str]:
    """Quoted phrases from banned-claims.md ("go viral", "synergy", ...), minus slash variants."""
    if not BANNED_FILE.exists():
        return []
    found = re.findall(r'"([^"]{3,60})"', BANNED_FILE.read_text(encoding="utf-8"))
    # Phrases can wrap across lines in the Markdown source ("award-\n  winning").
    phrases = {re.sub(r"\s+", " ", re.sub(r"-\s+", "-", p)) for p in found}
    return sorted(p for p in phrases if "/" not in p and p.lower() != "digialto")


def check_text(text: str, suffix: str, phrases: list[str], draft: bool) -> list[tuple[str, int, str]]:
    """Return (level, line, message) findings for one file's text."""
    out: list[tuple[str, int, str]] = []
    for n, line in enumerate(text.splitlines(), 1):
        for m in PLACEHOLDER_RX.finditer(line):
            out.append(("FLAG" if draft else "FAIL", n, f"placeholder left in: {m.group(0)}"))
        if UNVERIFIED_RX.search(line):
            out.append(("FAIL", n, "[unverified] marker copied into a deliverable"))
        for m in BRAND_RX.finditer(line):
            if m.group(0) not in BRAND_OK:
                out.append(("FAIL", n, f'brand spelled "{m.group(0)}"; must be "DigiAlto"'))
        low = line.lower()
        for p in phrases:
            if re.search(rf"(?<!\w){re.escape(p.lower())}(?!\w)", low):
                out.append(("FLAG", n, f'banned-claims phrase: "{p}"'))
        if SCHEMA_RX.search(line):
            out.append(("FLAG", n, "review/rating schema: only allowed with approved review data"))
        if suffix in {".html", ".htm", ".js"} and TRACKING_RX.search(line):
            out.append(("FLAG", n, "tracking script: needs 'Tracking approved' in the profile and consent"))
        if suffix == ".js" and JS_DEBUG_RX.search(line):
            out.append(("FLAG", n, "console.log/debugger left in shipped JS"))
    return out


def iter_files(target: Path):
    if target.is_file():
        yield target
        return
    for f in sorted(target.rglob("*")):
        if f.is_file() and f.suffix.lower() in TEXT_SUFFIXES:
            yield f


def main(argv: list[str]) -> int:
    draft = "--draft" in argv
    paths = [a for a in argv[1:] if not a.startswith("--")]
    if not paths:
        print(__doc__)
        return 2
    phrases = banned_phrases()
    fails = flags = 0
    for p in paths:
        target = Path(p)
        if not target.exists():
            print(f"FAIL {p}: does not exist")
            fails += 1
            continue
        for f in iter_files(target):
            text = f.read_text(encoding="utf-8", errors="ignore")
            for level, line, msg in check_text(text, f.suffix.lower(), phrases, draft):
                print(f"{level} {f}:{line} — {msg}")
                fails += level == "FAIL"
                flags += level == "FLAG"
    print(f"check_deliverable: {fails} FAIL, {flags} FLAG")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
