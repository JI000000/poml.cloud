import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
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

export default withMDX(nextConfig);
