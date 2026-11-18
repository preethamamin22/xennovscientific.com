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
          navy: '#18181B',             // Charcoal Black (Thermo Fisher Dark Neutral)
          'navy-dark': '#111113',        // Onyx Deep Black
          'navy-light': '#27272A',       // Slate Charcoal
          blue: '#E71316',               // Thermo Fisher Iconic Brand Red
          'blue-dark': '#C40003',        // Deep Crimson Red
          'blue-light': '#FD292C',       // Radiant Red
          cyan: '#E71316',               // Primary Accent Red
          'cyan-dark': '#C40003',        // Deep Crimson Accent
          'cyan-light': '#FDE4E4',       // Soft Rose Tint
          grey: 'var(--xennov-bg-subtle, #F7F7F7)',
          'grey-subtle': 'var(--xennov-bg-subtle-alt, #F4F4F6)',
          'grey-border': 'var(--xennov-bg-border, #E5E5E5)',
          text: '#1B1B1D',
          'text-muted': '#54545C',
          'text-light': '#70707A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 16px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 28px -4px rgba(0, 0, 0, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'dropdown': '0 12px 40px -6px rgba(0, 0, 0, 0.16), 0 2px 8px -1px rgba(0, 0, 0, 0.08)',
        'header': '0 1px 0 0 #E5E5E5, 0 4px 20px -4px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'sm': '2px',
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'gradient-xennov': 'linear-gradient(135deg, #18181B 0%, #27272A 50%, #E71316 100%)',
      },
      transitionDuration: {
        '250': '250ms',
      }
    },
  },
  plugins: [],
}
