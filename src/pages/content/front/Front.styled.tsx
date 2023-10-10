import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

type IsMobile = {
  isMobile: boolean
}

export const MainComponent = tw.main<IsMobile>`
  h-screen
  flex
  items-center
  flex-col
  bg-[#EFEFF1]  
  justify-between
  px-10
  pt-10
  sticky
  top-0

  ${props => props.isMobile ? 'max-sm:h-[calc(var(--vh,1vh)*100)]' : 'max-sm:h-screen'}
  max-sm:pt-5
  max-sm:px-5
`;

export const TxtWrap = tw.section`
  absolute
  top-12
  flex
  items-center
  flex-col
  mb-20
  w-full
  mt-[calc(100vh-85vh)]

  max-sm:mt-[calc(100vh-90vh)]
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

  max-sm:text-[4rem]
  max-lg:text-[6rem]
`;

export const MainTit = tw(motion.h2)`
  text-5xl
  font-black
  text-black
  font-normal
  mb-6
  relative
  z-10
  w-full
  text-center

  max-sm:text-xl
  max-lg:text-3xl
`;

export const StTxt = tw.strong`
  font-black
`;

export const SubTxt = tw(motion.p)`
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
relative
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

export const InfoTxtWrap = tw.div`
  absolute
  left-10
  bottom-10

  max-sm:left-5
  max-sm:bottom-5
`;

export const InfoTxt = tw.span`
  block
  text-base

  max-sm:text-sm
  max-sm:text-[#EFEFF1]
  max-sm:drop-shadow-[0px_0px_1px_#000000]
`;

export const Img = tw(motion.img) <IsMobile>`
  absolute
  bottom-0
  w-auto
  h-[calc(100vh-40vh)]
  transition-all

  ${props => props.isMobile ? 'max-sm:h-[calc(100vh-50vh)]' : 'max-sm:h-[calc(100vh-40vh)]'}
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