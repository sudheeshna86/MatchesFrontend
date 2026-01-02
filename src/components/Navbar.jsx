import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { token, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-warning sticky-top shadow">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="fw-bold text-warning">
          🏆 SUPER-STAKES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {token && (
              <>
                <Nav.Link as={Link} to="/dashboard">Lobby</Nav.Link>
                <Nav.Link as={Link} to="/favorites">My Picks</Nav.Link>
              </>
            )}
          </Nav>
          {token && (
            <Button variant="outline-warning" size="sm" onClick={logout} className="fw-bold">
              LOGOUT
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation