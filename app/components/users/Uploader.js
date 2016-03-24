import React from 'react';
import Dropzone from 'react-dropzone';
import userHelpers from '../../utils/userHelpers';

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };
  }

  onDrop(files) {
    // TODO: specify single file
    // have file.preview for immediate render
    const file = files[0];
    userHelpers.getSignedRequest(file)
    .then((res) => {
      this.setState({ url: res.data.url });
      userHelpers.uploadImage(file, res.data.signed_request, res.data.url);
    })
    .catch((err) => {
      console.log('onDrop Error', err);
    });
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
