/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0, // default: 30
      static: 180, // default: 300
    },
  },
};

export default nextConfig;
