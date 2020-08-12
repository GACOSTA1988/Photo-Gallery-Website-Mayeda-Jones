import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import CartContainer from "./components/CartContainer/CartContainer";
import About from "./components/About/About";
import HomeDirectory from "./components/HomeDirectory/HomeDirectory";
import MainGallery from "./components/Gallery/MainGallery";
// import Container from "react-bootstrap/Container";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="AppBackground">
        <Switch>
          <Route exact path="/" component={HomeDirectory} />
          <Route exact path="/mainGallery" component={MainGallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shoppingCart" component={CartContainer} />
        </Switch>
      </div>
    );
  }
}
