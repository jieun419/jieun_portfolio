import tw from 'tailwind-styled-components';

export const MainComponent = tw.main`
  flex
  items-center
  flex-col
  bg-[#EFEFF1]
  h-auto
  justify-between
  px-10
  pt-10
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

export const SocialList = tw.div`
  flex
  gap-5
  w-full
`;

export const SocialLink = tw.a`
  flex
  gap-1
  items-center
  flex-col

  font-medium
  relative
  after:content-['']
  after:w-full
  after:h-1
  after:bg-black
  after:block
`;

export const InfoTxt = tw.div`
  absolute
  left-10
  bottom-10
`;