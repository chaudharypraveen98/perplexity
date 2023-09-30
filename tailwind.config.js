/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#20808d',
      'red': '#ff5459',
      'error': "#A84B2F",
      'background': '#fcfcf9',
      'extradark-gray': '#64645f',
      borderMain: '#d8d8cf99',
      'textOff': '#64645f',
      'superDuper': '#20808d',
      'super': "rgb(32 128 141)",
      offsetPlus: "#e8e8e3",
      textMain: '#13343b',
      black: colors.black,
      white: colors.white,
      offset: '#f3f3ee',
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Schibsted Grotesk', 'sans-serif'],
      serif: ['Schibsted Grotesk', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        "sm": "0.5rem",
        "lg": "2rem",
        "md": "1rem",
        "xl": "3rem",
        "xs": "0.25rem"
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridTemplateColumns: {
        sidebar: "220px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
      gap: {
        "xs": '4px',
      }
    }
  }
}