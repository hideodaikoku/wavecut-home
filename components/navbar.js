import React from 'react';
import styles from '../styles/navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <a href="mailto:wavecutstudios@gmail.com" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
