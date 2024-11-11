import { useState } from 'react';
import { JobItem } from '../lib/types';
import JobList from './JobList';
import ResultsCount from './ResultsCount';
import SortingControls from './SortingControls';
import { sortJobsByDate } from '../utils/job';

type SidebarProps = {
  jobList: JobItem[] | undefined;
  isLoading: boolean;
  setSelectedJobItem: (jobItem: JobItem) => void;
};

export default function Sidebar({
  jobList,
  isLoading,
  setSelectedJobItem,
}: SidebarProps) {
  const [sortBy, setSortBy] = useState<string | null>(null);

  const sortedJobItems =
    sortBy && jobList?.length ? sortJobsByDate(jobList) : jobList;

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <ResultsCount jobsCount={jobList ? jobList.length : 0} />
        <SortingControls onSortBy={setSortBy} />
      </div>

      <JobList
        isLoading={isLoading}
        jobList={sortedJobItems}
        setSelectedJobItem={setSelectedJobItem}
      />

      {/* <PaginationControls /> */}
    </div>
  );
}
