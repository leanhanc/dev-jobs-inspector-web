import { useMemo, useState } from "react";
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

const Home = () => {
	const [currentPage, setCurrentPage] = useState();

	// Queries
	const [callFindJobs, { data: findAdvertsData, loading: findAdvertsLoading }] = useLazyQuery<
		FindAdvertsResponse,
		FindAdvertsVariables
	>(findAdverts, {
		fetchPolicy: "cache-and-network",
	});

	// Memos
	const { adverts, totalAdverts } = useMemo(() => {
		console.log("find", findAdvertsData);
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

	return (
		<>
			<Head>
				<title>Dev Job Inspector Argentina</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header onSearch={callFindJobs} currentPage={currentPage} isLoading={findAdvertsLoading} />
				{adverts ? (
					<Adverts adverts={adverts} isLoading={findAdvertsLoading} />
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
