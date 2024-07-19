// components/VirtualOfficeBenefits.js
import React from 'react';
import styles from './VirtualOfficeBenefits.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
const VirtualOfficeBenefits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Accessible. Affordable. Adaptable</h1>
        <p className={styles.subtitle}>
          Whether you're an established enterprise or a scaling startup, your Virtual office should drive your business forward. Our virtual office solutions take your business places!
        </p>
        <div className={styles.benefitsContainer}>
          <div className={styles.benefit}>
            <div className={styles.icon}><i className="fas fa-building"></i></div>
            <h2 className={styles.benefitTitle}>Professional Image & Enhanced Credibility</h2>
            <p className={styles.benefitDescription}>
              Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.
            </p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.icon}><i className="fas fa-briefcase"></i></div>
            <h2 className={styles.benefitTitle}>Streamlined Business Operations</h2>
            <p className={styles.benefitDescription}>
              Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.
            </p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.icon}><i className="fas fa-chart-line"></i></div>
            <h2 className={styles.benefitTitle}>Scalable & Cost-Effective Solution</h2>
            <p className={styles.benefitDescription}>
              Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.
            </p>
          </div>
          <div className={styles.benefit}>
            <div className={styles.icon}><i className="fas fa-home"></i></div>
            <h2 className={styles.benefitTitle}>Unmatched Work Flexibility</h2>
            <p className={styles.benefitDescription}>
              Improve work-life balance by eliminating commutes and allowing flexible schedules.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imageSection}>
        <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" alt="Handshake" className={styles.image} />
      </div>
    </div>
  );
};

export default VirtualOfficeBenefits;
