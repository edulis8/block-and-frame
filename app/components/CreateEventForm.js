import React, { Component } from 'react';
import ToBringList from '../components/ToBringList';

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

          <div className="field">
            <label>Location:</label>
            <input
              className="location-input"
              placeholder="Where is it?"
              value={this.props.location}
              onChange={this.props.onLocationChange}
            />
          </div>
          <div className="fields">
            <div>
              <label>Date:</label>
              <input
                required
                type="date"
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
            <div className="fourteen wide field">
              <button
                className="to-bring-button ui icon button one wide"
                onClick={this.props.onToBringAdd}
              >
                <i className="plus square icon"></i>
              </button>
              <label>
                Contributions:
              </label>
            </div>
            <div className="two wide field">
              <label>
                You'll bring:
              </label>
            </div>
          </div>

          <div>
            <ToBringList
              toBring={this.props.toBring}
              onItemChange={this.props.onItemChange}
              onNotesChange={this.props.onNotesChange}
              onBringerChange={this.props.onBringerChange}
            />
          </div>

          <button
            className="ui button"
            onClick={this.props.onEventSubmit}
          >Create!
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEventForm;
