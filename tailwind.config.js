module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      width: {
        '2xl': '600px',
      },
      colors: {
        primary: {
          superlight: '#ff828d',
          light: '#ff5e6c',
          DEFAULT: '#FF4B5A',
          dark: '#e64350'
        },
        secondary: {
          ultralight: '#cfe1ff',
          superlight: '#e8f3fc',
          light: '#478dfc',
          DEFAULT: '#3b83f6',
          dark: '#3375de'
        },
        dark: "#1C243B",
        light: "#273252",
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
      translate: ['hover'],
      scale: ['hover']
    },
  },
  plugins: [],
}
