import path from "path";

export type SiteKey = "join" | "joinUp" | "trip-vibe";

const SIBLINGS: Record<SiteKey, SiteKey[]> = {
  join: ["joinUp", "trip-vibe"],
  joinUp: ["join", "trip-vibe"],
  "trip-vibe": ["join", "joinUp"],
};

/** Monorepo root — required when importing from `shared/` */
export function monorepoRoot(siteDir: string) {
  return path.join(siteDir, "..");
}

/** Shrink standalone/server traces: skip archives and other sites */
export function outputFileTracingExcludesFor(site: SiteKey): Record<string, string[]> {
  const patterns = [
    "deals/**",
    "assets/**",
    "scripts/**",
    ...SIBLINGS[site].map((s) => `${s}/**`),
  ];
  return { "/*": patterns };
}
