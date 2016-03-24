import React from 'react';
import JoinEventButton from './JoinEventButton';
// import moment from 'moment'; results in moment not being defined
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
//*TODO: use props.markers[0].position.lat and props.markers[0].position.lng as defaultCenter

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
              className="editButton tiny ui button"
              onClick={props.setEdit}
            >
              Quick edit
            </button>
          :
            <JoinEventButton eventId={props.eventId} />
          }

          <GoogleMapLoader
            containerElement={
              <div
                {...props}
                style={{
                  height: '500px',
                }}
              />
            }
            googleMapElement={
              <GoogleMap
                ref={function (map) { console.log('map', map)}}
                defaultZoom={4}
                defaultCenter={{ lat: 39.3456034, lng: -101.265312 }}
                onClick={props.handleMapClick.bind(this)}
              >
                {props.markers.map((marker, index) => {
                  return (
                    <Marker
                      {...marker}
                      onRightClick={props.handleMarkerRightClick.bind(this, index)}
                    />
                  );
                })}
              </GoogleMap>
            }
          />
      </div>
    </div>
  );
};

export default UniqueEventView;
