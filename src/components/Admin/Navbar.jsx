import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/config";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/AdminHome">
            Josh Mayeda Jones Gallery
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="upload">
                  Upload
                </Link>
              </li>
            </ul>
            <span
              className="navbar-text"
              onClick={() => {
                localStorage.removeItem("user_id");
                firebase.auth().signOut();
              }}
            >
              Signout
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
