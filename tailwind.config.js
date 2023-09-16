/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mullish","sans-serif"],
      },
      colors:{
        deepBlue:"#02042a",
        LightBlue:"#2b84ea",
        LightBlue300:"#4b94ed",
        LightBlue500:"#ab72e7",
        greenLight:"#61cea6",
        greyText:"#819597",
        LightGray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray2: "#525a76",
      },
      backgroundImage:{
      'Feature-section': "url('/images/feature-section-2BG.svg')"
      },
      backgroundImage:{
             'feature-section': "url('/images/instant-settlement-bg.svg')",
             'feature-section': "url('/images/instant-settlement-bghover.svg')"
    
      },
    },
   
  },
  plugins: [],
}

