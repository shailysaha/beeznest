/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

theme: {
extend: {
colors: {
brand: {
50: "#F0FAF3",
100: "#DCF3E3",
200: "#BDE8CB",
300: "#94D8AB",
400: "#6BC48C",
700: "#2F855A",
900: "#14532D",
},
},


  boxShadow: {
    soft: "0 10px 30px rgba(20, 83, 45, 0.08)",
    lift: "0 20px 50px rgba(20, 83, 45, 0.14)",
    glow: "0 0 60px rgba(148, 216, 171, 0.55)",
  },

  borderRadius: {
    "4xl": "2rem",
  },

  keyframes: {
    float: {
      "0%, 100%": {
        transform: "translateY(0)",
      },
      "50%": {
        transform: "translateY(-8px)",
      },
    },

    drift: {
      "0%, 100%": {
        transform: "translate(0, 0)",
      },
      "50%": {
        transform: "translate(20px, -14px)",
      },
    },

    shine: {
      "0%": {
        transform: "translateX(-120%)",
      },
      "100%": {
        transform: "translateX(120%)",
      },
    },
  },

  animation: {
    float: "float 6s ease-in-out infinite",
    drift: "drift 14s ease-in-out infinite",
    shine: "shine 2.5s ease-in-out infinite",
  },
},

},

plugins: [],
};
