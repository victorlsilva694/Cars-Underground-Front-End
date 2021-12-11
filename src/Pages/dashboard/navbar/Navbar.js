import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavbarDashboard() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><strong><span style={{fontSize: '1.8rem', color: "#428D96" }}>Underground</span></strong> Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{fontSize: '1.15rem'}}>Início</Nav.Link>
            <Nav.Link href="/login" style={{fontSize: '1.15rem'}}>Ajuda</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{fontSize: '1.15rem'}}>Fazer logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavbarDashboard;