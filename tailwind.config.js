
export default {
  content: [
    "./index.html","./main.js",
    "./src/**/*.{js,ts,css,html}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: { 
    fontFamily: {
      vazir : ['Vazir']
    },
    extend: { 
      lineHeight: {
        '0': '0',
       }
    },
  },
  plugins: []
}

