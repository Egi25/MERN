import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./Images/logo512.PNG";
import { Image } from "react-bootstrap";
import "./SiteCSS.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="nav bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <Image className="logo" src={logo} /> SISAL BEAUTY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services/">Services</Nav.Link>
            <Nav.Link href="/team/">Our team</Nav.Link>
            <Nav.Link href="/contact/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
