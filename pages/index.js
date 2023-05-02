import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Top from '../components/top';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Top home/>
    </Layout>
  )
}
