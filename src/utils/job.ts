import toast from 'react-hot-toast';

export function getDayDifference(date1: string, date2: string): string {
  const timestamp1 = new Date(date1);
  const timestamp2 = new Date(date2);

  const differenceInTime = Math.abs(
    timestamp2.getTime() - timestamp1.getTime()
  );
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays === 1
    ? `${differenceInDays.toString()} Day`
    : `${differenceInDays.toString()} Days`;
}

export const handleError = (error: unknown) => {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'An error occurred.';
  }

  toast.error(message);
};
