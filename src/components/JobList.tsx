import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';
import { useJobItemsContext } from '../lib/hooks';

export function JobList() {
  const {
    setSelectedJobItem,
    setActiveId,
    activeId,
    isLoading,
    sortedJobItems,
  } = useJobItemsContext();

  const handleActiveClick = (jobItem: JobItem) => {
    setActiveId(jobItem.id);
    setSelectedJobItem(jobItem);
  };
  return (
    <ul
      className='job-list'
      style={{
        overflowY: 'scroll',
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        sortedJobItems &&
        sortedJobItems.map((jobItem) => (
          <JobListItem
            key={jobItem?.id}
            jobItem={jobItem}
            handleActiveClick={handleActiveClick}
            activeId={activeId}
          />
        ))
      )}
    </ul>
  );
}

export default JobList;
