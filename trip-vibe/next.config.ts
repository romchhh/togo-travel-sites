import type { NextConfig } from "next";
import {
  monorepoRoot,
  outputFileTracingExcludesFor,
} from "../shared/next-tracing";

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot(__dirname),
  outputFileTracingExcludes: outputFileTracingExcludesFor("trip-vibe"),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
