from decimal import Decimal

from pricing import item_total


def cart_total(lines: list[tuple[Decimal, int]]) -> Decimal:
    return sum((item_total(price, qty) for price, qty in lines), Decimal("0"))
