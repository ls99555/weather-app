'use client'

import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeColorManager() {
  const { theme } = useTheme();

  useEffect(() => {
    // Update theme-color meta tag for iPhone status bar
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        theme === 'dark' ? '#1f2937' : '#f9fafb'
      );
    } else {
      // Create the meta tag if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = theme === 'dark' ? '#1f2937' : '#f9fafb';
      document.head.appendChild(meta);
    }

    // Also update Apple status bar style
    const metaStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (metaStatusBarStyle) {
      metaStatusBarStyle.setAttribute('content', theme === 'dark' ? 'black-translucent' : 'default');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'apple-mobile-web-app-status-bar-style';
      meta.content = theme === 'dark' ? 'black-translucent' : 'default';
      document.head.appendChild(meta);
    }
  }, [theme]);

  return null; // This component doesn't render anything
}
