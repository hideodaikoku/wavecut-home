<<<<<<< HEAD
import Header from "./header";
import Footer from "./footer";
=======
import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
>>>>>>> parent of 1dd7e66 (remove nav)

const Layout = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col h-screen">
      <Header/>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <Footer/>
=======
    <div className={styles.container}>
      <Head>
        <title>WaveCut Studios | Homepage</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta
          name="description"
          content="WaveCut Studios HomePage, Audio, Video, Game Design."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={utilStyles.contentContainer}>
              <h1 className={utilStyles.heading2Xl}>
                WAVE<span className={utilStyles.linethrough}>CUT</span> STUDIOS
              </h1>
              <p>
                Wavecut Studios is a software company based in Tokyo, Japan.{" "}
                <br />
                We are currently developing products to automate creative workflows.
              </p>
              <p>
                Wavecut Studios was founded by
                <span> </span>
                <a
                  href="https://www.hideodaikoku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Hideo Daikoku's Homepage"
                >
                  Hideo Daikoku
                </a>
                <span> and </span>
                <a
                  href="https://www.linkedin.com/in/jorel-chan-968854159/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Jorel Chan's LinkedIn Page"
                >
                  Jorel Chan
                </a>
                <span> in 2022. </span>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </header>
      <Navbar/>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Top</a>
          </Link>
        </div>
      )}
>>>>>>> parent of 1dd7e66 (remove nav)
    </div>
  );
};
export default Layout;
