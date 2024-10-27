import { useEffect, useState } from 'react';

export function useJobItem(searchText: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setjobList] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);

    const fetchedData = async () => {
      const response = await fetch(
        `https://remotive.com/api/remote-jobs?limit=10&search=${searchText}`
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
  };
}
