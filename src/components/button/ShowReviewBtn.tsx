import tw from 'tailwind-styled-components';

import IcLineArrow from '../../assets/icons/IcLinekArrow';
import useModal from '../../hooks/useModal';

export const ShowReviewButton = tw.button`
  relative
  flex
  items-center
  justify-between
  gap-12
  bg-mainGray
  rounded-full
  py-3
  px-5
  shadow-lg
  transition-all

  after:absolute
  after:left-[50%]
  after:top-[50%]
  after:translate-y-[-50%]
  after:translate-x-[-50%]
  after:rounded-full
  after:w-full
  after:h-full
  after:bg-white
  after:opacity-0
  after:z-[0]
  after:transition-all
  
  hover:after:opacity-40
  hover:after:scale-y-[1.22]
  hover:after:scale-x-[1.06]
`;

export const BtnTxt = tw.span`
  relative
  z-[2]
  text-mainBlack
  font-bold
  text-sm
`;

export const ArrowWrap = tw.span`
  relative
  z-[2]
  rotate-90
`;

function ShowReviewBtn({ children, handelImgChange }: {
  children: React.ReactNode;
  handelImgChange?: () => void;
}) {
  const { openModal } = useModal();

  return (
    <ShowReviewButton onMouseEnter={handelImgChange} onMouseLeave={handelImgChange} onClick={() => openModal('review')}>
      <BtnTxt>{children}</BtnTxt>
      <ArrowWrap>
        <IcLineArrow
          width='13'
          height='13'
          color='#232323'
        />
      </ArrowWrap>
    </ShowReviewButton>
  );
}

export default ShowReviewBtn;
