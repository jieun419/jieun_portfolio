import { useEffect, useRef, useState } from 'react';

function useScrollToTarget(targetName: string) {
  const [isTarget, setIsTarget] = useState<boolean>(false);
  const targetRef = useRef<HTMLElement>(null);

  const scrollToTarget = () => {
    //* 해당 영역으로 스크롤 이동하기    
    document.querySelector(`#${targetName}`)?.scrollIntoView({
      behavior: 'smooth'
    })
  };

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        //* 스크롤 시 특정 영역인 경우 메뉴 active
        //TODO 코드 분석하기
        const targetRect = targetRef.current.getBoundingClientRect();
        if (targetRect.top < window.innerHeight / 3 && targetRect.bottom >= 0) {
          setIsTarget(true);
        } else {
          setIsTarget(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { targetRef, scrollToTarget, isTarget, setIsTarget, targetName };
}

export default useScrollToTarget;