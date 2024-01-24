import tw from 'tailwind-styled-components';
import { ICON_URL } from '../../../utils/constant/constant';

type StackIconProps = {
  stack?: string;
  width?: string;
};

export const IconBox = tw.div<StackIconProps>`
  relative
  bg-[#0C0C0C]
  ${(props) => props.width}
  h-0
  pb-[3.125rem]
  flex
  items-center
  justify-center
  rounded-2xl
`;

export const Img = tw.img`
  absolute
  w-2/4
  h-1/2
  inset-2/4
  translate-y-[-50%]
  translate-x-[-50%]
`;

function StackIcon({ stack, width }: StackIconProps) {
  return (
    <IconBox width={width}>
      <Img src={`${ICON_URL}${stack}.svg`} alt={`${stack}`} loading='lazy' />
    </IconBox>
  )
}

export default StackIcon;