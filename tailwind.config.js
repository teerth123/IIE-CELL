/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      screens: {
        // Add the xs breakpoint (before sm)
        'xs': '480px', // or whatever you want the value to be
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        handlee : ['Handlee', 'sans-serif'],
        Parkinsans:['Parkinsans', 'sans-serif']
      },
      fontSize: {
        'xs-sm': '0.7rem', // Smaller than sm
      },
    },
  },
  plugins: [],
};
