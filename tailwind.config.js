/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        lightMain: "#D9D9DC",
        lightDark: "#C8C8CB",
        lightDarker: "#ACACB0",
        darkLighter: "#737373",
        darkLight: "#363738",
        darkMain: "#1B1E22",
        firstLighter: "#CBCDFD",
        firstLight: "#8C90FA",
        firstMain: "#6F73D2",
        secondLighter: "#83D49F",
        secondLight: "#57A773",
        secondMain: "#417B5A",
        thirdLight: "#A9696A",
        thirdMain: "#D18283",
        bgDarkMain: "#171A1FFD",
        bgModalOverlay: "#171A1FED",
      },
      height: {
        navHeight: "70px",
      },
      maxWidth: {
        "screen-3xl": "2000px", // max width for content container
      },
      maxHeight: {
        "screen-3xl": "1100px", // max height for content container
      },
    },
  },
  safelist: [
    {
      pattern:
        /(text|bg|top)-(lightMain|darkMain|firstLight|firstMain|secondLight|secondMain|thirdLight|thirdMain|navHeight)/,
      variants: ["hover"],
    },
    {
      pattern: /(text)-(lg|xl|2xl|3xl|4xl|5xl)/,
    },
  ],
  plugins: [],
};
