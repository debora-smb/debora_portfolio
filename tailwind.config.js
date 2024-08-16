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
        grey: '#5c636e'
      }
    },
  },
  plugins: [],
};
