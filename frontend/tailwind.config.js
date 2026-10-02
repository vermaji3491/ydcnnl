/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        navy2: "#102A43",
        gold: "#D4AF37",
        gold2: "#E5A93B",
        ink: "#243B53"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10,25,47,.10)"
      }
    }
  },
  plugins: []
};