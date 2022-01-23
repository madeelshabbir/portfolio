import { useState } from 'react';

const useScroll = (initialClassName, newClassName) => {
  const [className, setClassName] = useState(initialClassName);

  const changeClassName = () => {
    if(window.scrollY > 0) {
      setClassName(newClassName);
    }
    else {
      setClassName(initialClassName);
    }
  };

  window.addEventListener('scroll', changeClassName);

  return className;
}

export default useScroll;
