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
            <p className={styles.lastUpdated}>Last updated: July 1, 2025</p>
            
            <section className={styles.section}>
              <h2>Information We Collect</h2>
              <p>
                <strong>Personal Information:</strong> We do not collect any personal information. Weather App does not require user accounts, 
                registration, or any form of personal data entry.
              </p>
              <p>
                <strong>Analytics Data:</strong> We use Google Analytics to collect anonymous usage statistics including:
              </p>
              <ul className={styles.list}>
                <li>Pages visited and time spent on site</li>
                <li>General geographic location (country/region level)</li>
                <li>Device and browser information</li>
                <li>How you arrived at our website</li>
                <li>Anonymous usage patterns and interactions</li>
              </ul>
              <p>
                This data is anonymous and cannot be used to identify individual users.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What We Don&apos;t Collect</h2>
              <ul className={styles.list}>
                <li>No personal identification information (name, email, phone)</li>
                <li>No precise location tracking or GPS data</li>
                <li>No user accounts or profiles</li>
                <li>No browsing history outside this website</li>
                <li>No financial or payment information</li>
                <li>No social media profiles or connections</li>
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
                <strong>OpenWeatherMap API:</strong> When you search for a city, this query is sent to OpenWeatherMap&apos;s servers 
                to retrieve weather data. Please refer to{' '}
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
              <p>
                <strong>Google Analytics:</strong> We use Google Analytics to understand website usage patterns. 
                Google may use this data in accordance with their{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Privacy Policy
                </a>. You can opt out of Google Analytics tracking by using the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Cookies and Tracking</h2>
              <p>
                We use Google Analytics which may place cookies on your device to collect anonymous usage statistics. 
                These cookies do not contain personal information and are used solely for analytics purposes. 
                You can disable cookies in your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Data Storage and Retention</h2>
              <p>
                <strong>Weather Data:</strong> No weather data is stored on our servers. All information is fetched in real-time 
                and displayed temporarily in your browser.
              </p>
              <p>
                <strong>Analytics Data:</strong> Google Analytics retains data according to their retention policies. 
                We have configured our analytics to automatically delete data after 26 months.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Your Rights and Choices</h2>
              <p>
                Since we don&apos;t collect personal information, there&apos;s no personal data to access, modify, or delete. 
                However, you can:
              </p>
              <ul className={styles.list}>
                <li>Opt out of Google Analytics using browser add-ons</li>
                <li>Disable cookies in your browser settings</li>
                <li>Use private/incognito browsing mode</li>
                <li>Contact us with any privacy concerns</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>International Users</h2>
              <p>
                This website is hosted in the United States. By using our service, you consent to the processing 
                of your anonymous usage data in the United States, which may have different privacy laws than your country.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Since we don&apos;t collect personal information, this app is safe for users of all ages, 
                including children under 13. However, Google Analytics may collect anonymous usage data 
                from all visitors. Parents should be aware of this when allowing children to use the service.
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
