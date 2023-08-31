/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        mainColorBlack: '#232323',
        mainColorGray: '#EFEFF1',
        darkGray: '#0C0C0C',
        lightGray: '#373737',
        superLightGray: '#F1F2F5',
        white: '#fff',
        black: '#000',
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.screen-width': {
          '@apply mx-auto lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[576px]':
            '',
        },
      });
    },
  ],
}

