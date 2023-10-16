import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../utils/constant/constant';
import { DelayT } from '../../types/type';

export const SocialList = tw(motion.div)`
  flex
  gap-5
  w-full
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
  after:content-['']
  after:w-full
  after:h-1
  after:bg-black
  after:block
`;

function SocialLinkList({ delay }: DelayT) {
  return (
    <SocialList
      initial={OPACITY_0}
      animate={OPACITY_1}
      transition={{ ...ANI_TRANSITION, delay: delay }}
    >
      <SocialLink href='https://velog.io/@crg1050' title='바로가기(새창)' target='_blank'>Velog</SocialLink>
      <SocialLink href='https://github.com/jieun419' title='바로가기(새창)' target='_blank'>Github</SocialLink>
      <SocialLink href='https://overjoyed-process-2b8.notion.site/8716c49fa7ae4667b2694850020ec331?pvs=4' title='바로가기(새창)' target='_blank'>Resume</SocialLink>
    </SocialList>
  )
}

export default SocialLinkList;