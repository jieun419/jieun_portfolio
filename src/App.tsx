import tw from 'tailwind-styled-components';

import Nav from './components/nav/Nav';
import Front from './pages/Home/front/Front';
import Intro from './pages/Home/intro/Intro';
import Project from './pages/Home/project/Project';

export const Container = tw.main`
  bg-[#232323]
  w-full
  flex
  p-10
  gap-32
`;

export const RightWrap = tw.article`
  flex-2
`

export default function App() {
  return (
    <>
      <Front />
      <Intro />
      <Container>
        <Nav />
        <RightWrap>
          <Project />
        </RightWrap>
      </Container>
    </>
  );
}