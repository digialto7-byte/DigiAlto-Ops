import unittest
from decimal import Decimal

from cart import cart_total


class CartTotalTest(unittest.TestCase):
    def test_sums_lines(self):
        self.assertEqual(cart_total([(Decimal("2.50"), 2), (Decimal("1.00"), 3)]), Decimal("8.00"))

    def test_empty_cart_is_zero(self):
        self.assertEqual(cart_total([]), Decimal("0"))

    def test_negative_quantity_rejected(self):
        with self.assertRaises(ValueError):
            cart_total([(Decimal("1.00"), -1)])


if __name__ == "__main__":
    unittest.main()
