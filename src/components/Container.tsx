import { JobItem } from '../lib/types';
import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';

type ContainerProps = {
  jobList: JobItem[];
  isLoading: boolean;
};

export default function Container({ jobList, isLoading }: ContainerProps) {
  return (
    <div className='container'>
      <Sidebar jobList={jobList} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
