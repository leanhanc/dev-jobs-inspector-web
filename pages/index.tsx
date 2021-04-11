import Head from "next/head";

// Components
import Header from "components/Header";
import About from "components/About";
import Features from "components/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Job Inspector Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <About />
        <Features />
      </main>
    </>
  );
}
