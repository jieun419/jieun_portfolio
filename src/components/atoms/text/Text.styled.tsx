import { motion } from "framer-motion";
import tw from "tailwind-styled-components";

export const MainTitle = tw(motion.h2)`
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

export const BgText = tw(motion.div)`
  absolute
  z-[-1]
  top-0
  left-2/4
  w-full
  overflow-hidden

  translate-y-[-75%]
  translate-x-[-50%]
`;

export const AnimationP = tw(motion.p)`
  text-[10rem]
  font-black
  text-white
  leading-[1]

  max-sm:text-[4rem]
  max-lg:text-[6rem]
`

export const MainSubText = tw(motion.p)`
  font-normal
  text-xl
  text-mainBlack
  text-center

  max-md:text-sm
  max-lg:text-base
`;