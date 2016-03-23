import React from 'react';

const UniqueEventView = (props) => {
  return (
    <div className="ui massive relaxed list">
      <img className="ui tiny circular right floated image" src="http://www.geekstogo.com/forum/public/style_images/shift/profile/xdefault_large.png.pagespeed.ic.-RW8oDYs8z.png" />
      <div className="item">
          <div className="eventName">
            {props.eventName}
          </div>

          <div className="location">
            {props.location}
          </div>

          <div className="host">
            Hosted by {props.hostName}
          </div>

          <div className="description">
            {props.description}
          </div>

          {props.sameEmail ?
            <button
              className="editButton"
              onClick={props.setEdit}
            >
              Edit your spread!
            </button>
          :
            null
          }

        </div>
      </div>
  );
};

export default UniqueEventView;
