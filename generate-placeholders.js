const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const images = [
  { name: 'sekolah.jpg', label: 'Foto Sekolah SMK RUS', bg: '#1a1a1a', accent: '#dc2626' },
  { name: 'logo.png', label: 'Logo SMK RUS', bg: '#dc2626', accent: '#ffffff' },
  { name: 'berita1.jpg', label: 'Kompetisi Animasi Nasional', bg: '#0a0a0a', accent: '#dc2626' },
  { name: 'berita2.jpg', label: 'Workshop Desain Grafis', bg: '#dc2626', accent: '#0a0a0a' },
  { name: 'berita3.jpg', label: 'Peluncuran Game Edukasi', bg: '#171717', accent: '#dc2626' },
  { name: 'berita4.jpg', label: 'Kunjungan Industri Jakarta', bg: '#262626', accent: '#dc2626' },
  { name: 'berita5.jpg', label: 'PPDB 2027/2028', bg: '#dc2626', accent: '#ffffff' },
  { name: 'berita6.jpg', label: 'Lomba Web Design LKS', bg: '#0a0a0a', accent: '#dc2626' },
];

images.forEach(img => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect fill="${img.bg}" width="800" height="500"/>
  <circle fill="${img.accent}" cx="650" cy="100" r="80" opacity="0.15"/>
  <circle fill="${img.accent}" cx="150" cy="400" r="60" opacity="0.1"/>
  <rect fill="${img.accent}" x="50" y="50" width="120" height="120" rx="24" opacity="0.08"/>
  <text x="400" y="230" font-family="Arial,Helvetica,sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold" opacity="0.9">${img.label}</text>
  <text x="400" y="270" font-family="Arial,Helvetica,sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.5">SMK Raden Umar Said Kudus</text>
  <text x="400" y="310" font-family="Arial,Helvetica,sans-serif" font-size="12" fill="white" text-anchor="middle" opacity="0.3">Placeholder Image</text>
</svg>`;

  // Save as SVG with the original name
  fs.writeFileSync(path.join(publicDir, img.name), svg, 'utf8');
  console.log('Created: ' + img.name);
});

console.log('Done! All placeholder images created.');
