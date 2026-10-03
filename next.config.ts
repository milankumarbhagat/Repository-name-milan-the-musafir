import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Use aggressive caching only in production; disable in development
    minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 60 * 60 * 24 * 30, 
    // Skip image processing cache entirely during local dev for instant updates
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
