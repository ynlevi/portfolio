/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // dk === "dark"
        //lt === "light"
        "dk-primary": "#e5b8f4",
        "dk-primary-bg": "#2d033b",
        "dk-secondary": "#FDFFAE",
        "dk-secondary-bg": "#810ca8",
        // scondaryHover: "",

        success: "#00acee",
        danger: "#FE0000",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      boxShadow: {
        castum: "var(--dk-primary) 0px 3px 8px",
      },
    },
  },
};
