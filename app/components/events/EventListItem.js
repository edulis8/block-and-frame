import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class Event extends React.Component {
  render() {
    return (
      <div className="ui massive relaxed list">
        <div className="item">
          <div className="ui very padded text container segment">
            <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
            <Link to={`/${this.props.id}`} className="header">{this.props.name}</Link>
            <div className="location">{this.props.location}</div>
            <div className="host">
              <div>Hosted by {this.props.creator_name || this.props.creator_email}</div>
              <div>{moment(this.props.date).format('MMM Do YYYY')} at {moment(this.props.time, ['H:mm']).format('hh:mm A')}</div>
            </div>
            <div className="description">
              {this.props.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
