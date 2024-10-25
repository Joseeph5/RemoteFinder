import JobList from './JobList';
import PaginationControls from './PaginationControls';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';

export default function Sidebar({ jobList }) {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount />
        <SortingControls />
      </div>

      <JobList
        isLoading={jobList.length === 0 ? true : false}
        jobList={jobList}
      />

      <PaginationControls />
    </div>
  );
}
