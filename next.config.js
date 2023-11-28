/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'source.unsplash.com' }],
  },
  transpilePackages: ['@pqina/pintura', '@pqina/react-pintura'],
}

module.exports = nextConfig
