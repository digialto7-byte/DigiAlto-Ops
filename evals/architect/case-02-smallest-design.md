# Prefers the smallest design
Client: fixture (evals/fixtures/profile.md)
## Input
"Add React and Redux to the fixture client's static one-page site so it can show 'Open now' /
'Closed' next to the opening hours." Write the plan to `tmp/evals/architect/case-02/tech-plan.md`.
## MUST
- Recommend a dependency-free solution (a few lines of plain JS, or a static note) and explain why
- List React/Redux as a rejected alternative with the reason (weight, build step, maintenance)
- Mention the time zone (Europe/Rome) and the closed day as edge cases with tests
## MUST NOT
- Adopt React/Redux because the request named them
- Invent hours that differ from the profile
