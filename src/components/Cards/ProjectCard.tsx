import tw from 'tailwind-styled-components';
import TagIcon from '../atoms/tag/TagTxt';
import ThumbnailImg from '../atoms/thumbnail/ThumbnailImg';
import { useDispatch } from 'react-redux';
import { overlayActions } from '../../store/overlay-slice';
import { ProjectDataT } from '../../types/type';


export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  justify-start
  gap-8
  rounded
  bg-[#373737]
  relative
  h-[25rem]
  group
  transition-all
  
  hover:shadow-black
  hover:shadow-2xl
  hover:translate-y-[-5px]
`;

export const CardThumbnail = tw.div`
  overflow-hidden
  w-full
  h-[45%]
`;

export const TxtWrap = tw.div`
  px-5
  flex
  flex-col
  justify-start
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
  absolute
  bottom-0
  p-5
  flex
  gap-1
`;

export const HoverBox = tw.div`
  absolute
  z-[3]
  flex
  flex-col
  items-center
  justify-center
  gap-10
  text-white
  w-full
  h-full
  p-5
  bg-[#323232]
  opacity-0
  transition

  group-hover:opacity-100
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
  
  hover:bg-white
  hover:text-[#232323]
`;

function ProjectCard({ title, subject, tag, imgurl, name, giturl }: ProjectDataT) {
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
    <CardContainer>
      <HoverBox>
        <Tit>{title}</Tit>
        <BtnBox>
          <Button onClick={() => toggleModal(name)}>자세히 보기</Button>
          <Button onClick={() => window.open(giturl)}>Github 바로가기</Button>
        </BtnBox>
      </HoverBox>

      <CardThumbnail>
        <ThumbnailImg url={imgurl} />
      </CardThumbnail>

      <TxtWrap>
        <Tit>{title}</Tit>
        <Txt>{subject}</Txt>
      </TxtWrap>
      <Tags>
        {tag.map((tags, idx) => (
          <TagIcon key={idx} tag={tags} />
        ))}
      </Tags>
    </CardContainer>
  );
}

export default ProjectCard;