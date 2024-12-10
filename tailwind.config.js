/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        handlee : ['Handlee', 'sans-serif'],
        Parkinsans:['Parkinsans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
