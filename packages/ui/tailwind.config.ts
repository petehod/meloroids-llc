import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/utils.**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/constants/**/*.{js,ts,jsx,tsx}",
    "../../apps/gunna-type-beat/**/*{.js,.ts,.jsx,.tsx}"
  ],
  prefix: "",
  presets: [sharedConfig]
};

export default config;
