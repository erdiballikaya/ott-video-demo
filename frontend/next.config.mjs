/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  
  // Disable server-side rendering for this page
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['@vercel/og'],
    clientRouterFilter: true,
    appDir: true
  },

  // Ensure images are properly loaded
  images: {
    unoptimized: false,
    domains: ['localhost', 'vercel.app']
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }

    // Add support for loading SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  // Redirect all routes to client-side rendering
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/'
      }
    ];
  }
};

export default nextConfig;