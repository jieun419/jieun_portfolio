import { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useDispatch } from 'react-redux';

import TagIcon from '../../components/atoms/tag/TagTxt';
import ProjectScreen from '../../components/atoms/projectScreen/ProjectScreen';
import ToggleBox from '../../components/toggle/ToggleBox';
import CloseBtn from '../../components/atoms/button/CloseBtn';
import LinkBtn from '../../components/atoms/button/LinkBtn';
import { overlayActions } from '../../store/overlay-slice';

export const DetailContainer = tw.article`
  fixed
  inset-x-0
  inset-y-0
  z-10
  py-10
  px-32
  overflow-y-auto
`;

export const DropShadow = tw.div`
  fixed
  inset-x-0
  inset-y-0
  bg-black
  opacity-60
  z-[-1]
`;

export const DetailWrap = tw.section`
  relative
  w-full
  max-w-[93.75rem]
  bg-white
`;

export const DetailTop = tw.section`
  relative
  flex
  flex-col
  items-center
  z-[1]
  p-10

  before:block
  before:absolute
  before:top-0 
  before:left-0
  before:w-full
  before:h-[70%]
  before:bg-[#77D1FD]
  before:z-[-1]

  after:block
  after:absolute
  after:top-0 
  after:left-0
  after:w-full
  after:h-[70%]
  after:bg-gradient-to-t from-[#00000045]
  after:z-[-1]
`;

export const ProjectTit = tw.h3`
  text-white
  text-4xl
  font-bold
  mt-2
  mb-4
`;

export const ProjectDate = tw.span`
  flex
  gap-5
  mb-4
`;

export const DateTxt = tw.span`
  text-white
  text-sm
`;

export const Tags = tw.div`
  flex
  gap-1
`;

export const DetailBody = tw.section`
  px-[20%]
  pb-10
  flex
  flex-col
  gap-10
  text-base
`;

export const ProjectInfoTxt = tw.p`
  text-center
  border-solid
  border-[#dcdcdc]
  pb-10
  border-b-[1px]
`;

export const PWrap = tw.div`
  
`;

export const PTitle = tw.h3`
  text-2xl
  font-bold
  mt-2
  mb-4
`;

export const PText = tw.p`
  text-base
`;

export const Toggles = tw.div`
  flex
  flex-col
  gap-1
`;

export const Btns = tw.div`
  fixed
  right-10
  flex
  flex-col
  items-center
  gap-5
`;

function ProjectDetail() {
  const [isToggle, setIsToggle] = useState<boolean>(false)

  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(overlayActions.toggleOverlay());
  };

  const toggleBtn = () => {
    setIsToggle((prev) => !prev)
  };

  return (
    <DetailContainer>
      <Btns>
        <CloseBtn toggleModal={toggleModal} />
        <LinkBtn link='github_bk' text='github' />
        <LinkBtn link='link' text='배포 링크' />
        <LinkBtn link='blog' text='회고 블로그' />
        <LinkBtn link='review' text='팀원 리뷰' />
      </Btns>
      <DropShadow />
      <DetailWrap>
        <DetailTop>
          <Tags>
            <TagIcon tag={'팀 프로젝트'} />
            <TagIcon tag={'반응형'} />
          </Tags>
          <ProjectTit>HARUMATE (하루메이트)</ProjectTit>
          <ProjectDate>
            <DateTxt>2023.07 - 2023.08</DateTxt>
            <DateTxt>6인 (프론트엔드 3명, 백엔드 3명)</DateTxt>
          </ProjectDate>
          <ProjectScreen projectName={'haru'} />
        </DetailTop>

        <DetailBody>
          <ProjectInfoTxt>
            당일 일정에서 하루,친구의 mate를 합쳐서 서비스명을 “하루메이트”로 짓게 되었습니다

            하루메이트는 당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스입니다.
            친구와 놀러가기 위해서 계획을 짤 때 일정을 편리하게 공유하면 좋겠다는 생각으로 부터 시작되었습니다.

            일정 생성 과정이 지나치게 복잡한 서비스들이 대부분입니다.
            저희의 목표는 사용자들이 더욱 쉽고 간편하게 일정을 만들고 공유 할 수 있는 서비스를 제공하는 것입니다.
          </ProjectInfoTxt>

          <PWrap>
            <PTitle>사용 기술</PTitle>
            <Toggles>
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
            </Toggles>
          </PWrap>
          <PWrap>
            <PTitle>작업 기여도</PTitle>
            <Toggles>
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
              <ToggleBox toggleBtn={toggleBtn} isToggle={isToggle} />
            </Toggles>
          </PWrap>


        </DetailBody>
      </DetailWrap>
    </DetailContainer>
  )
}

export default ProjectDetail;