import React, { Component } from 'react';
import Uploader from '../components/Uploader';

class ImageUploadButton extends Component {
  getInitialState() {
    return { showUploader: false };
  }
  handleClick() {
    this.setState({ showUploader: true });
  }
  render() {
    return (
      <div>
        <img className="ui tiny circular image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
        <button className="ui icon floated" onClick={this.handleClick.bind(this)} >
          <i className="plus square icon"></i>Upload
        </button>
      </div>
    );
  }
}

export default ImageUploadButton;
