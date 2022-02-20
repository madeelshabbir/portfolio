import LayeredCard from '../shared/LayeredCard';
import { Row } from 'react-bootstrap';

const InnerCarouselItem = props => {
  return (
    <Row className='m-0'>
      { props.projects.map(project =>
          <LayeredCard key={ project.id }
                       heading={ project.title }
                       image={ project.image }
                       description={ project.description }
                       url= {project.url} threshold={6}
          />)
      }
    </Row>
  );
}

export default InnerCarouselItem;
