// Hooks
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLoadingContext } from "hooks";
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
	const [currentPage, setCurrentPage] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");

	// Refs
	const currentResults = useRef<Advert[]>();
	const currentTotalPages = useRef<number>();
	const lastTermSearched = useRef<string>("");

	// Context
	const { setIsLoading } = useLoadingContext();

	// Queries
	const [callFindJobs, { data: findAdvertsData, loading: findAdvertsLoading }] = useLazyQuery<
		FindAdvertsResponse,
		FindAdvertsVariables
	>(findAdverts, {
		onCompleted: () => {
			setIsLoading(false);
		},
		onError: () => {
			setIsLoading(false);
		},
	});

	// Memos
	const adverts = useMemo(() => {
		if (findAdvertsData?.paginatedJobs) {
			currentResults.current = findAdvertsData.paginatedJobs.result;
			currentTotalPages.current = Math.ceil(findAdvertsData.paginatedJobs.total / JOBS_PER_PAGE);

			return findAdvertsData.paginatedJobs.result;
		}
	}, [findAdvertsData]);

	// Handlers
	const handleSearch = useCallback(() => {
		if (searchTerm === lastTermSearched.current) return;

		setCurrentPage(1);
		setIsLoading(true);

		lastTermSearched.current = searchTerm;

		callFindJobs({
			variables: {
				location,
				page: currentPage,
				limit: JOBS_PER_PAGE,
				search: searchTerm,
			},
		});
	}, [searchTerm, currentPage, searchTerm, location]);

	const handleGoHome = () => {
		currentResults.current = undefined;
		setCurrentPage(0);
		setLocation("");
		setSearchTerm("");
		callFindJobs();
	};

	//	Effects;
	useEffect(() => {
		if (!currentPage) return;

		setIsLoading(true);

		callFindJobs({
			variables: {
				page: currentPage,
				location,
				limit: JOBS_PER_PAGE,
				search: searchTerm,
			},
		});
	}, [currentPage, setIsLoading]);

	return (
		<>
			<Head>
				<title>Dev Jobs Inspector Argentina</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				handleGoHome={handleGoHome}
				handleSearch={handleSearch}
				handleSearchTermChanged={setSearchTerm}
				isLoading={findAdvertsLoading}
				searchTerm={searchTerm}
				setIsLoading={setIsLoading}
				setLocation={setLocation}
			/>

			<main>
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
