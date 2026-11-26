# QA ledger: Osteria dei Rossi website, versions 1 and 2

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

---

# Version 2 (founder's feedback of 2026-11-25)

Story-first home, wine list and "Dove siamo" pages, four fine-line animations. Same method as
version 1: automatic gates, the lead's own look at the pages, then the reviewer.

## V2 round 0: static build and the lead's look (2026-11-25)

The lead looked at every page of the static build at 1440 and 390 px (full-page captures) before
any motion was added. Fixed there: the menu hero cropped the Torre del Mangia on desktop (the
drawing is now never cropped); the boar drawing was too small; the "Dove siamo" page repeated its
`h1` above the map; the boar drawn by the svg-designer did not read as a wild boar and was
redrawn by the lead.

## V2 round 1: the four animations (motion specialist, then the lead), 2026-11-25

| Animation | What plays | Length |
|---|---|---|
| Menu book (`/menu/`) | Siena skyline draws with the Torre del Mangia last, the book rises with its title, the cover turns, the page fills the screen | about 2.0 s |
| Wine pour (`/vini/`) | table and glass draw, the hand tilts the bottle, the wine rises, the "Carta dei vini" card opens | about 2.7 s |
| Pici (`#pici`) | six strands fall and settle into a nest; follows the scroll on desktop, plays once on phones | 1.6 s on phones |
| Boar (dolceforte photo) | walks in from the left, four steps, ground line, a nod; once | about 2.0 s |

Checks: the specialist's harness (250 behaviour checks) and the lead's independent spot check
(118 checks, 116 pass; the 2 misses were the test asking for an anchor that does not exist):
each page intro plays once per session, the skip button ends it, key P replays it, a link with a
hash never shows it, nor does reduced motion or a browser without JavaScript; the `h1` stays in
the render tree under the cover; the gate intro of the home page is unchanged. The lead looked
at frame sequences of all four at 1440 and 390 px. Changed after that look: the boar is larger
on phones.

## V2 round 2: automatic gates and performance (2026-11-25 and 26)

| Gate | Result |
|---|---|
| `check_deliverable.py` | 0 FAIL, 1 FLAG (the known `plan.md` line) |
| `viewport_check.py` at 360 px | all pages ok |
| `qa/qa-site.cjs` with axe-core, 11 pages at 1440, 390 and 360 px, reduced motion, no JavaScript | 0 FAIL, 0 NOTE |
| Lighthouse mobile, performance | home 96 to 97 in six runs of six after the fix below (LCP 1.65 s); menu 97 to 99; wine list 100; Dove siamo 100. In about one run in six on any page the first paint itself is measured twice as late on the test machine and the score drops to 87 to 92 (LCP equal to first paint; seen on version 1 too) |
| Lighthouse mobile, accessibility, best practices, SEO | 100 / 100 / 100 on every page measured, after the fix below |

Found by Lighthouse: on the wine list the first section was still fading in when the pour lifted,
and an accessibility audit taken at that moment read the half-faded text as low contrast (96).
Fix in `main.js`: text that is on screen under the book or the pour takes its place under the
cover.

Not checked, and why: real phones and Safari or Firefox (only headless Chromium is available
here); screen readers; Google's Rich Results test; field data.

## V2 round 3: facts and brand (reviewer), 2026-11-26

First verdict: FAIL, 12 findings (1 blocker, 5 should fix, 6 nits). About 160 facts verified; the
founder's requests all answered; prices, hours, contacts, wine names, tags and markup correct.

| # | Finding | Author | Fix |
|---|---|---|---|
| 1 | Blocker: the menu's own "le migliori carni … distintiva e unica" (Fiorentina) and "storica ed esclusiva" (Spaghetti alla Chitarra) are unverifiable claims | lead (menu generator) | The sentence and the word are left off the website, page and markup, both languages, like the "only ones in Siena" sentence before them; the question to the founder stays open (`plan.md` section 6) |
| 2 | "Our meat comes from a free-range farm" said of all Cinta Senese; the menu says it of the Tegamata | copywriter | Sentence now names the Tegamata |
| 3 | The pici question on the menu page named pici with wild boar ragù, which is not on the live menu | copywriter | Answer lists the three pici dishes of the menu; a link leads to the pici chapter of the home page |
| 4 | Pici text said "long" and "a simple dough that leaves room to the sauce" | copywriter | Reduced to the approved description |
| 5 | Internal links of the SEO table missing on the pages | copywriter (labels), web-builder | Links added: dolceforte to the second courses, desserts, "pici explained", drinks, three closing links on Dove siamo |
| 6 | The SEO addendum forbade "tutto l'anno" for the truffle while the pages use the founder's caption; it also described the price note differently from the page | copywriter | Addendum brought in line with the pages; one question for the founder |
| 7 | Wine-list markup put the producer in a description; three unproofed readings were in the markup | lead (wine generator) | Name is "wine, producer"; entries marked `"proofread": false` in the source show on the page only |
| 8 to 11 | Italian phrasing, two Italian and English mismatches, "al bancone" without a source, Cinta answer without the Tagliere del Cacciatore | copywriter | Fixed as proposed |
| 12 | The spec called the map a link | copywriter | Spec corrected: a text link sits above the map, the map is a drawing |

Second verdict (2026-11-26): FAIL on one open item. Eleven findings confirmed fixed; one row of the
internal-links table still had no link on the pages (a second link in the booking block), and the
pici answer on the menu page used a different word order from the home page. The lead removed
the row (the booking block keeps one link, to Dove siamo), aligned the sentence, and brought two
lines of the SEO addendum in line with the wine generator. Third and final verdict: **PASS**
(about 75 facts re-verified in the last rounds, none unsupported; no new finding).

Left for the founder, noted by the reviewer and not failures: the three wine names read from the
photo of the printed list and the lead's heading "Rosé e bollicine"; "tartufo fresco, tutto
l'anno" next to the menu's "Tartufo di Stagione"; whether the menu's own claims may come back.

## V2 final gates on the delivered build (2026-11-26)

| Gate | Result |
|---|---|
| `check_deliverable.py` | 0 FAIL, 1 FLAG (judged not a failure) |
| `viewport_check.py` at 360 px, pages opened from disk | all pages ok |
| `qa/qa-site.cjs` with axe-core | 0 FAIL, 0 NOTE, 11 pages |
| Lighthouse mobile | at target (see V2 round 2; measured before the text fixes of round 3, which changed no script, style or image except one spacing rule) |
| Reviewer | PASS on the third verdict, after two fix rounds |
