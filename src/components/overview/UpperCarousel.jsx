import carouselImage from './../../assets/images/carousel.png';

const UpperCarousel = () => {
  return (
    <div className='opacity-8 scale-x-1 transform-delay-4 border-bottom-2'>
      <img src={ carouselImage } alt='Carousel' width='100%' height='600' />
    </div>
  );
}

export default UpperCarousel;
