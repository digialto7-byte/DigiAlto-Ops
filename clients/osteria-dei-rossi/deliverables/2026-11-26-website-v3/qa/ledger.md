# QA ledger: Osteria dei Rossi website, version 3

Internal record of what was checked on version 3, by whom, and what was fixed. The ledger of versions 1
and 2 is in `../../2026-11-24-website/qa/ledger.md`. Version 2 is kept as delivered: `git diff` of its
folder against its last commit (3343d1c) is empty.

Version 3 follows the founder's feedback of 2026-11-26
(`knowledge/clients/osteria-dei-rossi/sources/founder-website-feedback-2026-11-26.md`).

## V3 round 0: audits and plan (2026-11-26)

Five specialists read version 2 before anything was changed (`audit/`): creative, copy, frontend, SEO,
marketing. The lead's plan from them is `design-v3.md`.

## V3 round 1: static build and the lead's look (2026-11-26)

- Copy deck and SEO specification rewritten for version 3 (copywriter, seo-specialist). Lead's edits:
  "L'osteria l'ha aperta Giuseppe «Beppe» Carrieri" (the earlier wording read as if he had opened the gate);
  the timeline year 1992 restored.
- Icons (svg-designer): six new or redrawn. The lead rendered every icon at 170 px and 44 px on cream and on
  green and redrew three that read poorly (tower, cantuccio in the glass, fork).
- Static pages (web-builder): the build refuses a euro sign or a dish row on the home page, a missing frozen
  anchor and a duplicate id. Lead looked at full-page screenshots at 1440 and 390 px and at the gallery stage.
- `check_deliverable.py` failed once on two lines of `audit/marketing.md` (a banned phrase quoted, an
  unverified marker written out); both lines reworded.

## V3 round 2: motion (motion specialist, then the lead), 2026-11-26

Motion specialist (`site/main.js`, `site/motion.css`, the inline head script):

- The "La casa" gallery: sticky stage, the photo changes at a threshold with a 0.35 s wipe, never tied to the
  scroll position; forwards, backwards, on a fast scroll, from the dots, from the exit link; plain tiles with
  reduced motion, without JavaScript, or if the script does not start within 5 s.
- One small move per line icon after it draws, headings rising in two lines, the footer skyline, the
  page-to-page arch wipe with its guard (never during an opening, with a hash, or across languages), the
  language switch keeping the anchor.
- The specialist's own checks on the final script: gallery 101, other motion 115, behaviour of the openings
  250, failsafes 23, page transitions 30, console 22 page loads, extra 14, battlements 7: all pass.
- Version 2 animations unchanged: the gate, the book and the pour compared frame by frame against the
  version 2 script at 1440 and 390 px, 42 frames, all identical.
- Performance: `main.js` grew from 78.8 KB to 102.0 KB (22.9 KB to 29.7 KB compressed), `styles.css` from
  46.6 KB to 55.0 KB (10.8 KB to 12.9 KB compressed). The specialist
  moved the gallery's measuring to when the stage is near, after which interleaved Lighthouse runs of the
  home page gave a median of 94 against 95 for the pre-motion build, inside the run-to-run spread.

The lead's look found one fault the checks had not:

- **Gallery caption under the dots.** At 1024 to 1440 px wide the longest caption takes three lines, but its
  row was only as tall as a fixed minimum height, so the third line ran under the photo dots. Cause: the
  `min-height` on the caption replaced its content-based minimum in the grid's row sizing. Fix (lead,
  `site/styles.css`): no `min-height`; the four captions share one row, which is as tall as the longest.
  Measured at 320×568, 360×640, 375×667, 360×740, 390×844, 412×915, 768×1024, 1024×768, 1280×720,
  1366×768, 1440×900, 1920×1080 and 2560×1440, Italian and English: the caption ends above the dots at
  every size. On phones no taller than 608 px the frame is shorter (`--gh: min(32svh, 125vw)`) so the exit
  link stays above the booking bar.
- The Italian share-image text of Dove siamo described a sign that the 1200×630 crop does not show; it now
  describes the picture (the marble street plate).

## V3 round 3: facts and brand (reviewer), 2026-11-26

**First verdict: FAIL**, two blockers, four should-fix items, nits.

| # | Finding | Fix | By |
|---|---|---|---|
| 1 (blocker) | Three home-page sentences followed the menu's descriptions (cinghiale al coccio, porcini, crostini neri); "three ways" listed four | Rewritten in the home page's own words; exactly three ways | copywriter |
| 2 (blocker) | The booking links' accessible names did not contain the visible label (WCAG 2.5.3) on every page | `call_aria`, `whatsapp_aria` start with the visible label, both languages | copywriter |
| 3 | `perche.fact_1` said different things in Italian and English, and tied 1992 to the street | "Aperta nel 1992. Siamo nella Contrada del Bruco, a Siena." and its twin; `contrada.step_1_text` without the street | copywriter, lead |
| 4 | The boar drawing still had `id="cinghiale"`, against the plan | Ids renamed `svg-cinghiale*` in the asset and in `main.js`; plan and SEO note say what is built for the other version 2 drawings | lead |
| 5 | `seo-v3.md` section 7 did not match the built links | Table rewritten row by row from the built pages | lead |
| 6 | `qa/ledger.md` missing | This file | lead |

Nits taken: the fiorentina line says the guest chooses the weight, not the cut; "Inserita da Gambero Rosso…";
the circular welcome sentence; "sono conditi con"; "coccio di terracotta"; "vino dolce da dessert"; deck
notes. Lead's edits on the copywriter's pass: "Oggi nella Contrada del Bruco" read as if the osteria had
moved ("Siamo nella…"); "trovate un tavolo" read as a promise of a free table (removed).

After the rename the boar walk was replayed at four widths: the end frames are pixel-identical to the
earlier captures.

**Second verdict: PASS.** Facts verified about 75, unsupported 0. One wording nit taken after the verdict
("si paga al peso, che scegliete voi" / "priced by the weight you choose"); the final gates below ran on
the files with that change.

Left as they are, on purpose: the grotto photo appears twice in `#cantina` (as in version 2); external
links open in a new tab without a warning; the heading "Dal 1992 / in Contrada del Bruco" (as in version 2;
whether the osteria opened at this address is a question for the founder); the menu page's edits against
banned claims.

## V3 final gates on the delivered build (2026-11-26)

Run by the lead on the files as committed, after the last text change.

| Gate | Result |
|---|---|
| `python3 scripts/check_repo.py` | passes |
| `python3 scripts/check_deliverable.py` on the folder | 0 FAIL, 0 FLAG |
| `python3 scripts/viewport_check.py` at 360 px | 15 pages ok |
| Build guards (`tools/build_pages.py`) | no euro sign and no dish row on the home pages, 17 frozen anchors on both languages, no duplicate id |
| `qa/qa-site.cjs` with axe-core: 11 pages at 1440, 390 and 360 px, reduced motion, no JavaScript, the openings | 0 FAIL, 0 NOTE |
| Lighthouse mobile, three runs a page (performance / accessibility / best practices / SEO) | home 95, 95 and one run at 83; menu 98, 98, 98; wine list 100, 100, 99; Dove siamo 100, 100, 100; the other three scores 100 on every run |
| Offline package opened from disk (`file://`), desktop and phone size: every link and file, every page, the three openings, the gallery, a dish link, both languages | 171 of 171 pass |
| Version 2 folder | unchanged |
| `reviewer` | PASS on the second verdict |

The home run at 83 measured the first paint about twice as late (LCP 3.2 s against 1.65 s) with the same
page weight; versions 1 and 2 showed the same occasional slow run on this test machine, and the motion
specialist's interleaved runs gave the same spread for the build without the new motion.

Not checked: real phones, Safari and Firefox (Chromium only, so the page-to-page arch wipe and the sticky
gallery were not seen in Safari), screen readers, Google's Rich Results test, field data. No separate code
review of `site/main.js` and the build tools was run.
