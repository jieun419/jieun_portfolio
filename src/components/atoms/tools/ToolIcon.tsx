import tw from 'tailwind-styled-components';

type IconT = {
  stack: string;
};

export const IconBox = tw.div`
  relative
  bg-[#0C0C0C]
  w-full
  h-0
  pb-[100%]
  flex
  flex-1
  items-center
  justify-center
  rounded-2xl
`;

export const Img = tw.img`
  absolute
  w-2/1
  inset-2/4
  translate-y-[-50%]
  translate-x-[-50%]
`;

function StackIcon({ stack }: IconT) {
  const SRC_NAME = 'src/assets/icons/icon_';
  return (
    <IconBox>
      <Img src={`${SRC_NAME}${stack}.svg`} alt={`${stack}`} />
    </IconBox>
  )
}

export default StackIcon;