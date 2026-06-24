import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2524",
        muted: "#66706c",
        line: "#d9ddd7",
        paper: "#f7f6f1",
        panel: "#ffffff",
        moss: "#66715f",
        clay: "#b76e4c",
        slategreen: "#33433d"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(35, 39, 36, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans SC",
          "Microsoft YaHei",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
