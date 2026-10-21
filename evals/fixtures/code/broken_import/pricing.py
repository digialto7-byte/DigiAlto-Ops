"""Price helpers. `line_total` was renamed from `item_total` in the last commit."""
from decimal import Decimal


def line_total(unit_price: Decimal, quantity: int) -> Decimal:
    if quantity < 0:
        raise ValueError("quantity must be >= 0")
    return unit_price * quantity
