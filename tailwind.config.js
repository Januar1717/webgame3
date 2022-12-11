/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 28px 13px rgba(245, 56, 0, 0.2)',
      },
    },
  },
  plugins: [],
}