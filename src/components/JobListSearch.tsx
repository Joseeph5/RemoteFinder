import React from 'react';
import { useJobItemsContext } from '../lib/hooks';
import JobList from './JobList';

const JobListSearch = React.memo(() => {
  const { isLoading, sortedJobItems } = useJobItemsContext();
  console.log('book');
  return <JobList sortedJobItems={sortedJobItems} isLoading={isLoading} />;
});

export default JobListSearch;
