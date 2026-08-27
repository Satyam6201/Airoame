/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0D0D0D',
          alt: '#111111',
          subtle: '#141414',
        },
        surface: {
          DEFAULT: '#161616',
          card: '#1A1A1A',
          hover: '#222222',
          panel: '#1E1E1E',
          glass: 'rgba(26, 26, 26, 0.85)',
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#2A2A2A',
          bright: '#383838',
          glow: 'rgba(236, 30, 121, 0.3)',
        },
        accent: {
          pink: '#EC1E79',
          purple: '#7B2FF7',
          teal: '#2FE6C9',
        },
        content: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#71717A',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #EC1E79 0%, #7B2FF7 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #f53187 0%, #8b44fa 100%)',
        'brand-gradient-teal': 'linear-gradient(135deg, #2FE6C9 0%, #7B2FF7 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.8) 70%, #0D0D0D 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(236, 30, 121, 0.18), transparent 70%)',
        'radial-glow-teal': 'radial-gradient(circle at 50% 50%, rgba(47, 230, 201, 0.15), transparent 70%)',
      },
      boxShadow: {
        'brand-glow': '0 0 30px -5px rgba(236, 30, 121, 0.45)',
        'purple-glow': '0 0 30px -5px rgba(123, 47, 247, 0.45)',
        'teal-glow': '0 0 30px -5px rgba(47, 230, 201, 0.45)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(236, 30, 121, 0.2)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideUp: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      }
    },
  },
  plugins: [],
}
