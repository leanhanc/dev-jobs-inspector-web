import { useEffect, useMemo, useState } from "react";
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

export const JOBS_PER_PAGE = 4;

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	// Queries
	const [callFindJobs, { data: findAdvertsData, loading: findAdvertsLoading }] = useLazyQuery<
		FindAdvertsResponse,
		FindAdvertsVariables
	>(findAdverts, {
		fetchPolicy: "cache-and-network",
	});

	// Memos
	const { adverts, totalAdverts } = useMemo(() => {
		if (findAdvertsData?.paginatedJobs) {
			return {
				adverts: findAdvertsData.paginatedJobs.result,
				totalAdverts: findAdvertsData.paginatedJobs.total,
			};
		}
		return {
			adverts: null,
			totalAdverts: null,
		};
	}, [findAdvertsData]);

	// Effects
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
		<div style={{ height: "100%" }}>
			<Head>
				<title>Dev Job Inspector Argentina</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header
					handleSearchTermChanged={setSearchTerm}
					onSearch={callFindJobs}
					currentPage={currentPage}
					isLoading={findAdvertsLoading}
					searchTerm={searchTerm}
				/>
				{adverts ? (
					<Adverts
						adverts={adverts}
						isLoading={findAdvertsLoading}
						currentPage={currentPage}
						totalPages={Math.ceil(totalAdverts / JOBS_PER_PAGE)}
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
		</div>
	);
};

export default Home;
