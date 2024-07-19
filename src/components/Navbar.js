// components/Navbar.js

import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/images/launchwise-logo.png" alt="Launch-Wise Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">Product</a></li>
        <li className={styles.navItem}><a href="#">Pricing</a></li>
        <li className={styles.navItem}><a href="#">Contact</a></li>
      </ul>
      <div className={styles.enquireButtonContainer}>
        <button className={styles.enquireButton}>Enquire now →</button>
      </div>
    </nav>
  );
};

export default Navbar;
