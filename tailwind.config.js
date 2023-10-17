/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'mainBlack': '#232323',
        'mainGray': '#EFEFF1',
        'darkGray': '#0C0C0C',
        'lightGray': '#373737',
        'superLightGray': '#F1F2F5',
        'white': '#fff',
        'black': '#000',
      },
      keyframes: {
        'right-modal-up': {
          '0%': { right: '70px', opacity: '0' },
          '100%': { right: '75px', opacity: '100' },
        },
        'scale-zoomin': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-zoomin-bgtxt': {
          '0%': { transform: 'scale(1.2) translateY(-70%) translateX(-50%)' },
          '100%': { transform: 'scale(1) translateY(-70%) translateX(-50%)' },
        },
        animation: {
          'right-modal-up': 'right-modal-up 0.5s',
          'scale-zoomin': 'scale-zoomin 3s',
          'scale-zoomin-bgtxt': 'scale-zoomin-bgtxt 3s',
        },
        dropShadow: {
          'md': '5px 4px 3px rgba(255, 255, 255, 0.25)',
        }
      },
      backgroundImage: {
        'main': 'url("https://github.com/jieun419/jieun_portfolio/blob/main/src/assets/images/front_bg.jpg?raw=true")'
      },
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

