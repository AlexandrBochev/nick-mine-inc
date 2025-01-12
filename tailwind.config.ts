import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1200",
      lg: "1800",
    },
    extend: {
      colors: {
        background: "#201818",
        accent: "#E80004",
        primary: "#7E6969",
        secondery: "#2F2424",
        tertiary: "#5D4D4D",
        extra: "#453535",
        light: "#988080",
        extraLight: "#C9B1B1",
      },
      container: {
        padding: {
          DEFAULT: "1.25rem",
          md: "1.875rem",
        },
      },
      spacing: {
        1.75: "0.4375rem",
        2.4: "0.6rem",
        2.7: "0.675rem",
        3.5: "0.875rem",
        3.8: "0.95rem",
        5.5: "1.375rem",
        6.1: "1.525rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        11.5: "2.875rem",
        11.75: "2.9375rem",
        12.5: "3.125rem",
        16.5: "4.125rem",
        17.5: "4.375rem",
        18: "4.5rem",
        22: "5.5rem",
        107.5: "26.875rem",
        142: "35.5rem",
        157.5: "39.375rem",
        200: "50rem",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        xsm: "0.875rem",
        base: "1rem",
        md: "1.375rem",
        lg: "1.625rem",
        xl: "2.25rem",
      },
      lineHeight: {
        0: "0",
      },
      borderRadius: {
        xs: "0.0625rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
