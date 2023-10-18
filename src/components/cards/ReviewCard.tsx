import tw from 'tailwind-styled-components';
import IcRest from '../../assets/icons/IcRest';

type ReviewProps = {
  name: string;
  review: string;
};

type StylePropsT = {
  isActive?: boolean;
};

export const ReviewCardContainer = tw.div<StylePropsT>`
  flex
  flex-col
  gap-2
  rounded-md
  p-5
  h-auto
  w-full
  backdrop-blur-sm
  bg-white/80
  transition-all

  hover:bg-white/100
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

function ReviewCard({ name, review }: ReviewProps) {
  const sliceName = name.split('').map((name, idx) => idx === 1 ? '*' : name).join('');

  return (
    <ReviewCardContainer>
      <IcRest />
      <ReviewBox>
        <ReviewTxt>
          {review}
        </ReviewTxt>
        <Reviewer>
          {sliceName}
        </Reviewer>
      </ReviewBox>
    </ReviewCardContainer>
  )
}

export default ReviewCard;