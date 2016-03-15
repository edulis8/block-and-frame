import React from 'react';
import Event from './Event';

class EventList extends React.Component {
  componentDidMount() {
    console.log('EventLists children', this.props);
  }

  render() {
    return (
      <Event>.</Event>
    );
  }
}

export default EventList;
