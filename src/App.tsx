import { Route, Routes } from 'react-router-dom';
import Main from './pages/content/main/Main';
import AboutMe from './pages/content/aboutMe/AboutMe';
import Contents from './pages/content/Contents';
import QuickBtns from './components/quickBtns/QuickBtns';
import Finish from './pages/content/finish/Finish';
import ProjectDetail from './pages/detail/ProjectDetail';
import ReviewDetail from './pages/detail/ReviewDetail';

export default function App() {
  return (
    <>
      <QuickBtns />
      <Routes>
        <Route path='/review' element={<ReviewDetail />} />
        <Route path='/:name' element={<ProjectDetail />} />
      </Routes>

      <Main />
      <AboutMe />
      <Contents />
      <Finish />
    </>
  );
}