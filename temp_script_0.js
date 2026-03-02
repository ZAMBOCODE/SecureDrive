
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#d4af37",
            "primary-dark": "#b08d28",
            "background-light": "#f8f7f6",
            "background-dark": "#050505",
            "surface": "#121212",
          },
          fontFamily: {
            "display": ["Cormorant Garamond", "serif"],
            "body": ["DM Sans", "sans-serif"]
          },
          animation: {
            'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            'slow-pan': 'panImage 40s linear infinite alternate',
            'marquee': 'marquee 40s linear infinite',
            'marquee-reverse': 'marquee-reverse 50s linear infinite',
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(30px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            panImage: {
              '0%': { transform: 'scale(1.05) translate(0, 0)' },
              '100%': { transform: 'scale(1.15) translate(-2%, -2%)' },
            },
            marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            'marquee-reverse': {
              '0%': { transform: 'translateX(-50%)' },
              '100%': { transform: 'translateX(0%)' },
            }
          }
        },
      },
    }
  