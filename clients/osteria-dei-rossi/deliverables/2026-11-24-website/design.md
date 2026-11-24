# Osteria dei Rossi website: design and motion specification (version 1)

Written by the lead for the web-builder and the motion specialist. Copy comes only from
`copy.md`; SEO tags and JSON-LD only from `seo.md`; SVGs from `assets/` verbatim. This file
decides layout, look, class names and motion. Internal document, English.

## 1. The idea

**Dentro le mura.** The site is a short walk into Siena. A fine-line drawing of Porta Ovile
(the gate of the Bruco) opens, you follow the arrow of the old iron "Osteria" sign down Via dei
Rossi, sit in the room, eat, go down towards the cellar, meet the contrada, book.

Look: minimal and fine line. Cream paper, deep green, gold hairlines; warm photographs do the
colour. One expressive gesture per screen, everything else calm. Nothing here copies another
restaurant's site: the signature elements are ours (the gate, the pointed-arch photo frames,
the arrow, the battlement line, the "via" rail).

## 2. Tokens (CSS custom properties on `:root`)

Colours (approved palette in the client profile, nothing else):

| Token | Value | Use |
|---|---|---|
| `--cream` | `#FFFADF` | page background, text on green |
| `--cream-deep` | `#F8EFC6` | alternate surface, cards |
| `--green` | `#1C4130` | text on cream, dark sections, intro |
| `--gold` | `#C89550` | hairlines, arch outlines, large italic accents on green |
| `--soft` | `#4D5B45` | secondary text on cream |
| `--olive` | `#7D9550` | rare small accents (season badge) |
| `--black` | `#0F0F0D` | photo scrims (with opacity) |
| `--yellow` | `#FFB028` | one tiny accent: the "Consigliato dall'Oste" mark |

Derived values use opacity of these only: `--line: rgb(200 149 80 / .55)` (gold hairline),
`--line-soft: rgb(28 65 48 / .16)`, `--scrim: rgb(15 15 13 / .46)`.

Contrast rules (WCAG AA): body text is `--green` on `--cream` or `--cream` on `--green`. Gold is
never used for small text on cream. Gold on green only for text of 24 px and larger. Text over a
photo always sits on a scrim that gives 4.5:1 against the lightest pixels behind it (a left or
bottom gradient of `--green` or `--black` at 55 to 80% under the text block, fading out).

Type (self-hosted, files in `site/assets/fonts/`):

```css
@font-face{font-family:"Bodoni Moda";src:url("assets/fonts/bodoni-moda-latin-opsz-normal.woff2") format("woff2");font-weight:400 900;font-style:normal;font-display:swap}
@font-face{font-family:"Bodoni Moda";src:url("assets/fonts/bodoni-moda-latin-opsz-italic.woff2") format("woff2");font-weight:400 900;font-style:italic;font-display:swap}
@font-face{font-family:"Figtree";src:url("assets/fonts/figtree-latin-wght-normal.woff2") format("woff2");font-weight:300 900;font-style:normal;font-display:swap}
```

(Adjust the relative URL per page depth. Preload the two upright files in `<head>`.)

- `--font-display: "Bodoni Moda", "Didot", "Bodoni MT", Georgia, serif` with
  `font-optical-sizing:auto`. Headings weight 400; italic completions weight 400 italic.
- `--font-text: "Figtree", system-ui, sans-serif`. Body weight 400, labels 500 to 600.
- Scale: h1 `clamp(2.75rem, 7.6vw, 6.75rem)` line-height .96, tracking -.02em; h2
  `clamp(2.1rem, 4.8vw, 4.25rem)` line-height 1; h3 `clamp(1.4rem, 2.2vw, 1.9rem)`; body
  `1.0625rem`/1.65 (max 34em per block); kicker `.75rem` uppercase, tracking `.18em`,
  weight 600; caption `.8125rem`.
- Two-line headings: the first line upright, the completion on its own line in italic
  (`<em>` inside the heading, `display:block`). On green the italic line is gold; on cream it
  is green italic. No full stop in any heading, label or button.

Space and shape: 8 px base; section padding `clamp(4.5rem, 11vw, 10rem)` block; container
`min(100% - 2.5rem, 78rem)`; 12-column grid with `clamp(1rem, 2.4vw, 2rem)` gaps. Corners are
square; the only curves are the pointed arches. Hairlines are 1 px.

Motion tokens: `--ease: cubic-bezier(.2,.7,.2,1)`; durations `--d1:.35s` (hover, header),
`--d2:.7s` (reveals), `--d3:.9s` (masks, line drawing). Nothing but the intro is longer than
0.9 s.

## 3. Signature elements

1. **The gate intro** (`assets/porta-ovile.svg`, inlined). See section 6.
2. **Pointed-arch photo frames** (class `arch`): portrait tiles are clipped to a pointed arch,
   the same curve as the gate, with a gold hairline arch 12 px outside the photo. CSS:
   `clip-path: path()` does not scale, so use an SVG mask via `mask-image` with an inline data
   URI of a pointed arch (`viewBox 0 0 100 125`, path
   `M0 125 V48 A62 62 0 0 1 50 0 A62 62 0 0 1 100 48 V125 Z`) at `mask-size:100% 100%`, and draw
   the outline as an inline SVG with the same path (`preserveAspectRatio="none"`,
   `vector-effect="non-scaling-stroke"`) positioned 12 px outside. Aspect ratio of arch tiles
   4:5.
3. **Framed landscape tiles** (class `tile`): a plain rectangle with a gold hairline frame
   offset 12 px down and right (pseudo-element), aspect ratio 5:4 or 3:2 as the photo.
4. **The arrow** (`assets/freccia-osteria.svg`, inlined): scroll cue in the hero (rotated to
   point down), the line that leads from the text to the photo in "La Via", and the arrow in
   text links and buttons.
5. **The battlement line** (`assets/merlatura.svg` as a repeating background, 66×20 px): a
   single line along the top edge of green sections and above the footer.
6. **The "via" rail** (desktop from 1100 px): a fixed, thin gold vertical line at the left edge
   with seven small ticks and roman numerals I to VII; a green dot travels down it with the
   scroll and the current stop's name shows beside it. On small screens it becomes a 2 px gold
   progress line under the header.
7. **Line icons** (`assets/icon-*.svg`, inlined, 44 px, `color: var(--gold)` on green or
   `var(--green)` on cream) in the dish list.

## 4. Page furniture

**Header** (`<header class="site-header">`, fixed): logo left (150 px wide on desktop, 112 px
on phones; over the hero use `logo-osteria-dei-rossi-chiaro`, on cream use
`logo-osteria-dei-rossi`; swap with the `is-solid` class), navigation with five anchors, the
language switch (`IT · EN`, the current one marked with `aria-current`), and the "Prenota"
button (fine 1 px outline, arrow). Transparent over the hero; after 80 px of scroll it gets the
cream background, a hairline under it and a smaller height (class `is-solid`). Phones: logo, a
compact "Prenota" link and a two-line menu button that opens a full-screen green panel
(`<nav id="menu-panel">`) with the links in Bodoni at 2 rem, the language switch, phone and
WhatsApp. Focus is trapped in the open panel and Escape closes it.

**Sticky booking bar** (`.cta-bar`, phones only, under 720 px): two equal buttons, "Chiama"
(tel) and "WhatsApp", fixed to the bottom, shown after the hero has left the screen and hidden
while the `#prenota` section is on screen. Safe-area padding at the bottom.

**Buttons**: `.btn` (filled: cream on green sections, green on cream sections) and
`.btn--line` (1 px outline). Square corners, 48 px high, label in Figtree 600 uppercase
`.8125rem` tracking `.12em`, the small arrow at the right that moves 6 px on hover. `.link` is
a text link with a 1 px underline offset 4 px and the arrow.

**Footer** (green, battlement line on top): logo (chiaro), the positioning line, name, address,
phone, hours, Instagram and Facebook, language switch, privacy link, company name and VAT
number in small type.

## 5. Home: sections, layout and photos

Order and ids: `#porta` → `#via` → `#sala` → `#tavola` → `#cantina` → `#contrada` → `#prenota`
→ `#domande` → footer. Each stop starts with a kicker of the form `I · La via` (roman numeral,
middle dot, stop name), then the two-line `h2`.

Photos: file slugs are in `site/assets/img/` as `<slug>-<width>.avif` (wide photos: 640, 960,
1280, 1600, 2048; tile photos: 480, 720, 960, 1280) plus one JPEG fallback (`-960.jpg` wide,
`-720.jpg` tile). Every photo is a `<picture>` with an AVIF `srcset` and `sizes`, the JPEG as
`<img src>`, explicit `width` and `height`, `loading="lazy" decoding="async"` except the hero.
Alt texts come from `seo.md`.

| # | Section | Background | Layout | Photos (slug → treatment) |
|---|---|---|---|---|
| 0 | Hero `#porta` | Full-bleed photo, 100svh (min 36rem) | Text block bottom-left, max 40rem: kicker, `h1` (two lines), one line of text, one filled button "Prenota" and one text link to the menu. Bottom-right: the opening line in small type and the scroll cue (arrow pointing down, label). Scrim: `--green` gradient from the bottom (80% → 0 at 60% height) plus 25% overall | `osteria-dei-rossi-siena-esterno` → background, `object-position: 50% 62%`, `fetchpriority="high"`, preloaded |
| 1 | La Via `#via` | Cream | Two columns. Left (5 of 12): kicker, h2, text, a row of three small facts separated by hairlines. Right (6 of 12, starts lower): the arch tile, with the framed landscape tile overlapping its lower-left corner by a quarter. The arrow SVG runs across the gap from the end of the text towards the arch tile | `via-dei-rossi-targa-e-insegna-osteria` → `arch` (4:5); `insegna-storica-osteria-ferro` → `tile` (5:4) |
| 2 | La Sala `#sala` | First a full-bleed photo band, 80svh, with the text block on the left over a left-to-right green scrim; then a cream strip with three tiles in an uneven row (wide, arch, wide), each with a short caption | Text block: kicker, h2, text | `sala-osteria-tradizionale-toscana` → band; `sala-bancone-vista-cucina` → `tile` (3:2); `lanterna-ferro-battuto` → `arch`; `fotografie-storiche-siena-contrada` → `tile` (5:4) |
| 3 | La Tavola `#tavola` | (a) full-bleed photo band, 90svh, text block on the right over a right-to-left dark scrim. (b) cream: the "dalla carta" list: two columns of dish rows (icon, dish name in Bodoni, one line, price right-aligned after a dotted leader), with a five-photo mosaic beside and between them. (c) full-bleed photo band, 80svh, text left: the fiorentina, with its price line and the link to the full menu | (a) kicker, h2, text. (b) h3 and list. (c) h3, text, button to `/menu/` | (a) `cinghiale-in-dolceforte-ricetta-medievale` → band; (b) `gran-tagliere-di-salumi-toscani`, `crostone-lardo-toscano`, `tagliere-di-formaggi-miele-noci`, `tartufo-nero-fresco`, `cinghiale-con-contorni-tavola` → `tile`s in a mosaic (2 large, 3 small); `cinghiale-in-umido-coccio` → one wide `tile` under the list; (c) `bistecca-alla-fiorentina-siena` → band |
| 4 | La Cantina `#cantina` | Full-bleed photo band, 90svh, text centred-left over a scrim; then a green strip with three tiles | kicker, h2, text; wine names as a fine list; the amari line | `grotta-volte-in-mattoni-cantina` → band; `cantina-porta-insegna-ceramica` → `arch`; `tagliere-salumi-formaggi-vino-rosso` → `tile` (5:4); `amaro-al-bancone` → `tile` (5:4) |
| 5 | La Contrada `#contrada` | Cream-deep | Two columns, mirrored from La Via: arch tile left, text right; under the text a three-step fine line "1992 → 2024 → oggi" with one short line each | `contrada-del-bruco-barbero-tappi` → `arch` |
| 6 | Prenota `#prenota` | (a) Green band with the battlement line: h2 centred-left, the two buttons (call, WhatsApp), the hours as a small table, the "hours may change" line. (b) Cream: "Dove siamo": the fine-line map on the right (inline `mappa-dentro-le-mura.svg`, with HTML labels placed over it), address, the Maps link, walking time, parking and limited-traffic note on the left | h2, buttons, table; h3, address, facts | none (the map is the picture) |
| 7 | Domande `#domande` | Cream | One column, max 46rem: h2 and the questions as `<details>` with hairlines; the summary in Bodoni 1.35rem with a plus that turns into a minus | none |

Map labels (HTML elements absolutely placed over the map box, in percent of its width and
height, small caps Figtree `.6875rem`): Porta Camollia 41/4 · Porta Ovile 64/33 · Basilica di
San Francesco 73/40 · Osteria dei Rossi 61/48 (bold, gold dot) · Piazza del Campo 57/62 ·
Duomo 31/70 · Porta Romana 85/93. A caption under the map says it is a sketch, not to scale.
On the green map variant is not used: the map always sits on cream.

Phones (under 720 px): everything in one column; text first, then photos; arch tiles 78% of
the width, centred; the mosaic becomes a two-column grid; photo bands are 70svh with the text
block at the bottom over a bottom scrim; the dish list is one column; tables become stacked
rows. No horizontal scroll at 360 px. Tap targets 44 px or more.

## 6. Motion

Libraries (local files, loaded with `defer` at the end of `<body>` in this order):
`assets/vendor/gsap.min.js`, `assets/vendor/ScrollTrigger.min.js`, `assets/vendor/lenis.min.js`,
then `main.js`. No other library. All motion code lives in `main.js`.

**Progressive enhancement.** A one-line inline script in `<head>` adds the class `js` to
`<html>`. Hidden start states exist only under `.js` and only when
`(prefers-reduced-motion: no-preference)`. With no JavaScript, a failed script or reduced
motion, every element is visible in its final state and the intro never shows. A CSS failsafe
hides the intro after 5 s even if `main.js` never runs.

**Smooth scroll.** Lenis with `lerp: 0.12`, `wheelMultiplier: 1.05`, touch left native;
`lenis.on('scroll', ScrollTrigger.update)` and one `gsap.ticker` loop. Anchor links scroll with
Lenis (duration 1 s, offset for the header). Not started under reduced motion.

**The gate intro** (`<div id="intro" class="intro" aria-hidden="true">` holding the inline SVG
with `preserveAspectRatio="xMidYMid slice"`, plus a "Salta" / "Skip" button that is a real,
focusable `<button>` outside the aria-hidden box). Shown once per browser session
(`sessionStorage`), never under reduced motion, never when the URL has a hash. The page under
it is already laid out; the `h1` and the hero photo are never animated in.

| Time | What happens |
|---|---|
| 0 → 0.9 s | The gold lines draw themselves (`stroke-dasharray` / `stroke-dashoffset` per path, staggered: gate, arch, walls, forework, ground; skyline and bricks fade in at the end) |
| 0.9 → 1.6 s | The two door leaves open: `#porta-door-left` scales on X to 0 from its left edge (x = 660), `#porta-door-right` to 0 from its right edge (x = 940), ease `power2.inOut`. The hero photo appears through the arch |
| 1.5 → 2.4 s | The whole drawing scales up about the arch (SVG origin 800, 690) until the opening is larger than the viewport (scale ≈ 9 on desktop, more on tall phones: compute it from the viewport), ease `power3.in`; the lines fade in the last third |
| 2.4 s | The intro is removed from the layout (`hidden`), the header and the hero text block fade up 16 px (0.5 s). Scroll is locked during the intro and released here |

Any click, key press, wheel or touch during the intro jumps to its end. Key **P**
(presentation mode) replays the intro from the top at any time.

**Scroll choreography** (ScrollTrigger; every reveal plays once):

| Hook in the HTML | Motion |
|---|---|
| `[data-reveal]` | fade and rise 24 px, 0.7 s, `power3.out`; children of `[data-reveal-group]` stagger by 0.08 s; start at `top 85%` |
| `[data-mask]` on a photo wrapper | uncover from the bottom with `clip-path: inset(100% 0 0 0)` → `inset(0)` in 0.9 s; the image inside does not scale |
| `[data-arch-line]` (the SVG arch outline) and `[data-draw]` (arrow, battlement, map groups, timeline line) | the stroke draws in 0.9 s when 80% in view; the map draws walls, then streets, then the gold street and the pin, then the labels fade in |
| `[data-parallax]` on the `<img>` of a full-bleed band | `yPercent` from -5 to 5 scrubbed with the scroll (the image box is 110% high) |
| `.rail` | the dot's position is scrubbed over the whole page; the active stop gets `is-active` |
| `.site-header` | `is-solid` after 80 px; on phones it hides when scrolling down and returns when scrolling up |
| `.cta-bar` | slides up after the hero, slides away over `#prenota` |

Hover (fine pointers only): tiles lift the hairline frame by 4 px; buttons move their arrow;
no image zoom.

**Budget.** Animate only `transform`, `opacity`, `clip-path` and stroke offsets. No animation
on layout properties. Kill every ScrollTrigger and Lenis instance under reduced motion.
`ScrollTrigger.refresh()` after fonts and images have loaded.

## 7. Menu page (`/menu/`, `/en/menu/`)

Typographic and fast, same header and footer. A short hero on green (no photo): kicker, `h1`,
one line, the battlement line. A sticky row of section links (Antipasti, Primi, Secondi,
Griglia, Contorni, Dolci, Bevande) that scrolls sideways on phones inside its own box. Each
section: the name as `h2` in Bodoni with the roman numeral, then the dishes as rows (name in
Bodoni 1.3rem, description under it in Figtree, price right-aligned after a dotted leader).
Badges: "Consigliato dall'Oste" (small yellow dot and label) and "Piatto di stagione" (olive
outline). Variants and options are indented rows. Two photo bands break the page (after Primi
and after Griglia). The notes at the end: cover charge, the season line, the allergen line.
A closing band with the two booking buttons. Motion: `[data-reveal]` only.

## 8. Small pages

Privacy (`/privacy/`, `/en/privacy/`) and the 404: header, a cream page with one column of
text, footer. The 404 has the arrow, a two-line heading and links back to Home and the menu.

## 9. Accessibility and quality bar

- One `h1` per page, ordered headings, landmarks, a "skip to content" link, visible
  `:focus-visible` (2 px gold outline, 3 px offset), `lang` on `<html>` and on any foreign
  phrase.
- All text is real text; decorative SVGs are `aria-hidden`; icons that carry meaning keep
  their `<title>`.
- Colour is never the only signal; the badges have labels.
- Works without JavaScript and with reduced motion. Works from `file://` (relative paths).
- No inline event handlers, no `javascript:` URLs, no `eval`, no third-party requests of any
  kind (fonts, scripts and images are local; Maps, WhatsApp, Instagram and Facebook are plain
  links with `rel="noopener"`).
- Targets: Lighthouse mobile 95 or more in the four categories, LCP under 2.0 s, CLS under
  0.05, no horizontal scroll at 360 px, no console errors.
