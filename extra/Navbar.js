import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LaunchWise</div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <button className={styles.enquireButton}>Enquire now</button>
    </nav>
  );
}

export default Navbar;
