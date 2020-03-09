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
// import Gallery from "react-photo-gallery";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Header />
          {/* <MainGallery /> */}
          <Switch>
            <Route exact path="/" component={HomeDirectory} />
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
