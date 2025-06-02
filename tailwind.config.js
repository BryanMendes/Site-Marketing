/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#252361',
        secondary: '#4a54c7',
        light: '#eee7e9',
        dark: '#1a1a1a',
      },
      fontFamily: {
        marilde: ['Marilde', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(74, 84, 199, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(74, 84, 199, 0.2)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-subtle': 'pulse 2s infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};