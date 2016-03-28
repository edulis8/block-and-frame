import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import MenuBar from '../components/MenuBar';
import UserInfo from '../components/users/UserInfo';
import UserEventList from '../components/users/UserEventList';
import instaHelpers from '../utils/instaHelpers';
import InstaUserPics from '../components/instagram/InstaUserPics';

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
      allThisUsersInstaPics: [],
      instagramProfilePicUrl: '',
    };
  }

  componentDidMount() {
    userHelpers.getCurrentUserData()
    .then((user) => {
      console.log('user in comp did mount in user profile', user.data);
      this.setState({
        email: user.data.email,
        username: user.data.username,
        bio: user.data.bio,
        location: user.data.location,
        isTraveling: user.data.is_traveling,
        events: user.data.events,
        instagramProfilePicUrl: user.data.instagram_profile_pic,
      });
      // / get all the users insta pics, to be filtered later to only #spread_out_space
      if (user.data.instagram_token) {
        instaHelpers.getAllThisUsersPics(user.data.instagram_token)
        .then((data) => {
          this.setState({ allThisUsersInstaPics: data.data.data.data });
          console.log('in the state now?', this.state.allThisUsersInstaPics);
        })
        .catch((err) => {
          console.log('error', err);
        });
      }
    });
  }

  render() {
    return (
      <div>
        <MenuBar />
        <br />
        <div className="ui two column stackable grid container">
          <div className="sixteen wide column"><br /></div>
          <div className="six wide column">
          <UserInfo user={this.state} />
          {this.state.allThisUsersInstaPics.map((object, index) => {
            // here is where can set #tag we want:
            if (object.tags.indexOf('spread_out_space') >= 0) {
              return (
                <div className="ui segment">
                  <InstaUserPics 
                    key={index}
                    data={object} 
                  />
                </div>
              );
            }
          })} 
          </div>
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
