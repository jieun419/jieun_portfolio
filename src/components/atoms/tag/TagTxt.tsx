import tw from 'tailwind-styled-components';

type TagT = {
  children: React.ReactNode;
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

function TagIcon({ children }: TagT) {
  return <TagTxt>{children}</TagTxt>
}

export default TagIcon;