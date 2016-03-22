import React from 'react';
import { browserHistory } from 'react-router';

class Site extends React.Component {
  componentDidMount() {
    if (!window.localStorage.token) {
      browserHistory.push('/signin');
    }
  }

  render() {
    return (
      <div className="ui container">
        {this.props.children}
      </div>
    );
  }
}

export default Site;
