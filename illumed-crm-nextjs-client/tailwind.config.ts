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
      width: {
        '99' : '99%'
      },
      colors: {
        'sidebar-color' : '#18191E',
        'sidebar-text-color' : '#84858E',
        'sidebar-active-text-color' : '#A3AEFF',
        'sidebar-block-color' : '#34353A',
        'main-primary-color' : '#232429',
        'main-side' : '#34353a',
        'priority' : '#C5C7D7',
        'peach' : "#FFA3A3",
        'orange-main' : "#F8A576",
        'violet-main' : "#A076F8"
      }
    },
  },
  plugins: [],
};
export default config;
