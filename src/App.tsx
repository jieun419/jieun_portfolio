import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Main from './pages/content/main/Main';
import AboutMe from './pages/content/aboutMe/AboutMe';
import Contents from './pages/content/Contents';
import QuickBtns from './components/quickBtns/QuickBtns';
import Finish from './pages/content/finish/Finish';

export default function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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