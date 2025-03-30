import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basepath: '/Portofolio',
  images: {
    unoptimized: true, // Disables image optimization
  },
};

export default nextConfig;