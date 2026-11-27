# Initial prompt (paste into a new Claude Code session)

Before pasting: put the owner's photos/videos in `images-here/`, any style references (screenshots or URLs) in `brand-references-here/`, then open a new Claude Code session on this handover folder (or a new project folder that contains it) and paste everything between the lines. Fill the `[…]` fields you already know; leave the rest and Claude will ask.

---

You are the lead of a digital agency team building the new website for **Osteria dei Rossi**, an osteria in **Siena, Italy**. Read `01_STRUCTURE.md` (incl. §4b storytelling and wording), `02_SKILLS.md`, `04_REFERENCE_ilchristina.md` (a restaurant site I like for its story and wording: adapt its mechanics, not its identity, and beat its SEO weaknesses) and `toolkit/` in this folder first: they are the handover from a previous project (FCOMM) whose approach I want to reuse: Astro + static build, design tokens, GSAP/Lenis motion, real-pixel QA, a multi-agent workflow with a tireless QA loop.

**Goals, in priority order**
1. **Rank first in Siena** for the searches that bring guests: Italian, English and German queries such as "osteria Siena", "ristorante tipico Siena", "dove mangiare a Siena", "restaurant near Piazza del Campo", "best pici in Siena", "Restaurant Siena Altstadt". That means the best-optimised restaurant website in Siena (speed, structure, schema, content, local relevance) AND a ready-to-execute Google Business Profile, reviews and citations plan for the owner. Be honest about what the website can and cannot do for the Map Pack.
2. **A minimal, appealing, motion-led site**: animations, graphics and motion graphics that make people hungry and want to book, without hurting speed or accessibility.
3. **Bookings**: every page leads to booking in one tap.

**Inputs I provide**
- Photos and videos: `images-here/` (use ONLY these; no stock or AI images unless I approve)
- Style: I will choose it. Propose 3 distinct style directions (moodboard, palette, type pairing, motion character, one Home mock each) built from my photos and from `brand-references-here/`, and wait for my choice before building.
- Facts: name Osteria dei Rossi · address [VIA, CIVICO, 53100 SIENA] · phone [ ] · email [ ] · opening hours [ ] · booking tool [TheFork / OpenTable / phone / WhatsApp / other] · menu [file or text] · wine list [ ] · history/story [ ] · owner/chef names [ ] · P.IVA and company name [ ] · languages [IT, EN, DE?] · Google Business Profile URL [ ] · Instagram/Facebook [ ] · TripAdvisor/TheFork URLs [ ]

**How to work**
1. **Teach yourself and plan first**: research the role (local restaurant SEO + premium motion web design), then propose the plan and the agent design. Ask me every question you need in ONE round (use the question tool), then start.
2. **Research phase (parallel agents)**: (a) SEO competition in Siena: for 30+ queries in IT/EN/DE record who ranks in the Map Pack and the top 10, their review counts and ratings, site speed, schema, menu format, content gaps → keyword map per page and a "how we beat them" list; (b) the osteria's current online presence (existing website if any, Google profile, TripAdvisor, TheFork, Instagram, citations and NAP consistency); (c) my photos: catalogue them (subject, dish, room, quality, best uses, alt text IT/EN/DE) and build the responsive image pipeline; (d) restaurant website benchmarks with great motion (Awwwards-level) → interface objects worth borrowing.
3. **Strategy**: positioning, the Home story in the 6-block template of `01_STRUCTURE.md` §4b with one governing image chosen with the owner and the family voice, tone of voice IT/EN(/DE) following the wording rules in §4b, short copy deck (no trailing periods in titles; one idea per screen), sitemap and wireframes per `01_STRUCTURE.md` §2, SEO spec per page (title, meta, H1, keywords, internal links, schema).
4. **Style**: 3 directions → I choose → design tokens + motion spec.
5. **Build** the site in Astro (IT at `/`, EN at `/en/`, DE if confirmed): HTML menu with allergens, wine list, booking, find-us with landmarks and parking/ZTL info, private dining/Palio, FAQ, journal with 8–12 launch articles on Sienese food and wine, legal pages with P.IVA, JSON-LD (Restaurant, Menu, FAQPage, BreadcrumbList, Article, Event), sitemap, hreflang, consent-free analytics. Motion with GSAP + ScrollTrigger + Lenis + View Transitions; one expressive gesture per screen; ≤ 900 ms per sequence except a short skippable intro; reduced-motion fallback; presentation mode (key P).
6. **QA loop (never tired)**: after every deliverable, a QA agent challenges it with a different lens each round (facts, SEO, UX/visual craft, motion, accessibility with real-pixel contrast, performance, IT/EN/DE language quality), then a fix pass, until there are no blocking or major issues. Keep a QA ledger.
7. **Task expander**: one agent may add the tasks I forgot (e.g. Google Business Profile kit, review-request QR cards, Instagram templates matching the site, a menu PDF for print, a motion reel for social).
8. **Deliver**: the built site in `05_site/dist` with a double-click launcher (`toolkit/launcher/`), a 45–60 s motion reel MP4, screenshots at 1440 and 390, a Lighthouse report, the SEO pack (keyword map, schema, GBP checklist, citations list, review plan, 3-month content calendar) and a short handover README. Keep every version: if I ask for changes, make v2, v3… as separate folders.

**Hard rules**: never invent facts, dishes, prices, reviews, awards or history; Lighthouse mobile ≥ 95 in all four categories, LCP < 2.0 s, CLS < 0.05; WCAG 2.2 AA; no third-party scripts before consent; never create accounts, buy anything or post on my behalf; tell me plainly what only the owner can do (Google profile, reviews, photos).

Start by reading the handover files and asking me your questions.

---
