import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-orange': '#FFA500',
        'custom-deep-orange': '#FF4500',
      },
      animation: {
        "breeze-ocean": "bgAnimation 10s ease infinite",
        "breeze-bold": "boldBgAnimation 7s ease infinite",
        "breeze-pulse": "borderPulse 7s ease infinite",
        "breeze-border-fade": "borderColorChange 10s ease-in-out infinite",
        "breeze-border-rotate": "borderRotate 4s linear infinite",
        "breeze-rotate": "rotate 10s linear infinite",
        'gradient-move': 'gradient 10s ease infinite',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(80deg, #CF4D6F, #FFC099, #78FFD6, #9F84BD)',
      },
      keyframes: {
        bgAnimation: {
          "0%": { backgroundPosition: "0% 75%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        boldBgAnimation: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        borderPulse: {
          "0%": { borderColor: "#9f0a18" },
          "50%": { borderColor: "#007CF0" },
          "100%": { borderColor: "#FF6EC7" },
        },
        borderColorChange: {
          "0%": { borderColor: "#ff914d" }, // blue
          "25%": { borderColor: "#6BA292" }, // green
          "50%": { borderColor: "#35CE8D" }, // yellow
          "75%": { borderColor: "#BCD8B7" }, // red
          "100%": { borderColor: "#ff914d`" }, // blue again
        },
        borderRotate: {
          "0%": { borderColor: "#3490dc transparent transparent transparent" }, // top blue
          "25%": { borderColor: "transparent #38c172 transparent transparent" }, // right green
          "50%": { borderColor: "transparent transparent #ffed4a transparent" }, // bottom yellow
          "75%": { borderColor: "transparent transparent transparent #e3342f" }, // left red
          "100%": {
            borderColor: "#3490dc transparent transparent transparent",
          }, // back to top blue
        },
        borderSlide: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
