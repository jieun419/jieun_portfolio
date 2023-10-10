import tw from 'tailwind-styled-components';

const FooterContainer = tw.footer`
  relative
  z-1
  px-10
  py-20
  bg-[#232323]
  flex
  flex-col
  gap-2
  items-center
  justify-center
`;

const Count = tw.div`
  
`;

const FooterTxt = tw.p`
  text-[#A6A6A6]
`;

function Footer() {
  return (
    <FooterContainer>
      <Count>
        <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjieun-portfolio.vercel.app%2Fhit-counter&count_bg=%232323&title_bg=%232323&icon=&icon_color=%23E7E7E7&title=&edge_flat=true" />
      </Count>
      <FooterTxt>
        Copyright 2023. choijieun all rights reserved.
      </FooterTxt>
    </FooterContainer>
  );
}

export default Footer