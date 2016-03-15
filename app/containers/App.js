import React from 'react';
import { Link, browserHistory } from 'react-router';
import EventList from './EventList';

class App extends React.Component {
  componentDidMount() {
    console.log('Apps children', this.props);
  }

  render() {
    return (
      <div>
        <Link to={'/app/events'}>
          Become a Host! <br />
        </Link>
        <Link to={'/users/dummydata'}>
          Profile
        </Link>
        <EventList>list</EventList>
      </div>

    );
  }
}

export default App;
