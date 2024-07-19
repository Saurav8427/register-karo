import Head from 'next/head';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';
import VirtualOfficeSteps from '../components/VirtualOfficeSteps';
import VirtualOfficeBenefits from '../components/VirtualOfficeBenefits';
import TrustedByClients from '../components/TrustedByClients';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.css';
import VirtualOffice from '@/components/VirtualOffice';
import Features from '@/components/Features';
import '@fortawesome/fontawesome-free/css/all.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Register Karo</title>
        <meta name="description" content="Register Karo - Sign Up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
{/* 
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1>Work From Anywhere, Grow Everywhere Get Your Instant Virtual Office</h1>
            <p>To Provide Business solutions to the entrepreneurs, by shifting their conventional mindset and enabling them to scale business without incurring bad cost. Join us to unlock your virtual office and empower your business!</p>
          </div>
          <RegisterForm />
        </div>
      </main> */}
      <VirtualOffice />
      <VirtualOfficeSteps />
      {/* <Features /> */}
      <VirtualOfficeBenefits />
      <TrustedByClients />
      <FAQ />
      <Contact />
    </div>
  );
}
