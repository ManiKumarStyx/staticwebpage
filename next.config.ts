import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/staticwebpage',
  assetPrefix: '/staticwebpage',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
