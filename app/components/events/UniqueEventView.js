import React from 'react';
import JoinEventButton from './JoinEventButton';
import moment from 'moment';
import MapView from '../events/MapView';


const UniqueEventView = (props) => {
  return (
    <div className="ui items">
          <div className="eventName item">
            <div className="ui large header">
              {props.eventName}
            </div>

          </div>

          <div className="date item">
            <div className="ui small header">
              <p>{moment(props.date).format('MMM Do YYYY')} at {moment(props.time, ['H:mm']).format('hh:mm A')}</p>
            </div>
          </div>
 
          <div className="location item"><i>
            {props.location}
          </i></div>

          <div className="description item">
            {props.description}
          </div>

          {props.sameEmail ?
            <div className="inline fields">
              <button
                className="editButton ui button"
                onClick={props.setEdit}
              >
                Quick edit
              </button>
              <JoinEventButton
                eventId={props.eventId} 
                contributions={props.contributions}
              />
            </div>
          :
          null }
    </div>
  );
};

export default UniqueEventView;
