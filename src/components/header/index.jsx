import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './../../assets/images/kode.png';
import i18n from '../../i18n.js';
import { NAVS } from './../../shared/navs';

const navLinks = () => {
  return NAVS.map((nav, index) => <Nav.Link href={nav.link} key={index}>{i18n.t(`header.${nav.text}`)}</Nav.Link>)
}

const Header = props => {
  return (
    <Navbar expand='md' className={ props.navbarColor }>
      <Container fluid={ true }>
        <Navbar.Brand>
          <img src={ logo } alt='Kodemate' width='100' height='50' />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>{ navLinks() }</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
