import React from 'react';
import Uploader from './Uploader';

class ImageUploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploader: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showUploader: !!!this.state.showUploader });
  }

  render() {
    return (
      <div>
        <img id="test" className="ui tiny circular image" src="https://s3.amazonaws.com/spreadout-img/avatar.png" />
        <button className="ui icon floated" onClick={this.handleClick} >
          <i className="plus square icon"></i>Upload
        </button>
        {this.state.showUploader ? <Uploader /> : null}
      </div>
    );
  }
}

export default ImageUploadButton;
