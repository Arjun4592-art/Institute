export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#7C3AED', // Neon Purple
          light: '#A78BFA',
          dark: '#5B21B6',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Electric Blue
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        dark: {
          100: '#1A1F4A',
          200: '#14183A',
          300: '#0B0F2A',
          400: '#070A1A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
        },
        card: '#11152F',
        border: 'rgba(255,255,255,0.05)',
      },
    },
  },
}
