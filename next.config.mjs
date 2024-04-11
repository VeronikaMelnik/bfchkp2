/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't.me',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'https://bfchkp-server.onrender.com',
      },
    ],
  },
};

export default nextConfig;
