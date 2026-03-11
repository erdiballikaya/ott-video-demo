/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/javascript; charset=utf-8'
        }
      ]
    }
  ]
};

export default nextConfig;