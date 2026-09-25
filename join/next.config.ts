import type { NextConfig } from "next";
import {
  monorepoRoot,
  outputFileTracingExcludesFor,
} from "../shared/next-tracing";

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot(__dirname),
  outputFileTracingExcludes: outputFileTracingExcludesFor("join"),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
