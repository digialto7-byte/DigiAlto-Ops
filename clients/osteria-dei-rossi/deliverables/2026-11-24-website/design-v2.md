# Osteria dei Rossi website: version 2 changes (2026-11-25)

Written by the lead after the founder's feedback on version 1
(`knowledge/clients/osteria-dei-rossi/sources/founder-website-feedback-2026-11-25.md`).
`design.md` still holds for tokens, type, signature elements, page furniture, the gate intro,
the scroll choreography and the quality bar. This file replaces its sections 5 and 7 and adds
two pages and four fine-line animations. Internal document, English.

## 1. What the founder asked for

- Keep: the gate opening, the transitions, the photo treatment, the map and its motion.
- The home page was "too mixed". New order: **the story first** (a warm place where you feel
  at home, very friendly service; the contrada; 1992), **then the dishes** (typical and
  medieval), **then pici explained**, **then the other foods** (what Cinta Senese is, truffle,
  porcini, the boards), **cantucci e Vin Santo**, the cellar, booking.
- "Where we are" leaves the home page and becomes its own page, with the address, how to reach
  the osteria and the map.
- The menu page opens like an old book with the name and an animated Torre del Mangia skyline,
  then goes quickly to the menu.
- A wine-list page: a hand with a bottle pours a glass, then the carta dei vini opens.
- Pici section: a minimal fine-line animation of pici coming down. Wild boar section: a
  minimal fine-line boar that comes into the picture.

## 2. Pages and URLs

| Kind | Italian | English | Notes |
|---|---|---|---|
| `home` | `/` | `/en/` | Story, food, cellar teaser, booking. No map, no FAQ |
| `menu` | `/menu/` | `/en/menu/` | Book intro, then the menu as in version 1, food questions at the end |
| `vini` | `/vini/` | `/en/wine-list/` | Pour intro, then the wine list without prices |
| `dove` | `/dove-siamo/` | `/en/find-us/` | The street, the map, address, how to arrive, hours, booking, visit questions |
| `privacy` | `/privacy/` | `/en/privacy/` | Text change only (the opening animations) |
| `404` | `/404.html` | | Links to home, menu |

Header navigation (all pages): **La storia** (`/#casa`) · **La tavola** (`/#tavola`) ·
**Il menù** (`/menu/`) · **I vini** (`/vini/`) · **Dove siamo** (`/dove-siamo/`) · language
switch · **Prenota** button. The current page's link carries `aria-current="page"`. On pages
other than home, "Prenota" goes to that page's own booking block (`#prenota`), which every page
has. The footer adds links to the wine list and to "Dove siamo".

## 3. Home: sections in order

Ids: `#porta` → `#casa` → `#contrada` → `#tavola` → `#pici` → `#dispensa` → `#dolce` →
`#cantina` → `#prenota` → footer. Kickers number the seven chapters I to VII (`#casa` to
`#cantina`). The rail has nine stops (gate, seven chapters, booking).

| # | Section | Layout | Photos (slug → treatment) |
|---|---|---|---|
| 0 | Hero `#porta` | As version 1. The scroll cue points to `#casa` | `osteria-dei-rossi-siena-esterno` |
| I | La casa `#casa` (the welcome) | (a) Cream: the welcome line of the menu as a large Bodoni italic quote, centred, max 22 ch per line, with a small gold arrow under it and its source in a kicker. (b) Full-bleed photo band 80svh, text block left over a green scrim: kicker, h2, two short paragraphs (the warm room, the friendly service, Luca and Max). (c) Cream strip with three tiles in an uneven row (wide, arch, wide) and short captions | (b) `sala-osteria-tradizionale-toscana` band; (c) `sala-bancone-vista-cucina` tile 3:2, `lanterna-ferro-battuto` arch, `fotografie-storiche-siena-contrada` tile 5:4 |
| II | La contrada `#contrada` | Cream-deep. Arch tile left, text right: kicker, h2, two paragraphs (the Bruco, Porta Ovile, 1992 and Beppe, Luca and Max since 2024, the street's name); the three-step line 1992 → 2024 → oggi; the Palio line; a text link to "Dove siamo" | `contrada-del-bruco-barbero-tappi` arch; `insegna-storica-osteria-ferro` small tile 5:4 overlapping the arch's lower corner |
| III | La tavola `#tavola` (typical and medieval dishes) | (a) Cream intro: kicker, h2, one paragraph on the cooking of Siena at the osteria. (b) Full-bleed photo band 90svh: the dolceforte, text block right over a dark scrim (h3, text, a price row). **The boar animation lives in this band** (section 5.2). (c) Cream: two framed tiles side by side with a text block (h3, text, price row) for the cinghiale al coccio | (b) `cinghiale-in-dolceforte-ricetta-medievale` band; (c) `cinghiale-in-umido-coccio` tile 5:4, `piatti-con-contorni-tavola` tile 5:4 |
| IV | I pici `#pici` | Cream. Three columns on desktop: the pici drawing (2 of 12, sticky), text (4 of 12: kicker, h2, two paragraphs, then the four ways as dish rows with prices where the menu has one), photos (6 of 12: two framed tiles, the second set lower). **The pici animation lives here** (section 5.1). A text link to the first courses on the menu | `pici-al-ragu-di-cinghiale` tile 3:2, `pici-cacio-e-pepe` tile 3:2 |
| V | La dispensa `#dispensa` (the other foods) | Cream-deep intro (kicker, h2, one line), then five "larder" rows that alternate photo side and text side. Each row: h3 (two lines), a paragraph that explains the product, one to three dish rows (name, dotted leader, price when on the menu), and one large tile plus up to two small tiles. Order: Cinta Senese, truffle, porcini, the spaghetti of 1992, the boards. Then the fiorentina band as in version 1 (full-bleed, text left, price line, guide line, button to `/menu/#griglia`) | Cinta: `tagliatelle-al-ragu-di-cinta` (large), `gran-tagliere-di-salumi-toscani` (small). Truffle: `tagliatelle-al-tartufo-fresco` (large), `filetto-al-tartufo-fresco`, `tartufo-nero-fresco` (small). Porcini: `porcini-freschi` (large), `porcini-freschi-grigliati`, `porcini-fritti`, `tagliatelle-ai-porcini-freschi` (small). Spaghetti: `spaghetti-dell-osteria-sugo-e-gorgonzola` (large). Boards: `tagliere-di-formaggi-miele-noci` (large), `crostone-lardo-toscano`, `crostoni-tartufo-e-formaggio-pere-miele` (small). Fiorentina: `bistecca-alla-fiorentina-siena` band |
| VI | Il dolce `#dolce` (cantucci e Vin Santo) | Green section with the battlement line. Text left (kicker, h2, two short paragraphs on the tradition, the price row), the photo right as a large arch-topped landscape tile with a gold hairline | `cantucci-e-vin-santo` |
| VII | La cantina `#cantina` | Full-bleed photo band 90svh, text over a scrim: kicker, h2, paragraph, the three great reds as a fine list, the button "Apri la carta dei vini" to `/vini/`. Then a cream strip with three tiles and the amari line | `grotta-volte-in-mattoni-cantina` band; `cantina-porta-insegna-ceramica` arch, `tagliere-salumi-formaggi-vino-rosso` tile, `amaro-al-bancone` tile |
| | Prenota `#prenota` | Green band with the battlement line: h2, the two buttons, the hours table, the "hours may change" line, a text link to "Dove siamo" | none |

Photos not used on the home page: `via-dei-rossi-targa-e-insegna-osteria` (goes to "Dove
siamo"), `tagliatelle-ai-porcini-freschi-1`, `tagliatelle-al-ragu` (free for the menu page
bands). The second photo set is all 3:2 (JPEG fallback 720×480, AVIF 480 to 1600).

Dish rows on the home page: a dish that is on the live menu shows its menu name and price. A
dish the founder named or photographed that is not on the live menu of 2026-11-24 (pici al ragù
di cinghiale, tagliatelle al ragù di Cinta, grilled and fried porcini, filetto al tartufo as a
photo caption) is named without a price.

Phones: one column, text first, then photos; small tiles in a two-column grid; the larder rows
stack as text, large tile, small tiles.

## 4. The other pages

### 4.1 Menu (`/menu/`)

1. **Book intro** (section 5.3), once per session.
2. Hero on green as in version 1; the Siena skyline (`assets/skyline-siena.svg`) sits as a
   fine line along the bottom edge of the hero instead of the battlement line and stays there.
3. The sticky section links and the dish sections, unchanged. In "Bevande" a text link to the
   wine list. Photo bands after Primi and after Griglia: `tagliatelle-ai-porcini-freschi-1`
   and `bistecca-alla-fiorentina-siena`.
4. Notes, then "Domande sul menù" (food questions from the SEO addendum, as `<details>`), then
   the booking block `#prenota` (buttons, hours).

### 4.2 Wine list (`/vini/`, `/en/wine-list/`)

1. **Pour intro** (section 5.4), once per session.
2. Hero on green: kicker, h1, one paragraph, the battlement line. A small static pour drawing
   (the same SVG, final frame) at the right on desktop.
3. The list, generated from
   `knowledge/clients/osteria-dei-rossi/sources/wine-list-2026-11-25.json`: three groups
   (reds, whites, rosé and sparkling) as `h2`; inside the reds the seven areas as `h3`; each
   wine one row: name in Bodoni 1.2rem, producer after it in Figtree small caps `--soft`. **No
   prices.** Two columns on desktop, one on phones. A sticky row of group links as on the menu
   page. One photo band between reds and whites (`grotta-volte-in-mattoni-cantina`) and the
   arch tile `cantina-porta-insegna-ceramica` beside the intro.
4. Notes (prices are on the list at the table; wines by the glass), the wine question from the
   SEO addendum, the booking block `#prenota`.

### 4.3 Dove siamo (`/dove-siamo/`, `/en/find-us/`)

1. Hero on cream, no intro animation: kicker, h1, one line, the address in large Bodoni, the
   two buttons (directions, call).
2. **The street** (the version 1 "La Via" section moved here unchanged: text, three facts, the
   arch tile `via-dei-rossi-targa-e-insegna-osteria`, the arrow that draws).
3. **The map** (the version 1 map block moved here unchanged: inline
   `mappa-dentro-le-mura.svg`, HTML labels, the drawing sequence), with "A piedi" and "In
   auto" blocks beside it (walk, car park and escalators, limited-traffic zone) and the
   directions link.
4. Hours and booking `#prenota` (green band as on home), then the visit questions from the SEO
   addendum.

## 5. The four new fine-line animations

All four: stroke only, 1.5 px, `currentColor`, no fills except where stated, `aria-hidden`,
only `transform`, `opacity` and stroke offsets are animated. With no JavaScript or with reduced
motion the final frame shows and the two page intros never show. Each page intro is skippable
(any key, click, wheel or touch jumps to its end; a real "skip" button), never plays when the
URL has a hash, plays once per browser session, and key **P** replays it. The three intros
share the one session-storage entry `odr-intro` (its value lists the intros already seen: `g`
gate, `m` menu, `v` wine list).

### 5.1 Pici that come down (`assets/pici-cadono.svg`, home `#pici`)

Portrait, viewBox `0 0 240 720`. Six loose strands of pici (`#pici-filo-1` to `-6`, in
`#pici-fili`): thick hand-rolled strands, drawn as single wavy lines 170 to 260 units long,
stroke 2.5, slightly irregular, hanging and tilted as if falling, spread over the upper two
thirds. At the bottom a board seen from the side (`#pici-spianatoia`: two lines and three tiny
flour dots) with a loose nest of coiled strands on it (`#pici-nido`, four or five paths).

Motion: desktop from 900 px, the drawing column is sticky and the strands fall with the scroll
through the section (scrub 0.5): each strand comes in from above the top edge, turns a few
degrees and lands; as it lands the nest's coils draw one after the other. Phones: the drawing
is 5.5rem wide at the top right of the section and the same sequence plays once in 1.6 s when
it enters the view. Final frame: two strands still in the air, the nest complete.

### 5.2 The boar that walks into the picture (`assets/cinghiale-cammina.svg`, home `#tavola`)

Landscape, viewBox `0 0 520 300`, a wild boar in profile facing right, in one confident fine
line: `#cinghiale` contains `#cinghiale-corpo` (head, snout, back, belly), `#cinghiale-setole`
(the bristle ridge, short strokes), `#cinghiale-zanna`, `#cinghiale-occhio`,
`#cinghiale-coda`, and four legs as separate paths with the pivot at the top of each
(`#cinghiale-zampa-1` to `-4`). Under it `#cinghiale-terra`: a ground line with three grass
tufts.

Placement: inside the dolceforte photo band, on the side opposite the text, standing on the
band's bottom edge; cream line (`--cream`), with a soft dark gradient behind it so the line
reads on the photo; width `clamp(11rem, 26vw, 22rem)`. Phones: above the text block, at the
left, 9.5rem wide.

Motion: when the band is 60% in view the boar walks in from outside the left edge of the photo
to its place in 1.5 s (`power2.out`), its legs swing in two alternating pairs (about ±7°, four
steps), the ground line draws under it, and it stops with a small nod of the head. Once.

### 5.3 The menu book (`assets/skyline-siena.svg`, `assets/libro-copertina.svg`, `/menu/`)

Overlay `#book-intro` on `--green`, full viewport. Behind: the Siena skyline as a gold fine
line across the width at about 62% of the height (viewBox `0 0 1600 600`:
`#skyline-tetti` roofs left and right, `#skyline-duomo` dome and striped bell tower at the
left, `#skyline-palazzo` the crenellated Palazzo Pubblico, `#skyline-torre` the Torre del
Mangia, the tallest element, right of centre, with its brick shaft, the stone crown on
corbels and the bell on top). In front, centred: the closed book, a CSS box of ratio 3:4
(`min(62vw, 20rem)` wide) whose face is `libro-copertina.svg` (viewBox `0 0 480 640`: cover
edge, the spine at the left with five ribs, a double hairline frame, four corner ornaments, a
small rule with a diamond above and below the empty title field) with HTML text over it: the
name "Osteria dei Rossi" (Bodoni, small caps), the title "Il menù" (Bodoni italic, large), a
small line under it. Cream line and text on a slightly lighter green cover.

| Time | What happens |
|---|---|
| 0 → 0.7 s | The skyline draws from left to right; the tower draws upwards last |
| 0.1 → 0.8 s | The book rises 12 px and fades in, its frame draws, the title fades in |
| 1.0 → 1.6 s | The cover opens on its spine (rotateY to about -160°, perspective 1400 px) over a cream page |
| 1.5 → 2.0 s | The cream page grows to fill the viewport and the overlay fades; the menu page is under it |

### 5.4 The pour (`assets/mescita.svg`, `/vini/`)

Overlay `#pour-intro` on `--green`. One drawing, viewBox `0 0 1600 1000`, centred, cream and
gold lines: `#mescita-tavola` (the table line), `#mescita-calice` (a stemmed glass: bowl,
stem, foot), `#mescita-vino` (the wine in the bowl: a shape filled with `--gold` at 35%
opacity, clipped to the bowl, that rises from the bottom), `#mescita-braccio` containing
`#mescita-mano` (a hand in a few lines, fingers round the bottle, with the start of a cuff)
and `#mescita-bottiglia` (a Bordeaux bottle with a blank label), drawn in the pouring position
(neck down towards the glass at about 35° below the horizontal), and `#mescita-filo` (the thin
stream from the bottle's mouth into the glass).

| Time | What happens |
|---|---|
| 0 → 0.6 s | Table and glass draw; the hand and bottle come in from the upper right, upright |
| 0.6 → 1.0 s | The arm tilts into the pouring position (rotation about the wrist) |
| 1.0 → 1.7 s | The stream draws down; the wine rises in the glass |
| 1.7 → 2.0 s | The stream stops, the bottle lifts back a little |
| 2.0 → 2.6 s | A cream card with "Carta dei vini" opens from the centre fold (two leaves) and grows to fill the viewport; the overlay fades to the wine-list page |

## 6. Copy and SEO sources for the builder

- Visible text: `copy.md` (version 2 slots, Italian and English).
- Tags, hreflang, alt texts of the second photo set, the questions for each page, JSON-LD of
  the new pages, the sitemap: `seo-v2.md` (an addendum; `seo.md` stays valid for what it does
  not replace).
- The wine list: the JSON source above. Nothing is typed by hand in a template.
