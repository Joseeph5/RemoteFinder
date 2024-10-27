import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';

export default function Container({ jobList, isLoading }) {
  return (
    <div className='container'>
      <Sidebar jobList={jobList} isLoading={isLoading} />
      <JobItemContent />
    </div>
  );
}
