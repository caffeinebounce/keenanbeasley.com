import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@caffeinebounce/shared-utils", "@caffeinebounce/ui"],
};

export default nextConfig;
