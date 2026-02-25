import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        deep: "#050608",
        anthracite: "#121417",
        electric: "#3B82F6",
        gold: "#BFA173"
      },
      boxShadow: {
        glow: "0 0 35px rgba(59,130,246,0.25)"
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 38%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.18), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
