# Lead check: project plan vs PRD and security checklist

- **Date:** 2026-10-21 · **Checked by:** lead (project-kickoff step 5)
- **Inputs:** `project-plan.md`, ADR-001 to ADR-005, `knowledge/clients/osteria-dei-rossi/sources/prd-2026-10-21.md`, `.claude/skills/security-checklist/SKILL.md`
- **Result:** PASS, ready for founder review. One gap was fixed in the plan; three items are left for the founder.

## PRD coverage
- Appendix A maps every PRD requirement to a milestone (M0–M46), a later phase, or "Out of scope (PRD)". It covers every scope-table row, sub-sections 1.1–4.5, traceability and labelling, the assistant, architecture, the data model, hardware, the NFRs, the four gates and the success metrics.
- I spot-checked smaller requirements against the milestone specifications and found each one placed:
  - moving average with last and max price, and the switch to last price (M8)
  - credit memos (M4, M5, M9)
  - "segue" markers and moving items between courses (M18)
  - coperto (M17)
  - staff meals (M15)
  - the unmapped-items report (M22)
  - same-period KPI comparison and covers per hour (M22)
  - end-of-day variance before midnight (M21)
  - high-contrast kitchen mode and Safari iOS (NFR rows)
  - the 10-invoice contract test set (M3)
  - the 90-second table-entry check (Gate 3)
  - the weekly pg_dump (M25)
- Not placed, each with a reason:
  - **Allergen matrix:** the PRD does not phase it (Q21).
  - **Alternative fixed-cost bases:** the PRD says "selectable later".
  - **Running-cost target:** an operational target, not something a milestone can build.
- Where the plan departs from the PRD, each with a source and open for founder sign-off:
  - Next.js 16 instead of 15.
  - pg_cron instead of Vercel Cron, because Hobby runs cron at most once a day.
  - Vercel Hobby is non-commercial only (Q9).
  - New Supabase API keys.
  - Cost columns split out of `batch` and `order_line` so waiters cannot read them.
  - Staff PINs verified by Supabase Auth through a peppered derivation, with no PIN hash stored.

## Security checklist (designed for; verified again per milestone by code-reviewer)
| Area | Covered by |
|---|---|
| Secrets | §3.11.7 lists where every secret lives; `.env.example` holds names only; scoped keys; secret-key lint rule (M0 test 11); rotation runbook (M25) |
| Input and output | strict Zod at every route, typed RPC and no string SQL, upload magic bytes and size checks (M2), escaped rendering, CSV formula escaping (M24), LLM output treated as untrusted (M3 test 4) |
| Redirects | **Gap found and fixed:** the magic-link `next` parameter allows same-origin paths only; added to §3.11.3 and as M0 test 12 |
| Auth and access | magic link plus device enrolment and PIN with lockouts (M11), RLS for every table and role, IDOR test (M2 test 5), MFA for admin, rate limits |
| Web | CSP, HSTS, nosniff, Referrer-Policy, frame-ancestors (M0, M25), same-origin CORS, CSRF through SameSite cookies plus JSON content type |
| Personal data | no customer data; staff data minimal; pseudonymisation on an erasure request; no PII in logs or Sentry; DPA and sub-processors (Q13) |
| Dependencies and deploy | `npm audit` gate (M25), no stack traces in errors, Supabase daily backups plus an encrypted weekly dump with a restore test |

## For the founder
- **Q16 (chef "margins only"):** in the base plan the chef can see € costs. The stricter reading, percentages only, is variant V6. The PRD says "Margins only", and a € margin next to the sale price reveals the cost anyway. **The lead recommends V6 as the default** unless the owner wants the chef to see € costs.
- **Q9 / Q10 / Q11 (accounts, plans, code ownership):** these block M0. The environments cannot be created until they are answered.
- **Schedule (Q24):** 26 MVP milestones are tight for one developer between 2026-11-03 and 2027-01-12. Decide now which milestones may move after go-live.
