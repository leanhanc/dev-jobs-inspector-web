declare interface FindJobsVariables {
  limit?: number;
  page?: number;
  search?: string;
}

declare interface FindJobsResponse {
  paginatedJobs?: {
    total?: number;
    result?: {
      date?: string;
      description?: string;
      url?: string;
      site?: string;
    }[];
  };
}
