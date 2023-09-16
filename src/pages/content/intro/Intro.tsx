import myImgIm from '../../../assets/images/jieun_im.webp';
import StackIcon from '../../../components/atoms/tools/ToolIcon';
import { MindData, StackData } from '../../../data/introData';

import tw from 'tailwind-styled-components';

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
`;

export const Content = tw.section`
  flex
  gap-10
  items-center
  text-[#EFEFF1]
  items-center
`;

export const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-[#EFEFF1]
  font-black
  text-6xl
`;

export const Tit = tw.h3`
  text-4xl
  font-black
`;

export const SubTit = tw.h5`
  text-xl
  font-bold
  pb-2
`;

export const LeftWrap = tw.div`
  flex
  justify-center
  flex-1
`;

export const RightWrap = tw.div`
  flex
  flex-col
  flex-1
  gap-10
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
  return (
    <IntroComponent>
      <SubJectTit>Intro</SubJectTit>
      <Content>
        <LeftWrap>
          <img src={myImgIm} alt="이모지 이미지" />
        </LeftWrap>
        <RightWrap>
          <MyMind>
            <Tit>Mind</Tit>
            <SubTit>{MindData.subtitle}</SubTit>
            <MyMindTxt>
              서비스를 개발할 때, 사용자가 불편을 겪지 않도록 주의 깊게 고려하는 것이 중요하다고 생각합니다.<br />
              스스로 개발을 잘했다 생각해도, 사용자가 이용에 불편을 가지고 있다면 UX를 제대로 고려하지 않았다고 볼 수 있습니다.<br />
              그래서 역지사지 마음가짐을 가지고, 항상 사용자의 관점에서 생각하며 개선하려고 노력하고 있습니다.<br />
              또한 협업은 성공적인 프로젝트를 위해 중요한 요소라고 생각합니다. 팀원들과의 원활한 커뮤니케이션과 피드백을 통해 구체화 하고 지속적으로 개선하고 싶습니다.
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
