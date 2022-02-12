import { Col, Image } from 'react-bootstrap';
import './../../stylesheets/LowerCarousel.scss';

const TechCard = props => {
  return (
    <Col lg={2} xs={4} className={`scale-1 p-0 ${props.color}`}>
      <Image
        src={require(`./../../assets/images/techs/${props.src}`)}
        alt={props.title} width='100%' height='100%'
      />
    </Col>
  );
}

export default TechCard;
