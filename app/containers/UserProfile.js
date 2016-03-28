import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import imageHelpers from '../utils/imageHelpers';
import MenuBar from '../components/MenuBar';
import UserInfo from '../components/users/UserInfo';
import UserEventList from '../components/users/UserEventList';


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      email: '',
      username: '',
      bio: '',
      location: '',
      isTraveling: null,
      avatarURL: 'https://s3.amazonaws.com/spreadout-img/avatar.png',
      events: [],
    };
  }

  componentDidMount() {
    userHelpers.getCurrentUserData()
    .then((user) => {
      console.log('user info', user);
      this.setState({
        id: user.data.id,
        email: user.data.email,
        username: user.data.username,
        bio: user.data.bio,
        location: user.data.location,
        isTraveling: user.data.is_traveling,
        events: user.data.events,
      });
    });

    imageHelpers.getUserAvatar(this.state.id)
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

  render() {
    console.log('USER ID', this.state.id);
    return (
      <div>
        <MenuBar />
        <br />
        <div className="ui two column stackable grid container">
          <div className="sixteen wide column"><br /></div>
          <UserInfo user={this.state} avatarURL={this.state.avatarURL} />
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
