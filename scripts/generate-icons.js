const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

// Create a simple weather icon SVG
const weatherIconSVG = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4682B4;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background circle -->
  <circle cx="256" cy="256" r="240" fill="url(#skyGradient)" stroke="#4682B4" stroke-width="8"/>
  
  <!-- Sun -->
  <circle cx="200" cy="180" r="45" fill="#FFD700" filter="url(#shadow)"/>
  <g stroke="#FFD700" stroke-width="6" stroke-linecap="round">
    <line x1="200" y1="110" x2="200" y2="130"/>
    <line x1="200" y1="230" x2="200" y2="250"/>
    <line x1="130" y1="180" x2="150" y2="180"/>
    <line x1="250" y1="180" x2="270" y2="180"/>
    <line x1="158" y1="138" x2="172" y2="152"/>
    <line x1="228" y1="208" x2="242" y2="222"/>
    <line x1="158" y1="222" x2="172" y2="208"/>
    <line x1="228" y1="152" x2="242" y2="138"/>
  </g>
  
  <!-- Cloud -->
  <g fill="#FFFFFF" filter="url(#shadow)">
    <circle cx="320" cy="280" r="35"/>
    <circle cx="290" cy="290" r="30"/>
    <circle cx="350" cy="295" r="25"/>
    <circle cx="320" cy="305" r="30"/>
    <ellipse cx="320" cy="295" rx="50" ry="25"/>
  </g>
  
  <!-- Weather App text -->
  <text x="256" y="400" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="32" font-weight="bold" filter="url(#shadow)">Weather</text>
</svg>
`;

async function generateIcons() {
  const iconsDir = path.join(__dirname, '..', 'public', 'icons');
  
  // Ensure icons directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  
  // Convert SVG to PNG for different sizes
  const sizes = [192, 512];
  
  for (const size of sizes) {
    try {
      await sharp(Buffer.from(weatherIconSVG))
        .png()
        .resize(size, size)
        .toFile(path.join(iconsDir, `icon-${size}x${size}.png`));
      
      console.log(`✅ Generated icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error generating ${size}x${size} icon:`, error);
    }
  }
  
  // Generate favicon as both PNG and ICO
  try {
    // First create a 32x32 PNG
    const faviconPath = path.join(__dirname, '..', 'public', 'favicon-temp.png');
    await sharp(Buffer.from(weatherIconSVG))
      .png()
      .resize(32, 32)
      .toFile(faviconPath);
    
    // Convert PNG to ICO
    const pngBuffer = fs.readFileSync(faviconPath);
    const icoBuffer = await pngToIco([pngBuffer]);
    
    // Write ICO file to app directory (Next.js convention)
    fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', 'favicon.ico'), icoBuffer);
    
    // Also keep a PNG version in public for web use
    fs.renameSync(faviconPath, path.join(__dirname, '..', 'public', 'favicon.png'));
    
    console.log('✅ Generated favicon.ico and favicon.png');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
  }
  
  console.log('\n🎉 All icons generated successfully!');
}

generateIcons().catch(console.error);
