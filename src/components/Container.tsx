import { useState } from 'react';
import { JobItem } from '../lib/types';
import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';

type ContainerProps = {
  jobList: JobItem[] | undefined;
  isLoading: boolean;
};

export default function Container({ jobList, isLoading }: ContainerProps) {
  const [selectedJobItem, setSelectedJobItem] = useState<JobItem | null>(null);
  return (
    <div className='container'>
      <Sidebar
        jobList={jobList}
        isLoading={isLoading}
        setSelectedJobItem={setSelectedJobItem}
      />
      <JobItemContent jobItem={selectedJobItem} />
    </div>
  );
}
