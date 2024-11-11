export default function SortingControls({ onSortBy }) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>

      <button
        className='sorting__button sorting__button--recent'
        onClick={() => {
          onSortBy('recent');
        }}
      >
        Recent
      </button>
    </section>
  );
}
