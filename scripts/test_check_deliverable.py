#!/usr/bin/env python3
"""Self-tests for check_deliverable.py. Run: python3 scripts/test_check_deliverable.py"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from check_deliverable import banned_phrases, check_text  # noqa: E402

PHRASES = banned_phrases()


def levels(text: str, suffix: str = ".md", draft: bool = False) -> set[str]:
    return {level for level, _, _ in check_text(text, suffix, PHRASES, draft)}


CASES = [
    ("clean copy", levels("Pane a lievito madre, ogni giorno in Via Esempio 1."), set()),
    ("needs fact", levels("Aperti dal [NEEDS FACT: anno]."), {"FAIL"}),
    ("needs fact draft", levels("Aperti dal [NEEDS FACT: anno].", draft=True), {"FLAG"}),
    ("needs copy html", levels("<!-- NEEDS COPY: subheadline -->", ".html"), {"FAIL"}),
    ("unverified", levels("- Phone: +39 02 0000 0000 [unverified]"), {"FAIL"}),
    ("brand misspelled", levels("Made by Digialto."), {"FAIL"}),
    ("brand ok", levels("Made by DigiAlto. DIGIALTO wordmark."), set()),
    ("brand email/url", levels("Write to digialto7@gmail.com or see https://digialto.com/x"), set()),
    ("banned phrase", levels("A revolutionary bakery."), {"FLAG"}),
    ("wrapped phrase", levels("An award-winning team."), {"FLAG"}),
    ("phrase inside word", levels("Unlocked doors are a myth."), set()),
    ("rating schema", levels('{"@type": "Bakery", "aggregateRating": {}}', ".json"), {"FLAG"}),
    ("tracking", levels('<script src="https://www.googletagmanager.com/gtm.js"></script>', ".html"), {"FLAG"}),
    ("console.log js", levels("console.log('x');", ".js"), {"FLAG"}),
    ("console.log md ignored", levels("Use `console.log(` to debug.", ".md"), set()),
]

failed = 0
if not PHRASES:
    print("FAIL banned phrases not loaded from knowledge/agency/banned-claims.md")
    failed += 1
for name, got, want in CASES:
    ok = got == want
    failed += not ok
    print(f"{'ok  ' if ok else 'FAIL'} {name}" + ("" if ok else f" -> got {got}, want {want}"))
sys.exit(1 if failed else 0)
