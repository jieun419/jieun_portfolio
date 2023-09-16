import tw from 'tailwind-styled-components';
import { useSelector } from 'react-redux';
import ProjectCard from '../../../components/Cards/ProjectCard';
import ProjectDetail from '../../detail/ProjectDetail';
import { RootState } from '../../../store';
import { TabsPropsT } from '../../../types/type';

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

  const isModal = useSelector((state: RootState) => state.overlay.isOpen)
  return (
    <ProjectComponent id={id} ref={navTabs[0].targetRef} >
      {isModal
        ? <ProjectDetail />
        : null}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectComponent>
  );
}

export default Project;