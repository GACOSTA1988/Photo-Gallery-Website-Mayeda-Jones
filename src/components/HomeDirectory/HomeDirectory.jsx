import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import "./HomeDirectory.css";
import logo from "../../assets/images/logos/Logo.png";

function HomeDirectory() {
  return (
    <div className="HomeBackground">
      <img src={logo} alt="Logo" />
      <p className="HomeText">
        <a id="HomeAnchorTags" href="#/about">
          ABOUT
        </a>
        <br />
        <a id="HomeAnchorTags" href="#/mainGallery">
          GALLERY
        </a>
        <br />
        <a id="HomeAnchorTags" href="#/shoppingCart">
          PRINTS
        </a>
      </p>
    </div>
  );
}

export default HomeDirectory;
