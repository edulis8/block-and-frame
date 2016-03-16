import React from 'react';
import { Link } from 'react-router';

class Event extends React.Component {
  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <div className="content ui segment">
            <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
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
