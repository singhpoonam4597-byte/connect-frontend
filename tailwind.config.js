/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A84FF',
        dark: {
          50: '#f5f5f5',
          700: '#2C2C2E',
          800: '#1C1C1E',
          900: '#0A0A0B',
        },
      },
    },
  },
  plugins: [],
};
