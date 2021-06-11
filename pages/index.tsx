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
import { findJobs } from "graphql/jobs";

const Home = () => {
  const [currentPage, setCurrentPage] = useState();

  // Queries
  const [callFindJobs, { data: findJobsData, loading: findJobsLoading }] = useLazyQuery<
    FindJobsResponse,
    FindJobsVariables
  >(findJobs, {
    fetchPolicy: "cache-and-network",
  });

  // Memos
  const { adverts, totalAdverts } = useMemo(() => {
    console.log("find", findJobsData);
    if (findJobsData?.paginatedJobs) {
      return {
        adverts: findJobsData.paginatedJobs.result,
        totalAdverts: findJobsData.paginatedJobs.total,
      };
    }
    return {
      adverts: null,
      totalAdverts: null,
    };
  }, [findJobsData]);

  console.log("ad", adverts);
  console.log("tota", totalAdverts);

  return (
    <>
      <Head>
        <title>Dev Job Inspector Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header onSearch={callFindJobs} currentPage={currentPage} isLoading={findJobsLoading} />
        {adverts ? (
          <Adverts adverts={adverts} isLoading={findJobsLoading}></Adverts>
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
