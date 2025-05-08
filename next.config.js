/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds to prevent build failures
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig 