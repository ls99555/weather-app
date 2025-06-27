'use client'

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchHandlerProps {
  onSearch: (query: string) => void;
}

export default function SearchHandler({ onSearch }: SearchHandlerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      onSearch(searchQuery);
    }
  }, [searchParams, onSearch]);

  return null;
}
