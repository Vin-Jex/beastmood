/**
  @type {import('tailwindcss').Config} 
*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#FF3B3B",
        warning: "#FFCC00",
        info: "#0063F7",
        success: "#06C270",
        "main-brand": "#FF5E03",
        "dark-brand": "#D14B00",
        "light-brand": "#FF9115",
        "subtle-brand": "#FF5E0342",
        "main2-brand": "#FFD64E",
        "dark2-brand": "#FAA600",
        "light2-brand": "##FFDF75",
        dark: "#3A3A3C",
        dark2: "#6B7588",
        dark3: "#8F90A6",
        dark4: "#C7C9D9",
        light: "#DDE5E9",
        light2: "#EBEBF0",
        light3: "#F2F2F5",
        light4: "#FAFAFC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
