import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization
  },
};

export default nextConfig;