import tw from 'tailwind-styled-components';

export const MainComponent = tw.main`
  flex
  items-center
  flex-col
  bg-[#EFEFF1]  
  h-screen
  justify-between
`;

export const TxtWrap = tw.section`
  flex
  items-center
  flex-col
  mb-20
  w-full
  mt-36
`;

export const BgTxt = tw.p`
  text-[10rem]
  font-black
  text-white
  absolute
  z-[-1]
  top-0
  left-2/4
  w-full
  translate-y-[-70%]
  translate-x-[-50%]
`;

export const MainTit = tw.h2`
  text-5xl
  font-black
  text-black
  font-normal
  mb-6
  relative
  z-10
  w-full
  text-center
`;

export const StTxt = tw.strong`
  font-black
`;

export const SubTxt = tw.p`
  font-normal
  text-xl
`;