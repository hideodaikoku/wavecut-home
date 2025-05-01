import styles from "../styles/project.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.project__title}>horizon</div>
        <div className={styles.project__description}>
          <a
            href="https://horizon.wavecut.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            horizon.wavecut.dev
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.project__title}>button</div>
        <div className={styles.project__description}>
        <a
            href="https://button.wavecut.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            button.wavecut.dev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
