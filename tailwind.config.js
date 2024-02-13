/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pink-gradient": "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)",
      },
    },
  },
  plugins: [],
};
