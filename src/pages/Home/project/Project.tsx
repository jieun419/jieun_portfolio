import tw from 'tailwind-styled-components';
import ProjectCard from '../../../components/Cards/ProjectCard';
import ProjectDetail from '../../detail/ProjectDetail';

type ProjectProps = {
  id: string;
}

export const ProjectComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  h-auto
  max-md:grid-cols-1
  max-lg:grid-cols-2
  max-xl:grid-cols-3
  max-2xl:grid-cols-4
`;

function Project({ id }: ProjectProps) {
  return (
    <ProjectComponent id={id}>
      <ProjectDetail />
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