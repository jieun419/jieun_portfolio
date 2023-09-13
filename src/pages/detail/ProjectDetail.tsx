
import tw from 'tailwind-styled-components';
import TagIcon from '../../components/atoms/tag/TagTxt';
import ProjectScreen from '../../components/atoms/projectScreen/ProjectScreen';

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
  h-screen
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

function ProjectDetail() {
  return (
    <DetailContainer>
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
      </DetailWrap>
    </DetailContainer>
  )
}

export default ProjectDetail;