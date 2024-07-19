import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Get in touch with us</h2>
      <p>Become a career progressive school with LaunchMyCareer.</p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" id="firstName" name="firstName" placeholder="First name" required />
          <input type="text" id="lastName" name="lastName" placeholder="Last name" required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" id="city" name="city" placeholder="City name" required />
          <input type="text" id="designation" name="designation" placeholder="Your Designation" required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" id="mobile" name="mobile" placeholder="Mobile no." required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" id="email" name="email" placeholder="Email ID" required />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
