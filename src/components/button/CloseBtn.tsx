import tw from 'tailwind-styled-components';
import IconClose from '../../assets/icons/icon_close.svg';

export const CloseButton = tw.button`
  w-[40px]
  h-[40px]
  flex
  items-center
  justify-center
  bg-lightGray
  rounded-full

  hover:bg-[#525252]
`;

function CloseBtn({ closeModal }: { closeModal?: () => void }) {
  return (
    <CloseButton onClick={closeModal}>
      <img src={IconClose} alt="Close" />
    </CloseButton>
  )
}

export default CloseBtn
