import Main from './pages/content/main/Main';
import AboutMe from './pages/content/aboutMe/AboutMe';
import Contents from './pages/content/Contents';
import QuickBtns from './components/quickBtns/QuickBtns';
import Finish from './pages/content/finish/Finish';

export default function App() {
  return (
    <>
      <QuickBtns />
      <Main />
      <AboutMe />
      <Contents />
      <Finish />
    </>
  );
}