import type { Config } from "tailwindcss";

const config: Config = {
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
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#194B67", // rgb(38 105 160)
      },
      spacing: {
        5.5: "22px",
        "22px": "22px",
        13: "3.25rem",
        17: "68px",
        "18px": "18px",
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
    },
  },
  jit: true,
  plugins: [],
};

export default config;
