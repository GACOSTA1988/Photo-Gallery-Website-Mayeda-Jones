import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContainer from "./components/CartContainer/CartContainer";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import HomeDirectory from "./components/HomeDirectory/HomeDirectory";
import MainGallery from "./components/Gallery/MainGallery";
import Container from "react-bootstrap/Container";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    const homeDirectoryStyle = {
      marginTop: "15px",
      color: "black",
      fontFamily: '"Bebas Neue", cursive',
      textAlign: "center"
      // backgroundImage: `url(${Logo})`,
      // backgroundSize: "cover"
    };
    return (
      <Container>
        <div>
          <Header />
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
          <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/mainGallery" component={MainGallery} />
            <Route exact path="/admin" component={ImageUpload} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shoppingCart" component={CartContainer} />
          </Switch>
        </div>
      </Container>
    );
  }
}
