import { createContext, useMemo, useState } from 'react';
import { JobItemsContextProps } from '../lib/types';
import { useDebounce, useJobItems } from '../lib/hooks';
import { sortJobsByDate } from '../utils/job';

export const JobItemsContext = createContext<JobItemsContextProps | null>(null);

export default function JobItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 500);
  const { jobList, isLoading } = useJobItems(debouncedSearchText);

  const [sortBy, setSortBy] = useState<string | null>(null);

  const sortedJobItems = useMemo(() => {
    return sortBy && jobList?.length ? sortJobsByDate(jobList) : jobList;
  }, [sortBy, jobList]);

  console.log('context job');

  const contextValue = useMemo(
    () => ({
      searchText,
      setSearchText,
      setSortBy,
      sortedJobItems,
      isLoading,
    }),
    [searchText, sortedJobItems, isLoading]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}
