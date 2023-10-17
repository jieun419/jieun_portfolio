import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { motion } from 'framer-motion';

import { isMobile } from '../../../utils/isMobile';
import myImg from '../../../assets/images/jieun_img.webp';
import SocialLinkList from '../../../components/main/SocialList';
import ScrollArrow from '../../../components/main/ScrollArrow';
import InfoWrap from '../../../components/main/InfoWrap';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../../utils/constant/constant';
import TextWrap from '../../../components/main/TextWrap';
import { MainComponent, Img } from './Main.styled';
import MainBackground from '../../../components/atoms/background/MainBackground';

function Main() {
  const vhRef = useRef(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const isPosition = useSelector((state: RootState) => state.position.isPosition);

  // 모바일 환경에서 높이 딱 맞춰 나오도록
  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, []);

  // 애니메이션이 이루어 지는 동안에는 스크롤 금지, 메인 화면에서만 동작 되도록
  useEffect(() => {
    const mainSection = mainRef.current?.getBoundingClientRect();
    if (mainSection?.top === 0) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        document.body.style.overflow = ''
      }, 3000)
    }
  }, [])

  const goToTarget = () => {
    const aboutme = document.querySelector('#aboutme');
    aboutme?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <motion.div className={`top-0 ${isPosition}`}>
      <MainComponent ref={mainRef} isMobile={isMobile}>
        <MainBackground
          initial={{ ...OPACITY_0, scale: 1.25 }}
          animate={{ ...OPACITY_1, scale: 1 }}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
        />

        <ScrollArrow delay={3.9} />

        <SocialLinkList delay={3} width='w-full' />

        <TextWrap />

        <Img
          onClick={goToTarget}
          initial={OPACITY_0}
          animate={OPACITY_1}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
          src={myImg}
          isMobile={isMobile}
          alt="최지은 인물 사진"
        />

        <InfoWrap delay={3} />

      </MainComponent>
    </motion.div>
  )
}

export default Main;
