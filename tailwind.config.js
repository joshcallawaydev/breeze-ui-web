/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    animation: {
      "breeze-ocean": "bgAnimation 5s ease infinite",
      'breeze-bold': 'boldBgAnimation 7s ease infinite',
    },
    keyframes: {
      bgAnimation: {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
      boldBgAnimation: {
        '0%': { backgroundPosition: '0% 0%' },
        '50%': { backgroundPosition: '100% 100%' },
        '100%': { backgroundPosition: '0% 0%' },
      },
    },
    backgroundSize: {
      '400%': '400% 400%',
    },
  },
  plugins: [],
};
