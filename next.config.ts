import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    // Avoid bundling server-only pdf/canvas deps from pomljs in the client build
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      canvas: false as any,
      "pdfjs-dist/legacy/build/pdf.js": false as any,
      "pdfjs-dist": false as any,
    };
    return config;
  },
};

export default nextConfig;
