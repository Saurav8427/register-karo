// components/TrustedByClients.js
import React from 'react';
import styles from './TrustedByClients.module.css';
const TrustedByClients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trustedSection}>
        <h2 className={styles.title}>Trusted by the world's largest companies</h2>
        <div className={styles.logos}>
          <img src="/images/microsoft.png" alt="Microsoft" className={styles.logo} />
          <img src="/images/paypal.png" alt="PayPal" className={styles.logo} />
          {/* <img src="/images/disney.png" alt="Disney" className={styles.logo} /> */}
          <img src="/images/samsung.png" alt="Samsung" className={styles.logo} />
          {/* <img src="/images/spotify.jpg" alt="Spotify" className={styles.logo} /> */}
          <img src="/images/mcafee.png" alt="McAfee" className={styles.logo} />
          <img src="/images/nttgroup.png" alt="NTT Group" className={styles.logo} />
          {/* <img src="/images/blackrock.png" alt="BlackRock" className={styles.logo} /> */}
          {/* <img src="/images/hsbc.png" alt="HSBC" className={styles.logo} /> */}
          <img src="/images/accenture.png" alt="Accenture" className={styles.logo} />
          {/* <img src="/images/uber.png" alt="Uber" className={styles.logo} /> */}
          <img src="/images/slack.png" alt="Slack" className={styles.logo} />
        </div>
      </div>
      <div className={styles.testimonialSection}>
        <h2 className={styles.testimonialTitle}>CLIENT <span className={styles.highlight}>TESTIMONIAL</span></h2>
        <div className={styles.testimonialContent}>
          <img src="/images/dabur.svg" alt="Dabur" className={styles.testimonialLogo} />
          <p className={styles.testimonialText}>
            "The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client."
            <br /><br />
            <span className={styles.testimonialAuthor}>— Sunil Duggal, CEO, Dabur Healthcare</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedByClients;
