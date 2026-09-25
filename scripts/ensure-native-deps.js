#!/usr/bin/env node
/**
 * Tailwind oxide + sharp for the current OS (npm optional-deps bug on Linux CI/VPS).
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
  const scope = pkgName.slice(0, slash);
  const name = pkgName.slice(slash + 1);
  return path.join(ROOT, "node_modules", scope, name);
}

function npmInstall(packages, extraArgs = []) {
  const args = [
    "install",
    ...packages,
    "--no-audit",
    "--no-fund",
    "--include=optional",
    ...extraArgs,
  ];
  const result = spawnSync("npm", args, {
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
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

function installOxideForPlatform() {
  const natives = OXIDE_NATIVE[process.platform]?.[process.arch] ?? [];
  const missing = natives.filter((pkg) => !fs.existsSync(scopedModuleDir(pkg)));
  if (missing.length > 0) {
    console.log("[ensure-native-deps] installing native oxide:", missing.join(", "));
    npmInstall(missing.map((p) => `${p}@${OXIDE_VERSION}`));
  }

  if (!oxideLoads() && process.platform === "linux") {
    console.log("[ensure-native-deps] native oxide missing, forcing linux bindings…");
    npmInstall(
      natives.map((p) => `${p}@${OXIDE_VERSION}`),
      ["--force"]
    );
  }

  if (!oxideLoads() && process.platform === "linux") {
    console.log("[ensure-native-deps] trying wasm oxide fallback…");
    npmInstall([`@tailwindcss/oxide-wasm32-wasi@${OXIDE_VERSION}`], [
      "--force",
      "--cpu=wasm32",
    ]);
  }
}

if (!oxideLoads()) {
  installOxideForPlatform();
}

if (!fs.existsSync(path.join(ROOT, "node_modules", "sharp"))) {
  console.log("[ensure-native-deps] installing sharp…");
  npmInstall(["sharp@^0.35.4"]);
}

if (!oxideLoads()) {
  console.error(
    "[ensure-native-deps] @tailwindcss/oxide still fails to load.\n" +
      "  rm -rf node_modules && npm install\n" +
      "  node -v   # need Node 20+\n" +
      "  npm install @tailwindcss/oxide-linux-x64-gnu@4.3.3 --force"
  );
  process.exit(1);
}

console.log("[ensure-native-deps] OK (tailwind oxide + sharp)");
