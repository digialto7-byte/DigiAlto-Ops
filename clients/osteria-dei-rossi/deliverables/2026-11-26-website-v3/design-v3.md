# Osteria dei Rossi website, version 3: the lead's plan

Internal document, English. Date 2026-11-26. Client slug `osteria-dei-rossi`.
Version 2 stays as it is in `deliverables/2026-11-24-website/`. This folder started as a copy of it.
Sources: the founder's brief (`knowledge/clients/osteria-dei-rossi/sources/founder-website-feedback-2026-11-26.md`),
the five audits in `audit/` (creative, copy, frontend, seo, marketing), `profile.md` for every fact.
Where this plan and an audit differ, this plan wins. Where this plan is silent, the audit named in each
section is the specification.

## 1. What the founder asked, and what version 3 is

1. No price and no dish row on the home page. Explanations stay; a dish is named inside the text where it
   is worth it. Prices live on the menu page only.
2. "La casa": larger photos; the page holds while the photo changes on scroll, fast.
3. More line icons, motion graphics, animations and transitions.
4. The five animations of version 2 stay (gate, menu book, wine pour, pici, boar).
5. The arrow without its small loop (done).
6. Better for marketing, SEO and appeal: decided from the audits, below.

In one sentence: a shorter home page that explains the food instead of listing it, shows the room large,
has one booking action always within reach, and uses a family of small line drawings to mark what each
part is about.

## 2. Pages, URLs and anchors (frozen)

URLs as in version 2: `/`, `/menu/`, `/vini/`, `/dove-siamo/`, `/privacy/`, `/en/`, `/en/menu/`,
`/en/wine-list/`, `/en/find-us/`, `/en/privacy/`, `404.html`.

Home anchors, the same ids on the Italian and the English page: `#porta`, `#perche`, `#casa`, `#contrada`,
`#tavola`, `#dolceforte`, `#pici`, `#dispensa`, `#cinta`, `#tartufo`, `#porcini`, `#spaghetti`, `#taglieri`,
`#fiorentina`, `#dolce`, `#cantina`, `#prenota`. Each lands with its heading below the sticky header
(`scroll-margin-top`). Menu: the section ids of version 2 plus one id per dish (slug of the Italian dish
name, the same on both languages). Wine list and Dove siamo: ids as in version 2.
No id inside an inline SVG may equal one of these: the line icons and the walking boar carry ids with the
prefix `svg-` (in version 2 the boar drawing owned `#cinghiale`); the other drawings kept from version 2 (gate
`porta-*`, pici `pici-*`, menu book `libro-*`, map `mappa-*`) keep their ids, each with a suffix. The language switch keeps the current anchor. The build fails if a listed anchor is missing
on either language. `links.md` in this folder lists every URL and anchor for the owner (lead writes it).

## 3. Home page, section by section

Order and chapter numbers as in version 2; one new slim block after the hero. Layout details for each
block: `audit/creative.md` section 4. Words: `audit/copy.md` sections 2 to 5.

| # | Id | Version 3 |
|---|---|---|
| · | `#porta` | Hero and gate opening unchanged. Added under the lead text, as text links: the address with "circa 5 minuti a piedi da Piazza del Campo" and "Come arrivare" (the Maps URL of the profile); the phone number. The h1 and the lead stay painted from the first paint; nothing new is animated in before the gate has opened. Photo: only `object-position` may change (desktop: crop the two air-conditioning units; phone: show the door and the parasols if the crop allows); the layout of the hero does not change |
| · | `#perche` (new) | One slim band, four short facts, each with a line icon: since 1992 in the Contrada del Bruco; inside the walls, about 5 minutes on foot from Piazza del Campo; the room (beams, brick vaults, terracotta); listed by Gambero Rosso among Siena's restaurants for meat, in the profile's own verb. This is the only place the Gambero Rosso line appears. No ratings, no numbers beyond the approved ones, no badge. On phones: two by two |
| I | `#casa` | Welcome quote and the sala band as in version 2, then the pinned gallery of section 4. The three-tile strip goes |
| II | `#contrada` | As in version 2, tighter words; "1992" and "Luca e Max" once each on the page outside `#perche` |
| III | `#tavola` | Intro in two columns: icon, kicker and h2 left, one paragraph right (it names the crostini neri senesi). Under it a row of line icons with one-word labels that link to the food anchors: cinghiale (`#dolceforte`), pici, Cinta (`#cinta`), tartufo, porcini, fiorentina, cantucci (`#dolce`). Dolceforte band (`#dolceforte`): h3, paragraph, one link; the boar as in version 2; the text block sits on the boar's baseline. Cinghiale al coccio: one large tile with a small tile over its corner, h3, paragraph |
| IV | `#pici` | Drawing and text as in version 2 without the four rows; the text names the four ways. Two photos, one large, one smaller overlapping. Phones: drawing above the heading, text at full width. One link to the first courses |
| V | `#dispensa` | Five larders, each with its own id, its line icon above the h3, a short explanation that names the dish, and at most one link that opens that dish on the menu page. Three layouts instead of one template (creative 4): Cinta; tartufo mirrored with the raw truffle in a pointed arch; porcini with the three ways as three equal tiles; spaghetti and taglieri side by side. Ten tiles instead of thirteen. The gran tagliere photo moves to the taglieri block. Fiorentina band (`#fiorentina`): no price line; the steelyard drawing in its place; text says it is sold by weight and that the price per 100 g is on the menu; one link to the dish |
| · | booking strip (desktop only) | After the fiorentina band: one line on cream-deep with "Prenota un tavolo", the number, the WhatsApp link and the set-table drawing. Phones keep the fixed bar |
| VI | `#dolce` | As in version 2 without the row; the dipping-cantuccio drawing beside the link |
| VII | `#cantina` | Two larger tiles (the cellar door, the grotto) beside the text; the three-arch drawing above the kicker; button to the wine list |
| · | `#prenota` | As in version 2 with the set-table drawing; the hours shown once; WhatsApp opens with a prefilled message |

No price, no "€", no dotted leader and no dish row anywhere on the home pages. The QA script checks it.

## 4. "La casa" gallery

Specification: `audit/creative.md` section 3, with `audit/frontend.md` section 3 for the markup. Summary of
what is decided:
- Four photos in this order: `sala-bancone-vista-cucina`, `lanterna-ferro-battuto`,
  `fotografie-storiche-siena-contrada`, `amaro-al-bancone`. Captions exist; the copywriter may sharpen them.
- One screen. Desktop: text left (icon, kicker, caption in large italic, progress mark, exit link), one
  pointed-arch frame right, 4:5, as tall as the screen allows (about 600 by 750 px at 1440 by 900). Phones:
  frame first, about 350 by 440 px, then the text.
- The stage is CSS `position: sticky` inside a wrapper whose height is set in CSS. No ScrollTrigger pin.
  One third of a screen of scroll per photo on desktop, 40% on phones, a short hold on the last one.
- Not scrubbed and no snap: crossing a threshold starts a 0.35 s change on its own clock (the new photo
  rises inside the arch; the gold arch line redraws; the caption swaps). Fast scrolling goes straight to
  the photo of the current position.
- Progress mark: four small arch outlines, each a real button. An exit link goes to `#contrada`.
- All four images are in the HTML as figures with alt, width and height, lazy-loaded. Without JavaScript or
  with reduced motion: no sticky stage, the four figures show as large arch tiles (two per row on desktop).
- The phone booking bar stays visible over the stage. Hash links to sections below land correctly.

## 5. Line drawings

Construction as the existing icons: 64 by 64 grid, one stroke of 1.5, round caps and joins, no fill,
`currentColor`, at most eight paths, safe SVG only, ids prefixed `svg-`. Each draws in once with the
existing `data-draw` hook and then makes one small move (creative 5). Nothing loops.

| File | Shows | Used |
|---|---|---|
| `icon-coccio` (exists) | terracotta bowl with steam | `#tavola` intro, menu "Secondi", food index |
| `icon-pici` (exists) | pici | food index, menu "Primi" |
| `icon-tartufo`, `icon-tagliere`, `icon-volta`, `icon-fiorentina`, `icon-vino`, `icon-lanterna`, `icon-barbero` (exist) | as named | larders, cantina, food index, menu headings, gallery, `#perche` |
| `icon-cinghiale` (exists, to be checked against the walking boar and redrawn if it does not read as a boar) | boar's head or small boar | food index |
| `icon-cinta` (new) | pig in profile with the white band as two lines | `#cinta`, food index |
| `icon-porcino` (new) | porcino: cap, stem, grass tuft | `#porcini`, food index, menu "Contorni" |
| `icon-forchetta` (new) | fork with three loops of spaghetti | `#spaghetti` |
| `icon-tuffo` (new) | a cantuccio over a small glass | `#dolce`, food index, menu "Dolci" |
| `icon-stadera` (new) | steelyard: beam, hook, sliding weight | fiorentina band |
| `icon-tavola` (new) | check napkin, fork and knife | `#prenota` on every page, booking strip |
| `icon-torre` (new) | Torre del Mangia, small | `#perche` (5 minutes from the Campo) |
| `icon-porta` (new) | the gate of the opening, small | `#perche` (inside the walls, since 1992) |

Also: the Siena skyline (exists) draws once along the top edge of the footer on the home page, the wine
list and Dove siamo; on the menu page each section heading gets its icon beside the numeral.

## 6. Motion and transitions

Kept untouched: gate, book, pour, pici, boar, map, the reveals. New, all with a reduced-motion state and a
no-JavaScript state that show the content:
- The gallery engine of section 4.
- Icon moves of creative 5 (steam, the steelyard tips and settles, the cantuccio dips, napkin then fork and
  knife, a truffle shaving falls), each under 1.6 s, once.
- Headings: the upright line and the italic line of each h2 rise one after the other (0.5 s, 80 ms apart).
  Paragraph reveals shortened from 0.7 to 0.5 s.
- Between pages: cross-document View Transitions as a progressive enhancement: the old page fades in
  0.15 s, the new one opens with a pointed-arch wipe in 0.35 s. Skipped when a page opening will play, on
  hash links and on the language switch (`pagereveal` guard). Browsers without support navigate as before.
- The skyline at the footer; the battlement line of green sections uncovers left to right (could).
- While a page opening plays, the page behind it is `inert`.
Not done: a second pinned section, snap, a router, loaders, autoplaying carousels, cursor effects, video.

## 7. Booking, marketing and SEO decisions

From `audit/marketing.md` and `audit/seo.md`:
- "Prenota" reads "Prenota un tavolo" where there is room. The header button is filled once the header is
  solid. The hero shows the number and the address as links. The desktop strip of section 3 puts a booking
  action mid-page. The phone bar labels become "Prenota: chiama" and "Prenota su WhatsApp".
- WhatsApp links carry a prefilled message in the page's language (table for how many, day, time left
  blank for the guest). No promise about reply times.
- One share preview per page type (home, menu, wine list, Dove siamo): its own 1200 by 630 image, title,
  one line, `og:image:alt`, `twitter:image`. Images are made from existing photos, with no text on them.
- Dove siamo is the page for Maps, hotels and guides: its first screen shows the address, Come arrivare,
  Chiama, WhatsApp and one line of days and hours.
- Home and menu stop competing: the home page owns "osteria a Siena", the story and the explanations;
  the menu owns dish names with prices. New home meta description (SEO audit section 3). Dish terms that
  must stay in the home text: SEO audit section 2.
- Structured data: no price on the home page; `Restaurant.image` gains the room photo; `WebPage` on home,
  menu and wine list; `ImageObject` for the gallery photos if it stays small. No `ReserveAction`, no
  ratings, no `priceRange`.
- Not done now, because the facts are missing or the founder has not decided: an "open now" label, Palio or
  holiday hours, group menus, in-house pasta claims, allergen claims, a questions block on the home page.

## 8. Files and who writes them

| File in this folder | Owner | Change |
|---|---|---|
| `copy.md` | copywriter | Version 3 deck: row slots and the price line removed; food blocks rewritten; new slots for `#perche`, the gallery, the food index, icon labels, hero lines, booking strip, phone bar, WhatsApp text, links |
| `seo-v3.md` (was `seo-v2.md`) | seo-specialist | Edited in place: tags, share previews, alt texts, JSON-LD, sitemap dates, internal links by destination (visible labels belong to `copy.md`) |
| `assets/icon-*.svg` | svg-designer | Eight new drawings, one checked |
| `tools/`, `site/styles.css`, templates, `qa/qa-site.cjs` | web-builder | Rows and dead code removed, new blocks, gallery markup and static state, icons inline, anchors, share images, dish ids on the menu, View Transition CSS |
| `site/main.js`, `site/motion.css` | motion specialist | Gallery engine, icon moves, heading reveal, `pagereveal` guard, language switch keeps the anchor, `inert` |
| `links.md`, `README.md`, `qa/ledger.md` | lead | Owner's link list, hand-over note, QA record |

## 9. Limits that hold

Static site; no third-party script, tracking or cookie; Lighthouse mobile 95 or more; the hero text
painted from the first paint; no layout shift; every motion has reduced-motion and no-JavaScript states;
Italian and English twins; facts only from the profile; no price outside the menu pages; added weight at
most about 8 KB of CSS and 6 KB of script (frontend audit section 7); gallery images lazy.

## 10. Open questions carried to the founder

Truffle "tutto l'anno" next to the menu's "di stagione"; three wine names to proofread and the heading
"Rosé e bollicine"; whether the gran tagliere is the Tagliere del Cacciatore; pici al ragù di cinghiale
named on the home page while the menu lists tagliatelle al ragù di cinghiale; whether WhatsApp is answered
on the landline; larger originals of the lantern, the wall photographs and the amaro photo for the gallery.
