import IcLineArrow from '../../assets/icons/IcLinekArrow';
import { ButtonNameT } from '../../types/type';
import { WhiteCricleBtn } from './Button.styled';

function GoTopBtn({ name }: ButtonNameT) {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <WhiteCricleBtn name={name} onClick={goToTop}>
      <IcLineArrow
        width={'20'}
        height={'20'}
      />
    </WhiteCricleBtn>
  )
}

export default GoTopBtn
