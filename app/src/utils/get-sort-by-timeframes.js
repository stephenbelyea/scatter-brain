import { TODAY } from "./get-today";

export const TIMEFRAMES = {
  ALL_DAY: "allDay",
  MORNING: "morning",
  BEFORE_SCHOOL: "beforeSchool",
  AFTER_SCHOOL: "afterSchool",
  EVENING: "evening",
  BEDTIME: "bedtime",
};

export const TIMEFRAME_RANGES = [
  { key: TIMEFRAMES.ALL_DAY, start: 5, end: 21, order: 0 },
  { key: TIMEFRAMES.MORNING, start: 5, end: 10, order: 1 },
  { key: TIMEFRAMES.BEFORE_SCHOOL, start: 7, end: 9, order: 2 },
  { key: TIMEFRAMES.AFTER_SCHOOL, start: 15, end: 18, order: 3 },
  { key: TIMEFRAMES.EVENING, start: 16, end: 19, order: 4 },
  { key: TIMEFRAMES.BEDTIME, start: 18, end: 21, order: 5 },
];

export const TIME_TO_FRAME = {
  BEFORE: "before",
  AFTER: "after",
  WITHIN: "within",
};

const getListTimeframe = (list) =>
  TIMEFRAME_RANGES.find((range) => range.key === list.timeframe);

export const getSortByTimeframes = (a, b) => {
  const orderA = getListTimeframe(a)?.order;
  const orderB = getListTimeframe(b)?.order;
  if (!orderA || !orderB || orderA === orderB) return 0;
  return orderA > orderB ? 1 : -1;
};

export const getListWithinTimeframe = (list) => {
  const { start, end } = getListTimeframe(list);
  const hour = TODAY.getHours();
  if (hour < start) return TIME_TO_FRAME.BEFORE;
  if (hour > end) return TIME_TO_FRAME.AFTER;
  return TIME_TO_FRAME.WITHIN;
};
