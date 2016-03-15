import React from 'react';
import App from './App';

class Site extends React.Component {
  componentDidMount() {
    console.log('Sites children', this.props);
  }

  render() {
    return (
      <div>
        <App>Site</App>
      </div>
    );
  }
}

export default Site;
