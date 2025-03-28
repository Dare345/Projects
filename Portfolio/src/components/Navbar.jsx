import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation(nav) {
  return (
    <Container>
        <Navbar sticky="top" data-bs-theme="dark" collapseOnSelect expand="xl" className="navbar">
        <Container>
            <Navbar.Brand className="brand" href={nav.intro}>Darren Yang</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end" navbarScroll>
                        <Nav.Link href={nav.intro}>About</Nav.Link>
                        <Nav.Link href={nav.sum}>History</Nav.Link>
                        <Nav.Link href={nav.classes}>Courses</Nav.Link>
                        <Nav.Link href={nav.courses}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        </Navbar>
    </Container>
  );
}

export default Navigation;

