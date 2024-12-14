import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  content: [
    "./src/app/**/*.{tsx,ts}",
    "./src/components/**/*.{tsx,ts}",
    "./src/utils/**/*.{tsx,ts}",
    "./src/constants/**/*.{tsx,ts}",
    "../ui/src/**/*.{tsx,ts}",
    "../../apps/gunna-type-beat/src/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)"
      },
      colors: {
        primary: "#612B99",
        primaryFaded: "rgba(202, 108, 248, 0.15)",
        secondary: "#C9ABD9",
        tertiary: "#EFECF0",
        quad: "#423D47",
        white: "#ffffff",
        light: "#E1E1E1",
        medium: "#7D7D7D",
        dark: "#2c2c2c",
        darkScreen: "rgba(44,44,44,0.6)",
        darklight: "rgba(44,44,44,0.85)",
        black: "#111111",
        blue: "#3B7EE2",
        green: "#4BB543",
        red: "#EE1515",
        deny: "#EE1515",
        denyLight: "rgba(238, 21, 21, 0.1)",
        confirm: "#177055",
        confirmLight: "#7CD7BC"
      },
      fontSize: {
        0.625: "0.625rem",
        0.75: "0.75rem",
        0.875: "0.875rem",
        1: "1rem",
        1.125: "1.125rem",
        1.25: "1.25rem",
        1.5: "1.5rem",
        2: "2rem",
        2.5: "2.5rem",
        3: "3rem",
        4: "4rem"
      },
      width: {
        15: "15rem",
        70: "70rem",
        64: "64rem",
        60: "60rem",
        62: "16rem",
        40: "40rem"
      },
      maxWidth: {
        xxxs: "12rem",
        xxs: "16rem",
        660: "660px",
        16: "16rem",
        20: "20rem",

        21: "21rem",
        24: "24rem",
        26: "26rem",
        28: "28rem",
        30: "30rem",
        46: "46rem",
        48: "48rem",
        58: "58rem",
        60: "60rem",
        70: "70rem",
        112: "28rem"
      },
      flex: {
        "2": "2 2 0%"
      },
      borderWidth: {
        "1": "1px"
      }
    }
  },
  plugins: [],
  safelist: ["bg-green", "bg-red"] // Tailwind will purge "unused" styles -> that's why these weren't working as they were being used in a function calculation
};
export default config;
