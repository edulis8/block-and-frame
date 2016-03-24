import React, { Component } from 'react';
import Event from './UserEventListItem';

// This componet requires a prop events (array)
// The user events can be found response.data.events from GET response object
class UserEventList extends Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        {
          this.props.events.sort((eventA, eventB) => {
            if (new Date(eventA.date) > new Date(eventB.date)) {
              return -1;
            }
            return 1;
          }).map((event) => {
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
