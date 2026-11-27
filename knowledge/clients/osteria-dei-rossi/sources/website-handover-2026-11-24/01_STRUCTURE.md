# Osteria dei Rossi: project structure handover

Carried over from the FCOMM project (five mock versions, Astro + static build, multi-agent build and QA). This file is what the new session should build to.

## 1. Project folder

```
OSTERIA-DEI-ROSSI/
├── CLAUDE.md                  ← project rules (copy from §6 below)
├── 00_brief/                  ← CONTEXT.md (facts, rules), owner answers, decisions log
├── 01_research/               ← SEO & competitor research, keyword map, Google Business Profile audit, reviews audit
├── 02_assets/                 ← the owner's photos and videos (originals untouched) + manifest.csv (file, subject, dish, room, alt IT/EN, rights)
├── 03_strategy/               ← positioning, tone of voice IT/EN, copy deck (CSV: page, section, slot, it, en, status)
├── 04_website_brief/          ← sitemap.csv, wireframe spec, design tokens (DTCG JSON → CSS), motion spec, SEO spec
├── 05_site/                   ← the Astro project (source, dist/, scripts/)
├── 06_motion/                 ← motion prototypes, video loops, reel
├── 07_seo/                    ← schema JSON-LD, Google Business Profile kit, citations list, review plan, monthly report template
├── 08_qa/                     ← QA playbook, facts register, every QA round report, lessons/
└── FINAL/                     ← handover docs + launcher
```

## 2. Website architecture (bilingual IT at `/`, EN at `/en/`; consider DE at `/de/` for Siena's German-speaking visitors)

| Page | IT URL | EN URL | Main search intent it must win |
|---|---|---|---|
| Home | `/` | `/en/` | "osteria Siena", "ristorante tipico Siena", brand name |
| Menu (HTML, never only a PDF) | `/menu/` | `/en/menu/` | "menu osteria Siena", dish names (pici, ribollita, pappardelle al cinghiale…) |
| Wine list | `/vini/` | `/en/wine/` | "Chianti Classico Siena ristorante", "Brunello by the glass Siena" |
| Our story / the place | `/osteria/` | `/en/about/` | brand, "osteria storica Siena" |
| Book a table | `/prenota/` | `/en/book/` | "prenotare ristorante Siena", "book restaurant Siena" |
| Where we are | `/dove-siamo/` | `/en/find-us/` | "ristorante vicino Piazza del Campo", "near Duomo di Siena", parking/ZTL info |
| Private dining & groups | `/gruppi-eventi/` | `/en/private-dining/` | "cena di gruppo Siena", "Palio dinner" |
| Journal (local content) | `/journal/<slug>/` | `/en/journal/<slug>/` | "cosa mangiare a Siena", "piatti tipici senesi", "Palio di Siena dinner", seasonal guides |
| FAQ | `/faq/` | `/en/faq/` | voice/AI-search questions (gluten-free, kids, dogs, opening hours, booking) |
| Legal: privacy, cookies, legal notice (P.IVA), accessibility | `/privacy/` … | `/en/privacy/` … | compliance |
| 404 | | | |

Rules: one H1 per page; real text menu with prices and allergens; every page has a unique title (≤ 60 chars) and meta description (≤ 155); hreflang pairs + x-default; canonical; breadcrumbs.

## 3. Tech stack (proven on FCOMM)

- **Astro** static output (+ i18n), deployed to an EU edge host (Netlify / Cloudflare Pages / Vercel). Static HTML = fastest possible Core Web Vitals = SEO advantage over competitors on WordPress/Wix.
- **Design tokens** (DTCG JSON → CSS custom properties) as the single source for colours, type, spacing, motion durations and easings.
- **Motion**: GSAP + ScrollTrigger + Lenis (smooth scroll), View Transitions API for page transitions, SVG stroke drawing for the logo/signature, CSS scroll-driven animations; optional Three.js/OGL only if it stays inside the performance budget. Reduced-motion fallback everywhere.
- **Images**: `sharp` pipeline → AVIF/WebP/JPEG responsive ladders, EXIF auto-orient, GPS stripped, alt text IT/EN, focal points; hero image preloaded with `fetchpriority=high`.
- **Search**: Pagefind (static) if the journal grows.
- **Content**: JSON/CSV in `src/data/` now; optional headless CMS (Storyblok EU / Decap) later so the owner can change the menu.
- **Bookings**: link or embed the osteria's booking tool (TheFork, OpenTable, Quandoo, or a WhatsApp/phone CTA) behind a click-to-load facade (no third-party scripts before consent).
- **Analytics**: cookieless (Plausible/Umami) + Google Search Console + Google Business Profile insights.
- **Postbuild**: `toolkit/build/relativize.mjs` (makes the build open from file:// and any sub-path).

## 4. SEO architecture (the top priority: rank first in Siena)

Be realistic: in local search, the **Google Map Pack** is decided mostly by the **Google Business Profile** (relevance, distance, prominence = reviews), not by the website alone. The website must be the best-optimised one in Siena AND feed the profile. The plan covers both:

1. **Google Business Profile** (owner action, the biggest lever): correct primary category ("Osteria" / "Tuscan restaurant"), secondary categories, exact NAP, hours incl. holidays, menu link to `/menu/`, booking link, 30+ real photos, weekly posts, Q&A, attributes (outdoor seating, vegetarian…).
2. **Reviews**: a steady review flow (QR at the table and on the bill, follow-up message), reply to every review in the reviewer's language with dish and place keywords naturally.
3. **NAP consistency + citations**: identical name/address/phone on the site footer, Google, Apple Maps, Bing Places, TripAdvisor, TheFork, Yelp, Facebook, Instagram, local Siena directories.
4. **On-page**: keyword map per page (§2), Italian + English (+ German) content written for people, dish-level content, local landmarks (Piazza del Campo, Duomo, Contrade, Palio), internal linking.
5. **Structured data (JSON-LD)**: `Restaurant` (name, address, geo, telephone, openingHoursSpecification, servesCuisine, priceRange, menu, acceptsReservations, hasMap, sameAs, aggregateRating only if sourced correctly), `Menu`/`MenuSection`/`MenuItem`, `BreadcrumbList`, `FAQPage`, `Event` (special dinners, Palio), `Article` for the journal, `WebSite`.
6. **Technical**: Lighthouse ≥ 95 in all four categories on mobile, LCP < 2.0 s, CLS < 0.05, INP < 200 ms; XML sitemap; robots; clean URLs; image SEO (file names, alt, captions); hreflang; no render-blocking third parties; HTTPS + HSTS.
7. **Competitor gap**: research the top 10 results and the Map Pack for 30+ queries (IT/EN/DE), compare their sites, reviews count/rating, photos, schema, speed; publish what they lack.
8. **Content engine**: 8–12 journal pieces at launch (Sienese dishes, wine of the territory, Palio dining, seasonal menus, "where to eat near Piazza del Campo"), then 2 per month.
9. **Title and meta formulas** (unique, ≤ 60 / 140–155 chars): Home `Osteria dei Rossi Siena | Cucina senese vicino a <landmark vero>` · Menu `Menù | Osteria dei Rossi, Siena: pici, ribollita e cinghiale` · Find us `Dove siamo | Osteria dei Rossi, Siena centro (ZTL e parcheggi)` · EN `Osteria dei Rossi | Traditional Tuscan restaurant in Siena` · DE `Osteria dei Rossi | Toskanisches Restaurant in Siena`. Meta = brand + category + area + 3–5 dish names + a verb. H1 = category + Siena, never the brand alone.
10. **Full `Restaurant` JSON-LD**: name, url, description, image[3+], logo, telephone, email on the own domain, PostalAddress, geo, hasMap (Maps CID), servesCuisine, priceRange, openingHoursSpecification + specialOpeningHoursSpecification (holidays, Palio days), acceptsReservations + `ReserveAction` → `/prenota/`, hasMenu → full Menu/MenuSection/MenuItem with `offers.price` and `suitableForDiet`, sameAs (Instagram, Facebook, TripAdvisor, TheFork, Maps); aggregateRating only when policy-compliant.
11. **Lesson from the reference**: ilchristina.com has good on-page basics but its visibility comes from off-site (OpenTable, press, likely its Google profile), and it loses on speed (mobile LCP 8.7 s), PDF-only menu, single page and no translations. Beat it with: real pages per intent, HTML menu with prices, IT/EN/DE, og:image per page, SVG logo, one preloaded hero, a branded 404, a sticky "Prenota" on phones, and directory listings and press that **link back to the site**.
12. **Measurement**: Search Console, GBP insights, rank tracking of the keyword map (weekly), monthly report.

## 4b. Storytelling and wording (from the ilchristina.com analysis, full report in `04_REFERENCE_ilchristina.md`)

**Home story template (6 blocks, one scroll = the whole story)**

| # | Block | Job | Formula for Osteria dei Rossi |
|---|---|---|---|
| 1 | Hero | Who, what, where in 3 seconds | Kicker `Osteria dei Rossi · <via/contrada>, Siena` · H1 with category + Siena (keyword) and an italic completion · one sensory line · Book |
| 2 | Identity | One idea that makes the place memorable | One governing image chosen with the owner (e.g. *la Cantina*, *il Banco*, *la Tavola dei Rossi*), 2 sentences: inspiration, then materials and light |
| 3 | Food | What you eat | Dish families on Home (pici, zuppe, cacciagione, formaggi, dolci), real dish names on `/menu/` |
| 4 | Second ritual | Reason to stay or come back | The cellar, Palio evenings or the seasonal menu: one sentence about time and mood |
| 5 | Book and find | Convert | "Prenota il tuo tavolo / *dai Rossi*" + phone, hours, address, map, Instagram |
| 6 | Footer | Facts consistent everywhere | One positioning line + full NAP |

Add what the reference lacks: **people** (the Rossi family and the cook, first person, signed quotes, 1–2 portraits on `/osteria/`), **place history** (street, contrada), **named producers** and **seasonality**. Never repeat a paragraph across sections.

**Wording rules**
- Two-line headlines: a plain first line, then an italic completion starting with a preposition ("Cucina senese / *dal 19XX*", "Pici e ragù / *come in casa*"). 2–4 words per line, sentence case, **no full stops in titles**.
- Body: 1–2 sentences per block (25–40 words). Concrete nouns (materials, light, dish names, origins). No superlatives, no exclamation marks, no "autentico/tipico" unless backed by a fact.
- Describe the room by materials and light; the experience by time ("a table that stays long after dessert"); quality by origin (Cinta Senese, pecorino di Pienza, Chianti Classico, Crete Senesi, named producers).
- Menu: real Sienese dish names, "Le nostre / I nostri" sub-heads, an honest line ("Il menù segue la stagione e il mercato"), allergens, **prices shown**.
- Micro-copy identical across languages: `Prenota` / `Book a table` / `Tisch reservieren`; one spelling of Menù/Menu, also in URLs (`/menu/`).
- Adapt the mechanics, never the identity: no nautical theme, navy/gold palette or copied phrasings. The osteria needs its own Sienese palette and signature motion.

## 5. Motion & graphics principles (what made FCOMM work)

- One expressive gesture per screen; everything else calm.
- Every sequence ≤ 900 ms except one intro (≤ 2 s, skippable, once per session).
- Text is always readable without motion; the H1 never animates in (it protects LCP and SEO).
- Images never zoom; use reveals (panel uncover, mask), gentle parallax ≤ 6%.
- Reduced motion = static end states.
- A **presentation mode** (key P) to replay motion when showing the client, and a **motion reel** (MP4 recorded from the real site) for social and pitches.

## 6. CLAUDE.md template for the project root

```
# Osteria dei Rossi website: project rules
- Goal: a minimal, appealing, motion-led website that ranks first in Siena for osteria/restaurant searches (IT, EN, DE).
- Never invent facts (dishes, prices, awards, reviews, history). Unknown = [DA CONFERMARE] placeholder.
- Images: only the owner's photos in 02_assets/ (or free-licence stock only if the owner approves, credited).
- No trailing period in any title, heading, nav item, button or label.
- Copy: short and direct; Italian native, English British; one idea per screen.
- Every value (colour, type, spacing, duration, easing) comes from the design tokens.
- Accessibility: WCAG 2.2 AA, real-pixel contrast for text over photos, keyboard and reduced motion.
- Performance budget: Lighthouse mobile ≥ 95, LCP < 2.0 s, CLS < 0.05.
- SEO: unique title/meta per page, hreflang, JSON-LD Restaurant + Menu, HTML menu, NAP identical everywhere.
- Every deliverable goes through a QA round (different lens each time) and a fix pass before it is shown.
```
