import tw from 'tailwind-styled-components';
import IcArrow from '../../assets/icons/IcArrow';
import { useState } from 'react';
import Markdown from '../markdown/Markdown';

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
  flex-1
`;

export const PText = tw.p`
  text-base
  cursor-default
`;

const DetailUl = tw.ul`
  flex
  flex-col
  gap-3
`;

const DetailLi = tw.li`
  relative
  flex
  gap-1
  pl-3

  before:absolute 
  before:w-1 
  before:h-1 
  before:bg-[#000] 
  before:block 
  before:rounded-full 
  before:left-0 
  before:top-[0.625rem]
`;

type ToggleProps = {
  title?: string;
  detail?: string;
  detailList?: string[];
  isToggled?: boolean;
  type?: string;
};

function ToggleBox({ title, detail, detailList, isToggled, type }: ToggleProps) {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggleBtn = () => {
    setIsToggle((prev) => !prev)
  };

  return (
    <Toggle className={detail ? 'cursor-pointer' : ''}>
      <ToggleName onClick={toggleBtn}>
        {detail && <IcArrow isToggle={isToggle} isToggled={isToggled} />}
        <PTit>{title}</PTit>
      </ToggleName>

      {
        isToggle && type === 'tools' && detail && (
          <ToggleInfo>
            <PText>
              {detail}
            </PText>
          </ToggleInfo>
        )
      }

      {
        isToggle || isToggled && detailList &&
        <ToggleInfo>
          <DetailUl>
            {
              detailList.map((el) => (
                <DetailLi key={el}>
                  <Markdown>
                    {el}
                  </Markdown>
                </DetailLi>
              ))
            }
          </DetailUl>
        </ToggleInfo>
      }
    </Toggle>
  );
}

export default ToggleBox;