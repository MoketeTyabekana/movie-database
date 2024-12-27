/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
      },
    },
  },
  plugins: [],
}

