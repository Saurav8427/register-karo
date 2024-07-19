// components/Features.js

import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Accessible. Affordable. Adaptable</h2>
        <p>Whether you're an established enterprise or a scaling startup, your Virtual office should drive your business forward. Our virtual office solutions take your business places!</p>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/path/to/icon1.png" alt="Professional Image & Enhanced Credibility" />
          </div>
          <h3>Professional Image & Enhanced Credibility</h3>
          <p>Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/path/to/icon2.png" alt="Streamlined Business Operations" />
          </div>
          <h3>Streamlined Business Operations</h3>
          <p>Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/path/to/icon3.png" alt="Scalable & Cost-Effective Solution" />
          </div>
          <h3>Scalable & Cost-Effective Solution</h3>
          <p>Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.</p>
        </div>
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/path/to/icon4.png" alt="Unmatched Work Flexibility" />
          </div>
          <h3>Unmatched Work Flexibility</h3>
          <p>Improve work-life balance by eliminating commutes and allowing flexible schedules.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
