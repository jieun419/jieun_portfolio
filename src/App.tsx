import Front from './pages/content/front/Front';
import Intro from './pages/content/intro/Intro';
import GoTopBtn from './components/button/GotoTopBtn';
import Contents from './pages/content/Contents';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <GoTopBtn />
      <Front />
      <Intro />
      <Contents />
      <Footer />
    </>
  );
}