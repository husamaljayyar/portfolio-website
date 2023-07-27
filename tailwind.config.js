/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: () => ({
      100: '800px'
    }),
    maxHeight: () => ({
      //
    }),
    extend: {
      height: () => ({
        70: "70vh",
        80: "80vh",
        300: "300px",
      }),
      width: () => ({
        300: "300px",
        90: "90vw",
        80: "80vw",
        450: "450px",

      }),

      colors: {
        primary: "#ff4800",
        blue: {
          450: "#5F99F7",
        },
        Purple: "#6a5acd",
        black: "#3d3d3d",
        red: "#947195",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
