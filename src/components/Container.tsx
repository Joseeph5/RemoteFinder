import { JobItem } from '../lib/types';
import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';
import { useJobItemsContext } from '../lib/hooks';

type ContainerProps = {
  jobList: JobItem[] | undefined;
  isLoading: boolean;
};

export default function Container({ jobList, isLoading }: ContainerProps) {
  const { selectedJobItem, setSelectedJobItem } = useJobItemsContext();

  return (
    <div className='container'>
      <Sidebar
        jobList={jobList}
        isLoading={isLoading}
        setSelectedJobItem={setSelectedJobItem}
      />
      <JobItemContent jobItem={selectedJobItem} />
    </div>
  );
}
