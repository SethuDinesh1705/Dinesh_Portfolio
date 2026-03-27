/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7ff',
          100: '#f0ebff',
          500: '#667eea',
          600: '#5a6fd8',
          700: '#4a5fc1',
          800: '#3a4fa9',
          900: '#2a3f91',
        },
        secondary: {
          500: '#764ba2',
          600: '#6a4195',
          700: '#5e3788',
          800: '#52307b',
          900: '#46286e',
        },
        accent: {
          gold: '#FFD700',
          orange: '#FFA500',
          red: '#FF6B6B',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 4px 25px rgba(255, 215, 0, 0.6)' },
        }
      },
    },
  },
  plugins: [],
}
