import { useJobItemsContext } from '../lib/hooks';

export default function ResultsCount() {
  const { sortedJobItems } = useJobItemsContext();
  return (
    <p className='count'>
      {sortedJobItems ? sortedJobItems.length : 0} results
    </p>
  );
}
