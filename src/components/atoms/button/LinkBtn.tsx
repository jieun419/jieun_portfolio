import tw from 'tailwind-styled-components';
import HoverModal from '../../modal/HoverModal';

export const LinkButton = tw.button`
  flex
  flex-col
  items-center
  justify-center
  gap-1
  px-3
  w-full
  group
`;

export const IconCircle = tw.i`
  w-[47px]
  h-[47px]
  flex
  items-center
  justify-center
  bg-white
  rounded-full
`;

export const Text = tw.span`
  text-white
  text-xs
  font-medium
`;

function LinkBtn({ link, text }: { link: string, text: string }) {
  const ICON_URL = 'src/assets/icons/icon_';
  return (
    <LinkButton>
      <IconCircle>
        <img src={`${ICON_URL}${link}.svg`} alt={link} />
      </IconCircle>
      <Text>{text}</Text>
      <HoverModal />
    </LinkButton>
  )
}

export default LinkBtn
