import React, { useState } from "react";
import CartContainer from "./components/CartContainer/CartContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CartContainer />
      </div>
    );
  }
}
