import React from "react";
import styles from "../styles/navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
        <li className={styles.item}>&copy; 2025 hideodaikoku</li>
      </ul>
    </nav>
  );
}

export default Navbar;
