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
      },
      screens:{
     
        'ipad-pro': {'min':'1366px','max':'1366px'},
        'ipad-prov': {'min':'1024px','max':'1024px'},
        'ip14': {'min':'430px','max':'430px'},
        'ipad-h': {'min':'1080px','max':'1080px'},
        'ip12': {'min':'390px','max':'390px'},
        'se': {'min':'375px','max':'375px'},
      },
    },
  },
  plugins: [],
};
