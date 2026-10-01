---
name: client-intake
description: Use when onboarding a new DigiAlto client or when a client's facts need to be captured from a brief, email, menu or call notes. Creates the client's knowledge profile, context file and sources folder, with every extracted fact marked unverified until the founder approves it.
---

# Client intake

## Steps
1. **Slug.** Derive a lowercase-kebab slug from the client's trading name (`il-christina`).
   Stop if `knowledge/clients/<slug>/` already exists; update it instead of creating a second one.
2. **Create folders** from the templates:
   - `knowledge/clients/<slug>/profile.md` ← copy `knowledge/clients/_template/profile.md`
   - `knowledge/clients/<slug>/sources/` (put raw briefs, menus, notes here; large or
     confidential files stay out of git, so list them under "Sources" with where they live)
   - `clients/<slug>/context.md` ← copy `clients/_template/context.md`
3. **Extract facts** from whatever the founder provided. For each fact:
   - put it under the right heading in profile.md
   - append ` [unverified]` to the line
   - add the source in brackets, e.g. `(src: sources/brief-2026-10-01.md)`
   Never infer facts that are not stated. If unsure, add it to "Open questions".
4. **Language.** Set `language:` in the profile frontmatter (`it`, `en`, ...). Ask if unclear.
5. **Gaps.** Compare with the template headings and list missing essentials in "Open questions"
   (legal name, address, contacts, brand colours, what they sell, prices, goals, deadline, budget).
6. **Report** to the founder: the slug, how many facts were captured, the open questions, and
   the instruction: *"Review `knowledge/clients/<slug>/profile.md`, delete `[unverified]` from
   every line you confirm, correct or delete the rest, then commit."*

## Never
- Remove `[unverified]` markers yourself.
- Copy facts from another client's files.
- Store passwords, API keys, bank details or ID numbers in the profile.
