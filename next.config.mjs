/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ikea.com',
      },
    ],
  },
};

export default nextConfig;
//TODO set stringmode to true
