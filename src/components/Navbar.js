import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/launchwise-logo.png" className={styles.logo} alt="Launch-Wise Logo" />
      </div>
      <div ref={dropdownRef} className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <a href='#' onClick={toggleDropdown}>Home   </a>
        <a href='#' onClick={toggleDropdown}>Product</a>
        <a href='#' onClick={toggleDropdown}>Pricing</a>
        <a href='#' onClick={toggleDropdown}>Contact</a>
      </div>
      <div className={styles.enquireNow}>
        <button>Enquire now →</button>
      </div>
      <div className={styles.burger} onClick={toggleDropdown}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
