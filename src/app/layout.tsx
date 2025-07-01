import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.scss";
import { ThemeProvider } from '../contexts/ThemeContext';
import StructuredData from '../components/StructuredData/StructuredData';

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
  description: "Get real-time weather information for any city worldwide. Modern, responsive weather app built with Next.js and TypeScript, powered by OpenWeatherMap API.",
  keywords: [
    "weather", 
    "forecast", 
    "climate", 
    "temperature", 
    "humidity", 
    "wind speed", 
    "weather app", 
    "real-time weather", 
    "city weather", 
    "weather information",
    "Next.js", 
    "TypeScript",
    "OpenWeatherMap"
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://weather-app-one-tau-91.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Weather App - Real-time Weather Information",
    description: "Get real-time weather information for any city worldwide. Modern, responsive weather app with beautiful UI.",
    url: "/",
    siteName: "Weather App",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Weather App Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weather App - Real-time Weather Information",
    description: "Get real-time weather information for any city worldwide. Modern, responsive weather app.",
    creator: "@lstevens_dev",
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
    'theme-color': '#3b82f6',
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
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
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
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
