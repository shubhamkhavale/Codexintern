/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
  textShadow: {
    outline: '0 0 2px #00f, 0 0 10px rgba(255,255,255,0.2)',
  }
}
  },
  plugins: [],
};


