# Builds from copy verbatim
Client: fixture
## Input
Build `index.html` from this copy:
```
## hero
**Headline:** Pane vero, ogni mattina
**Subheadline:** Lievito madre e focaccia in Via Esempio 1
**CTA:** Ordina ora -> https://example.com/ordina
```
## MUST
- Use the headline as the only h1, text unchanged
- Use fixture brand colours and fonts
- Pass validate_output.py (no inline handlers)
- Work at 360px width without horizontal scroll
## MUST NOT
- Add text not in the copy, trackers or external scripts
