---
slug: osteria-dei-rossi
updated: 2026-11-14
---

# Founder's outstanding manual steps (Costì / Osteria Dei Rossi)

A single list compiled on 2026-11-14 from the app repo's `docs/go-live/checklist.md` and the open items
in [[context]]. The IDs are the checklist's IDs. Go-live (Gate 3) is **12 January**.

Some older items may already be done without being ticked off. Tell the lead which ones, and it will
check what it can (with read-only Vercel and Supabase) and tick them.

**Never paste a secret in chat.** Secrets go only into Vercel, GitHub environments, Supabase Vault or
the password manager.

## A. Blocking go-live: production setup
1. **S8-1**: create the production Supabase project "Osteria Dei Rossi - Production" (eu-central-1, Free plan). Keep the DB password in the password manager.
2. **S8-4**: production Supabase settings:
   - sign-ups off, Email on;
   - the Access Token hook `app.custom_access_token_hook`;
   - Site URL and redirect URLs set to the production address plus `/api/auth/callback**`;
   - custom SMTP (Resend);
   - read the hosted Auth rate limits;
   - Vault secrets `app_base_url`, `cron_secret` and, while on `*.vercel.app`, `vercel_protection_bypass`.
3. **M25a Auth settings** (staging, then production):
   - minimum password length 10, e-mail OTP expiry 600 s;
   - secure password change off, security notifications off;
   - the Magic Link template from `supabase/templates/magic-link.html`;
   - leaked-password protection, if Free offers it.
4. **S8-5**: Vercel Production env vars, all new and never staging's: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `PIN_PEPPER`, `CRON_SECRET`, `ANTHROPIC_API_KEY`, `EXTRACTION_MODEL_ID`. Then redeploy.
5. **S8-6**: Vercel setting so that production deployments wait for promotion. ~~Plus Vercel Pro for production (2026-11-08)~~: **replaced 2026-11-26: Vercel stays on Hobby until Costì is tested and confirmed; upgrade plan before any sale.**
6. **S8-2**: GitHub environment `production`:
   - you as required reviewer, branch `main` only;
   - secrets `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PASSWORD`, `SUPABASE_PROJECT_REF`; variable `PRODUCTION_PROJECT_REF`;
   - then run and approve "Deploy production database".
7. **S8-7 / S8-16**: the Protection Bypass for Automation secret, saved in the password manager. Put it in the GitHub `staging` environment as `VERCEL_AUTOMATION_BYPASS_SECRET` and in Vault as `vercel_protection_bypass`.
8. **S8-14**: create the production tenant with `npm run create-tenant` from a trusted machine (after the client facts are confirmed), and enrol the staff phones.
9. **FREE-3**: the custom domain serves production. Then point `app_base_url` at it and remove `vercel_protection_bypass` from Vault.
10. **S8-3**: Resend account (free tier, EU if offered). SMTP credentials go only in Supabase production SMTP. Verify the sending domain once the domain is decided.

## B. Blocking go-live: backups (Supabase Free = our dump is the only backup)
11. **S8-8**: a Google Shared Drive folder, and a Google Cloud service account that is a Content manager on it, with a JSON key. Also a passphrase (`openssl rand -base64 48`) in the password manager, and the session-pooler connection strings of staging and production.
12. **S8-9**: GitHub environment `production-backup` (main only):
    - `SUPABASE_DB_URL`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `BACKUP_ENCRYPTION_PASSPHRASE`, `BACKUP_DRIVE_SA_JSON`, `BACKUP_DRIVE_FOLDER_ID`;
    - variables `PRODUCTION_PROJECT_REF`, `BACKUP_KEEP_COPIES`;
    - `staging` gets the same backup secrets with staging values.
    - **Set all the secrets before `PRODUCTION_PROJECT_REF`**: setting it arms the jobs.
13. **S8-10 / FREE-1**: watch the repo's issues (Watch → Custom → Issues); the label `backup-failure` exists; confirm that a failure issue reaches you.
14. **S8-11 / AT4 / FREE-2**: first green "Daily backup" and "Weekly restore check" runs, on staging then on production. Decrypt one copy and one pack by hand and open one PDF.
15. **Q-F1, Q-F4, Q-F5, Q-F6, Q-F8**: backup decisions. Each has a default:
    - storage plan;
    - which Google account owns the Shared Drive;
    - who deletes packs after 10 years;
    - passphrase rotation;
    - a separate backup secret key.

## C. Blocking go-live: checks and measurements
16. **AT2**: run the header check on a preview and on production (`npx tsx scripts/check-headers.ts --base-url <address> --expect preview|production`).
17. **G7-1 to G7-4 / S8-13**:
    - timing workflows at baseline and after;
    - Vercel Usage figures copied into `docs/go-live/csp-impact.md`;
    - the verdict must not be "stop".
18. **IPHONE-1 and M-3**: real-phone check on staging:
    - iPhone and Android home-screen app;
    - password sign-in survives an hour and a restart;
    - code sign-in;
    - staff enrolment;
    - the comanda reloads in flight mode.
19. **STAGING_APP_HOST** variable on the GitHub `staging` environment (before the performance workflow).
20. **GitHub billing** (a payment method or a spending limit), so that Actions keep starting. DigiAlto-Ops checks cannot run today.

## D. Blocking go-live: with the restaurant (client)
21. **G3-1 to G3-4**:
    - a full service on staff phones with real data;
    - day-close variance under 5% against the register;
    - the PRD module checklists signed;
    - a 4-cover, 3-course table entered in under 90 s.
22. **Client facts** for `profile.md`:
    - confirm the remaining `[unverified]` lines, including what **01358391** is;
    - the menu and **allergens with the chef** (A-01…A-24);
    - recipe quantities, yields and shelf lives;
    - fixed costs (rent, labour, utilities);
    - VAT 10% confirmed with the accountant;
    - payment types;
    - the cost-sheet CSV format.
23. **Per-etto dishes**: the full list, price per 100 g and the reference portion weight (Fiorentina, Bistecca Fritta and Costata del Vamosh are known).
24. **DPA-1 and the GDPR register**:
    - the DPA and the sub-processors: Supabase, Vercel, GitHub, Google, Resend, Anthropic;
    - 14 daily copies; invoice files kept for 10 years;
    - TOTP records;
    - customer booking data.
25. **Reservations going live**:
    - approve the privacy text and the privacy contact e-mail;
    - the venue phone;
    - ~~who owns Resend~~: **DigiAlto, one account for all tenants (decided 2026-11-26)**;
    - booking hours.
26. **Invoice extraction**: the `extraction-contract` GitHub environment (`ANTHROPIC_API_KEY`, `EXTRACTION_MODEL_ID`); the model needs an output limit of at least 36 000 tokens. Also: 10 anonymised sample invoices, Anthropic commercial terms (DPA), and the VT1 PDF-frame check in desktop Chrome.
27. **M-4**: tell the owner that old sessions end once; the first time, use "Inviami il link", type the code and choose a password.

## E. Costì brand (arrives with app PR #88)
28. **CB11 / BRAND-1**: send your own Costì logo files, or approve the placeholders for go-live.
29. **BRAND-2**: the hosted e-mail settings (sender name and template branding in Supabase/Resend).
30. A trademark check on "Costì".

## G. Next phase (added 2026-11-26; plan: `deliverables/2026-11-26-costi-next-phase/plan.md`)
In order. Each step says where you do it.
1. **Merge access for the lead** (now): allow the lead's request to attach `osteria-dei-rossi-app` with push access, or add a
   permission rule for `mcp__claude-code-remote__add_repo`. Until then the lead cannot merge (#214 is green and waiting).
2. **Choose the Costì domain** (FS-2, Q-R15): e.g. `app.<digialto-domain>` for the app and booking pages, `console.<digialto-domain>`
   for the console.
3. **Find where that domain's DNS lives**: if its nameservers point to Bluehost, the records go in Bluehost's DNS zone; otherwise in
   GoDaddy's. Check the domain's nameservers in GoDaddy first.
4. **DONE 2026-11-27**: `app.digialto.com` and `console.digialto.com` added in Vercel, CNAMEs at Bluehost, both verified by the lead. (Was: **Vercel → project `osteria-dei-rossi-app` → Settings → Domains**: add the app and console hosts; add the CNAME records Vercel
   shows at the DNS host from step 3; wait for "Valid configuration".)
5. **Vercel env (Production)**: `APP_ORIGIN` and `APP_PUBLIC_ORIGIN` = `https://app.digialto.com` now; `CONSOLE_HOST` = `console.digialto.com` only when SP3 (the console's backend) is merged, the lead says when (FS-2). Tell the lead; it
   updates Vault `app_base_url` and removes `vercel_protection_bypass` (FREE-3).
6. **DONE 2026-11-27**: `mail.digialto.com` verified in Resend (EU, Ireland; tracking off; receiving off; DKIM TXT + two CNAMEs at Bluehost). (Was: **Resend (DigiAlto's account)**: sign up (EU region if offered); add the sending domain `mail.<digialto-domain>`; add its SPF,
   DKIM and DMARC records at the DNS host from step 3; wait for "Verified".)
7. **Resend keys**: an API key into Vercel `RESEND_API_KEY`, plus `MAIL_TRANSPORT=resend` and `MAIL_FROM`; the SMTP credentials into
   Supabase → Authentication → SMTP (staging now, production at S8-4). Never in chat.
8. **GitHub `platform-ops` environment** (FS-1), and later `PLATFORM_ADMIN_EMAIL` in Vercel and GitHub when SP3 is built. Have a TOTP
   app ready for the platform admin account.
9. **Website**: put the osteria website's source in the repo (the `clients/osteria-dei-rossi-website` file is empty), and send the logo
   files (CB11), opening and booking hours, venue phone and privacy contact. They feed the tenant theme and the booking page.
10. **Answer the plan's questions Q1–Q3** (build order, Claude connector timing, the domain name).

## F. After go-live or optional
- **GBP-1**: add `<domain>/prenota/<slug>` as the booking link on the Google Business Profile (needs FREE-3).
- **P2-1**: switch TOTP to "required" on production on a day without service. **P2-JWT**: read and note the JWT signing algorithm of each project.
- Questions for the accountant (commercialista) and RCH (fiscal direction); hardware choices (label printer width, sensor kit, HACCP consultant).
- The plan approval, the PRD departures, Q11 (code/IP ownership) and Q24.
- Open question batches. The build runs on the defaults until you answer:
  - M4–M9, M13–M17 (Q29–Q74);
  - the menu-draft questions (S-, M-, R-).
- Optional: FREE-4 pause rehearsal, Q-F2/Q-F3/Q-F7, the T1 spike run, the "Consigliato dall'Oste" wording.
