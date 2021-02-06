import Head from "next/head";

// Components
import Header from "components/Header";
import About from "components/About";

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
      </main>
    </>
  );
}
