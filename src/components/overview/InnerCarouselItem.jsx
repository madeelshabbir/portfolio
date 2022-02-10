import { Row } from 'react-bootstrap';
import LayeredCard from './../project/LayeredCard';
import './../../stylesheets/LowerCarousel.scss';

const InnerCarouselItem = props => {
  return (
      <Row className='m-0'>
        { props.projects.map(project =>
            <LayeredCard key={ project.id }
                         title={ project.title }
                         imageFileName={ project.imageFileName }
                         shortDescription={ project.shortDescription }
                         url= {project.url}
            />)
        }
      </Row>
  );
}

export default InnerCarouselItem;
