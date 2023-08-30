// import { styled } from 'styled-components'
import myImg from '../../../assets/images/jieun_img.webp';
// import { MainComponent, TxtWrap, MainTit, StTxt, BgTxt, SubTxt } from './Front.styled';
import tw from 'tailwind-styled-components';

export const MainComponent = tw.main`
  flex
  items-center
  flex-col
  bg-[#EFEFF1]  
  h-screen
  justify-between
  px-10
`;

export const TxtWrap = tw.section`
  flex
  items-center
  flex-col
  mb-20
  w-full
  mt-36
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
`;

export const MainTit = tw.h2`
  text-5xl
  font-black
  text-black
  font-normal
  mb-6
  relative
  z-10
  w-full
  text-center
`;

export const StTxt = tw.strong`
  font-black
`;

export const SubTxt = tw.p`
  font-normal
  text-xl
`;

const SocialList = tw.div`
  flex
  gap-5
  w-full
`;

const SocialLink = tw.a`
  font-medium
  relative
  after:content-['']
  after:w-full
  after:h-1
  after:bg-black
  after:block
`;

function Front() {
  return (
    <MainComponent>
      <SocialList>
        <SocialLink href="">Velog</SocialLink>
        <SocialLink href="">Github</SocialLink>
      </SocialList>
      <TxtWrap>
        <MainTit>
          프론트엔드 개발자 <StTxt>최지은</StTxt>입니다.
          <BgTxt>Front-End</BgTxt>
        </MainTit>
        <SubTxt>사용자를 생각하는 역지사지 마인드,</SubTxt>
        <SubTxt>포기하지 않고 책임감있게 일하는 개발자입니다.</SubTxt>
      </TxtWrap>
      <img src={myImg} alt="최지은 인물 사진" />
    </MainComponent>
  )
}

export default Front;