import { useState } from "react";
import { useLazyQuery } from "@apollo/client";

// Components
import Head from "next/head";
import Header from "components/Header";
import About from "components/About";
import Features from "components/Features";
import Footer from "components/Footer";

// Data
import { findJobs } from "graphql/jobs";

export default function Home() {
  const [currentPage, setCurrentPage] = useState();

  // Queries
  const [callFindJobs, { data: findJobsData, loading: findJobsLoading }] = useLazyQuery<
    FindJobsResponse,
    FindJobsVariables
  >(findJobs, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Head>
        <title>Dev Job Inspector Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header onSearch={callFindJobs} currentPage={currentPage} />
        <About />
        <Features />
      </main>

      <Footer />
    </>
  );
}
