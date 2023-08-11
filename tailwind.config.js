/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9e9bf2",
        "primary-hover": "#6F61C0",
        // secondary: "",
        // scondaryHover: "",
        light: "#f2f2f2",
        success: "#00acee",
        danger: "#FE0000",
      },
    },
  },
  plugins: [],
};
