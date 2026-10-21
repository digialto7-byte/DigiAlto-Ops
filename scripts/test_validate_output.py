#!/usr/bin/env python3
"""Self-tests for validate_output.py. Run: python3 scripts/test_validate_output.py"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from validate_output import is_secret_path, validate_html, validate_js, validate_svg  # noqa: E402

GOOD_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Fish</title><path d="M2 12h20"/></svg>'
CASES = [
    ("good svg", validate_svg(GOOD_SVG), False),
    ("svg script", validate_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><script>x</script></svg>'), True),
    ("svg onload", validate_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" onload="x()"/>'), True),
    ("svg no ns", validate_svg('<svg viewBox="0 0 1 1"/>'), True),
    ("svg broken", validate_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><path></svg>'), True),
    ("svg external href", validate_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1"><use xlink:href="https://x.y/a.svg#b"/></svg>'), True),
    ("svg internal href", validate_svg('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1"><defs><path id="a" d="M0 0"/></defs><use xlink:href="#a"/></svg>'), False),
    ("good html page", validate_html('<!doctype html><html lang="it"><head><title>T</title></head><body><main><h1>Ciao</h1><p>Testo<p>Altro</main></body></html>'), False),
    ("good fragment", validate_html('<section id="hero"><h2>Hi</h2><ul><li>a<li>b</ul></section>'), False),
    ("onclick", validate_html('<button onclick="go()">Go</button>'), True),
    ("js url", validate_html('<a href="javascript:alert(1)">x</a>'), True),
    ("inline script eval", validate_html('<main><h1>x</h1></main><script>eval(location.hash)</script>'), True),
    ("inline script ok", validate_html('<main><h1>x</h1></main><script>document.querySelector("h1").addEventListener("click", () => {})</script>'), False),
    ("ld+json not js", validate_html('<main><h1>x</h1></main><script type="application/ld+json">{"text": "Never use eval() here"}</script>'), False),
    ("module script checked", validate_html('<main><h1>x</h1></main><script type="module">eval(x)</script>'), True),
    ("js eval", validate_js("const r = eval(input);"), True),
    ("js $eval ok", validate_js("await page.$eval('h1', e => e.textContent);"), False),
    ("js new Function", validate_js("const f = new Function('a', 'return a');"), True),
    ("js document.write", validate_js("document.write('<p>hi</p>');"), True),
    ("js string timer", validate_js("setTimeout('go()', 10);"), True),
    ("js clean", validate_js("setTimeout(() => go(), 10); el.textContent = msg; evaluate();"), False),
    ("secret .env", [] if not is_secret_path("/repo/.env") else ["blocked"], True),
    ("secret .secrets", [] if not is_secret_path("/repo/.secrets/key.txt") else ["blocked"], True),
    ("normal path", [] if not is_secret_path("/repo/clients/a/site/index.html") else ["blocked"], False),
]

failed = 0
for name, errors, expect_error in CASES:
    ok = bool(errors) == expect_error
    failed += not ok
    print(f"{'ok  ' if ok else 'FAIL'} {name}" + ("" if ok else f" -> {errors}"))
sys.exit(1 if failed else 0)
