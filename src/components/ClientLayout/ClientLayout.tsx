'use client'

import { useState, useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
  onSearch: (query: string) => void;
  loading: boolean;
}

export default function ClientLayout({ children, onSearch, loading }: ClientLayoutProps) {
  // Listen for city searches from footer
  useEffect(() => {
    const handleCitySearch = (event: CustomEvent) => {
      onSearch(event.detail);
    };

    window.addEventListener('citySearch', handleCitySearch as EventListener);
    return () => window.removeEventListener('citySearch', handleCitySearch as EventListener);
  }, [onSearch]);

  return (
    <>
      <Header onSearch={onSearch} loading={loading} />
      {children}
      <Footer />
    </>
  );
}
