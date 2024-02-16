/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fantasque-bold': ['FantasqueSansMNerdFont-Bold', 'sans-serif'],
        'fantasque-italic': ['FantasqueSansMNerdFont-Italic', 'sans-serif'],
        'fantasque-regular': ['FantasqueSansMNerdFontMono-Regular', 'monospace'],
      },
      colors: {
        dark: {
          'primary': '#2b2d42',
          'primary-100': "#d5d5d9",
          'primary-200': "#aaabb3",
          'primary-300': "#80818e",
          'primary-400': "#555768",
          'primary-500': "#2b2d42",
          'primary-600': "#222435",
          'primary-700': "#1a1b28",
          'primary-800': "#11121a",
          'primary-900': "#09090d",
          'secondary': "#806BE8",
          'slate-blue': '#7B57FB'
        },
        
        light: {
          'primary': '#f7f7f9',
          'primary-100': "#fdfdfe",
          'primary-200': "#fcfcfd",
          'primary-300': "#fafafb",
          'primary-400': "#f9f9fa",
          'primary-500': "#f7f7f9",
          'primary-600': "#c6c6c7",
          'primary-700': "#949495",
          'primary-800': "#636364",
          'primary-900': "#313132",
          'secondary': '#806BE8',
          'slate-blue': '#7B57FB',
        },
      },
      keyframes: {
        fadeOut: {
          to: {
            opacity: 0,
            transform: 'translateY(100%)',
          },
        },
      },
      animation: {
        'fade-out': 'fadeOut 2s forwards',
      },
    },
  },
  plugins: [],
}