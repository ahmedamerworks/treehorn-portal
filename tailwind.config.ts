import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#007ea7",
          secondary: "#003459",
          accent: "#00A8E8",
          neutral: "#FFFFFF",
          "base-100": "#00171F",
          info: "#5E239D",
          success: "#6FD08C",
          warning: "#E6C79C",
          error: "#F61067",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
