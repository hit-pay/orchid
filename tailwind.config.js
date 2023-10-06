/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/@orchidui-vue/src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@orchidui/vue/dist/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      'xs': ['0.625rem', {
        lineHeight: '1.5rem',
        // letterSpacing: '-0.01em',
      }],
      'sm': ['0.75rem', {
        lineHeight: '1.5rem',
      }],
      'base': ['0.875rem', {
        lineHeight: '1.5rem',
      }],
      'lg': ['1rem', {
        lineHeight: '1.4rem',
      }],
      'xl': ['1.125rem', {
        lineHeight: '1.35rem',
      }],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '.75rem',
      5: '1rem',
      6: '1.25rem',
      7: '1.5rem',
      8: '1.75rem',
      9: '2rem',
      10: '2.5rem',
    },
    borderRadius: {
      DEFAULT: 'var(--oc-border-md)',
      'xs': 'var(--oc-border-xs)',
      'sm': 'var(--oc-border-sm)',
      'md': 'var(--oc-border-md)',
      'lg': 'var(--oc-border-lg)',
      'xl': 'var(--oc-border-xl)',
      'full': 'var(--oc-border-full)',
    },
    extend: {
      colors: {
        // first to use this 
        "oc-text": {
          DEFAULT: "var(--oc-text-500)",
          "000": "var(--oc-text-000)",
          200: "var(--oc-text-200)",
          300: "var(--oc-text-300)",
          400: "var(--oc-text-400)",
          500: "var(--oc-text-500)",
        },
        "oc-bg": {
          DEFAULT: "var(--oc-background-light)",
          dark: "var(--oc-background-dark)",
          light: "var(--oc-background-light)",
        },
         // secondary to use this
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
          900: "var(--oc-grey-900)",
        },
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
        "oc-accent-1": {
          DEFAULT: "var(--oc-accent-1-500)",
          "50-tr": "var(--oc-accent-1-50-tr)",
          50: "var(--oc-accent-1-50)",
          100: "var(--oc-accent-1-100)",
          200: "var(--oc-accent-1-200)",
          300: "var(--oc-accent-1-300)",
          400: "var(--oc-accent-1-400)",
          500: "var(--oc-accent-1-500)",
        },
        "oc-accent-2": {
          DEFAULT: "var(--oc-accent-2-500)",
          "50-tr": "var(--oc-accent-2-50-tr)",
          50: "var(--oc-accent-2-50)",
          100: "var(--oc-accent-2-100)",
          200: "var(--oc-accent-2-200)",
          300: "var(--oc-accent-2-300)",
          400: "var(--oc-accent-2-400)",
          500: "var(--oc-accent-2-500)",
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
      }
    },
  }
};
