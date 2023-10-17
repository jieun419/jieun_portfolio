import tw from 'tailwind-styled-components';
import IcLineArrow from '../../assets/icons/IcLinekArrow';

export const TopButton = tw.button`
  w-[50px]
  h-[50px]
  shadow-lg
  flex
  items-center
  justify-center
  bg-white
  rounded-full
`;

function GoTopBtn() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <TopButton onClick={goToTop}>
      <IcLineArrow
        width={'20'}
        height={'20'}
      />
    </TopButton>
  )
}

export default GoTopBtn
