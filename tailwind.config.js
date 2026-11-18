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
          // Dark header/footer neutrals (Thermo Fisher deep navy-black header/footer)
          navy: '#1B1B1D',           // Near-black charcoal — Thermo Fisher nav/footer base
          'navy-dark': '#111113',    // Deep onyx — topbar, footer depth
          'navy-light': '#2B2B30',   // Slightly lighter charcoal — hover state

          // Primary brand accent: Thermo Fisher Iconic Red
          blue: '#E71316',           // TF Primary Red (#e71316) — buttons, icons, accents
          'blue-dark': '#C40003',    // TF Red Hover — deep crimson
          'blue-light': '#FD292C',   // Bright red — active state

          // Secondary accent: Thermo Fisher Red subtle
          cyan: '#E71316',           // Mirror primary — labels, rules
          'cyan-dark': '#C40003',    // Label hover
          'cyan-light': '#FDE4E4',   // Soft rose tint — icon bg, light fills

          // Backgrounds — exact Thermo Fisher surface tokens
          grey: '#F7F7F7',           // TF --background-secondary / --gray-0
          'grey-subtle': '#F4F4F6',  // Slightly warmer neutral surface
          'grey-border': '#E5E5E5',  // TF --border-subtle-01 / --gray-05

          // Typography — exact Thermo Fisher text tokens
          text: '#1B1B1D',           // TF --text-primary / --gray-100
          'text-muted': '#54545C',   // TF --text-secondary / --gray-60
          'text-light': '#70707A',   // TF --text-subtle / --gray-40
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card': '0 4px 16px -2px rgba(0,0,0,0.08), 0 2px 6px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 28px -4px rgba(0,0,0,0.12), 0 4px 10px -2px rgba(0,0,0,0.06)',
        'dropdown': '0 12px 40px -6px rgba(0,0,0,0.16), 0 2px 8px -1px rgba(0,0,0,0.08)',
        'header': '0 1px 0 0 #E5E5E5, 0 4px 20px -4px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        'sm': '2px',
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'gradient-xennov': 'linear-gradient(135deg, #111113 0%, #1B1B1D 50%, #E71316 100%)',
      },
      transitionDuration: {
        '250': '250ms',
      }
    },
  },
  plugins: [],
}
