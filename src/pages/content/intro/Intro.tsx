import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
// import { useEffect, useRef, useState } from 'react';
// import { useScroll, useTransform } from "framer-motion";

import myImgIm from '../../../assets/images/jieun_im.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { MindData, StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { RootState } from '../../../store';
import ShowReviewBtn from '../../../components/button/ShowReviewBtn';
// import { positionActions } from '../../../store/position-slice';
// import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';

export const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-[#232323]
  px-10
  pt-10
  h-screen
  z-1

  max-lg:overflow-hidden
  max-lg:h-auto
  max-lg:py-20
`;

export const Content = tw.section`
  flex
  gap-10
  items-center
  text-[#EFEFF1]
  items-center
  
  max-lg:flex-col
`;

export const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-[#EFEFF1]
  font-black
  text-6xl

  max-lg:flex-col 
  max-lg:static 
  max-lg:w-full
`;

export const Tit = tw.h3`
  text-4xl
  font-black
  pb-2
`;

export const SubTit = tw.h5`
  text-xl
  font-bold
  pb-2
`;

export const LeftWrap = tw.div`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  flex-1
`;

export const RightWrap = tw.div`
  flex
  flex-col
  flex-1
  gap-10
`;

export const Img = tw.img`
  max-md:w-[80vw]
`;

export const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

export const MyMindTxt = tw.p`
  text-base
`;

export const StackSpacing = tw.div`
  flex
  gap-3
`

export const Stacks = tw(StackSpacing)`
  flex-col
`;

export const StackWrap = tw.div`
  grid 
  grid-cols-3 
  gap-4

  max-md:grid-cols-1  
`;

export const StackBox = tw.div`
`;

export const StackIcons = tw.div`
  grid
  grid-cols-4
  gap-1
  w-full
`;

function Intro() {
  // const dispatch = useDispatch()
  const isModal = useSelector((state: RootState) => state.overlay.isOpen);
  const { scrollRef, scrollEl } = useScrollAnimation();

  // useTransform(scrollYProgress, (pos) => {
  //   return pos === 1 ?
  //     dispatch(positionActions.PositionStyle('relative')) :
  //     dispatch(positionActions.PositionStyle('sticky'))
  // });


  return (
    <IntroComponent>

      {isModal && <ReviewDetail name='review' />}

      <SubJectTit>About me</SubJectTit>
      <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
        <Content>
          <LeftWrap>
            <Img src={myImgIm} alt="이모지 이미지" />
            <ShowReviewBtn />
          </LeftWrap>
          <RightWrap ref={scrollRef}>
            <MyMind>
              <Tit>Mind</Tit>
              <SubTit>{MindData.subtitle}</SubTit>
              <MyMindTxt>
                {MindData.text}
              </MyMindTxt>
            </MyMind>

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
          </RightWrap>
        </Content>
      </ScrollAni>
    </IntroComponent >
  );
}

export default Intro;
