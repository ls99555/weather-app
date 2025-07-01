'use client'

import Link from 'next/link';
import styles from './legal.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function TermsPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header onSearch={() => {}} loading={false} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.lastUpdated}>Last updated: July 1, 2025</p>
            
            <section className={styles.section}>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Weather App, you accept and agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Description of Service</h2>
              <p>
                Weather App is a free web application that provides weather information for cities worldwide. 
                The service displays current weather conditions including temperature, humidity, wind speed, and precipitation data.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Data Sources</h2>
              <p>
                Weather data is provided by OpenWeatherMap API. We do not guarantee the accuracy, completeness, 
                or reliability of weather information. Weather conditions can change rapidly and may vary from actual conditions.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Limitation of Liability</h2>
              <p>
                Weather App is provided &quot;as is&quot; without warranties of any kind. We are not liable for any 
                damages resulting from the use of this service. This app is not intended for emergency situations 
                or critical decision-making that depends on weather conditions.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Privacy and Analytics</h2>
              <p>
                We use Google Analytics to understand how visitors interact with our website. This service may collect 
                anonymous usage data including pages visited, time spent on site, and general location information. 
                No personally identifiable information is collected. For more details, see our{' '}
                <Link href="/privacy" className={styles.link}>Privacy Policy</Link>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service 
                constitutes acceptance of updated terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
                <a href="mailto:luke@lstevens.dev" className={styles.link}>luke@lstevens.dev</a>
              </p>
            </section>

            <div className={styles.navigation}>
              <Link href="/" className={styles.homeLink}>← Back to Weather App</Link>
              <Link href="/privacy" className={styles.policyLink}>Privacy Policy →</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
