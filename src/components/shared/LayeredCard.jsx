import { Image, Col } from 'react-bootstrap';
import './../../stylesheets/LayeredCard.scss';

const LayeredCard = props => {
  return (
    <Col md={ 6 } xs={ 12 } className='layered-card p-0' >
      <Image
        src={require(`./../../assets/images/projects/${ props.imageFileName }`)} alt={ props.title }
        width='100%' height='100%'
      />

      <div className='card-text-box'>
        <p>{ props.title }</p>
        <p>{ props.shortDescription }</p>
      </div>
    </Col>
  );
}

export default LayeredCard;
