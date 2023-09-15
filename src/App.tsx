import tw from 'tailwind-styled-components';

import Nav from './components/nav/Nav';
import Front from './pages/Home/front/Front';
import Intro from './pages/Home/intro/Intro';
import Project from './pages/Home/project/Project';
import Record from './pages/Home/record/Record';
import GoTopBtn from './components/atoms/button/GotoTopBtn';
import useScrollToTarget from './hooks/useScrollToTarget';

export const Container = tw.main`
  relative
  bg-[#232323]
  w-full
  flex
  p-10
  gap-32
`;

export const RightWrap = tw.article`
  flex
  flex-col
  flex-2
  gap-60
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