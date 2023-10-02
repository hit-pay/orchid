/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [ "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "hit-primary": {
          DEFAULT: "var(--hit-primary-500)",
          "50-tr": "var(--hit-primary-50-tr)",
          50: "var(--hit-primary-50)",
          100: "var(--hit-primary-100)",
          200: "var(--hit-primary-200)",
          300: "var(--hit-primary-300)",
          400: "var(--hit-primary-400)",
          500: "var(--hit-primary-500)",
          600: "var(--hit-primary-600)",
        },
        "hit-text": {
          DEFAULT: "var(--hit-text-500)",
          "000": "var(--hit-text-000)",
          200: "var(--hit-text-200)",
          300: "var(--hit-text-300)",
          400: "var(--hit-text-400)",
          500: "var(--hit-text-500)",
        },
        "hit-bg": {
          DEFAULT: "var(--hit-background-blue)",
          blue: "var(--hit-background-blue)",
          white: "var(--hit-background-white)",
        },
        contast: {
          DEFAULT: "var(--hit-contrast-black)",
          black: "var(--hit-contrast-black)",
          white: "var(--hit-contrast-white)",
        },
        "hit-grey": {
          DEFAULT: "var(--hit-grey-100)",
          50: "var(--hit-grey-50)",
          100: "var(--hit-grey-100)",
          200: "var(--hit-grey-200)",
          300: "var(--hit-grey-300)",
          400: "var(--hit-grey-400)",
          500: "var(--hit-grey-500)",
          600: "var(--hit-grey-600)",
          700: "var(--hit-grey-700)",
          800: "var(--hit-grey-800)",
        },

        "hit-blue": {
          DEFAULT: "var(--hit-blue-500)",
          "50-tr": "var(--hit-blue-50-tr)",
          50: "var(--hit-blue-50)",
          100: "var(--hit-blue-100)",
          200: "var(--hit-blue-200)",
          300: "var(--hit-blue-300)",
          400: "var(--hit-blue-400)",
          500: "var(--hit-blue-500)",
        },

        "hit-purple": {
          DEFAULT: "var(--hit-purple-500)",
          "50-tr": "var(--hit-purple-50-tr)",
          50: "var(--hit-purple-50)",
          100: "var(--hit-purple-100)",
          200: "var(--hit-purple-200)",
          300: "var(--hit-purple-300)",
          400: "var(--hit-purple-400)",
          500: "var(--hit-purple-500)",
        },

        "hit-red": {
          DEFAULT: "var(--hit-red-500)",
          "50-tr": "var(--hit-red-50-tr)",
          50: "var(--hit-red-50)",
          100: "var(--hit-red-100)",
          200: "var(--hit-red-200)",
          300: "var(--hit-red-300)",
          400: "var(--hit-red-400)",
          500: "var(--hit-red-500)",
        },

        "hit-success": {
          DEFAULT: "var(--hit-success-500)",
          "50-tr": "var(--hit-success-50-tr)",
          50: "var(--hit-success-50)",
          100: "var(--hit-success-100)",
          200: "var(--hit-success-200)",
          300: "var(--hit-success-300)",
          400: "var(--hit-success-400)",
          500: "var(--hit-success-500)",
        },

        "hit-warning": {
          DEFAULT: "var(--hit-warning-500)",
          "50-tr": "var(--hit-warning-50-tr)",
          50: "var(--hit-warning-50)",
          100: "var(--hit-warning-100)",
          200: "var(--hit-warning-200)",
          300: "var(--hit-warning-300)",
          400: "var(--hit-warning-400)",
          500: "var(--hit-warning-500)",
        },

        "hit-error": {
          DEFAULT: "var(--hit-error-500)",
          "50-tr": "var(--hit-error-50-tr)",
          50: "var(--hit-error-50)",
          100: "var(--hit-error-100)",
          200: "var(--hit-error-200)",
          300: "var(--hit-error-300)",
          400: "var(--hit-error-400)",
          500: "var(--hit-error-500)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.lg") },
        p: { fontSize: theme("fontSize.sm") },
        small: { fontSize: theme("fontSize.xs") },
      });
    }),
  ],
};

