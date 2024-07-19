// components/Contact.js

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.headerContainer}>
        <img src="/images/registerkaro-blue.png" alt="RegisterKaro Logo" className={styles.logo} />
        <h1 className={styles.header}>Speak to our experts</h1>
        <p className={styles.subheader}>
          Please don't hesitate to reach out to us. Our team of experts is always available and prepared to address
          and resolve any inquiries you may have.
        </p>
        <button className={styles.enquireButton}>Enquire now →</button>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <div className={styles.icon}><img src="/images/email-icon.png" alt="Email Icon" /></div>
          <div>
            <h3>Email</h3>
            <p>virtualoffice@teamco.work</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.icon}><img src="/images/phone-icon.png" alt="Phone Icon" /></div>
          <div>
            <h3>Telephone</h3>
            <p>+91 93112 21210</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.icon}><img src="/images/location-icon.png" alt="Location Icon" /></div>
          <div>
            <h3>Location</h3>
            <p>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        © 2024 - Safe Ledger Private Limited. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
