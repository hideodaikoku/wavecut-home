
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const Top = () => {
    return (
        <div className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>
                    WAVECUT STUDIOS
                </h1>
                <p>
                    Wavecut Studios is a software company based in Tokyo, Japan.
                    We are currently developing products to automate creative workflows.
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
    );
}

export default Top;