import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./HomeDirectory.css";

function HomeDirectory() {
  return (
    <Container fluid>
      <div className="HomeBackground">
        <p className="HomeText">
          <a href="#/mainGallery">GALLERY</a>
        </p>

        <p className="HomeText">
          <a href="/about">ABOUT</a>
        </p>

        <p className="HomeText">
          <a href="/shoppingCart" className="Links">
            PRINTS
          </a>
        </p>
      </div>
    </Container>
  );
}

export default HomeDirectory;
