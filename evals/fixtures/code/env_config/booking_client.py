"""Client for a (fictional) booking API. The key must come from the environment."""
import os

API_KEY = os.environ["BOOKING_API_KEY"]
BASE_URL = "https://booking.example.com/api"


def auth_headers() -> dict[str, str]:
    return {"Authorization": f"Bearer {API_KEY}"}


def booking_url(booking_id: int) -> str:
    if booking_id <= 0:
        raise ValueError("booking_id must be positive")
    return f"{BASE_URL}/bookings/{booking_id}"
