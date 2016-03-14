import React from 'react';

class App extends React.Component {
  componentDidMount() {
    console.log('Apps children', this.props);
  }

  render() {
    return (
      <div>
        App
        {this.props.children}
      </div>
    );
  }
}

export default App;
