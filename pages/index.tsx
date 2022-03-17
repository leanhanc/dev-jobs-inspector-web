import { useEffect, useMemo, useRef, useState } from "react";
import { useLazyQuery } from "@apollo/client";

// Components
import Head from "next/head";
import Header from "components/Header";
import About from "components/About";
import Features from "components/Features";
import Adverts from "components/Adverts";
import Footer from "components/Footer";

// Data
import { findAdverts } from "graphql/jobs";

export const JOBS_PER_PAGE = 8;

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	// Refs
	const currentResults = useRef<Advert[]>();
	const currentTotalPages = useRef<number>();

	// Queries
	const [callFindJobs, { data: findAdvertsData, loading: findAdvertsLoading }] = useLazyQuery<
		FindAdvertsResponse,
		FindAdvertsVariables
	>(findAdverts);

	// Memos
	const adverts = useMemo(() => {
		if (findAdvertsData?.paginatedJobs) {
			currentResults.current = findAdvertsData.paginatedJobs.result;
			currentTotalPages.current = Math.ceil(findAdvertsData.paginatedJobs.total / JOBS_PER_PAGE);

			return findAdvertsData.paginatedJobs.result;
		}
	}, [findAdvertsData]);

	//	Effects;
	useEffect(() => {
		callFindJobs({
			variables: {
				page: currentPage,
				limit: JOBS_PER_PAGE,
				search: searchTerm,
			},
		});
	}, [currentPage]);

	return (
		<>
			<Head>
				<title>Dev Job Inspector Argentina</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header
					handleSearchTermChanged={setSearchTerm}
					onSearch={callFindJobs}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					isLoading={findAdvertsLoading}
					searchTerm={searchTerm}
				/>
				{currentResults.current || adverts ? (
					<Adverts
						adverts={adverts || currentResults.current}
						isLoading={findAdvertsLoading}
						currentPage={currentPage}
						totalPages={currentTotalPages.current}
						handlePageChange={setCurrentPage}
					/>
				) : (
					<>
						<About />
						<Features />
					</>
				)}
			</main>

			<Footer />
		</>
	);
};

export default Home;
