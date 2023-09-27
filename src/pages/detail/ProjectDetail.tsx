import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';

import TagIcon from '../../components/atoms/tag/TagTxt';
import ProjectScreen from '../../components/atoms/projectScreen/ProjectScreen';
import ToggleBox from '../../components/toggle/ToggleBox';
import CloseBtn from '../../components/button/CloseBtn';
import LinkBtn from '../../components/button/LinkBtn';
import { overlayActions } from '../../store/overlay-slice';
import { ProjectDetailDataT } from '../../types/type';
import { RootState } from '../../store';
import DropShadow from '../../components/atoms/dropShadow/DropShadow';

type ProjectDataProps = {
  pointcolor?: string;
  imgurl?: string;
}

export const DetailContainer = tw.article`
  fixed
  inset-x-0
  inset-y-0
  z-10
  py-10
  px-40
  overflow-y-auto

  max-md:px-0
  max-md:py-0
`;

export const DetailWrap = tw.section<ProjectDataProps>`
  relative
  w-full
  mx-auto
  bg-white
  ${(props) => props.imgurl ? 'h-auto' : 'h-screen'}

  max-md:h-auto
`;

export const DetailTop = tw.section<ProjectDataProps>`
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
  ${(props) => props.pointcolor ? props.pointcolor : 'before:bg-[#e1e1e1]'}
  ${(props) => props.imgurl ? 'before:h-[70%]' : 'before:h-[85%]'}
  before:z-[-1]

  after:block
  after:absolute
  after:top-0 
  after:left-0
  after:w-full
  ${(props) => props.imgurl ? 'after:h-[70%]' : 'after:h-[85%]'}
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

  max-md:px-[5%]
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
  top-10
  right-[3rem]
  flex
  flex-col
  items-center
  gap-5
  z-10

  max-md:sticky
  max-md:flex-row-reverse
  max-md:justify-between
  max-md:top-0
  max-md:rignt-0
  max-md:bg-white
  max-md:backdrop-blur-sm
  max-md:px-3
  max-md:py-2
  max-md:border-solid
  max-md:border-b
  max-md:border-[#dcdcdc]
`;

export const ContBtns = tw.div`
  flex
  flex-col
  gap-5
  max-md:flex-row
  max-md:gap-4
`;

function ProjectDetail({ name, pointcolor, title, subtext, data, team, tag, imgurl, giturl, depoloyurl, blogurl, tools, parts }: ProjectDetailDataT) {
  const dispatch = useDispatch();
  const targetName = useSelector((state: RootState) => state.overlay.targetName);

  const openScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const toggleModal = () => {
    dispatch(overlayActions.toggleOverlay());
    openScroll();
  };

  return (
    <>
      {
        targetName === name ? (
          <DetailContainer>
            <DropShadow toggleModal={toggleModal} />
            <DetailWrap>

              <Btns>
                <CloseBtn toggleModal={toggleModal} />
                <ContBtns>
                  {giturl && <LinkBtn name='github_bk' giturl={giturl} text='github' />}
                  <LinkBtn name='link' depoloyurl={depoloyurl} text='배포 링크' />
                  {blogurl && <LinkBtn name='blog' blog={blogurl} text='관련 블로그' />}
                </ContBtns>
              </Btns>

              <DetailTop pointcolor={pointcolor} imgurl={imgurl}>
                <Tags>
                  {
                    tag.map((tag, idx) => (
                      <TagIcon key={idx} tag={tag} />
                    ))
                  }
                </Tags>
                <ProjectTit>{title}</ProjectTit>
                <ProjectDate>
                  <DateTxt>{data}</DateTxt>
                  <DateTxt>{team}</DateTxt>
                </ProjectDate>
                {imgurl && <ProjectScreen imgurl={imgurl} />}
              </DetailTop>

              <DetailBody>
                <ProjectInfoTxt>
                  {subtext}
                </ProjectInfoTxt>

                <PWrap>
                  <PTitle>사용 기술 및 언어</PTitle>
                  <Toggles>
                    {
                      tools.map((item, idx) => (
                        <ToggleBox
                          key={idx}
                          title={item.title}
                          detail={item.detail}
                        />
                      ))
                    }
                  </Toggles>
                </PWrap>

                <PWrap>
                  <PTitle>작업 기여도</PTitle>
                  <Toggles>
                    {
                      parts.map((item, idx) => (
                        <ToggleBox
                          key={idx}
                          title={item.title}
                          detail={item.detail}
                        />
                      ))
                    }
                  </Toggles>
                </PWrap>


              </DetailBody>
            </DetailWrap>
          </DetailContainer>
        ) : null
      }
    </>
  )
}

export default ProjectDetail;