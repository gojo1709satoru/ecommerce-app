import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#EAF0F7",
          100: "#CBD9EA",
          200: "#9CB4D2",
          300: "#6D8FB9",
          400: "#3E6AA1",
          500: "#1F4E82",
          600: "#153A63",
          700: "#0B2545",
          800: "#081B33",
          900: "#050F1D",
        },
        olive: {
          DEFAULT: "#556B2F",
          50: "#F2F5EA",
          100: "#DEE6C5",
          200: "#C4D19C",
          300: "#A9BC73",
          400: "#8EA84C",
          500: "#728A38",
          600: "#556B2F",
          700: "#425324",
          800: "#2F3B19",
          900: "#1B220E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E7",
          100: "#F4E7BE",
          200: "#ECD696",
          300: "#E4C56D",
          400: "#DCB94F",
          500: "#D4AF37",
          600: "#B4922B",
          700: "#8C7222",
          800: "#645218",
          900: "#3C310E",
        },
        ink: "#222222",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(11, 37, 69, 0.12)",
        "card-hover": "0 12px 30px -8px rgba(11, 37, 69, 0.25)",
        gold: "0 4px 20px -4px rgba(212, 175, 55, 0.35)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(11,37,69,0.95) 0%, rgba(11,37,69,0.85) 55%, rgba(85,107,47,0.85) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
