import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./HomeDirectory.css";

function HomeDirectory() {
  return (
    <div className="HomeBackground">
      <p className="HomeText">
        <a id="HomeAnchorTags" href="#/about">
          ABOUT
        </a>

        <a id="HomeAnchorTags" href="#/mainGallery">
          GALLERY
        </a>

        <a id="HomeAnchorTags" href="#/shoppingCart" className="Links">
          PRINTS
        </a>
      </p>
    </div>
  );
}

export default HomeDirectory;
