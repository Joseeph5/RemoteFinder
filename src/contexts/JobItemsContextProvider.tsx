import { createContext, useState } from 'react';
import { JobItem, JobItemsContextProps } from '../lib/types';
import { useDebounce, useJobItems } from '../lib/hooks';
import { sortJobsByDate } from '../utils/job';

export const JobItemsContext = createContext<JobItemsContextProps | null>(null);

export default function JobItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedJobItem, setSelectedJobItem] = useState<JobItem | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 500);
  const { jobList, isLoading } = useJobItems(debouncedSearchText);

  const [activeId, setActiveId] = useState<string>('');

  const [sortBy, setSortBy] = useState<string | null>(null);

  const sortedJobItems =
    sortBy && jobList?.length ? sortJobsByDate(jobList) : jobList;

  return (
    <JobItemsContext.Provider
      value={{
        selectedJobItem,
        setSelectedJobItem,
        searchText,
        setSearchText,
        setSortBy,
        sortedJobItems,
        isLoading,
        activeId,
        setActiveId,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
