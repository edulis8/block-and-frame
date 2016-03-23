import React, { Component } from 'react';
import Event from './UserEventListItem';

// This componet requires a prop events (array)
// The user events can be found response.data.events from GET response object
class UserEventList extends Component {
  render() {
    console.log(this.props.events);
    return (
      <div className="ui relaxed divided list">
        {
          this.props.events.map((event) => {
            return (
              <Event
                key={event.id}
                name={event.name}
                location={event.location}
                isHost={event._pivot_is_creator}
                date={event.date}
                id={event.id}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UserEventList;
