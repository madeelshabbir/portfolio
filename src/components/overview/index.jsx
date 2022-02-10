import UpperCarousel from './UpperCarousel';
import LowerCarousel from './LowerCarousel';
import TechCard from './TechCard';
import { Row } from 'react-bootstrap';
import { TECHIMAGES } from '../../shared/tech-images';

const techCards = () => {
  return TECHIMAGES.map((src, key) =>
    <TechCard src={src} key={key}  />
  )
}

const Overview = () => {
  return (
    <div>
      <UpperCarousel />
      <LowerCarousel />

      <Row>{ techCards() }</Row>
    </div>
  );
}

export default Overview;
