import ContactLinks from '../shared/ContactLinks';

const InfoCard = props => {
  return (
    <>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Role:</strong> {props.role}</p>
      <ContactLinks profiles={props.profiles} />
    </>
  );
}

export default InfoCard;
