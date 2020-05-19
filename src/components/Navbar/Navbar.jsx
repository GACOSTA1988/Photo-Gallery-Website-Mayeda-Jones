import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

function NavBar(props) {
  return (
    <Container fluid>
      <div className="NavbarMain">
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Navbar.Brand href="#/">HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#/mainGallery">GALLERY</Nav.Link>
              <Nav.Link href="#/about">ABOUT</Nav.Link>
              <Nav.Link href="#/shoppingCart">SHOP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}

export default NavBar;
