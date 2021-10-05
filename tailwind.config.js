module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/theme/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Spartan"', "system-ui"],
    },
    extend: {
      colors: {
        background: {
          "screen-1": "hsl(224, 36%, 15%)",
          "main-1": "hsl(222, 26%, 31%)",
          "other-1": "hsl(223, 31%, 20%)",

          "screen-2": "hsl(0, 0%, 93%)",
          "main-2": "hsl(0, 0%, 90%)",
          "other-2": "hsl(0, 5%, 81%)",

          "screen-3": "hsl(268, 71%, 12%)",
          "main-3": "hsl(268, 75%, 9%)",
          "other-3": "hsl(268, 71%, 12%)",
        },
        key: {
          "bg-1-1": "hsl(30, 25%, 89%)",
          "shadow-1-1": "hsl(28, 16%, 65%)",
          "bg-2-1": "hsl(225, 21%, 49%)",
          "shadow-2-1": "hsl(224, 28%, 35%)",
          "bg-3-1": "hsl(6, 63%, 50%)",
          "shadow-3-1": "hsl(6, 70%, 34%)",

          "bg-1-2": "hsl(45, 7%, 89%)",
          "shadow-1-2": "hsl(35, 11%, 61%)",
          "bg-2-2": "hsl(185, 42%, 37%)",
          "shadow-2-2": "hsl(185, 58%, 25%)",
          "bg-3-2": "hsl(25, 98%, 40%)",
          "shadow-3-2": "hsl(25, 99%, 27%)",

          "bg-1-3": "hsl(268, 47%, 21%)",
          "shadow-1-3": "hsl(290, 70%, 36%)",
          "bg-2-3": "hsl(281, 89%, 26%)",
          "shadow-2-3": "hsl(285, 91%, 52%)",
          "bg-3-3": "hsl(176, 100%, 44%)",
          "shadow-3-3": "hsl(177, 92%, 70%)",
        },
        text: {
          "dark-1": "hsl(221, 14%, 31%)",
          "white-1": "hsl(0, 0%, 100%)",

          "dark-2": "hsl(60, 10%, 19%)",
          "white-2": "hsl(0, 0%, 100%)",

          "dark-3": "hsl(198, 20%, 13%)",
          "white-3": "hsl(0, 0%, 100%)",
          "yellow-3": "hsl(52, 100%, 62%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
