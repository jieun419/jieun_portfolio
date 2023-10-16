import tw from 'tailwind-styled-components';
import IcRest from '../../assets/icons/IcRest';

export const ReviewCardContainer = tw.div`
  flex
  flex-col
  gap-2
  rounded-md
  p-5
  h-auto
  w-full
  backdrop-blur-sm
  bg-white/80
`;

export const ReviewBox = tw.div`
  flex
  flex-col
  gap-5
  justify-between
  h-full
`;

export const ReviewTxt = tw.p`
  text-base
  text-mainBlack
  font-medium
`;

export const Reviewer = tw.span`
  text-sm
  font-medium
  text-[#555]
`;

type reviewProps = {
  name: string;
  review: string;
}

function ReviewCard({ name, review }: reviewProps) {

  const sliceStr = name.split('').map((el, idx) => idx === 1 ? '*' : el).join('')

  return (
    <ReviewCardContainer>
      <IcRest />
      <ReviewBox>
        <ReviewTxt>
          {review}
        </ReviewTxt>
        <Reviewer>
          {sliceStr}
        </Reviewer>
      </ReviewBox>
    </ReviewCardContainer>
  )
}

export default ReviewCard;