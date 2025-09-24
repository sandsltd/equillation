/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#dcf0eb',
          200: '#bce1d9',
          300: '#90ccc0',
          400: '#62b1a3',
          500: '#459688',
          600: '#377a6f',
          700: '#2f635a',
          800: '#2a5049',
          900: '#26423d',
        },
        earth: {
          50: '#faf8f3',
          100: '#f2eddf',
          200: '#e4d8bf',
          300: '#d2bd96',
          400: '#c0a26e',
          500: '#b08d54',
          600: '#9f7a47',
          700: '#85643c',
          800: '#6d5235',
          900: '#5a442e',
        },
        sage: {
          50: '#f6f7f5',
          100: '#e9eee6',
          200: '#d4ddce',
          300: '#b4c3a9',
          400: '#91a280',
          500: '#748562',
          600: '#5c6a4c',
          700: '#48543d',
          800: '#3c4533',
          900: '#343b2d',
        }
      },
      fontFamily: {
        'serif': ['Crimson Pro', 'Georgia', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}
