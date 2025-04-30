import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/Navbar.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="mb-3">
      <Container>
        <Nav className="me-auto mx-auto">
          <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/projects" className="mx-3">Projects</Nav.Link>
          <Nav.Link as={Link} to="/gallery" className="mx-3">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contacts" className="mx-3">Contacts</Nav.Link>
          <Nav.Link as={Link} to="/mystory" className="mx-3">MyStory</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
