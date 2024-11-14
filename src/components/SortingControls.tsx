import { useJobItemsContext } from '../lib/hooks';

export default function SortingControls() {
  const { setSortBy } = useJobItemsContext();
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <button
        className='sorting__button sorting__button--recent'
        onClick={() => {
          setSortBy('recent');
        }}
      >
        Recent
      </button>
    </section>
  );
}
