import tw from 'tailwind-styled-components';

import Nav from './components/nav/Nav';
import Front from './pages/content/front/Front';
import Intro from './pages/content/intro/Intro';
import Project from './pages/content/project/Project';
import Record from './pages/content/record/Record';
import GoTopBtn from './components/button/GotoTopBtn';
import useScrollToTarget from './hooks/useScrollToTarget';

export const Container = tw.main`
  relative
  bg-[#232323]
  w-full
  flex
  p-10
  gap-14
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

export default function App() {

  const navTabs = [
    useScrollToTarget('Project'),
    useScrollToTarget('Record'),
  ]

  return (
    <>
      <GoTopBtn />
      <Front />
      <Intro />
      <Container>
        <Nav navTabs={navTabs} />
        <RightWrap>
          <Project id='Project' navTabs={navTabs} />
          <Record id='Record' navTabs={navTabs}/>
        </RightWrap>
      </Container>
    </>
  );
}