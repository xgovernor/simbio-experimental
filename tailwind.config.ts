import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-geist-sans)'],
      //   mono: ['var(--font-geist-mono)'],
      // },
      colors: {
        primary: "#194B67", // rgb(38 105 160)
        blue: "#0077CC",
        green: "#00BFB3",
        yellow: "#FEC514",
        dark: "343741",
      },
      spacing: {
        13: "3.25rem",
        17: "68px",
        100: "100px",
      },
      width: {
        13: "3.25rem",
        17: "4.25rem",
        25: "100px",
        33: "132px",
        45: "180px",
        88: "250px",
        112: "28rem",
      },
      minWidth: {
        13: "3.25rem",
        17: "4.25rem",
        25: "100px",
        33: "132px",
        45: "180px",
        88: "250px",
        "1/2": "50%",
        "1/3": "calc(100% / 3)",
        "2/3": "calc((100% / 3)* 2)",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        112: "28rem",
      },
      maxWidth: {
        13: "3.25rem",
        17: "4.25rem",
        25: "100px",
        33: "132px",
        45: "180px",
        88: "250px",
        "1/2": "50%",
        "1/3": "calc(100% / 3)",
        "2/3": "calc((100% / 3)* 2)",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        112: "28rem",
      },
      height: {
        13: "3.25rem",
        17: "4.25rem",
        40: "160px",
        43: "172px",
        45: "180px",
        55: "220px",
        112: "28rem",
      },
      minHeight: {
        13: "3.25rem",
        17: "4.25rem",
        40: "160px",
        43: "172px",
        45: "180px",
        55: "220px",
        112: "28rem",
      },
      maxHeight: {
        13: "3.25rem",
        17: "4.25rem",
        40: "160px",
        43: "172px",
        45: "180px",
        55: "220px",
        112: "28rem",
      },
      zIndex: {
        1: "1",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  jit: true,
  plugins: [require("tailwindcss-animate")],
};

export default config;
