import Header from './header/index';
import Overview from './overview/index';
import { Route, Routes } from 'react-router-dom';
import useScroll from '../hooks/useScroll';

const Main = () => {
  const navbarColor = useScroll('', 'color-bg-primary');

  return (
    <>
      <Header navbarColor={ navbarColor } />

      <Routes>
        <Route path='/' element={ <Overview /> } />
        <Route path='/projects' element={<div />} />
        <Route path='/plans' element={<div />} />
      </Routes>
    </>
  );
}

export default Main;
