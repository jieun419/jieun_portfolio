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

function ToggleBox({
  toggleBtn,
  isToggle
}: {
  toggleBtn: () => void,
  isToggle: boolean
}) {
  return (
    <Toggle>
      <ToggleName onClick={toggleBtn}>
        <IcArrow isToggle={isToggle} />
        <PText>Vite</PText>
      </ToggleName>
      {isToggle
        ? <ToggleInfo>
          <PText>
            Vite는 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른 개발 서버 시작 및 주문형 컴파일을 가능하게 합니다.
            이로 인해 CRA의 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험을 얻을 수 있었습니다.
          </PText>
        </ToggleInfo>
        : null
      }
    </Toggle>
  );
}

export default ToggleBox;