import tw from 'tailwind-styled-components';
import GoTopBtn from '../button/GotoTopBtn';
import { useEffect, useState } from 'react';
import MailSentBtn from '../button/MailSendBtn';
import DataToolTip from '../toolTip/ToolTip';

export const QuickBtns = tw.div`
  fixed
  bottom-5
  right-5
  z-[2]
  flex
  flex-col
  gap-3
  items-center
  justify-center
  transition-all
`

export default function App() {

  const [scrollPosition, setIsScrollPosition] = useState(0);
  const SCROLL_POSITON = scrollPosition > 100

  const getScrollPosition = () => {
    setIsScrollPosition(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition)
    return () => {
      window.removeEventListener('scroll', getScrollPosition)
    }
  });

  return (
    <QuickBtns className={SCROLL_POSITON ? 'opacity-1' : 'opacity-0'}>
      <DataToolTip dataTooltip='피드백 주기' type='left'>
        <MailSentBtn />
      </DataToolTip>
      <DataToolTip dataTooltip='위로가기' type='left'>
        <GoTopBtn />
      </DataToolTip>

    </QuickBtns>
  );
}