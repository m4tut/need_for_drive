export function getCalendarLocale(days: string[], months: string[]): Locale {
  return {
    localize: {
      day: (n: number) => days[n],
      month: (n: number) => months[n],
      ordinalNumber: (...args: any[]) => undefined,
      era: (...args: any[]) => undefined,
      quarter: (...args: any[]) => undefined,
      dayPeriod: (...args: any[]) => undefined,
    },
    formatLong: {
      date: () => 'dd.mm.yyyy hh:mm',
      time: (...args: any[]) => undefined,
      dateTime: (...args: any[]) => undefined,
    },
  };
}
