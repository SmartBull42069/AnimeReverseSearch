import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
        // 100% is not required as max-w-full will be present by default
      },
      colors: {
        myColor: "rgb(255, 255, 240)",
      },
    },
  },
  plugins: [],
};
export default config;
