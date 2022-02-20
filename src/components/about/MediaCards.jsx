import classes from './../../stylesheets/team.module.scss';
import { Col } from 'react-bootstrap';
import InfoCard from './InfoCard';
import LayeredCard from '../shared/LayeredCard';
import { Fragment } from 'react';
import { TEAM } from './../../shared/team';

const MediaCard = () => {
  return TEAM.map(member =>
    <Fragment key={member.id}>
      <LayeredCard image={member.image}
                    description={member.description}
                    url={member.url} threshold={3}
                    borderRadius={classes['layered-card-radius']}
                    margin={classes['layered-card-margin']}
      />

      <Col md={9} xs={12} className={`${classes['info-card-radius']} p-5 color-bg-primary`}>
        <InfoCard name={member.name} role={member.role} profiles={member.profiles} />
      </Col>
    </Fragment>
  );
}

export default MediaCard;
