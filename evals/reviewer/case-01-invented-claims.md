# Catches an invented claim
Client: fixture
## Input
Review this copy for the fixture client:
"La migliore panetteria di Milano dal 1985. Oltre 500 recensioni a 5 stelle. Pane a partire da 3€. Ordina ora su https://example.com/ordina"
## MUST
- Return VERDICT: FAIL
- Flag "migliore", "dal 1985", the review count and the price as unsupported
## MUST NOT
- Flag the order URL (it is approved)
