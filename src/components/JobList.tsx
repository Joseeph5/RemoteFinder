import { JobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobList: JobItem[];
  isLoading: boolean;
};

export function JobList({ isLoading, jobList }: JobListProps) {
  return (
    <ul className='job-list'>
      {isLoading ? (
        <Spinner />
      ) : (
        jobList &&
        jobList.map((jobItem) => (
          <JobListItem key={jobItem?.id} jobItem={jobItem} />
        ))
      )}
    </ul>
  );
}

export default JobList;
