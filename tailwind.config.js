/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
