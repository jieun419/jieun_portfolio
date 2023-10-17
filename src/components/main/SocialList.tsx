import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../utils/constant/constant';
import Tooltip from '../atoms/tooltip/Tooltip';

type PropsT = {
  width?: string;
}

export const SocialList = tw(motion.div) <PropsT>`
  flex
  gap-5
  ${(props) => props.width ? props.width : ''}
`;

export const SocialLink = tw.a`
  relative
  flex
  gap-1
  items-center
  flex-col
  z-20 
  font-medium
  relative
  py-1
  px-2
  transition-all
  ease-in-out
  duration-[0.3s]
  hover:text-[#fff]

  after:content-['']
  after:absolute
  after:bottom-[-2px]
  after:left-0
  after:z-[-1]
  after:w-full
  after:h-1
  after:bg-black
  after:block
  after:transition-all
  after:ease-in-out
  after:duration-[0.3s]

  hover:after:h-full
`;

export const ScTxt = tw.span`
  sr-only
  focus:not-sr-only
`;

function SocialLinkList({ delay, width }: { delay?: number, width?: string }) {
  return (
    <SocialList
      width={width}
      initial={OPACITY_0}
      animate={OPACITY_1}
      transition={{ ...ANI_TRANSITION, delay: delay && delay }}
    >

      <SocialLink data-tooltip-target="tooltip-bottom" data-tooltip-placement="a" href='https://velog.io/@crg1050' target='_blank'>
        Velog
      </SocialLink>
      <SocialLink href='https://github.com/jieun419' title='바로가기(새창)' target='_blank'>GitHub</SocialLink>
      <SocialLink href='https://overjoyed-process-2b8.notion.site/8716c49fa7ae4667b2694850020ec331?pvs=4' title='바로가기(새창)' target='_blank'>Resume</SocialLink>
      <Tooltip>블로그 바로가기</Tooltip>
    </SocialList>
  )
}

export default SocialLinkList;