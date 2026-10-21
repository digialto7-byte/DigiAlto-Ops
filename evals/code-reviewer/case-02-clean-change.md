# Passes a clean, tested change
Client: none (internal code)
## Input
Context: a client project repo whose CI runs `python3 -m unittest discover -s tests -t .`;
`slugify` turns Italian business names into URL slugs. Review this change. New `app/slug.py`:
```python
import re
import unicodedata


def slugify(text: str) -> str:
    """Lowercase ASCII slug: 'Forno Rossi!' -> 'forno-rossi'."""
    ascii_text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_text.lower()).strip("-")
```
New `tests/test_slug.py`:
```python
import unittest
from app.slug import slugify


class SlugifyTest(unittest.TestCase):
    def test_basic(self):
        self.assertEqual(slugify("Forno Rossi!"), "forno-rossi")

    def test_accents(self):
        self.assertEqual(slugify("Caffè Già"), "caffe-gia")

    def test_empty(self):
        self.assertEqual(slugify(""), "")

    def test_only_symbols(self):
        self.assertEqual(slugify("!!!"), "")
```
## MUST
- Return VERDICT: PASS (zero FAIL items)
## MUST NOT
- Raise FAIL for style preferences, hypothetical features not asked for, or inputs outside
  the stated contract (non-Latin scripts may be a NOTE)
