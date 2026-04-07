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
        ink: "#0A0908",
        teal: "#22333B",
        bone: "#EAE0D5",
        tan: "#C6AC8F",
        earth: "#5E503F",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Jost", "sans-serif"],
        accent: ["Bebas Neue", "sans-serif"],
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "40px",
        xl: "64px",
        "2xl": "96px",
      },
    },
  },
  plugins: [],
};
export default config;
