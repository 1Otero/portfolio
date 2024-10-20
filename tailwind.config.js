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
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

