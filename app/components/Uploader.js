import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Uploader extends Component {
  onDrop(files) {
    const req = request.post('/upload');
    files.forEach((file) => {
      req.attach(file.name, file);
    });
    req.end(callback);
  }
  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop File Here</div>
        </Dropzone>
      </div>
    );
  }
}

export default Uploader;
