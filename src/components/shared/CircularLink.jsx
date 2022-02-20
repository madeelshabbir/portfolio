import classes from './../../stylesheets/circular-link.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CircularLink = props => {
  return (
    <a href={props.url}>
      <FontAwesomeIcon icon={props.icon} size='xl' className={classes['circular-icon']} />
    </a>
  );
}

export default CircularLink;
