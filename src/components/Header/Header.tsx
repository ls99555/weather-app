import { useState } from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';

interface HeaderProps {
  onSearch: (query: string) => void;
  loading?: boolean;
}

export default function Header({ onSearch, loading = false }: HeaderProps) {
  const [query, setQuery] = useState("");

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
        <div className={styles.brand}>
          <div className={styles.logo}>🌤️</div>
          <h1 className={styles.title}>Weather App</h1>
        </div>
        
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

        <div className={styles.actions}>
          <Button variant="secondary" onClick={() => console.log('Theme toggle clicked')}>
            🌙
          </Button>
        </div>
      </div>
    </header>
  );
}
