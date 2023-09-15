import tw from 'tailwind-styled-components';

export const TopButton = tw.button`
  fixed
  bottom-5
  right-5
  z-[2]
  shadow-lg
  w-[50px]
  h-[50px]
  flex
  items-center
  justify-center
  bg-white
  rounded-full
`;

export const Arrow = tw.i`
  relative
  block
  w-[15px]
  h-[15px]
  rotate-[315deg]
  mt-[8px]
  
  after:absolute
  after:top-0
  after:right-0
  after:h-[100%]
  after:w-[2px]
  after:bg-black

  before:absolute
  before:top-0
  before:right-0
  before:h-[2px]
  before:w-[100%]
  before:bg-black
`;

function GoTopBtn() {
  const goToTop = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  };
  return (
    <TopButton onClick={goToTop}>
      <Arrow />
    </TopButton>
  )
}

export default GoTopBtn
