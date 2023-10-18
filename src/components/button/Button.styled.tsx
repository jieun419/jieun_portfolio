import tw from 'tailwind-styled-components';

export const CricleBtn = tw.button`
  w-[50px]
  h-[50px]
  shadow-lg
  flex
  items-center
  justify-center
  rounded-full
  transition-all

  hover:opacity-80
`;

export const WhiteCricleBtn = tw(CricleBtn)`
  bg-white
`;