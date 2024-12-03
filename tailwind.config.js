/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '520px' },
        md: { max: '768px' },
        lg: { max: '992px' },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        grey: {
          100: '#FAFAFA',
          200: '#F1F1F1',
        },
        black: {
          100: '#101010',
          200: '#000000',
        },
        orange: {
          100: '#FBAF85',
          200: '#D87D4A',
        },
      },
    },
  },
  plugins: [],
}
