import { Carousel } from 'react-bootstrap';
import { useMemo } from 'react';
import './../../stylesheets/LowerCarousel.scss';
import { PROJECTS } from '../../shared/projects';
import InnerCarouselItem from './InnerCarouselItem';
import { paginateProjects } from '../../helpers/project-helper';

const carouselItem = projects => {
  return projects.map((projects, i) =>
    <Carousel.Item className='padding-x-15-p' key={i}>
      <InnerCarouselItem projects={projects} />
    </Carousel.Item>)
};

const LowerCarousel = () => {
  const projects = useMemo(() => paginateProjects(PROJECTS), []);

  return (
    <Carousel className='border-top-2 border-bottom-2' indicators={ false }>
      { carouselItem(projects) }
    </Carousel>
  );
}

export default LowerCarousel;
