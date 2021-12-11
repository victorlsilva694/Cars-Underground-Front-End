import './Header.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand  href="#home"><strong><span style={{color: "#428D96", fontSize: '1.5rem' }}>Underground</span></strong> Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{fontSize: '1.1rem' }} href="/">Início</Nav.Link>
                        <Nav.Link style={{fontSize: '1.1rem' }} href="/login">Aluguel</Nav.Link>
                        <NavDropdown style={{fontSize: '1.1rem' }} title="Modelos" id="collasible-nav-dropdown">
                            <NavDropdown.Item style={{fontSize: '1.1rem' }} href="/login">Hyundai</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '1.1rem' }} href="/login">Honda</NavDropdown.Item>
                            <NavDropdown.Item style={{fontSize: '1.1rem' }} href="/login">BMW</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login" style={{fontSize: '1.1rem' }}>Mais Modelos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" style={{fontSize: '1.1rem' }}>Fazer Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;