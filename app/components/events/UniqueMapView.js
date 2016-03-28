import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const UniqueMapView = (props) => {
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
            defaultZoom={4}
            center={props.center}
          >
            {props.markers.map((marker) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        }
      />
    </div>
  );
};

module.exports = UniqueMapView;
