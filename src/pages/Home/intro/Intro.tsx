import myImgIm from '../../../assets/images/jieun_im.webp';
import tw from 'tailwind-styled-components';

export const IntroComponent = tw.main`
  flex
  items-center
  flex-col
  justify-center
  bg-[#232323]
  h-auto
  px-10
  pt-10
  h-screen
`;

export const Content = tw.section`
  flex
  gap-10
  items-center
  text-[#EFEFF1]
`;

export const Tit = tw.h3`
  text-4xl
  font-black
`;

export const SubTit = tw.h5`
  text-xl
  font-bold
`;

export const LeftWrap = tw.div`
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

export const Skills = tw.div`
  flex
  flex-col
  gap-3
`;

export const SkillWrap = tw.div`
  flex
  gap-3
`;

function Intro() {
  return (
    <IntroComponent>
      <h2>Intro</h2>
      <Content>
        <LeftWrap>
          <img src={myImgIm} alt="이모지 이미지" />
        </LeftWrap>
        <RightWrap>
          <MyMind>
            <Tit>Mind</Tit>
            <SubTit>사용자를 생각하는 역지사지 마인드.</SubTit>
            <MyMindTxt>
              서비스를 개발할 때, 사용자가 불편을 겪지 않도록 주의 깊게 고려하는
              것이 중요하다고 생각합니다. <br />
              스스로 개발을 잘했다 생각해도, 사용자가 이용에 불편을 가지고 있다면 UX를 제대로 고려하지 않았다고 볼 수 있습니다.<br />
              그래서 역지사지 마음가짐을 가지고, 항상 사용자의 관점에서 생각하며 개선하려고 노력하고 있습니다.<br />
              또한 협업은 성공적인 프로젝트를 위해 중요한 요소라고 생각합니다. <br />
              팀원들과의 원활한 커뮤니케이션과 피드백을 통해 구체화 하고 지속적으로 개선하고 싶습니다.
            </MyMindTxt>
          </MyMind>

          <Skills>
            <Tit>Skill & Tools</Tit>
            <SkillWrap>
              <div>
                <SubTit>Front-end</SubTit>
              </div>
              <div>
                <SubTit>Design</SubTit>
              </div>
              <div>
                <SubTit>Cooperation</SubTit>
              </div>
            </SkillWrap>
          </Skills>
        </RightWrap>
      </Content>
    </IntroComponent>
  );
}

export default Intro;
