import tw from 'tailwind-styled-components';

import Nav from '../../components/nav/Nav';
import Project from '../content/project/Project';
import Record from '../content/record/Record';
import useScrollToTarget from '../../hooks/useScrollToTarget';

export const Container = tw.main`
  relative
  bg-[#232323]
  w-full
  flex
  p-10
  gap-14
  z-[2]
  
  max-md:flex-col
  max-md:gap-0
  max-ls:gap-5
  max-xl:gap-10
`;

export const RightWrap = tw.article`
  flex
  flex-col
  flex-2
  gap-60
  pb-20
`

function Contents() {

  const navTabs = [
    useScrollToTarget('Project'),
    useScrollToTarget('Record'),
  ]

  return (
    <Container>
      <Nav navTabs={navTabs} />
      <RightWrap>
        <Project id='Project' navTabs={navTabs} />
        <Record id='Record' navTabs={navTabs} />
      </RightWrap>
    </Container>
  );
}

export default Contents