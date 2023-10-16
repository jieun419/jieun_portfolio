import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_P10 } from '../../utils/constant/constant';
import { BoldTxt } from '../atoms/text/BoldText';

export const TxtBox = tw.section`
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

export const IntroAnimationDiv = tw(motion.div)`
  w-full
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


function TextWrap() {
  const WINDOW_HEIGHT = window.innerHeight - (0.75 * window.innerHeight);

  return (
    <TxtBox>
      <IntroAnimationDiv
        initial={{ ...Y_0, scale: 1.25 }}
        animate={{ y: -(WINDOW_HEIGHT), scale: 1 }}
        transition={{ ...ANI_TRANSITION, delay: 2 }}
      >
        <MainTit
          initial={{ ...OPACITY_0, y: WINDOW_HEIGHT }}
          animate={{ ...OPACITY_1, y: WINDOW_HEIGHT }}
          transition={ANI_TRANSITION}
        >
          프론트엔드 개발자 <StTxt>최지은</StTxt>입니다.
          <BgTxt>Front-End</BgTxt>
        </MainTit>
      </IntroAnimationDiv>

      <SubTxt
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3 }}
      >
        사용자를 생각하는 <BoldTxt>역지사지</BoldTxt> 마인드,</SubTxt>
      <SubTxt
        initial={{ ...OPACITY_0, ...Y_0 }}
        animate={{ ...OPACITY_1, ...Y_P10 }}
        transition={{ ...ANI_TRANSITION, delay: 3.5 }}
      >
        포기하지 않고 <BoldTxt>책임감</BoldTxt>있게 일하는 개발자입니다.</SubTxt>
    </TxtBox>

  )
}

export default TextWrap;