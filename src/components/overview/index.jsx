import i18n from '../../i18n';
import LowerCarousel from './LowerCarousel';
import ParallaxHeading from '../shared/ParallaxHeading';
import { Row } from 'react-bootstrap';
import TechCard from './TechCard';
import { TECHIMAGES } from '../../shared/tech-images';
import UpperCarousel from './UpperCarousel';

const techCards = techImages => {
  return techImages.map((tech, key) =>
    <TechCard src={tech.image} title={tech.title} key={key} />
  );
}

const Overview = () => {
  return (
    <div>
      <UpperCarousel />

      <ParallaxHeading text={i18n.t('overview.projects')} />
      <LowerCarousel />

      <ParallaxHeading text={i18n.t('overview.services')} />
      <Row className='m-0 border-top-2'>{ techCards(TECHIMAGES) }</Row>
    </div>
  );
}

export default Overview;
