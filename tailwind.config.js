/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(45deg, rgba(206, 238, 250, 1) 0%, rgba(246, 246, 246, 1) 44%, rgba(206, 238, 250, 1) 100%)",
          "custom-gradient2":
          "linear-gradient(45deg, rgba(206, 238, 250, 1) 0%, rgba(246, 246, 246, 0.8) 44%, rgba(206, 238, 250, 1) 100%)",
          "founders-gradient": "linear-gradient(180deg, rgba(26, 131, 172, 0) 49%, #1A83AC 100%)",
          "connect-gradient": "linear-gradient(180deg, #1A83AC 0%, #04445F 100%)",
      },
    
      fontFamily: {
        raleway: ['Raleway'],
      },
      colors: {
        customWhite: '#F0F2F4',
        customBlack: '#020103'
        // Add more custom colors as needed
      },
    },
    screens: {
      'custom-sm': {'max': "548px"},
      'custom-tab': {'min': '549px', 'max': '768px'},
      'custom-md': {'min': '769px', 'max': '1024px'},
      'sm': {max :'768px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '769px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'min': '1536px', 'max': '3500px'},

      'process-1400':{'max': '1400px'},
      'process-1230':{'max': '1230px'},
      'process-1180':{'max': '1180px'},
      'process-1070':{'max': '1070px'},
      'process-980':{'max': '980px'},
      'process-880':{'max': '880px'},
      'process-800':{'max': '800px'},
      'process-700':{'max': '700px'},
      'process-400':{'max': '500px'},
      'process-300':{'max': '370px'},


      // => @media (min-width: 1536px) { ... }
    },
  

  },
  plugins: [],
};
