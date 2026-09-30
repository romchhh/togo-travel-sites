/**
 * PM2: три Next.js-сайти (порти з package.json кожного workspace).
 * Запуск з кореня репозиторію: pm2 start ecosystem.config.cjs
 */
const path = require("path");

const root = __dirname;

module.exports = {
  apps: [
    {
      name: "join-kiev",
      cwd: path.join(root, "join"),
      script: "npm",
      args: "run start",
      interpreter: "none",
      max_memory_restart: "350M",
      env: { NODE_ENV: "production" },
    },
    {
      name: "join-kyiv",
      cwd: path.join(root, "joinUp"),
      script: "npm",
      args: "run start",
      interpreter: "none",
      max_memory_restart: "350M",
      env: { NODE_ENV: "production" },
    },
    {
      name: "tripvibe",
      cwd: path.join(root, "trip-vibe"),
      script: "npm",
      args: "run start",
      interpreter: "none",
      max_memory_restart: "350M",
      env: { NODE_ENV: "production" },
    },
  ],
};
