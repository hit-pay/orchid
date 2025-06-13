import tailwindcssAnimate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './packages/core/src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/dashboard/src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: [
        '0.625rem',
        {
          lineHeight: '1.125rem'
          // letterSpacing: '-0.01em',
        }
      ],
      sm: [
        '0.75rem',
        {
          lineHeight: '1.125rem'
        }
      ],
      base: [
        '0.875rem',
        {
          lineHeight: '1.125rem'
        }
      ],
      lg: [
        '1rem',
        {
          lineHeight: '1.4rem'
        }
      ],
      xl: [
        '1.125rem',
        {
          lineHeight: '1.35rem'
        }
      ]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    borderRadius: {
      DEFAULT: 'var(--oc-border-md)',
      xs: 'var(--oc-border-xs)',
      sm: 'var(--oc-border-sm)',
      md: 'var(--oc-border-md)',
      lg: 'var(--oc-border-lg)',
      xl: 'var(--oc-border-xl)',
      xxl: 'var(--oc-border-xxl)',
      full: 'var(--oc-border-full)'
    },
    extend: {
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
        9: '2rem'
      },
      boxShadow: {
        normal: 'var(--oc-shadow-normal)',
        'right-sticky': 'var(--oc-shadow-right-sticky)',
        'left-sticky': 'var(--oc-shadow-left-sticky)',
        tooltip: 'var(--oc-shadow-tooltip)'
      },
      colors: {
        // first to use this
        'oc-text': {
          DEFAULT: 'var(--oc-text-500)',
          100: 'var(--oc-text-100)',
          200: 'var(--oc-text-200)',
          300: 'var(--oc-text-300)',
          400: 'var(--oc-text-400)',
          500: 'var(--oc-text-500)'
        },
        'oc-bg': {
          DEFAULT: 'var(--oc-background-light)',
          dark: 'var(--oc-background-dark)',
          light: 'var(--oc-background-light)'
        },
        // secondary to use this
        'oc-gray': {
          DEFAULT: 'var(--oc-gray-100)',
          50: 'var(--oc-gray-50)',
          100: 'var(--oc-gray-100)',
          200: 'var(--oc-gray-200)',
          300: 'var(--oc-gray-300)',
          400: 'var(--oc-gray-400)',
          500: 'var(--oc-gray-500)',
          600: 'var(--oc-gray-600)',
          700: 'var(--oc-gray-700)',
          800: 'var(--oc-gray-800)',
          900: 'var(--oc-gray-900)'
        },
        'oc-primary': {
          DEFAULT: 'var(--oc-primary-500)',
          '50-tr': 'var(--oc-primary-50-tr)',
          50: 'var(--oc-primary-50)',
          100: 'var(--oc-primary-100)',
          200: 'var(--oc-primary-200)',
          300: 'var(--oc-primary-300)',
          400: 'var(--oc-primary-400)',
          500: 'var(--oc-primary-500)',
          600: 'var(--oc-primary-600)'
        },

        'oc-accent-1': {
          DEFAULT: 'var(--oc-accent-1-500)',
          '50-tr': 'var(--oc-accent-1-50-tr)',
          50: 'var(--oc-accent-1-50)',
          100: 'var(--oc-accent-1-100)',
          200: 'var(--oc-accent-1-200)',
          300: 'var(--oc-accent-1-300)',
          400: 'var(--oc-accent-1-400)',
          500: 'var(--oc-accent-1-500)',
          600: 'var(--oc-accent-1-600)'
        },
        'oc-accent-2': {
          DEFAULT: 'var(--oc-accent-2-500)',
          '50-tr': 'var(--oc-accent-2-50-tr)',
          50: 'var(--oc-accent-2-50)',
          100: 'var(--oc-accent-2-100)',
          200: 'var(--oc-accent-2-200)',
          300: 'var(--oc-accent-2-300)',
          400: 'var(--oc-accent-2-400)',
          500: 'var(--oc-accent-2-500)'
        },
        'oc-accent-3': {
          DEFAULT: 'var(--oc-accent-3-500)',
          '50-tr': 'var(--oc-accent-3-50-tr)',
          50: 'var(--oc-accent-3-50)',
          100: 'var(--oc-accent-3-100)',
          200: 'var(--oc-accent-3-200)',
          300: 'var(--oc-accent-3-300)',
          400: 'var(--oc-accent-3-400)',
          500: 'var(--oc-accent-3-500)'
        },
        'oc-success': {
          DEFAULT: 'var(--oc-success-500)',
          '50-tr': 'var(--oc-success-50-tr)',
          50: 'var(--oc-success-50)',
          100: 'var(--oc-success-100)',
          200: 'var(--oc-success-200)',
          300: 'var(--oc-success-300)',
          400: 'var(--oc-success-400)',
          500: 'var(--oc-success-500)'
        },
        'oc-warning': {
          DEFAULT: 'var(--oc-warning-500)',
          '50-tr': 'var(--oc-warning-50-tr)',
          50: 'var(--oc-warning-50)',
          100: 'var(--oc-warning-100)',
          200: 'var(--oc-warning-200)',
          300: 'var(--oc-warning-300)',
          400: 'var(--oc-warning-400)',
          500: 'var(--oc-warning-500)',
          600: 'var(--oc-warning-600)'
        },
        'oc-error': {
          DEFAULT: 'var(--oc-error-500)',
          '50-tr': 'var(--oc-error-50-tr)',
          50: 'var(--oc-error-50)',
          100: 'var(--oc-error-100)',
          200: 'var(--oc-error-200)',
          300: 'var(--oc-error-300)',
          400: 'var(--oc-error-400)',
          500: 'var(--oc-error-500)'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono]
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--reka-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--reka-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [tailwindcssAnimate]
}
