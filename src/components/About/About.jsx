import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import * as josh from "../../assets/images/about/josh.png";
import Navbar from "../Navbar/Navbar.jsx";
import "./About.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function About() {
  return (
    <Container fluid>
      <br />
      <br />

      <div className="mainScreenContainer">
        <div className="borderContainer">
          <div className="headerMenuContainer">
            <p id="mainHeader">ABOUT</p>
            {/* <div className="aboutDropDownContainer">
              <DropdownButton
                variant=""
                size="lg"
                id="dropdown-item-button"
                title="MENU"
              >
                <Dropdown.Item href="#/" as="a">
                  HOME
                </Dropdown.Item>
                <Dropdown.Item href="#/about" as="a">
                  ABOUT
                </Dropdown.Item>
                <Dropdown.Item href="#/mainGallery" as="a">
                  GALLERY
                </Dropdown.Item>
                <Dropdown.Item href="#/shoppingCart" as="a">
                  PRINTS
                </Dropdown.Item>
              </DropdownButton>
            </div> */}
          </div>
          <div className="AboutHomeContainer">
            <div className="imageContainer">
              <img id="JoshImage" src={josh} alt="josh" />
            </div>
            <div className="textContainer">
              <p id="headers">Thanks for visiting!</p>
              <p id="subHeaders">My name is Josh Mayeda-Jones. </p>
              <p className="aboutText">
                I'm a photographer located in Colorado's beautiful Front Range.
                My main focus is landscape, lifestyle, adventure, and wildlife
                photography. <br />
                However, my passion for photographing new and unique subjects is
                boundless and I am always searching for my next subject! My
                photography has taken me to some incredible and iconic
                destinations, including the canadian rockies, dozens of national
                parks, and even the Arctic Circle in the dead of winter! <br />
                When I'm not trekking around breathtaking landscapes with a
                camera in hand or miserable at my day job, I'm usually skiing,
                traveling, climbing, cooking, or just hanging out with my two
                dogs and loved ones. <br />
                No matter how big, small or innovative your vision is, I would
                love to capture it in a timeless photograph!
              </p>
              <p id="headers">GEAR</p>
              <p className="aboutText">
                Sony A7III Full-Frame Sony 16-35mm f/2.8 GM Sony <br />
                24-105mm f/4 G Sony 100-400mm f/4.5-5.6 GM <br />
                Manfrotto w/ Colorado
                <br />
                Tripod Co. Highline Ballhead
              </p>
              <p id="headers">CONTACT LINKS</p>
              <a
                id="mainGalleryAnchorTags"
                href="https://www.instagram.com/joshmjones_photography/"
              >
                Instagram
              </a>
              <a
                id="mainGalleryAnchorTags"
                href="mailto:joshmjonesphotography@gmail.com"
              >
                Send email
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
}

export default About;
