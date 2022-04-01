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
          superlight: '#66ff8a',
          light: '#42ff6e',
          DEFAULT: '#11fe48',
          dark: '#10e645'
        },
        secondary: {
          ultralight: '#cfe1ff',
          superlight: '#e8f3fc',
          light: '#478dfc',
          DEFAULT: '#3b83f6',
          dark: '#3375de'
        }
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
}
