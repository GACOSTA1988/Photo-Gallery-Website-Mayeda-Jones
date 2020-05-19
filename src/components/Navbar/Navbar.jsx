import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";

function NavBar(props) {
  const metaData = [
    {
      href: "#/",
      text: "HOME",
    },
    {
      href: "#/mainGallery",
      text: "GALLERY",
    },
    {
      href: "#/about",
      text: "ABOUT",
    },
    {
      href: "#/shoppingCart",
      text: "SHOP",
    },
  ];
  const renderAnchorTags = (metaData) => {
    return metaData.map((data) => {
      return (
        <span className="NavbarText">
          <a href={data.href} id="navbarHome">
            {data.text}
          </a>
        </span>
      );
    });
  };

  return (
    <Container fluid>
      <div className="NavbarMainContainer">{renderAnchorTags(metaData)}</div>
    </Container>
  );
}

export default NavBar;
