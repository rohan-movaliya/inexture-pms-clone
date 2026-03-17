import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3b82f6",
        },
        header: "#1f1f23",
        sidebar: "#1f1f23",
      },
    },
  },
};

export default config;

