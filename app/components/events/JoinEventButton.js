import React, { Component } from 'react';
import eventHelpers from '../../utils/eventHelpers';

// This component needs id of event as a prop
class JoinEventButton extends Component {
  constructor(props) {
    super(props);

    this.onJoinEvent = this.onJoinEvent.bind(this);
  }

  onJoinEvent(e) {
    e.preventDefault();
    console.log('Here');
    eventHelpers.joinEvent(this.props.eventId);
  }

  render() {
    return (
      <div className="ui container">
        <button
          className="ui button"
          onClick={this.onJoinEvent}
        >
          Join Spread!
        </button>
      </div>
    );
  }
}

export default JoinEventButton;
