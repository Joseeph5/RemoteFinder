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
