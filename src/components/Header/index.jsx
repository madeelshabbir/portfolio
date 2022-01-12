import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './../../assets/images/kode.png';

const Header = props => {
  return (
    <Navbar expand='lg' className={ props.navbarColor }>
      <Container fluid={ true }>
        <Navbar.Brand>
          <img src={ logo } alt='Kodemate' width='100' height='50' />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Overview</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Plans</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
