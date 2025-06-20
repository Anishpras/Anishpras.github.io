/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#020c1b',
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
      },
      fontFamily: {
        sans: [
          'Calibre',
          'Inter',
          'San Francisco',
          'SF Pro Text',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        xxs: '12px',
        xs: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        heading: '32px',
      },
      spacing: {
        'nav-height': '100px',
        'nav-scroll-height': '70px',
        'tab-height': '42px',
        'tab-width': '120px',
        'hamburger-width': '30px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      transitionDuration: {
        custom: '0.25s',
      },
      animation: {
        fadeup: 'fadeup 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)',
        fadedown: 'fadedown 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)',
        fadein: 'fadein 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      keyframes: {
        fadeup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fadedown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      boxShadow: {
        custom: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'custom-hover': '0 20px 30px -15px rgba(2, 12, 27, 0.7)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
