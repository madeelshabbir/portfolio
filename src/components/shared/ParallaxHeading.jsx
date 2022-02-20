import classes from './../../stylesheets/parallax-heading.module.scss'

const ParallaxHeading = props => {
  return (
    <>
      <div className={classes['parallax']}></div>
      <p className={`${classes['parallax-heading']} color-bg-primary border-top-2 border-bottom-2`}>
        {props.text}
      </p>
      <div className={classes['parallax']}></div>
    </>
  );
}

export default ParallaxHeading;
