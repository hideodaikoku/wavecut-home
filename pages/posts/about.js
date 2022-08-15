import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss';

const About = () =>{
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className={utilStyles.contentContainer}>
                <h1 className={utilStyles.heading2Xl}>About</h1>
                <p>
                    Wavecut Studios is a software company based in Tokyo, Japan. <br/>
                    We are doing research in automating workflows for creators.
                </p>
                <p>
                    Wavecut Studios was founded by
                    <span> </span>
                    <a 
                        href="https://www.hideodaikoku.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"  
                        title="Hideo Daikoku's Homepage">
                        Hideo Daikoku
                    </a>
                    
                    <span> and </span>
                    <a 
                        href="https://www.linkedin.com/in/jorel-chan-968854159/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Jorel Chan">
                        Jorel Chan
                    </a> 
                    <span> in 2022. </span>
                    
                </p>
            </div>
        </Layout>
    )
}

export default About;
