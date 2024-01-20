import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import myImgIm from '../../../assets/images/jieun_im1.webp';
import myImgImOn from '../../../assets/images/jieun_im2.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { RootState } from '../../../store';
import ShowReviewBtn from '../../../components/button/ShowReviewBtn';
import { positionActions } from '../../../store/position-slice';
import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { TagTxt } from '../../../components/atoms/tag/TagTxt';
import BoldText from '../../../components/atoms/text/BoldText';

export const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-mainBlack
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
  text-mainGray
  items-center
  
  max-lg:flex-col
`;

export const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-mainGray
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
  mb-5
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

function AboutMe() {
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
      <IntroComponent id='aboutme'>

        {isModal && <ReviewDetail name='review' />}

        <SubJectTit>About me</SubJectTit>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
          <Content>
            <LeftWrap>
              <FlexBox>
                <Img src={isImgChange ? myImgImOn : myImgIm} alt="이모지 이미지" />
                <div>
                  <TagTxt># 역지사지</TagTxt>
                  <TagTxt># 사용자중심</TagTxt>
                  <TagTxt># 소통</TagTxt>
                  <TagTxt># 피드백</TagTxt>
                </div>
              </FlexBox>
              <ShowReviewBtn handelImgChange={handelImgChange}>팀원 리뷰 보기</ShowReviewBtn>
            </LeftWrap>
            <RightWrap ref={scrollRef}>
              <MyMind>
                <Tit>사용자를 생각하는 역지사지 마인드</Tit>
                <SubTit># 사용자 중심 개발.</SubTit>
                <MyMindTxt>
                  서비스를 개발할 때 항상 <BoldText>'사용자를 생각하는 역지사지 마인드'</BoldText>를 가지고 작업하며,<br />
                  구체적으로 사용자 경험을 최적화하기 위해 사용자가 첫 방문에도 서비스를 쉽게 이해하고 활용할 수 있도록<br />
                  직관적이고 친숙한 UI를 제공하며,  <BoldText>다양한 사용자가 사용해도 편리하게 서비스를 이용할 수 있도록</BoldText> 노력하고 있습니다.
                </MyMindTxt>

                <SubTit># 소통과 피드백을 통한 협업.</SubTit>
                <MyMindTxt>
                  효율적인 협업을 위해 <BoldText>소통과 피드백 수용은 프로젝트의 핵심 요소</BoldText>라 생각합니다.<br />
                  팀원들과 원활한 커뮤니케이션을 위해 주기적으로 미팅을 하며 아이디어를 구체화하고, 피드백을 수용해 최근에는<br />
                  UI 디자인 개선을 하면서 사용자 경험을 높였습니다. 향후에도 사용자와의 소통을 강화해 <BoldText>더 나은 서비스를 제공하고 싶습니다.</BoldText>
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

export default AboutMe;
