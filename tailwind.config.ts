import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
      keyframes: {
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },
      animation: {
        slideFromTop: 'slideFromTop 1s ease-out',
        slideFromBottom: 'slideFromBottom 1s ease-out',
        fadeIn: 'fadeIn 2s ease-in-out'
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
