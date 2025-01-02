/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(-180deg, rgba(0,0,0,0.9), rgba(0,0,0,1)), url('https://i.ebayimg.com/images/g/BVMAAOSw1uNhenX7/s-l1600.jpg')",
      },
      opacity: {
        '15': '0.15',
        '50': '0.50',
      },
    },
  },
  plugins: [],
}

