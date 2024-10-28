import { useState } from 'react';
import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobList: JobItem[];
  isLoading: boolean;
  setSelectedJobItem: (jobItem: JobItem) => void;
};

export function JobList({
  isLoading,
  jobList,
  setSelectedJobItem,
}: JobListProps) {
  const [activeId, setActiveId] = useState<string>('');

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
        jobList &&
        jobList.map((jobItem) => (
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
