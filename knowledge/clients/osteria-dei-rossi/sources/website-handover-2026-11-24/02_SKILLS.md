# Skills, agents and tools to use (available in this Claude Code setup)

Load a skill with the Skill tool (or type `/name`). Agent types run as parallel specialists inside a multi-agent workflow.

## Research & strategy
| Skill / tool | Use it for |
|---|---|
| `anthropic-skills:deep-research` | SEO competitor research for Siena (top results, Map Pack, reviews, keywords in IT/EN/DE) |
| WebSearch + `web-fetch` agent | Reading competitor sites, directories, TripAdvisor/TheFork listings (view only) |
| Built-in browser (`mcp__Claude_Browser__*`) | Visual study of reference/competitor sites, screenshots, Google results in a real browser |
| `workflow-authoring` + Workflow tool | The multi-agent build: parallel specialists, rotating-lens QA loop, task-expander agent |

## Design & UX
| Skill | Use it for |
|---|---|
| `ui-designer:ui-designer` / `anthropic-skills:ui-designer` | UI/UX audit, visual hierarchy, design system, component library |
| `modern-web-design:modern-web-design` | Modern patterns, scrollytelling, micro-interactions, accessibility, performance-first |
| `frontend-design:frontend-design` | Distinctive, non-generic production frontends |
| `premium-site-project-luke:premium-site-project-luke` | Rules for websites that feel premium instead of generic |
| `anthropic-skills:theme-factory` | Fast palette/type explorations when you choose the style |
| `artifact-design` + Artifact tool | Publishing private previews/briefs as shareable links |

## Motion & graphics
| Skill / agent | Use it for |
|---|---|
| `gsap-scrolltrigger:gsap-scrolltrigger` (agent `gsap-scrolltrigger:gsap-scrolltrigger-choreographer`) | Scroll-driven reveals, pinning, timelines |
| `locomotive-scroll:locomotive-scroll` (or Lenis via GSAP) | Smooth scroll |
| `barba-js:barba-js` / View Transitions | Page transitions |
| `motion-framer:motion-framer` | If any part is built in React |
| `animejs:animejs` | SVG drawing, staggered sequences (logo, menu reveals) |
| `lottie-animations:lottie-animations` | Small illustrated icons (wine glass, pasta, steam) |
| `threejs-webgl:threejs-webgl` / `lightweight-3d-effects:lightweight-3d-effects` | Optional WebGL image effects (only within the performance budget) |
| `rive-interactive:rive-interactive` | Optional interactive illustrations with state |
| `scroll-reveal-libraries:scroll-reveal-libraries` | Simple fallback reveals |
| `hyperframes` → `motion-graphics`, `website-to-video`, `general-video` | Motion reels, social clips and menu teasers rendered as MP4 |
| `media-use` | Music/sfx/voice, captions, background removal for dish cut-outs |

## Build & QA
| Skill / tool | Use it for |
|---|---|
| `fullstack-developer:fullstack-developer` / `anthropic-skills:fullstack-developer` | Booking integration, forms, CMS hook-up |
| `run` | Launching and checking the site |
| `code-review` | Reviewing the codebase before handover |
| Toolkit in `toolkit/` (from FCOMM) | `relativize.mjs`, link checker, browser QA (console, overflow, IT/EN parity), real-pixel contrast checker, motion timing check, screenshots, motion reel recorder, local launcher |
| npm: `astro`, `gsap`, `lenis`, `sharp`, `pagefind`, `@fontsource/*`, `axe-core`, `lighthouse`, `puppeteer-core` | The proven stack |

## SEO-specific checks (no dedicated skill: the prompt instructs them)
Lighthouse (mobile ≥ 95), Google Rich Results test for the JSON-LD, Search Console set-up, a keyword map with weekly rank tracking, and a Google Business Profile checklist for the owner.

## Optional connectors (only if you authorise them)
Figma (design in Figma first), Vercel (deploy previews), Canva (social assets), Google Drive (owner photo hand-off).
