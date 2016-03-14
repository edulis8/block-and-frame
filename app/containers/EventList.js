import React from 'react';

class EventList extends React.Component {
  componentDidMount() {
    console.log('EventLists children', this.props);
  }

  render() {
    return (
      <div>
        Event List
      </div>
    );
  }
}

export default EventList;
