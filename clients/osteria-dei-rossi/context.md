---
slug: osteria-dei-rossi
updated: 2026-10-21
---

# Osteria Dei Rossi — engagement context

Facts live in [[knowledge/clients/osteria-dei-rossi/profile]]. This file tracks the work.

## Status
- Phase: build (plan provisionally approved; repo https://github.com/digialto7-byte/osteria-dei-rossi-app bootstrapped)
- Next, in the project session: M5 (invoice approval and receipts), building test-first on feat/m05-approval. The plan's 8 founder questions have defaults
- Done: extraction token budget merged 2026-10-22 (osteria-dei-rossi-app#13).
  - EXTRACTION_MAX_TOKENS goes from 16 000 to 36 000, so the 200-line cap fits. More than 200 lines now reads as "too long" (output_truncated), and outputTokens are logged.
  - CI green; code-reviewer PASS round 2.
  - The timeout decision waits for the first measured run on staging
- Done: M4 review screen merged 2026-10-22 (osteria-dei-rossi-app#11).
  - Built:
    - a review screen that shows the document next to the lines, with line actions: map, split, non-stock with a cost centre, credit;
    - supplier link or suggestion, and header corrections;
    - per-supplier mapping memory, with auto-mapping and propagation;
    - an extraction-quality report (Gate 1 correction rate).
  - Verified: CI green, including a new two-session race job; code-reviewer PASS round 5.
  - The lead read every SECURITY DEFINER procedure (fixed search_path, owner/admin check, tenant scope via the invoice lock) and their grants.
  - Known gaps: supplier_item still has M2's UPDATE grant for owner/admin; clearing a duplicate does not re-run auto-mapping.
  - Staging: migrations 20261022130000–131000 applied 2026-10-22; the lead re-checked all 11 md5s. The document iframe check (VT1) needs the founder, see Open items
- Done: first anonymised AT8 contract invoice merged 2026-10-22 (osteria-dei-rossi-app#12).
  - The fixture is a regenerated PDF of the founder's real vegetable-supplier deferred invoice: 4 pages, 82 lines, €770,39. All identifiers are fake; the line data is identical.
  - It also adds the expected JSON and a guard test. CI green; code-reviewer PASS round 3; the lead checked the PDF text and metadata for leftovers.
  - Findings: the extraction output budget (16k tokens, about 150 lines) is below the 200-line cap (small follow-up). Deferred invoices group 11+ delivery notes, so M5 must decide whether a receipt is dated by its delivery note or by the invoice
- Done: M3 AI extraction merged 2026-10-22 (osteria-dei-rossi-app#8).
  - Built: invoice_line table; lease, complete, fail and release procedures; a duplicate check under an advisory lock; a pg_cron + Vault call to `/api/cron/extract`; Zod structured output; deterministic checks (VAT, totals ±€0.05, confidence < 0.8, supplier-is-buyer); a read-only invoice detail.
  - Verified: CI green incl. the real-stack integration suite and e2e; code-reviewer PASS (round 3 plus re-review after merging main); 756 tests.
  - The lead read the prompt (invoice as untrusted data, no tools), the cron bearer check, the model ID from env with no literal in `src/`, the RLS, the grants and the Vault definer function.
  - Staging: all its migrations are applied (see the 2026-10-22 staging decision). The cron makes no calls until the key, the model ID and the Vault secrets are set.
  - Not done: a deterministic duplicate-race test (documented in the test)
- Done: UI foundation merged 2026-10-22 (osteria-dei-rossi-app#9). It uses the founder-approved name, 8 colours and fonts mirrored in the project's `docs/client-facts.md`. Three UI shades are derived from those colours, not copied from the site. Bodoni Moda and Figtree are self-hosted with no Google requests. Contrast is AA in light and dark. The badge reads a generic "Consigliato" and `BrandMark` is a placeholder until the logo file arrives. CI green; code-reviewer PASS round 5; the lead checked the tokens and the facts mirror
- Done: menu draft merged 2026-10-22 (osteria-dei-rossi-app#10, docs only: menu-draft.md with 39 dishes and the drinks, recipes-draft.md, ingredienti-draft.csv with 89 ingredients, and the M7 allergens-unknown mirror; CI green, code-reviewer PASS round 3). Everything in it is DRAFT. Allergens use a prudent column (derived ∪ site); 57 ingredient allergen cells are blank meaning "da confermare"; the CSV is for a test tenant only until M7's unknown state ships
- Done: M2 founder answers merged 2026-10-22 (osteria-dei-rossi-app#7: HEIC re-encode in the browser, owner can clear a duplicate flag at DB level, supplier-name duplicate warning + override columns; CI green, code-reviewer PASS round 3; lead read both migrations). Its 2 migrations still need to reach staging
- Done: M2 invoice upload merged 2026-10-22 (osteria-dei-rossi-app#6: AT1–AT7 green, CI green on the real Supabase stack with Storage, code-reviewer PASS round 2; the lead reviewed the Storage policies)
- Done: M1 master data merged 2026-10-21 (osteria-dei-rossi-app#4: 5/5 acceptance tests, CI green, code-reviewer PASS round 2)
- Done: M1 import defaults merged 2026-10-22 (osteria-dei-rossi-app#5; Q1 and Q5 confirmed by the founder in the project session; CI green, code-reviewer PASS round 2)
- Done: M0 merged 2026-10-21 (osteria-dei-rossi-app#2, all 12 acceptance tests green, code-reviewer PASS)
- Due: Sprint 1 starts 2026-11-03 per the PRD roadmap [unverified]

## Decisions
- 2026-10-21 — Client onboarded as `osteria-dei-rossi`; client-facing language Italian (by: founder)
- 2026-10-21 — Osteria Digitalization PRD captured as `sources/prd-2026-10-21.md`; it supersedes the earlier monitoring and anti-fraud scope (by: founder, via PRD)
- 2026-10-21 — Project plan provisionally approved ("go ahead for now"); open questions and ADRs (`proposed`) still pending (by: founder)
- 2026-10-21 — Q9 (accounts): use DigiAlto's own Vercel team (`digialto7-5548s-projects`) and Supabase organization (`digialto7-byte's Org`, Free plan), the ones connected to Claude (by: founder)
- 2026-10-21 — Supabase staging project created: "Osteria Dei Rossi - Staging", ref `wjowhjsfpcdykxwgjipq`, region `eu-central-1` (Frankfurt), Free plan, $0. No schema yet (M0 applies migrations). Production project to be created before go-live (M25); Free plan has no daily backups, which the PRD requires for production (Q10) (by: lead)
- 2026-10-21 — Q10 (Vercel): stays on Hobby; this is not paid work, so Hobby's non-commercial limit does not apply (by: founder)
- 2026-10-21 — Working mode: Claude merges its own PRs once CI is green and the reviewer/code-reviewer passed, without waiting for founder approval; Claude asks only clarifying questions and for manual tasks it cannot do (by: founder)
- 2026-10-21 — M0 open questions, lead defaults under the founder's working mode (by: lead):
  - Q-A: migrations reach staging only through a CI `supabase db push` job, not by hand.
  - Q-B: Free plan, so the 30-day session timebox is enforced in the app (M11).
  - Q-C: TOTP MFA for owner/admin in M11, if Free offers it.
  - Q-D: no Sentry yet.
  - Q-E: Vercel Production points at staging until M25.
  - Q-F: one tenant per login until multi-venue (M43).
  - Q-G: Supabase built-in mail sender on staging; Resend SMTP in M6.
  - Cross-device magic links: an email OTP code, to be designed in M11.
- 2026-10-21 — M1 open questions, lead defaults (by: lead):
  - Q1: an 11-digit VAT number without `IT` is accepted and normalised to `IT…`.
  - Q2: foreign suppliers are stored without a VAT number.
  - Q3: no checksum on the tenant's own VAT for now.
  - Q4: the chef may see supplier VAT numbers and payment terms (not costs).
  - Q5: on re-import, a blank cell keeps the stored value; clearing a value needs an explicit marker. The CSV template stays as built.
- 2026-10-22 — M2 open questions, answered by the founder in the project session (these replace the lead's defaults) (by: founder):
  - Q1: HEIC yes, if the impact is small: the browser re-encodes to JPEG (variant V1); the server still accepts PDF, JPEG and PNG only.
  - Q2: files over 4 MiB: to be decided once real samples have been uploaded.
  - Q3: the owner may clear a wrong duplicate flag (V3).
  - Q4: `FT 1/2026` and `FT-1-2026` are different invoices; keep today's rule (spaces and case only).
  - Q5: for suppliers without a VAT number, duplicates match on supplier name, with a warning and a manual override (V5 plus override).
  - Q6: invoices are deleted after 10 years, decided by the owner and admin. This is a future purge feature, not yet planned.
  - Kept from the lead's assumptions: owner/admin-only upload, 60 uploads per hour, 5-minute signed links.
- 2026-10-22 — The restaurant's menu site (https://azure-locust-452058.hostingersite.com/) is the source for the app's brand identity and the first draft of the menu items, plus the draft ingredients that follow from them (by: founder, in the project session). This answers plan Q25 and lifts "fake data only" for these items in the project repo.
  - Captured by the lead as `knowledge/clients/osteria-dei-rossi/sources/menu-site-2026-10-22.{md,json}` (the project session's network could not reach the site).
  - Profile facts are added with `[unverified]` markers until the founder confirms them.
  - Allergens stay "to confirm" with the chef.
  - Nothing is auto-imported into staging.
- 2026-10-22 — The founder pasted the full menu (IT/EN, 7 sections incl. drinks, coffee, digestifs) and showed the logo in the project session, approving both as draft client facts for brand identity and draft dishes/ingredients. The app is re-themed to the menu site's brand (osteria-dei-rossi-app#9): cream primary theme, green #1C4130 as the action colour, gold and yellow as accents only (never text on cream), a dark theme on #0F0F0D, Bodoni Moda display + Figtree body (self-hosted), the wordmark as live text "Osteria dei Rossi" in Bodoni Moda with a slot for the real logo file, and a reusable "Consigliato dall'Oste" badge. The logo file is requested; it is not redrawn. A docs-only `docs/client-menu-draft` PR in the project repo adds the menu draft, recipes draft and an ingredient CSV with allergens "da confermare"; nothing is auto-imported (by: founder)
- 2026-10-22 — Staging database migrated by hand through the Supabase connector, with the founder's explicit OK in the project session.
  - Applied migrations 20261021120000 to 20261022100200, schema only, no seed.
  - Each is recorded in `supabase_migrations.schema_migrations` with checksums matching the repo, so the CI deploy treats them as applied.
  - The deploy job had been skipping because the GitHub `staging` secrets are not set yet.
  - (by: founder, done by the project session)
- 2026-10-22 — M5 duplicate gate for suppliers without VAT: a name match stays an overridable warning (M2 Q5), but per pair.
  - Approval recomputes every undeclared look-alike (same name, number and date), and clearing one moves the warning to the next, so the owner confirms each pair before approval.
  - This prevents a double payable from two copies the owner was never shown side by side.
  - It was chosen over "warning only, never blocks" (by: founder, in the lead session)
- 2026-10-22 — M4: invoice review is owner/admin only. The chef does not review and never sees € costs (by: founder, in the lead session)
- 2026-10-22 — The M4 migrations (20261022130000–131000) go to staging by hand, schema only, as before; the project session applies them and the lead verifies the md5s (by: founder, in the lead session)
- 2026-10-22 — Staging migrated by hand a second time, with the founder's OK in the lead session. The project session applied 6 migrations from main e1a6f04 (20261022110000, 110100, 120000, 120100, 120200, 120300), schema only. Each is recorded in `schema_migrations` with an md5 matching the repo, which the lead re-checked on staging.
  - pg_cron and pg_net were installed by the cron migration.
  - The `extract-invoices` cron job exists but is inert: no Vault secrets are set.
  - Security advisor: only "leaked password protection disabled" (by: founder, done by the project session)
- 2026-10-22 — Security-advisor WARN `authenticated_security_definer_function_executable` is accepted by design (by: lead).
  - It covers the 7 M4 review procedures, and M5 will add 3 more of the same kind.
  - These procedures are the only write path, because `authenticated` has no UPDATE on invoice, invoice_line or supplier_item.
  - The lead read each one: owner/admin check first, `search_path=''`, tenant scope via `lock_review_invoice`. pgTAP 019–026 cover role and tenant.
  - Revisit if the advisor reports anything else about them
- 2026-10-22 — M2 invoice upload cap is 4 MiB, not the 10 MB in the project plan (§3.7, §3.11.4): Vercel's request body limit (4.5 MB) is fixed. Larger PDFs would need direct-to-Storage uploads, which is open question 2 in the M2 plan (by: lead, from the M2 plan)
- 2026-10-22 — M3 Q4/Q5: DigiAlto and Osteria Dei Rossi have the same owner and use the same Anthropic account ("one and the same"). So no processing agreement is needed between DigiAlto and the osteria; the Anthropic API account and key belong to that owner. The founder still checks that the account is on Anthropic's commercial/API terms, which include Anthropic's DPA (by: founder, in the project session)
- 2026-10-22 — M3 Q1: the anonymised sample invoices may be committed to the project repo as AT8 fixtures. Personal data is replaced with obvious fakes before committing: sole-trader names, tax codes, IBANs, private addresses, personal emails and phones. Raw originals never enter git, logs or fixtures. code-reviewer checks the fixtures (by: founder, in the lead session)
- 2026-10-22 — The founder approved the trading name "Osteria Dei Rossi", the eight brand colours and the fonts (Bodoni Moda for titles, Figtree for body text) as client facts. Their `[unverified]` markers are removed from profile.md, which unblocks the UI foundation (osteria-dei-rossi-app#9) mirroring them into `docs/client-facts.md` (by: founder)
- 2026-10-22 — M7 gains an "allergens unknown" state, from the menu-draft review (osteria-dei-rossi-app#10). Today a blank allergen cell imports as allergen-free because `ingredient.allergens` defaults to empty. Ingredients, then recipes and menu items, get an unconfirmed state shown as "da confermare" until confirmed. Until then the draft ingredient CSV goes into a test tenant only. Plan §5a M7 updated, with acceptance test 6 (by: lead, from the project session's review)
- 2026-10-21 — Project repo: private `digialto7-byte/osteria-dei-rossi-app` approved. Claude could not create it (GitHub integration returned 403); the founder creates the empty repo and gives the Claude GitHub App access (by: founder)

## Open items
- [ ] Founder confirms the remaining profile.md facts and removes `[unverified]` markers (trading name, colours and fonts approved 2026-10-22)
- [ ] Founder approves `deliverables/2026-10-21-kickoff/project-plan.md` (47 milestones: MVP M0–M25, Phase 2 M26–M40, Phase 3 M41–M46) and ADR-001 to ADR-005 (all `proposed`)
- [ ] Founder answers the plan's open questions Q1–Q29 (Q9 answered; Q10 answered for Vercel, Supabase Pro for production backups still open before M25; Q11 open, not blocking M0)
- [ ] Founder signs off on the plan's departures from the PRD: Next.js 16, pg_cron instead of Vercel Cron, new Supabase keys, cost columns split out, peppered PIN auth
- [ ] Founder decides Q16 (chef sees € costs, or percentages only = V6; lead recommends V6) and Q24 (which MVP milestones may slip past go-live)
- [x] Project repo created by the founder: https://github.com/digialto7-byte/osteria-dei-rossi-app; bootstrap kit + PRD + plan + ADRs pushed on `chore/bootstrap`, draft PR digialto7-byte/osteria-dei-rossi-app#1 (2026-10-21)
- [x] Vercel project `osteria-dei-rossi-app` (`prj_FpiKBSYVplbOXtGRiZUpFwB56Hqq`) created by the founder in team `digialto7-5548s-projects`, linked to the GitHub repo; Vercel Authentication on all deployments except custom domains (2026-10-21)
- [x] Vercel Framework Preset set to Next.js by the founder (2026-10-21); functions pinned to `fra1` in `vercel.json` in M0. Claude's Vercel connector is read-only (403 on create and update), so the founder sets the env vars M0 lists
- [x] 2026-10-21: lessons from this kickoff, founder-approved diffs, merged by Claude under the founder's auto-merge rule: hook allows `.env.example` (digialto7-byte/DigiAlto-Ops#4, code-reviewer PASS) and project-kickoff step 7 hands repo files to a project-repo session (digialto7-byte/DigiAlto-Ops#5)
- [x] 2026-10-21: bootstrap (osteria-dei-rossi-app#1) and M0 (osteria-dei-rossi-app#2) built by the project session `session_01TAMK1utM7VhofwoMRfmEdV` and merged by the lead after checking them.
  - M0 delivers Next.js 16.4 + Supabase tenancy/RLS baseline, owner/admin magic-link login, CI (lint, types, unit, pgTAP, Playwright), `vercel.json` in `fra1`.
  - All 12 acceptance tests pass; code-reviewer PASS on round 3.
  - Vercel Preview env vars are set; nothing has been applied to the staging DB yet.
- [ ] Founder (manual): in Vercel `osteria-dei-rossi-app`, add the Production env vars `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` with the same staging values as Preview (Q-E). Until then, Production builds fail by design.
- [x] 2026-10-21: staging deploy pipeline merged (osteria-dei-rossi-app#3; CI green, code-reviewer PASS round 2). After each CI-green push to `main`, it runs `supabase db push` to staging; it skips with a notice while the secrets are missing.
- [ ] Founder (manual, steps from osteria-dei-rossi-app#3):
  1. GitHub repo Settings → Environments → `staging` (a required reviewer is recommended), with secrets `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PASSWORD` and `SUPABASE_PROJECT_REF` = `wjowhjsfpcdykxwgjipq`.
  2. Supabase staging → Authentication:
     - signups off, Email provider on;
     - after the first deploy, the Access Token hook = Postgres `app.custom_access_token_hook`;
     - Site URL and redirect URLs = the staging origin + `/api/auth/callback**`.
  3. After the first deploy, create the demo tenant and owner locally with `npm run create-tenant` (fake data).
- [ ] Founder (manual, for M3's live contract test; it does not block building M3):
  1. GitHub repo secrets `ANTHROPIC_API_KEY` and `EXTRACTION_MODEL_ID`.
  2. 10 anonymised sample invoices from the 5 largest suppliers (plan Q1), pasted in the project session; anonymised copies may be committed (decision 2026-10-22).
  3. Confirm the shared Anthropic account is on Anthropic's commercial/API terms (DPA included).
- [ ] Founder and chef: answer the menu-draft questions in osteria-dei-rossi-app `docs/client/menu-draft.md` and `recipes-draft.md`: A-01…A-24 allergens, S- site vs founder differences, M- menu model (per-etto weight, drink formats, VAT), R- recipe quantities, yields and shelf lives
- [ ] Founder (optional): approve the badge wording "Consigliato dall'Oste" and/or the menu site's exact extra shades, if wanted in the app (today: generic "Consigliato" and derived shades)
- [ ] Founder (optional): Supabase staging → Auth → enable leaked-password protection (the only security-advisor WARN; login is magic-link only, so no effect today)
- [ ] Founder, to make M3 extraction live on staging: Vercel env `ANTHROPIC_API_KEY`, `EXTRACTION_MODEL_ID`, `CRON_SECRET` (≥ 32 characters); Supabase Vault secrets `app_base_url` and `cron_secret` (same value); answer M3 Q5 (which environments get a key; is the 120 s function limit available on Hobby?)
- [ ] Founder: approve the restaurant's legal entity name and VAT number as client facts (they appear as the buyer on supplier invoices). Until then the tenant VAT stays fake and M3's supplier-is-buyer check cannot fire on real data
- [ ] Founder, M4 questions (osteria-dei-rossi-app#11 body):
  - starting cost centres;
  - whether splits and first mappings count as corrections for Gate 1;
  - whether a non-stock booking is remembered per supplier;
  - behaviour after a supplier relink;
  - smaller UI defaults
- [ ] Founder (manual, VT1), once extraction runs on staging:
  1. On a deployment that points at staging, sign in as the owner and upload a small PDF invoice.
  2. When it reaches review, open `/fatture/<id>/revisione` in desktop Chrome at about 1280 px.
  3. Check that the left-hand frame shows the PDF pages, not a blank box or "refused to connect".
  4. If it is blank, copy the DevTools Console error; the fallback is an "Apri documento" link.
  - The same first run gives the outputTokens and durationMs needed to decide the extraction timeout.
- [ ] Founder: when setting `EXTRACTION_MODEL_ID`, pick a current Claude model whose output limit is at least 36 000 tokens (the extraction ceiling after osteria-dei-rossi-app#13)
- [ ] Q10 remainder: Supabase Pro (daily backups) for the production project, needed before go-live (M25)
- [ ] Q11: code/IP ownership (multi-tenant product vs client-owned code); not blocking the build

## Deliverables
- 2026-10-21 — kickoff (project plan, ADR-001–005, lead check) — `deliverables/2026-10-21-kickoff/` — internal, lead check PASS (one security gap fixed: magic-link redirect allow-list), check_deliverable 0 FAIL
