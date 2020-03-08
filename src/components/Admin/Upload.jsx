import React, { Component } from "react";
import firebase from "../../firebase/config";
import Dropzone from "react-dropzone";
import Progress from "./Progress";
export default class Upload extends Component {
  state = {
    progress: 0,
    user_id: localStorage.getItem("user_id"),
    isUploading: null
  };

  handleUpload(files) {
    for (let i = 0; i < files.length; i++) {
      const uploadTask = firebase
        .storage()
        .ref(`images/${files.item(i).name}`)
        .put(files.item(i));
      uploadTask.on(
        "state_changed",
        snapshot => {
          const isUploading = true;
          this.setState({ isUploading });
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {},
        () => {
          firebase
            .storage()
            .ref("images")
            .child(files.item(i).name)
            .getDownloadURL()
            .then(url => {
              const isUploading = false;
              this.setState({ isUploading });
              const image = {
                url: url,
                added: new Date()
              };
              firebase
                .firestore()
                .collection(this.state.user_id)
                .add(image)
                .then(res => {
                  this.props.history.push("/AdminHome");
                });
            });
        }
      );
    }
  }

  render() {
    return (
      <div className="mt-5 text-center form-group">
        {this.state.isUploading ? (
          <Progress percentage={this.state.progress} />
        ) : (
          ""
        )}
        <Dropzone>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input
                  {...getInputProps()}
                  onDrop={files => this.handleUpload(files)}
                  onChange={e => this.handleUpload(e.target.files)}
                />
                <div className="custom-file">
                  <input className="custom-file-input" id="customFile" />
                  <label className="custom-file-label" htmlFor="customFile">
                    Drag and drop or choose a files
                  </label>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}
