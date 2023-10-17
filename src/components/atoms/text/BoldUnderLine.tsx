import tw from 'tailwind-styled-components';
import { ChildernT } from '../../../types/type';


export const BoldUnderLineTxt = tw.strong`
  font-bold
  text-[106%]
  decoration-1
  underline
`;

function BoldText({ children }: ChildernT) {
  return <BoldUnderLineTxt>{children}</BoldUnderLineTxt>
}

export default BoldText;