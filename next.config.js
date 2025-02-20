/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/index.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
