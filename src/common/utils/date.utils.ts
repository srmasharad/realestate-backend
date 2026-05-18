export function addMonths(date: Date, months: number): Date {
  const originalDay = date.getUTCDate();
  const result = new Date(date.getTime());

  result.setUTCDate(1);
  result.setUTCMonth(result.getUTCMonth() + months);

  const daysInTargetMonth = new Date(Date.UTC(result.getUTCFullYear(), result.getUTCMonth() + 1, 0)).getUTCDate();

  result.setUTCDate(Math.min(originalDay, daysInTargetMonth));

  return result;
}
