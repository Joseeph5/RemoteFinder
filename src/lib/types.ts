export type JobItem = {
  id: string;
  company_logo: string;
  title: string;
  company_name: string;
  publication_date: string;
  candidate_required_location: string;
  description: string;
  job_type: string;
  salary: string;
  tags: string[];
  url: string;
};

export type JobItemsApiResponse = {
  jobs: JobItem[];
};

export type LocalStorageItems = {
  [key: number]: JobItem;
};

export type BookmarksContextProps = {
  bookmarkedIds: LocalStorageItems;
  handleToggleBookmark: (item: JobItem) => void;
};

export type JobItemsContextProps = {
  selectedJobItem: JobItem | null;
  setSelectedJobItem: (JobItem: JobItem) => void;
  searchText: string;
  setSearchText: (value: string) => void;
  setSortBy: (value: string) => void;
  sortedJobItems: JobItem[];
  isLoading: boolean;
  activeId: string;
  setActiveId: (value: string) => void;
};
