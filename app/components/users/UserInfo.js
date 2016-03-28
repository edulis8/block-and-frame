import React, { Component } from 'react';
import imageHelpers from '../../utils/imageHelpers';

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarURL: props.avatarURL,
    };
  }

  componentWillMount() {
    console.log('ID', this.props.id);
    imageHelpers.getUserAvatar(this.props.id)
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
    return (
      <div className="six wide column">
        <div className="ui card">
          <div className="image">
            <img src={this.state.avatarURL} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.user.username || this.props.user.email}
            </div>
            <div className="meta">
              <i className="marker icon" />
              {this.props.user.location}
            </div>
            <div className="meta">
              <i className="road icon" />
              {
                this.props.user.isTraveling ? 'Currently Traveling' : 'Not Traveling'
              }
            </div>
          </div>
        </div>
        <div className="ui card">
          <div className="content">
          {this.props.user.bio || `${(this.props.user.username || this.props.user.email)} hasnt filled out thier bio`}
        </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
