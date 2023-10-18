import tw from 'tailwind-styled-components';
import IcArrow from '../../assets/icons/IcArrow';
import { useState } from 'react';

export const Toggle = tw.div`
  flex
  flex-col
`;

export const ToggleName = tw.div`
  flex
  gap-2
  items-center
  bg-mainGray
  py-2
  px-3
  font-medium
  transition-all

  hover:bg-[#e1e1e1]
`;

export const ToggleInfo = tw.div`
  py-2
  px-3
`;

export const PTit = tw.p`
  text-base
`;

export const PText = tw.p`
  text-base
  cursor-default
`;

type ToggleProps = {
  title: string;
  detail: string;

};

function ToggleBox({ title, detail }: ToggleProps) {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggleBtn = () => {
    setIsToggle((prev) => !prev)
  };

  return (
    <Toggle className={detail ? 'cursor-pointer' : ''}>
      <ToggleName onClick={toggleBtn}>
        {detail && <IcArrow isToggle={isToggle} />}
        <PTit>{title}</PTit>
      </ToggleName>

      {
        isToggle && detail &&
        <ToggleInfo>
          <PText>
            {detail}
          </PText>
        </ToggleInfo>
      }
    </Toggle>
  );
}

export default ToggleBox;