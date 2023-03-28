/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
        port: '',
        pathname: '/demos/images/nature-1.jpg',
      },
    ],
  },
}

module.exports = nextConfig
