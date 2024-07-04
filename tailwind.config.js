/** @type {import('tailwindcss').Config} */

 import plugin from 'tw-elements-react/dist/plugin.cjs';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#242424",
      grey: "#F3F3F3",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
      orange: "#F07946",
    },

    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },

    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        jost: ["Jost", "sans-serif"],
        
          libre: ['"Yuji Boku"', "sans-serif"]
        
      },
    },
  },
  darkMode: "class",
  plugins: [plugin],
};
