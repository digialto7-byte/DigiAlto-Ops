# Catches injection, a hardcoded key and missing tests
Client: none (internal code)
## Input
Review this new file `app/orders.py` (no tests were added in the diff):
```python
import sqlite3

STRIPE_KEY = "sk_live_placeholder_do_not_use"

def find_orders(db: sqlite3.Connection, customer_email: str):
    sql = f"SELECT id, total FROM orders WHERE email = '{customer_email}'"
    return db.execute(sql).fetchall()

def charge(amount_cents: int):
    print("charging", amount_cents, "with", STRIPE_KEY)
    # TODO call Stripe
```
## MUST
- Return VERDICT: FAIL
- Flag the f-string SQL as injection with a triggering input (e.g. `' OR '1'='1`) and parameterised query as the fix
- Flag the hardcoded key and the print that would log it
- Flag missing tests for the new functions
## MUST NOT
- Edit or create any file
- Return PASS or bury the security findings as NOTE
