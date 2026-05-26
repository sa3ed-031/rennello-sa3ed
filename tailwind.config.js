// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39E079", // الاخضر
        secondary: "#F3F4F6", // رمادي فاتح
        secondary_font: "#7E8591",
        primary_black_font: "#000000",
        primary_white_font: "#FFFFFF",
      },

      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.1)",
        strong: "0 10px 25px rgba(0,0,0,0.25)",
      },

      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
