/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ivyPresto: ['IvyPrestoDisplay', 'sans-serif'],
        archivo: ['ArchivBlack', 'sans-serif'],
        avenir: ['AvenirLight', 'sans-serif'],
      },
      colors: {
        black: '#111',
        white: '#f7f7f7',
        yellow: '#f8b500',
        grey: '#5c636e',
        greyText: '#313131a2',
        blackOverlay: 'rgba(0, 0, 0, 0.55)',
      },
      keyframes: {
        fadeInOut1: {
          '0%, 80%': { opacity: '1' },
          '90%, 100%': { opacity: '0.5' },
        },
        fadeInOut2: {
          '33%, 80%': { opacity: '1' },
          '0%, 23%, 90%, 100%': { opacity: '0.5' },
        },
        fadeInOut3: {
          '63%, 80%': { opacity: '1' },
          '0%, 53%, 90%, 100%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeInOut1: 'fadeInOut1 5s infinite',
        fadeInOut2: 'fadeInOut2 5s infinite',
        fadeInOut3: 'fadeInOut3 5s infinite',
      },
    },
  },
  plugins: [],
};
