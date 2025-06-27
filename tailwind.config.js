/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-white': '#FFFFFF',
        'vintage-black': '#000000',
        'vintage-grey': '#4A4A4A',
        'vintage-light-grey': '#E5E5E5',
        'vintage-dark-grey': '#2A2A2A',
        'vintage-gold': '#D4AF37',
        'vintage-silver': '#C0C0C0',
        'vintage-charcoal': '#333333',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
