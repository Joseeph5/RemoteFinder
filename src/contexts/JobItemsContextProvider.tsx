import { createContext, useState } from 'react';
import { JobItem, JobItemsContextProps } from '../lib/types';

export const JobItemsContext = createContext<JobItemsContextProps | null>(null);

export default function JobItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedJobItem, setSelectedJobItem] = useState<JobItem>(
    {} as JobItem
  );

  return (
    <JobItemsContext.Provider
      value={{
        selectedJobItem,
        setSelectedJobItem,
      }}
    >
      {children}
    </JobItemsContext.Provider>
  );
}
