import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const MapView = (props) => {
  return (
    <div>
      <GoogleMapLoader
        containerElement={
          <div
            {...props}
            style={{
              height: '250px',
              width: '100%',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => { console.log('map', map); }}
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
  );
};

module.exports = MapView;
