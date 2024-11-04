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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#A29875;',
        secondary: '#787054;',
       borderRadius: {
        '3xl': '2rem',
        '4xl': '3rem',
       },
      },
    },
  },
  plugins: [],
};
export default config;
