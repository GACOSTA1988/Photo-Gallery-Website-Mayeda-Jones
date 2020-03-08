import React, { Component } from "react";
import firebase, { firebaseui } from "../../firebase/config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Photos from "./Photos";

export default class AdminHome extends Component {
  state = {
    isLoggedIn: false
  };

  //   listen to firebase Auth state and set the local state
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isLoggedIn: !!user }));
  }

  //   Make sure we unregister firebase observers when the component unmounts
  componentWillMount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <StyledFirebaseAuth
          uiConfig={firebaseui}
          firebaseAuth={firebase.auth()}
        />
      );
    }
    localStorage.setItem("user_id", firebase.auth().currentUser.uid);
    return <Photos />
    );
  }
}
