declare interface FindAdvertsVariables {
  limit?: number;
  page?: number;
  search?: string;
}

declare interface Advert {
  date?: string;
  description?: string;
  url?: string;
  site?: string;
}

declare interface FindAdvertsResponse {
  paginatedJobs?: {
    total?: number;
    result?: Advert[];
  };
}
