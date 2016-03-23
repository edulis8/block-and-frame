import React from 'react';
import axios from 'axios';
import Event from '../components/EventListItem';
import MenuBar from '../components/MenuBar';

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  // TODO: factor out request into eventHelpers
  componentDidMount() {
    axios({
      url: '/api/events/',
      method: 'get',
      headers: { Authorization: localStorage.getItem('token') },
    })
    .then((response) => {
      console.log('EVENLISTDATA', response.data);
      this.setState({ data: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div>
          <MenuBar />
          <div>
            No events found.
          </div>
        </div>
      );
    }
    const eventNodes = this.state.data.map((event) => {
      return (
        <Event
          key={event.id}
          name={event.name}
          location={event.location}
          description={event.description}
          id={event.id}
          creator_name={event.users[0] ? event.users[0].username : 'Anonymous' }
          creator_email={event.users[0] ? event.users[0].email : ''}
        >
        .
        </Event>
      );
    });
    return (
      <div>
        <MenuBar />
        <br />
        <div className="ui container">
          <h1 className="ui dividing header">Local Spreads</h1>
        </div>
        <div className="ui segment">
          {eventNodes}
        </div>
      </div>
    );
  }
}

export default EventList;
