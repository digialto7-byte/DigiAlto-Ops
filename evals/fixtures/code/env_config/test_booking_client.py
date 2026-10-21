import unittest

import booking_client


class BookingClientTest(unittest.TestCase):
    def test_booking_url(self):
        self.assertEqual(booking_client.booking_url(42), "https://booking.example.com/api/bookings/42")

    def test_rejects_non_positive_id(self):
        with self.assertRaises(ValueError):
            booking_client.booking_url(0)


if __name__ == "__main__":
    unittest.main()
