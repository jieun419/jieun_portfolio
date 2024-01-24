import tw from 'tailwind-styled-components';
import { useRef } from 'react';

type PropsT = {
  imgurl: string;
  subject: string;
  toggleImgModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id: number;
};

export const ImgCont = tw.div`
  cursor-pointer
  flex
  flex-col
  gap-1
  items-center

  hover:opacity-80
`;

export const Imgsubject = tw.p`
  text-sm
  text-[#999]

  max-md:text-[0.75rem]
`;

export const Img = tw.img`
  border-solid
  border-[1px]
  border-[#eaeaea]
`;

function ProjectImgCard({ imgurl, subject, toggleImgModal, id }: PropsT) {
  const imgRef = useRef<HTMLDivElement>(null);
  const strId = String(id);

  return (
    <ImgCont id={strId} ref={imgRef} onClick={(e) => toggleImgModal(e)}>
      <Img src={imgurl} loading='lazy' alt='프로젝트 구현 화면' />
      <Imgsubject>{subject}</Imgsubject>
    </ImgCont>
  )
}

export default ProjectImgCard;
