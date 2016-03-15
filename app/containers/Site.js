import React from 'react';

class Site extends React.Component {
  componentDidMount() {
    console.log('Sites children', this.props);
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
