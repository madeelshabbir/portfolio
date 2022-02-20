import logo from './../../assets/images/kode.png';
import CircularLink from './CircularLink';
import { PROFILES } from './../../shared/profiles';
import i18n from '../../i18n';

const circularLinks = () => {
  return PROFILES.map((profile, key) =>
    <CircularLink key={key} icon={profile.icon} url={profile.url}/>
  )
};

const Footer = () => {
  return (
    <div className='text-align-center padding-y-100 color-bg-primary'>
      <img src={ logo } alt='Kodemate' width='200' height='100' />
      <div>{ circularLinks() }</div>

      <p className='white-color mt-3'>
        { i18n.t('footer.copyrights') }
      </p>
    </div>
  );
}

export default Footer;
