import tw from 'tailwind-styled-components';

export const CloseButton = tw.button`
  flex
  flex-col
  items-center
  justify-center
  gap-1
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
  text-sm
  font-medium
`;

function LinkBtn({ link, text }: { link: string, text: string }) {
  const ICON_URL = 'src/assets/icons/icon_';
  return (
    <CloseButton>
      <IconCircle>
        <img src={`${ICON_URL}${link}.svg`} alt={link} />
      </IconCircle>
      <Text>{text}</Text>
    </CloseButton>
  )
}

export default LinkBtn
