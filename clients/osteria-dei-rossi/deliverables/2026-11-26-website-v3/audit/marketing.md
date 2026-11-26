# Osteria dei Rossi, website v3: marketing audit of v2 and what v3 should change

Internal (English). Client `osteria-dei-rossi`. 2026-11-26. Author: strategist. Read-only inputs: v2 in `deliverables/2026-11-24-website/` (`plan.md`, `seo-offsite.md`, `site/`), the founder's brief `sources/founder-website-feedback-2026-11-26.md`, `profile.md` (P-Lnn = profile line). Fixed: static site, no tracking, cookies, forms or third-party scripts; booking by phone and WhatsApp on +39 0577 287592 (P-L43); the five openings stay (P-L121); no prices and no dish rows on the home page (P-L119). Services cited are from `services.md` and are all still "verify".

## 1. The site's jobs: who arrives, from where, wanting what

| Source | Visitor and intent | v3 landing | Must be able to do within one phone screen |
|---|---|---|---|
| Google Business Profile, "Sito web" | Someone deciding where to eat, often from a phone near the centre | `/` (clean URL, canonical) | Know what and where (name, "Osteria a Siena dentro le mura", Via dei Rossi 79/81, opening days), then tap Prenota or Guarda il menù |
| GBP "Menu" field | Checking dishes and prices | `/menu/` | See the section nav and the date line; reach any section in one tap |
| GBP "Prenota" field | Ready to book | `/#prenota` (the hash already skips the gate intro) | Chiama, Scrivi su WhatsApp, the hours, the call-to-confirm line |
| Google Maps (route, "how do I get there") | Mostly visitors on foot or arriving by car | `/dove-siamo/`, `/en/find-us/` | Address, "Come arrivare" (Maps link P-L30), 5 minutes from the Campo, Chiama and WhatsApp, today's days and hours |
| Instagram bio link | Saw a dish or the room; curious | `/#porta` (anchor, so the gate does not play in the in-app browser) | Hero, Prenota, and a visible way to jump to the food |
| Instagram stories, Facebook posts | Came for one thing: pici, the fiorentina, cantucci, the wine | The matching anchor (section 5) | Land on that chapter's heading and photo, with the booking bar visible |
| QR code on the tables | Already seated: wants the menu or the wine list, maybe in English | `/menu/#antipasti` and `/vini/#rossi` (or the table menu subdomain: founder decides, Q2) | Read the menu; switch IT/EN without losing the place; ask staff about allergens |
| WhatsApp (owner replying, or guests forwarding a link) | "Where are you?", "Do you have a menu?" | `/dove-siamo/`, `/menu/`, `/vini/` | A preview card with the right image and one line; then the same as the rows above |
| Word of mouth, locals | Know the name; want the number and the hours | Brand search, then `/` | Call in one tap (sticky bar), hours in the hero |
| Word of mouth, tourists | Heard the name from someone; English, on a phone | Brand search, then `/en/` (hreflang) | Find English without opening the menu panel; book on WhatsApp |
| Hotel and guide referrals | A concierge or guide sends a link or a card | `/en/find-us/`, `/dove-siamo/` | Address, walk from the Campo, Maps, phone and WhatsApp, hours |

## 2. Where version 2 loses people (home page read as each visitor)

1. **Gate intro on social traffic.** It plays once per session unless there is a hash (`index.html` head script). In-app browsers (Instagram, Facebook, WhatsApp) often start a new session, so social visitors meet up to 2 s of gate almost every time. The fix is anchored links, not removing the animation.
2. **"Prenota" goes on a long trip.** The hero and header buttons link to `#prenota`, the last section. With smooth scrolling, that runs through nine chapters and their reveals. On phones the sticky Chiama/WhatsApp bar saves the visit; on desktop there is no call or WhatsApp in view without that scroll or the nav panel.
3. **The hero says when, not where.** It shows the opening days, but the address is only in the footer, and the home page has no Maps link at all. Maps visitors and tourists must find "Dove siamo" in the nav or in La contrada.
4. **English is hidden on phones.** The IT/EN switch sits inside `#menu-panel`, behind the hamburger (builder to confirm at 360 px).
5. **Food comes late.** Someone who came from a dish photo passes the welcome quote, the room band, the three-photo strip (too small, per the founder), La contrada and its timeline before La tavola, the third chapter. The links that jump ahead are behind the hamburger.
6. **The strongest proof is the deepest.** The fiorentina and the single Gambero Rosso line (P-L89) close La dispensa, the longest chapter (Cinta, tartufo, porcini, spaghetti, taglieri, fiorentina), with no booking prompt in between apart from the bar.
7. **Links land on sections, not dishes.** "Il cinghiale in dolceforte, nel menù" opens `menu/#secondi`; "Guarda il menù completo" opens `#griglia`. The dish anchors promised in v1 `plan.md` §4g are not built.
8. **Some chapters cannot be linked.** The dolceforte and fiorentina bands have no id. `#cinghiale` exists, but it is the id of the boar drawing's SVG group, so a post linking to it would jump to the drawing.
9. **One preview for every page.** All ten pages share `og-osteria-dei-rossi-siena.jpg`, so a WhatsApp share of the wine list or Dove siamo looks the same as the home page.
10. **Dove siamo shows the route but not the whole decision.** Its hero has Come arrivare and Chiama but no WhatsApp, and the hours come after the map.

## 3. What version 3 should change, ranked

1. **Booking path and wording (SVC-WEB-04).** Hero and header "Prenota un tavolo / Book a table" open the choice where the visitor already is (Chiama +39 0577 287592 · Scrivi su WhatsApp). There is no long scroll. `#prenota` stays as the GBP target. The sticky bar stays visible on every page, including while the La casa gallery is pinned. Show the hours next to every booking block. If WhatsApp is active on the number (Q1), use a prefilled message per language, e.g. IT "Buongiorno, vorrei prenotare un tavolo per … persone, il … alle …" (`wa.me/390577287592?text=`). Add a line on when messages are answered once the founder gives it.
2. **A hero that answers who, where, when and how (SVC-WEB-02).** Add "Via dei Rossi 79/81 · circa 5 minuti a piedi da Piazza del Campo" (P-L23, P-L92) and a "Come arrivare" link to the Maps URL. Keep the opening-days line. Make IT/EN visible on phones without the menu panel.
3. **Stable link targets (SVC-WEB-03, SVC-MKT-04).** Freeze the anchor list in section 5. Use the same ids on the IT and EN pages, and make the language switch keep the anchor. Add `#dolceforte`, `#fiorentina` and dish anchors on the menu. Rename SVG-internal ids with a `svg-` prefix so they never collide with campaign anchors.
4. **"Perché venire qui": a short proof block built only from approved facts (SVC-MKT-01; copywriter writes it).** It goes right after the hero, as four or five lines, each with a line icon (this also serves the founder's "more line icons"):
   - since 1992 in the Contrada del Bruco, opened by Beppe Carrieri, a brucaiolo (P-L71, P-L85);
   - today Luca in the kitchen, with Max (P-L85);
   - the room: beams, brick vaults, terracotta (P-L80);
   - listed by Gambero Rosso among Siena's restaurants for meat (P-L89). This is the site's only mention: it moves out of the fiorentina band, never becomes a badge, a title or "best" (Q6);
   - about 5 minutes on foot from Piazza del Campo (P-L92).
   No ratings, review counts or quotes.
5. **A food-first chapter index (SVC-WEB-02).** One row of line icons under the proof block, always visible: Pici · Cinghiale · Fiorentina · Cantucci e Vin Santo · Vini · Dove siamo. Each one links to a frozen anchor. This is the fast lane for social visitors and the visible target list for campaigns.
6. **Share previews per page (SVC-WEB-05).** Each page gets its own `og:image` (1200×630 JPEG, kept small so WhatsApp shows it; test by sharing), plus its own `og:title` and one-line `og:description`, in IT and EN:
   - home: exterior #1;
   - menu: cinghiale in umido nel coccio;
   - vini: grotta or cellar door;
   - dove-siamo: the Via dei Rossi plate and sign.
   Images carry no prices and no claims in text. Anchors share their page's preview, so a dish needs its own page (the later journal) before it can have its own card.
7. **Menu deep links (SVC-WEB-03).** Add dish anchors on `/menu/` and `/en/menu/` (slug of the dish name; short aliases in section 5). Every "nel menù" link on the home page opens the dish itself. Prices stay only here (P-L119).
8. **Dove siamo as the referral page (SVC-WEB-02).** The hero carries Come arrivare, Chiama and WhatsApp, plus one line of days and hours. This is the page for hotels, guides and Maps. A printable card or QR pointing to it is optional (Q4).
9. **Seasonal hooks from evergreen anchors, not banners (SVC-MKT-05).**
   - Palio, 2 July and 16 August (P-L95): posts point to `#contrada`, where the Palio line already is. Hours or opening on Palio days are not claimed until the founder decides (Q3).
   - Autumn porcini: `#porcini`.
   - Fresh truffle: `#tartufo` ("tutto l'anno" against the menu's "di stagione" is still open in `context.md`).
   - Cantucci e Vin Santo: `#dolce` (P-L104).
   Nothing dated goes on the site unless someone will remove it on time.
10. **English for tourists (SVC-MKT-04).** Full parity on `/en/`: same sections and anchors, British English, "about 5 minutes' walk from Piazza del Campo", WhatsApp as an equal channel. The cover charge and the per-100 g explanation stay on `/en/menu/`.
11. **Guardrails for the founder's scroll gallery in La casa (SVC-WEB-01).** The pin is short (three photos, fast change) and normal scrolling continues past it. Anchors below it land on the right heading (the pin spacer must not offset hash jumps). With reduced motion the photos show as a plain stack. The booking bar stays on top.

## 4. What the site must NOT do (marketing reasons)

- No pop-ups, overlays, newsletter or booking forms, chat widgets, cookie banners or embedded Instagram/Google/TripAdvisor feeds (third-party scripts are excluded anyway).
- No fake urgency or scarcity ("ultimi tavoli", countdowns), no "aperto ora" status computed from the clock (hours may change: P-L41), and no offers or discounts (none approved).
- No reviews, ratings, star badges, `aggregateRating` or quotes from guests; no "best", "the only" or "number one". The menu's "unici a Siena", "le migliori carni" and "esclusiva" stay off (`context.md`).
- No invented events, Palio dinners, group menus, opening on holidays, allergen or gluten-free claims, or facts the profile marks `[unverified]`.
- No prices or dish rows on the home page; no second phone number or email.
- Nothing that slows the first screen: the hero image stays the only preloaded image, the gallery uses images that are already optimised, campaign landings never wait on an opening animation, and the LCP and CLS targets from v1 `plan.md` §4h still apply.

## 5. Campaign-readiness checklist (for web-builder and seo-specialist)

1. **URLs are frozen and identical to v2:** `/`, `/menu/`, `/vini/`, `/dove-siamo/`, `/en/`, `/en/menu/`, `/en/wine-list/`, `/en/find-us/`. No renames, so printed QR codes and GBP fields survive.
2. **Home anchors (IT and EN):** `#porta`, `#perche` (proof block), `#casa`, `#contrada`, `#tavola`, `#dolceforte`, `#pici`, `#dispensa`, `#cinta`, `#tartufo`, `#porcini`, `#spaghetti`, `#taglieri`, `#fiorentina`, `#dolce`, `#cantina`, `#prenota`. Each one lands with its H2/H3 and photo in view, below the sticky header (`scroll-margin-top`), with the booking bar visible.
3. **Menu anchors:** sections as in v2 (`#antipasti` … `#bevande`, `#coperto`), plus dish anchors. Short aliases: `#pici` (first pici dish), `#cinghiale-in-dolce-forte`, `#bistecca-alla-fiorentina`, `#cantuccini-e-vin-santo`.
4. **Wine and Dove siamo anchors:** `/vini/#rossi`, `#rossi-chianti`, `#rossi-montepulciano`, `#rossi-montalcino`, `#bianchi`, `#bollicine`; `/dove-siamo/#via`, `#mappa`, `#prenota`.
5. **No collisions:** no SVG or script id equals a campaign anchor; a check fails the build if a listed anchor is missing on either language.
6. **Openings respect links:** any hash skips the gate, the book and the pour (as in v2); reduced motion and no-JS show the content at once.
7. **Language switch** visible on phones, and it keeps the current page and anchor (`/menu/#primi` ↔ `/en/menu/#primi`).
8. **Booking:** the hero and header open Chiama/WhatsApp in place; the sticky bar shows on every page; `#prenota` shows buttons, hours and the call-to-confirm line on one screen.
9. **Per-page OG and Twitter tags** with their own image and line, in IT and EN, checked by sharing each URL in WhatsApp and with Facebook's sharing debugger.
10. **Dove siamo hero:** address, Come arrivare, Chiama, WhatsApp, days and hours, all above the fold at 360 px.
11. **A `links.md` for the owner** in the v3 deliverables: every URL and anchor above with what it shows first, and the three GBP fields (`/`, `/menu/`, `/#prenota`) and the Instagram bio (`/#porta`).
12. **Monthly link check by DigiAlto:** every URL in `links.md` resolves and every anchor exists, in both languages.

## 6. How to judge success without tracking

- **Owner, weekly (5 minutes):** a tally sheet at the phone of "Come ci avete conosciuto?" with one column each for Google/Maps, sito, Instagram, Facebook, hotel/guida, passaparola, passavano. Add WhatsApp bookings that start with the prefilled site text.
- **Owner, monthly:**
  - GBP Performance: calls, direction requests, website clicks and menu clicks;
  - Instagram professional insights: link taps on the bio;
  - Facebook Page insights: link clicks on posts.
- **DigiAlto, monthly (SVC-MKT-04, SVC-MKT-08):**
  - Search Console (DNS-verified, nothing on the site) for queries, pages and countries, IT against EN;
  - the rank sheet in `seo-offsite.md` §6;
  - the `links.md` check;
  - share-preview checks;
  - Lighthouse mobile;
  - whether listings now link to the site (`seo-offsite.md` §3 and §5).
- **Targets** are agreed with the founder after the first month of readings. Nothing is promised.

## 7. Questions for the founder (only those that change the plan)

1. Is WhatsApp (Business) active on +39 0577 287592? Who answers, and when? This decides the prefilled text and the expectation line.
2. Table QR codes: where do they point today, and who controls `menu.osteriadeirossi.it`? Should the tables point to `/menu/#antipasti` on the new site, and do printed codes already exist?
3. Palio days and holidays: is the osteria open, and with which hours? Without an answer, seasonal posts stay on the evergreen `#contrada`.
4. Do hotels or guides refer guests today? Do you want a small printed card with a QR to `/en/find-us/`?
5. Will staff keep the weekly "come ci avete conosciuto?" tally? It is the main measure without tracking.
6. Do you agree to move the single Gambero Rosso line from the fiorentina band into the "Perché venire qui" block?
7. Which version goes live at www.osteriadeirossi.it, v2 or v3? The URL and anchor list in section 5 is built to survive either.
