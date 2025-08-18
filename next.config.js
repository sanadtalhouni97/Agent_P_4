/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Render.com
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  // Ensure trailing slashes for static hosting
  trailingSlash: true,
  // Set base path if needed for subdirectory deployment
  // basePath: '',
  // Asset prefix for static hosting
  // assetPrefix: '',
  // Configuration for production build
}

module.exports = nextConfig 