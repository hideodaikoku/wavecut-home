
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const Top = () => {
    return (
        <div className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>
                    wavecut<span className={styles.decorator}>dot</span>dev
                </h1>
                <p className={utilStyles.paragraph}>
                    slow computing for a fast world :: sailing at low altitude. ⛵️
                </p>
        </div>
    );
}

export default Top;