/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '922px',
        xl: '1200px',
        '2xl': '1400px'
      },
      animation: {
        'arrow-bounce': 'arrow-bounce 1.5s linear infinite',
      },
      keyframes: {
        'arrow-bounce': {
          '0%, 100%': { transform: 'translatex(25%)' },
          '50%': { transform: 'translatex(0)' },
        }
      }
    },
  },
  plugins: [],
}