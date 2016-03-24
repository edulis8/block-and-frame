import React from 'react';
import { browserHistory } from 'react-router';

class Site extends React.Component {
  componentDidMount() {
    const path = location.href.split('/').pop();
    if (path !== 'signup' && !window.localStorage.token) {
      browserHistory.push('/signin');
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Site;
