const { nextui } = require("@nextui-org/react");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'Josefin': ["Josefin Sans", 'serif'],
        "poppins": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'fire-dot-pink': 'radial-gradient(50% 50% at 50% 50%, rgba(243, 80, 255, 0.80) 0%, rgba(217, 217, 217, 0) 100%)',
        'fire-dot-red': 'radial-gradient(50% 50% at 50% 50%, rgba(248, 35, 92, 0.80) 0%, rgba(217, 217, 217, 0) 100%)',
        "svg-pattern": "linear-gradient(4deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(36,35,32,1) 50%, rgba(0,0,0,1) 74%, rgba(0,0,0,1) 100%)",
        "about-bg": "linear-gradient(142deg, rgba(97,207,232,1) 0%, rgba(97,207,232,1) 10%, rgba(182,98,209,1) 30%, rgba(97,52,111,1) 90%, rgba(43,30,81,1) 96%)",
      },
      boxShadow: {
        'glass-inset': 'rgba(245, 245, 245, 0.25) 0px 50px 36px -28px inset',
        'glass-sm': '5px 5px 20px 0px rgba(254, 254, 91, 0.30)',
        'glass-inset-label': 'rgba(245, 245, 245, 0.25) 0px -50px 36px -28px inset',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'vibrate-button': {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'full-bar': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        'top-arrow': {
          '0%': { transform: 'translateY(-0.3rem)' },
          '100%': { transform: 'translateY(0.7rem)' },
        },
        "scroll": {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "movebar": {
          "0%": { transform: "translateX(-130px)" },
          "100%": { transform: "translateX(130px)" },
        },
        "scroll-hover-icon" : {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "spin2": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        'button-animation': 'vibrate-button .5s linear',
        'bar-full': 'full-bar .5s linear',
        "move": "movebar 5s linear infinite",
        'top-arrow-effect': 'top-arrow 1.2s linear infinite alternate-reverse',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "scroll-hover-icon": "scroll-hover-icon 1.5s linear infinite",
        "spin2": "spin2 14s linear infinite",
      },
      screens: {
        xs: '480px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}