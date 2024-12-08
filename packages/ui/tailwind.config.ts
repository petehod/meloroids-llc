import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/utils.**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}"
  ],
  prefix: "",
  presets: [sharedConfig],
  theme: {
    extend: {
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
      }
    }
  }
};

export default config;
