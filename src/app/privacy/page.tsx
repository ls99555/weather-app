'use client'

import Link from 'next/link';
import styles from '../terms/legal.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function PrivacyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header onSearch={() => {}} loading={false} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last updated: December 27, 2024</p>
            
            <section className={styles.section}>
              <h2>Information We Collect</h2>
              <p>
                <strong>We do not collect any personal information.</strong> Weather App does not require user accounts, 
                registration, or any form of personal data entry.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What We Don&apos;t Collect</h2>
              <ul className={styles.list}>
                <li>No personal identification information</li>
                <li>No email addresses or contact information</li>
                <li>No location tracking or GPS data</li>
                <li>No user accounts or profiles</li>
                <li>No cookies for tracking or analytics</li>
                <li>No browsing history or user behavior data</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>How the App Works</h2>
              <p>
                When you search for weather information:
              </p>
              <ul className={styles.list}>
                <li>You enter a city name in the search box</li>
                <li>We send this city name to OpenWeatherMap API</li>
                <li>We display the returned weather data</li>
                <li>No search history is saved or stored</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Third-Party Services</h2>
              <p>
                Weather App uses OpenWeatherMap API to retrieve weather data. When you search for a city, 
                this query is sent to OpenWeatherMap&apos;s servers. Please refer to{' '}
                <a 
                  href="https://openweathermap.org/privacy-policy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  OpenWeatherMap&apos;s Privacy Policy
                </a>{' '}
                for their data handling practices.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Data Storage</h2>
              <p>
                No data is stored on our servers. All weather information is fetched in real-time 
                and displayed temporarily in your browser. When you close the app, no information is retained.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Since we don&apos;t collect any personal information, this app is safe for users of all ages, 
                including children under 13.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Changes to Privacy Policy</h2>
              <p>
                If we ever change our privacy practices, we will update this policy and note the revision date above.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Contact</h2>
              <p>
                For questions about this privacy policy, contact us at{' '}
                <a href="mailto:luke@lstevens.dev" className={styles.link}>luke@lstevens.dev</a>
              </p>
            </section>

            <div className={styles.navigation}>
              <Link href="/terms" className={styles.policyLink}>← Terms of Service</Link>
              <Link href="/" className={styles.homeLink}>Back to Weather App →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
