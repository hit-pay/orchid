/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [ "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "oc-primary": {
          DEFAULT: "var(--oc-primary-500)",
          "50-tr": "var(--oc-primary-50-tr)",
          50: "var(--oc-primary-50)",
          100: "var(--oc-primary-100)",
          200: "var(--oc-primary-200)",
          300: "var(--oc-primary-300)",
          400: "var(--oc-primary-400)",
          500: "var(--oc-primary-500)",
          600: "var(--oc-primary-600)",
        },
        "oc-text": {
          DEFAULT: "var(--oc-text-500)",
          "000": "var(--oc-text-000)",
          200: "var(--oc-text-200)",
          300: "var(--oc-text-300)",
          400: "var(--oc-text-400)",
          500: "var(--oc-text-500)",
        },
        "oc-bg": {
          DEFAULT: "var(--oc-background-blue)",
          blue: "var(--oc-background-blue)",
          woce: "var(--oc-background-woce)",
        },
        contast: {
          DEFAULT: "var(--oc-contrast-black)",
          black: "var(--oc-contrast-black)",
          woce: "var(--oc-contrast-woce)",
        },
        "oc-grey": {
          DEFAULT: "var(--oc-grey-100)",
          50: "var(--oc-grey-50)",
          100: "var(--oc-grey-100)",
          200: "var(--oc-grey-200)",
          300: "var(--oc-grey-300)",
          400: "var(--oc-grey-400)",
          500: "var(--oc-grey-500)",
          600: "var(--oc-grey-600)",
          700: "var(--oc-grey-700)",
          800: "var(--oc-grey-800)",
        },

        "oc-blue": {
          DEFAULT: "var(--oc-blue-500)",
          "50-tr": "var(--oc-blue-50-tr)",
          50: "var(--oc-blue-50)",
          100: "var(--oc-blue-100)",
          200: "var(--oc-blue-200)",
          300: "var(--oc-blue-300)",
          400: "var(--oc-blue-400)",
          500: "var(--oc-blue-500)",
        },

        "oc-purple": {
          DEFAULT: "var(--oc-purple-500)",
          "50-tr": "var(--oc-purple-50-tr)",
          50: "var(--oc-purple-50)",
          100: "var(--oc-purple-100)",
          200: "var(--oc-purple-200)",
          300: "var(--oc-purple-300)",
          400: "var(--oc-purple-400)",
          500: "var(--oc-purple-500)",
        },

        "oc-red": {
          DEFAULT: "var(--oc-red-500)",
          "50-tr": "var(--oc-red-50-tr)",
          50: "var(--oc-red-50)",
          100: "var(--oc-red-100)",
          200: "var(--oc-red-200)",
          300: "var(--oc-red-300)",
          400: "var(--oc-red-400)",
          500: "var(--oc-red-500)",
        },

        "oc-success": {
          DEFAULT: "var(--oc-success-500)",
          "50-tr": "var(--oc-success-50-tr)",
          50: "var(--oc-success-50)",
          100: "var(--oc-success-100)",
          200: "var(--oc-success-200)",
          300: "var(--oc-success-300)",
          400: "var(--oc-success-400)",
          500: "var(--oc-success-500)",
        },

        "oc-warning": {
          DEFAULT: "var(--oc-warning-500)",
          "50-tr": "var(--oc-warning-50-tr)",
          50: "var(--oc-warning-50)",
          100: "var(--oc-warning-100)",
          200: "var(--oc-warning-200)",
          300: "var(--oc-warning-300)",
          400: "var(--oc-warning-400)",
          500: "var(--oc-warning-500)",
        },

        "oc-error": {
          DEFAULT: "var(--oc-error-500)",
          "50-tr": "var(--oc-error-50-tr)",
          50: "var(--oc-error-50)",
          100: "var(--oc-error-100)",
          200: "var(--oc-error-200)",
          300: "var(--oc-error-300)",
          400: "var(--oc-error-400)",
          500: "var(--oc-error-500)",
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

