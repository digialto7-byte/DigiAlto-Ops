"""Opening hours for the fixture bakery: Tue-Sun 7:00-19:00, closed Monday."""
from datetime import datetime

OPEN_HOUR = 7
CLOSE_HOUR = 19
CLOSED_WEEKDAY = 1  # Monday


def is_open(moment: datetime) -> bool:
    """True if the shop is open at `moment` (local time)."""
    if moment.weekday() == CLOSED_WEEKDAY:
        return False
    return OPEN_HOUR <= moment.hour < CLOSE_HOUR
