
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const Top = () => {
    return (
        <div className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>
                    WAVECUT<span className={styles.decorator}>DOT</span>DEV
                </h1>
                <p className={utilStyles.paragraph}>
                    slow computing for a fast world. Sailing at low altitude. ⛵️
                </p>
                <p>::</p>
                <p>
                    more information at <a href="https://amphbian-studios.com">https://amphibian-studios.com/</a>
                </p>
                <small>&copy; hideodaikoku 2024</small>
        </div>
    );
}

export default Top;