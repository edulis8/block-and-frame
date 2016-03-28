import React from 'react';
import imageHelpers from '../../utils/imageHelpers';

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: 'https://s3.amazonaws.com/spreadout-img/avatar.png',
      filename: '',
    };

    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const userId = window.localStorage.getItem('id');

    // check for a saved profile photo
    imageHelpers.getUserAvatar(userId)
    .then((res) => {
      if (res.data.filepath) {
        // if found, set the state
        this.setState({ avatarURL: res.data.filepath });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleUploadClick() {
    const fileInput = document.querySelector('input[type=file]');
    fileInput.onchange = (e) => {
      this.setState({ filename: e.target.value.split('\\').pop() });
    };
    fileInput.click();
  }

  handleSubmit() {
    const imageFile = document.querySelector('input[type=file]').files[0];

    imageHelpers.readFileURL(imageFile, (filepath) => {
      this.setState({ avatarURL: filepath });
      imageHelpers.saveAvatarURL(filepath)
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
      <div className="ui compact segment">
        <img id="test" className="ui small spaced rounded image" src={this.state.avatarURL} />
        <div className="ui divider" />
        <form onSubmit={(e) => {e.preventDefault(); }}>
          <button className="ui tiny button" onClick={this.handleUploadClick} >
            Select Profile Image
          </button>
          <div className="ui fitted hidden divider" />
          <div>
            { /* show filename after image is selected */ this.state.filename && 
              <div className="ui basic small label">{this.state.filename}</div>
            }
          </div>
          <div className="ui fitted hidden divider" />
          {/*  Actual input field hidden - using a styled button in its place to activate submit */}
          <input type="file" accept="image/*" id="image-file" placeholder="upload image" style={{ display: 'none' }} />
          <button className="ui tiny button" onClick={this.handleSubmit} >
            <i className="plus square icon"></i>
            Upload
          </button>
        </form>
       </div>
    );
  }
}

export default Uploader;
