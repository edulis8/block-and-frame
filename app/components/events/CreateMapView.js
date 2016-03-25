import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from 'react-google-maps';

class CreateMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: '',
    };
    this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
  }

  handlePlacesChanged() {
    console.log('places changed');
    const places = this.refs.searchBox.getPlaces();
    console.log(places);
    const lat = places[0].geometry.location.lat().toString();
    const lng = places[0].geometry.location.lng().toString();
    const coordinates = lat.concat(',').concat(lng);
    this.props.addMarker(coordinates);
  }

  render() {
    return (
      <div>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              style={{
                height: '250px',
                width: '500px',
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={4}
              center={this.props.center}
              onClick={this.props.addMarker.bind(this)}
            >
              <SearchBox
                className="searchBox"
                ref="searchBox"
                bounds={this.props.bounds}
                controlPosition={google.maps.ControlPosition.TOP_LEFT}
                placeholder="Enter your location (e.g. a park)"
                onPlacesChanged={this.handlePlacesChanged.bind(this)}
              />
              {this.props.markers.map((marker, index) => {
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
  }
}

export default CreateMapView;