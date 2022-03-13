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
        label: [
          "Recursive",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        "label-mono": [
          "Recursive",
          "ui-monospace",
          "SFMono-Regular",
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
            h1: { color: theme("colors.slate.300") },
            h2: {
              // color: theme("colors.gray.800"),
              fontFamily: `${theme("fontFamily.sans")}`,
              fontWeight: 700,
            },
            h3: {
              color: theme("colors.gray.600"),
              fontWeight: 400,
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
        dark: {
          css: {
            // color: theme("colors.gray.900"),
            a: {
              "text-decoration": "none",
              "&:hover, &.active": {},
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.blue.100"),
            },
            h3: {
              color: theme("colors.gray.200"),
              fontWeight: 400,
            },
            h4: {
              color: theme("colors.gray.50"),
            },
            h5: {
              color: theme("colors.gray.400"),

              "& a": {
                // lineHeight: `calc(0.9em * 1.7)`,
                // display: "inline-block",
                background: `${theme("colors.transparent")} !important`,

                "&:hover, &.active": {},
              },
            },
            code: {
              color: theme("colors.gray.800"),
              "background-color": theme("colors.gray.50"),
              "&:before, &:after": {
                display: "none",
              },
            },
            p: {
              color: theme("colors.gray.50"),
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
