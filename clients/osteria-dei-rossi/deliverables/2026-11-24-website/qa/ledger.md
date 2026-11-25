# QA ledger: Osteria dei Rossi website, version 1

One entry per QA round. Each round uses a different lens, then a fix pass by the author of the
work. Internal document.

## Round 0: automatic gates on the first full build (2026-11-25)

| Check | Result |
|---|---|
| `validate_output.py file` on every HTML, SVG and JS file | pass (28 files) |
| `check_deliverable.py` on the folder | 0 FAIL, 1 FLAG (`plan.md`: the phrase "number one" inside the list of things we do not claim; judged not a failure by the reviewer) |
| `qa/qa-site.cjs` over http: 7 pages at 1440, 390 and 360 px, reduced motion, no JavaScript, the gate intro, real-pixel contrast, axe-core | 0 FAIL |
| `viewport_check.py` (pages opened from disk at 360 px) | FAIL on every page: no overflow, but Chromium blocks font files opened from `file://` and logs errors; the 404 page used root-relative URLs |
| Lighthouse, mobile | Home 97 / 100 / 100 / 100 (LCP 1.5 s, CLS 0); menu 100 / 100 / 100 / 100 (LCP 1.4 s) |

Fix pass: fonts are chosen by the head script (embedded sheet from disk, normal files over
http); the 404 page is self-contained.

Tooling defects found and fixed in `qa-site.cjs` itself: the no-JavaScript pass waited on a page
timer that never fires with scripts off; the contrast sampler took one screenshot per text line
and was too slow on a long page (now one per photo block).

## Round 1: facts and brand (reviewer), 2026-11-25

Verdict: FAIL, 10 findings. All business facts, hours, links, prices and both menu pages matched
the profile and the approved menu.

| # | Finding | Author | Fix |
|---|---|---|---|
| 1 | "The menu follows the season and the market" is not an approved fact | copywriter | Claim removed; the note now says which dishes carry the seasonal label |
| 2 | FAQ promised that a table outside can be requested when booking | seo-specialist | Sentence removed from the FAQ text and its markup |
| 3 | A photo caption named the dish as wild boar; the founder's caption does not | copywriter | Caption follows the founder's caption; the photo files were renamed |
| 4 | Privacy note said how the osteria handles callers' data | copywriter | Paragraph removed; the note now also states the one session-storage entry |
| 5 | `priceRange` "€5-€30" in the Restaurant markup | seo-specialist | Removed |
| 6 | Steaks sold by weight were marked up as whole-dish prices | seo-specialist, web-builder | Unit price (per 100 g) in the offer; descriptions left as published |
| 7 | Business-profile descriptions called dolceforte "a medieval recipe" | seo-specialist | Reworded to the approved history note |
| 8 | Advice to seed profile questions from a personal account | seo-specialist | Removed; the business answers real questions in its own name |
| 9 | English menu badges differed from the copy deck | web-builder | One set of labels on home, FAQ and menu |
| 10 | 404 page in Italian only | web-builder | Bilingual, with the phone link |

Notes acted on: the menu heading now names Siena; parking wording aligned; English price
format unified; the Restaurant node is identical on both language versions; `seo.md` brought
back in line with the built pages.

## Round 1b: UX and visual craft (independent design audit), 2026-11-25

No blocking finding; 6 major, 8 minor. Major: the arch outline was clipped by a base rule; the
menu's section nav floated under a hidden header on phones; the "via" rail collided with content
on laptops; the phone hero scrim buried the photo; the focus ring was gold on cream (2.5:1);
header labels wrapped at 1024 px. Minor: tablet breakpoints, dotted leaders on wrapped names,
repeated photos, map timing and label overlap, hairline figures, soft full-bleed photos on
phones, section order on phones, footer tap targets. All sent to the builder as one fix pass.
