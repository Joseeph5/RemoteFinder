import { useState } from 'react';
import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobList: JobItem[];
  isLoading: boolean;
};

export function JobList({ isLoading, jobList }: JobListProps) {
  const [activeId, setActiveId] = useState<string>('');

  const handleActiveClick = (id: string) => {
    setActiveId(id);
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
