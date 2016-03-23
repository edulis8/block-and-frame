import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';
import userHelpers from '../utils/userHelpers';
import MenuBar from '../components/MenuBar';


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      bio: '',
      location: '',
      isTraveling: null,
    };
  }

  componentDidMount() {
    userHelpers.getCurrentUserData()
    .then((user) => {
      this.setState({
        email: user.data.email,
        username: user.data.username,
        bio: user.data.bio,
        location: user.data.location,
        isTraveling: user.data.is_traveling,
      });
    });
  }

  render() {
    return (
      <div>
        <MenuBar />
        <UserInfo user={this.state} />
      </div>
    );
  }
}

export default UserProfile;
