import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbarComponent(props) {
  if(props.type=="Home")
  {
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight:"800",color:"#9400D3"}}><h3>PORTFOLIO</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
              <Nav.Link href="/Projects" style={{color:"white"}}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default navbarComponent;