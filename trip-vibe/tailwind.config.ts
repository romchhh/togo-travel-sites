import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#c94b45",
          dark: "#a83c37",
        },
        header: "#6b1c2a",
        mudblue: "#0e4f74",
        ink: "#12161c",
        muted: "#5b6675",
        line: "#e6e9ee",
        surface: "#f7f8fa",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-evolventa)",
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.875rem",
        lg: "1.25rem",
        xl: "1.75rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgb(18 22 28 / 0.28)",
        lift: "0 22px 50px -24px rgb(18 22 28 / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
