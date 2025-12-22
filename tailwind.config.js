/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: "#466849",
        primaryLight: "#537a5a",
        secondary: "#796657"
      }
    },
  },
  plugins: [],
}

