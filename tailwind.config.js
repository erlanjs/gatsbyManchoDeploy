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
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      // iphoneSE:"375px",
      // iphoneXR:"414px",
      // iphonePro:"390px",
      // pixel:"393px",
      // samsungGalaxyS8:"360px",
      // samsungGalaxyS20Ultra:"412px",
      // ipadAir:"820px",
      // ipadMini:"768px",
      // surfacePro:"912px",
      // surfaceDuo:"540px",
      // galaxyFold:"280px",
      // samsungGalaxy:"412px",
      // nestFub:"1024px",
      // nestFubMax:"1280px",
      ssm:"280px",
      sm: "300px",
      md: "640px",
      lg:"992px",
      xl: "1024px",
      xxl: "1280px",
    },
  },  plugins: [],
}
