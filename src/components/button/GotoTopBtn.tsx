import IcLineArrow from '../../assets/icons/IcLinekArrow';
import { WhiteCricleBtn } from './Button.styled';

function GoTopBtn() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <WhiteCricleBtn onClick={goToTop}>
      <IcLineArrow
        width={'20'}
        height={'20'}
      />
    </WhiteCricleBtn>
  )
}

export default GoTopBtn
