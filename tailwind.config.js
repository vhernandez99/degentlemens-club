module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'in' : {'max':'1024px'},
        'ni' : {'min':'1024px'},
        'nii' : {'max':'640px'},
        'xlmin' : {'max':'1280px'},
        'mdmax' : {'max':'768px'}
      },
      colors:{
        Navbar:{
          0:"#FBF8F1",
          10:"#F9B208"
        },
        Containers:{
          0:"#191A19",
          10:"#191919"
        }
      }
    },
  },
  plugins: [],
}
