import tw from 'tailwind-styled-components';
import IcArrow from '../../assets/icons/IcArrow';

export const Toggle = tw.div`
  flex
  flex-col
  cursor-pointer
`;

export const ToggleName = tw.div`
  flex
  gap-2
  items-center
  bg-[#EFEFF1]
  py-2
  px-3
  font-medium
`;

export const ToggleInfo = tw.div`
  py-2
  px-3
`;

export const PText = tw.p`
  text-base
`;

type ToggleProps = {
  toggleBtn: () => void;
  isToggle: boolean;
  title: string;
  detail: string;

};

function ToggleBox({ toggleBtn, isToggle, title, detail }: ToggleProps) {
  return (
    <Toggle>

      <ToggleName onClick={toggleBtn}>
        <IcArrow isToggle={isToggle} />
        <PText>{title}</PText>
      </ToggleName>

      {isToggle
        ? <ToggleInfo>
          <PText>
          {detail}
          </PText>
        </ToggleInfo>
        : null
      }
    </Toggle >
  );
}

export default ToggleBox;