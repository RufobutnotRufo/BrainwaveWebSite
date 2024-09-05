

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "max-widjt": { max: "1840px" },
    },
    extend: {
      colors: {
        "white-opacity-80": "rgba(255, 255, 255, 0.5)", // #FFFFFF80
      },
      fontFamily: {
        sans: ['"Source Code Pro"', "monospace"],
        sansSec: ['"Sora"', "sans-serif"],
      },
      screens: {
        "burger-menu-825": "825px", // Добавление кастомного медиа-запроса
      },
      backgroundImageRobot: {
        'custom-image': "url('')",
      },
    },
  },
  plugins: [],
};
