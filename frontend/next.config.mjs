/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true  // Disable image optimization
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': config.resolve.alias['@'] || config.context,
    };
    
    config.module.rules.push({
      test: /\.(css)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    });

    return config;
  }
};

export default nextConfig;