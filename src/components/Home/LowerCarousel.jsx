import { Carousel, Row } from 'react-bootstrap';
import LayeredCard from '../shared/LayeredCard';
import './../../stylesheets/LowerCarousel.scss';
import { PROJECTS } from './../../shared/projects';

const projectCard = project => {
  return (
    <LayeredCard key={ project.id }
                 title={ project.title }
                 imageFileName={ project.imageFileName }
                 shortDescription={ project.shortDescription }
    />
  )
}

const LowerCarousel = () => {
  return (
    <div>
      <Carousel indicators={ false }>
        <Carousel.Item className='padding-x-15-p'>
          <Row>
            { PROJECTS.map(project => projectCard(project)) }
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LowerCarousel;
