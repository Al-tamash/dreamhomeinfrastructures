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
        tertiary: "rgb(44, 44, 44)",
      },
      fontFamily: {
        heading: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
        body: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
