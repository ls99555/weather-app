# Weather App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern weather application that allows users to search for weather information in different cities using the OpenWeatherMap API.

## Features

- 🌤️ Search weather by city name
- 🌡️ Display current temperature, humidity, wind speed
- 🌧️ Rain information
- 📱 Responsive design with SCSS modules
- ⚡ Built with Next.js 15 and TypeScript

## Getting Started

First, set up your environment variables:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Create a `.env.local` file in the root directory
3. Add your API key:
   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   ```

Then, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **API**: OpenWeatherMap
- **Architecture**: Component-based with reusable Button component

## Project Structure

- `/src/app` - Main application pages
- `/src/components` - Reusable components
- **SCSS Modules** - Component-scoped styling
- **Environment Variables** - API key management

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
