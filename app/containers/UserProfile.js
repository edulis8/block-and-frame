import React from 'react';
import userHelpers from '../utils/userHelpers';
// import { Link } from 'react-router';
import MenuBar from '../components/MenuBar';
import UserProfileForm from '../components/UserProfileForm';
import ImageUploadButton from '../components/ImageUploadButton';

// TODO: Some indication that saving profile has been successful.
// TODO: Confirm profile deletion, msg about success, redirect user to home.

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      bio: '',
      location: '',
      isTraveling: null,
      // instagram
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onBioChange = this.onBioChange.bind(this);
    this.onTravelingChange = this.onTravelingChange.bind(this);
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
    // this.onInstagramChange = this.onBioChange.bind(this);
  }

  componentDidMount() {
    userHelpers.getCurrentUserData()
    .then((user) => {
      this.setState({
        email: user.data.email,
        username: user.data.username,
        bio: user.data.bio,
        location: user.data.location,
        isTraveling: user.data.isTraveling,
      });
    });
  }

  onNameChange(e) {
    this.setState({ username: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  onBioChange(e) {
    this.setState({ bio: e.target.value });
  }

  onTravelingChange(e) {
    this.setState({ isTraveling: e.target.checked });
  }

  // onInstagramChange(e) {
  //   this.setState({ instagram: e.target.value });
  // }

  handleProfileSubmit() {
    userHelpers.updateUser(this.state)
    .then((user) => {
      // TODO: why doesn't this send back the updated user? Bookshelf question.
      console.log('user after PUT', user);
    });
  }

  handleDeleteUser() {
    userHelpers.deleteUser().
    then((info) => {
      console.log('info from server: ', info);
    });
  }

  preventDefaultSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui container">
        <MenuBar />
        <h1 className="ui dividing header">
          Your Profile:
        </h1>
        <div className="ui raised very padded text container segment">
          <div className="ui container">
            <ImageUploadButton />
            <UserProfileForm
              username={this.state.username}
              email={this.state.email}
              city={this.state.city}
              country={this.state.country}
              bio={this.state.bio}
              isTraveling={this.state.isTraveling}
              onNameChange={this.onNameChange}
              onEmailChange={this.onEmailChange}
              onLocationChange={this.onLocationChange}
              onBioChange={this.onBioChange}
              onTravelingChange={this.onTravelingChange}
              onDeleteUser={this.handleDeleteUser}
              onProfileSubmit={this.handleProfileSubmit}
              preventDefaultSubmit={this.preventDefaultSubmit}
              // TODO instagram={this.state.instagram}
              // TODO onInstagramChange={this.onInstagramChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
