import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(208, 14, 21)",
        secondary: "rgb(39, 115, 143)",
        tertiary: "#0a0a0a",
        // Modern Dark Theme Colors
        dark: {
          DEFAULT: "#0a0a0a",      // Main background (soft black)
          100: "#0d0d0d",          // Slightly lighter
          200: "#121212",          // Google Material dark
          300: "#171717",          // Elevated surface
          400: "#1a1a1a",          // Cards background
          500: "#1f1f1f",          // Modal background
          600: "#262626",          // Hover states
          700: "#2a2a2a",          // Active states
          800: "#333333",          // Borders
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
