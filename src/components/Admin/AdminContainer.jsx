import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Upload from "./Upload";
import AdminHome from "./AdminHome";

function AdminContainer() {
  return (
    <div className="AdminContainer">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/AdminHome" component={AdminHome}></Route>
            <Route exact path="/Upload" component={Upload}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default AdminContainer;
