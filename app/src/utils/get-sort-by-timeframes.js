export const TIMEFRAMES = {
  ALL_DAY: "allDay",
  MORNING: "morning",
  BEFORE_SCHOOL: "beforeSchool",
  AFTER_SCHOOL: "afterSchool",
  EVENING: "evening",
  BEDTIME: "bedtime",
};

export const TIMEFRAME_RANGES = [
  { key: TIMEFRAMES.ALL_DAY, start: "05:30", end: "21:00", order: 0 },
  { key: TIMEFRAMES.MORNING, start: "05:30", end: "11:00", order: 1 },
  { key: TIMEFRAMES.BEFORE_SCHOOL, start: "07:00", end: "08:45", order: 2 },
  { key: TIMEFRAMES.AFTER_SCHOOL, start: "15:00", end: "17:30", order: 3 },
  { key: TIMEFRAMES.EVENING, start: "16:00", end: "19:00", order: 4 },
  { key: TIMEFRAMES.BEDTIME, start: "18:30", end: "21:00", order: 5 },
];

export const getListTimeframeOrder = (list) =>
  TIMEFRAME_RANGES.find((range) => range.key === list.timeframe)?.order;

export const getSortByTimeframes = (a, b) => {
  const orderA = getListTimeframeOrder(a);
  const orderB = getListTimeframeOrder(b);
  if (!orderA || !orderB || orderA === orderB) return 0;
  return orderA > orderB ? 1 : -1;
};
