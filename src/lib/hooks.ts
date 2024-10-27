import { useEffect, useState } from 'react';
import { JobItem } from './types';

export function useJobItem(searchText: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobList, setjobList] = useState<JobItem[]>([]);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);

    const fetchedData = async () => {
      const response = await fetch(
        `https://remotive.com/api/remote-jobs?limit=15&search=${searchText}`
      );

      const data = await response.json();

      setjobList(data?.jobs);

      setIsLoading(false);
    };

    fetchedData();
  }, [searchText]);

  return {
    jobList,
    isLoading,
  } as const;
}
