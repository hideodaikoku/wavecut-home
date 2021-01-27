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
                    Wavecut Studios is a software company based in Kanagawa, Japan. <br/>
                    We make video games, interactive art installations, and audio analysis tools.
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
                    </a>,
                    <span> </span>
                    <a 
                        href="https://www.instagram.com/patheticorganic/"　
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Max Sutrisno's Instagram Profile">
                        Maximilian Sutrisno
                    </a> 
                    
                    <span> and </span>
                    <a 
                        href="https://www.kagome.co.jp/products/drink/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Trolled You">
                        Toma Ogawa
                    </a> 
                    <span> in 2020. </span>
                    
                </p>
            </div>
        </Layout>
    )
}

export default About;