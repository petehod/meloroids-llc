import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        primary: "#3b75e5",
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
        green: "#37E1EC",
        red: "#EE1515",
        deny: "#EE1515",
        denyLight: "rgba(238, 21, 21, 0.1)",
        confirm: "#177055",
        confirmLight: "#7CD7BC",
      },
    },
  },
  plugins: [],
};
export default config;
