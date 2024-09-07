
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const Top = () => {
    return (
        <div className={styles.header}>
                <h1 className={utilStyles.heading2Xl}>
                    WAVECUT STUDIOS
                </h1>
                <p className={utilStyles.paragraph}>
                    Slow computing for a fast world. Currently sailing. &copy; 2024
                </p>
        </div>
    );
}

export default Top;