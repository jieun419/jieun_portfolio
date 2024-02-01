import tw from 'tailwind-styled-components';
import { ICON_URL } from '../../utils/constant/constant';

const HoverModalBox = tw.div`
  hidden
  absolute
  right-[4.6875rem]
  w-[18.75rem]
  h-auto
  bg-white
  rounded-sm
  drop-shadow-md
  p-3
  z-[10]
  transition-all
  cursor-default
  mt-[-1.25rem]

  group-hover:block animate-[right-modal-up_0.5s]

  max-md:right-0
  max-md:left-[-1rem]
  max-md:top-[4.5rem]
  max-sm:w-[calc(100vw-38vw)]
`;

const LinkTit = tw.span`
  block
  text-left
  text-xs
  pb-2
  font-medium
`;

const LinkList = tw.div`
  relative
  flex
  flex-col
  gap-1
`;

const GotoLink = tw.a`
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
  cursor-pointer

  hover:bg-[#e1e1e1]
`;

const Traiangle = tw.div`
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

  max-md:rotate-[270deg]
  max-md:top-[-0.6rem]
  max-md:right-[0]
  max-md:left-[1.5rem]
  
`;

const Arrow = tw.i`
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

type LinkT = {
  title?: string;
  url?: string;
}

interface BlogProps {
  blog?: LinkT[];
}

function HoverModal({ blog }: BlogProps) {
  return (
    <HoverModalBox>
      <LinkTit>관련 블로그 바로가기</LinkTit>
      <LinkList>
        {
          blog?.map((item, idx) => (
            <GotoLink
              key={idx}
              href={item.url}
              title='바로가기(새창)'
              target='_blank'
            >
              <img src={`${ICON_URL}blog.svg`} alt='' />
              {item.title}
              <Arrow />
            </GotoLink>
          ))
        }
      </LinkList>
      <Traiangle />
    </HoverModalBox>
  )
}

export default HoverModal;