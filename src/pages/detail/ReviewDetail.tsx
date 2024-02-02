import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';

import CloseBtn from '../../components/button/CloseBtn';
import { overlayActions } from '../../store/overlay-slice';
import { RootState } from '../../store';
import DropShadow from '../../components/atoms/dropShadow/DropShadow';
import ReviewCard from '../../components/cards/ReviewCard';
import { reviewData } from '../../data/content/reviewData';

export const DetailContainer = tw.article`
  fixed
  inset-x-0
  inset-y-0
  z-10
  py-10
  px-40
  overflow-y-auto

  max-md:px-10
`;

export const DetailWrap = tw.section`
  relative
  w-full  
  mx-auto
`;

export const DetailBody = tw.section`
  grid 
  grid-cols-3
  grid-row-3
  gap-4
  pt-[3rem]
  h-auto
  w-full
  max-md:grid-cols-1
  max-lg:grid-cols-1
  max-xl:grid-cols-2
`;

export const PText = tw.p`
  text-base
`;

export const Btns = tw.div`
  fixed
  top-10
  right-[3rem]
  flex
  flex-col
  items-center
  gap-5
  z-10
`;


function ReviewDetail({ name }: { name: string }) {
  const dispatch = useDispatch();
  const isReviewOpen = useSelector((state: RootState) => state.overlay.isReviewOpen);
  const targetName = useSelector((state: RootState) => state.overlay.targetName);
  const openScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const toggleModal = () => {
    dispatch(overlayActions.toggleReviewOverlay());
    openScroll();
  };

  return (
    <>
      {
        isReviewOpen && targetName === name ? (
          <DetailContainer>
            <DropShadow toggleModal={toggleModal} />
            <DetailWrap>

              <Btns>
                <CloseBtn toggleModal={toggleModal} />
              </Btns>
              <DetailBody>
                {
                  reviewData.map((team, idx) => (
                    <ReviewCard
                      key={idx}
                      name={team.name}
                      review={team.review}
                    />
                  ))
                }
              </DetailBody>
            </DetailWrap>
          </DetailContainer>
        ) : null
      }
    </>
  )
}

export default ReviewDetail;