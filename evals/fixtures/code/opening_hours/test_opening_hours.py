import unittest
from datetime import datetime

from opening_hours import is_open


class IsOpenTest(unittest.TestCase):
    def test_open_on_saturday_morning(self):
        self.assertTrue(is_open(datetime(2026, 10, 24, 9, 0)))

    def test_closed_before_seven(self):
        self.assertFalse(is_open(datetime(2026, 10, 24, 6, 59)))

    def test_closed_at_closing_time(self):
        self.assertFalse(is_open(datetime(2026, 10, 24, 19, 0)))


if __name__ == "__main__":
    unittest.main()
