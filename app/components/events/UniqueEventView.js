import React from 'react';
import JoinEventButton from './JoinEventButton';

// import moment from 'moment'; results in moment not being defined


const UniqueEventView = (props) => {
  return (
    <div className="ui massive relaxed list">
      <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
      <div className="item">
          <div className="eventName">
            The Spread's Name: {props.eventName}
          </div>

          <div className="date">
            Date: {props.date}
          </div>

          <div className="time">
            Time: {props.time}
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
              className="editButton"
              onClick={props.setEdit}
            >
              Edit your spread!
            </button>
          :
            <JoinEventButton eventId={props.eventId} />
          }

        </div>
      </div>
  );
};

export default UniqueEventView;
