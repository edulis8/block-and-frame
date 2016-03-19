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
            <label>Give it a name:</label>
            <input
              value={this.props.name}
              onChange={this.props.onNameChange}
            />
          </div>
          <div className="field">
            <label>Location:</label>
            <input
              value={this.props.location}
              onChange={this.props.onLocationChange}
            />
          </div>
          <div className="field">
            <label>Description:</label>
            <textarea
              value={this.props.description}
              onChange={this.props.onDescriptionChange}
            >
            </textarea>
          </div>


          <div className="inline fields">
            <label>What Can People Contribute?:</label>
            <button
              className="ui icon button"
              onClick={this.props.onToBringAdd}
            >
              <i className="plus square icon"></i>
            </button>
          </div>

          <div id="to-bring">
            <ToBringList
              toBring={this.props.toBring}
              onItemChange={this.props.onItemChange}
              onNotesChange={this.props.onNotesChange}
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