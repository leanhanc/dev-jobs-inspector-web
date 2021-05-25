declare interface FindJobsVariables {
  limit?: number;
  page?: number;
  search?: string;
}

declare interface FindJobsResponse {
  data?: {
    total: number;
    result?: {
      date?: string;
      description?: string;
      url?: string;
      site?: string;
    };
  };
}
