import React from 'react';
import JoinEventButton from './JoinEventButton';
import moment from 'moment';

const UniqueEventView = (props) => {
  let button = null;
  if (props.editable) {
    button = (
      <div className="inline fields">
        <button
          className="editButton ui button"
          onClick={props.setEdit}
        >
          Quick edit
        </button>
      </div>
    );
  } else if (props.joinable) {
    button = (
      <JoinEventButton
        eventId={props.eventId}
        contributions={props.contributions}
        handleJoinEventWithContributions={props.handleJoinEventWithContributions}
      />
    );
  }

  return (
    <div className="ui items">
      <div className="eventName ui item">
        <div className="ui large header">
          {props.eventName}
        </div>
      </div>

      <div className="eventHashtag ui item">
        <div className="ui medium header">
          {props.hashtag}
        </div>
      </div>

      <div className="date item">
        <div className="ui small header">
          <p>{moment(`${props.date} ${props.time}`).format('MMMM Do YYYY, h:mm a')}</p>
        </div>
      </div>

      <div className="location item"><i>
        {props.location}
      </i></div>

      <div className="description item">
        {props.description}
      </div>

      { button }
    </div>
  );
};

export default UniqueEventView;
