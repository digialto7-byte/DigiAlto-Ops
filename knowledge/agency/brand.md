---
scope: agency
source: Project doc "DigiAlto Brand System" (founder-provided brand guidelines)
status: approved
---

# DigiAlto brand

- Name: **DigiAlto** (capital A). Never "Digialto" or "digialto" in client-facing material.
- Tagline: Elevating Digital Experiences
- Mission: DigiAlto empowers businesses with innovative digital solutions that drive
  engagement, efficiency, and excellence.
- Core values: Innovation, Creativity, Excellence, Digital Transformation

## Logo
- Primary: multicoloured circular swirl with a "D" in the centre, brand-gradient.
- Monochrome version for minimal uses. Compact icon: the "D" in the swirl.
- Minimum width 50px digital, 1.5in print. Generous clear space.
- Do: gradient logo on dark or neutral backgrounds. Don't: recolour, stretch, or place on busy
  or low-contrast backgrounds.

## Colour
| Token | Hex | Use |
|---|---|---|
| Teal | #00A8A8 | Primary accent, gradients, glow |
| Orange | #FF6A00 | Accent, CTAs |
| Purple | #7928CA | Accent, gradient stop |
| Deep Red | #B71C1C | Sparing accent |
| Charcoal | #1A1A1A | Primary dark background |

Signature gradient: teal → purple → orange. Body text contrast at least WCAG AA (4.5:1).
Gradient text only on dark charcoal.

## Type
- Headings: Montserrat (bold)
- Body: Poppins
- Accent / labels / stats: Roboto Mono

## Look and feel
Dark theme, vibrant gradient accents, rounded shapes echoing the swirl, flat minimal icons
with gradient accents.

## Build tokens (starting point)
```css
:root {
  --color-bg: #0E0E10;  --color-surface: #1A1A1A;
  --color-text: #F5F5F7; --color-text-dim: #8A8A8F;
  --brand-teal: #00A8A8; --brand-orange: #FF6A00;
  --brand-purple: #7928CA; --brand-red: #B71C1C;
  --grad-brand: linear-gradient(120deg, #00A8A8, #7928CA, #FF6A00);
  --font-head: "Montserrat", sans-serif;
  --font-body: "Poppins", sans-serif;
  --font-mono: "Roboto Mono", monospace;
  --radius: 16px;
}
```
