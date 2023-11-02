import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, socialLink } from '../../utils/constant/constant';
import DataToolTip from '../toolTip/ToolTip';

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
      {socialLink.map((item) => (
        <DataToolTip key={item.id} dataTooltip={item.datatooltip} type={item.tooltiptype}>
          <SocialLink href={item.href} aria-label={item.arialabel} target={item.target}>
            {item.arialabel}
          </SocialLink>
        </DataToolTip>
      ))}
    </SocialList>
  )
}

export default SocialLinkList;