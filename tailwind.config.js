/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
     colors:{
      'Secondary': '#F8F3DD',
        'custom-green' : '#9fa007'
      
     }
     
    },
  },
  plugins: [],
};