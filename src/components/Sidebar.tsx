import JobListSearch from './JobListSearch';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount />
        <SortingControls />
      </div>

      <JobListSearch />

      {/* <PaginationControls /> */}
    </div>
  );
}
