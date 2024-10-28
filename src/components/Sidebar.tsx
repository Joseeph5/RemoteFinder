import { JobItem } from '../lib/types';
import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';

type SidebarProps = {
  jobList: JobItem[];
  isLoading: boolean;
  setSelectedJobItem: (jobItem: JobItem) => void;
};

export default function Sidebar({
  jobList,
  isLoading,
  setSelectedJobItem,
}: SidebarProps) {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount />
        <SortingControls />
      </div>

      <JobList
        isLoading={isLoading}
        jobList={jobList}
        setSelectedJobItem={setSelectedJobItem}
      />

      {/* <PaginationControls /> */}
    </div>
  );
}
