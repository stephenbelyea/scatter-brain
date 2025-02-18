import { TODAY } from "./get-today";

export const REPEATS = {
  ALL_WEEKEND: "allWeekend",
  DAILY: "daily",
  WEEKDAY: "weekday",
  WEEKEND: "weekend",
  SUNDAY: "sunday",
  MONDAY: "monday",
  TUESDAY: "tuesday",
  WEDNESDAY: "wednesday",
  THURSDAY: "thursday",
  FRIDAY: "friday",
  SATURDAY: "saturday",
};

// Sunday = 0; Saturday = 6
export const REPEAT_RANGES = [
  { key: REPEATS.ALL_WEEKEND, days: [0, 6], refresh: false },
  { key: REPEATS.DAILY, days: [0, 1, 2, 3, 4, 5, 6], refresh: true },
  { key: REPEATS.WEEKDAY, days: [1, 2, 3, 4, 5], refresh: true },
  { key: REPEATS.WEEKEND, days: [0, 6], refresh: true },
  { key: REPEATS.SUNDAY, days: [0], refresh: true },
  { key: REPEATS.MONDAY, days: [1], refresh: true },
  { key: REPEATS.TUESDAY, days: [2], refresh: true },
  { key: REPEATS.WEDNESDAY, days: [3], refresh: true },
  { key: REPEATS.THURSDAY, days: [4], refresh: true },
  { key: REPEATS.FRIDAY, days: [5], refresh: true },
  { key: REPEATS.SATURDAY, days: [6], refresh: true },
];

export const getTodayRepeats = () => {
  const dayOfWeek = TODAY.getDay();
  const todayRepeats = REPEAT_RANGES.filter((range) =>
    range.days.includes(dayOfWeek)
  );
  return todayRepeats;
};
