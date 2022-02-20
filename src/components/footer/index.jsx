import ContactLinks from '../shared/ContactLinks';
import i18n from '../../i18n';
import logo from './../../assets/images/kode.png';
import { PROFILES } from './../../shared/profiles';

const Footer = () => {
  return (
    <div className='text-align-center padding-y-100 color-bg-primary'>
      <img src={ logo } alt='Kodemate' width='200' height='100' />
      <ContactLinks profiles={PROFILES} />

      <p className='white-color mt-3'>
        { i18n.t('footer.copyrights') }
      </p>
    </div>
  );
}

export default Footer;
