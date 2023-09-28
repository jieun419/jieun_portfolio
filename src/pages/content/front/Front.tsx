import { useEffect, useRef } from 'react';

import myImg from '../../../assets/images/jieun_img.webp';
import { MainComponent, TxtWrap, MainTit, StTxt, BgTxt, SubTxt, SocialList, SocialLink, InfoTxtWrap, InfoTxt, Img, ScrollArrowBox } from './Front.styled';
import { UPDATE_DATA } from '../../../utils/constant/constant';
import IcLineArrow from '../../../assets/icons/IcLinekArrow';

function Front() {
  const vhRef = useRef(0);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, [isMobile]);

  return (
    <MainComponent isMobile={isMobile}>
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
        <MainTit
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          프론트엔드 개발자 <StTxt>최지은</StTxt>입니다.
          <BgTxt>Front-End</BgTxt>
        </MainTit>

        <SubTxt
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >사용자를 생각하는 역지사지 마인드,</SubTxt>
        <SubTxt
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
        >
          포기하지 않고 책임감있게 일하는 개발자입니다.</SubTxt>
      </TxtWrap>

      <Img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        src={myImg}
        isMobile={isMobile}
        alt="최지은 인물 사진"
      />
      <InfoTxtWrap>
        <InfoTxt>crg1050@gmail.com</InfoTxt>
        <InfoTxt>update. {UPDATE_DATA}</InfoTxt>
      </InfoTxtWrap>
    </MainComponent>
  )
}

export default Front;