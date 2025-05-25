/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        
        'corporate-blue': {
          DEFAULT: '#003366',
          '50': '#E6F0F8',   
          '100': '#BFDAF1',
          '200': '#99C4EA',
          '300': '#73AFE3',
          '400': '#4D99DB',
          '500': '#2683D4',   
          '600': '#006DCB',   
          '700': '#0057A2',   
          '800': '#004079',   
          '900': '#002950',   
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
};
