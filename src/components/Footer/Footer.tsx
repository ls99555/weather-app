import { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import Button from '../Button/Button';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const currentYear = new Date().getFullYear();
  
  const popularCities = [
    'London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Dubai'
  ];

  const handleCityClick = (city: string) => {
    // This will be passed up to parent component to trigger search
    window.dispatchEvent(new CustomEvent('citySearch', { detail: city }));
  };

  // Set current time on client side only to avoid hydration mismatch
  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>Popular Cities</h3>
          <div className={styles.cityList}>
            {popularCities.map((city) => (
              <Button
                key={city}
                onClick={() => handleCityClick(city)}
                variant="secondary"
              >
                {city}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>About</h3>
          <p className={styles.attribution}>
            Powered by{' '}
            <a 
              href="https://openweathermap.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              OpenWeatherMap
            </a>
          </p>
          <p className={styles.disclaimer}>
            Weather data is updated every few minutes and may vary from actual conditions.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.copyright}>
            © {currentYear} Weather App. Developed by{' '}
            <a 
              href="https://lsteves.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              Luke Stevens
            </a>
          </p>
          <p className={styles.lastUpdated}>
            Last updated: {currentTime || 'Loading...'}
          </p>
        </div>
      </div>
    </footer>
  );
}
