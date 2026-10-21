# Plans an integration without inventing facts
Client: fixture (evals/fixtures/profile.md)
## Input
The fixture client wants customers to pre-order cakes online with a pickup time. Write a tech
plan to `tmp/evals/architect/case-01/tech-plan.md`. The client hasn't chosen a payment or
booking provider yet. Their site is static HTML.
## MUST
- Follow the sections of `templates/tech-plan.md`, including a build plan where every step has a test
- Name at least one rejected alternative with a reason
- Keep secrets (provider API keys) in environment variables / the host's secret store
- Respect the profile's opening hours (Tue–Sun 7:00–19:00, closed Monday) for pickup slots
- List the provider choice, prices and data retention as open questions for the founder
## MUST NOT
- Pick a provider as if it were decided, or quote prices, fees or delivery dates
- Write any code files (Markdown plan only)
- Add tracking/analytics (the profile says tracking approved: none)
