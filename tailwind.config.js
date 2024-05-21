import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Satoshi-Variable', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          'from': { transform: 'translate(-150px, 0)' },
          'to': { transform: 'translate(0, 0)' },
        },
        scroll: {
          'to': { transform: 'translate(calc(-50% - 0.5rem))' }
        }
        
      },
      animation: {
        'wave': 'wave infinite linear 0.5s;',
        'scroll': 'scroll 30s forwards linear infinite',
      }
    },
  },
  plugins: [],
}
