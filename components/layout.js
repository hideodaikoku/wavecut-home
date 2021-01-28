import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const name = 'WaveCut Studios'
export const siteTitle = 'WaveCut Studios | Home'

const Layout = ({children, home}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>WaveCut Studios | Homepage</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <meta
                name="description"
                content="WaveCut Studios HomePage, Audio, Video, Game Design."
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                <Link href='/posts/about'>
                    <div className={styles.videoContainer}>
                    <video
                            src="/videos/logo_solo.mp4"
                            muted
                            loop
                            autoPlay
                            alt="WaveCut Home"
                            id={styles.wavecutVideo}
                        />
                    <h1 className={utilStyles.animatedText}>
                        UNDER CONSTRUCTION</h1>
                    </div>
                </Link>
                ) : (
                <>
                </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Top</a>
                </Link>
                </div>
            )}
    </div>
    )
}
export default Layout