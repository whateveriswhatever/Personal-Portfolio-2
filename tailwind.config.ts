import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        custom: {
          "0%": {
            opacity: "0",
            transform: "translateY(10vh)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        fly: "custom .4s ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] 1",
      },

      screens: {
        max767px: "767px",
        max1280px: "1280px",
        phone: "280px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
