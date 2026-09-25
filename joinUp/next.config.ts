import type { NextConfig } from "next";
import {
  monorepoRoot,
  outputFileTracingExcludesFor,
} from "../shared/next-tracing";

const nextConfig: NextConfig = {
  outputFileTracingRoot: monorepoRoot(__dirname),
  outputFileTracingExcludes: outputFileTracingExcludesFor("joinUp"),
};

export default nextConfig;
