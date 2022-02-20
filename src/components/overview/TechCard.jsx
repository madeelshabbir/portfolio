import { Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

const techTooltip = title => {
  return <Tooltip>{title}</Tooltip>
}

const TechCard = props => {
  return (
    <Col md={2} xs={4} className={`scale-1 p-0 ${props.color}`}>
      <OverlayTrigger placement='top' overlay={techTooltip(props.title)} >
        <Image
        src={require(`./../../assets/images/techs/${props.src}`)}
        alt={props.title} width='100%' height='100%'
        />
      </OverlayTrigger>
    </Col>
  );
}

export default TechCard;
