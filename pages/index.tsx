import Head from "next/head";

// Components
import Container from "components/Container";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Job Inspector Argentina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  );
}
