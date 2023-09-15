import { useRef, useState } from 'react';

function useScrollToTarget(nameed: string) {
  const [isTarget, setIsTarget] = useState<boolean>(false);

  const targetRef = useRef<HTMLElement>(null);

  const targetName = nameed

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(targetRef.current?.id === targetName){
      setIsTarget((prev) => !prev);
    }
    // setIsTarget((prev) => !prev);
    console.log('isTarget', isTarget, targetRef.current?.id, targetName)
  };

  return { targetRef, scrollToTarget, isTarget, targetName }

}

export default useScrollToTarget;