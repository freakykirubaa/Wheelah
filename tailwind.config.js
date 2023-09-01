/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        sidebarColor: "#FAFCFD",
        bgColor:"#F7F8F9",
        searchColor:"#E6E6E6",
        addBlue:"#1DA0F1",
        Grey:"#6F767E",
        bgWhite:"#FFF",
        borderColor:"#F4F4F4",
        pureWhite:"#FFFFFF",
        lightBlue:"#E8F6FE",
        bgBlue:"#D2ECFC"
      }
    },
  },
  plugins: [],
}
