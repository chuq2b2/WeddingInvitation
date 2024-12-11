import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'sm-plus': '14px', // A size between sm and md
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'], // Adding Fraunces font to Tailwind's theme
      },
    },
  },
  plugins: [],
} satisfies Config;
