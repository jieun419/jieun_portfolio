/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'main-color-black': '#232323',
        'main-color-gray': '#EFEFF1',
        'dark-gray': '#0C0C0C',
        'light-gray': '#373737',
        'super-light-gray': '#F1F2F5',
        'white': '#fff',
        'black': '#000',
      },
      keyframes: {
        'right-modal-up': {
          '0%': { right: '70px', opacity: '0' },
          '100%': { right: '75px', opacity: '100' },
        },
        animation: {
          'right-modal-up': 'right-modal-up 0.5s'
        },
      },
      border: {
        'border-t': 'solid transparent',
        'border-white': 'solid #fff'
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

