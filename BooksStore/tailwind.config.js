/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#3c5ac4",
        "primaryhover":"#738be3",
        "bluebg":"#e4ecfa",
        "bgdarck":"rgba(0, 0, 0, 0.845)",
      }
    },
  },
  plugins: [],
}

