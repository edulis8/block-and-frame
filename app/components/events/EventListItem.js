import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class Event extends React.Component {
  render() {
    const dateTime = moment(this.props.date)
    .set({
      hour: this.props.time.split(':')[0],
      minute: this.props.time.split(':')[1],
    })
    .add(1, 'day'); // not sure why a day has to be added
    
    return (
          <div className="ui green centered card">
            <div className="content">
              <div className="right floated meta">
                <div>{dateTime.format('MMMM Do YYYY, h:mm:ss a')}</div>
              </div>
              <div className="image host">
                <img className="ui avatar image" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=20&h=20" />
                <div>Hosted by: {this.props.creator_name || this.props.creator_email}</div>
              </div> 
            </div>
            <div>
              <div className="small image">
                <img src="http://placehold.it/50x50" />
              </div>
              <div className="small image">
                <img src="http://placehold.it/150x50" />
              </div>

            </div>

            <div className="content">
              <Link to={`/${this.props.id}`} className="header">{this.props.name}</Link>
              <div className="location">{this.props.location}</div>
              <div className="description">
                {this.props.description}
              </div>
              <div className="extra content">
                 <i className="comment icon"></i>
                  3 comments
              </div>

            </div>

            
          </div>
    );
  }
}

export default Event;

// semantic card:
// <div class="ui card">
//   <div class="content">
//     <div class="right floated meta">14h</div>
//     <img class="ui avatar image" src="/images/avatar/large/elliot.jpg"> Elliot
//   </div>
//   <div class="image">
//     <img>
//   </div>
//   <div class="content">
//     <span class="right floated">
//       <i class="heart outline like icon"></i>
//       17 likes
//     </span>
//     <i class="comment icon"></i>
//     3 comments
//   </div>
//   <div class="extra content">
//     <div class="ui large transparent left icon input">
//       <i class="heart outline icon"></i>
//       <input type="text" placeholder="Add Comment...">
//     </div>
//   </div>
// </div>
