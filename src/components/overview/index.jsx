import UpperCarousel from './UpperCarousel';
import LowerCarousel from './LowerCarousel';
import TechCard from './TechCard';
import { Row } from 'react-bootstrap';
import { TECHIMAGES } from '../../shared/tech-images';
import ParallaxHeading from './ParallaxHeading';
import i18n from '../../i18n';

const techCards = () => {
  return TECHIMAGES.map((tech, key) =>
    <TechCard src={tech.imageFileName} title={tech.title} key={key} />
  )
}

const Overview = () => {
  return (
    <div>
      <UpperCarousel />

      <ParallaxHeading text={i18n.t('overview.projects')} />
      <LowerCarousel />

      <ParallaxHeading text={i18n.t('overview.services')} />
      <Row className='m-0 border-top-2'>{ techCards() }</Row>
    </div>
  );
}

export default Overview;
