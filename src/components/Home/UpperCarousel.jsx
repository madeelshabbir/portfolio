import { useState } from 'react';
import carouselImage from './../../assets/images/carousel.png';

const UpperCarousel = () => {
  const [carouselOpacity, setCarouselOpacity] = useState('');

  return (
    <div className='overflow-x-hidden'>
      <img
        src={ carouselImage } alt='Carousel' width='100%' height='500'
        className={`opacity-8 ${ carouselOpacity }`}
        onMouseOverCapture={() => setCarouselOpacity('scale-x-1 transform-delay-4')}
        onMouseOutCapture={() => setCarouselOpacity('')}
      />
    </div>
  );
}

export default UpperCarousel;
