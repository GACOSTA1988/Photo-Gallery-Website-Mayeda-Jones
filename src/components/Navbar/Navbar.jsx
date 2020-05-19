import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

function NavBar(props) {
  return (
    <Container fluid>
      <div className="NavbarMainContainer">
        <br />
        <a
          href="#/"
          style={{
            fontWeight: "bolder",
            fontFamily: "BowlbyOneSC",
            fontSize: "2vw",
            marginBottom: "5px",
          }}
        >
          HOME
        </a>
        <a
          href="#/mainGallery"
          style={{
            fontWeight: "bolder",
            fontFamily: "BowlbyOneSC",
            fontSize: "2vw",
            marginLeft: "5%",
          }}
        >
          GALLERY
        </a>
        <a
          href="#/about"
          style={{
            fontWeight: "bolder",
            fontFamily: "BowlbyOneSC",
            fontSize: "2vw",
            marginLeft: "5%",
          }}
        >
          ABOUT
        </a>
        <a
          href="#/shoppingCart"
          style={{
            fontWeight: "bolder",
            fontFamily: "BowlbyOneSC",
            fontSize: "2vw",
            marginLeft: "5%",
          }}
        >
          SHOP
        </a>
      </div>
    </Container>
  );
}

export default NavBar;
