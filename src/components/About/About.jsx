import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

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
  return (
    <Container>
      <div style={aboutStyle}>
        <h1>Josh Mayeda Jones Gallery</h1>
      </div>
    </Container>
  );
}

export default About;
