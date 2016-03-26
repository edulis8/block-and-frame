import React, { Component } from 'react';
import ToBringList from './ToBringList';
import CreateMapView from './CreateMapView';

class CreateEventForm extends Component {
  render() {
    return (
      <div className="ui container">
        <form
          className="ui form"
          onSubmit={this.props.preventDefaultSubmit}
        >

          <div className="field">
            <label>Name:</label>
            <input
              className="name-input"
              placeholder="Give it a name!"
              value={this.props.name}
              onChange={this.props.onNameChange}
            />
          </div>

          <div className="map">
            Select where you're hosting this spread by typing in the location!
            <CreateMapView 
              markers={this.props.markers}
              addMarker={this.props.addMarker}
              handleBoundsChanged={this.props.handleBoundsChanged}
              center={this.props.center}
              onPlacesChanged={this.props.onPlacesChanged}
            />
          </div>
          
          <div className="fields">
            <div>
              <label>Date:</label>
              <input
                required
                type="date"
                min={this.props.minDate}
                className="date-input"
                value={this.props.date}
                onChange={this.props.onDateChange}
              />
            </div>
              <div>
                <label>Time:</label>
                <input
                  required
                  type="time"
                  className="time-input"
                  value={this.props.time}
                  onChange={this.props.onTimeChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Description:</label>
              <textarea
                className="description-input"
                placeholder="Whats the spread about?"
                value={this.props.description}
                onChange={this.props.onDescriptionChange}
              >
              </textarea>
            </div>

          <div className="inline fields">
            <div >
              <button
                className="to-bring-button ui icon button one wide"
                onClick={this.props.onToBringAdd}
              >
                <i className="plus icon"></i>
              </button>
              <button
                className="ui icon button"
                onClick={this.props.onToBringRemove}
              >
                <i className="remove icon"></i>
              </button>
              What should people bring?
            </div>
          </div>

          <div>
            <ToBringList
              toBring={this.props.toBring}
              onItemChange={this.props.onItemChange}
              onNotesChange={this.props.onNotesChange}
              onBringerChange={this.props.onBringerChange}
              onToBringRemove={this.props.onToBringRemove}
            />
          </div>

          <button
            className="ui button"
            onClick={this.props.onEventSubmit}
          >
            Create the Spread!
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEventForm;
