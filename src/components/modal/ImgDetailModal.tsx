import tw from 'tailwind-styled-components';
import DropShadow from '../atoms/dropShadow/DropShadow';
import CloseBtn from '../button/CloseBtn';
import { overlayActions } from '../../store/overlay-slice';
import { useDispatch } from 'react-redux';

type propsT = {
  imgUrl?: string;
}

export const ImgModalBox = tw.div`
  fixed
  flex
  items-center
  justify-center
  inset-x-0
  inset-y-0
  z-[20]
  px-40
  overflow-y-auto

  max-xl:px-30
  max-md:px-0
`;

export const ImgBox = tw.div`
  relative
  w-screen
  max-w-[calc(100vw-40vw)]
  flex
  flex-col
  items-end
  gap-10

  max-xl:max-w-[calc(100vw-30vw)]
  max-md:max-w-[100vw]
`;

export const BtnBox = tw.div`
  absolute
  top-3
  right-3
  opacity-80
`;

export const Img = tw.img`
  w-full
  rounded-md
`

function ImgDetailModal({ imgUrl }: propsT) {

  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(overlayActions.toggleImgOverlay());
  };

  return (
    <ImgModalBox>
      <DropShadow closeModal={toggleModal} />
      <ImgBox>
        <BtnBox>
          <CloseBtn closeModal={toggleModal} />
        </BtnBox>
        <Img src={imgUrl} alt='project img' />
      </ImgBox>
    </ImgModalBox>
  )
}

export default ImgDetailModal;