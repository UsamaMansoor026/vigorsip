/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        n: {
          1: "rgb(156, 163, 175)",
        },
      },

      backgroundImage: {
        contactSection: "url('./src/assets/gallery1.jpg')",
      },
    },
  },
  plugins: [],
};
