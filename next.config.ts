import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // All pages are fully static — no server runtime needed
  output: 'export',
  trailingSlash: false,
};

export default nextConfig;
