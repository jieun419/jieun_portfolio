import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import ProjectDetail from '../../detail/ProjectDetail';
import { RootState } from '../../../store';
import { TabsPropsT } from '../../../types/type';
import { projectData } from '../../../data/content/projectData';
import { projectDetailData } from '../../../data/content/projecsDetailDatas/projectDetailData';
import ProjectCard from '../../../components/cards/ProjectCard';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import ScrollAni from '../../../styles/ScrollAni';
import TabBtn from '../../../components/button/TabBtn';
import { tabMenuList } from '../../../utils/constant/constant';

const ProjectComponent = tw.section`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  pt-[3rem]
  h-auto

  max-md:pt-[3rem]
  max-lg:grid-cols-1
  max-xl:grid-cols-2  
  max-2xl:grid-cols-3
`;

const Container = tw.article`
  pt-20
`

const TabMenuList = tw.div`  
  w-fit
  flex
  gap-2
  items-center
  justify-center
  rounded-full
  px-4
  py-3
  bg-lightGray

  max-sm:w-full
`


function Project({ id, navTabs }: TabsPropsT) {
  const filterDataList = useSelector((state: RootState) => state.filteringKeyword.filterDataArr);
  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <>
      {projectDetailData.map((item, idx) => (
        <ProjectDetail
          key={idx}
          name={item.name}
          pointcolor={item.pointcolor}
          title={item.title}
          subtext={item.subtext}
          data={item.data}
          team={item.team}
          tag={item.tag}
          imgurl={item.imgurl}
          detailimginfo={item.detailimginfo}
          giturl={item.giturl}
          depoloyurl={item.depoloyurl}
          blogurl={item.blogurl}
          tools={item.tools}
          featinfo={item.featinfo}
          parts={item.parts}
          trouble={item.trouble}
        />
      ))}

      <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
        <Container id={id} ref={navTabs[1].targetRef} >
          <TabMenuList>
            {
              tabMenuList.map((item) => (
                <TabBtn key={item.type} type={item.type}>{item.name}</TabBtn>
              ))
            }
          </TabMenuList>
          <ProjectComponent>
            {filterDataList.length <= 0 && projectData.map((item, idx) => (
              <ProjectCard
                key={idx}
                name={item.name}
                title={item.title}
                subject={item.subject}
                tag={item.tag}
                imgurl={item.imgurl}
                giturl={item.giturl}
                depoloyurl={item.depoloyurl}
              />
            ))}
            {filterDataList.map((item, idx) => (
              <ProjectCard
                key={idx}
                name={item.name}
                title={item.title}
                subject={item.subject}
                tag={item.tag}
                imgurl={item.imgurl}
                giturl={item.giturl}
                depoloyurl={item.depoloyurl}
              />
            ))}
          </ProjectComponent>
        </Container>

      </ScrollAni>
    </>
  );
}

export default Project;