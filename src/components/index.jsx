import Header from './Header/index';
import Home from './Home/index';
import { useState } from 'react';


const Main = () => {
  const [navbarColor, setNavbarColor] = useState('');

  const changeNavbarColor = () => {
    if(window.scrollY > 0) {
      setNavbarColor('color-bg-primary');
    }
    else {
      setNavbarColor('');
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div>
      <Header navbarColor={ navbarColor } />
      <Home />
    </div>
  );
}

export default Main;
