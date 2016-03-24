import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const EventMap = (props) => {
  return (
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
  )
}

export default EventMap;
