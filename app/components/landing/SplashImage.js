import React, { Component } from 'react';

class SplashImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="splash">
        <div className="splashBlurb">
          <h1 className="ui introduction header">Introducing Spread Out</h1>
          <h2 className="ui subheader header">Bringing together love of food, exploration and friends you haven't met yet</h2>
        </div>
        <img id="p1" src="https://s3.amazonaws.com/spreadout-img/LandingPage/img1.png" />
        <img id="t1" src="https://s3.amazonaws.com/spreadout-img/LandingPage/t1.png" />
      </div>
    );
  }
}

export default SplashImage;
