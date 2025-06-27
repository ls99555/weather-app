'use client'

import Link from 'next/link';
import styles from './not-found.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <Header onSearch={() => {}} loading={false} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconContainer}>
            <div className={styles.weatherIcon}>🌧️</div>
          </div>
          
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          
          <p className={styles.description}>
            Looks like this page got lost in the storm! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className={styles.actions}>
            <Link href="/" className={styles.homeButton}>
              🏠 Back to Weather App
            </Link>
          </div>
          
          <div className={styles.suggestions}>
            <h3>Popular searches:</h3>
            <div className={styles.suggestionList}>
              <Link href="/?search=London" className={styles.suggestion}>London</Link>
              <Link href="/?search=New York" className={styles.suggestion}>New York</Link>
              <Link href="/?search=Tokyo" className={styles.suggestion}>Tokyo</Link>
              <Link href="/?search=Sydney" className={styles.suggestion}>Sydney</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
