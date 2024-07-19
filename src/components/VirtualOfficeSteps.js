// components/VirtualOfficeSteps.js
import React from 'react';
import styles from './VirtualOfficeSteps.module.css';

const VirtualOfficeSteps = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get Your Virtual Office Up And Running In <span className={styles.highlight}>3 Easy Steps!</span></h1>
      <p className={styles.subtitle}>Procedure to obtain Virtual office address.</p>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <div className={styles.stepIcon}><i className="fas fa-phone-alt"></i><img src="/images/one.png" alt="Handshake" className={styles.image} /></div>
          <h2 className={styles.stepTitle}>Connect with RegisterKaro</h2>
          <p className={styles.stepDescription}>Reach out to our friendly customer support team through chat, email, or phone. They'll guide you through the process.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepIcon}><i className="fas fa-file-alt"></i><img src="/images/two.png" alt="Handshake" className={styles.image} /></div>
          <h2 className={styles.stepTitle}>Give Essential Details & Documents</h2>
          <p className={styles.stepDescription}>Upload essential documents required for registration, following our clear and secure guidelines.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepIcon}><i className="fas fa-building"></i><img src="/images/three.png" alt="Handshake" className={styles.image} /></div>
          <h2 className={styles.stepTitle}>Get Your Virtual Office Ready To Work</h2>
          <p className={styles.stepDescription}>Once your application is approved, your virtual office is activated instantly!</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficeSteps;
