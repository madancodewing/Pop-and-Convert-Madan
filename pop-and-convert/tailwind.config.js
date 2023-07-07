/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1210px',
      },
    },
    extend: {
      colors: {
        primaryColor: '#2F65D5',
        secondaryColor: '#00FF00',
        fontColor: '#3C434A',
        headingColor: '#111827'
      },
      backgroundColor: {
        body: 'red',
      },
      textColor: {
        body: 'red',
      },
    },
  },
  plugins: [],
}

