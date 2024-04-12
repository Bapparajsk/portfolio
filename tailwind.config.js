import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'fire-dot-pink': 'radial-gradient(50% 50% at 50% 50%, rgba(243, 80, 255, 0.80) 0%, rgba(217, 217, 217, 0) 100%)',
        'fire-dot-red': 'radial-gradient(50% 50% at 50% 50%, rgba(248, 35, 92, 0.80) 0%, rgba(217, 217, 217, 0) 100%)' ,
      },
      boxShadow: {
        'glass-inset': 'rgba(245, 245, 245, 0.25) 0px 50px 36px -28px inset',
        'glass-sm': '5px 5px 20px 0px rgba(254, 254, 91, 0.30)',
        'glass-inset-label': 'rgba(245, 245, 245, 0.25) 0px -50px 36px -28px inset',
      },
      keyframes: {
        'spin-reverse': {
          '0%' : {transform: 'rotate(0deg)'},
          '100%' : {transform: 'rotate(-360deg)'},
        }
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
