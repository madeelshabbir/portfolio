import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CircularLink = props => {
  return (
    <a href={props.url}>
      <FontAwesomeIcon icon={props.icon} size='xl' className='circular-icon' />
    </a>
  );
}

export default CircularLink;
