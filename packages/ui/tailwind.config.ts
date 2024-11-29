import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}" // Include all file types where Tailwind classes are used
  ],
  prefix: "",
  presets: [sharedConfig]
};

export default config;
