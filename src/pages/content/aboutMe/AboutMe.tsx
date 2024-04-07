import tw from 'tailwind-styled-components';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { positionActions } from '../../../store/position-slice';
import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import LeftWrap from '../../../components/aboutMe/LeftWrap';
import InterviewWrap from '../../../components/aboutMe/InterviewWrap';

const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-mainBlack
  px-10
  pt-10
  z-1
  max-lg:h-auto
  max-lg:py-20
`;

const Content = tw.section`
  flex
  flex-col
  gap-20
  items-center
  text-mainGray
  items-center
  py-20
`;

const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-superLightGray
  font-black
  text-6xl

  max-lg:flex-col 
  max-lg:static 
  max-lg:w-full
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;


const StackSpacing = tw.div`
  flex
  gap-3
`

const Stacks = tw(StackSpacing)`
  w-full
  flex-col
`;

const StackWrap = tw.div`
  grid 
  grid-cols-3 
  gap-4

  max-md:grid-cols-1  
`;

const StackBox = tw.div`
`;

const StackIcons = tw.div`
  grid
  grid-cols-4
  gap-1
  w-full
`;


function AboutMe() {
  const dispatch = useDispatch()
  const moScrollRef = useRef<HTMLDivElement>(null);

  const { scrollRef, scrollEl } = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: moScrollRef,
    offset: ['0 1', `${isMobile ? '0.8 1' : '1 1'}`]
  });

  useTransform(scrollYProgress, (pos) => {
    if (pos) {
      return dispatch(positionActions.PositionStyle(pos === 1 ? 'relative' : 'sticky'));
    }
  });

  return (
    <motion.div ref={moScrollRef}>
      <ReviewDetail />
      <IntroComponent id='aboutme'>
        <SubJectTit>About me</SubJectTit>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
          <Content>
            <LeftWrap />
            <InterviewWrap />
            <Stacks>
              <Tit>Skill & Tools</Tit>
              <StackWrap>
                {
                  //* key = 제목, stacks = 기술 스택
                  Object.entries(StackData.stack).map(([key, stacks], idx) => (
                    <StackBox key={idx}>
                      <SubTit>{key}</SubTit>
                      <StackIcons>
                        {stacks.map((stack) => (
                          <StackIcon key={stack} stack={stack} width={`w-[calc(100%-5%)]`} />
                        ))}
                      </StackIcons>
                    </StackBox>
                  ))
                }
              </StackWrap>
            </Stacks>
          </Content>

        </ScrollAni>
      </IntroComponent >
    </motion.div>

  );
}

export default AboutMe;
