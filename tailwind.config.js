/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'bgHome': "url('/bgLight.jpg')",
        'bgHometwo': "url('/bgDark.jpg')",
        "bgButtonR": 'linear-gradient(to right, #DE2775, #FA5C5E)',
        "bgButtonL": 'linear-gradient(to left, #DE2775, #FA5C5E)'
      },
      colors:{
      },
    },
  },
  plugins: [],
}
