/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Sci-fi bluish/purple palette
        'space-900': '#05060a',
        'space-800': '#0b0f19',
        'space-700': '#0f1724',
        'violet-500': '#7c5cff',
        'violet-400': '#a88bff',
        'cyan-400': '#6ee7ff',
        'glass-50': 'rgba(255,255,255,0.06)'
      },
      boxShadow: {
        'glow-md': '0 8px 30px rgba(124,92,255,0.12)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '10px'
      },
      borderRadius: {
        'xl-2': '18px'
      }
    }
  },
  plugins: [],
}
