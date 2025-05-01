import Layout from '../components/layout'
import Top from '../components/top';
import Projects from '../components/projects';

export default function Home() {
  return (
    <Layout siteTitle='WaveCut | Home'>
      <Top home/>
      <Projects/>
    </Layout>
  )
}
