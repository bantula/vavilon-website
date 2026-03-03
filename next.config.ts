import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Image optimisation requires a Node server — disabled for static export.
    // All images are served as-is; they are already compressed PNGs/SVGs.
    unoptimized: true,
  },
}

export default nextConfig
