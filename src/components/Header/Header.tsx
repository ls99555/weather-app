import { useState } from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  onSearch: (query: string) => void;
  loading?: boolean;
}

export default function Header({ onSearch, loading = false }: HeaderProps) {
  const [query, setQuery] = useState("");
  const { toggleTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery(""); // Clear search after submission
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand and Toggle on same row for both mobile and desktop */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <div className={styles.logo}>🌤️</div>
            <h1 className={styles.title}>Weather App</h1>
          </div>
          {/* Toggle switch - positioned next to logo on far right */}
          <Button type="button" variant="toggle" onClick={toggleTheme} className={styles.themeToggle}>
          </Button>
        </div>
        
        {/* Search form - center on desktop, full width on mobile */}
        <div className={styles.searchContainer}>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
              type="text"
              placeholder="Search for a city..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
              disabled={loading}
            />
            <Button type="submit" variant="primary" disabled={loading || query.trim().length === 0}>
              {loading ? "..." : "Search"}
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
