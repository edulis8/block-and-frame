import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class UserEventListItem extends Component {
  render() {
    let status = this.props.isHost ? 'host' : 'attend';
    status = moment() > this.props.dateTime ? `${status}ed` : `will ${status}`;
    return (
      <div className="item">
        <div className="content">
          <Link className="header" to={`/${this.props.id}`}>
            {status} {this.props.name}
          </Link>
          <div>{this.props.dateTime.fromNow()}</div>
          <div>{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default UserEventListItem;
