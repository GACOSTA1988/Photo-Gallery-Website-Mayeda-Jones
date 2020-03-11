import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./HomeDirectory.css";
import Logo from "../../Logo.png";

function HomeDirectory() {
  const homeDirectoryStyle = {
    marginTop: "15px",
    color: "black",
    fontFamily: '"Bebas Neue", cursive',
    textAlign: "center",
    backgroundImage: `url(${Logo})`,
    // backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto"
  };
  return (
    <Container>
      <div style={homeDirectoryStyle}>
        <br />
        <h1>
          <Link to="/mainGallery">GALLERY</Link>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h1>
          <Link to="/about">ABOUT</Link>
        </h1>
        <br />
        <br />
        <br />
        <br />
        <h1>
          <Link to="/shoppingCart">PRINTS</Link>
        </h1>
      </div>
    </Container>
  );
}

export default HomeDirectory;
