import tw from 'tailwind-styled-components';
import GoTopBtn from '../button/GotoTopBtn';
import { useEffect, useState } from 'react';

type PropsT = {
  opacity: boolean
}

export const QuickBtns = tw.div<PropsT>`
  fixed
  bottom-5
  right-5
  z-[2]
  flex
  flex-col
  gap-1
  items-center
  justify-center
  transition-all

  ${(props) => props.opacity ? 'opacity-1' : 'opacity-0'}
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
    <QuickBtns opacity={SCROLL_POSITON}>
      <GoTopBtn />
    </QuickBtns>
  );
}