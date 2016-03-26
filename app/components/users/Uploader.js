import React from 'react';
import imageHelpers from '../../utils/imageHelpers';

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const imageFile = document.querySelector('input[type=file]').files[0];

    imageHelpers.readFileURL(imageFile, (filepath) => {
      this.setState({ avatarURL: filepath });
      imageHelpers.saveImage(filepath)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {e.preventDefault(); }}>
          <input type="file" accept="image/*" id="image-file" />
          <input type="submit" value="submit" onClick={this.handleSubmit} /> 
        </form>
       </div>
    );
  }
}

export default Uploader;
