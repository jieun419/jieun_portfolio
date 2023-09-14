import tw from 'tailwind-styled-components';

export const HoverModalBox = tw.div`
  hidden
  absolute
  right-[75px]
  w-[300px]
  h-auto
  bg-white
  rounded-sm
  shadow-md
  p-3
  z-[-1]
  transition-all
  cursor-default
  mt-[-20px]

  group-hover:block animate-[right-modal-up_0.5s]
`;

export const LinkTit = tw.span`
  block
  text-left
  text-xs
  pb-2
  font-medium
`;

export const LinkList = tw.div`
  relative
  flex
  flex-col
  gap-1
`;

export const GotoLink = tw.a`
  flex
  items-center
  gap-2
  font-medium
  text-xs
  text-left
  bg-[#F1F1F1]
  py-3
  px-3
  transition-all

  hover:bg-[#e1e1e1]
`;

export const Traiangle = tw.div`
  absolute
  top-[50%]
  right-[-18px]
  translate-y-[-50%]
  w-0 h-0 
  border-b-[10px] border-b-[transparent]
  border-l-[10px] border-l-white
  border-t-[10px] border-t-[transparent]
  border-r-[10px] border-r-[transparent]
  border-solid
  rounded-sm
`;

export const Arrow = tw.i`
  block
  absolute
  w-[8px]
  h-[8px]
  right-3
  rotate-45
  
  after:absolute
  after:top-0
  after:right-0
  after:h-[100%]
  after:w-px
  after:bg-black

  before:absolute
  before:top-0
  before:h-px
  before:w-[100%]
  before:bg-black
`;

function HoverModal() {
  return (
    <HoverModalBox>
      <LinkTit>회고 블로그</LinkTit>
      <LinkList>
        <GotoLink href='' title='' target=''>
          <img src={`src/assets/icons/icon_blog.svg`} alt='' />
          커서 커스터마이징
          <Arrow />
        </GotoLink>
      </LinkList>
      <Traiangle />
    </HoverModalBox>
  )
}

export default HoverModal;