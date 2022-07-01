export function getCalendarLocale(days: string[], months: string[]): Locale {
  return {
    localize: {
      day: (n: number) => days[n],
      month: (n: number) => months[n],
      ordinalNumber: () => undefined,
      era: () => undefined,
      quarter: () => undefined,
      dayPeriod: () => undefined,
    },
    formatLong: {
      date: () => 'dd.mm.yyyy hh:mm',
      time: () => undefined,
      dateTime: () => undefined,
    },
  };
}
