const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  output: 'export', // Forces Next.js to build a static site
  basePath: '/pyramid-lading-page',
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support the Next.js Image Optimizer
  },
};

module.exports = nextConfig;
