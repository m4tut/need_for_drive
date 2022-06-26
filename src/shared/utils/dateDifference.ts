type TheData = {
  days: number;
  hours: number;
  minutes: number;
};

export function dateDifference(date1: Date, date2: Date): TheData {
  let diffTime = Math.abs(date2.getTime() - date1.getTime()) / 1000;

  const days = Math.floor(diffTime / 86400);

  diffTime -= days * 86400;
  const hours = Math.floor(diffTime / 3600);

  diffTime -= hours * 3600;
  const minutes = Math.floor(diffTime / 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
  };
}
