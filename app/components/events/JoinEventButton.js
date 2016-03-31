import React, { Component } from 'react';
// import eventHelpers from '../../utils/eventHelpers';

// This component needs id of event as a prop
class JoinEventButton extends Component {
  constructor(props) {
    super(props);
    this.onJoinEventWithContributions = this.onJoinEventWithContributions.bind(this);
  }

  onJoinEventWithContributions(e) {
    e.preventDefault();
    // eventHelpers.joinEventWithContributions(this.props.eventId, this.props.contributions);
    this.props.handleJoinEventWithContributions(this.props.eventId, this.props.contributions);
    browserHistory.push(`/${this.props.eventId}`);
  }

  render() {
    return (
      <button
        className="ui button"
        onClick={this.onJoinEventWithContributions}
      >
        Join Spread!
      </button>
    );
  }
}

export default JoinEventButton;
