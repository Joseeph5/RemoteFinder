import JobListItem from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobList: [];
  isLoading: boolean;
};

export function JobList({ isLoading, jobList }: JobListProps) {
  console.log({ jobList });

  console.log({ isLoading });

  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}
      {jobList?.jobs &&
        jobList?.jobs.map((jobItem) => (
          <JobListItem key={jobItem?.id} jobItem={jobItem} />
        ))}
    </ul>
  );
}

export default JobList;
