import type { NextConfig } from "next";
import {
  monorepoRoot,
  outputFileTracingExcludesFor,
} from "../shared/next-tracing";

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot(__dirname),
  outputFileTracingExcludes: outputFileTracingExcludesFor("joinUp"),
  // Як join: без sharp на білді (Node 18 VPS, статичні картинки з /public)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
