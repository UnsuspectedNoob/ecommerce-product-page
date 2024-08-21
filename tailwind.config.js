/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: "'Kumbh Sans'",
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "vd-blue": "hsl(220, 13%, 13%)",
        "dg-blue": "hsl(219, 9%, 45%)",
        "g-blue": "hsl(220, 14%, 75%)",
        "lg-blue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
