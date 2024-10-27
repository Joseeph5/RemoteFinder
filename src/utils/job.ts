export function getDayDifference(date1: string, date2: string): string {
  const timestamp1 = new Date(date1);
  const timestamp2 = new Date(date2);

  const differenceInTime = Math.abs(
    timestamp2.getTime() - timestamp1.getTime()
  );
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays === 1
    ? `${differenceInDays.toString()} Day ago`
    : `${differenceInDays.toString()} Days ago`;
}
