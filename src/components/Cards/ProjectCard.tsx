import tw from 'tailwind-styled-components';
import TagIcon from '../atoms/tag/TagTxt';
import ThumbnailImg from '../atoms/thumbnail/ThumbnailImg';

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  rounded
  bg-[#373737]
  relative
  h-[25rem]
  justify-between
  group
`;

export const CardThumbnail = tw.div`
  
`;

export const TxtWrap = tw.div`
  p-5
  flex
  flex-col
  gap-3
  text-[#fff]
`;

export const Tit = tw.h4`
  font-bold
  text-2xl
`;

export const Txt = tw.p`
  text-base
  text-[#A6A6A6]
`;

export const Tags = tw.div`
  p-5
  flex
  gap-1
`;

export const HoverBox = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-10
  text-white
  absolute
  w-full
  h-full
  p-5
  bg-[#373737]
  opacity-0
  transition
  group-hover:opacity-90
`;

export const BtnBox = tw.div`
  flex
  flex-col
  gap-3
`;

export const Button = tw.button`
  p-3
  border-[1px]
  border-solid
  border-white
  text-white
  rounded
  transition
  hover:bg-[#232323]
`;

function ProjectCard() {
  return (
    <CardContainer>
      <HoverBox>
        <Tit>HARUMATE (하루메이트)</Tit>
        <BtnBox>
          <Button>자세히 보기</Button>
          <Button>Github 바로가기</Button>
        </BtnBox>
      </HoverBox>
      <CardThumbnail>
        <ThumbnailImg projectName={'haru'} />
      </CardThumbnail>
      <TxtWrap>
        <Tit>HARUMATE (하루메이트)</Tit>
        <Txt>당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스</Txt>
      </TxtWrap>
      <Tags>
        <TagIcon tag={'팀 프로젝트'} />
        <TagIcon tag={'반응형'} />
      </Tags>
    </CardContainer>
  );
}

export default ProjectCard;