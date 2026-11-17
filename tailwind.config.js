/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xennov: {
          navy: '#102C4C',
          'navy-dark': '#091E34',
          'navy-light': '#1A3F6B',
          blue: '#1677B8',
          'blue-dark': '#105D9A',
          'blue-light': '#258ED3',
          cyan: '#38B6D9',
          'cyan-dark': '#1E9CC0',
          'cyan-light': '#E3F5FA',
          grey: '#F3F6F9',
          'grey-subtle': '#EBF0F5',
          'grey-border': '#D9E4EE',
          text: '#172B3A',
          'text-muted': '#4A6070',
          'text-light': '#7A95A6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(16, 44, 76, 0.07), 0 1px 2px -1px rgba(16, 44, 76, 0.04)',
        'card': '0 4px 16px -2px rgba(16, 44, 76, 0.09), 0 2px 6px -1px rgba(16, 44, 76, 0.04)',
        'card-hover': '0 10px 28px -4px rgba(16, 44, 76, 0.14), 0 4px 10px -2px rgba(16, 44, 76, 0.07)',
        'dropdown': '0 12px 40px -6px rgba(16, 44, 76, 0.18), 0 2px 8px -1px rgba(16, 44, 76, 0.08)',
        'header': '0 1px 0 0 #D9E4EE, 0 4px 20px -4px rgba(16, 44, 76, 0.08)',
      },
      borderRadius: {
        'sm': '2px',
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'gradient-xennov': 'linear-gradient(135deg, #102C4C 0%, #1A3F6B 50%, #1677B8 100%)',
      },
      transitionDuration: {
        '250': '250ms',
      }
    },
  },
  plugins: [],
}
