#!/usr/bin/env node
/**
 * trip-vibe (Tailwind v4) may need native oxide on Linux.
 * join / joinUp do not — postinstall must not fail npm install.
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OXIDE_VERSION = "4.3.3";

const OXIDE_NATIVE = {
  linux: {
    x64: [
      "@tailwindcss/oxide-linux-x64-gnu",
      "@tailwindcss/oxide-linux-x64-musl",
    ],
    arm64: [
      "@tailwindcss/oxide-linux-arm64-gnu",
      "@tailwindcss/oxide-linux-arm64-musl",
    ],
  },
  darwin: {
    x64: ["@tailwindcss/oxide-darwin-x64"],
    arm64: ["@tailwindcss/oxide-darwin-arm64"],
  },
};

function scopedModuleDir(pkgName) {
  const slash = pkgName.indexOf("/");
  return path.join(ROOT, "node_modules", pkgName.slice(0, slash), pkgName.slice(slash + 1));
}

function npmInstall(packages, extraArgs = []) {
  spawnSync(
    "npm",
    ["install", ...packages, "--no-audit", "--no-fund", "--include=optional", ...extraArgs],
    { cwd: ROOT, stdio: "inherit", env: process.env }
  );
}

function oxideLoads() {
  try {
    const oxidePath = path.join(ROOT, "node_modules", "@tailwindcss", "oxide");
    if (!fs.existsSync(oxidePath)) return false;
    require(oxidePath);
    return true;
  } catch {
    return false;
  }
}

if (!oxideLoads()) {
  const natives = OXIDE_NATIVE[process.platform]?.[process.arch] ?? [];
  const missing = natives.filter((pkg) => !fs.existsSync(scopedModuleDir(pkg)));
  if (missing.length > 0) {
    console.log("[ensure-native-deps] optional (trip-vibe):", missing.join(", "));
    npmInstall(missing.map((p) => `${p}@${OXIDE_VERSION}`));
  }
  if (!oxideLoads() && process.platform === "linux") {
    npmInstall(
      natives.map((p) => `${p}@${OXIDE_VERSION}`),
      ["--force"]
    );
  }
}

if (oxideLoads()) {
  console.log("[ensure-native-deps] tailwind oxide OK");
} else {
  console.warn(
    "[ensure-native-deps] tailwind oxide not loaded — join/joinUp OK; trip-vibe needs Node 20+ or reinstall on Linux"
  );
}
