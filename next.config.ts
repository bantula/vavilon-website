import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static export compatibility
  // Remove the line below if you need API routes or SSR
  // output: 'export',
}

export default nextConfig
