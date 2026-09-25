import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ff7112",
          dark: "#e55f0a",
        },
        ink: "#131313",
        muted: "#667085",
        line: "#eaecf0",
        surface: "#f7f8fa",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-montserrat)",
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
        soft: "0 10px 40px -18px rgb(19 19 19 / 0.28)",
        lift: "0 22px 50px -24px rgb(19 19 19 / 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
