import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';
import { useActiveIdContext } from '../lib/hooks';

type JobListProps = {
  isLoading: boolean;
  sortedJobItems: JobItem[];
};

export function JobList({ isLoading, sortedJobItems }: JobListProps) {
  const { setSelectedJobItem, setActiveId, activeId } = useActiveIdContext();

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
