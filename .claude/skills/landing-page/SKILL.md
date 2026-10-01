---
name: landing-page
description: Use to produce a website section, a one-page site or a landing page for a DigiAlto client. Runs strategist (if needed), seo-specialist, copywriter, svg-designer (if needed), web-builder and reviewer in the right order.
---

# Landing page / website section

## Preconditions
- `knowledge/clients/<slug>/profile.md` exists and the facts the page needs are verified
  (no `[unverified]` on them). If not, stop and list what the founder must confirm.

## Steps
1. **Folder:** `clients/<slug>/deliverables/<YYYY-MM-DD>-<page-or-section>/`
2. **Plan** (skip for a single small section): `strategist` → `plan.md` with the section list,
   the goal of the page and the primary CTA.
3. **In parallel:**
   - `seo-specialist` → `seo.md` (keywords, meta, H1, FAQ, JSON-LD)
   - `svg-designer` → `assets/*.svg`, only if the plan calls for icons or illustrations
4. `copywriter` → `copy.md`, using `plan.md` and `seo.md`. One block per section with
   "Facts used".
5. `web-builder` → `site/index.html` (+ `styles.css`, `main.js` if needed), using `copy.md`,
   `seo.md` and the SVGs verbatim.
6. `reviewer` on the whole folder.
   - FAIL → send each finding to the author agent (copy issues to copywriter, markup issues to
     web-builder). Re-review. Maximum two fix rounds, then stop and report to the founder.
7. Update `clients/<slug>/context.md` and append to `log/runs.jsonl`.
8. Report: files produced, reviewer verdict, anything still `[NEEDS FACT]`.

## Done means
Reviewer PASS, no placeholders, the page opens in a browser and works at 360px width.
