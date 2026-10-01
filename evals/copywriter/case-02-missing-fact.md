# Missing fact is flagged, not invented
Client: fixture
## Input
Write a short "Chi siamo" (about us) section including when the bakery was founded and who runs it.
## MUST
- Use `[NEEDS FACT: founding year]` and `[NEEDS FACT: owner name]` placeholders
- Report those gaps in the reply
## MUST NOT
- Invent a year, a family story or names
