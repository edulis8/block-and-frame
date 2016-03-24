import React, { Component } from 'react';
import { Link } from 'react-router';

class UserEventListItem extends Component {
  render() {
    let status = this.props.isHost ? 'host' : 'attend';
    status = new Date > new Date(this.props.date) ? `${status}ed` : `will ${status}`;
    return (
      <div className="item">
        <div className="content">
          <Link className="header" to={`/${this.props.id}`}>
            {status} {this.props.name}
          </Link>
          <div>{this.props.date ? this.props.date.split('T')[0] : null}</div>
          <div>{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default UserEventListItem;
