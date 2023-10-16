import Main from './pages/content/main/Main';
import AboutMe from './pages/content/aboutMe/AboutMe';
import Contents from './pages/content/Contents';
import Footer from './components/footer/Footer';
import QuickBtns from './components/quickBtns/QuickBtns';

export default function App() {
  return (
    <>
      <QuickBtns />
      <Main />
      <AboutMe />
      <Contents />
      <Footer />
    </>
  );
}