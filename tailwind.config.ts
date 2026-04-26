import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C96A",
          dark: "#B8953E",
        },
        cream: "#F5F0E8",
        black: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)"],
        body: ["var(--font-libre)"],
        ui: ["var(--font-montserrat)"],
        accent: ["var(--font-playfair)"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)",
        "gold-shimmer": "linear-gradient(90deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
      },
      animation: {
        "shimmer-sweep": "shimmer 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(201, 168, 76, 0.4)",
        "gold-glow-sm": "0 0 10px rgba(201, 168, 76, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
