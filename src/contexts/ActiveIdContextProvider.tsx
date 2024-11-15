import { createContext, useState } from 'react';
import { JobItem } from '../lib/types';

type ActiveIdContext = {
  activeId: string | null;
  setActiveId: (value: string) => void;
  selectedJobItem: JobItem | null;
  setSelectedJobItem: (value: JobItem) => void;
};

export const ActiveIdContext = createContext<ActiveIdContext | null>(null);

export default function ActiveIdContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<string>('');
  const [selectedJobItem, setSelectedJobItem] = useState<JobItem | null>(null);

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
        setActiveId,
        selectedJobItem,
        setSelectedJobItem,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
}
