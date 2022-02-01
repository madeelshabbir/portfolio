import { Image, Col } from 'react-bootstrap';
import classes from './../../stylesheets/layered-card.module.scss';

const LayeredCard = props => {
  return (
    <Col md={6} xs={12} className={classes['layered-card']}>
      <a href={props.url}>
        <Image
          src={require(`./../../assets/images/projects/${props.imageFileName}`)}
          alt={props.title} width='100%' height='100%'
        />

        <div className={classes['card-text-box']}>
          <p>{ props.title }</p>
          <p>{ props.shortDescription }</p>
        </div>
      </a>
    </Col>
  );
}

export default LayeredCard;
