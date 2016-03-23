import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';
import userHelpers from '../utils/userHelpers';
import MenuBar from '../components/MenuBar';
import UserEventList from '../components/UserEventList';


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      bio: '',
      location: '',
      isTraveling: null,
      events: [],
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
        events: user.data.events,
      });
    });
  }

  render() {
    return (
      <div>
        <MenuBar />
        <UserInfo user={this.state} />
        <UserEventList events={this.state.events} />
      </div>
    );
  }
}

export default UserProfile;
