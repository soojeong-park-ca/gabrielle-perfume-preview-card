/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        tablet: "26.5625em",
        desktop: "64em",
      },
      colors: {
        "cyan-dark": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "blue-dark": "hsl(212, 21%, 14%)",
        "blue-dark-grayish": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontSize: {
        xs: [".75rem", 1.3],
        sm: [".8rem", 1.5],
        base: [".875rem", 1.7],
        xl: ["1.95rem", 1.05],
      },
      letterSpacing: {
        widest: ".45em",
      },
    },
  },
  plugins: [],
};
