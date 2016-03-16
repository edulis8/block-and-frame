import React from 'react';
import axios from 'axios';
import Event from './Event';

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    axios.get('/api/events/')
      .then((response) => {
        console.log(response);
        this.state.data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="eventList">
        test
      </div>
    );
  }
}

export default EventList;
