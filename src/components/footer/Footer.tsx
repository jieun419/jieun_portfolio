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

const FooterTxt = tw.p`
  text-[#A6A6A6]
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTxt>
        Copyright 2023. choijieun all rights reserved.
      </FooterTxt>
    </FooterContainer>
  );
}

export default Footer