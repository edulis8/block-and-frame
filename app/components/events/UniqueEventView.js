import React from 'react';
import JoinEventButton from './JoinEventButton';
// *TODO: use props.markers[0].position.lat and props.markers[0].position.lng as defaultCenter
import moment from 'moment';

const UniqueEventView = (props) => {
  return (
    <div className="ui massive relaxed list">
      <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
      <div className="item">
          <div className="eventName">
            The Spread's Name: {props.eventName}
          </div>

          <div className="date">
            Date: {moment(props.date).format('MMM Do YYYY')}
          </div>
 
          <div className="time">
            Time: {moment(props.time, ['H:mm']).format('hh:mm A')}
          </div>

          <div className="location">
            Where to meet: {props.location}
          </div>

          <div className="host">
            Hosted by {props.hostName()}
          </div>

          <div className="description">
            Description: {props.description}
          </div>

          {props.sameEmail ?
            <button
              className="editButton tiny ui button"
              onClick={props.setEdit}
            >
              Quick edit
            </button>
          :
            <JoinEventButton
              eventId={props.eventId} 
              contributions={props.contributions}
            />
          }
          
      </div>
    </div>
  );
};

export default UniqueEventView;
