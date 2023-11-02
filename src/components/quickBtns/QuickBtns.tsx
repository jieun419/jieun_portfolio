import tw from 'tailwind-styled-components';
import { useEffect, useState } from 'react';
import DataToolTip from '../toolTip/ToolTip';
import { quickBtnsData } from '../../utils/constant/constantx';

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
      {quickBtnsData.map((item) => (
        <DataToolTip key={item.id} dataTooltip={item.datatooltip} type={item.tooltiptype}>
          {item.icon}
        </DataToolTip>
      ))}
    </QuickBtns>
  );
}