import CircularLink from '../shared/CircularLink';

const ContactLinks = props => {
  return (
    <div>
      {
        props.profiles.map((profile, key) =>
          <CircularLink key={key} icon={profile.icon} url={profile.url}/>
        )
      }
    </div>
  );
};

export default ContactLinks;
