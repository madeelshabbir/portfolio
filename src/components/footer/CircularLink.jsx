import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './../../stylesheets/circular-link.module.scss';

const CircularLink = props => {
  return (
    <a href={props.url}>
      <FontAwesomeIcon icon={props.icon} size='xl' className={classes['circular-icon']} />
    </a>
  );
}

export default CircularLink;
