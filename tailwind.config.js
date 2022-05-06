/* eslint-disable */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        almostblack: "hsl(221, 30%, 7%)",
        white: "#fff",
      },
      fontSize: {
        xxs: ".625rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        display2: ["Space Mono", ...defaultTheme.fontFamily.sans],
        fraunces: [
          "'Fraunces script=latin rev=1'",
          // "Fraunces script=latin rev=1",
          "sans-serif",
          "Arial",
          ...defaultTheme.fontFamily.serif,
        ],
        serif: [
          "EB Garamond",
          // "Fraunces script=latin rev=1",
          "sans-serif",
          "Arial",
          ...defaultTheme.fontFamily.serif,
        ],
        // frauncestest: [
        //   "Fraunces script=latin rev=1",
        //   "sans-serif",
        //   "Arial",
        //   ...defaultTheme.fontFamily.serif,
        // ],

        playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],

        ebgaramond: ["EB Garamond", ...defaultTheme.fontFamily.serif],

        mono: [
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      typography: (theme) => ({
        // https://sergiodxa.com/articles/use-tailwindcss-typography-with-dark-mode-styles
        // Reference custom fontFamily: https://github.com/tailwindlabs/tailwindcss-typography/issues/14
        DEFAULT: {
          css: {
            // color: theme("colors.slate.400"),

            p: {
              fontFamily: `${theme("font-serif")}`,
            },
            a: {
              transition: "all 0.15s ease-in",

              lineHeight: `1.7`,
              display: "inline-block",
              "text-decoration": "none",
              "&:hover, &.active": {},
              "text-decoration": "none",
              paddingRight: `${theme("padding[1]")}`,
              paddingLeft: `${theme("padding[1]")}`,
              fontWeight: "false",
              display: "inline-block",
            },
            h1: {
              fontFamily: `${theme("font-serif")}`,
              color: `${theme("color.gray.900")}`,
            },
            h2: {
              // color: theme("colors.gray.800"),
              fontFamily: `${theme("fontFamily.sans")}`,
              fontWeight: 700,
            },
            h3: {
              color: theme("colors.gray.600"),
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            h5: {
              color: theme("colors.gray.500"),
              fontSize: "0.9em",
              lineHeight: `1.8em`,
              "& a": {
                display: "inline",
                padding: `0px !important`,
                background: `${theme("colors.transparent")} !important`,
                "&:hover, &.active": {},
              },
            },
            code: {
              color: theme("colors.gray.50"),
              "background-color": theme("colors.gray.800"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.800"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
