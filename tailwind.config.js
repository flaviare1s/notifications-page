/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        red: 'hsl(1, 90%, 64%)',
        blue: 'hsl(219, 85%, 26%)',
        very_light_grayish_blue: 'hsl(210, 60%, 98%)',
        light_grayish_blue_1: 'hsl(211, 68%, 94%)',
        light_grayish_blue_2: 'hsl(205, 33%, 90%)',
        grayish_blue: 'hsl(219, 14%, 63%)',
        dark_grayish_blue: 'hsl(219, 12%, 42%)',
        very_dark_blue: 'hsl(224, 21%, 14%)',
      },
    },
  },
  plugins: [],
}

