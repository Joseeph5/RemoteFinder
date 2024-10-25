import Spinner from './Spinner';

type JobListProps = {
  isLoading: boolean;
};

export function JobList({ isLoading }: JobListProps) {
  return <ul className='job-list'>{isLoading && <Spinner />}</ul>;
}

export default JobList;
