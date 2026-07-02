import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-app",
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
