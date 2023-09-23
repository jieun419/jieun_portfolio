import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';

import myImgIm from '../../../assets/images/jieun_im.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { MindData, StackData } from '../../../data/introData';
import ReviewDetail from '../../detail/ReviewDetail';
import { RootState } from '../../../store';
import ShowReviewBtn from '../../../components/button/ShowReviewBtn';

export const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-[#232323]
  h-auto
  px-10
  pt-10
  h-screen
  z-1

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
  whitespace-pre-wrap
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
  const isModal = useSelector((state: RootState) => state.overlay.isOpen);

  return (
    <IntroComponent>

      {isModal ? <ReviewDetail name='review' /> : null}

      <SubJectTit>About me</SubJectTit>
      <Content>

        <LeftWrap>
          <Img src={myImgIm} alt="이모지 이미지" />
          <ShowReviewBtn />
        </LeftWrap>

        <RightWrap>
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
    </IntroComponent >
  );
}

export default Intro;
