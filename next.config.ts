import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/tes-portfolio",
  assetPrefix: "/tes-portfolio",
};

export default nextConfig;
