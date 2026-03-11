/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ott-video-demo.onrender.com']
  },
  env: {
    API_BASE_URL: 'https://ott-video-demo.onrender.com/api'
  }
};

export default nextConfig;