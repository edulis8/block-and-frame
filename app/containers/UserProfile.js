import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import MenuBar from '../components/MenuBar';
import UserInfo from '../components/users/UserInfo';
import UserEventList from '../components/users/UserEventList';


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
      console.log('user in comp did mount', user)
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
        <br />
        <div className="ui two column stackable grid container">
          <div className="sixteen wide column"><br /></div>
          <UserInfo user={this.state} />
          <div className="ten wide column">
            <div className="ui centered header">My Spreads</div>
            <div className="ui segment">
              <UserEventList events={this.state.events} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default UserProfile;
