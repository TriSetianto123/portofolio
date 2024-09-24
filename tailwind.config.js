/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
          fontFamily: {
            'poppins': ['Poppins'],
            'Giesans': ["GeistSan", "sans-serif"],
            'Monospace': [' Monospace', 'serif'],
            'SansSerif': ['SansSerif', 'serif'],
            'JetBrains': ['JetBrains Mono', 'monospace'],
          },
          keyframes: {
            'slide-right': {
              '0%': {
                transform: 'translateX(-100%)',
                opacity: 0
                
              },
              '100%': {
                transform: 'translateX(0)',
                opacity: 1
              }
            },
            'slide-up': {
              '0%': {
                transform: 'translateY(100%)',
                opacity: 0,
                
              },
              '100%': {
                transform: 'translateY(0)',
                opacity: 1
              }        
          },
          'slide':{
            '0%': {
              transform: 'translateX(0)',
        
            },
            '100%': {
              transform: 'translateX(-100%)',
              
            }
          }
            
        },
          animation: {
            'slide-right': 'slide-right 0.5s ease-in-out',
            'slide-up': 'slide-up 0.5s ease-in-out',
           
          },
    extend: {
      colors: {
        'primary': '#0D0D0D',
        'secondary': '#374152',
        'tertiary': '#171717',
        'quaternary': '#262626',
      },
      dropShadow: {
        '3xl': '0px 0px 5px rgba(0, 88, 255, 0.8)'
      }
    },
  },
  plugins: [],
}
