import React from 'react';
import helpers from '../utils/helpers';
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
      city: '',
      country: '',
      // instagram
      // isTraveling
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onBioChange = this.onBioChange.bind(this);
    // this.onInstagramChange = this.onBioChange.bind(this);
    // this.onTravelingChange = this.onTravelingChange.bind(this);

    this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.preventDefaultSubmit = this.preventDefaultSubmit.bind(this);
  }
  componentDidMount() {
    helpers.getCurrentUserData()
    .then((user) => {
      console.log('USER.data in componentDidMount promise', user.data);
      // This is the shortcut for the commented out stuff that follows. I hope it works:
      this.setState(user.data);
      // const email = user, .data.email;
      // const username = user.data.username;
      // const bio = user.data.bio;
      // const city = user.data.city;
      // const country = user.data.country;
      // //... etc
      // // object literal property value shorthand es6 is awesome:
      // this.setState({ email, username, bio, city, country });
    });
  }
  onNameChange(e) {
    this.setState({ username: e.target.value });
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  onCityChange(e) {
    this.setState({ city: e.target.value });
  }
  onCountryChange(e) {
    this.setState({ country: e.target.value });
  }
  onBioChange(e) {
    this.setState({ bio: e.target.value });
  }
  // onInstagramChange(e) {
  //   this.setState({ instagram: e.target.value });
  // }
  // onIsTravelingChange(e) {
  //   this.setState({ isTraveling: e.target.value });
  // }
  handleProfileSubmit() {
    helpers.updateUser(this.state)
    .then((user) => {
      // TODO: why doesn't this send back the updated user? Bookshelf question.
      console.log('user after PUT', user);
    });
  }

  handleDeleteUser() {
    helpers.deleteUser().
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

                // TODO instagram={this.state.instagram}
                // TODO isTraveling={this.state.isTraveling}

                onNameChange={this.onNameChange}
                onEmailChange={this.onEmailChange}
                onCityChange={this.onCityChange}
                onCountryChange={this.onCountryChange}
                onBioChange={this.onBioChange}

                // TODO onInstagramChange={this.onInstagramChange}
                // TODO onIsTravelingChange={this.onIsTravelingChange}

                onDeleteUser={this.handleDeleteUser}
                onProfileSubmit={this.handleProfileSubmit}
                preventDefaultSubmit={this.preventDefaultSubmit}
              />
          </div>
      </div>
    </div>
    );
  }
}


export default UserProfile;
