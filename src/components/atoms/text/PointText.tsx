import tw from 'tailwind-styled-components';
import { ChildernT } from '../../../types/type';


export const PointTxt = tw.div`
  relative inline-block
  z-1
  m-0.5
  py-0.5
  px-1
  bg-mainBlack
  rounded-md
`;

export const Txt = tw.span`
  relative inline-block
  font-bold
  text-[106%]
  z-1
`;

function PointText({ children }: ChildernT) {
  return <PointTxt><Txt>{children}</Txt></PointTxt>
}

export default PointText;