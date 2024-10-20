/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,ts}",
    "../node_modules/flowbite/**/*.js",
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    screens: {
      s: "378px",
      sm: "640px",
      md: "768px",
      mdd: "1010px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

