import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

type IsMobile = {
  ismobile: string
}

export const MainComponent = tw.main<IsMobile>`
  relative
  h-screen
  flex
  items-center
  flex-col
  justify-between
  bg-mainGray
  px-10
  pt-10
  sticky
  top-0
  overflow-hidden

  ${props => props.ismobile === 'true' ? 'max-sm:h-[calc(var(--vh,1vh)*100)]' : 'max-sm:h-screen'}
  max-sm:pt-5
  max-sm:px-5
`;

export const MainBg = tw(motion.div)`
  absolute
  bg-cover
  bg-main
  top-0
  bottom-0
  left-0
  right-0
`;


export const Img = tw(motion.img) <IsMobile>`
  absolute
  bottom-0
  w-auto
  h-[calc(100vh-40vh)]
  transition-all

  ${props => props.ismobile === 'true' ? 'max-sm:h-[calc(100vh-50vh)]' : 'max-sm:h-[calc(100vh-40vh)]'}
`;

