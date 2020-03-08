import React, { Component } from "react";
import firebase from "../../firebase/config";
export default class Photos extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    let images = [];
    firebase
      .firestore()
      .collection(localStorage.getItem("user_id"))
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots

          let imageData = {
            url: doc.data().url,
            created: doc.data().added
          };
          images.push(imageData);
        });
      });
    this.setState({ photos: images });
  }
  render() {
    const items = this.state.photos;

    return (
      <div className="container-fluid pt-3">
        <div className="card-columns">
          {items.map(i => (
            <div className="card">
              <img className="card-img-top materialboxed" src={i.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
