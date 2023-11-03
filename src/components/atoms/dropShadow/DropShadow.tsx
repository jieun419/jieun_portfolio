import tw from 'tailwind-styled-components';

type DropShadowProps = {
  toggleModal?: () => void;
}

export const DropShadowWrap = tw.div`
  fixed
  inset-x-0
  inset-y-0
  bg-black/80
  opacity-100
  z-[-1]
  backdrop-blur-sm
`;


function DropShadow({ toggleModal }: DropShadowProps) {
  return <DropShadowWrap onClick={toggleModal} />
}

export default DropShadow;