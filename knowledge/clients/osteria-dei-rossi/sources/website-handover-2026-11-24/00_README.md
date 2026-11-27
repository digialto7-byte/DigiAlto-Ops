# Osteria dei Rossi: handover kit

1. Put the owner's photos and videos in `images-here/` and any style references in `brand-references-here/`.
2. Open a new Claude Code session on this folder.
3. Paste the prompt from `03_INITIAL_PROMPT.md` (fill the facts you know).

| File | What it is |
|---|---|
| `01_STRUCTURE.md` | Project folders, page architecture with the search intent each page must win, tech stack, SEO plan for Siena, motion principles, CLAUDE.md template |
| `02_SKILLS.md` | Skills, agents and tools to use, by phase |
| `03_INITIAL_PROMPT.md` | The paste-ready first prompt |
| `04_REFERENCE_ilchristina.md` | Analysis of ilchristina.com: how it tells its story, its wording patterns, why it ranks (and where it doesn't), lessons and what not to copy; screenshots in `brand-references-here/ilchristina/` |
| `toolkit/` | Scripts reused from FCOMM: `build/relativize.mjs`; `qa/` link checker, browser QA, contrast checks, motion check, screenshots, local server; `video/` motion-reel recorder; `launcher/` double-click site opener (port 8650) |

The toolkit scripts were written for the FCOMM codebase. The new session should adapt paths and selectors, not use them blindly.
