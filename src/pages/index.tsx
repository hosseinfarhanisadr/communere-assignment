import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";

const Map = dynamic(() => import("components/Map"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Map />
      </main>
    </div>
  );
};

export default Home;
