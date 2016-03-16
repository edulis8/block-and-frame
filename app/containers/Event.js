import React from 'react';
import { Link } from 'react-router';

class Event extends React.Component {
  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <div className="content">
            <Link to={`/events${this.props.id}`} className="header">{this.props.name}</Link>
            <div className="location">{this.props.location}</div>
            <div className="description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
