import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContainer from "./components/CartContainer/CartContainer";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";
import GoogleFontLoader from "react-google-font-loader";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <ImageUpload />
          <Switch>
            <Header />
            <About />
            <Route exact path="/shoppingCart" component={CartContainer} />
            <CartContainer />
          </Switch>
        </div>
      </Container>
    );
  }
}
