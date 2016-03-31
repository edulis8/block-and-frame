import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class UserEventListItem extends Component {
  render() {
    // Filter out users contributions
    const myContributions = this.props.contributions.filter((contribution) => {
      return contribution.bringer === String(this.props.userId);
    }).map((contribution) => {
      return (<div className="item">{contribution.item}</div>);
    });

    // Format tense of header
    const dateTime = moment(`${this.props.date} ${this.props.time}`);
    let status = this.props.isHost ? 'host' : 'attend';
    status = moment() > dateTime ? `I ${status}ed` : `I'm going to ${status}`;

    return (
      <div className="item">
        <div className="content">
          <div className="ui medium header">
            {status}
            <Link to={`/${this.props.eventId}`}>
              {` ${this.props.name} `}
            </Link>
            {dateTime.fromNow()}
          </div>
          <p className="extra">{this.props.location}</p>
          {myContributions.length > 0 ?
            <div>
              <span>My contributions: </span>
              <div className="ui horizontal bulleted list">{myContributions}</div>
            </div>
          : null}
        </div>
      </div>
    );
  }
}

export default UserEventListItem;
