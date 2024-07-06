/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ikea.com',
      },
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'www.youtube.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;

