import myImg from '../../../assets/images/jieun_img.webp';
import { MainComponent, TxtWrap, MainTit, StTxt, BgTxt, SubTxt, SocialList, SocialLink, InfoTxt, Img, ScrollArrowBox } from './Front.styled';
import { UPDATE_DATA } from '../../../utils/constant/constant';
import IcLineArrow from '../../../assets/icons/IcLinekArrow';

function Front() {
  return (
    <MainComponent>
      <ScrollArrowBox>
        <IcLineArrow
          width='25'
          height='18'
          color='#fff'
          direction='M26 2L14 14L2 2'
        />
         <IcLineArrow
          width='25'
          height='18'
          color='#fff'
          direction='M26 2L14 14L2 2'
        />
      </ScrollArrowBox>
      <SocialList>
        <SocialLink href='https://velog.io/@crg1050' title='바로가기(새창)' target='_blank'>Velog</SocialLink>
        <SocialLink href='https://github.com/jieun419' title='바로가기(새창)' target='_blank'>Github</SocialLink>
      </SocialList>
      <TxtWrap>
        <MainTit>
          프론트엔드 개발자 <StTxt>최지은</StTxt>입니다.
          <BgTxt>Front-End</BgTxt>
        </MainTit>
        <SubTxt>사용자를 생각하는 역지사지 마인드,</SubTxt>
        <SubTxt>포기하지 않고 책임감있게 일하는 개발자입니다.</SubTxt>
      </TxtWrap>
      <Img src={myImg} alt="최지은 인물 사진" />
      <InfoTxt>
        <p>crg1050@gmail.com</p>
        <span>update. {UPDATE_DATA}</span>
      </InfoTxt>
    </MainComponent>
  )
}

export default Front;