import tw from 'tailwind-styled-components';
import { useDispatch } from 'react-redux';

import IcLineArrow from '../../assets/icons/IcLinekArrow';
import { overlayActions } from '../../store/overlay-slice';

export const ShowReviewButton = tw.button`
  relative
  flex
  items-center
  justify-between
  gap-10
  bg-[#373737]
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
  after:bg-[#EFEFF1]
  after:opacity-0
  after:z-[0]
  after:transition-all
  
  hover:after:opacity-10
  hover:after:scale-y-[1.2]
  hover:after:scale-x-[1.06]
`;

export const BtnTxt = tw.span`
  relative
  z-1
  text-white
  font-bold
  text-sm
`;

export const ArrowWrap = tw.span`
  relative
  z-1
  rotate-90
`;


function ShowReviewBtn() {
  const dispatch = useDispatch();

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const toggleModal = (name: string) => {
    dispatch(overlayActions.toggleOverlay());
    dispatch(overlayActions.targetName(name));
    lockScroll();
  };

  return (

    <ShowReviewButton onClick={() => toggleModal('review')}>
      <BtnTxt>팀원 리뷰 보기</BtnTxt>
      <ArrowWrap>
        <IcLineArrow
          width='13'
          height='13'
          color='#fff'
        />
      </ArrowWrap>
    </ShowReviewButton>
  );
}

export default ShowReviewBtn;
