import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "glow-grid":
          "radial-gradient(circle at 30% 10%, rgba(34,211,238,0.15), transparent 55%), radial-gradient(circle at 70% 90%, rgba(139,92,246,0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;

