import { gql } from "@apollo/client";

export const findJobs = gql`
  query paginatedJobs($limit: Int, $page: Int, $search: String!) {
    paginatedJobs(limit: $limit, page: $page, search: $search) {
      total
      result {
        date
        description
        url
        site
      }
    }
  }
`;
