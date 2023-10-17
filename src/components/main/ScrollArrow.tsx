import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import IcLineArrow from '../../assets/icons/IcLinekArrow';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1, Y_0, Y_M20 } from '../../utils/constant/constant';
import { DelayT } from '../../types/type';

export const ScrollArrowBox = tw(motion.div)`
  absolute
  bottom-[3rem]
  left-[50%]
  translate-x-[-50%]
  z-[20]
  flex
  flex-col
  items-center
  rotate-180

  animate-bounce
`;

const ARROW_STYLES = { width: '25', height: '18', color: '#fff', direction: 'M26 2L14 14L2 2' }

function ScrollArrow({ delay }: DelayT) {
  return (
    <ScrollArrowBox
      initial={{ ...OPACITY_0, ...Y_M20 }}
      animate={{ ...OPACITY_1, ...Y_0 }}
      transition={{ ...ANI_TRANSITION, delay: delay }}
    >
      <IcLineArrow
        width={ARROW_STYLES.width}
        height={ARROW_STYLES.height}
        color={ARROW_STYLES.color}
        direction={ARROW_STYLES.direction}
      />
      <IcLineArrow
        width={ARROW_STYLES.width}
        height={ARROW_STYLES.height}
        color={ARROW_STYLES.color}
        direction={ARROW_STYLES.direction}
      />
    </ScrollArrowBox>
  )
}

export default ScrollArrow;