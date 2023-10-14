import tw from 'tailwind-styled-components';
import IconClose from '../../assets/icons/icon_close.svg';

export const CloseButton = tw.button`
  w-[40px]
  h-[40px]
  flex
  items-center
  justify-center
  bg-[#373737]
  rounded-full

  hover:bg-[#525252]
`;

function CloseBtn({ toggleModal }: { toggleModal?: () => void }) {
  return (
    <CloseButton onClick={toggleModal}>
      <img src={IconClose} alt="Close" />
    </CloseButton>
  )
}

export default CloseBtn
