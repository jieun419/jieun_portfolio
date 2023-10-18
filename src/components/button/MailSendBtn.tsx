import IcMail from '../../assets/icons/IcMail';
import { WhiteCricleBtn } from './Button.styled';

function MailSentBtn() {
  const goToSite = () => {
    window.open('https://forms.gle/YQXhTe4pD2qovnxh6');
  };

  return (
    <WhiteCricleBtn onClick={goToSite}>
      <IcMail
        width={'20'}
        height={'20'}
      />
    </WhiteCricleBtn>
  )
}

export default MailSentBtn
