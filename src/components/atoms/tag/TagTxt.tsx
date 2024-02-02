import tw from 'tailwind-styled-components';

type TagT = {
  tag: string | React.ReactNode;
};

export const TagTxt = tw.span`
  felx
  items-center
  justify-center
  text-xs
  text-white
  bg-[#232323]
  px-3
  py-1
  rounded
`;

function TagText({ tag }: TagT) {
  return <TagTxt>{tag}</TagTxt>
}

export default TagText;