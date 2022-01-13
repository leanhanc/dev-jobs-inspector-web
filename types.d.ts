declare interface FindAdvertsVariables {
	limit?: number;
	page?: number;
	search?: string;
}

declare interface Advert {
	_id?: string;
	title?: string;
	date?: string;
	description?: string;
	url?: string;
	site?: string;
	publisher?: string;
}

declare interface FindAdvertsResponse {
	paginatedJobs?: {
		total?: number;
		result?: Advert[];
	};
}
