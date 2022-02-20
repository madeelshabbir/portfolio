import i18n from '../../i18n';
import ParallaxHeading from '../shared/ParallaxHeading';
import Team from './Team';

const About = () => {
  return (
    <>
      <ParallaxHeading text={i18n.t('overview.team')} />
      <div className='border-top-2'>
        <Team />
      </div>
    </>
  );
}

export default About;
