import { gql } from "@apollo/client";

export const findAdverts = gql`
	query paginatedJobs($limit: Int, $location: String!, $page: Int, $search: String!) {
		paginatedJobs(limit: $limit, location: $location, page: $page, search: $search) {
			total
			result {
				_id
				date
				description
				url
				site
				title
				publisher
				location
			}
		}
	}
`;
