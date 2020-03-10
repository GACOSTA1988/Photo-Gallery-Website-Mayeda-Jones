import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import * as josh from "../../assets/images/about/josh.png";
import Navbar from "../Navbar/Navbar.jsx";

function About() {
  var aboutStyle = {
    backgroundColor: "white",
    marginTop: "15px",
    border: "10px solid black",
    color: "black",
    // fontWeight: "bold",
    fontFamily: '"Bebas Neue", cursive',
    textAlign: "center"
  };
  const joshImageStyle = {
    width: "45%",
    height: "45%",
    padding: "2.5px",
    alignItems: "right"
  };
  return (
    <Container>
      <Navbar />
      <div style={aboutStyle}>
        <h1>ABOUT</h1>
        <img style={joshImageStyle} src={josh} alt="josh" />
        <p>
          Thanks for visiting! <br />
          My name is Josh Mayeda-Jones. <br />
          I'm a photographer located in Colorado's beautiful Front Range. My
          main focus is landscape, lifestyle, adventure, and wildlife
          photography. <br />
          However, my passion for photographing new and unique subjects is
          boundless and I am always searching for my next subject! My
          photography has taken me to some incredible and iconic destinations,
          including the canadian rockies, dozens of national parks, and even the
          Arctic Circle in the dead of winter! <br />
          When I'm not trekking around breathtaking landscapes with a camera in
          hand or miserable at my day job, I'm usually skiing, traveling,
          climbing, cooking, or just hanging out with my two dogs and loved
          ones. <br />
          No matter how big, small or innovative your vision is, I would love to
          capture it in a timeless photograph!
        </p>
        <h1>GEAR</h1>
        <p>
          Sony A7III Full-Frame Sony 16-35mm f/2.8 GM Sony <br />
          24-105mm f/4 G Sony 100-400mm f/4.5-5.6 GM <br />
          Manfrotto w/ Colorado
          <br />
          Tripod Co. Highline Ballhead
        </p>
        <h1>CONTACT</h1>
        <p>
          joshmjonesphotography@gmail.com Instagram <br />
          @joshmjones_photography
        </p>
      </div>
    </Container>
  );
}

export default About;
