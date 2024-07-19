// components/VirtualOffice.js

import React from 'react';
import styles from './VirtualOffice.module.css';
import RegisterForm from './RegisterForm';

const VirtualOffice = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Work From Anywhere, Grow Everywhere Get Your Instant Virtual Office</h1>
        <p>To Provide Business solutions to the entrepreneurs, by shifting their conventional mindset and enabling them to scale business without incurring bad cost. Join us to unlock your virtual office and empower your business!</p>
        <div className={styles.benefits}>
          <div className={styles.benefit}>✅ Unleash Flexibility</div>
          <div className={styles.benefit}>✅ Simplify Operations</div>
          <div className={styles.benefit}>✅ Boost Credibility</div>
        </div>
      </div>
      {/* <div className={styles.formContainer}>
        <h2>Get in touch with us</h2>
        <p>Become a career progressive school with LaunchMyCareer.</p>
        <form className={styles.form}>
          <input type="text" placeholder="First name" className={styles.input} />
          <input type="text" placeholder="Last name" className={styles.input} />
          <input type="text" placeholder="City name" className={styles.input} />
          <input type="text" placeholder="Your Designation" className={styles.input} />
          <input type="text" placeholder="Mobile no." className={styles.input} />
          <input type="email" placeholder="Email ID" className={styles.input} />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div> */}
      <RegisterForm />
    </div>
  );
};

export default VirtualOffice;
