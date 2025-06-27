# Weather App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A modern weather application that allows users to search for weather information in different cities using the OpenWeatherMap API.

## Features

- 🌤️ Search weather by city name
- 🌡️ Display current temperature, humidity, wind speed
- 🌧️ Rain information
- 📱 Responsive design with SCSS modules
- 🌓 Light/Dark theme support
- 📲 iPhone notch and safe area support
- ♿ Accessibility compliant
- ⚡ Built with Next.js 15 and TypeScript
- 🎨 Professional design system with SCSS variables

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
- **Styling**: SCSS Modules with Design System
- **API**: OpenWeatherMap
- **Architecture**: Component-based with reusable components
- **Deployment**: Vercel-ready with production optimizations
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Mobile**: iPhone safe area support and responsive design

## Project Structure

- `/src/app` - Main application pages and layouts
- `/src/components` - Reusable components (Button, Header, Footer)
- `/src/contexts` - React contexts (Theme management)
- `/src/styles` - SCSS modules and design system variables
- `/public` - Static assets and PWA manifest
- **SCSS Design System** - Comprehensive variables, mixins, and themes
- **Environment Variables** - Secure API key management
- **TypeScript** - Full type safety throughout the application

## Contact

**Developer**: Luke Stevens

- 🌐 **Website**: [lstevens.dev](https://lstevens.dev)
- 📧 **Email**: [luke@lstevens.dev](mailto:luke@lstevens.dev)
- 💼 **LinkedIn**: [Luke Stevens](https://www.linkedin.com/in/luke-stevens-a117bab5/)
- 🐙 **GitHub**: [ls99555](https://github.com/ls99555)

Feel free to reach out for any questions, feedback, or collaboration opportunities!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Quick Deployment Steps:

1. **Push to GitHub** (already done! ✅)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your `ls99555/weather-app` repository
3. **Add Environment Variables**:
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_OPENWEATHER_API_KEY` with your API key
   - Add: `NEXT_PUBLIC_SITE_URL` with your deployed URL
4. **Deploy**: Vercel will automatically build and deploy your app!

### Alternative Deployment Options:
- **Netlify**: Import from GitHub and add environment variables
- **Railway**: Connect GitHub repo and set environment variables
- **Digital Ocean App Platform**: Deploy directly from GitHub

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
