'use client'

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weather-app-one-tau-91.vercel.app'

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Weather App",
    "url": baseUrl,
    "logo": `${baseUrl}/icons/icon-512x512.png`,
    "description": "Real-time weather information for cities worldwide",
    "founder": {
      "@type": "Person",
      "name": "Luke Stevens",
      "url": "https://lstevens.dev"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Weather App",
    "url": baseUrl,
    "description": "Get real-time weather information for any city worldwide",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Weather App",
    "url": baseUrl,
    "description": "Modern weather application providing real-time weather data",
    "applicationCategory": "Weather",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "permissions": "No special permissions required",
    "author": {
      "@type": "Person",
      "name": "Luke Stevens",
      "url": "https://lstevens.dev"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema)
        }}
      />
    </>
  )
}
