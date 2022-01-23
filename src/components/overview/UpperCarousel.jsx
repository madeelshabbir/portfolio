import carouselImage from './../../assets/images/carousel.png';

const UpperCarousel = () => {
  return (
    <div className='opacity-8 scale-x-1 transform-delay-4 overflow-x-hidden'>
      <img src={ carouselImage } alt='Carousel' width='100%' height='500' />
    </div>
  );
}

export default UpperCarousel;
