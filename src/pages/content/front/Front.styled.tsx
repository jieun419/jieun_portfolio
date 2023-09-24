import tw from 'tailwind-styled-components';

export const MainComponent = tw.main`
  sticky
  top-0
  z-[0]
  h-screen
  flex
  items-center
  flex-col
  bg-[#EFEFF1]  
  justify-between
  px-10
  pt-10
`;

export const TxtWrap = tw.section`
  absolute
  top-12
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

  max-md:text-[4rem]
  max-lg:text-[6rem]
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

  max-md:text-xl
  max-lg:text-3xl
`;

export const StTxt = tw.strong`
  font-black
`;

export const SubTxt = tw.p`
  font-normal
  text-xl

  max-md:text-sm
  max-lg:text-base
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
  z-20
 
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

export const Img = tw.img`
  absolute
  bottom-0
  w-auto
  h-[calc(100vh-40vh)]
  transition-all

`;

export const ScrollArrowBox = tw.div`
  absolute
  bottom-5
  left-[50%]
  translate-x-[-50%]
  z-[20]
  flex
  flex-col
  items-center
  rotate-180

  animate-bounce
`;