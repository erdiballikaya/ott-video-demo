/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true  // Add this if you're having image optimization issues
  },
  typescript: {
    ignoreBuildErrors: true  // Use cautiously, only to diagnose build issues
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
};

export default nextConfig;