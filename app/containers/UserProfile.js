import React from 'react';
import helpers from '../utils/helpers';
import { Link } from 'react-router';


function MenuBar (props) {
  return (
    <div className="ui attached stackable menu">
  <div className="ui container">
  <Link 
    className="item"
    to={'/app'} >
      <i className="home icon"></i>
      Home
    </Link>
    <a className="item">
      <i className="mail icon"></i> Messages
    </a>
  
    <a className="item">
      <i className="grid layout icon"></i> Host Something Awesome 
    </a>
    
    <div className="ui simple dropdown item right item">
      My Account
      <i className="dropdown icon"></i>
      <div className="menu">
        <Link 
          className="item"
          to={'/profile'} >
            <i className="edit icon"></i>
            Edit Profile
        </Link>
        <a className="item"><i className="globe icon"></i> Choose Language</a>
        <a className="item"><i className="settings icon"></i> Account Settings</a>
      </div>
    </div>
    
  </div>
</div>
  );
}


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      bio: '',
      city: '',
      country: '',
    };
  }
  componentDidMount() {
    // Mock token
    const token = window.localStorage.id;
    helpers.getCurrentUserData(token)
    .then((user) => {
      console.log('USER', user);
      const email = user.data.email;
      const username = user.data.username;
      const bio = user.data.bio;
      const city = user.data.city;
      const country = user.data.country;
      // object literal property value shorthand es6 is awesome:
      this.setState({ email, username, bio, city, country });
    });
  }
  render() {
    return (
      <div>
        <MenuBar />
        <div className="ui raised very padded text container segment">
          <div>
            User Profile:
          </div>
          <div>
            Your email: { this.state.email }
          </div>
          { this.state.username ?
            <p>{ this.state.username }</p> :
            <p>You haven't set a display name</p> }
          <div>
          { this.state.city ? 
            <p>{ this.state.city }</p> : 
            <p>You haven't set a city</p> }
          </div>
          <div>
          { this.state.country ? 
            <p>{ this.state.country }</p> : 
            <p>You haven't set a country</p> }
          </div>
          <div>
          { this.state.bio ? 
            <p>{ this.state.bio }</p> : 
            <p>You haven't set a bio</p> }
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
