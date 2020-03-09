import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./HomeDirectory.css";

function HomeDirectory() {
  const homeDirectoryStyle = {
    marginTop: "15px",
    color: "black",
    fontFamily: '"Bebas Neue", cursive',
    textAlign: "center",
    height: "1000px"
  };
  return (
    <Container>
      <div className="HomeBackground" style={homeDirectoryStyle}>
        <h1>
          <Link to="/mainGallery">GALLERY</Link>
        </h1>
        <h1>
          <Link to="/about">ABOUT</Link>
        </h1>
        <h1>
          <Link to="/shoppingCart">PRINTS</Link>
        </h1>
      </div>
    </Container>
  );
}

export default HomeDirectory;
