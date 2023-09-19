import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import ProjectCard from '@components/cards/ProjectCard';
import ProjectDetail from '../../detail/ProjectDetail';
import { RootState } from '../../../store';
import { TabsPropsT } from '../../../types/type';
import { projectData } from '../../../data/content/projectData';
import { projectDetailData } from '../../../data/content/projectDetailData';

export const ProjectComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  pt-[3rem]
  h-auto
  max-md:grid-cols-1
  max-lg:grid-cols-2
  max-xl:grid-cols-3
  max-2xl:grid-cols-4
`;

function Project({ id, navTabs }: TabsPropsT) {

  const isModal = useSelector((state: RootState) => state.overlay.isOpen);

  return (
    <ProjectComponent id={id} ref={navTabs[0].targetRef} >

      {isModal ? (
        projectDetailData.map((item, idx) => (
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
            giturl={item.giturl}
            depoloyurl={item.depoloyurl}
            blogurl={item.blogurl}
            tools={item.tools}
            parts={item.parts}
          />
        ))
      ) : null}
      {projectData.map((item, idx) => (
        <ProjectCard
          key={idx}
          name={item.name}
          title={item.title}
          subject={item.subject}
          tag={item.tag}
          imgurl={item.imgurl}
          giturl={item.giturl}
        />
      ))}
    </ProjectComponent>
  );
}

export default Project;