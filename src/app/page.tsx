'use client'

import { useState } from "react";
import Image from "next/image";
import styles from './page.module.scss';
import ClientLayout from '../components/ClientLayout/ClientLayout';

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number };
  rain?: { [key: string]: number };
  dt: number;
}

async function fetchWeatherByCity(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || "fdb68eeeb8c3d7e3207b4d1285ba3d9f";
  console.log("Fetching weather for city:", city);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) {
    const error = await res.text();
    console.error("API Error:", error);
    throw new Error(`Failed to fetch weather: ${error}`);
  }
  return res.json();
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeatherByCity(query);
      setWeather(data);
    } catch (e) {
      console.error("Search error:", e);
      const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
      if (errorMessage.includes("Invalid API key")) {
        setError("API key is invalid. Please check your OpenWeatherMap API key.");
      } else {
        setError(`Could not find weather for "${query}". ${errorMessage}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientLayout onSearch={handleSearch} loading={loading}>
      <div className={styles.pageWrapper}>
        <main className={styles.main}>
        <div className={styles.container}>
          {loading && <div className={styles.loading}>Loading...</div>}
          {error && <div className={styles.error}>{error}</div>}
          {weather && (
            <div className={styles.weatherCard}>
              <div className={styles.weatherMain}>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description}
                  width={80}
                  height={80}
                  className={styles.weatherIcon}
                />
                <h2 className={styles.cityName}>{weather.name}</h2>
                <div className={styles.weatherType}>{weather.weather[0].main}</div>
                <div className={styles.temperature}>{Math.round(weather.main.temp)}°C</div>
              </div>
              <div className={styles.weatherDetails}>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Humidity</div>
                  <div className={styles.detailValue}>{weather.main.humidity}%</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Wind</div>
                  <div className={styles.detailValue}>{weather.wind.speed} m/s</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Rain</div>
                  <div className={styles.detailValue}>{weather.rain ? Object.values(weather.rain)[0] + " mm" : "-"}</div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailLabel}>Updated</div>
                  <div className={styles.detailValue}>{new Date(weather.dt * 1000).toLocaleTimeString()}</div>
                </div>
              </div>
            </div>
          )}
          
          {!weather && !loading && !error && (
            <div className={styles.welcome}>
              <h2>Welcome to Weather App</h2>
              <p>Search for a city to see its current weather conditions</p>
            </div>
          )}
        </div>
      </main>
      </div>
    </ClientLayout>
  );
}
