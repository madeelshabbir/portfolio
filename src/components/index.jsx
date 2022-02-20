import Header from './header/index';
import Overview from './overview/index';
import { Route, Routes } from 'react-router-dom';
import useScroll from '../hooks/useScroll';
import Footer from './footer';

const Main = () => {
  const navbarColor = useScroll('', 'color-bg-primary');

  return (
    <>
      <Header navbarColor={ navbarColor } />

      <div className='max-body-width m-auto'>
        <Routes>
          <Route path='/' element={ <Overview /> } />
          <Route path='/members' element={<div />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default Main;
