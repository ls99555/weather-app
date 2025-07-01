import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import { ThemeProvider } from '../contexts/ThemeContext';
import StructuredData from '../components/StructuredData/StructuredData';
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Weather App - Real-time Weather Information",
    template: "%s | Weather App"
  },
  description: "Get real-time weather information for any city worldwide. Modern, responsive weather app built with Next.js and TypeScript, powered by OpenWeatherMap API. Free weather forecasts with temperature, humidity, wind speed, and precipitation data.",
  keywords: [
    "weather", 
    "forecast", 
    "climate", 
    "temperature", 
    "humidity", 
    "wind speed",
    "precipitation",
    "real-time weather",
    "weather app", 
    "city weather", 
    "weather information",
    "weather data",
    "current weather",
    "weather conditions",
    "meteorology",
    "atmospheric conditions",
    "weather API",
    "free weather app",
    "responsive weather app",
    "mobile weather",
    "desktop weather",
    "PWA weather app",
    "Next.js", 
    "TypeScript",
    "React",
    "OpenWeatherMap",
    "Luke Stevens",
    "lstevens.dev"
  ],
  authors: [{ name: "Luke Stevens", url: "https://lstevens.dev" }],
  creator: "Luke Stevens",
  publisher: "Luke Stevens",
  applicationName: "Weather App",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://weather-app-one-tau-91.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Weather App - Real-time Weather Information",
    description: "Get real-time weather information for any city worldwide. Modern, responsive weather app with beautiful UI and accurate forecasts.",
    url: "/",
    siteName: "Weather App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Weather App Logo - Real-time Weather Information',
        type: 'image/png',
      },
      {
        url: '/icons/icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'Weather App Icon',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weather App - Real-time Weather Information",
    description: "Get real-time weather information for any city worldwide. Modern, responsive weather app with accurate forecasts.",
    creator: "@lstevens_dev",
    site: "@lstevens_dev",
    images: ['/icons/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  category: "weather",
  classification: "Weather Application",
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Weather App',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-TileImage': '/icons/icon-192x192.png',
    'theme-color': '#3b82f6',
    'apple-touch-icon': '/icons/icon-192x192.png',
    'application-name': 'Weather App',
    'msapplication-tooltip': 'Real-time Weather Information',
    'msapplication-starturl': '/',
    'msapplication-navbutton-color': '#3b82f6',
    'msapplication-window': 'width=1024;height=768',
    'msapplication-task': 'name=Weather App;action-uri=/;icon-uri=/icons/icon-192x192.png',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // Important for iPhone notch/safe area support
  colorScheme: 'light dark', // Support both light and dark modes
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#374151' }, // Updated to match new lighter bg-primary
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
