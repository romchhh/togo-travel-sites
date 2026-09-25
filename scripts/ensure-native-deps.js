#!/usr/bin/env node
/**
 * npm workspaces + lockfile з macOS часто не ставлять optional native-модулі на Linux.
 * Після install перевіряємо @tailwindcss/oxide та sharp для поточної платформи.
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OXIDE_VERSION = "4.3.3";

const OXIDE_BY_PLATFORM = {
  linux: {
    x64: "@tailwindcss/oxide-linux-x64-gnu",
    arm64: "@tailwindcss/oxide-linux-arm64-gnu",
  },
  darwin: {
    x64: "@tailwindcss/oxide-darwin-x64",
    arm64: "@tailwindcss/oxide-darwin-arm64",
  },
};

function npmInstall(packages) {
  const args = ["install", ...packages, "--no-audit", "--no-fund", "--include=optional"];
  const result = spawnSync("npm", args, {
    cwd: ROOT,
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function exists(pkgName) {
  return fs.existsSync(path.join(ROOT, "node_modules", pkgName));
}

const oxidePkg = OXIDE_BY_PLATFORM[process.platform]?.[process.arch];
const toInstall = [];

if (oxidePkg && !exists(oxidePkg)) {
  console.log(`[ensure-native-deps] missing ${oxidePkg}, installing…`);
  toInstall.push(`${oxidePkg}@${OXIDE_VERSION}`);
}

if (!exists("sharp")) {
  console.log("[ensure-native-deps] missing sharp, installing…");
  toInstall.push("sharp@^0.34.2");
}

if (toInstall.length > 0) {
  npmInstall(toInstall);
}
