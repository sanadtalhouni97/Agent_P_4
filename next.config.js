/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Next.js Dev Tools in development
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // Disable the development tools toast
  experimental: {
    devTools: false,
  },
}

module.exports = nextConfig 