# Osteria dei Rossi website: creative and UX audit of version 2, direction for version 3

Internal document, English, 2026-11-26. Looked at `http://localhost:8651/` at 1440×900 and 390×844: final-state
full-page captures of all nine pages, live-motion captures of the home page, and a throwaway in-browser prototype of
the gallery (scripts and shots in `tmp/audit-creative/`; no site file was touched). Facts only from `profile.md`.

## 1. What works in version 2

- The identity is its own: cream, green and gold, two-line Bodoni headings (upright, then italic), pointed-arch frames, the battlement line, the arrow.
- The five fine-line animations (gate, book, pour, pici, boar) are short and memorable; the hero h1 is painted at once.
- The full-bleed bands (sala, dolceforte, fiorentina, grotta) carry the mood, and text on the scrims reads well at both sizes.
- The explanations (dolceforte, pici, Cinta Senese, cantucci) are content the menu page does not have: keep the words, cut the rows.
- On phones the Chiama/WhatsApp bar is always one tap away; menu, wine list and "Dove siamo" are fast and easy to scan.

## 2. Problems, most serious first

| # | Page · section | Viewport | What I see |
|---|---|---|---|
| 1 | Home · whole page | both | 16,964 px = 18.8 screens at 1440; 21,997 px = 26 screens at 390. `#dispensa` alone is 5,317 px (5.9 screens) and 7,058 px (8.4 screens). 21 dish rows and 17 prices repeat `/menu/`. Too long for a story that should not make people wait |
| 2 | Home · `#casa` strip | both | 1440: photos of 489×326, 264×330 and 383×306 px in an 802 px strip; the largest covers 12% of the screen, more than half the strip is empty cream. 390: 338×225, 273×341, 338×270 stacked over 1,286 px |
| 3 | Home · `#cantina` strip, `#dispensa` small tiles | both | The same "three small tiles" pattern: 383, 358 and 383 px wide in the cantina strip; the porcini trio is 175 px each at 1440 and 155 px on phones. The founder's remark on La casa applies here too |
| 4 | Home · `#dispensa` | both | Five larder rows share one template (h3, paragraph, rows, tiles; only the side flips); 9 of its 13 tiles are a white plate on a dark ground. No line icon in the chapter, although six drawn icons are unused (cinghiale, coccio, pici, tagliere, tartufo, volta) |
| 5 | Home · calls to action | 1440 | After the hero the next booking button is in `#prenota`, 15,800 px (17 screens) later; in between only the header's outlined "Prenota", as light as a nav link. `#prenota` has no picture and runs into the green footer; the hours appear twice back to back (two green screens on phones) |
| 6 | Home · rhythm once the rows go | 1440 | `#tavola` intro: text in the left five columns, the right half (about 600×500 px) is already empty; without the crostini row it is a heading and three lines in 1,000 px of cream. `#pici`: the text column falls to about 420 px beside 900 px of photos. Larder rows lose 90 to 260 px of text each. Coccio: two near-identical top-down photos of one table, then 300 px of blank cream |
| 7 | Home · hero | both | 390: the crop shows a shuttered window and ivy; door and parasols sit under the green scrim and the text, so the first screen does not show the osteria. 1440: two air-conditioning units are the sharpest objects at top centre, right above the headline |
| 8 | All pages · motion | both | One gesture everywhere: 114 `[data-reveal]` fade-ups and 26 masks on the home page, all 0.7 to 0.9 s. Between the hero and the pici only the band parallax reacts to scroll. Pages change with a hard cut |
| 9 | Dove siamo · hero; Menu · section heads | 1440 | Type-only hero with an empty right half and 250 to 350 px blank gaps before "La via" and the map. The menu's seven headings carry a numeral and no drawing, on the most used page |
| 10 | Home · `#pici`; rail | 390; 1440 | Text wraps in a 245 px column beside the drawing (dish names on three lines). The rail's vertical label is unreadable for a moment when it crosses from cream onto a photo |

## 3. The "La casa" pinned gallery

It replaces the three-tile strip of `#casa`; the welcome quote and the sala band above stay as they are. The prototype
confirmed that a sticky stage holds under Lenis at both sizes and that the layout below fits (also at 390×664).

**Photos, in this order** (crops checked in a 4:5 arch frame):

| # | Slug | Source | `object-position` | Caption (existing wording) |
|---|---|---|---|---|
| 1 | `sala-bancone-vista-cucina` | 3:2, up to 2048 | 30% 50% | Il bancone, con vista sulla cucina |
| 2 | `lanterna-ferro-battuto` | 4:5, up to 1280 | 50% 35% | Una lanterna di ferro battuto |
| 3 | `fotografie-storiche-siena-contrada` | 5:4, up to 1280 | 52% 50% | Fotografie di Siena alle pareti |
| 4 | `amaro-al-bancone` | 5:4, up to 1280 | 55% 50% | Amari e liquori al bancone |

Photo 4 moves here from the cantina strip: it is the only room photo with people in it and closes the chapter on the
welcome. Not used: `sala-osteria-tradizionale-toscana` (the band right above), `grotta-volte-in-mattoni-cantina` (band
of chapter VII), the street photos (they belong to "Dove siamo"). Full-bleed is not possible: three of the four are
1280 px tiles and one is portrait. On 2× desktop screens photos 3 and 4 are enlarged about 1.5 times: acceptable.

- **Layout at 1440×900.** One screen (100svh), cream, 12 columns. Columns 1 to 5, centred vertically: the lantern icon, a kicker in words the approved text already uses (for example "Guardatevi intorno"; the copywriter decides), the current caption in Bodoni italic `clamp(1.9rem, 3.2vw, 3rem)` on two lines, the progress mark, the exit link. Columns 7 to 11: one pointed-arch frame, 4:5, height `min(100svh - 9.5rem, 52rem)` = 598×748 px, existing arch mask and gold hairline 12 px outside. That is 34% of the screen: 2.8 times the largest photo of version 2 and 5 times the lantern.
- **Layout at 390×844.** The frame comes first, 4:5, height `min(52svh, 125vw)` = 351×439 px (version 2: 338×225), then kicker, caption at 1.5rem on two reserved lines, progress mark, exit link. Bottom padding equals the Chiama/WhatsApp bar (53 px plus safe area).
- **How scroll drives it.** The wrapper's height is set in CSS (100svh + 3 steps + hold) and the stage is `position: sticky; top: 0`: no ScrollTrigger pin, no pin-spacer, no jitter on iOS. One scroll callback turns the pinned distance into an index. Step per photo: 33svh on desktop (about 300 px: three wheel notches or one short swipe), 40svh on phones; hold on the last photo 16svh (12svh on phones). Pinned scroll in all: 115svh on desktop (1,035 px), 132svh on phones. The first change comes after half a step, so the visitor learns the gesture at once.
- **Not scrubbed, no snap.** Crossing a threshold starts a 0.35 s transition that runs on its own clock; fast scrolling retargets to the photo of the current position and nothing queues. Snap would fight Lenis on the wheel and hijack touch, and with threshold changes the frame never rests between two photos anyway.
- **Transition "la volta", 0.35 s, `--ease`.** The new photo rises inside the arch from the threshold (`clip-path: inset(100% 0 0 0)` to `inset(0)`); the old one stays still underneath; no zoom, no fade. Scrolling back, the upper photo closes downwards. In the same 0.35 s the gold arch line redraws from the left foot over the point to the right foot. Caption: out in 0.12 s, in with an 8 px rise in 0.25 s; all captions share one grid cell, so nothing shifts.
- **Progress mark.** Four small pointed-arch outlines (14×18 px, stroke 1.5, no fill) on one baseline: the current one gold and 1.5 times taller, the others green at 35%. Each is a real button (44 px target, `aria-label` "Foto 2 di 4: …", `aria-current`) that scrolls to its step. No numbers: roman numerals belong to the chapters.
- **Leaving without feeling trapped.** Scroll is never locked and moves at the visitor's speed; the hold is about one screen; the arches show how much is left; under them a text link with the down arrow goes to `#contrada`. Tab order: four arches, exit link, next section. Header, rail, phone booking bar, Page Down and Space behave as everywhere.
- **Loading and SEO.** All four `<img>` are in the HTML as an `<ol>` of `<figure>` with alt, width, height and `loading="lazy"`; nothing is injected by script; `decode()` the next photo when the stage sticks. Italian and English are twins.
- **Reduced motion and no JavaScript: one fallback.** No sticky stage, no stacking: the four figures show as large arch tiles with captions, two per row on desktop (each wider than any tile of version 2), one per row on phones; arches and exit link are hidden. The stacked state hangs on one class that `main.js` sets, so a failed script leaves the static grid. The stage is below the first screen, so the switch cannot shift what the visitor sees.

## 4. The home page without dish rows

| Block | Version 2 | Version 3 | The one link |
|---|---|---|---|
| `#tavola` intro | Kicker, h2, paragraph, crostini row; empty right half | One line of two columns: left `icon-coccio` (72 px), kicker and h2; right the paragraph, which already names the crostino nero. About 520 px high instead of 1,060 | none (the band below has it) |
| Dolceforte band | h3, paragraph, row with price, link | h3, paragraph, link. The text block moves down to the boar's baseline so drawing and text read as one scene; band 80svh | "Il cinghiale in dolceforte, nel menù" → `menu/#secondi` |
| Cinghiale al coccio | Two look-alike 383 px tiles, h3, paragraph, row | One large tile `cinghiale-in-umido-coccio` (7 columns, about 715 px wide) with `piatti-con-contorni-tavola` as a small tile over its lower corner (the contrada pattern); h3 and paragraph | none |
| `#pici` | Drawing, text with four rows, two staggered photos | Drawing (kept, sticky) and text; the second paragraph already lists the four ways. `pici-al-ragu-di-cinghiale` large, `pici-cacio-e-pepe` smaller and overlapping its lower-left, so both columns end together. Phones: drawing above the heading, text at full width | "Guarda i primi piatti" → `menu/#primi` |
| `#dispensa` | Five rows of one template | Three shapes, each larder with its line icon above the h3. **Cinta**: text left, one large tile, the salumi board as a small overlap. **Tartufo**: mirrored, with the raw truffle in a pointed arch (the only arch of the chapter). **Porcini "in tre modi"**: raw porcini large, then the three ways as three equal tiles at 4 columns each (395 px, was 175). **Spaghetti dal 1992** and **taglieri** share one row as two columns, one tile each. 10 tiles instead of 13: filetto, lardo crostone and crostoni can break the menu page instead (lead to confirm) | one closing link "Guarda il menù" → `menu/`, or one per larder to `#antipasti`, `#primi`, `#secondi` (SEO specialist to choose) |
| Fiorentina band | Icon, h3, paragraph, price line, Gambero Rosso line, button | The price line goes; the paragraph already says it is paid by weight and the guest chooses the size. In its place the "stadera" drawing. The Gambero Rosso sentence becomes a hairline-framed note (plain text, no logo, no badge) | "Guarda il menù completo" → `menu/#griglia` |
| `#dolce` | Kicker, h2, two paragraphs, row with price, link | The same without the row (the text already quotes the menu name); the "tuffo" drawing sits beside the link; photo unchanged | "I dolci del menù" → `menu/#dolci` |

Also: the cantina strip becomes two larger tiles (arch door, the pour) beside its text. On desktop one slim booking strip
(cream-deep, one line, Chiama and WhatsApp buttons, the "tavola apparecchiata" drawing) follows the fiorentina band;
phones already have the bar. The header's "Prenota" becomes a filled button once the header is solid. Expected length:
about 15,400 px at 1440 and 19,400 px at 390, with the gallery's extra screen included: roughly 1,500 and 2,600 px
shorter, with 21 rows fewer to read. For marketing and SEO: prices live on one URL only, the h3 explanations (the text
that answers "che cos'è…" searches) stay, every block ends on a descriptive link to a menu anchor, and a booking
action is within reach on desktop as well.

## 5. New line icons and motion graphics

Same construction as `assets/icon-*.svg` (64 grid, one stroke, round caps and joins, no fill, `currentColor`, at most
eight paths). The draw-in uses the existing `[data-draw]` hook; only the extra move needs a few lines. Each plays once and rests.

| # | Name | Where | Shows | Moves | Trigger |
|---|---|---|---|---|---|
| 1 | Coccio che fuma (`icon-coccio`, drawn, unused) | `#tavola` intro, beside the h2, 72 px | Terracotta bowl, three steam lines | Bowl draws 0.5 s; steam rises and fades twice, 1.6 s | Block 80% in view |
| 2 | La stadera (new) | Fiorentina band, where the price line was, 96 px | Steelyard: notched beam, hook, sliding weight | Weight slides 0.6 s; beam tips 6° and settles level, 0.5 s | Band 60% in view |
| 3 | Marchi della dispensa: `icon-tartufo`, `icon-tagliere` (drawn, unused); new `cinta` (pig in profile, two lines for the white band), `porcino` (cap, stem, tuft), `forchetta` (fork with three loops) | Above each larder h3, 56 px, green | The product | Draws 0.5 s, then one small move of 0.4 s (a shaving falls 6 px, the fork turns 15°) | Row in view; again on row hover (fine pointers) |
| 4 | Il tuffo (new) | `#dolce`, beside the link, 64 px, gold | A cantuccio over a small glass | Dips 8 px and returns, a ripple arc draws at the rim, 1.0 s | Section 70% in view; again on link hover |
| 5 | La volta (`icon-volta`, drawn, unused) | Cantina band, above the kicker, 64 px, cream | Three brick arches one inside the other | Draw from the outer to the inner, 0.6 s | Band 60% in view |
| 6 | Tavola apparecchiata (new) | `#prenota` on every page and the desktop booking strip, 120 px | A check napkin (3×3 lines), fork and knife | Napkin draws 0.4 s; fork, then knife lay down, 0.25 s each | Block in view |
| 7 | Skyline di chiusura (`skyline-siena.svg`, exists) | Top edge of the footer on home, wine list and "Dove siamo", instead of the third battlement line | Roofs, Duomo, Torre del Mangia | Draws left to right 0.9 s, the tower last | Footer 90% in view |
| 8 | Marchi del menù (the set, reused) | `/menu/` section headings beside the numeral, 44 px: tagliere, pici, coccio, fiorentina, porcino, tuffo, vino | The course | Draws 0.5 s | Heading in view |

## 6. Transitions

**Between pages**
- Worth doing: cross-document View Transitions in CSS only. `@view-transition { navigation: auto }`; the old page fades in 0.15 s, the new one opens with a pointed-arch wipe from the bottom centre in 0.35 s (a five-point `polygon()` on `::view-transition-new(root)`); `view-transition-name` on the header so logo and navigation stay still. Off under reduced motion. Chromium and Safari have it; other browsers navigate exactly as in version 2. Test it with the three page openings: on a first visit the wipe should land on the green overlay and the opening then plays; if they collide, skip the wipe for that navigation with a `pagereveal` listener (a few lines).
- Could: prefetch the four internal pages on hover with `<script type="speculationrules">` (prefetch, not prerender: prerender would start the openings off-screen). Chromium only, ignored elsewhere.
- Not worth doing: Barba or any router, leave animations that hold the click, a loader.

**Between sections**
- Two-line heading reveal: the upright line and the italic line of each h2 rise from behind a hairline, 0.5 s, 80 ms apart, on the two spans that already exist (CSS transform and overflow clip). Paragraphs keep `[data-reveal]`, shortened from 0.7 to 0.5 s.
- Chapter numerals: a large outlined roman numeral (Bodoni, about 14rem, 1 px gold text stroke, no fill, `aria-hidden`) behind each chapter kicker, drifting 6% with the scroll through the existing parallax hook. CSS only.
- Battlement wipe: where a green section begins its battlement line uncovers left to right in 0.9 s (`clip-path` on the existing pseudo-element).
- Not worth doing: scrubbed clip-paths on whole sections (paint cost on phones), a second pinned section, horizontal scroll, photo zoom on hover.

## 7. Do not do

- No second pinned or scroll-jacked section: the gallery and the sticky pici are the only places where the page holds. No snap, no page-wide scrubbing.
- No prices, "from" prices or dish rows back on the home page in any disguise (hover cards, tickers, badges with a price).
- No carousel that moves by itself, no video or WebGL background, no Lottie or Rive player, no cursor follower, no loader, no sound.
- No filled or coloured icons, no stock icon set, no icon without a meaning in the text beside it, no loop that keeps running while the visitor reads.
- No reviews, stars, award badges, counters, staff portraits, events or "open now" badge: the profile has no such facts and the hours can change.
- No new font or colour, no third-party embed (map, Instagram feed, booking widget), no text on a photo without the scrim.
- No fourth page opening. Nothing new may hold the content back by more than 0.4 s; the hero h1 and photo are never animated in.
- No eager loading of gallery photos, no broad `will-change`, no animation of layout properties.

## 8. Priorities

| Proposal | Priority | Effort |
|---|---|---|
| Remove rows and prices from the home page and rebuild the seven blocks of section 4 | must | M |
| "La casa" pinned gallery with its static fallback (section 3) | must | M |
| Larger tiles elsewhere: cantina strip as two tiles, porcini trio at 4 columns, one large coccio tile | must | S |
| Phone `#pici`: drawing above the heading, text at full width | must | S |
| Use the four drawn, unused icons with their draw-in (coccio, volta, tartufo, tagliere) | must | S |
| Dispensa in three shapes instead of one template | should | M |
| New drawings: stadera, cinta, porcino, forchetta | should | M |
| Desktop booking strip after the fiorentina band; filled "Prenota" in the solid header | should | S |
| View Transitions arch wipe between pages | should | S |
| Two-line heading reveal; reveals shortened to 0.5 s | should | S |
| Hero crops: phone photo in the upper half showing door and parasols with the text on green below (check with the gate opening); desktop `object-position` lowered to crop the air-conditioning units | should | M |
| `#prenota`: tavola apparecchiata drawing; hours shown once on phones | should | S |
| Skyline closing line at the footer | should | S |
| Menu page: line icon at each section heading | should | S |
| Il tuffo drawing in `#dolce` | could | S |
| Chapter numerals; battlement wipe | could | S |
| Prefetch on hover (speculation rules) | could | S |
| Dove siamo hero: the street-plate arch photo at the right, tighter gaps | could | S |
| Gallery opening as a growing pointed arch (`mask-size`), if it holds 60 fps on a mid-range phone | could | M |
| Photos 3 and 4 of the gallery exported again at 1600 and 2048, if the founder still has the originals | could | S |
| Rail label tone at cream/photo edges | could | S |
