import React from 'react';

class Site extends React.Component {
  componentDidMount() {
    console.log('Sites children', this.props);
  }

  render() {
    return (
      <div>
        Site
        {this.props.children}
      </div>
    );
  }
}

export default Site;
