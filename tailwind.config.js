/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        ssm: '0rem',
        sm: '10px',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        'xxl': '6rem',
      },
    },
    screens: {
      iphoneSE:"375px",
      iphoneXR:"415px",

      ssm:"280px",
      sm: "300px",
      md: "640px",
      lg:"992px",
      xl: "1024px",
      xxl: "1280px",
    },
  },  plugins: [],
}
