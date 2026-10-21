#!/usr/bin/env python3
"""Claude Code hook: guard and validate files written by agents.

Usage (from .claude/settings.json):
  validate_output.py pre   # PreToolUse  -> block writes to secret paths
  validate_output.py post  # PostToolUse -> validate .html / .svg content
  validate_output.py file <path> [...]   # manual / CI use

Exit codes follow the Claude Code hook contract:
  0 = ok, 2 = blocking error (stderr is shown to Claude), 1 = non-blocking warning.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

SECRET_PATTERNS = [
    re.compile(r"(^|/)\.env(\..*)?$"),
    re.compile(r"(^|/)\.secrets(/|$)"),
    re.compile(r"\.(pem|key|p12|pfx)$"),
    re.compile(r"(^|/)id_(rsa|ed25519)(\.pub)?$"),
]

SVG_NS = "{http://www.w3.org/2000/svg}"
SVG_FORBIDDEN_TAGS = {"script", "foreignObject", "iframe", "embed", "object"}
EVENT_ATTR = re.compile(r"^on[a-z]+$", re.I)
JS_URL = re.compile(r"^\s*javascript:", re.I)
HTML_EVENT_ATTR = re.compile(r"<[^>]+\son[a-z]+\s*=", re.I)
HTML_JS_URL = re.compile(r"""(href|src|action|formaction)\s*=\s*["']?\s*javascript:""", re.I)
# Dynamic code execution and document.write in shipped JS (inline <script> or .js files)
JS_UNSAFE = re.compile(r"(?<![\w$.])eval\s*\(|\bnew\s+Function\s*\(|\bdocument\.write(ln)?\s*\(|\bset(Timeout|Interval)\s*\(\s*[\"'`]")
# Inline scripts that execute (no type, or a JS type); JSON-LD and templates are data, not code.
HTML_JS_SCRIPT = re.compile(
    r"<script\b(?![^>]*\btype\s*=\s*[\"']?(?!(?:text/javascript|module|application/javascript)\b)[\w/+.-]+)[^>]*>(.*?)</script>",
    re.I | re.S)

# html5lib parse errors that are normal for fragments or harmless
IGNORED_HTML_ERRORS = {
    "expected-doctype-but-got-start-tag",
    "expected-doctype-but-got-chars",
    "expected-doctype-but-got-eof",
    "unknown-doctype",
}


def is_secret_path(path: str) -> bool:
    p = path.replace("\\", "/")
    return any(rx.search(p) for rx in SECRET_PATTERNS)


def validate_svg(text: str) -> list[str]:
    errors: list[str] = []
    try:
        from defusedxml import ElementTree as ET  # safe against XML bombs
    except ImportError:  # pragma: no cover
        import xml.etree.ElementTree as ET  # noqa: N817
    try:
        root = ET.fromstring(text)
    except Exception as e:  # ParseError or defusedxml errors
        return [f"SVG is not well-formed XML: {e}"]

    if root.tag not in (f"{SVG_NS}svg", "svg"):
        errors.append("Root element must be <svg>.")
    elif root.tag == "svg":
        errors.append('Root <svg> must declare xmlns="http://www.w3.org/2000/svg".')
    if "viewBox" not in root.attrib:
        errors.append("Root <svg> must have a viewBox.")

    for el in root.iter():
        local = el.tag.split("}")[-1]
        if local in SVG_FORBIDDEN_TAGS:
            errors.append(f"Forbidden element <{local}>.")
        if local == "image":
            errors.append("Embedded raster <image> is not allowed.")
        for attr, val in el.attrib.items():
            name = attr.split("}")[-1]
            if EVENT_ATTR.match(name):
                errors.append(f"Forbidden event attribute {name} on <{local}>.")
            if name == "href" and val and not val.startswith("#"):
                errors.append(f"External href '{val}' on <{local}>; only internal #refs allowed.")
            if JS_URL.match(val or ""):
                errors.append(f"javascript: URL in {name} on <{local}>.")
    return errors


def validate_html(text: str) -> list[str]:
    errors: list[str] = []
    if HTML_EVENT_ATTR.search(text):
        errors.append("Inline event handler attribute (on...=) found; attach listeners in JS instead.")
    if HTML_JS_URL.search(text):
        errors.append("javascript: URL found in href/src/action.")
    errors += validate_js(" ".join(HTML_JS_SCRIPT.findall(text)))

    try:
        import html5lib
    except ImportError:
        print("validate_output: html5lib not installed; run `pip install -r requirements.txt`. "
              "HTML structure not checked.", file=sys.stderr)
        return errors

    parser = html5lib.HTMLParser(tree=html5lib.getTreeBuilder("etree"))
    if re.search(r"<html[\s>]", text, re.I):
        parser.parse(text)
    else:
        parser.parseFragment(text)
    for (line, col), code, data in parser.errors:
        if code in IGNORED_HTML_ERRORS:
            continue
        detail = f" {data}" if data else ""
        errors.append(f"HTML parse error at line {line}, col {col}: {code}{detail}")
    return errors


def validate_js(text: str) -> list[str]:
    m = JS_UNSAFE.search(text)
    if m:
        return [f"Unsafe JS '{m.group(0).strip()}': no eval, new Function, string timers or "
                "document.write; use DOM APIs and real functions."]
    return []


def validate_file(path: Path) -> list[str]:
    suffix = path.suffix.lower()
    if suffix not in (".html", ".htm", ".svg", ".js", ".mjs"):
        return []
    try:
        text = path.read_text(encoding="utf-8")
    except Exception as e:
        return [f"Cannot read {path}: {e}"]
    if suffix == ".svg":
        return validate_svg(text)
    return validate_html(text) if suffix in (".html", ".htm") else validate_js(text)


def _hook_input() -> dict:
    try:
        return json.load(sys.stdin)
    except Exception:
        return {}


def main(argv: list[str]) -> int:
    mode = argv[1] if len(argv) > 1 else "post"

    if mode == "file":
        failed = False
        for p in argv[2:]:
            errs = validate_file(Path(p))
            for e in errs:
                print(f"{p}: {e}", file=sys.stderr)
            failed |= bool(errs)
        return 1 if failed else 0

    data = _hook_input()
    tool_input = data.get("tool_input") or {}
    file_path = tool_input.get("file_path") or tool_input.get("path") or ""
    if not file_path:
        return 0

    project_dir = Path(os.environ.get("CLAUDE_PROJECT_DIR") or data.get("cwd") or ".").resolve()
    target = (project_dir / file_path).resolve() if not os.path.isabs(file_path) else Path(file_path).resolve()

    if mode == "pre":
        if is_secret_path(str(target)):
            print(f"Blocked: {file_path} is a secrets path. Secrets never go in this repo.", file=sys.stderr)
            return 2
        try:
            target.relative_to(project_dir)
        except ValueError:
            print(f"Blocked: {file_path} is outside the repository.", file=sys.stderr)
            return 2
        return 0

    errs = validate_file(target)
    if errs:
        rel = target.relative_to(project_dir) if target.is_relative_to(project_dir) else target
        print(f"Validation failed for {rel}:\n- " + "\n- ".join(errs) + "\nFix the file and write it again.",
              file=sys.stderr)
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
