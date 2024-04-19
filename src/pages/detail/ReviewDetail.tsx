import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router-dom';

import CloseBtn from '../../components/button/CloseBtn';
import ReviewCard from '../../components/cards/ReviewCard';
import { reviewData } from '../../data/content/reviewData';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';

export const DetailContainer = tw.article`
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


function ReviewDetail() {
  const { pathname } = useLocation();
  const { closeModal } = useModal();

  return (
    <>
      {
        pathname === '/review' ? (
          <Modal>
            <DetailContainer>
              <DetailWrap>

                <Btns>
                  <CloseBtn closeModal={closeModal} />
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
          </Modal>
        ) : null
      }
    </>
  )
}

export default ReviewDetail;