import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-bg': '#f7fafc',
        'custom-button': '#1469C2',
        'custom-input': '#E8EDF2',
        'custom-input-text': '#4F7396',
        'custom-logout' : '#F3F2F0'
      },
    },
  },
  plugins: [],
};
export default config;