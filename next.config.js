/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'lt', 'rus', 'pol', 'ja'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    ADMIN_URL: process.env.ADMIN_URL,
    PORTAL_URL: process.env.PORTAL_URL,
    LOGIN_URL: process.env.LOGIN_URL,
    BASE_API_URL: process.env.BASE_API_URL,
    BASE_TCS_API_URL: process.env.BASE_TCS_API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/tcs/:path*',
        destination: `${process.env.BASE_TCS_API_URL}/:path*`, // Proxy to Backend
      },
      {
        source: '/api/:path*',
        destination: `${process.env.BASE_API_URL}/:path*`, // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
