# QA ledger: Osteria dei Rossi website, version 1

One entry per QA round. Each round uses a different lens, then a fix pass by the author of the
work. Internal document.

## Round 0: automatic gates on the first full build (2026-11-25)

| Check | Result |
|---|---|
| `validate_output.py file` on every HTML, SVG and JS file | pass (28 files) |
| `check_deliverable.py` on the folder | 0 FAIL, 1 FLAG (`plan.md` line 100: a banned-claims phrase quoted inside the list of things we do not claim; judged not a failure by the reviewer) |
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

Found by the builder during that pass: on phones a `resize` event just after the start rebuilt
the intro timeline and left the gate intro unplayed until the 5 s failsafe. Fixed in `main.js`;
ten fresh loads at 390×844 ended the intro within 3 s every time.

## Round 2: performance (Lighthouse after the fix pass), 2026-11-25

Regression: on the Italian home the largest paint moved to 5.2 s in two runs out of three. Cause:
the full-viewport hero photo is not a largest-paint candidate, so the candidate is the hero's
lead paragraph, and the intro was hiding the hero text before its first paint when the script
started early. Fix: the text now stays painted under the closed gate and is hidden only just
before the doors open; the font stylesheet no longer blocks rendering.

After the fix (mobile, five runs on the Italian home): 96, 96 and 98 with LCP 1.5 s; 74 and 88
in two runs where the first paint itself was slow on the test machine (LCP equal to first
paint in both). English home 97 (LCP 1.5 s). Menu, Italian and English: 100 (LCP 1.4 s).
Accessibility, best practices and SEO: 100 on every page measured. CLS 0 to 0.008.
The local test server does not compress or cache; a real host should do both.

## Round 3: facts and brand again (reviewer), 2026-11-25

Second verdict: FAIL with one finding (the owner's photo list in `seo-offsite.md` still named
photo 15 as a wild boar dish); all ten earlier findings confirmed fixed. The row was corrected
by the lead (a one-cell change dictated by the finding), together with two documentation notes
in `copy.md`. Third and final verdict: PASS (about 140 facts verified, none unsupported).

Left for the founder by the lead's decision, noted by the reviewer and not failures: the menu's
own wording kept word for word ("le migliori carni", "ricetta storica ed esclusiva", "antica
ricetta medievale toscana"); the intro label "Porta Ovile, la porta del Bruco"; `lang="en"` on
the English pages; the founder's caption "Tartufo fresco, tutto l'anno"; confirmation of the
three story points taken from the menu text; a legal check of the privacy note.

## Final gates on the delivered build (2026-11-25)

| Gate | Result |
|---|---|
| `validate_output.py file` (28 HTML, SVG and JS files) | pass |
| `check_deliverable.py` | 0 FAIL, 1 FLAG (judged not a failure) |
| `viewport_check.py` at 360 px, pages opened from disk | 7 of 7 ok |
| `qa/qa-site.cjs` with axe-core | 0 FAIL, 7 pages |
| Lighthouse mobile | at target (see round 2) |
| Reviewer | PASS on the third verdict, after two fix rounds |

Not checked, and why: real phones and Safari or Firefox (only headless Chromium is available
here); screen readers; Google's Rich Results test (no network access to it); field data.
