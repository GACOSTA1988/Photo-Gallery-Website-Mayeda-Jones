import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";

function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: "black",
    fontWeight: "bold",
    fontFamily: "BowlbyOneSC",
    marginTop: "10px",
    textAlign: "center"
  };
  return (
    <div style={navBarAddStyles}>
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
  );
}

export default NavBar;
