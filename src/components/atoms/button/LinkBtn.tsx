import tw from 'tailwind-styled-components';
import HoverModal from '../../modal/HoverModal';

export const LinkButton = tw.a`
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

type LinkProps = {
  name: string;
  text: string;
  link?: string | undefined;
}


function LinkBtn({ name, text, link }: LinkProps) {
  const ICON_URL = 'src/assets/icons/icon_';
  return (
    <LinkButton href={link} title='바로가기'>
      <IconCircle>
        <img src={`${ICON_URL}${name}.svg`} alt={name} />
      </IconCircle>
      <Text>{text}</Text>
      <HoverModal />
    </LinkButton>
  )
}

export default LinkBtn
