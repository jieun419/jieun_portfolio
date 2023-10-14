import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import myImgIm from '../../../assets/images/jieun_im1.webp';
import myImgImOn from '../../../assets/images/jieun_im2.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { MindData, StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { RootState } from '../../../store';
import ShowReviewBtn from '../../../components/button/ShowReviewBtn';
import { positionActions } from '../../../store/position-slice';
import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { TagTxt } from '../../../components/atoms/tag/TagTxt';
import { BoldUnderLineTxt } from '../../../components/atoms/text/BoldUnderLine';

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
  gap-20
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
  flex-2
  gap-20
`;

export const Img = tw.img`
  max-md:w-[80vw]
`;

export const FlexBox = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-1
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
  const dispatch = useDispatch()
  const isModal = useSelector((state: RootState) => state.overlay.isOpen);
  const moScrollRef = useRef<HTMLDivElement>(null);
  const [isImgChange, setIsImgChange] = useState(false);

  const { scrollRef, scrollEl } = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: moScrollRef,
    offset: ['0 1', `${isMobile ? '0.8 1' : '1 1'}`]
  });

  useTransform(scrollYProgress, (pos) => {
    return pos === 1 ?
      dispatch(positionActions.PositionStyle('relative')) :
      dispatch(positionActions.PositionStyle('sticky'))
  });

  const handelImgChange = () => {
    setIsImgChange(prev => !prev)
  };


  return (
    <motion.div ref={moScrollRef}>
      <IntroComponent>

        {isModal && <ReviewDetail name='review' />}

        <SubJectTit>About me</SubJectTit>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
          <Content>
            <LeftWrap>
              <FlexBox>
                <Img src={isImgChange ? myImgImOn : myImgIm} alt="이모지 이미지" />
                <div>
                  <TagTxt># 끈기</TagTxt>
                  <TagTxt># 책임감</TagTxt>
                  <TagTxt># 역지사지</TagTxt>
                  <TagTxt># 소통</TagTxt>
                </div>
              </FlexBox>
              <ShowReviewBtn handelImgChange={handelImgChange}>팀원 리뷰 보기</ShowReviewBtn>
            </LeftWrap>
            <RightWrap ref={scrollRef}>
              <MyMind>
                <Tit>Mind</Tit>
                <SubTit>
                  {MindData.subtitle}
                </SubTit>
                <MyMindTxt>
                  서비스를 개발할 때, <BoldUnderLineTxt>사용자가 불편을 겪지 않도록</BoldUnderLineTxt> 주의 깊게 고려하는 것이 중요하다고 생각합니다.<br />
                  스스로 개발을 잘했다 생각해도, 사용자가 이용에 불편을 가지고 있다면 UX를 제대로 고려하지 않았다고 볼 수 있습니다.<br />
                  그래서 <BoldUnderLineTxt>역지사지 마음가짐</BoldUnderLineTxt>을 가지고, 항상 사용자의 관점에서 생각하며 개선하려고 노력하고 있습니다.<br /><br />

                  또한 협업은 성공적인 프로젝트를 위해 중요한 요소라고 생각합니다.<br />
                  <BoldUnderLineTxt>팀원들과의 원활한 커뮤니케이션과 피드백</BoldUnderLineTxt>을 통해 구체화 하고 지속적으로 개선하고 싶습니다.
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
    </motion.div>

  );
}

export default Intro;
