import classes from './../../stylesheets/layered-card.module.scss';
import { Col, Image } from 'react-bootstrap';

const LayeredCard = props => {
  return (
    <Col md={props.threshold} xs={12} className={`${classes['layered-card']} ${props.margin} p-0`}>
      <a href={props.url}>
        <Image className={props.borderRadius}
          src={require(`./../../assets/images/${props.image}`)}
          alt={props.heading} width='100%' height='100%'
        />

        <div className={`${classes['card-text-box']} ${props.borderRadius}`}>
          <p>{ props.heading }</p>
          <p>{ props.description }</p>
        </div>
      </a>
    </Col>
  );
}

export default LayeredCard;
