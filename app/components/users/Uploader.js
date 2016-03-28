import React from 'react';
import imageHelpers from '../../utils/imageHelpers';
import ImageUpload from './ImageUpload';

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: 'https://s3.amazonaws.com/spreadout-img/avatar.png',
      filename: '',
      uploaded: false,
    };

    this.handleUploadClick = this.handleUploadClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForInstagram = this.checkForInstagram.bind(this);
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

  componentWillReceiveProps(nextProps) {
    if (!this.state.uploaded && nextProps.instagramProfilePic) {
      this.setState({ avatarURL: nextProps.instagramProfilePic });
    }
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
        this.setState({ uploaded: true });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }

  checkForInstagram() {
    if (this.props.instagramProfilePic) {
      this.setState({ avatarURL: this.props.instagramProfilePic });
    }
  }

  render() {
    return (
      <ImageUpload
        avatarURL={this.state.avatarURL}
        handleUploadClick={this.handleUploadClick}
        filename={this.state.filename}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Uploader;
