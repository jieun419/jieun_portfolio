import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';
import TagIcon from '../../components/atoms/tag/TagTxt';
import ProjectScreen from '../../components/atoms/projectScreen/ProjectScreen';
import ToggleBox from '../../components/toggle/ToggleBox';
import CloseBtn from '../../components/button/CloseBtn';
import LinkBtn from '../../components/button/LinkBtn';
import { overlayActions } from '../../store/overlay-slice';
import { RootState } from '../../store';
import DropShadow from '../../components/atoms/dropShadow/DropShadow';
import ProjectImgCard from '../../components/cards/ProjectImgCard';
import ImgDetailModal from '../../components/modal/ImgDetailModal';
import { useNavigate, useParams } from 'react-router-dom';
import { projectDetailData } from '../../data/content/projecsDetailDatas/projectDetailData';

type ProjectDataProps = {
  pointcolor?: string;
  imgurl?: string;
}

export const DetailContainer = tw.section`
  fixed
  inset-x-0
  inset-y-0
  z-[20]
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
  pb-10
  min-h-screen
  h-auto

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
  text-center
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

export const PSubText = tw.p`
  text-sm
  font-medium
  text-[#999]
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

export const PDetailList = tw.ul`
  flex
  flex-col
  gap-1
`;

export const Li = tw.li`
  pl-2.5
  relative

  before:absolute
  before:w-1
  before:h-1
  before:bg-[#000]
  before:block
  before:rounded-full
  before:left-0
  before:top-[0.625rem]
`;

export const ImgContList = tw.div`
  grid
  grid-cols-3
  gap-3
  max-xl:grid-cols-2
`;

const ProjectDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const projectDetail = projectDetailData.find((project) => project.name === name)
  console.log(projectDetail, name);

  const dispatch = useDispatch();
  const imgModal = useSelector((state: RootState) => state.overlay.isImgOpen);
  const targetId = useSelector((state: RootState) => state.overlay.targetId);

  const openScroll = () => {
    document.body.style.removeProperty('overflow');
  };

  const toggleModal = () => {
    navigate('/');
    openScroll();
  };

  const toggleImgModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(overlayActions.toggleImgOverlay());
    dispatch(overlayActions.targetId(e.currentTarget.id));
  };

  return (
    <>
      {
        projectDetail ? (
          <DetailContainer>
            <DropShadow toggleModal={toggleModal} />
            <DetailWrap imgurl={projectDetail.imgurl}>

              <Btns>
                <CloseBtn toggleModal={toggleModal} />
                <ContBtns>
                  {projectDetail.giturl && <LinkBtn name='github_bk' giturl={projectDetail.giturl} text='GitHub' />}
                  {projectDetail.depoloyurl && <LinkBtn name='link' depoloyurl={projectDetail.depoloyurl} text='배포 링크' />}
                  {projectDetail.blogurl && <LinkBtn name='blog' blog={projectDetail.blogurl} text='관련 블로그' />}
                </ContBtns>
              </Btns>

              <DetailTop pointcolor={projectDetail.pointcolor} imgurl={projectDetail.imgurl}>
                <Tags>
                  {
                    projectDetail.tag.map((tag, idx) => (
                      <TagIcon key={idx} tag={tag} />
                    ))
                  }
                </Tags>
                <ProjectTit>{projectDetail.title}</ProjectTit>
                <ProjectDate>
                  <DateTxt>{projectDetail.data}</DateTxt>
                  <DateTxt>{projectDetail.team}</DateTxt>
                </ProjectDate>
                {projectDetail.imgurl && <ProjectScreen imgurl={projectDetail.imgurl} />}
              </DetailTop>

              <DetailBody>
                <ProjectInfoTxt>
                  {projectDetail.subtext}
                </ProjectInfoTxt>
                {
                  projectDetail.featinfo.length !== 0 && (
                    <PWrap>
                      <PTitle>📍 주요 기능 및 특징</PTitle>
                      <PDetailList>
                        {
                          projectDetail.featinfo.map((list, idx) => (
                            <Li key={idx}>{list}</Li>
                          ))
                        }
                      </PDetailList>
                    </PWrap>
                  )
                }

                <PWrap>
                  <PTitle>
                    🛠️ 사용 기술 및 언어
                    <PSubText>클릭 시 세부 내용을 확인 할  수 있습니다.</PSubText>
                  </PTitle>
                  <Toggles>
                    {
                      projectDetail.tools.map((item, idx) => (
                        <ToggleBox
                          key={idx}
                          title={item.title}
                          detail={item.detail}
                          type='tools'
                        />
                      ))
                    }
                  </Toggles>
                </PWrap>

                <PWrap>
                  <PTitle>
                    ✨ 작업 기여도
                  </PTitle>
                  <Toggles>
                    {
                      projectDetail.parts.map((item, idx) => (
                        <ToggleBox
                          key={idx}
                          title={item.title}
                          detail={item.detail}
                          isToggled
                        />
                      ))
                    }
                  </Toggles>
                </PWrap>
                {
                  projectDetail.trouble && projectDetail.trouble.length !== 0 && (
                    <PWrap>
                      <PTitle>
                        💫 Trouble Shooting
                      </PTitle>
                      <Toggles>
                        {
                          projectDetail.trouble.map((item, idx) => (
                            <ToggleBox
                              key={idx}
                              title={item.title}
                              detail={item.detail}
                              isToggled
                            />
                          ))
                        }
                      </Toggles>
                    </PWrap>
                  )
                }
                {
                  projectDetail.detailimginfo && (
                    <PWrap>
                      <PTitle>
                        💻 작업 화면
                        <PSubText>이미지 클릭 시 크게 볼 수 있습니다. (작업화면이 현재와 다를 수 있습니다.)<br />* 저작권 이슈가 있는 경우 첨부하지 않았습니다.</PSubText>
                      </PTitle>

                      <ImgContList>

                        {imgModal && (<ImgDetailModal imgUrl={projectDetail.detailimginfo && projectDetail.detailimginfo[targetId].imgurl} />)}

                        {
                          projectDetail.detailimginfo?.map((el, idx) => (
                            <ProjectImgCard
                              key={idx}
                              id={idx}
                              imgurl={el.imgurl}
                              subject={el.subject}
                              toggleImgModal={toggleImgModal}
                            />
                          ))
                        }
                      </ImgContList>
                    </PWrap>
                  )
                }
              </DetailBody>
            </DetailWrap>
          </DetailContainer>
        ) : null
      }
    </>
  )
};

export default ProjectDetail;